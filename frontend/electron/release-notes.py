"""Prepare notes for the exact commit that produced both macOS installers."""
import json
import os
from pathlib import Path
import re
import subprocess
import sys


SEMVER = re.compile(r"v(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)")


def version(tag):
    match = SEMVER.fullmatch(tag)
    return tuple(map(int, match.groups())) if match else None


def next_release(tags, requested):
    versions = [version(tag) for tag in tags if version(tag)]
    if not versions:
        raise ValueError("기준 버전 태그가 없습니다.")
    previous = max(versions)
    target = version("v" + requested) if requested else (previous[0], previous[1] + 1, 0)
    if not target or target <= previous:
        raise ValueError("기존 버전보다 큰 X.Y.Z를 지정하세요.")
    return tuple("v" + ".".join(map(str, item)) for item in (previous, target))


def git(*args):
    return subprocess.check_output(["git", *args], text=True).strip()


def prepare():
    repo = os.environ["GITHUB_REPOSITORY"]
    sha = git("rev-parse", "HEAD")
    previous, tag = next_release(git("tag", "--list").splitlines(), os.getenv("VERSION", ""))
    subprocess.run(["git", "merge-base", "--is-ancestor", previous, sha], check=True)
    headline = os.environ["HEADLINE"].strip()
    if not headline or len(headline) > 100 or not headline.isprintable():
        raise ValueError("변경 요약을 한 줄로 입력하세요 (100자 이하).")
    title = f"[Release] {tag} {headline}"
    revision = f"{previous}..{sha}"
    commits = set(git("rev-list", revision).splitlines())
    if not commits:
        raise ValueError("이전 버전 이후 변경이 없습니다.")
    pages = json.loads(subprocess.check_output([
        "gh", "api", "--paginate", "--slurp",
        f"repos/{repo}/pulls?state=closed&per_page=100",
    ]))
    prs = sorted((p for page in pages for p in page
                  if p["merged_at"] and p["merge_commit_sha"] in commits), key=lambda p: p["number"])
    head_pr = next((pr for pr in prs if pr["merge_commit_sha"] == sha), None)
    if head_pr:
        title += f" (#{head_pr['number']})"
    areas = [f"{area} {sum(p['title'].startswith(f'[{area}]') for p in prs)}" for area in ("FE", "BE")]
    compare = f"https://github.com/{repo}/compare/{previous}...{sha}"
    added = git("diff", "--name-only", "--diff-filter=A", revision).splitlines()
    migrations = [Path(f).name.split("__")[0] for f in added if re.fullmatch(r".*/db/migration/V\d+__.*\.sql", f)]
    adrs = [Path(f).name.split("-")[0] for f in added if re.fullmatch(r"backend/docs/adr/\d+-.*\.md", f)]
    adrs.sort(key=int)
    issue_ids = sorted({int(n) for p in prs for n in re.findall(
        r"(?im)^\s*(?:-\s*)?(?:closes|fixes|resolves)\s+#(\d+)\b", p["body"] or "")})
    notes = ["## 관련 이슈", "", " · ".join(f"#{i}" for i in issue_ids) or "연결된 이슈 없음",
             "", "## 작업 내용", "", f"Knot {tag} · {headline}", "",
             "| 항목 | 값 |", "| --- | --- |", f"| 이 저장소에서 병합된 PR | {len(prs)}건 ({', '.join(areas)}) |",
             f"| 변경 파일 | {git('diff', '--shortstat', revision)} |",
             f"| 추가된 DB migration | {', '.join(migrations) or '없음'} |",
             f"| 추가된 ADR | {', '.join(adrs) or '없음'} |", ""]
    notes.extend(f"- {p['title']} (#{p['number']})" for p in prs)
    notes.extend(["", "### 참고 사항", "", f"빌드 커밋 · `{sha[:12]}`", "", f"[{previous} 이후 전체 변경]({compare})", "", "### 설치 방법", "",
                  f"- Apple Silicon (M 시리즈) · `Knot-{tag[1:]}-arm64.dmg`",
                  f"- Intel · `Knot-{tag[1:]}-x64.dmg`",
                  "", "아래 Assets에서 칩에 맞는 DMG를 열고 Knot을 응용 프로그램으로 드래그하세요.",
                  "첫 로그인 후 오프라인에서도 이 Mac의 녹음을 열 수 있습니다.", ""])
    Path(sys.argv[1]).write_text("\n".join(notes), encoding="utf-8")
    with open(os.environ["GITHUB_OUTPUT"], "a", encoding="utf-8") as outputs:
        print(f"version={tag[1:]}\ntitle={title}", file=outputs)


if __name__ == "__main__":
    prepare()
