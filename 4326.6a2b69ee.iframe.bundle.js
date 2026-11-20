"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4326],{"./src/assets/icons/feedback.svg"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),_excluded=["size"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgFeedback(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 18",width:size,height:size,focusable:"false","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3 4.75C3 3.784 3.784 3 4.75 3h8.5c.966 0 1.75.784 1.75 1.75v6a1.75 1.75 0 0 1-1.75 1.75H7.6l-3 2.5v-2.5c-.9 0-1.6-.75-1.6-1.65z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:1.5,d:"M6.5 7.75h5"})))};__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/modules/features/feedback/FeedbackPanel/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>FeedbackPanel});var breakpoint=__webpack_require__("./src/shared/constants/breakpoint/index.ts"),feedback=__webpack_require__("./src/shared/constants/feedback/index.ts"),emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Button=__webpack_require__("./src/shared/components/primitives/ui/Button/index.tsx"),Textarea=__webpack_require__("./src/shared/components/primitives/ui/Textarea/index.tsx"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),icons_close=__webpack_require__("./src/assets/icons/close.svg");class PostFeedbackRequestDto{type;content;pageUrl;replayUrl;nickname;constructor({type,content,pageUrl,replayUrl,nickname}){this.type=type,this.content=content,this.pageUrl=pageUrl,this.replayUrl=replayUrl,this.nickname=nickname}}var f=__webpack_require__("./src/shared/api/fetch/relay/f/index.ts"),queryKey_feedback=__webpack_require__("./src/shared/api/queryKey/feedback.ts"),useMutation=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useMutation.js");const mutations_useSendFeedbackMutation=()=>(0,useMutation.n)({mutationKey:queryKey_feedback.H.send(),mutationFn:input=>(0,f.c)(new PostFeedbackRequestDto(input))});var useMeQuery=__webpack_require__("./src/shared/api/queries/useMeQuery/index.ts"),toastMessages=__webpack_require__("./src/shared/constants/toastMessages/index.ts"),toastContext=__webpack_require__("./src/shared/provider/context/toastContext/index.tsx"),captureAnalyticsEvent=__webpack_require__("./src/shared/utils/captureAnalyticsEvent/index.ts"),feedbackDraft=__webpack_require__("./src/shared/utils/feedbackDraft/index.ts"),dist_module=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/posthog-js@1.438.10_@types+react@19.2.18_react@19.2.8/node_modules/posthog-js/dist/module.mjs");const getAnalyticsReplayUrl=()=>{if({NODE_ENV:"production",NODE_PATH:["/Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/storybook@10.6.1_@types+react@19.2.18_react@19.2.8/node_modules/storybook/node_modules","/Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/storybook@10.6.1_@types+react@19.2.18_react@19.2.8/node_modules","/Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/node_modules"],STORYBOOK:"true",PUBLIC_URL:".",STORYBOOK_DISABLE_TELEMETRY:"1"}.POSTHOG_KEY)return dist_module.Ay.get_session_replay_url({withTimestamp:!0,timestampLookBack:30})||void 0},model_useFeedbackForm=({onSent})=>{const[draft,setDraft]=(0,react.useState)(feedbackDraft.D5),{data:me}=(0,useMeQuery.A)(),{mutate,isPending,isError}=mutations_useSendFeedbackMutation(),{show}=(0,toastContext.dj)(),changeDraft=next=>{setDraft(next),(0,feedbackDraft._F)(next)};return{type:draft.type,content:draft.content,isSending:isPending,isFailed:isError,changeType:type=>changeDraft({...draft,type}),changeContent:content=>changeDraft({...draft,content}),send:()=>{const option=feedback.q.find(({type})=>type===draft.type);if(!option)return;const content=draft.content.trim();mutate({type:option.type,content,pageUrl:window.location.href,replayUrl:getAnalyticsReplayUrl(),nickname:me?.nickname},{onSuccess:()=>{(0,feedbackDraft.e6)(),(0,captureAnalyticsEvent.L)({event:"survey sent",properties:{feedback_type:option.label,feedback_score:option.score,...content&&{feedback_content:content}}}),show(toastMessages.D.FEEDBACK_SENT),onSent()}})}}};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function FeedbackPanel({onClose}){const titleId=(0,react.useId)(),{type,content,isSending,isFailed,changeType,changeContent,send}=model_useFeedbackForm({onSent:onClose}),focusedType=type??feedback.q[0].type;return(0,emotion_react_jsx_runtime_browser_esm.FD)(Container,{role:"dialog","aria-labelledby":titleId,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Header,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Title,{id:titleId,children:"피드백 보내기"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(CloseButton,{type:"button","aria-label":"닫기",disabled:isSending,onClick:onClose,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(icons_close.A,{size:18})})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Fields,{disabled:isSending,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(TypeGroup,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Question,{children:"어떤 의견인가요?"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(TypeList,{children:feedback.q.map(option=>(0,emotion_react_jsx_runtime_browser_esm.FD)(TypeChip,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("input",{type:"radio",name:"feedbackType",value:option.type,checked:type===option.type,onChange:()=>changeType(option.type),autoFocus:option.type===focusedType}),option.label]},option.type))})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(ContentField,{"aria-label":"내용",placeholder:"(선택) 어떤 화면에서 무엇을 하다가 겪었는지 적어 주시면 더 빨리 고칠 수 있어요.",maxLength:2e3,value:content,onChange:e=>changeContent(e.target.value)})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Notice,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("p",{children:"지금 보고 있는 화면 주소와 최근 사용 기록이 함께 전달돼요. 회의 내용이나 개인 정보는 적지 말아 주세요."}),(0,emotion_react_jsx_runtime_browser_esm.Y)("p",{children:"답장은 바로 오지 않아요. 팀이 평일에 모아서 확인해요."})]}),isFailed&&(0,emotion_react_jsx_runtime_browser_esm.Y)(ErrorMessage,{role:"alert",children:"보내지 못했어요. 적은 내용은 그대로 있으니 다시 보내 주세요."}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Actions,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{type:"button",size:"sm",disabled:null===type,isLoading:isSending,onClick:send,children:isFailed?"다시 보내기":"보내기"})})]})}const Container=emotion_styled_browser_esm.A.section`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 16px */
  width: 23.75rem; /* 380px */
  /* 좁은 화면에서도 팝오버가 지키는 좌우 16px 여백 안에 들어가요 */
  max-width: calc(100vw - 2rem);
  padding: 1.5rem; /* 24px */
  border: 1px solid ${({theme})=>theme.neutral[200]};
  border-radius: 1.25rem; /* 20px */
  background-color: ${({theme})=>theme.neutral[0]};
  box-shadow: 0 8px 24px 0 rgba(31, 30, 28, 0.14);

  /* 휴대폰에서는 사이드바의 「피드백」이 화면 아래 시트로 열어요(FEEDBACK-R2). 높이는 내용만큼, 최대 화면의 85% */
  ${breakpoint.Wi.mobile} {
    width: 100%;
    max-width: none;
    max-height: 85dvh;
    padding-bottom: calc(1.5rem + env(safe-area-inset-bottom)); /* 24px */
    border-radius: 1.25rem 1.25rem 0 0; /* 20px */
    overflow-y: auto;
  }
`,Header=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Title=emotion_styled_browser_esm.A.h2`
  margin: 0;
  color: ${({theme})=>theme.neutral[900]};
  ${({theme})=>theme.text.heading04};
`,CloseButton=emotion_styled_browser_esm.A.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem; /* 24px */
  height: 1.5rem; /* 24px */
  border-radius: 0.375rem; /* 6px */
  color: ${({theme})=>theme.neutral[600]};

  &:disabled {
    color: ${({theme})=>theme.neutral[300]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }

  /* 손가락으로 누를 때는 보이는 크기는 그대로 두고 누르는 영역만 44px로 넓혀요(RESP-R9) */
  @media (pointer: coarse) {
    position: relative;

    &::after {
      position: absolute;
      inset: -0.625rem; /* 10px */
      content: "";
    }
  }
`,Fields=emotion_styled_browser_esm.A.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 16px */
  min-width: 0;
  margin: 0;
  padding: 0;
  border: none;
`,TypeGroup=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 16px */
`,Question=emotion_styled_browser_esm.A.p`
  margin: 0;
  color: ${({theme})=>theme.neutral[700]};
  ${({theme})=>theme.text.caption02};
`,TypeList=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem; /* 8px */
`,TypeChip=emotion_styled_browser_esm.A.label`
  padding: 0.375rem 0.75rem; /* 6px 12px */
  border: 1px solid ${({theme})=>theme.neutral[300]};
  border-radius: 62.4375rem; /* 999px */
  background-color: ${({theme})=>theme.neutral[0]};
  color: ${({theme})=>theme.neutral[700]};
  cursor: pointer;
  ${({theme})=>theme.text.caption02};
  transition:
    background-color 0.2s ease-in,
    color 0.2s ease-in;

  & > input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  &:has(input:checked) {
    border-color: ${({theme})=>theme.neutral[800]};
    background-color: ${({theme})=>theme.neutral[800]};
    color: ${({theme})=>theme.neutral[0]};
  }

  &:has(input:focus-visible) {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }

  &:has(input:disabled) {
    cursor: default;
  }
`,ContentField=(0,emotion_styled_browser_esm.A)(Textarea.A)`
  height: 7.5rem; /* 120px */
  padding: 0.75rem 0.875rem; /* 12px 14px */
  border: 1px solid ${({theme})=>theme.neutral[400]};
  border-radius: 0.875rem; /* 14px */
  background-color: ${({theme})=>theme.neutral[0]};
  color: ${({theme})=>theme.neutral[900]};
  ${({theme})=>theme.text.body01};

  &::placeholder {
    color: ${({theme})=>theme.neutral[500]};
  }

  &:focus {
    border-color: ${({theme})=>theme.neutral[800]};
  }
`,Notice=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem; /* 4px */
  padding: 0.625rem 0.75rem; /* 10px 12px */
  border-radius: 0.75rem; /* 12px */
  background-color: ${({theme})=>theme.neutral[50]};
  color: ${({theme})=>theme.neutral[600]};
  ${({theme})=>theme.text.caption01};

  & > p {
    margin: 0;
  }
`,ErrorMessage=emotion_styled_browser_esm.A.p`
  margin: 0;
  padding: 0.625rem 0.75rem; /* 10px 12px */
  border-radius: 0.75rem; /* 12px */
  background-color: ${({theme})=>theme.sub.warning[50]};
  color: ${({theme})=>theme.sub.warning[700]};
  ${({theme})=>theme.text.caption02};
`,Actions=emotion_styled_browser_esm.A.div`
  display: flex;
  justify-content: flex-end;
`;FeedbackPanel.__docgenInfo={description:"팀에게 피드백을 보내는 패널. 유형 하나를 고르고 내용은 적고 싶을 때만 적어요(FEEDBACK-R5).\n\n고른 유형과 적은 내용은 이 탭에 남아, 닫았다 다시 열어도 그대로 보여요(FEEDBACK-R6).\n보내는 동안에는 「보내기」가 로딩으로 바뀌고 고친 내용을 받지 않아요. 보내지 못하면 안내 문구를 보여 주고 버튼을 「다시 보내기」로 바꿔요(FEEDBACK-R8).\n바깥 클릭 · ESC로 닫는 일은 패널을 띄운 쪽(GNB 팝오버, 휴대폰 시트)이 맡아요.\n\n열리면 유형 칩으로 포커스를 옮겨, 키보드로 연 사람이 바로 고를 수 있어요.\n휴대폰에서는 화면 아래에 붙는 시트 모양이에요(FEEDBACK-R2).",methods:[],displayName:"FeedbackPanel",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"패널을 닫아요. X를 누르거나 보내기에 성공하면 불러요. 보내는 동안에는 X가 꺼져 있어요"}}}},"./src/shared/api/queries/useMeQuery/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>queries_useMeQuery});var me=__webpack_require__("./src/shared/api/fetch/api/v1/auth/me/index.ts");const authKeys={all:["auth"],me:()=>[...authKeys.all,"me"]};var useQuery=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useQuery.js");const queries_useMeQuery=()=>(0,useQuery.I)({queryKey:authKeys.me(),queryFn:me.B})},"./src/shared/api/queryKey/feedback.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){const feedbackMutationKeys={all:["feedback"],send:()=>[...feedbackMutationKeys.all,"send"]};__webpack_require__.d(__webpack_exports__,["H",0,feedbackMutationKeys])},"./src/shared/components/primitives/ui/Textarea/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>Textarea});__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js");var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function Textarea({...props}){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(Root,{...props})}const Root=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.textarea`
  padding: 0;
  border: none;
  outline: none;
  resize: none;
`;Textarea.__docgenInfo={description:"여러 줄 텍스트 입력 UI.",methods:[],displayName:"Textarea",composes:["ComponentProps"]}},"./src/shared/constants/feedback/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,["q",0,[{type:"inconvenience",label:"불편해요",score:2},{type:"bug",label:"오류가 있어요",score:1},{type:"idea",label:"아이디어가 있어요",score:3},{type:"praise",label:"좋았어요",score:4}]])},"./src/shared/hooks/domain/feedback/useIsSendingFeedback/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _api_queryKey_feedback__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/api/queryKey/feedback.ts"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useMutationState.js");const __WEBPACK_DEFAULT_EXPORT__=()=>({isSendingFeedback:(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.l)({mutationKey:_api_queryKey_feedback__WEBPACK_IMPORTED_MODULE_0__.H.send()})>0});__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/utils/feedbackDraft/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _constants_feedback__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/constants/feedback/index.ts");const EMPTY_DRAFT={type:null,content:""};__webpack_require__.d(__webpack_exports__,["D5",0,()=>{try{const saved=JSON.parse(sessionStorage.getItem("knot.feedback.draft")??"null");if("object"!=typeof saved||null===saved)return EMPTY_DRAFT;const{type,content}=saved;return{type:(value=type,_constants_feedback__WEBPACK_IMPORTED_MODULE_0__.q.some(({type})=>type===value)?type:null),content:"string"==typeof content?content:""}}catch{return EMPTY_DRAFT}var value},"_F",0,draft=>{try{sessionStorage.setItem("knot.feedback.draft",JSON.stringify(draft))}catch{}},"e6",0,()=>{try{sessionStorage.removeItem("knot.feedback.draft")}catch{}}])}}]);
//# sourceMappingURL=4326.6a2b69ee.iframe.bundle.js.map