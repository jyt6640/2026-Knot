"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2458],{"./src/modules/widgets/workspace/WorkspaceInviteMemberCard/index.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LoadFailed:()=>LoadFailed,Loading:()=>Loading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _path,invitations=__webpack_require__("./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/invitations/index.ts"),workspaceInvitation=__webpack_require__("./src/shared/api/mock/responses/workspaceInvitation.ts"),toastContext=__webpack_require__("./src/shared/provider/context/toastContext/index.tsx"),PATH_ROUTE=__webpack_require__("./src/shared/routes/PATH_ROUTE.ts"),http=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/msw@2.15.0_@types+node@26.1.2_typescript@7.0.2/node_modules/msw/lib/core/http.mjs"),delay=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/msw@2.15.0_@types+node@26.1.2_typescript@7.0.2/node_modules/msw/lib/core/delay.mjs"),HttpResponse=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/msw@2.15.0_@types+node@26.1.2_typescript@7.0.2/node_modules/msw/lib/core/HttpResponse.mjs"),components=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/components.js"),emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Button=__webpack_require__("./src/shared/components/primitives/ui/Button/index.tsx"),InlineError=__webpack_require__("./src/shared/components/primitives/ui/InlineError/index.tsx"),Input=__webpack_require__("./src/shared/components/primitives/ui/Input/index.tsx"),check=__webpack_require__("./src/assets/icons/check.svg"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),_excluded=["size"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const teammate=function SvgTeammate(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",width:size,height:size,focusable:"false","aria-hidden":"true"},props),_path||(_path=react.createElement("path",{fill:"currentColor",d:"M18 13.714a2.57 2.57 0 0 1 2.571 2.572v.613c0 3.066-3.608 5.387-8.571 5.387s-8.572-2.2-8.572-5.387v-.613A2.57 2.57 0 0 1 6 13.714zm-6-12A5.143 5.143 0 1 1 12 12a5.143 5.143 0 0 1 0-10.286"})))};var useTimeout=__webpack_require__("./src/shared/hooks/common/useTimeout/index.ts"),useCopyWorkspaceInvite=__webpack_require__("./src/shared/hooks/domain/workspace/useCopyWorkspaceInvite/index.ts"),hooks=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/hooks.js");var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function WorkspaceInviteMemberCard(){const{inviteCode,displayInviteLink,isLoading,isLoadFailed,isLinkCopied,isCodeCopied,handleCopyLink,handleCopyCode,handleRetry}=(()=>{const{workspaceId}=(0,hooks.g)(),{inviteCode,displayInviteLink,isLoading,error,retryInvitation,copyInviteCode,copyInviteLink}=(0,useCopyWorkspaceInvite.A)({workspaceId:Number(workspaceId),surface:"home_card"}),{start:startLinkTimeout,isTimedOut:isLinkCopied}=(0,useTimeout.A)({timeout:2e3}),{start:startCodeTimeout,isTimedOut:isCodeCopied}=(0,useTimeout.A)({timeout:2e3});return{inviteCode,displayInviteLink,isLoading,isLoadFailed:void 0===inviteCode&&null!==error,handleRetry:retryInvitation,isLinkCopied,isCodeCopied,handleCopyLink:()=>{copyInviteLink({onCopySuccess:startLinkTimeout})},handleCopyCode:()=>{copyInviteCode({onCopySuccess:startCodeTimeout})}}})(),isInviteReady=void 0!==inviteCode;return(0,emotion_react_jsx_runtime_browser_esm.FD)(Container,{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Head,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(IconChip,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(teammate,{size:24})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Title,{children:"팀원 초대"})]}),isLoadFailed?(0,emotion_react_jsx_runtime_browser_esm.Y)(InlineErrorWrapper,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(InlineError.A,{message:"초대 링크를 불러오지 못했어요. 다시 시도해 주세요.",onRetry:handleRetry,align:"center"})}):(0,emotion_react_jsx_runtime_browser_esm.FD)(Content,{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(LinkField,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(LinkInput,{variant:"copy",status:"filled",value:displayInviteLink??"",readOnly:!0,"aria-label":"초대 링크"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(CopyButton,{size:"sm",variant:isLinkCopied?"accent":"filled",isLoading,disabled:!isInviteReady,onClick:handleCopyLink,children:isLinkCopied?(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(check.A,{}),"복사됨"]}):"복사"})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(CopyCodeButton,{type:"button",disabled:!isInviteReady,onClick:handleCopyCode,children:isCodeCopied?"복사됨":"초대 코드 복사"})]})]})}const Container=emotion_styled_browser_esm.A.section`
  display: flex;
  flex-direction: column;
  gap: 2rem; /* 32px */
  width: 25rem; /* 400px */
  max-width: 100%;
  min-height: 12.5rem; /* 200px */
  padding: 1.25rem; /* 20px */
  border-radius: 1.5rem; /* 24px */
  background-color: ${({theme})=>theme.neutral[0]};
  box-shadow: ${({theme})=>theme.shadow02};
`,Head=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* 12px */
`,IconChip=emotion_styled_browser_esm.A.span`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 2.5rem; /* 40px */
  height: 2.5rem;
  border-radius: 0.875rem; /* 14px */
  background-color: ${({theme})=>theme.neutral[200]};
  color: ${({theme})=>theme.neutral[600]};
`,Title=emotion_styled_browser_esm.A.h2`
  color: ${({theme})=>theme.neutral[900]};
  ${({theme})=>theme.text.label01};
`,Content=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* 12px */
`,InlineErrorWrapper=emotion_styled_browser_esm.A.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`,LinkField=emotion_styled_browser_esm.A.div`
  position: relative;
  display: flex;
  width: 100%;
`,LinkInput=(0,emotion_styled_browser_esm.A)(Input.A)`
  flex: 1;
  min-width: 0;
  padding-right: 7.5rem; /* 120px */
  text-overflow: ellipsis;
`,CopyButton=(0,emotion_styled_browser_esm.A)(Button.A)`
  position: absolute;
  top: 50%;
  right: 0.75rem; /* 12px */
  transform: translateY(-50%);
`,CopyCodeButton=emotion_styled_browser_esm.A.button`
  width: 100%;
  border-radius: 0.5rem;
  color: ${({theme})=>theme.neutral[500]};
  text-align: center;
  ${({theme})=>theme.text.body01};

  &:disabled {
    color: ${({theme})=>theme.neutral[400]};
    cursor: default;
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }
`;WorkspaceInviteMemberCard.__docgenInfo={description:"홈의 팀원 초대 카드. 현재 워크스페이스의 초대 링크와 초대 코드를 복사해요.\n\n초대를 불러오지 못하면 제목은 그대로 두고, 링크 칸과 초대 코드 복사 자리에 실패 안내(ERR-09)를 둬요.\n`다시 시도`는 이 카드의 초대만 다시 받아요.",methods:[],displayName:"WorkspaceInviteMemberCard"};const HOME_PATH=(0,PATH_ROUTE.vX)({routeKey:"WORKSPACE_HOME",params:{workspaceId:String(1)}}),index_stories={title:"Workspace/WorkspaceInviteMemberCard",component:WorkspaceInviteMemberCard,parameters:{layout:"centered",design:[{name:"Card/InviteMember",type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=600-10087"},{name:"홈 화면/초대 링크 복사",type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=600-10089"},{name:"Field/Copy",type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=484-4925"}],docs:{description:{component:"워크스페이스 홈에서 팀원을 부르는 카드예요. 초대 링크와 6자 초대 코드를 복사해 팀원에게 전해요.\n\n**동작 규칙**\n- 링크와 코드는 지금 보고 있는 워크스페이스의 활성 초대에서 와요. 팀원 초대 화면의 카드와 같은 링크·코드예요.\n- 「복사」를 누르면 전체 초대 링크를 복사하고, 버튼이 2초 동안 강조색 「복사됨」으로 바뀌어요.\n- 「초대 코드 복사」를 누르면 6자 코드를 복사하고, 글자가 2초 동안 「복사됨」으로 바뀌어요.\n- 복사 결과를 알림창으로 띄우지 않아요. 클립보드에 쓰지 못하면 화면 변화 없이 넘어가요.\n- 초대를 받아 오기 전에는 두 버튼을 모두 막아 빈 값이 복사되지 않게 해요.\n- 초대를 받아 오지 못하면 제목은 두고 링크 칸과 「초대 코드 복사」 자리에 실패 안내와 「다시 시도」를 둬요. 「다시 시도」는 이 카드의 초대만 다시 받아 와요. 다른 화면으로 보낼지는 워크스페이스 화면 전체가 정해요."}}},decorators:[Story=>(0,emotion_react_jsx_runtime_browser_esm.Y)(components.fS,{initialEntries:[HOME_PATH],children:(0,emotion_react_jsx_runtime_browser_esm.Y)(toastContext.tE,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(components.BV,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(components.qh,{path:PATH_ROUTE.WS.WORKSPACE_HOME,element:(0,emotion_react_jsx_runtime_browser_esm.Y)(Story,{})})})})})]},Default={},Loading={parameters:{docs:{story:{inline:!1,iframeHeight:240}},msw:{handlers:{workspaceInvitations:http.L.post(`*${(0,invitations.G)(1)}`,async()=>(await(0,delay.cb)("infinite"),HttpResponse.cS.json(workspaceInvitation.UQ)))}}}},LoadFailed={parameters:{docs:{story:{inline:!1,iframeHeight:240}},msw:{handlers:{workspaceInvitations:http.L.post(`*${(0,invitations.G)(1)}`,()=>new HttpResponse.cS(null,{status:500}))}},design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=3892-15614"}}},__namedExportsOrder=["Default","Loading","LoadFailed"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source},description:{story:"초대를 받아 와 바로 복사할 수 있는 상태예요. 버튼을 눌러 「복사됨」으로 바뀌는 모습을 볼 수 있어요.",...Default.parameters?.docs?.description}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    // 문서 페이지에서는 스토리를 한 화면에 함께 그려 응답이 섞이므로, 이 스토리는 따로 그려요\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 240\n      }\n    },\n    msw: {\n      handlers: {\n        workspaceInvitations: http.post(`*${WORKSPACE_INVITATIONS_API_PATH(WORKSPACE_ID)}`, async () => {\n          await delay("infinite");\n          return HttpResponse.json(workspaceInvitationResponse);\n        })\n      }\n    }\n  }\n}',...Loading.parameters?.docs?.source},description:{story:"초대를 받아 오는 중이에요. 링크 칸은 비어 있고 두 버튼 모두 누를 수 없어요.",...Loading.parameters?.docs?.description}}},LoadFailed.parameters={...LoadFailed.parameters,docs:{...LoadFailed.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 240\n      }\n    },\n    msw: {\n      handlers: {\n        workspaceInvitations: http.post(`*${WORKSPACE_INVITATIONS_API_PATH(WORKSPACE_ID)}`, () => new HttpResponse(null, {\n          status: 500\n        }))\n      }\n    },\n    design: {\n      type: "figma",\n      url: "https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=3892-15614"\n    }\n  }\n}',...LoadFailed.parameters?.docs?.source},description:{story:"초대를 받아 오지 못했을 때예요. 예: 홈에 들어왔는데 서버가 잠시 답하지 못한 경우",...LoadFailed.parameters?.docs?.description}}}},"./src/assets/icons/check.svg"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),_excluded=["size"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgCheck(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",width:size,height:size,focusable:"false","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m4.2 12.289 5.489 5.489L19.8 6.222"})))};__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/invitations/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _api_dto_workspaceInvitation__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/api/dto/workspaceInvitation.ts"),_api_httpClient__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/api/httpClient/index.ts");const WORKSPACE_INVITATIONS_API_PATH=workspaceId=>`/api/v1/workspaces/${workspaceId}/invitations`;__webpack_require__.d(__webpack_exports__,["G",0,WORKSPACE_INVITATIONS_API_PATH,"k",0,async workspaceId=>{const response=await(0,_api_httpClient__WEBPACK_IMPORTED_MODULE_1__.ok)({method:"post",url:WORKSPACE_INVITATIONS_API_PATH(workspaceId)});return new _api_dto_workspaceInvitation__WEBPACK_IMPORTED_MODULE_0__.rn(response.data)}])},"./src/shared/api/queryKey/workspaceInvitation.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){const workspaceInvitationKeys={all:["workspaceInvitations"],active:workspaceId=>[...workspaceInvitationKeys.all,"active",workspaceId],preview:credential=>[...workspaceInvitationKeys.all,"preview",credential]};__webpack_require__.d(__webpack_exports__,["R",0,workspaceInvitationKeys])},"./src/shared/components/primitives/ui/Button/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>Button});var _emotion_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_shared_components_primitives_ui_Spinner__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/components/primitives/ui/Spinner/index.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const BUTTON_SIZE={lg:{paddingX:"1.25rem",paddingY:"1rem",borderRadius:"0.875rem",gap:"0.5rem",iconSize:"1.5rem",spinnerSize:"1.5rem"},md:{paddingX:"1.125rem",paddingY:"0.75rem",borderRadius:"0.8125rem",gap:"0.4375rem",iconSize:"1.125rem",spinnerSize:"1.375rem"},sm:{paddingX:"1rem",paddingY:"0.5rem",borderRadius:"0.75rem",gap:"0.375rem",iconSize:"1rem",spinnerSize:"1.25rem"}};function Button({size="md",variant="filled",isLoading=!1,isFullWidth=!1,disabled=!1,type="button",children,...props}){const status=isLoading?"loading":disabled?"inactive":"active";return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(Root,{type,disabled:disabled||isLoading,"aria-busy":isLoading,$size:size,$variant:variant,$status:status,$isFullWidth:isFullWidth,...props,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(Content,{$isHidden:isLoading,$size:size,children}),isLoading&&(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(SpinnerWrapper,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_shared_components_primitives_ui_Spinner__WEBPACK_IMPORTED_MODULE_2__.A,{size:BUTTON_SIZE[size].spinnerSize})})]})}const Root=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.button`
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
`;InlineError.__docgenInfo={description:'화면 안 한 영역이나 한 동작만 실패했을 때, 그 내용이 있어야 할 자리에 남기는 안내.\n\n경고색은 아이콘에만 쓰고 문구는 본문 색이에요.\n같은 실패를 토스트로 또 알리지 않아요.\n낭독기가 바로 읽도록 `role="alert"`를 붙였어요.',methods:[],displayName:"InlineError",props:{message:{required:!0,tsType:{name:"string"},description:"무엇이 안 됐는지 알리는 문구"},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"`다시 시도`를 눌렀을 때 실행할 동작. 다시 시도할 수 없는 실패면 넘기지 않고, 그때는 `다시 시도`를 그리지 않아요"},isRetrying:{required:!1,tsType:{name:"boolean"},description:"다시 시도 요청의 응답을 기다리는 중인지. 그동안 「다시 시도」를 누를 수 없고, 기본 크기에서는 버튼에 로딩을 그려요.\n@default false",defaultValue:{value:"false",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"keyof typeof ALIGN",elements:[{name:"literal",value:"start"},{name:"literal",value:"center"}]},description:'문구와 `다시 시도`의 가로 정렬. 그 자리의 빈 상태 안내와 같은 정렬을 골라요.\n영역 전체를 대신할 때는 `center`(예: 홈 카드), 글 흐름 안에 들어갈 때는 `start`(예: 탐색 답변)예요.\n@default "start"',defaultValue:{value:'"start"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:"keyof typeof SIZE",elements:[{name:"literal",value:"md"},{name:"literal",value:"sm"}]},description:'안내의 크기. 폭이 좁은 자리에는 `sm`을 골라요(예: 사이드바의 문서 목록).\n`sm`은 아이콘 · 문구 · `다시 시도`가 모두 한 단계 작아요.\n@default "md"',defaultValue:{value:'"md"',computed:!1}}}}},"./src/shared/components/primitives/ui/Input/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>Input});var _emotion_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const VARIANT_STYLE={text:theme=>_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
    ${theme.text.body01};
    padding: 0.96875rem 1rem; /* 15.5px 16px */

    &::placeholder {
      ${theme.text.caption02};
    }
  `,code:theme=>_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
    padding: 0.6875rem 1rem;
    text-align: center;
    font-size: 1.5rem; /* 24px */
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0.25em; /* 6px */

    &::placeholder {
      ${theme.text.heading01};
    }
  `,copy:theme=>_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
    padding: 0.71875rem 0.75rem;
    color: ${theme.neutral[700]};
    ${theme.text.body02};
  `},STATUS_STYLE={empty:theme=>_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
    background-color: ${theme.neutral[100]};
    border-color: ${theme.neutral[300]};

    &:focus {
      outline: none;
      background-color: ${theme.neutral[0]};
    }
  `,filled:theme=>_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
    background-color: ${theme.neutral[0]};
    border-color: ${theme.neutral[200]};

    &:focus {
      outline: none;
      border-color: ${theme.neutral[400]};
    }
  `,error:theme=>_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
    background-color: ${theme.sub.warning[50]};
    border-color: ${theme.sub.warning[200]};

    &:focus {
      outline: none;
      border-color: ${theme.sub.warning[600]};
    }
  `,success:theme=>_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH`
    background-color: ${theme.neutral[0]};
    border-color: ${theme.sub.accent[200]};

    &:focus {
      outline: none;
      border-color: ${theme.sub.accent[500]};
    }
  `};function Input({status,variant="text",...props}){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(StyledInput,{$status:status,variant,"aria-invalid":"error"===status,...props})}const StyledInput=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.input`
  border: 1px solid;
  border-radius: 0.875rem;
  color: ${({theme})=>theme.neutral[900]};
  transition: all 0.3s ease-in;

  &::placeholder {
    color: ${({theme})=>theme.neutral[500]};
  }

  ${({variant,theme})=>VARIANT_STYLE[variant](theme)};
  ${({$status,theme})=>STATUS_STYLE[$status](theme)};
`;Input.__docgenInfo={description:"단일 줄 텍스트 입력 UI.",methods:[],displayName:"Input",props:{status:{required:!0,tsType:{name:"union",raw:'"empty" | "filled" | "error" | "success"',elements:[{name:"literal",value:'"empty"'},{name:"literal",value:'"filled"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"text" | "code" | "copy"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"code"'},{name:"literal",value:'"copy"'}]},description:"",defaultValue:{value:'"text"',computed:!1}}},composes:["ComponentProps"]}},"./src/shared/components/primitives/ui/Spinner/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>Spinner});var emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const spinnerMaskurl_namespaceObject="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTIyLjI4NDMgOC4zMjg1M0MyMi44NDYgOC4xMjc5OSAyMy4xNDMzIDcuNTA3MzkgMjIuODkzMSA2Ljk2NTk0QzIxLjgxMDIgNC42MjI2IDE5Ljk5NTIgMi42ODEyMSAxNy43MDc2IDEuNDQ0MjdDMTUuMTAyMSAwLjAzNTQzMjIgMTIuMDY3NSAtMC4zNTk5NzkgOS4xODc5NyAwLjMzNDEzMUM2LjMwODQxIDEuMDI4MjQgMy43ODczMSAyLjc2MjgyIDIuMTA5ODQgNS4yMDQwN0MwLjQzMjM1NiA3LjY0NTMyIC0wLjI4Mjk2NSAxMC42MjA3IDAuMTAxNTMgMTMuNTU3N0MwLjQ4NjAyNSAxNi40OTQ3IDEuOTQzMTcgMTkuMTg1NyA0LjE5MjU0IDIxLjExMjhDNi40NDE5MSAyMy4wNCA5LjMyNDU2IDI0LjA2NzEgMTIuMjg1OCAyMy45OTY2QzE1LjI0NjkgMjMuOTI2MSAxOC4wNzc0IDIyLjc2MjggMjAuMjMyNSAyMC43MzA4QzIyLjEyNDYgMTguOTQ2NiAyMy4zNzg3IDE2LjYwMzQgMjMuODIxOCAxNC4wNjAzQzIzLjkyNDIgMTMuNDcyNyAyMy40NzczIDEyLjk0OTUgMjIuODgyOCAxMi45MDA0VjEyLjkwMDRDMjIuMjg4NCAxMi44NTEyIDIxLjc3MjYgMTMuMjk1MiAyMS42NTg2IDEzLjg4MDdDMjEuMjY3IDE1Ljg5MjEgMjAuMjU0NiAxNy43NDExIDE4Ljc1MDYgMTkuMTU5MkMxNi45ODM1IDIwLjgyNTUgMTQuNjYyNSAyMS43Nzk0IDEyLjIzNDMgMjEuODM3MkM5LjgwNjE0IDIxLjg5NSA3LjQ0MjM3IDIxLjA1MjggNS41OTc4OCAxOS40NzI1QzMuNzUzNCAxNy44OTIyIDIuNTU4NTQgMTUuNjg1NiAyLjI0MzI1IDEzLjI3NzNDMS45Mjc5NyAxMC44NjkgMi41MTQ1MyA4LjQyOTE2IDMuODkwMDYgNi40MjczNEM1LjI2NTYgNC40MjU1MiA3LjMzMjkgMy4wMDMxNiA5LjY5NDE0IDIuNDMzOTlDMTIuMDU1NCAxLjg2NDgyIDE0LjU0MzcgMi4xODkwNSAxNi42ODAyIDMuMzQ0M0MxOC40OTg2IDQuMzI3NTEgMTkuOTUyOCA1Ljg1MzUzIDIwLjg0OSA3LjY5NjRDMjEuMTA5OSA4LjIzMjggMjEuNzIyNSA4LjUyOTA3IDIyLjI4NDMgOC4zMjg1M1Y4LjMyODUzWiIvPjwvc3ZnPgo=";var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function Spinner({size="1.5rem",...props}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(Root,{$size:size,"aria-hidden":!0,...props})}const spin=emotion_react_browser_esm.i7`
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
`;Spinner.__docgenInfo={description:"회전하는 로딩 표시.",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"string"},description:"지름. 부모 글자 크기를 따라가게 하려면 `1em`을 넘기면 돼요.",defaultValue:{value:'"1.5rem"',computed:!1}}},composes:["HTMLAttributes"]}},"./src/shared/constants/toastMessages/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,["D",0,{DOCUMENT_CREATED:{variant:"success",message:"문서가 만들어졌어요"},ALL_DOCUMENTS_CONFIRMED:{variant:"success",message:"문서를 모두 확인했어요"},WORKSPACE_CHANGED:{variant:"success",message:"워크스페이스를 옮겼어요"},MEETING_AUDIO_CONNECTED:{variant:"success",message:"이어폰을 끼면 더 깨끗하게 녹음돼요"},RECORDING_CONNECTION_LOST:{variant:"caution",message:"연결이 끊겨 녹음이 끝났어요. 여기까지 문서로 정리하고 있어요"},RECORDING_CHUNKS_NOT_UPLOADED:{variant:"caution",message:"끊긴 동안의 소리 일부는 저장하지 못했어요"},RECORDING_DISCONNECTED:{variant:"caution",message:"연결이 끊겼어요. 녹음은 계속돼요"},RECORDING_ARCHIVE_FAILED:{variant:"caution",message:"저장 공간이 부족해요. 이 탭을 닫으면 끊긴 동안의 소리가 사라질 수 있어요"},RECORDING_ENDING_DISCONNECTED:{variant:"caution",message:"연결이 돌아오면 녹음을 끝낼게요. 이 탭을 닫지 말아 주세요"},OTHER_TAB_RECORDING_DISCONNECTED:{variant:"caution",message:"녹음 중인 탭의 연결이 끊겼어요"},RECORDING_TAKEN_OVER:{variant:"caution",message:"다른 탭에서 이 녹음을 이어 가고 있어요"},RECORDING_TIME_LIMIT_APPROACHING:{variant:"caution",message:"최대 녹음 시간까지 15분 남았어요. 시간이 되면 녹음을 끝내고 문서로 정리해요"},RECORDING_CONTROL_LOST:{variant:"caution",message:"이 탭에서 녹음을 이어갈 수 없어 녹음이 끝났어요"},RECORDING_UPLOAD_FAILED:{variant:"caution",message:"녹음 파일을 올리지 못해 문서로 정리하지 못했어요"},SESSION_EXPIRED:{variant:"caution",message:"로그인이 만료됐어요. 다시 로그인해 주세요."},RECORDING_INTERRUPTED:{variant:"caution",message:"녹음을 이어갈 수 없어 여기까지 저장했어요. 문서로 정리하고 있어요"},NO_DOCUMENT_CONTENT:{variant:"caution",message:"문서로 만들 내용이 없었어요"},QUESTION_SEND_FAILED:{variant:"error",message:"질문을 보내지 못했어요. 잠시 후 다시 시도해 주세요."},DOCUMENT_CONFIRM_FAILED:{variant:"error",message:"확인하지 못했어요. 다시 시도해 주세요."},RETRY_REQUEST_FAILED:{variant:"error",message:"다시 시도하지 못했어요. 잠시 후 다시 시도해 주세요."},WORKSPACE_LEAVE_FAILED:{variant:"error",message:"워크스페이스에서 나가지 못했어요. 다시 시도해 주세요."},OWNERSHIP_TRANSFER_FAILED:{variant:"error",message:"권한을 넘기지 못했어요. 다시 시도해 주세요."},RECORDING_END_FAILED:{variant:"error",message:"녹음을 끝내지 못했어요. 녹음은 계속되고 있어요. 다시 시도해 주세요."},RECORDING_RESUME_FAILED:{variant:"error",message:"이어서 녹음하지 못했어요. 다시 시도해 주세요."},LOGOUT_FAILED:{variant:"error",message:"로그아웃하지 못했어요. 다시 시도해 주세요."},COPY_FAILED:{variant:"error",message:"복사하지 못했어요. 다시 시도해 주세요."},FEEDBACK_SENT:{variant:"success",message:"피드백을 보냈어요. 팀이 평일에 모아서 확인해요"},WORKSPACE_ACCESS_DENIED:{variant:"error",message:"이 워크스페이스에 더 이상 들어갈 수 없어요."}}])},"./src/shared/hooks/common/useClipboard/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _constants_toastMessages__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/constants/toastMessages/index.ts"),_provider_context_toastContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/provider/context/toastContext/index.tsx"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=()=>{const[isCopied,setIsCopied]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),{show}=(0,_provider_context_toastContext__WEBPACK_IMPORTED_MODULE_1__.dj)();return{copy:async({text,onCopySuccess})=>{if(!navigator.clipboard)return console.error("Clipboard API가 지원되지 않는 환경입니다."),void show(_constants_toastMessages__WEBPACK_IMPORTED_MODULE_0__.D.COPY_FAILED);try{setIsCopied(!0),await navigator.clipboard.writeText(text),onCopySuccess?.()}catch(error){console.error("텍스트 복사에 실패했습니다:",error),show(_constants_toastMessages__WEBPACK_IMPORTED_MODULE_0__.D.COPY_FAILED)}finally{setIsCopied(!1)}},isCopied}};__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/hooks/domain/workspace/useCopyWorkspaceInvite/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>workspace_useCopyWorkspaceInvite});var invitations=__webpack_require__("./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/invitations/index.ts"),workspaceInvitation=__webpack_require__("./src/shared/api/queryKey/workspaceInvitation.ts"),useQuery=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useQuery.js");const queries_useWorkspaceInvitationQuery=({workspaceId})=>(0,useQuery.I)({queryKey:workspaceInvitation.R.active(workspaceId),queryFn:()=>(0,invitations.k)(workspaceId),enabled:Number.isInteger(workspaceId),refetchOnWindowFocus:!1});var useClipboard=__webpack_require__("./src/shared/hooks/common/useClipboard/index.ts"),captureAnalyticsEvent=__webpack_require__("./src/shared/utils/captureAnalyticsEvent/index.ts"),PATH_ROUTE=__webpack_require__("./src/shared/routes/PATH_ROUTE.ts");const workspace_useCopyWorkspaceInvite=({workspaceId,surface})=>{const{copy}=(0,useClipboard.A)(),{data:invitation,isPending,error,refetch}=queries_useWorkspaceInvitationQuery({workspaceId}),inviteCode=invitation?.code,link=invitation&&(linkToken=>{const displayInviteLink=(0,PATH_ROUTE.vX)({routeKey:"INVITE",params:{token:linkToken}});return{displayInviteLink,inviteLink:`${window.location.origin}${displayInviteLink}`}})(invitation.linkToken),inviteLink=link?.inviteLink,displayInviteLink=link?.displayInviteLink,trackInviteCopied=target=>{(0,captureAnalyticsEvent.L)({event:"invite_copied",properties:{target,surface,workspace_id:workspaceId}})};return{inviteCode,inviteLink,displayInviteLink,isLoading:isPending,error,retryInvitation:()=>{refetch()},copyInviteCode:({onCopySuccess}={})=>{void 0!==inviteCode&&copy({text:inviteCode,onCopySuccess:()=>{trackInviteCopied("code"),onCopySuccess?.()}})},copyInviteLink:({onCopySuccess}={})=>{void 0!==inviteLink&&copy({text:inviteLink,onCopySuccess:()=>{trackInviteCopied("link"),onCopySuccess?.()}})}}}},"./src/shared/routes/PATH_ROUTE.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_router__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/router/utils.js");const PATH_ROUTE={HOME:"/",LANDING_TECHNOLOGY:"/landing/technology",LOGIN:"/login",LOGIN_FAILED:"/login/failed",ONBOARDING:"/onboarding",ONBOARDING_COMPLETE:"/onboarding/complete",WORKSPACE:"/workspace",WORKSPACE_CREATE:"/workspace/create",WORKSPACE_CODE:"/workspace/code",WORKSPACE_HOME:"/workspace/:workspaceId",WORKSPACE_INVITE:"/workspace/:workspaceId/invite",WORKSPACE_JOIN:"/workspace/:workspaceId/join",CHAT:"/workspace/:workspaceId/chat",CHAT_SESSION:"/workspace/:workspaceId/chat/:sessionId",RECORDING:"/workspace/:workspaceId/recording",RECORDING_DOCUMENTS:"/workspace/:workspaceId/recordings/:recordingId",RECORDING_DOCUMENT:"/workspace/:workspaceId/recordings/:recordingId/document",DOCUMENTS:"/workspace/:workspaceId/documents",DOCUMENTS_BY_RECORDING:"/workspace/:workspaceId/documents/recordings",DOCUMENTS_BY_TOPIC:"/workspace/:workspaceId/documents/topics",DOCUMENT:"/workspace/:workspaceId/documents/:documentId",INVITE:"/invite/:token",JOIN_ERROR:"/join-error"};__webpack_require__.d(__webpack_exports__,["Iq",0,value=>Object.entries(PATH_ROUTE).some(([key,path])=>key===value&&":workspaceId"===path.match(/:\w+|\*/g)?.join()),"WS",0,PATH_ROUTE,"vX",0,({routeKey,params})=>{const path=PATH_ROUTE[routeKey];return(0,react_router__WEBPACK_IMPORTED_MODULE_0__.tW)(path,params)}])},"./src/shared/utils/captureAnalyticsEvent/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var posthog_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/posthog-js@1.438.10_@types+react@19.2.18_react@19.2.8/node_modules/posthog-js/dist/module.mjs");__webpack_require__.d(__webpack_exports__,["L",0,({event,properties})=>{({NODE_ENV:"production",NODE_PATH:["/Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/storybook@10.6.1_@types+react@19.2.18_react@19.2.8/node_modules/storybook/node_modules","/Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/storybook@10.6.1_@types+react@19.2.18_react@19.2.8/node_modules","/Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/node_modules"],STORYBOOK:"true",PUBLIC_URL:".",STORYBOOK_DISABLE_TELEMETRY:"1"}).POSTHOG_KEY&&posthog_js__WEBPACK_IMPORTED_MODULE_0__.Ay.capture(event,properties)}])}}]);
//# sourceMappingURL=modules-widgets-workspace-WorkspaceInviteMemberCard-index-stories.c152ac01.iframe.bundle.js.map