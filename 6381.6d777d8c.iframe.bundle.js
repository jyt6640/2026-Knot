"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6381],{"./src/shared/api/queries/useWorkspacesQuery/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _api_fetch_api_v1_workspaces__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/api/fetch/api/v1/workspaces/index.ts"),_api_queryKey_workspace__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/api/queryKey/workspace.ts"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useQuery.js");const __WEBPACK_DEFAULT_EXPORT__=({isEnabled=!0}={})=>(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.I)({queryKey:_api_queryKey_workspace__WEBPACK_IMPORTED_MODULE_1__.O.list(),queryFn:_api_fetch_api_v1_workspaces__WEBPACK_IMPORTED_MODULE_0__.xH,enabled:isEnabled});__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/api/queryKey/workspace.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){const workspaceKeys={members:workspaceId=>["workspaces","members",workspaceId],all:["workspaces"],list:()=>[...workspaceKeys.all,"list"],detail:workspaceId=>[...workspaceKeys.all,"detail",workspaceId],ownershipTransferCandidates:workspaceId=>[...workspaceKeys.all,"ownershipTransferCandidates",workspaceId]};__webpack_require__.d(__webpack_exports__,["O",0,workspaceKeys])},"./src/shared/components/primitives/ui/Button/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>Button});var _emotion_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_shared_components_primitives_ui_Spinner__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/components/primitives/ui/Spinner/index.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const BUTTON_SIZE={lg:{paddingX:"1.25rem",paddingY:"1rem",borderRadius:"0.875rem",gap:"0.5rem",iconSize:"1.5rem",spinnerSize:"1.5rem"},md:{paddingX:"1.125rem",paddingY:"0.75rem",borderRadius:"0.8125rem",gap:"0.4375rem",iconSize:"1.125rem",spinnerSize:"1.375rem"},sm:{paddingX:"1rem",paddingY:"0.5rem",borderRadius:"0.75rem",gap:"0.375rem",iconSize:"1rem",spinnerSize:"1.25rem"}};function Button({size="md",variant="filled",isLoading=!1,isFullWidth=!1,disabled=!1,type="button",children,...props}){const status=isLoading?"loading":disabled?"inactive":"active";return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(Root,{type,disabled:disabled||isLoading,"aria-busy":isLoading,$size:size,$variant:variant,$status:status,$isFullWidth:isFullWidth,...props,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(Content,{$isHidden:isLoading,$size:size,children}),isLoading&&(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(SpinnerWrapper,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_shared_components_primitives_ui_Spinner__WEBPACK_IMPORTED_MODULE_2__.A,{size:BUTTON_SIZE[size].spinnerSize})})]})}const Root=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition:
    background-color 0.3s ease-in,
    color 0.3s ease-in,
    box-shadow 0.3s ease-in;

  ${({theme})=>theme.text.label01};

  width: ${({$isFullWidth})=>$isFullWidth?"100%":"auto"};
  padding: ${({$size})=>`${BUTTON_SIZE[$size].paddingY} ${BUTTON_SIZE[$size].paddingX}`};
  border-radius: ${({$size})=>BUTTON_SIZE[$size].borderRadius};

  ${({theme,$variant,$status})=>(theme=>({filled:{active:_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
        background-color: ${theme.primary};
        color: ${theme.neutral[0]};
      `,loading:_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
        background-color: ${theme.primary};
        color: ${theme.neutral[0]};
      `,inactive:_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
        background-color: ${theme.neutral[200]};
        color: ${theme.neutral[400]};
      `},outline:{active:_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
        background-color: ${theme.neutral[0]};
        color: ${theme.neutral[700]};
        box-shadow: inset 0 0 0 1px ${theme.neutral[200]};
      `,loading:_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
        background-color: ${theme.neutral[0]};
        color: ${theme.neutral[700]};
        box-shadow: inset 0 0 0 1px ${theme.neutral[200]};
      `,inactive:_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
        background-color: ${theme.neutral[0]};
        color: ${theme.neutral[400]};
        box-shadow: inset 0 0 0 1px ${theme.neutral[200]};
      `},accent:{active:_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
        background-color: ${theme.sub.accent[100]};
        color: ${theme.sub.accent[500]};
      `,loading:_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
        background-color: ${theme.sub.accent[100]};
        color: ${theme.sub.accent[500]};
      `,inactive:_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
        background-color: ${theme.neutral[200]};
        color: ${theme.neutral[400]};
      `},danger:{active:_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
        background-color: ${theme.sub.warning[600]};
        color: ${theme.neutral[0]};
      `,loading:_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
        background-color: ${theme.sub.warning[600]};
        color: ${theme.neutral[0]};
      `,inactive:_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
        background-color: ${theme.neutral[200]};
        color: ${theme.neutral[400]};
      `}}))(theme)[$variant][$status]};

  /* 포커스 링 아웃라인 논의 필요 */
  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }
`,Content=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.span`
  display: inline-flex;
  align-items: center;
  gap: ${({$size})=>BUTTON_SIZE[$size].gap};
  opacity: ${({$isHidden})=>$isHidden?0:1};

  & > svg {
    flex-shrink: 0;
    width: ${({$size})=>BUTTON_SIZE[$size].iconSize};
    height: ${({$size})=>BUTTON_SIZE[$size].iconSize};
  }
`,SpinnerWrapper=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;Button.__docgenInfo={description:"액션을 실행하는 버튼.",methods:[],displayName:"Button",props:{size:{required:!1,tsType:{name:"union",raw:'"lg" | "md" | "sm"',elements:[{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"filled" | "outline" | "accent" | "danger"',elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"filled"',computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isFullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:'"button"',computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]}},"./src/shared/components/primitives/ui/InlineError/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>InlineError});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_primitives_ui_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/components/primitives/ui/Button/index.tsx"),_assets_icons_alert_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/assets/icons/alert.svg"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const ALIGN={start:"flex-start",center:"center"},SIZE={md:{iconSize:18,messageGap:"0.5rem",gap:"0.75rem"},sm:{iconSize:16,messageGap:"0.375rem",gap:"0.625rem"}};function InlineError({message,onRetry,isRetrying=!1,align="start",size="md"}){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(Container,{role:"alert",$align:align,$size:size,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(MessageRow,{$size:size,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(Icon,{"aria-hidden":!0,size:SIZE[size].iconSize}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(Message,{$size:size,children:message})]}),void 0!==onRetry&&("sm"===size?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(SmallRetryButton,{type:"button",disabled:isRetrying,onClick:onRetry,children:"다시 시도"}):(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_primitives_ui_Button__WEBPACK_IMPORTED_MODULE_1__.A,{size:"sm",variant:"outline",isLoading:isRetrying,onClick:onRetry,children:"다시 시도"}))]})}const Container=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div`
  display: flex;
  flex-direction: column;
  align-items: ${({$align})=>ALIGN[$align]};
  gap: ${({$size})=>SIZE[$size].gap};
`,MessageRow=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div`
  display: flex;
  align-items: center;
  gap: ${({$size})=>SIZE[$size].messageGap};
`,Icon=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A)(_assets_icons_alert_svg__WEBPACK_IMPORTED_MODULE_2__.A)`
  flex-shrink: 0;
  color: ${({theme})=>theme.sub.warning[700]};
`,Message=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.p`
  ${({theme,$size})=>"sm"===$size?theme.text.caption02:theme.text.body01};
  color: ${({theme})=>theme.neutral[700]};
  overflow-wrap: break-word;
`,SmallRetryButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.button`
  ${({theme})=>theme.text.caption01};
  padding: 0.375rem 0.75rem; /* 6px 12px */
  border-radius: 62.4375rem; /* 999px */
  background-color: ${({theme})=>theme.neutral[0]};
  box-shadow: inset 0 0 0 1px ${({theme})=>theme.neutral[200]};
  color: ${({theme})=>theme.neutral[700]};
  white-space: nowrap;

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }
`;InlineError.__docgenInfo={description:'화면 안 한 영역이나 한 동작만 실패했을 때, 그 내용이 있어야 할 자리에 남기는 안내.\n\n경고색은 아이콘에만 쓰고 문구는 본문 색이에요.\n같은 실패를 토스트로 또 알리지 않아요.\n낭독기가 바로 읽도록 `role="alert"`를 붙였어요.',methods:[],displayName:"InlineError",props:{message:{required:!0,tsType:{name:"string"},description:"무엇이 안 됐는지 알리는 문구"},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"`다시 시도`를 눌렀을 때 실행할 동작. 다시 시도할 수 없는 실패면 넘기지 않고, 그때는 `다시 시도`를 그리지 않아요"},isRetrying:{required:!1,tsType:{name:"boolean"},description:"다시 시도 요청의 응답을 기다리는 중인지. 그동안 「다시 시도」를 누를 수 없고, 기본 크기에서는 버튼에 로딩을 그려요.\n@default false",defaultValue:{value:"false",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"keyof typeof ALIGN",elements:[{name:"literal",value:"start"},{name:"literal",value:"center"}]},description:'문구와 `다시 시도`의 가로 정렬. 그 자리의 빈 상태 안내와 같은 정렬을 골라요.\n영역 전체를 대신할 때는 `center`(예: 홈 카드), 글 흐름 안에 들어갈 때는 `start`(예: 탐색 답변)예요.\n@default "start"',defaultValue:{value:'"start"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:"keyof typeof SIZE",elements:[{name:"literal",value:"md"},{name:"literal",value:"sm"}]},description:'안내의 크기. 폭이 좁은 자리에는 `sm`을 골라요(예: 사이드바의 문서 목록).\n`sm`은 아이콘 · 문구 · `다시 시도`가 모두 한 단계 작아요.\n@default "md"',defaultValue:{value:'"md"',computed:!1}}}}},"./src/shared/components/primitives/ui/Spinner/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>Spinner});var emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const spinnerMaskurl_namespaceObject="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTIyLjI4NDMgOC4zMjg1M0MyMi44NDYgOC4xMjc5OSAyMy4xNDMzIDcuNTA3MzkgMjIuODkzMSA2Ljk2NTk0QzIxLjgxMDIgNC42MjI2IDE5Ljk5NTIgMi42ODEyMSAxNy43MDc2IDEuNDQ0MjdDMTUuMTAyMSAwLjAzNTQzMjIgMTIuMDY3NSAtMC4zNTk5NzkgOS4xODc5NyAwLjMzNDEzMUM2LjMwODQxIDEuMDI4MjQgMy43ODczMSAyLjc2MjgyIDIuMTA5ODQgNS4yMDQwN0MwLjQzMjM1NiA3LjY0NTMyIC0wLjI4Mjk2NSAxMC42MjA3IDAuMTAxNTMgMTMuNTU3N0MwLjQ4NjAyNSAxNi40OTQ3IDEuOTQzMTcgMTkuMTg1NyA0LjE5MjU0IDIxLjExMjhDNi40NDE5MSAyMy4wNCA5LjMyNDU2IDI0LjA2NzEgMTIuMjg1OCAyMy45OTY2QzE1LjI0NjkgMjMuOTI2MSAxOC4wNzc0IDIyLjc2MjggMjAuMjMyNSAyMC43MzA4QzIyLjEyNDYgMTguOTQ2NiAyMy4zNzg3IDE2LjYwMzQgMjMuODIxOCAxNC4wNjAzQzIzLjkyNDIgMTMuNDcyNyAyMy40NzczIDEyLjk0OTUgMjIuODgyOCAxMi45MDA0VjEyLjkwMDRDMjIuMjg4NCAxMi44NTEyIDIxLjc3MjYgMTMuMjk1MiAyMS42NTg2IDEzLjg4MDdDMjEuMjY3IDE1Ljg5MjEgMjAuMjU0NiAxNy43NDExIDE4Ljc1MDYgMTkuMTU5MkMxNi45ODM1IDIwLjgyNTUgMTQuNjYyNSAyMS43Nzk0IDEyLjIzNDMgMjEuODM3MkM5LjgwNjE0IDIxLjg5NSA3LjQ0MjM3IDIxLjA1MjggNS41OTc4OCAxOS40NzI1QzMuNzUzNCAxNy44OTIyIDIuNTU4NTQgMTUuNjg1NiAyLjI0MzI1IDEzLjI3NzNDMS45Mjc5NyAxMC44NjkgMi41MTQ1MyA4LjQyOTE2IDMuODkwMDYgNi40MjczNEM1LjI2NTYgNC40MjU1MiA3LjMzMjkgMy4wMDMxNiA5LjY5NDE0IDIuNDMzOTlDMTIuMDU1NCAxLjg2NDgyIDE0LjU0MzcgMi4xODkwNSAxNi42ODAyIDMuMzQ0M0MxOC40OTg2IDQuMzI3NTEgMTkuOTUyOCA1Ljg1MzUzIDIwLjg0OSA3LjY5NjRDMjEuMTA5OSA4LjIzMjggMjEuNzIyNSA4LjUyOTA3IDIyLjI4NDMgOC4zMjg1M1Y4LjMyODUzWiIvPjwvc3ZnPgo=";var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function Spinner({size="1.5rem",...props}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(Root,{$size:size,"aria-hidden":!0,...props})}const spin=emotion_react_browser_esm.i7`
    to {
        transform: rotate(1turn);
    }
`,Root=emotion_styled_browser_esm.A.span`
  display: block;
  flex-shrink: 0;
  width: ${({$size})=>$size};
  height: ${({$size})=>$size};

  background: conic-gradient(from 90deg, currentColor, transparent);

  -webkit-mask: url("${spinnerMaskurl_namespaceObject}") center / contain no-repeat;
  mask: url("${spinnerMaskurl_namespaceObject}") center / contain no-repeat;

  animation: ${spin} 0.6s linear infinite;
`;Spinner.__docgenInfo={description:"회전하는 로딩 표시.",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"string"},description:"지름. 부모 글자 크기를 따라가게 하려면 `1em`을 넘기면 돼요.",defaultValue:{value:'"1.5rem"',computed:!1}}},composes:["HTMLAttributes"]}},"./src/shared/constants/toastMessages/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,["D",0,{DOCUMENT_CREATED:{variant:"success",message:"문서가 만들어졌어요"},ALL_DOCUMENTS_CONFIRMED:{variant:"success",message:"문서를 모두 확인했어요"},WORKSPACE_CHANGED:{variant:"success",message:"워크스페이스를 옮겼어요"},MEETING_AUDIO_CONNECTED:{variant:"success",message:"이어폰을 끼면 더 깨끗하게 녹음돼요"},RECORDING_CONNECTION_LOST:{variant:"caution",message:"연결이 끊겨 녹음이 끝났어요. 여기까지 문서로 정리하고 있어요"},RECORDING_CHUNKS_NOT_UPLOADED:{variant:"caution",message:"끊긴 동안의 소리 일부는 저장하지 못했어요"},RECORDING_DISCONNECTED:{variant:"caution",message:"연결이 끊겼어요. 녹음은 계속돼요"},RECORDING_ARCHIVE_FAILED:{variant:"caution",message:"저장 공간이 부족해요. 이 탭을 닫으면 끊긴 동안의 소리가 사라질 수 있어요"},RECORDING_ENDING_DISCONNECTED:{variant:"caution",message:"연결이 돌아오면 녹음을 끝낼게요. 이 탭을 닫지 말아 주세요"},OTHER_TAB_RECORDING_DISCONNECTED:{variant:"caution",message:"녹음 중인 탭의 연결이 끊겼어요"},RECORDING_TAKEN_OVER:{variant:"caution",message:"다른 탭에서 이 녹음을 이어 가고 있어요"},RECORDING_TIME_LIMIT_APPROACHING:{variant:"caution",message:"최대 녹음 시간까지 15분 남았어요. 시간이 되면 녹음을 끝내고 문서로 정리해요"},RECORDING_CONTROL_LOST:{variant:"caution",message:"이 탭에서 녹음을 이어갈 수 없어 녹음이 끝났어요"},RECORDING_UPLOAD_FAILED:{variant:"caution",message:"녹음 파일을 올리지 못해 문서로 정리하지 못했어요"},SESSION_EXPIRED:{variant:"caution",message:"로그인이 만료됐어요. 다시 로그인해 주세요."},RECORDING_INTERRUPTED:{variant:"caution",message:"녹음을 이어갈 수 없어 여기까지 저장했어요. 문서로 정리하고 있어요"},NO_DOCUMENT_CONTENT:{variant:"caution",message:"문서로 만들 내용이 없었어요"},QUESTION_SEND_FAILED:{variant:"error",message:"질문을 보내지 못했어요. 잠시 후 다시 시도해 주세요."},DOCUMENT_CONFIRM_FAILED:{variant:"error",message:"확인하지 못했어요. 다시 시도해 주세요."},RETRY_REQUEST_FAILED:{variant:"error",message:"다시 시도하지 못했어요. 잠시 후 다시 시도해 주세요."},WORKSPACE_LEAVE_FAILED:{variant:"error",message:"워크스페이스에서 나가지 못했어요. 다시 시도해 주세요."},OWNERSHIP_TRANSFER_FAILED:{variant:"error",message:"권한을 넘기지 못했어요. 다시 시도해 주세요."},RECORDING_END_FAILED:{variant:"error",message:"녹음을 끝내지 못했어요. 녹음은 계속되고 있어요. 다시 시도해 주세요."},RECORDING_RESUME_FAILED:{variant:"error",message:"이어서 녹음하지 못했어요. 다시 시도해 주세요."},LOGOUT_FAILED:{variant:"error",message:"로그아웃하지 못했어요. 다시 시도해 주세요."},COPY_FAILED:{variant:"error",message:"복사하지 못했어요. 다시 시도해 주세요."},FEEDBACK_SENT:{variant:"success",message:"피드백을 보냈어요. 팀이 평일에 모아서 확인해요"},WORKSPACE_ACCESS_DENIED:{variant:"error",message:"이 워크스페이스에 더 이상 들어갈 수 없어요."}}])}}]);
//# sourceMappingURL=6381.6d777d8c.iframe.bundle.js.map