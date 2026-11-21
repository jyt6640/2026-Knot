# Knot Mac 본창

프론트엔드 폴더에서 `pnpm install --frozen-lockfile`을 실행한다. 한 터미널에서 `API_MOCKING=true pnpm dev --no-open`으로 웹 앱을 띄우고, 다른 터미널에서 `pnpm desktop`으로 같은 앱을 연다. Electron은 첫 실행 때 해당 플랫폼의 바이너리를 내려받는다.

개발 기본 주소는 `http://localhost:3000`이다. 실제 서버를 사용할 때는 현재 React 번들이 배포된 개인 Knot의 HTTPS 주소를 `KNOT_DESKTOP_URL`로 지정한다. 로그인과 API 요청은 해당 웹 배포의 설정을 따른다.

빨간 닫기 버튼은 창을 숨긴다. Dock에서 Knot을 선택하면 같은 창이 열린다. 녹음 중 ⌘Q를 누르면 계속 녹음하거나 오디오 저장 후 종료할 수 있다. 저장에 실패하면 같은 녹음으로 다시 시도한다.

macOS에서 `pnpm test:desktop`을 실행하면 별도 프로필, 테스트 마이크와 모의 API로 창 닫기·복귀 및 종료를 검증한다. 공개 버전은 [Knot Releases](https://github.com/jyt6640/2026-Knot/releases)에서 받는다.

## 마이크 권한을 패키징한 앱에서 확인하기

`KNOT_DESKTOP_URL=https://<개인-Knot-프론트-주소> pnpm package:mac`은 지정한 화면을 여는 로컬 QA용 `dist-desktop/Knot-darwin-<arch>/Knot.app`을 만든다. 이 주소는 빌드 시 앱에 기록된다. 앱의 번들 ID는 `com.jyt6640.knot`이다.

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

1. 저장소 Actions 변수 `KNOT_DESKTOP_URL`에 로그인과 녹음 저장이 가능한 개인 Knot 운영 HTTPS 주소를 지정한다. Actions secrets에 Developer ID Application 인증서와 개인 키를 내보낸 PKCS#12의 Base64(`MAC_CERT_P12`), 암호(`MAC_CERT_PASSWORD`), App Store Connect 팀 API 키 원문(`MAC_NOTARY_KEY_P8`), 키 ID(`MAC_NOTARY_KEY_ID`), 발급자 UUID(`MAC_NOTARY_ISSUER`)를 등록한다.
2. 기본 브랜치에서 Actions → **macOS DMG** → **Run workflow**를 선택하고 새 버전(예: `1.0.0`)을 입력한다. 각 Mac 러너가 해당 CPU용 앱을 서명하고 DMG를 공증한다. Gatekeeper와 설치 경로를 확인하면 `mac-v<버전>` 초안 릴리스에 두 파일이 올라간다.
3. Apple Silicon Mac과 Intel Mac 각각에서 저장소 계정으로 초안의 Assets를 브라우저로 다운로드한다.  → 이 Mac에 관하여의 칩이 Apple M 계열이면 `arm64`, Intel이면 `x64`를 고른다. `shasum -a 256 <다운로드한 DMG>` 결과를 기록한다. DMG를 열고 Knot을 Applications로 드래그한 뒤 디스크 이미지를 추출한다.
4. 각 Mac에서 응용 프로그램의 Knot을 처음 실행하고 마이크를 허용한다. 한 문장을 녹음하고 ⌘Q에서 종료를 확인한다. 앱이 저장 후 종료되는지와 같은 계정으로 다시 연 문서에서 마지막 발화까지 저장됐는지 확인한다. 두 결과를 해당 버전의 QA 기록에 남긴다.
5. 두 실기기 QA가 통과하면 `frontend/`에서 아래 명령을 실행한다. 검증한 두 해시와 일치하는 초안을 공개하고, 공개 URL 두 개를 인증 없이 다시 내려받아 SHA-256을 대조한다. 공개 뒤 다운로드만 중단됐다면 같은 명령으로 다시 확인한다.

```sh
bash electron/publish-dmg.sh <버전> <Apple-Silicon-QA-SHA256> <Intel-QA-SHA256>
```

PR에서는 두 기종의 러너가 테스트용 HTTPS 주소로 임시 서명된 `-test.dmg`를 만들고 마운트한다. 격리된 Applications 폴더로 복사하고 이미지를 추출한 뒤 설치한 앱에서 녹음 E2E를 실행한다.
