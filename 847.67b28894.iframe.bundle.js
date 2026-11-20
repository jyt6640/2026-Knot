"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[847],{"./src/assets/icons/sidebar.svg"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),_excluded=["size"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgSidebar(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 18",width:size,height:size,focusable:"false","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M6.9 2.6v12.8M2.6 4.2c0-.9.7-1.6 1.6-1.6h9.6c.9 0 1.6.7 1.6 1.6v9.6c0 .9-.7 1.6-1.6 1.6H4.2c-.9 0-1.6-.7-1.6-1.6z"})))};__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/modules/features/member/MemberProfileAvatar/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>MemberProfileAvatar});var useMeQuery=__webpack_require__("./src/shared/api/queries/useMeQuery/index.ts"),Popover=__webpack_require__("./src/shared/components/composites/Popover/index.tsx"),emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),current=__webpack_require__("./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/recordings/current/index.ts"),logout=__webpack_require__("./src/shared/api/fetch/api/v1/auth/logout/index.ts"),useMutation=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useMutation.js");const mutations_useLogoutMutation=()=>(0,useMutation.n)({mutationFn:logout.P,networkMode:"always"});var toastMessages=__webpack_require__("./src/shared/constants/toastMessages/index.ts"),useKeyDown=__webpack_require__("./src/shared/hooks/common/useKeyDown/index.ts"),useNavigateToLogin=__webpack_require__("./src/shared/hooks/domain/auth/useNavigateToLogin/index.ts"),useRecordingControl=__webpack_require__("./src/shared/hooks/domain/recording/useRecordingControl/index.ts"),ConfirmDialog=__webpack_require__("./src/shared/components/primitives/ui/ConfirmDialog/index.tsx"),Dim=__webpack_require__("./src/shared/components/primitives/ui/Dim/index.tsx"),dialogContext=__webpack_require__("./src/shared/provider/context/dialogContext/index.tsx"),toastContext=__webpack_require__("./src/shared/provider/context/toastContext/index.tsx"),recordingStore=__webpack_require__("./src/shared/store/recordingStore/index.ts"),QueryClientProvider=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),authReturnPath=__webpack_require__("./src/shared/utils/authReturnPath/index.ts"),authSession=__webpack_require__("./src/shared/utils/authSession/index.ts"),feedbackDraft=__webpack_require__("./src/shared/utils/feedbackDraft/index.ts"),lastConversation=__webpack_require__("./src/shared/utils/lastConversation/index.ts"),logRequestError=__webpack_require__("./src/shared/utils/logRequestError/index.ts"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),hooks=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/hooks.js"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const END_RECORDING_DIALOG={title:"녹음을 끝내고 로그아웃할까요?",description:"지금 녹음은 문서로 정리돼요.",confirmLabel:"끝내고 로그아웃"},RECORDING_ELSEWHERE_DIALOG={title:"다른 곳에서 녹음 중이에요",description:"로그아웃하면 이 브라우저의 녹음은 저장이 멈춰요.\n다른 기기의 녹음은 그대로 이어져요.",confirmLabel:"로그아웃"};function LogoutDialog({title,description,confirmLabel,onCancel,onConfirm}){return(0,useKeyDown.A)({key:"Escape",isEnabled:!0,onKeyDown:onCancel}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Dim.A,{onClick:onCancel,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(ConfirmDialog.A,{role:"dialog","aria-modal":"true","aria-label":title,onClick:e=>e.stopPropagation(),title,description,cancelLabel:"취소",confirmLabel,onCancel,onConfirm})})}const auth_useLogout=()=>{const{workspaceId}=(0,hooks.g)(),{open,closeOpenedDialog}=(0,dialogContext.sp)(),hasDialog=(0,dialogContext.y2)(),{show}=(0,toastContext.dj)(),queryClient=(0,QueryClientProvider.jE)(),{navigateToLogin}=(0,useNavigateToLogin.A)(),{mutateAsync:requestLogout}=mutations_useLogoutMutation(),{endRecordingWithoutConfirm}=(0,useRecordingControl.A)(),[isLoggingOut,setIsLoggingOut]=(0,react.useState)(!1),finishLogout=async()=>{if(setIsLoggingOut(!0),await new Promise(resolve=>{const resolveWhenDone=()=>{const{isEnding,isUploadingChunks}=recordingStore.A.getState();isEnding||isUploadingChunks||(unsubscribe(),resolve())},unsubscribe=recordingStore.A.subscribe(resolveWhenDone);resolveWhenDone()}),"idle"===recordingStore.A.getState().status){try{await requestLogout()}catch{return setIsLoggingOut(!1),void show(toastMessages.D.LOGOUT_FAILED)}recordingStore.A.getState().discardRecording(),closeOpenedDialog(),await queryClient.cancelQueries(),queryClient.clear(),(0,feedbackDraft.e6)(),(0,authReturnPath.bT)(),(0,lastConversation.ay)(),(0,authSession.Qt)(),navigateToLogin({replace:!0})}else setIsLoggingOut(!1)},endRecordingAndLogout=async()=>{setIsLoggingOut(!0);"idle"!==recordingStore.A.getState().status&&"notEnded"===await endRecordingWithoutConfirm("logout")?setIsLoggingOut(!1):await finishLogout()},askBeforeLogout=({dialog,onConfirm})=>{setIsLoggingOut(!1),open(({close})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(LogoutDialog,{...dialog,onCancel:close,onConfirm:()=>{close(),onConfirm()}}))};return{logout:async()=>{if(isLoggingOut||hasDialog)return;const{status,isEnding}=recordingStore.A.getState();"idle"===status||isEnding?(setIsLoggingOut(!0),"idle"===status&&await(async()=>{try{const recording=await(0,current.$)(Number(workspaceId));return"RECORDING"===recording?.status||"PAUSED"===recording?.status}catch(error){return(0,logRequestError._)({feature:"auth",action:"로그아웃 전 현재 녹음 조회",error}),!1}})()?askBeforeLogout({dialog:RECORDING_ELSEWHERE_DIALOG,onConfirm:finishLogout}):await finishLogout()):askBeforeLogout({dialog:END_RECORDING_DIALOG,onConfirm:endRecordingAndLogout})},isLoggingOut}};var _path,_path2,Avatar=__webpack_require__("./src/shared/components/primitives/ui/Avatar/index.tsx"),Spinner=__webpack_require__("./src/shared/components/primitives/ui/Spinner/index.tsx"),_excluded=["size"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const icons_logout=function SvgLogout(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 18",width:size,height:size,focusable:"false","aria-hidden":"true"},props),_path||(_path=react.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M7 3H4.75A1.75 1.75 0 0 0 3 4.75v8.5c0 .966.784 1.75 1.75 1.75H7M11.5 12 15 9l-3.5-3"})),_path2||(_path2=react.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:1.5,d:"M15 9H7.5"})))};function ProfileMenu({isLoggingOut,onLogoutSelect}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(Container,{"aria-label":"프로필 메뉴",children:(0,emotion_react_jsx_runtime_browser_esm.FD)(MenuItem,{type:"button",onClick:onLogoutSelect,"aria-disabled":isLoggingOut,autoFocus:!0,children:[isLoggingOut?(0,emotion_react_jsx_runtime_browser_esm.Y)(Spinner.A,{size:"1.125rem"}):(0,emotion_react_jsx_runtime_browser_esm.Y)(icons_logout,{size:18}),"로그아웃"]})})}const Container=emotion_styled_browser_esm.A.nav`
  display: flex;
  flex-direction: column;
  width: 15rem; /* 240px */
  padding: 0.375rem; /* 6px */
  border: 1px solid ${({theme})=>theme.neutral[200]};
  border-radius: 1rem; /* 16px */
  background-color: ${({theme})=>theme.neutral[0]};
  box-shadow: ${({theme})=>theme.shadow03};
`,MenuItem=emotion_styled_browser_esm.A.button`
  display: flex;
  align-items: center;
  gap: 0.625rem; /* 10px */
  padding: 0.625rem 0.75rem; /* 10px 12px */
  border-radius: 0.5rem; /* 8px */
  color: ${({theme})=>theme.neutral[900]};
  ${({theme})=>theme.text.caption02};
  font-weight: 500;
  line-height: 1.125rem; /* 18px, 아이콘과 같은 높이라 두 상태의 메뉴 높이가 같아요 */
  text-align: left;

  & > svg {
    flex-shrink: 0;
    color: ${({theme})=>theme.neutral[600]};
  }

  &[aria-disabled="true"] {
    color: ${({theme})=>theme.neutral[500]};
    cursor: not-allowed;
  }

  &:hover:not([aria-disabled="true"]) {
    background-color: ${({theme})=>theme.neutral[100]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: -2px;
  }
`;function MemberProfileAvatar(){const{data:me}=(0,useMeQuery.A)(),{logout,isLoggingOut}=auth_useLogout(),hasDialog=(0,dialogContext.y2)();return(0,emotion_react_jsx_runtime_browser_esm.Y)(Popover.A,{openOn:"click",placement:"bottom-end",isDismissible:!isLoggingOut&&!hasDialog,content:(0,emotion_react_jsx_runtime_browser_esm.Y)(ProfileMenu,{isLoggingOut,onLogoutSelect:logout}),children:triggerProps=>(0,emotion_react_jsx_runtime_browser_esm.Y)(Trigger,{type:"button",...triggerProps,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Avatar.A,{label:"내 프로필",src:me?.profileImageUrl??void 0,name:me?.nickname,size:32})})})}ProfileMenu.__docgenInfo={description:"프로필 사진이 여는 메뉴. 「로그아웃」 하나만 있어요(AUTH-R17).\n\n메뉴를 열면 항목으로 포커스를 옮겨, 키보드로 연 사람이 바로 고를 수 있어요.\n처리 중에도 `disabled`로 두지 않아요. 포커스가 항목에 남아야 실패 뒤 바로 다시 누르고, 묻는 창을 닫은 뒤 포커스가 돌아와요.",methods:[],displayName:"ProfileMenu",props:{isLoggingOut:{required:!0,tsType:{name:"boolean"},description:"로그아웃을 처리하는 중인지. 켜지면 아이콘 자리에 스피너가 돌고 다시 누를 수 없어요(AUTH-R19)"},onLogoutSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"「로그아웃」을 누르면 불러요"}}};const Trigger=emotion_styled_browser_esm.A.button`
  position: relative;
  display: flex;
  border-radius: 50%;

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }

  /* 손가락으로 누를 때는 보이는 크기(32px)는 그대로 두고 누르는 영역만 44px로 넓혀요(RESP-R9) */
  @media (pointer: coarse) {
    &::after {
      position: absolute;
      inset: -0.375rem; /* 6px */
      content: "";
    }
  }
`;MemberProfileAvatar.__docgenInfo={description:"로그인한 회원의 프로필 아바타. 누르면 아래에 프로필 메뉴를 오른쪽 끝을 맞춰 열어요(AUTH-R17).\n\n사진이 없는 회원은 `Avatar`가 닉네임 첫 글자로 대신 그려요. 이것이 기본 프로필 이미지예요(AUTH-R15).\n다시 누르거나 바깥을 누르거나 ESC를 누르면 메뉴를 닫아요. 로그아웃을 처리하는 동안이나 모달이 떠 있는 동안에는 닫지 않아요.\n처리가 오래 걸려도 진행 중인지 볼 곳이 메뉴뿐이고, 모달을 닫아도 메뉴는 뒤에 남아 있어야 하기 때문이에요.",methods:[],displayName:"MemberProfileAvatar"}},"./src/modules/features/search/SearchEvidenceToggle/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>SearchEvidenceToggle});var _path,useSearchMessagesQuery=__webpack_require__("./src/shared/api/queries/useSearchMessagesQuery/index.ts"),emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),useConversationId=__webpack_require__("./src/shared/hooks/domain/search/useConversationId/index.ts"),useOpenedEvidenceMessage=__webpack_require__("./src/shared/hooks/domain/search/useOpenedEvidenceMessage/index.ts"),useOpenedSearchEvidences=__webpack_require__("./src/shared/hooks/domain/search/useOpenedSearchEvidences/index.ts"),hooks=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/hooks.js"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),_excluded=["size"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const foundRecords=function SvgFoundRecords(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 18",width:size,height:size,focusable:"false","aria-hidden":"true"},props),_path||(_path=react.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M5.95 3.35v-.3c0-.7.5-1.2 1.2-1.2h6.6c1 0 1.7.7 1.7 1.7v8c0 .7-.5 1.2-1.2 1.2m-9.1-4.2h4.5m-4.5 3h2.8m-3.6-7h6.1c1 0 1.8.8 1.8 1.8v8c0 1-.8 1.8-1.8 1.8h-6.1c-1 0-1.8-.8-1.8-1.8v-8c0-1 .8-1.8 1.8-1.8"})))};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function SearchEvidenceToggle(){const{conversationId}=(0,useConversationId.A)(),{workspaceId}=(0,hooks.g)(),{data}=(0,useSearchMessagesQuery.A)({workspaceId:Number(workspaceId),conversationId}),messages=data?.items??[],{evidences:openedEvidences}=(0,useOpenedSearchEvidences.A)({conversationId}),{openEvidenceMessage,closeEvidenceMessage}=(0,useOpenedEvidenceMessage.A)(),latestAnswerWithEvidence=(messages=>[...messages].reverse().find(({role,evidences})=>"ASSISTANT"===role&&evidences.length>0))(messages);if(!latestAnswerWithEvidence)return null;const isOpen=openedEvidences.length>0;return(0,emotion_react_jsx_runtime_browser_esm.Y)(Trigger,{type:"button","aria-label":isOpen?"찾은 기록 닫기":"찾은 기록 보기","aria-expanded":isOpen,$isOpen:isOpen,onClick:()=>{isOpen?closeEvidenceMessage():openEvidenceMessage(latestAnswerWithEvidence.id)},children:(0,emotion_react_jsx_runtime_browser_esm.Y)(foundRecords,{size:18})})}const Trigger=emotion_styled_browser_esm.A.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5625rem; /* 9px */
  border: 1px solid
    ${({theme,$isOpen})=>$isOpen?theme.neutral[700]:theme.neutral[200]};
  border-radius: 62.4375rem; /* 999px */
  background-color: ${({theme,$isOpen})=>$isOpen?theme.neutral[700]:theme.neutral[0]};
  color: ${({theme,$isOpen})=>$isOpen?theme.neutral[0]:theme.neutral[600]};
  box-shadow: ${({theme})=>theme.shadow02};
  transition:
    background-color 0.2s ease-in,
    color 0.2s ease-in;

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }

  /* 손가락으로 누를 때는 보이는 크기(38px)는 그대로 두고 누르는 영역만 44px로 넓혀요(RESP-R9) */
  @media (pointer: coarse) {
    position: relative;

    &::after {
      position: absolute;
      inset: -0.1875rem; /* 3px */
      content: "";
    }
  }
`;SearchEvidenceToggle.__docgenInfo={description:"GNB 오른쪽에서 찾은 기록 패널을 여닫는 버튼.\n\n근거가 있는 답변이 하나라도 있을 때만 보여요.\n닫혀 있을 때 누르면 근거가 있는 가장 최근 답변의 찾은 기록을 열고, 열려 있으면 닫아요.\n왼쪽 패널 버튼과 대칭이 되도록 같은 모양을 쓰고, 열려 있으면 채워진(Active) 모양이에요.",methods:[],displayName:"SearchEvidenceToggle"}},"./src/modules/widgets/workspace/WorkspaceGnb/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>WorkspaceGnb});var breakpoint=__webpack_require__("./src/shared/constants/breakpoint/index.ts"),emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),MemberProfileAvatar=__webpack_require__("./src/modules/features/member/MemberProfileAvatar/index.tsx"),useDocumentQuery=__webpack_require__("./src/shared/api/queries/useDocumentQuery/index.ts"),useRecordingDocumentQuery=__webpack_require__("./src/shared/api/queries/useRecordingDocumentQuery/index.ts"),useWorkspaceQuery=__webpack_require__("./src/shared/api/queries/useWorkspaceQuery/index.ts"),useWorkspaceNav=__webpack_require__("./src/shared/hooks/domain/workspace/useWorkspaceNav/index.ts"),Avatar=__webpack_require__("./src/shared/components/primitives/ui/Avatar/index.tsx"),Skeleton=__webpack_require__("./src/shared/components/primitives/ui/Skeleton/index.tsx"),PATH_ROUTE=__webpack_require__("./src/shared/routes/PATH_ROUTE.ts"),hooks=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/hooks.js"),chevronRight=__webpack_require__("./src/assets/icons/chevronRight.svg"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const TAB_NAMES=["홈","탐색","문서"];function WorkspaceLocation(){const params=(0,hooks.g)(),workspaceId=Number(params.workspaceId),isDocumentScreen=void 0!==params.documentId,isRecordingDocumentScreen=null!==(0,hooks.RQ)(PATH_ROUTE.WS.RECORDING_DOCUMENT),{activeTabIndex}=(0,useWorkspaceNav.A)(),{data:workspace}=(0,useWorkspaceQuery.A)({workspaceId}),{data:documentDetail,isError:isDocumentError}=(0,useDocumentQuery.A)({workspaceId,documentId:Number(params.documentId),isEnabled:isDocumentScreen}),{data:recordingDocument,isError:isRecordingDocumentError}=(0,useRecordingDocumentQuery.A)({workspaceId,recordingId:Number(params.recordingId),isEnabled:isRecordingDocumentScreen}),tabName=TAB_NAMES[activeTabIndex],screenTitle=isDocumentScreen?documentDetail?.title:recordingDocument?.title,hasDocumentTitle=(isDocumentScreen||isRecordingDocumentScreen)&&(void 0!==screenTitle||!(isDocumentScreen?isDocumentError:isRecordingDocumentError));return(0,emotion_react_jsx_runtime_browser_esm.FD)(Container,{role:"group","aria-label":"지금 위치",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(AvatarWrapper,{"aria-hidden":"true",children:workspace?(0,emotion_react_jsx_runtime_browser_esm.Y)(Avatar.A,{label:"워크스페이스",name:workspace.name,size:24}):(0,emotion_react_jsx_runtime_browser_esm.Y)(LoadingAvatar,{label:"워크스페이스",size:24})}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Path,{children:[workspace?(0,emotion_react_jsx_runtime_browser_esm.Y)(WorkspaceName,{children:workspace.name}):(0,emotion_react_jsx_runtime_browser_esm.Y)(Skeleton.A,{width:5,height:.75}),tabName&&(0,emotion_react_jsx_runtime_browser_esm.FD)(Trail,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(chevronRight.A,{size:12}),(0,emotion_react_jsx_runtime_browser_esm.Y)(TabName,{children:tabName}),hasDocumentTitle&&(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(chevronRight.A,{size:12}),void 0!==screenTitle?(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentTitle,{children:screenTitle}):(0,emotion_react_jsx_runtime_browser_esm.Y)(Skeleton.A,{width:7.5,height:.75})]})]})]})]})}const Container=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 8px */
  min-width: 0;
  /* 버튼 사이 간격(8px)에 4px을 더해 패널 버튼과 12px을 띄워요 */
  margin-left: 0.25rem; /* 4px */

  /* 모바일 GNB 왼쪽은 패널 버튼만으로 차서, 가운데 탭에 가리지 않게 숨겨요 */
  ${breakpoint.Wi.mobile} {
    display: none;
  }
`,AvatarWrapper=emotion_styled_browser_esm.A.span`
  display: flex;
  flex-shrink: 0;
`,LoadingAvatar=(0,emotion_styled_browser_esm.A)(Avatar.A)`
  background-color: ${({theme})=>theme.neutral[200]};
  color: ${({theme})=>theme.neutral[400]};
`,Path=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  gap: 0.375rem; /* 6px */
  min-width: 0;
  ${({theme})=>theme.text.caption02};
`,WorkspaceName=emotion_styled_browser_esm.A.span`
  max-width: 12.5rem; /* 200px */
  overflow: hidden;
  color: ${({theme})=>theme.neutral[800]};
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
`,Trail=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  gap: 0.375rem; /* 6px */
  min-width: 0;

  & > svg {
    flex-shrink: 0;
    color: ${({theme})=>theme.neutral[400]};
  }

  /* 1024 미만에서는 자리가 모자라 아이콘과 워크스페이스 이름만 남겨요(WS-R15) */
  ${breakpoint.Wi.belowDesktop} {
    display: none;
  }
`,TabName=emotion_styled_browser_esm.A.span`
  flex-shrink: 0;
  color: ${({theme})=>theme.neutral[500]};
`,DocumentTitle=emotion_styled_browser_esm.A.span`
  overflow: hidden;
  color: ${({theme})=>theme.neutral[700]};
  white-space: nowrap;
  text-overflow: ellipsis;
`;WorkspaceLocation.__docgenInfo={description:"GNB 왼쪽 패널 버튼 옆에서 지금 있는 워크스페이스와 탭을 알려 주는 위치 표시(WS-R15).\n\n워크스페이스 아이콘과 이름 뒤에 지금 탭 이름을 `›`로 이어요. 문서 하나를 보는 화면에서는 `문서 › 문서 제목`, 녹음 문서 화면에서는 `문서 › 녹음 제목`이에요.\n녹음처럼 탭이 아닌 화면과 1024 미만에서는 아이콘과 워크스페이스 이름만 보여요.\n767 이하에서는 GNB 왼쪽에 자리가 없어 위치 표시를 숨겨요.\n보여 주기만 하고 눌러도 아무 일도 없어요. 워크스페이스 전환은 사이드바 위쪽 이름에서 해요(WS-07).\n이름은 200px까지, 문서 제목은 남은 자리만큼 한 줄로 두고 넘치면 말줄임해요.\n불러오는 중에는 이름 · 제목 자리를 회색 덩어리로 채우고 아이콘은 기본 모양으로 둬요.\n문서나 녹음 문서를 불러오지 못하면 본문 섹션이 실패 화면을 그리므로 제목 자리 없이 `문서`에서 끝내요.\n워크스페이스 · 문서 · 녹음 문서는 레이아웃 · 본문 섹션과 같은 키로 조회해서 요청이 더 나가지 않아요.",methods:[],displayName:"WorkspaceLocation"};var tabMotion=__webpack_require__("./src/shared/constants/tabMotion/index.ts"),useSlidingIndicator=__webpack_require__("./src/shared/hooks/common/useSlidingIndicator/index.ts");function WorkspaceNavPill(){const{isHomeActive,isChatActive,isDocumentsActive,activeTabIndex,navigateToHome,navigateToExplore,navigateToDocuments}=(0,useWorkspaceNav.A)(),{containerRef,indicatorRef}=(0,useSlidingIndicator.A)({activeTabIndex,activeTabSelector:'[aria-current="page"]'});return(0,emotion_react_jsx_runtime_browser_esm.FD)(WorkspaceNavPill_Container,{ref:containerRef,"aria-label":"워크스페이스 화면 이동",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Indicator,{ref:indicatorRef,"aria-hidden":"true",hidden:-1===activeTabIndex}),(0,emotion_react_jsx_runtime_browser_esm.Y)(NavItem,{type:"button","aria-current":isHomeActive?"page":void 0,$isActive:isHomeActive,onClick:navigateToHome,children:"홈"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(NavItem,{type:"button","aria-current":isChatActive?"page":void 0,$isActive:isChatActive,onClick:navigateToExplore,"data-search-tutorial":"search-tab",children:"탐색"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(NavItem,{type:"button","aria-current":isDocumentsActive?"page":void 0,$isActive:isDocumentsActive,onClick:navigateToDocuments,children:"문서"})]})}const WorkspaceNavPill_Container=emotion_styled_browser_esm.A.nav`
  position: relative; /* 표시가 이 자리를 기준으로 칸 아래에 놓여요 */
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.125rem; /* 2px */
  height: 2.75rem; /* 44px */
  padding: 0.375rem; /* 6px */
  border: 1px solid ${({theme})=>theme.neutral[200]};
  border-radius: 62.4375rem; /* 999px */
  background-color: ${({theme})=>theme.neutral[0]};
  box-shadow: ${({theme})=>theme.shadow02};
`,Indicator=emotion_styled_browser_esm.A.span`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 62.4375rem;
  background-color: ${({theme})=>theme.neutral[700]};
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    transition-property: translate, width;
    transition-duration: 0s;
    transition-timing-function: ${tabMotion.fE};

    &[data-sliding="true"] {
      transition-duration: ${240}ms;
    }
  }
`,NavItem=emotion_styled_browser_esm.A.button`
  position: relative; /* 먼저 놓인 표시보다 위에 글자를 그려요 */
  display: flex;
  align-items: center;
  height: 2rem; /* 32px */
  padding: 0 1.125rem; /* 18px */
  border-radius: 62.4375rem;

  /* 360px 화면에서 양옆 버튼 두 개씩과 함께 한 줄에 들어가도록 칸 여백을 줄여요(RESP-R1) */
  ${breakpoint.Wi.mobile} {
    padding: 0 0.75rem; /* 12px */
  }

  color: ${({theme,$isActive})=>$isActive?theme.neutral[0]:theme.neutral[600]};
  white-space: nowrap;
  ${({theme})=>theme.text.caption02};

  /* 글자색은 표시가 지나가는 동안 같은 시간에 바꿔요 */
  @media (prefers-reduced-motion: no-preference) {
    transition-property: color, transform;
    transition-duration:
      ${240}ms, ${200}ms;
    transition-timing-function: ${tabMotion.fE}, ${tabMotion.yA};

    &:active {
      transform: scale(${.96});
      transition-duration:
        ${240}ms, ${100}ms;
      transition-timing-function: ${tabMotion.fE}, ${tabMotion.fE};
    }
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }
`;function WorkspaceGnb({left,right}){return(0,emotion_react_jsx_runtime_browser_esm.FD)(WorkspaceGnb_Container,{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Side,{children:[left,(0,emotion_react_jsx_runtime_browser_esm.Y)(WorkspaceLocation,{})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(WorkspaceNavPill,{}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Side,{$isTrailing:!0,children:[right,(0,emotion_react_jsx_runtime_browser_esm.Y)(MemberProfileAvatar.A,{})]})]})}WorkspaceNavPill.__docgenInfo={description:"GNB 가운데의 내비 필. 홈 · 탐색 · 문서를 오가고 지금 화면을 채워진 모양으로 알려줘요.\n\n채워진 모양은 칸마다 따로 칠하지 않고 진한 표시 하나가 칸 사이를 미끄러져요.\n칸마다 따로 바꾸면 바뀌는 동안 두 칸이 함께 반쯤 어두워 보여서예요.\n표시는 미끄러지는 동안 진행 방향으로 살짝 늘어났다가, 새 칸에 도착하며 물방울처럼 톡 맺혀요.\n누르는 동안 칸이 살짝 작아졌다가 떼면 통 튀어 돌아와요. 지금 탭을 누르면 표시도 함께 눌렸다가 제자리에서 톡 맺히고 화면은 그대로예요.\n움직임 줄이기를 켜 두면 눌림, 미끄러짐, 물방울 없이 바로 바뀌어요.",methods:[],displayName:"WorkspaceNavPill"};const WorkspaceGnb_Container=emotion_styled_browser_esm.A.header`
  display: flex;
  align-items: center;
  height: 2.75rem; /* 44px */
  padding: 0 1.5rem; /* 24px */

  ${breakpoint.Wi.mobile} {
    padding: 0 1rem; /* 16px */
  }
`,Side=emotion_styled_browser_esm.A.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: ${({$isTrailing})=>$isTrailing?"flex-end":"flex-start"};
  gap: 0.5rem; /* 8px */
  min-width: 0;

  ${breakpoint.Wi.mobile} {
    gap: 0.375rem; /* 6px */
  }
`;WorkspaceGnb.__docgenInfo={description:"워크스페이스 전역 상단바(GNB).\n\n왼쪽 패널 버튼 옆에 지금 있는 워크스페이스와 탭을 알려 주는 위치 표시를 둬요(WS-R15).",methods:[],displayName:"WorkspaceGnb",props:{left:{required:!1,tsType:{name:"ReactNode"},description:"왼쪽 패널을 여닫는 버튼 자리. Figma GNB의 좌우 대칭 구조를 따라요.\n\n어떤 패널을 열 수 있는지는 화면마다 다르므로(목록은 탐색 화면에만 있어요)\nGNB가 정하지 않고 레이아웃에서 받아요."},right:{required:!1,tsType:{name:"ReactNode"},description:"오른쪽 패널을 여닫는 버튼 자리. 아바타 앞에 놓여요.\n\n왼쪽과 마찬가지로 화면마다 다르므로(찾은 기록은 탐색 화면에만 있어요) 레이아웃에서 받아요."}}}},"./src/modules/widgets/workspace/WorkspaceSidebar/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>WorkspaceSidebar});var breakpoint=__webpack_require__("./src/shared/constants/breakpoint/index.ts"),emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),DocumentTree=__webpack_require__("./src/modules/features/document/DocumentTree/index.tsx"),WorkspaceSwitcher=__webpack_require__("./src/modules/features/workspace/WorkspaceSwitcher/index.tsx"),dialogContext=__webpack_require__("./src/shared/provider/context/dialogContext/index.tsx"),feedback=__webpack_require__("./src/assets/icons/feedback.svg"),FeedbackPanel=__webpack_require__("./src/modules/features/feedback/FeedbackPanel/index.tsx"),useKeyDown=__webpack_require__("./src/shared/hooks/common/useKeyDown/index.ts"),useIsSendingFeedback=__webpack_require__("./src/shared/hooks/domain/feedback/useIsSendingFeedback/index.ts"),Dim=__webpack_require__("./src/shared/components/primitives/ui/Dim/index.tsx"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function FeedbackSheet({onClose}){const{isSendingFeedback}=(0,useIsSendingFeedback.A)();return(0,useKeyDown.A)({key:"Escape",isEnabled:!isSendingFeedback,onKeyDown:onClose}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Dim.A,{onClick:()=>{isSendingFeedback||onClose()},children:(0,emotion_react_jsx_runtime_browser_esm.Y)(SheetWrapper,{onClick:e=>e.stopPropagation(),children:(0,emotion_react_jsx_runtime_browser_esm.Y)(FeedbackPanel.A,{onClose})})})}const SheetWrapper=emotion_styled_browser_esm.A.div`
  display: contents;
`;function WorkspaceSidebar(){const{open}=(0,dialogContext.sp)();return(0,emotion_react_jsx_runtime_browser_esm.FD)(Container,{"aria-label":"워크스페이스 사이드바",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(WorkspaceSwitcher.A,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentTree.A,{}),(0,emotion_react_jsx_runtime_browser_esm.FD)(FeedbackButton,{type:"button",onClick:()=>open(({close})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(FeedbackSheet,{onClose:close})),children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(feedback.A,{size:18}),"피드백"]})]})}FeedbackSheet.__docgenInfo={description:"휴대폰에서 피드백 패널을 화면 아래 시트로 띄워요(FEEDBACK-R2). 흐린 바깥이나 ESC로 닫혀요(FEEDBACK-R4).\n\n보내는 동안에는 바깥과 ESC로 닫지 않아요(FEEDBACK-R8). 닫히면 시트를 연 「피드백」으로 포커스가 돌아가요(`DialogProvider`).",methods:[],displayName:"FeedbackSheet",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"시트를 닫아요"}}};const Container=emotion_styled_browser_esm.A.aside`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* 12px */
  width: 17.5rem; /* 280px */
  height: 100%;
  padding: 1rem; /* 16px */
  border: 1px solid ${({theme})=>theme.neutral[200]};
  border-radius: 1.5rem; /* 24px */
  background-color: ${({theme})=>theme.neutral[0]};
  box-shadow: ${({theme})=>theme.shadow03};
  overflow-y: auto;

  /* 모바일 덮개는 화면 폭에서 오른쪽 70px을 남기고 최대 320px까지 넓혀요(RESP-R2) */
  ${breakpoint.Wi.mobile} {
    width: min(20rem, 100vw - 4.375rem); /* 320px */
  }
`,FeedbackButton=emotion_styled_browser_esm.A.button`
  display: none;
  flex-shrink: 0;
  align-items: center;
  gap: 0.625rem; /* 10px */
  margin-top: auto;
  padding: 0.625rem 0.75rem; /* 10px 12px */
  border-radius: 0.5rem; /* 8px */
  color: ${({theme})=>theme.neutral[900]};
  ${({theme})=>theme.text.caption02};
  font-weight: 500;

  & > svg {
    flex-shrink: 0;
    color: ${({theme})=>theme.neutral[600]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: -2px;
  }

  ${breakpoint.Wi.mobile} {
    display: flex;
  }
`;WorkspaceSidebar.__docgenInfo={description:"워크스페이스 사이드바 드로어. 워크스페이스 이름과 문서 목록(`DocumentTree`)을 보여줘요.\n\n맨 위의 워크스페이스 이름(`WorkspaceSwitcher`)을 누르면 다른 워크스페이스로 옮겨 가거나 새로 만들 수 있어요.\n\n휴대폰에서는 GNB에 피드백 메뉴가 없어서, 맨 아래 「피드백」으로 피드백 패널을 아래 시트로 열어요(FEEDBACK-R2).",methods:[],displayName:"WorkspaceSidebar"}},"./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/documents/[documentId]/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _api_dto_document__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/api/dto/document.ts"),_api_httpClient__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/api/httpClient/index.ts");const DOCUMENT_API_PATH=(workspaceId,documentId)=>`/api/v1/workspaces/${workspaceId}/documents/${documentId}`;__webpack_require__.d(__webpack_exports__,["B",0,DOCUMENT_API_PATH,"M",0,async({workspaceId,documentId})=>{const response=await(0,_api_httpClient__WEBPACK_IMPORTED_MODULE_1__.ok)({method:"get",url:DOCUMENT_API_PATH(workspaceId,documentId)});return new _api_dto_document__WEBPACK_IMPORTED_MODULE_0__.I8(response.data)}])},"./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/recordings/[recordingId]/document/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _api_dto_recordingDocument__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/api/dto/recordingDocument.ts"),_api_httpClient__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/api/httpClient/index.ts");const RECORDING_DOCUMENT_API_PATH=(workspaceId,recordingId)=>`/api/v1/workspaces/${workspaceId}/recordings/${recordingId}/document`;__webpack_require__.d(__webpack_exports__,["$",0,async({workspaceId,recordingId})=>{const response=await(0,_api_httpClient__WEBPACK_IMPORTED_MODULE_1__.ok)({method:"get",url:RECORDING_DOCUMENT_API_PATH(workspaceId,recordingId)});return new _api_dto_recordingDocument__WEBPACK_IMPORTED_MODULE_0__.bt(response.data)},"R",0,RECORDING_DOCUMENT_API_PATH])},"./src/shared/api/queries/useDocumentQuery/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _api_fetch_api_v1_workspaces_workspaceId_documents_documentId___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/documents/[documentId]/index.ts"),_api_queryKey_document__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/api/queryKey/document.ts"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useQuery.js");const __WEBPACK_DEFAULT_EXPORT__=({workspaceId,documentId,isEnabled=!0})=>(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.I)({queryKey:_api_queryKey_document__WEBPACK_IMPORTED_MODULE_1__.Y.detail({workspaceId,documentId}),queryFn:()=>(0,_api_fetch_api_v1_workspaces_workspaceId_documents_documentId___WEBPACK_IMPORTED_MODULE_0__.M)({workspaceId,documentId}),enabled:isEnabled});__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/api/queries/useRecordingDocumentQuery/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _api_fetch_api_v1_workspaces_workspaceId_recordings_recordingId_document__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/recordings/[recordingId]/document/index.ts"),_api_httpClient_error__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/api/httpClient/error/index.ts"),_api_queryKey_recordingDocument__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/api/queryKey/recordingDocument.ts"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useQuery.js");const __WEBPACK_DEFAULT_EXPORT__=({workspaceId,recordingId,isEnabled=!0,isPolling=!1})=>(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.I)({queryKey:_api_queryKey_recordingDocument__WEBPACK_IMPORTED_MODULE_2__.x.detail({workspaceId,recordingId}),queryFn:()=>(0,_api_fetch_api_v1_workspaces_workspaceId_recordings_recordingId_document__WEBPACK_IMPORTED_MODULE_0__.$)({workspaceId,recordingId}),enabled:isEnabled,refetchInterval:query=>{if(!isPolling)return!1;const{data,error}=query.state;if(void 0===data)return!1;if((0,_api_httpClient_error__WEBPACK_IMPORTED_MODULE_1__.d)(error)&&error.isClientError)return!1;const summaryStatus=data.meetingSummary?.status;return!!("PROCESSING"===data.processingStatus||"QUEUED"===summaryStatus||"RUNNING"===summaryStatus)&&3e3}});__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/api/queries/useSearchMessagesQuery/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>queries_useSearchMessagesQuery});var search=__webpack_require__("./src/shared/api/dto/search.ts"),httpClient=__webpack_require__("./src/shared/api/httpClient/index.ts");const WORKSPACE_SEARCH_CONVERSATION_MESSAGES_API_PATH=(workspaceId,conversationId)=>`/api/v1/workspaces/${workspaceId}/search/conversations/${conversationId}/messages`;var queryKey_search=__webpack_require__("./src/shared/api/queryKey/search.ts"),useQuery=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useQuery.js"),utils=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+query-core@5.102.0/node_modules/@tanstack/query-core/build/modern/utils.js");const queries_useSearchMessagesQuery=({workspaceId,conversationId})=>(0,useQuery.I)({queryKey:queryKey_search.v.messages({workspaceId,conversationId}),queryFn:void 0===conversationId?utils.hT:()=>(async({workspaceId,conversationId,size=30})=>{const response=await(0,httpClient.ok)({method:"get",url:WORKSPACE_SEARCH_CONVERSATION_MESSAGES_API_PATH(workspaceId,conversationId),params:{size}});return new search.pg(response.data)})({workspaceId,conversationId}),placeholderData:void 0===conversationId?void 0:utils.rX})},"./src/shared/components/composites/DockablePanel/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>DockablePanel});var breakpoint=__webpack_require__("./src/shared/constants/breakpoint/index.ts"),emotion_react_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),useExitAnimation=__webpack_require__("./src/shared/hooks/common/useExitAnimation/index.ts"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),react_dom=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-dom@19.2.8_react@19.2.8/node_modules/react-dom/index.js"),useMediaQuery=__webpack_require__("./src/shared/hooks/common/useMediaQuery/index.ts");const model_useDockablePanel=({dockTargetId,dockedProp,onDockedChange,peekResetKey})=>{const[selfDocked,setSelfDocked]=(0,react.useState)(!1),[isPeeking,setIsPeeking]=(0,react.useState)(!1),[dockTarget,setDockTarget]=(0,react.useState)(null),{isMatched:isBelowDesktop}=(0,useMediaQuery.A)(breakpoint.nO.belowDesktop),isDocked=!isBelowDesktop&&(dockedProp??selfDocked),closeTimerRef=(0,react.useRef)(null);(0,react.useEffect)(()=>{setDockTarget(document.getElementById(dockTargetId))},[dockTargetId]);const cancelScheduledClose=()=>{null!==closeTimerRef.current&&(clearTimeout(closeTimerRef.current),closeTimerRef.current=null)};(0,react.useEffect)(()=>cancelScheduledClose,[]),(0,react.useEffect)(()=>{setIsPeeking(!1)},[peekResetKey]);const openPeek=()=>{cancelScheduledClose(),setIsPeeking(!0)},closePeek=()=>{cancelScheduledClose(),setIsPeeking(!1)},handleBlur=e=>{e.currentTarget.contains(e.relatedTarget)||closePeek()},handleKeyDown=e=>{"Escape"===e.key&&closePeek()},triggerProps={onClick:()=>{if(isBelowDesktop)return cancelScheduledClose(),void setIsPeeking(prev=>!prev);closePeek();const nextDocked=!isDocked;setSelfDocked(nextDocked),onDockedChange?.(nextDocked)}};return{isDocked,isPeeking:isPeeking&&!isDocked,isOverlay:isBelowDesktop,closePeek,dockTarget,rootProps:isBelowDesktop?{onBlur:handleBlur,onKeyDown:handleKeyDown}:{onPointerEnter:e=>{"touch"!==e.pointerType&&openPeek()},onPointerLeave:e=>{"touch"!==e.pointerType&&(cancelScheduledClose(),closeTimerRef.current=setTimeout(()=>setIsPeeking(!1),150))},onFocus:openPeek,onBlur:handleBlur,onKeyDown:handleKeyDown},triggerProps}};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function DockablePanel({label,icon,dockTargetId,isDocked:dockedProp,onDockedChange,peekResetKey,children}){const panelId=(0,react.useId)(),{isDocked,isPeeking,isOverlay,closePeek,dockTarget,rootProps,triggerProps}=model_useDockablePanel({dockTargetId,dockedProp,onDockedChange,peekResetKey}),floatingPanelRef=(0,react.useRef)(null),dockedPanelRef=(0,react.useRef)(null),{renderedValue:isFloatingRendered,isExiting:isFloatingClosing}=(0,useExitAnimation.A)({value:isPeeking||null,ref:floatingPanelRef}),{renderedValue:isDockedRendered,isExiting:isDockedClosing}=(0,useExitAnimation.A)({value:isDocked||null,ref:dockedPanelRef});return(0,emotion_react_jsx_runtime_browser_esm.FD)(Root,{...rootProps,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Trigger,{type:"button","aria-label":label,"aria-controls":panelId,"aria-expanded":isDocked||isPeeking,"aria-pressed":isDocked,$isDocked:isDocked,...triggerProps,children:icon}),isFloatingRendered&&!isDocked&&isOverlay&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Backdrop,{"aria-hidden":!0,"data-overlay-state":isFloatingClosing?"closing":"open",onClick:closePeek}),isFloatingRendered&&!isDocked&&(0,emotion_react_jsx_runtime_browser_esm.Y)(FloatingPanel,{ref:floatingPanelRef,id:panelId,"data-overlay-state":isFloatingClosing?"closing":"open",inert:isFloatingClosing,children}),isDockedRendered&&null!==dockTarget&&(0,react_dom.createPortal)((0,emotion_react_jsx_runtime_browser_esm.Y)(DockedPanel,{ref:dockedPanelRef,id:panelId,"data-overlay-state":isDockedClosing?"closing":"open",inert:isDockedClosing,children}),dockTarget)]})}const Root=emotion_styled_browser_esm.A.div`
  display: flex;
`,Trigger=emotion_styled_browser_esm.A.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5625rem; /* 9px */
  border: 1px solid
    ${({theme,$isDocked})=>$isDocked?theme.neutral[700]:theme.neutral[200]};
  border-radius: 62.4375rem; /* 999px */
  background-color: ${({theme,$isDocked})=>$isDocked?theme.neutral[700]:theme.neutral[0]};
  color: ${({theme,$isDocked})=>$isDocked?theme.neutral[0]:theme.neutral[800]};
  box-shadow: ${({theme})=>theme.shadow02};
  transition:
    background-color 0.2s ease-in,
    color 0.2s ease-in;

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }

  /* 손가락으로 누를 때는 보이는 크기(38px)는 그대로 두고 누르는 영역만 44px로 넓혀요(RESP-R9) */
  @media (pointer: coarse) {
    position: relative;

    &::after {
      position: absolute;
      inset: -0.1875rem; /* 3px */
      content: "";
    }
  }
`,slideInFromLeft=emotion_react_browser_esm.i7`
  from {
    transform: translateX(-0.75rem); /* 12px */
    opacity: 0;
  }
`,slideOutToLeft=emotion_react_browser_esm.i7`
  to {
    transform: translateX(-0.5rem); /* 8px */
    opacity: 0;
  }
`,panelMotionStyle=emotion_react_browser_esm.AH`
  animation: ${slideInFromLeft} 0.34s cubic-bezier(0.22, 1, 0.36, 1);

  &[data-overlay-state="closing"] {
    animation: ${slideOutToLeft} 0.22s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    &[data-overlay-state="closing"] {
      animation: none;
    }
  }
`,FloatingPanel=emotion_styled_browser_esm.A.div`
  position: fixed;
  top: 5.5rem; /* 88px */
  bottom: 8.5rem; /* 136px */
  left: 2.5rem; /* 40px */
  z-index: 20;
  ${panelMotionStyle}

  ${breakpoint.Wi.belowDesktop} {
    left: 1.5rem; /* 24px */
  }

  ${breakpoint.Wi.mobile} {
    top: 4.25rem; /* 68px, GNB 아래 8px */
    left: 1rem; /* 16px */
  }
`,backdropShow=emotion_react_browser_esm.i7`
  from {
    opacity: 0;
  }
`,backdropHide=emotion_react_browser_esm.i7`
  to {
    opacity: 0;
  }
`,Backdrop=emotion_styled_browser_esm.A.div`
  position: fixed;
  inset: 4.25rem 0 0; /* 68px, GNB 아래 */
  z-index: 19; /* 띄운 패널(20) 바로 아래 */

  ${breakpoint.Wi.mobile} {
    top: 3.75rem; /* 60px, 모바일 GNB 아래 */
  }

  background-color: ${({theme})=>`${theme.neutral[900]}66`}; /* 40% */
  animation: ${backdropShow} 0.3s ease;

  &[data-overlay-state="closing"] {
    animation: ${backdropHide} 0.2s ease-in-out forwards;
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    &[data-overlay-state="closing"] {
      animation: none;
    }
  }
`,DockedPanel=emotion_styled_browser_esm.A.div`
  width: 100%;
  height: 100%;
  ${panelMotionStyle}

  &[data-overlay-state="closing"] {
    overflow: hidden;
  }

  &[data-overlay-state="closing"]:not(:only-child) {
    display: none;
  }
`;DockablePanel.__docgenInfo={description:"스치면 띄우고 누르면 자리를 차지하는 패널.\n\n닫힌 패널은 `useExitAnimation`이 물러나는 애니메이션이 끝날 때까지 조금 더 그려 둬요.\n겹쳐 뜬 패널이 고정되며 닫힐 때는 같은 자리에 고정 패널이 들어오므로 기다리지 않고 바로 지워요.\n\n1024 미만에서는 고정하지 않고 누르면 덮개로 띄워요. GNB 아래를 흐리게 덮어 바깥을 누르면 닫히는 걸 보여 줘요(RESP-R2).",methods:[],displayName:"DockablePanel",props:{label:{required:!0,tsType:{name:"string"},description:"트리거 버튼의 접근성 이름"},icon:{required:!0,tsType:{name:"ReactNode"},description:"트리거 버튼 안에 그릴 아이콘"},dockTargetId:{required:!0,tsType:{name:"string"},description:"고정했을 때 패널이 옮겨 갈 자리의 DOM id"},isDocked:{required:!1,tsType:{name:"boolean"},description:"고정 여부를 바깥에서 정할 때 넘겨요.\n\n넘기지 않으면 패널이 스스로 여닫아요. 같은 자리를 여러 패널이 나눠 써서\n하나만 고정돼야 할 때만 `onDockedChange`와 함께 넘기면 돼요."},onDockedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isDocked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isDocked"}],return:{name:"void"}}},description:"트리거를 눌러 고정 여부가 바뀌었을 때 알려줘요"},peekResetKey:{required:!1,tsType:{name:"unknown"},description:"이 값이 바뀌면 띄운 패널을 닫아요. 예: 화면 주소"},children:{required:!0,tsType:{name:"ReactNode"},description:"패널에 그릴 내용. 패널의 껍데기(너비·배경·라운드)는 이 내용이 스스로 가져요"}}}},"./src/shared/constants/tabMotion/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,["KD",0,{x:1.08,y:.94},"_H",0,{stretch:.2,swell:.5,settle:.75},"fE",0,"cubic-bezier(0.22, 1, 0.36, 1)","jc",0,"cubic-bezier(0.37, 0, 0.63, 1)","wq",0,{swell:.4,settle:.72},"yA",0,"cubic-bezier(0.34, 1.56, 0.64, 1)"])},"./src/shared/hooks/common/useMediaQuery/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js");const getMediaQueryList=query=>"function"==typeof window.matchMedia?window.matchMedia(query):null,__WEBPACK_DEFAULT_EXPORT__=query=>{const subscribe=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(onChange=>{const mediaQueryList=getMediaQueryList(query);return mediaQueryList?.addEventListener("change",onChange),()=>mediaQueryList?.removeEventListener("change",onChange)},[query]);return{isMatched:(0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(subscribe,()=>getMediaQueryList(query)?.matches??!1,()=>!1)}};__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/hooks/common/useSlidingIndicator/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>common_useSlidingIndicator});var tabMotion=__webpack_require__("./src/shared/constants/tabMotion/index.ts"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js");const isOnActiveTab=(target,activeTabSelector)=>target instanceof Element&&null!==target.closest(`button${activeTabSelector}`),settleKeyframes=({swellOffset,settleOffset})=>[{offset:swellOffset,scale:String(1.06),easing:tabMotion.jc},{offset:settleOffset,scale:String(.985),easing:tabMotion.jc},{offset:1,scale:"1"}],common_useIndicatorDroplet=({containerRef,indicatorRef,activeTabSelector})=>{const dropletRef=(0,react.useRef)(null),morph=(0,react.useCallback)(({keyframes,duration,isHeld=!1})=>{const indicator=indicatorRef.current;if(!indicator||"function"!=typeof indicator.animate||window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;const currentScale=(element=>{const{scale}=getComputedStyle(element);return"none"===scale?"1":scale})(indicator);dropletRef.current?.cancel(),dropletRef.current=indicator.animate([{scale:currentScale,easing:tabMotion.fE},...keyframes],{duration,fill:isHeld?"forwards":"none"})},[indicatorRef]),playSlideDroplet=(0,react.useCallback)(()=>morph({keyframes:[{offset:tabMotion._H.stretch,scale:`${tabMotion.KD.x} ${tabMotion.KD.y}`,easing:tabMotion.jc},...settleKeyframes({swellOffset:tabMotion._H.swell,settleOffset:tabMotion._H.settle})],duration:380}),[morph]);return(0,react.useEffect)(()=>{const container=containerRef.current;if(!container)return;const playTapDroplet=()=>morph({keyframes:settleKeyframes({swellOffset:tabMotion.wq.swell,settleOffset:tabMotion.wq.settle}),duration:320}),handleRelease=()=>{window.removeEventListener("pointerup",handleRelease),window.removeEventListener("pointercancel",handleRelease),playTapDroplet()},handlePointerDown=event=>{0===event.button&&isOnActiveTab(event.target,activeTabSelector)&&(morph({keyframes:[{scale:String(.96)}],duration:100,isHeld:!0}),window.addEventListener("pointerup",handleRelease),window.addEventListener("pointercancel",handleRelease))},handleClick=event=>{0===event.detail&&isOnActiveTab(event.target,activeTabSelector)&&playTapDroplet()};return container.addEventListener("pointerdown",handlePointerDown),container.addEventListener("click",handleClick),()=>{container.removeEventListener("pointerdown",handlePointerDown),container.removeEventListener("click",handleClick),window.removeEventListener("pointerup",handleRelease),window.removeEventListener("pointercancel",handleRelease)}},[containerRef,morph,activeTabSelector]),{playSlideDroplet}},placeIndicator=({container,indicator,activeTabSelector,isSliding})=>{const activeTab=container.querySelector(activeTabSelector);activeTab&&(indicator.dataset.sliding=String(isSliding),indicator.style.width=`${activeTab.offsetWidth}px`,indicator.style.height=`${activeTab.offsetHeight}px`,indicator.style.translate=`${activeTab.offsetLeft}px ${activeTab.offsetTop}px`)},common_useSlidingIndicator=({activeTabIndex,activeTabSelector})=>{const containerRef=(0,react.useRef)(null),indicatorRef=(0,react.useRef)(null),placedTabIndexRef=(0,react.useRef)(-1),{playSlideDroplet}=common_useIndicatorDroplet({containerRef,indicatorRef,activeTabSelector});return(0,react.useLayoutEffect)(()=>{const container=containerRef.current,indicator=indicatorRef.current;if(!container||!indicator)return;const placedTabIndex=placedTabIndexRef.current;if(placedTabIndexRef.current=activeTabIndex,-1===activeTabIndex)return;const isSliding=-1!==placedTabIndex&&placedTabIndex!==activeTabIndex;placeIndicator({container,indicator,activeTabSelector,isSliding}),isSliding&&playSlideDroplet()},[activeTabIndex,activeTabSelector,playSlideDroplet]),(0,react.useEffect)(()=>{const container=containerRef.current,indicator=indicatorRef.current;if(!container||!indicator||"undefined"==typeof ResizeObserver)return;const observer=new ResizeObserver(()=>placeIndicator({container,indicator,activeTabSelector,isSliding:!1}));return observer.observe(container),container.querySelectorAll("button").forEach(tab=>observer.observe(tab)),()=>observer.disconnect()},[activeTabSelector]),{containerRef,indicatorRef}}},"./src/shared/hooks/domain/search/useOpenedEvidenceMessage/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_router__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/dom/lib.js");const __WEBPACK_DEFAULT_EXPORT__=()=>{const[searchParams,setSearchParams]=(0,react_router__WEBPACK_IMPORTED_MODULE_0__.ok)(),parsedMessageId=Number(searchParams.get("messageId"));return{openedMessageId:Number.isInteger(parsedMessageId)&&parsedMessageId>0?parsedMessageId:null,openEvidenceMessage:messageId=>{setSearchParams(prev=>{const next=new URLSearchParams(prev);return next.set("messageId",String(messageId)),next},{replace:!0})},closeEvidenceMessage:()=>{setSearchParams(prev=>{const next=new URLSearchParams(prev);return next.delete("messageId"),next},{replace:!0})}}};__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/hooks/domain/search/useOpenedSearchEvidences/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _api_queries_useSearchMessagesQuery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/api/queries/useSearchMessagesQuery/index.ts"),_hooks_domain_search_useOpenedEvidenceMessage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/hooks/domain/search/useOpenedEvidenceMessage/index.ts"),_store_searchAnswerStore__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/store/searchAnswerStore/index.ts"),react_router__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/hooks.js"),zustand_react_shallow__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/zustand@5.0.15_@types+react@19.2.18_react@19.2.8_use-sync-external-store@1.7.0_react@19.2.8_/node_modules/zustand/esm/react/shallow.mjs");const __WEBPACK_DEFAULT_EXPORT__=({conversationId})=>{const{workspaceId}=(0,react_router__WEBPACK_IMPORTED_MODULE_3__.g)(),{data}=(0,_api_queries_useSearchMessagesQuery__WEBPACK_IMPORTED_MODULE_0__.A)({workspaceId:Number(workspaceId),conversationId}),messages=data?.items??[],{openedMessageId}=(0,_hooks_domain_search_useOpenedEvidenceMessage__WEBPACK_IMPORTED_MODULE_1__.A)(),liveAnswer=(0,_store_searchAnswerStore__WEBPACK_IMPORTED_MODULE_2__.b)((0,zustand_react_shallow__WEBPACK_IMPORTED_MODULE_4__.k)(state=>({answerMessageId:state.answerMessageId,evidences:state.evidences}))),openedAnswer=messages.find(({id,role})=>"ASSISTANT"===role&&id===openedMessageId);return{evidences:void 0===openedAnswer&&null!==openedMessageId&&openedMessageId===liveAnswer.answerMessageId?liveAnswer.evidences:openedAnswer?.evidences??[]}};__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/utils/authReturnPath/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,["P6",0,path=>{try{sessionStorage.setItem("knot.auth.returnPath",path)}catch{}},"bT",0,()=>{try{sessionStorage.removeItem("knot.auth.returnPath")}catch{}}])}}]);
//# sourceMappingURL=847.67b28894.iframe.bundle.js.map