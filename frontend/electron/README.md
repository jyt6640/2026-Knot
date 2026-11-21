# Knot Mac 본창

프론트엔드 폴더에서 `pnpm install --frozen-lockfile`을 실행한다. 한 터미널에서 `API_MOCKING=true pnpm dev --no-open`으로 웹 앱을 띄우고, 다른 터미널에서 `pnpm desktop`으로 같은 앱을 연다. Electron은 첫 실행 때 해당 플랫폼의 바이너리를 내려받는다.

개발 기본 주소는 `http://localhost:3000`이다. 실제 서버를 사용할 때는 현재 React 번들이 배포된 개인 Knot의 HTTPS 주소를 `KNOT_DESKTOP_URL`로 지정한다. 로그인과 API 요청은 해당 웹 배포의 설정을 따른다.

빨간 닫기 버튼은 창을 숨긴다. Dock에서 Knot을 선택하면 같은 창이 열린다. 녹음 중 ⌘Q를 누르면 계속 녹음하거나 오디오 저장 후 종료할 수 있다. 저장에 실패하면 같은 녹음으로 다시 시도한다.

macOS에서 `pnpm test:desktop`을 실행하면 별도 프로필, 테스트 마이크와 모의 API로 창 닫기·복귀 및 종료를 검증한다. 공개 설치 파일은 이 저장소의 이슈 #5에서 다룬다.
