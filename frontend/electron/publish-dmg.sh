#!/bin/bash
# Arguments are the SHA-256 values recorded on the two Macs after real installation QA.
set -euo pipefail
repo=jyt6640/2026-Knot
version=${1:?버전과 Apple Silicon, Intel 실기기 QA에서 확인한 SHA-256 두 개를 지정하세요}
arm_hash=${2:?Apple Silicon QA SHA-256}
intel_hash=${3:?Intel QA SHA-256}
[[ "$version" =~ ^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$ ]]
[[ "$arm_hash" =~ ^[a-f0-9]{64}$ && "$intel_hash" =~ ^[a-f0-9]{64}$ ]]
tag="mac-v$version"
arm="Knot-$version-arm64.dmg"
intel="Knot-$version-x64.dmg"
release=$(gh release view "$tag" -R "$repo" --json databaseId,isDraft,assets)
# Bind QA to these exact assets. Reject partial and extra uploads.
jq -e --arg arm "$arm" --arg intel "$intel" --arg a "sha256:$arm_hash" --arg i "sha256:$intel_hash" '
  (.assets | length == 2)
  and any(.assets[]; .name == $arm and .digest == $a)
  and any(.assets[]; .name == $intel and .digest == $i)
' <<<"$release" >/dev/null
if [[ $(jq -r .isDraft <<<"$release") == true ]]; then
  gh api -X PATCH "repos/$repo/releases/$(jq -r .databaseId <<<"$release")" -F draft=false --silent
fi

# Re-running after a network failure only verifies the already published assets.
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
cd "$work"
for asset in "$arm" "$intel"; do
  curl -q --fail --location --retry 4 --retry-all-errors --output "$asset" "https://github.com/$repo/releases/download/$tag/$asset"
done
printf '%s  %s\n' "$arm_hash" "$arm" "$intel_hash" "$intel" | shasum -a 256 --check
printf 'https://github.com/%s/releases/tag/%s\n' "$repo" "$tag"
