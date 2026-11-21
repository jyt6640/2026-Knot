# Knot Mac 본창

프론트엔드 폴더에서 `pnpm install --frozen-lockfile`을 실행한다. 한 터미널에서 `API_MOCKING=true pnpm dev --no-open`으로 웹 앱을 띄우고, 다른 터미널에서 `pnpm desktop`으로 같은 앱을 연다. Electron은 첫 실행 때 해당 플랫폼의 바이너리를 내려받는다.

개발 기본 주소는 `http://localhost:3000`이다. 실제 서버를 사용할 때는 현재 React 번들이 배포된 개인 Knot의 HTTPS 주소를 `KNOT_DESKTOP_URL`로 지정한다. 로그인과 API 요청은 해당 웹 배포의 설정을 따른다.

빨간 닫기 버튼은 창을 숨긴다. Dock에서 Knot을 선택하면 같은 창이 열린다. 녹음 중 ⌘Q를 누르면 계속 녹음하거나 오디오 저장 후 종료할 수 있다. 저장에 실패하면 같은 녹음으로 다시 시도한다.

macOS에서 `pnpm test:desktop`을 실행하면 별도 프로필, 테스트 마이크와 모의 API로 창 닫기·복귀 및 종료를 검증한다. 공개 설치 파일은 이 저장소의 이슈 #5에서 다룬다.

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
