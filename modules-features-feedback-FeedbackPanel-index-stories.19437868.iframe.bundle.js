"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6419],{"./src/modules/features/feedback/FeedbackPanel/index.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var _api_fetch_relay_f__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/api/fetch/relay/f/index.ts"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_provider_context_toastContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/provider/context/toastContext/index.tsx"),msw__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/msw@2.15.0_@types+node@26.1.2_typescript@7.0.2/node_modules/msw/lib/core/http.mjs"),msw__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/msw@2.15.0_@types+node@26.1.2_typescript@7.0.2/node_modules/msw/lib/core/HttpResponse.mjs"),msw__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/msw@2.15.0_@types+node@26.1.2_typescript@7.0.2/node_modules/msw/lib/core/delay.mjs"),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),react_router__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/components.js"),storybook_test__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("storybook/test"),___WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/modules/features/feedback/FeedbackPanel/index.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const FEEDBACK_REQUEST=`*${_api_fetch_relay_f__WEBPACK_IMPORTED_MODULE_0__.s}`,ISOLATED_DOCS={story:{inline:!1,iframeHeight:640}},Stage=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 1.5rem; /* 16px 24px */
  background-color: ${({theme})=>theme.neutral[50]};
`,fillFeedback=async(canvasElement,{type="오류가 있어요",content=""}={})=>{const canvas=(0,storybook_test__WEBPACK_IMPORTED_MODULE_8__.within)(canvasElement);await storybook_test__WEBPACK_IMPORTED_MODULE_8__.userEvent.click(canvas.getByText(type,{selector:"label"})),content&&await storybook_test__WEBPACK_IMPORTED_MODULE_8__.userEvent.type(canvas.getByRole("textbox",{name:"내용"}),content)},sendFeedback=async canvasElement=>{await fillFeedback(canvasElement,{content:"문서 복사 버튼을 눌렀는데 노션에 붙여 넣으니 표가 깨져요."}),await storybook_test__WEBPACK_IMPORTED_MODULE_8__.userEvent.click((0,storybook_test__WEBPACK_IMPORTED_MODULE_8__.within)(canvasElement).getByRole("button",{name:"보내기"}))},__WEBPACK_DEFAULT_EXPORT__={title:"Feedback/FeedbackPanel",component:___WEBPACK_IMPORTED_MODULE_9__.A,parameters:{design:[{name:"피드백 창구, 서비스 안 피드백 보내기",type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=4694-47945"},{name:"Feedback/Panel",type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=4691-46763"},{name:"Policy 카드",type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=4695-11235"}],docs:{description:{component:"서비스를 쓰다 불편하거나 오류를 만난 사람이 화면을 떠나지 않고 팀에게 피드백을 보내는 패널이에요.\n상단 메뉴의 「소식과 피드백」 → 「피드백 보내기」로 열고, 휴대폰에서는 사이드바 맨 아래 「피드백」으로 화면 아래 시트로 열어요.\n\n**동작 규칙**\n- 유형(불편해요, 오류가 있어요, 아이디어가 있어요, 좋았어요) 하나를 꼭 골라야 「보내기」가 켜져요. 내용은 적고 싶을 때만 적어요.\n- 고른 유형과 적은 내용은 이 탭에 남아요. 패널을 닫았다 다시 열거나 새로고침해도 그대로 보이고, 보내기에 성공하면 비워요.\n- X로 닫아요. 바깥 클릭과 ESC로 닫는 일은 패널을 띄운 쪽(상단 메뉴, 휴대폰 시트)이 맡아요.\n- 보내는 동안에는 「보내기」가 로딩으로 바뀌고, X와 유형 · 내용이 막혀요. 바깥 클릭과 ESC로도 닫히지 않아요.\n- 보내면 패널이 닫히고 「피드백을 보냈어요. 팀이 평일에 모아서 확인해요」 토스트가 떠요.\n- 보내지 못하면 패널을 그대로 두고 안내 문구를 보여 주며, 버튼이 「다시 보내기」로 바뀌어요. 적은 내용은 그대로예요.\n\n**보낸 피드백이 가는 곳**\n- 팀 Notion 「사용자 피드백 접수함」에 한 줄로 들어가요. 닉네임, 화면 주소와 그 세션의 사용 기록(PostHog 리플레이) 링크가 함께 들어가요.\n- 닉네임은 로그인한 회원의 값을 그대로 보내요. 패널에서 입력하거나 고치거나 뺄 수 없고, 불러오지 못했으면 닉네임 없이 보내요.\n- 저장된 뒤에만 PostHog에 유형과 점수(오류 1, 불편 2, 아이디어 3, 좋았어요 4)를 남겨요. 점수는 사용자에게 보이지 않아요.\n- 스토리북에서는 실제로 보내지 않고 저장된 것처럼만 응답해요."}}},args:{onClose:(0,storybook_test__WEBPACK_IMPORTED_MODULE_8__.fn)()},beforeEach:()=>{sessionStorage.clear()},decorators:[Story=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(react_router__WEBPACK_IMPORTED_MODULE_7__.fS,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_provider_context_toastContext__WEBPACK_IMPORTED_MODULE_2__.tE,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(Stage,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(Story,{})})})})]},Default={parameters:{design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=4691-46666"}}},TypeSelected={parameters:{design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=4827-51586"}},play:async({canvasElement})=>{await fillFeedback(canvasElement)}},Writing={parameters:{design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=4691-46689"}},play:async({canvasElement})=>{await fillFeedback(canvasElement,{content:"문서 복사 버튼을 눌렀는데 노션에 붙여 넣으니 표가 깨져요."})}},Sending={parameters:{design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=4691-46712"},msw:{handlers:{feedback:msw__WEBPACK_IMPORTED_MODULE_3__.L.post(FEEDBACK_REQUEST,async()=>(await(0,msw__WEBPACK_IMPORTED_MODULE_5__.cb)("infinite"),new msw__WEBPACK_IMPORTED_MODULE_4__.cS(null,{status:201})))}},docs:ISOLATED_DOCS},play:async({canvasElement})=>{await sendFeedback(canvasElement)}},Failed={parameters:{design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=4691-46738"},msw:{handlers:{feedback:msw__WEBPACK_IMPORTED_MODULE_3__.L.post(FEEDBACK_REQUEST,()=>new msw__WEBPACK_IMPORTED_MODULE_4__.cS(null,{status:502}))}},docs:ISOLATED_DOCS},play:async({canvasElement})=>{await sendFeedback(canvasElement)}},Sent={parameters:{design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=4694-48550"}},render:function SentStory(args){const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(!0);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FK,{children:isOpen&&(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(___WEBPACK_IMPORTED_MODULE_9__.A,{...args,onClose:()=>{args.onClose(),setIsOpen(!1)}})})},play:async({canvasElement})=>{await sendFeedback(canvasElement)}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    design: {\n      type: "figma",\n      url: "https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=4691-46666"\n    }\n  }\n}',...Default.parameters?.docs?.source},description:{story:"패널을 막 연 모습이에요. 유형을 고르기 전이라 「보내기」가 꺼져 있어요",...Default.parameters?.docs?.description}}},TypeSelected.parameters={...TypeSelected.parameters,docs:{...TypeSelected.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    design: {\n      type: "figma",\n      url: "https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=4827-51586"\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    await fillFeedback(canvasElement);\n  }\n}',...TypeSelected.parameters?.docs?.source},description:{story:"유형만 고른 모습이에요. 내용이 비어 있어도 「보내기」가 켜져요",...TypeSelected.parameters?.docs?.description}}},Writing.parameters={...Writing.parameters,docs:{...Writing.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    design: {\n      type: "figma",\n      url: "https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=4691-46689"\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    await fillFeedback(canvasElement, {\n      content: "문서 복사 버튼을 눌렀는데 노션에 붙여 넣으니 표가 깨져요."\n    });\n  }\n}',...Writing.parameters?.docs?.source},description:{story:"유형을 고르고 내용을 적는 중이에요. 적는 동안 입력창 테두리가 짙어져요",...Writing.parameters?.docs?.description}}},Sending.parameters={...Sending.parameters,docs:{...Sending.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    design: {\n      type: "figma",\n      url: "https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=4691-46712"\n    },\n    msw: {\n      handlers: {\n        feedback: http.post(FEEDBACK_REQUEST, async () => {\n          await delay("infinite");\n          return new HttpResponse(null, {\n            status: 201\n          });\n        })\n      }\n    },\n    docs: ISOLATED_DOCS\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    await sendFeedback(canvasElement);\n  }\n}',...Sending.parameters?.docs?.source},description:{story:"「보내기」를 누르고 저장되기를 기다리는 중이에요. 버튼이 로딩으로 바뀌고 X와 유형 · 내용이 막혀요",...Sending.parameters?.docs?.description}}},Failed.parameters={...Failed.parameters,docs:{...Failed.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    design: {\n      type: "figma",\n      url: "https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=4691-46738"\n    },\n    msw: {\n      handlers: {\n        feedback: http.post(FEEDBACK_REQUEST, () => new HttpResponse(null, {\n          status: 502\n        }))\n      }\n    },\n    docs: ISOLATED_DOCS\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    await sendFeedback(canvasElement);\n  }\n}',...Failed.parameters?.docs?.source},description:{story:"보내지 못한 모습이에요. 예: Notion이 저장을 거절했을 때. 적은 내용은 그대로 두고 「다시 보내기」로 바뀌어요",...Failed.parameters?.docs?.description}}},Sent.parameters={...Sent.parameters,docs:{...Sent.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    design: {\n      type: "figma",\n      url: "https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=4694-48550"\n    }\n  },\n  // 패널을 띄운 쪽처럼 닫기를 받으면 패널을 지워요\n  render: function SentStory(args) {\n    const [isOpen, setIsOpen] = useState(true);\n    return <>\n        {isOpen && <FeedbackPanel {...args} onClose={() => {\n        args.onClose();\n        setIsOpen(false);\n      }} />}\n      </>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    await sendFeedback(canvasElement);\n  }\n}',...Sent.parameters?.docs?.source},description:{story:"보낸 뒤의 모습이에요. 패널이 닫히고 완료 토스트가 떠요",...Sent.parameters?.docs?.description}}},__webpack_require__.d(__webpack_exports__,["Default",0,Default,"Failed",0,Failed,"Sending",0,Sending,"Sent",0,Sent,"TypeSelected",0,TypeSelected,"Writing",0,Writing,"__namedExportsOrder",0,["Default","TypeSelected","Writing","Sending","Failed","Sent"],"default",0,__WEBPACK_DEFAULT_EXPORT__])},"../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useMutation.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{n:()=>useMutation});var QueryClientProvider=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),utils=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+query-core@5.102.0/node_modules/@tanstack/query-core/build/modern/utils.js"),subscribable=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+query-core@5.102.0/node_modules/@tanstack/query-core/build/modern/subscribable.js"),notifyManager=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+query-core@5.102.0/node_modules/@tanstack/query-core/build/modern/notifyManager.js"),mutation=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+query-core@5.102.0/node_modules/@tanstack/query-core/build/modern/mutation.js"),MutationObserver=class extends subscribable.Q{#client;#currentResult=void 0;#currentMutation;#mutateOptions;constructor(client,options){super(),this.#client=client,this.setOptions(options),this.bindMethods(),this.#updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(options){const prevOptions=this.options;this.options=this.#client.defaultMutationOptions(options),(0,utils.f8)(this.options,prevOptions)||this.#client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#currentMutation,observer:this}),prevOptions?.mutationKey&&this.options.mutationKey&&(0,utils.EN)(prevOptions.mutationKey)!==(0,utils.EN)(this.options.mutationKey)?this.reset():"pending"===this.#currentMutation?.state.status&&this.#currentMutation.setOptions(this.options)}onSubscribe(){1===this.listeners.size&&this.#currentMutation&&(this.#currentMutation.addObserver(this),this.#updateResult())}onUnsubscribe(){this.hasListeners()||this.#currentMutation?.removeObserver(this)}onMutationUpdate(action){this.#updateResult(),this.#notify(action)}getCurrentResult(){return this.#currentResult}reset(){this.#currentMutation?.removeObserver(this),this.#currentMutation=void 0,this.#updateResult(),this.#notify()}mutate(variables,options){return this.#mutateOptions=options,this.#currentMutation?.removeObserver(this),this.#currentMutation=this.#client.getMutationCache().build(this.#client,this.options),this.#currentMutation.addObserver(this),this.#currentMutation.execute(variables)}#updateResult(){const state=this.#currentMutation?.state??(0,mutation.$)();this.#currentResult={...state,isPending:"pending"===state.status,isSuccess:"success"===state.status,isError:"error"===state.status,isIdle:"idle"===state.status,mutate:this.mutate,reset:this.reset}}#notify(action){notifyManager.jG.batch(()=>{if(this.#mutateOptions&&this.hasListeners()){const variables=this.#currentResult.variables,onMutateResult=this.#currentResult.context,context={client:this.#client,meta:this.options.meta,mutationKey:this.options.mutationKey};if("success"===action?.type){try{this.#mutateOptions.onSuccess?.(action.data,variables,onMutateResult,context)}catch(e){Promise.reject(e)}try{this.#mutateOptions.onSettled?.(action.data,null,variables,onMutateResult,context)}catch(e){Promise.reject(e)}}else if("error"===action?.type){try{this.#mutateOptions.onError?.(action.error,variables,onMutateResult,context)}catch(e){Promise.reject(e)}try{this.#mutateOptions.onSettled?.(void 0,action.error,variables,onMutateResult,context)}catch(e){Promise.reject(e)}}}this.listeners.forEach(listener=>{listener(this.#currentResult)})})}};function useMutation(options,queryClient){const client=(0,QueryClientProvider.jE)(queryClient),[observer]=react.useState(()=>new MutationObserver(client,options));react.useEffect(()=>{observer.setOptions(options)},[observer,options]);const result=react.useSyncExternalStore(react.useCallback(onStoreChange=>observer.subscribe(notifyManager.jG.batchCalls(onStoreChange)),[observer]),()=>observer.getCurrentResult(),()=>observer.getCurrentResult()),mutate=react.useCallback((...args)=>{observer.mutate(args[0],args[1]).catch(utils.lQ)},[observer]);if(result.error&&(0,utils.GU)(observer.options.throwOnError,[result.error]))throw result.error;return{...result,mutate,mutateAsync:result.mutate}}},"./src/modules/features/feedback/FeedbackPanel/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>FeedbackPanel});var breakpoint=__webpack_require__("./src/shared/constants/breakpoint/index.ts"),feedback=__webpack_require__("./src/shared/constants/feedback/index.ts"),emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Button=__webpack_require__("./src/shared/components/primitives/ui/Button/index.tsx"),Textarea=__webpack_require__("./src/shared/components/primitives/ui/Textarea/index.tsx"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),icons_close=__webpack_require__("./src/assets/icons/close.svg");class PostFeedbackRequestDto{type;content;pageUrl;replayUrl;nickname;constructor({type,content,pageUrl,replayUrl,nickname}){this.type=type,this.content=content,this.pageUrl=pageUrl,this.replayUrl=replayUrl,this.nickname=nickname}}var f=__webpack_require__("./src/shared/api/fetch/relay/f/index.ts"),queryKey_feedback=__webpack_require__("./src/shared/api/queryKey/feedback.ts"),useMutation=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useMutation.js");const mutations_useSendFeedbackMutation=()=>(0,useMutation.n)({mutationKey:queryKey_feedback.H.send(),mutationFn:input=>(0,f.c)(new PostFeedbackRequestDto(input))});var useMeQuery=__webpack_require__("./src/shared/api/queries/useMeQuery/index.ts"),toastMessages=__webpack_require__("./src/shared/constants/toastMessages/index.ts"),toastContext=__webpack_require__("./src/shared/provider/context/toastContext/index.tsx"),captureAnalyticsEvent=__webpack_require__("./src/shared/utils/captureAnalyticsEvent/index.ts"),feedbackDraft=__webpack_require__("./src/shared/utils/feedbackDraft/index.ts"),dist_module=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/posthog-js@1.438.10_@types+react@19.2.18_react@19.2.8/node_modules/posthog-js/dist/module.mjs");const getAnalyticsReplayUrl=()=>{if({NODE_ENV:"production",NODE_PATH:["/Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/storybook@10.6.1_@types+react@19.2.18_react@19.2.8/node_modules/storybook/node_modules","/Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/storybook@10.6.1_@types+react@19.2.18_react@19.2.8/node_modules","/Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/node_modules"],STORYBOOK:"true",PUBLIC_URL:".",STORYBOOK_DISABLE_TELEMETRY:"1"}.POSTHOG_KEY)return dist_module.Ay.get_session_replay_url({withTimestamp:!0,timestampLookBack:30})||void 0},model_useFeedbackForm=({onSent})=>{const[draft,setDraft]=(0,react.useState)(feedbackDraft.D5),{data:me}=(0,useMeQuery.A)(),{mutate,isPending,isError}=mutations_useSendFeedbackMutation(),{show}=(0,toastContext.dj)(),changeDraft=next=>{setDraft(next),(0,feedbackDraft._F)(next)};return{type:draft.type,content:draft.content,isSending:isPending,isFailed:isError,changeType:type=>changeDraft({...draft,type}),changeContent:content=>changeDraft({...draft,content}),send:()=>{const option=feedback.q.find(({type})=>type===draft.type);if(!option)return;const content=draft.content.trim();mutate({type:option.type,content,pageUrl:window.location.href,replayUrl:getAnalyticsReplayUrl(),nickname:me?.nickname},{onSuccess:()=>{(0,feedbackDraft.e6)(),(0,captureAnalyticsEvent.L)({event:"survey sent",properties:{feedback_type:option.label,feedback_score:option.score,...content&&{feedback_content:content}}}),show(toastMessages.D.FEEDBACK_SENT),onSent()}})}}};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function FeedbackPanel({onClose}){const titleId=(0,react.useId)(),{type,content,isSending,isFailed,changeType,changeContent,send}=model_useFeedbackForm({onSent:onClose}),focusedType=type??feedback.q[0].type;return(0,emotion_react_jsx_runtime_browser_esm.FD)(Container,{role:"dialog","aria-labelledby":titleId,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Header,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Title,{id:titleId,children:"피드백 보내기"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(CloseButton,{type:"button","aria-label":"닫기",disabled:isSending,onClick:onClose,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(icons_close.A,{size:18})})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Fields,{disabled:isSending,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(TypeGroup,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Question,{children:"어떤 의견인가요?"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(TypeList,{children:feedback.q.map(option=>(0,emotion_react_jsx_runtime_browser_esm.FD)(TypeChip,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("input",{type:"radio",name:"feedbackType",value:option.type,checked:type===option.type,onChange:()=>changeType(option.type),autoFocus:option.type===focusedType}),option.label]},option.type))})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(ContentField,{"aria-label":"내용",placeholder:"(선택) 어떤 화면에서 무엇을 하다가 겪었는지 적어 주시면 더 빨리 고칠 수 있어요.",maxLength:2e3,value:content,onChange:e=>changeContent(e.target.value)})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Notice,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("p",{children:"지금 보고 있는 화면 주소와 최근 사용 기록이 함께 전달돼요. 회의 내용이나 개인 정보는 적지 말아 주세요."}),(0,emotion_react_jsx_runtime_browser_esm.Y)("p",{children:"답장은 바로 오지 않아요. 팀이 평일에 모아서 확인해요."})]}),isFailed&&(0,emotion_react_jsx_runtime_browser_esm.Y)(ErrorMessage,{role:"alert",children:"보내지 못했어요. 적은 내용은 그대로 있으니 다시 보내 주세요."}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Actions,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{type:"button",size:"sm",disabled:null===type,isLoading:isSending,onClick:send,children:isFailed?"다시 보내기":"보내기"})})]})}const Container=emotion_styled_browser_esm.A.section`
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
`;FeedbackPanel.__docgenInfo={description:"팀에게 피드백을 보내는 패널. 유형 하나를 고르고 내용은 적고 싶을 때만 적어요(FEEDBACK-R5).\n\n고른 유형과 적은 내용은 이 탭에 남아, 닫았다 다시 열어도 그대로 보여요(FEEDBACK-R6).\n보내는 동안에는 「보내기」가 로딩으로 바뀌고 고친 내용을 받지 않아요. 보내지 못하면 안내 문구를 보여 주고 버튼을 「다시 보내기」로 바꿔요(FEEDBACK-R8).\n바깥 클릭 · ESC로 닫는 일은 패널을 띄운 쪽(GNB 팝오버, 휴대폰 시트)이 맡아요.\n\n열리면 유형 칩으로 포커스를 옮겨, 키보드로 연 사람이 바로 고를 수 있어요.\n휴대폰에서는 화면 아래에 붙는 시트 모양이에요(FEEDBACK-R2).",methods:[],displayName:"FeedbackPanel",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"패널을 닫아요. X를 누르거나 보내기에 성공하면 불러요. 보내는 동안에는 X가 꺼져 있어요"}}}},"./src/shared/api/queries/useMeQuery/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>queries_useMeQuery});var me=__webpack_require__("./src/shared/api/fetch/api/v1/auth/me/index.ts");const authKeys={all:["auth"],me:()=>[...authKeys.all,"me"]};var useQuery=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useQuery.js");const queries_useMeQuery=()=>(0,useQuery.I)({queryKey:authKeys.me(),queryFn:me.B})},"./src/shared/api/queryKey/feedback.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){const feedbackMutationKeys={all:["feedback"],send:()=>[...feedbackMutationKeys.all,"send"]};__webpack_require__.d(__webpack_exports__,["H",0,feedbackMutationKeys])},"./src/shared/components/primitives/ui/Button/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>Button});var _emotion_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_shared_components_primitives_ui_Spinner__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/components/primitives/ui/Spinner/index.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const BUTTON_SIZE={lg:{paddingX:"1.25rem",paddingY:"1rem",borderRadius:"0.875rem",gap:"0.5rem",iconSize:"1.5rem",spinnerSize:"1.5rem"},md:{paddingX:"1.125rem",paddingY:"0.75rem",borderRadius:"0.8125rem",gap:"0.4375rem",iconSize:"1.125rem",spinnerSize:"1.375rem"},sm:{paddingX:"1rem",paddingY:"0.5rem",borderRadius:"0.75rem",gap:"0.375rem",iconSize:"1rem",spinnerSize:"1.25rem"}};function Button({size="md",variant="filled",isLoading=!1,isFullWidth=!1,disabled=!1,type="button",children,...props}){const status=isLoading?"loading":disabled?"inactive":"active";return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(Root,{type,disabled:disabled||isLoading,"aria-busy":isLoading,$size:size,$variant:variant,$status:status,$isFullWidth:isFullWidth,...props,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(Content,{$isHidden:isLoading,$size:size,children}),isLoading&&(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(SpinnerWrapper,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_shared_components_primitives_ui_Spinner__WEBPACK_IMPORTED_MODULE_2__.A,{size:BUTTON_SIZE[size].spinnerSize})})]})}const Root=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.button`
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
`;Button.__docgenInfo={description:"액션을 실행하는 버튼.",methods:[],displayName:"Button",props:{size:{required:!1,tsType:{name:"union",raw:'"lg" | "md" | "sm"',elements:[{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"filled" | "outline" | "accent" | "danger"',elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"filled"',computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isFullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:'"button"',computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]}},"./src/shared/components/primitives/ui/Spinner/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>Spinner});var emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const spinnerMaskurl_namespaceObject="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTIyLjI4NDMgOC4zMjg1M0MyMi44NDYgOC4xMjc5OSAyMy4xNDMzIDcuNTA3MzkgMjIuODkzMSA2Ljk2NTk0QzIxLjgxMDIgNC42MjI2IDE5Ljk5NTIgMi42ODEyMSAxNy43MDc2IDEuNDQ0MjdDMTUuMTAyMSAwLjAzNTQzMjIgMTIuMDY3NSAtMC4zNTk5NzkgOS4xODc5NyAwLjMzNDEzMUM2LjMwODQxIDEuMDI4MjQgMy43ODczMSAyLjc2MjgyIDIuMTA5ODQgNS4yMDQwN0MwLjQzMjM1NiA3LjY0NTMyIC0wLjI4Mjk2NSAxMC42MjA3IDAuMTAxNTMgMTMuNTU3N0MwLjQ4NjAyNSAxNi40OTQ3IDEuOTQzMTcgMTkuMTg1NyA0LjE5MjU0IDIxLjExMjhDNi40NDE5MSAyMy4wNCA5LjMyNDU2IDI0LjA2NzEgMTIuMjg1OCAyMy45OTY2QzE1LjI0NjkgMjMuOTI2MSAxOC4wNzc0IDIyLjc2MjggMjAuMjMyNSAyMC43MzA4QzIyLjEyNDYgMTguOTQ2NiAyMy4zNzg3IDE2LjYwMzQgMjMuODIxOCAxNC4wNjAzQzIzLjkyNDIgMTMuNDcyNyAyMy40NzczIDEyLjk0OTUgMjIuODgyOCAxMi45MDA0VjEyLjkwMDRDMjIuMjg4NCAxMi44NTEyIDIxLjc3MjYgMTMuMjk1MiAyMS42NTg2IDEzLjg4MDdDMjEuMjY3IDE1Ljg5MjEgMjAuMjU0NiAxNy43NDExIDE4Ljc1MDYgMTkuMTU5MkMxNi45ODM1IDIwLjgyNTUgMTQuNjYyNSAyMS43Nzk0IDEyLjIzNDMgMjEuODM3MkM5LjgwNjE0IDIxLjg5NSA3LjQ0MjM3IDIxLjA1MjggNS41OTc4OCAxOS40NzI1QzMuNzUzNCAxNy44OTIyIDIuNTU4NTQgMTUuNjg1NiAyLjI0MzI1IDEzLjI3NzNDMS45Mjc5NyAxMC44NjkgMi41MTQ1MyA4LjQyOTE2IDMuODkwMDYgNi40MjczNEM1LjI2NTYgNC40MjU1MiA3LjMzMjkgMy4wMDMxNiA5LjY5NDE0IDIuNDMzOTlDMTIuMDU1NCAxLjg2NDgyIDE0LjU0MzcgMi4xODkwNSAxNi42ODAyIDMuMzQ0M0MxOC40OTg2IDQuMzI3NTEgMTkuOTUyOCA1Ljg1MzUzIDIwLjg0OSA3LjY5NjRDMjEuMTA5OSA4LjIzMjggMjEuNzIyNSA4LjUyOTA3IDIyLjI4NDMgOC4zMjg1M1Y4LjMyODUzWiIvPjwvc3ZnPgo=";var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function Spinner({size="1.5rem",...props}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(Root,{$size:size,"aria-hidden":!0,...props})}const spin=emotion_react_browser_esm.i7`
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
`;Spinner.__docgenInfo={description:"회전하는 로딩 표시.",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"string"},description:"지름. 부모 글자 크기를 따라가게 하려면 `1em`을 넘기면 돼요.",defaultValue:{value:'"1.5rem"',computed:!1}}},composes:["HTMLAttributes"]}},"./src/shared/components/primitives/ui/Textarea/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>Textarea});__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js");var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function Textarea({...props}){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(Root,{...props})}const Root=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.textarea`
  padding: 0;
  border: none;
  outline: none;
  resize: none;
`;Textarea.__docgenInfo={description:"여러 줄 텍스트 입력 UI.",methods:[],displayName:"Textarea",composes:["ComponentProps"]}},"./src/shared/constants/feedback/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,["q",0,[{type:"inconvenience",label:"불편해요",score:2},{type:"bug",label:"오류가 있어요",score:1},{type:"idea",label:"아이디어가 있어요",score:3},{type:"praise",label:"좋았어요",score:4}]])},"./src/shared/constants/toastMessages/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,["D",0,{DOCUMENT_CREATED:{variant:"success",message:"문서가 만들어졌어요"},ALL_DOCUMENTS_CONFIRMED:{variant:"success",message:"문서를 모두 확인했어요"},WORKSPACE_CHANGED:{variant:"success",message:"워크스페이스를 옮겼어요"},MEETING_AUDIO_CONNECTED:{variant:"success",message:"이어폰을 끼면 더 깨끗하게 녹음돼요"},RECORDING_CONNECTION_LOST:{variant:"caution",message:"연결이 끊겨 녹음이 끝났어요. 여기까지 문서로 정리하고 있어요"},RECORDING_CHUNKS_NOT_UPLOADED:{variant:"caution",message:"끊긴 동안의 소리 일부는 저장하지 못했어요"},RECORDING_DISCONNECTED:{variant:"caution",message:"연결이 끊겼어요. 녹음은 계속돼요"},RECORDING_ARCHIVE_FAILED:{variant:"caution",message:"저장 공간이 부족해요. 이 탭을 닫으면 끊긴 동안의 소리가 사라질 수 있어요"},RECORDING_ENDING_DISCONNECTED:{variant:"caution",message:"연결이 돌아오면 녹음을 끝낼게요. 이 탭을 닫지 말아 주세요"},OTHER_TAB_RECORDING_DISCONNECTED:{variant:"caution",message:"녹음 중인 탭의 연결이 끊겼어요"},RECORDING_TAKEN_OVER:{variant:"caution",message:"다른 탭에서 이 녹음을 이어 가고 있어요"},RECORDING_TIME_LIMIT_APPROACHING:{variant:"caution",message:"최대 녹음 시간까지 15분 남았어요. 시간이 되면 녹음을 끝내고 문서로 정리해요"},RECORDING_CONTROL_LOST:{variant:"caution",message:"이 탭에서 녹음을 이어갈 수 없어 녹음이 끝났어요"},RECORDING_UPLOAD_FAILED:{variant:"caution",message:"녹음 파일을 올리지 못해 문서로 정리하지 못했어요"},SESSION_EXPIRED:{variant:"caution",message:"로그인이 만료됐어요. 다시 로그인해 주세요."},RECORDING_INTERRUPTED:{variant:"caution",message:"녹음을 이어갈 수 없어 여기까지 저장했어요. 문서로 정리하고 있어요"},NO_DOCUMENT_CONTENT:{variant:"caution",message:"문서로 만들 내용이 없었어요"},QUESTION_SEND_FAILED:{variant:"error",message:"질문을 보내지 못했어요. 잠시 후 다시 시도해 주세요."},DOCUMENT_CONFIRM_FAILED:{variant:"error",message:"확인하지 못했어요. 다시 시도해 주세요."},RETRY_REQUEST_FAILED:{variant:"error",message:"다시 시도하지 못했어요. 잠시 후 다시 시도해 주세요."},WORKSPACE_LEAVE_FAILED:{variant:"error",message:"워크스페이스에서 나가지 못했어요. 다시 시도해 주세요."},OWNERSHIP_TRANSFER_FAILED:{variant:"error",message:"권한을 넘기지 못했어요. 다시 시도해 주세요."},RECORDING_END_FAILED:{variant:"error",message:"녹음을 끝내지 못했어요. 녹음은 계속되고 있어요. 다시 시도해 주세요."},RECORDING_RESUME_FAILED:{variant:"error",message:"이어서 녹음하지 못했어요. 다시 시도해 주세요."},LOGOUT_FAILED:{variant:"error",message:"로그아웃하지 못했어요. 다시 시도해 주세요."},COPY_FAILED:{variant:"error",message:"복사하지 못했어요. 다시 시도해 주세요."},FEEDBACK_SENT:{variant:"success",message:"피드백을 보냈어요. 팀이 평일에 모아서 확인해요"},WORKSPACE_ACCESS_DENIED:{variant:"error",message:"이 워크스페이스에 더 이상 들어갈 수 없어요."}}])},"./src/shared/utils/captureAnalyticsEvent/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var posthog_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/posthog-js@1.438.10_@types+react@19.2.18_react@19.2.8/node_modules/posthog-js/dist/module.mjs");__webpack_require__.d(__webpack_exports__,["L",0,({event,properties})=>{({NODE_ENV:"production",NODE_PATH:["/Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/storybook@10.6.1_@types+react@19.2.18_react@19.2.8/node_modules/storybook/node_modules","/Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/storybook@10.6.1_@types+react@19.2.18_react@19.2.8/node_modules","/Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/node_modules"],STORYBOOK:"true",PUBLIC_URL:".",STORYBOOK_DISABLE_TELEMETRY:"1"}).POSTHOG_KEY&&posthog_js__WEBPACK_IMPORTED_MODULE_0__.Ay.capture(event,properties)}])},"./src/shared/utils/feedbackDraft/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _constants_feedback__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/constants/feedback/index.ts");const EMPTY_DRAFT={type:null,content:""};__webpack_require__.d(__webpack_exports__,["D5",0,()=>{try{const saved=JSON.parse(sessionStorage.getItem("knot.feedback.draft")??"null");if("object"!=typeof saved||null===saved)return EMPTY_DRAFT;const{type,content}=saved;return{type:(value=type,_constants_feedback__WEBPACK_IMPORTED_MODULE_0__.q.some(({type})=>type===value)?type:null),content:"string"==typeof content?content:""}}catch{return EMPTY_DRAFT}var value},"_F",0,draft=>{try{sessionStorage.setItem("knot.feedback.draft",JSON.stringify(draft))}catch{}},"e6",0,()=>{try{sessionStorage.removeItem("knot.feedback.draft")}catch{}}])}}]);
//# sourceMappingURL=modules-features-feedback-FeedbackPanel-index-stories.19437868.iframe.bundle.js.map