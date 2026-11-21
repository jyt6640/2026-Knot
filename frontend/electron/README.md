# Knot Mac 본창

프론트엔드 폴더에서 `pnpm install --frozen-lockfile` 후 `pnpm desktop`을 실행한다. 홈과 녹음 화면, 오디오 수집기는 앱에 포함된다. 첫 로그인과 로그아웃 후 재로그인에는 Knot 서버 연결이 필요하다. `KNOT_DESKTOP_URL`은 웹 로그인 주소이며 개발 기본값은 `http://localhost:3000`이다. 회원 확인 API가 별도 호스트에 있으면 `KNOT_DESKTOP_API_URL`도 설정한다.

로그인 상태의 Mac은 오프라인으로 다시 열 수 있다. 원음은 Electron 사용자 데이터의 `recordings/<서버별 디렉터리>/<회원 ID>/<녹음 ID>.knot`에 저장한다. SQLite가 5초 단위로 암호화된 PCM을 커밋하고, 녹음을 끝낼 때 마지막 짧은 구간도 저장한다. 강제 종료 후에는 마지막 커밋까지 재생할 수 있다. 계정별 키는 macOS 키체인을 사용하는 Electron safeStorage로 보호한다. 로그아웃하면 원본을 잠그고, 같은 계정으로 다시 로그인하면 목록과 재생을 복원한다. ‘이 Mac에서 삭제’는 확인한 녹음 파일과 그 안의 메타데이터를 지운다.

빨간 닫기 버튼은 창을 숨긴다. Dock에서 Knot을 선택하면 같은 창이 열린다. 녹음 중 ⌘Q를 누르면 계속 녹음하거나 오디오 저장 후 종료할 수 있다. 저장에 실패하면 같은 녹음으로 다시 시도한다.

macOS에서 `pnpm test:desktop`을 실행하면 별도 프로필, 테스트 마이크와 모의 API로 창 닫기·복귀 및 종료를 검증한다. 공개 버전은 [Knot Releases](https://github.com/jyt6640/2026-Knot/releases)에서 받는다.

## 마이크 권한을 패키징한 앱에서 확인하기

`KNOT_DESKTOP_URL=https://<개인-Knot-프론트-주소> pnpm package:mac`은 로컬 화면과 지정한 로그인 주소를 포함한 로컬 QA용 `dist-desktop/Knot-darwin-<arch>/Knot.app`을 만든다. 이 주소는 빌드 시 앱에 기록된다. 앱의 번들 ID는 `com.jyt6640.knot`이다.

자동 검증은 아래와 같이 실행한다. 테스트용 HTTPS 서버가 별도로 뜨고, 실제 앱에서 로컬 API와 가상 마이크를 사용한다. 테스트가 macOS 권한 응답을 제어한다.

```sh
KNOT_DESKTOP_URL=https://localhost:3182 pnpm package:mac
KNOT_TEST_APP="$PWD/dist-desktop/Knot-darwin-$(node -p 'process.arch')/Knot.app" pnpm test:desktop
```

실기기 검토는 개인 Knot 주소로 만든 앱을 Finder에서 열고, 마이크 권한 이력이 없는 테스트 계정에서 진행한다.

1. 홈에서 처음 녹음을 누르면 macOS가 Knot의 마이크 접근을 요청한다. 거부하고 홈에 녹음 시간이나 새 세션이 생기지 않는지 확인한다.
2. 시스템 설정 → 개인정보 보호 및 보안 → 마이크에서 Knot을 허용한다. macOS가 재실행을 요구하면 앱을 종료하고 다시 연다. 녹음을 눌러 한 문장을 말한 뒤 한 세션에 해당 음성이 저장됐는지 확인한다.
3. 권한 이력이 없는 다른 테스트 계정에서 최초 허용도 확인한다. 사용 가능한 입력 장치가 없는 환경에서는 마이크 연결 안내가 나오는지 확인한다.

녹음 중 메뉴 막대의 Knot을 누르면 같은 세션의 파형과 일시정지·재개 버튼이 열린다. 녹음 끝내기를 누르면 본창의 기존 확인창으로 돌아온다. 팝오버를 닫거나 다른 앱으로 전환해도 녹음은 계속된다.

여러 모니터를 사용하는 로컬 Mac에서는 위 테스트 명령에 `KNOT_TEST_INTERNAL_DISPLAY=1`을 함께 지정하면 본창과 팝오버가 처음부터 맥북 내장 화면에 열린다.

## macOS 배포

1. 저장소 Actions 변수 `KNOT_DESKTOP_URL`에 개인 Knot의 운영 웹 로그인 HTTPS 주소를 지정한다. 회원 API가 별도 origin이면 변수 `KNOT_DESKTOP_API_URL`에 해당 운영 HTTPS 주소도 지정한다. Actions secrets에 Developer ID Application 인증서와 개인 키를 내보낸 PKCS#12의 Base64(`MAC_CERT_P12`), 암호(`MAC_CERT_PASSWORD`), App Store Connect 팀 API 키 원문(`MAC_NOTARY_KEY_P8`), 키 ID(`MAC_NOTARY_KEY_ID`), 발급자 UUID(`MAC_NOTARY_ISSUER`)를 등록한다.
2. 기본 브랜치에서 Actions → **macOS DMG** → **Run workflow**를 선택하고 변경 요약을 입력한다. 버전을 비우면 가장 높은 정식 `vX.Y.Z` 태그에서 minor를 올린다(예: `v0.7.0` → `v0.8.0`). 패치나 메이저 릴리스는 원하는 버전을 직접 입력한다. 각 Mac 러너가 해당 CPU용 앱을 서명하고 DMG를 공증한다. Gatekeeper와 설치 경로를 확인하면 `v<버전>` 초안 릴리스에 두 파일이 올라간다. 제목은 `[Release] v<버전> <변경 요약>`이며 본문에 해당 커밋 범위의 변경과 설치 방법, 두 파일의 SHA-256이 들어간다.
3. Apple Silicon Mac과 Intel Mac 각각에서 저장소 계정으로 초안의 Assets를 브라우저로 다운로드한다.  → 이 Mac에 관하여의 칩이 Apple M 계열이면 `arm64`, Intel이면 `x64`를 고른다. `shasum -a 256 <다운로드한 DMG>` 결과를 기록한다. DMG를 열고 Knot을 Applications로 드래그한 뒤 디스크 이미지를 추출한다.
4. 각 Mac에서 응용 프로그램의 Knot을 처음 실행하고 마이크를 허용한다. 한 문장을 녹음하고 ⌘Q에서 종료를 확인한다. 앱이 저장 후 종료되는지와 오프라인으로 다시 연 로컬 목록에서 마지막 발화까지 저장됐는지 확인한다. 두 결과를 해당 버전의 QA 기록에 남긴다.
5. 두 실기기 QA가 통과하면 Actions → **macOS 검증본 공개**에 버전과 두 SHA-256을 입력한다. 실행 요약에 기종별 직접 다운로드 링크가 표시된다. 로컬에서는 `frontend/`에서 아래 명령으로 같은 검증을 실행할 수 있다. 검증한 두 해시와 일치하는 초안을 공개하고, 공개 URL 두 개를 인증 없이 다시 내려받아 SHA-256을 대조한다. 공개 뒤 다운로드만 중단됐다면 같은 명령으로 다시 확인한다.

```sh
bash electron/publish-dmg.sh <버전> <Apple-Silicon-QA-SHA256> <Intel-QA-SHA256>
```

PR에서는 두 기종의 러너가 테스트용 HTTPS 주소로 임시 서명된 `-test.dmg`를 만들고 마운트한다. 격리된 Applications 폴더로 복사하고 이미지를 추출한 뒤 설치한 앱에서 녹음 E2E를 실행한다.

Apple Developer 멤버십 없이 검증용 DMG를 배포할 때는 **macOS DMG**의 배포 유형에서 `preview`를 선택한다. 운영 로그인 주소는 동일하게 설정한다. 두 기종에서 DMG 복사, CPU·버전·ad-hoc 서명 확인, 새 프로필의 로그인 화면 실행을 검증하고 GitHub Releases 초안을 프리릴리스로 표시한다. 실기기 검증과 두 해시를 대조하는 공개 절차는 정식 배포와 같다. Preview 첫 실행은 Gatekeeper에서 차단될 수 있다.
