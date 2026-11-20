"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3725],{"./src/modules/widgets/search/SearchTutorial/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>SearchTutorial});var emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),useKeyDown=__webpack_require__("./src/shared/hooks/common/useKeyDown/index.ts"),searchTutorialStore=__webpack_require__("./src/shared/store/searchTutorialStore/index.ts"),react_dom=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-dom@19.2.8_react@19.2.8/node_modules/react-dom/index.js");const SEARCH_TUTORIAL_TARGET_searchTab="search-tab",SEARCH_TUTORIAL_TARGET_dockChat="dock-chat",SEARCH_TUTORIAL_TARGET_dockInput="dock-input",SEARCH_TUTORIAL_TARGET_conversation="conversation",SEARCH_TUTORIAL_TARGET_questionKinds="question-kinds",COACH_COPY={1:{title:"궁금한 건 탐색에 물어보세요",description:"정리된 기록에서 찾아 답해요. 예시로 어떻게 쓰는지 보여 드릴게요."},2:{title:"평소 말하듯 물어보면 돼요",description:"이름이나 날짜를 몰라도 괜찮아요. 예시 질문을 대신 보내 볼게요."},3:{title:"결론과 근거 문서를 함께 보여 줘요",description:"실제 답변에서는 카드를 눌러 원래 문서를 확인할 수 있어요. 문서에 없는 내용은 없다고 답해요."},4:{title:"이제 자유롭게 물어보세요",description:"궁금한 걸 그대로 적거나 아래 질문을 눌러 보세요."}},FIRST_STEP_DISMISS_LABEL={default:"다음에 볼게요",document:"다음에 볼게요",again:"닫기"};var useMeQuery=__webpack_require__("./src/shared/api/queries/useMeQuery/index.ts"),searchTutorial=__webpack_require__("./src/shared/constants/searchTutorial/index.ts"),useNavigateToNewChat=__webpack_require__("./src/shared/hooks/domain/chat/useNavigateToNewChat/index.ts"),useSearchAnswerControl=__webpack_require__("./src/shared/hooks/domain/search/useSearchAnswerControl/index.ts"),searchAnswerStore=__webpack_require__("./src/shared/store/searchAnswerStore/index.ts"),captureAnalyticsEvent=__webpack_require__("./src/shared/utils/captureAnalyticsEvent/index.ts"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),hooks=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/hooks.js");const toLocalDate=date=>`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`,getKey=memberId=>`knot.searchTutorial.${memberId}`;var PATH_ROUTE=__webpack_require__("./src/shared/routes/PATH_ROUTE.ts");const useSearchTutorialScreen=()=>{const isHome=null!==(0,hooks.RQ)({path:PATH_ROUTE.WS.WORKSPACE_HOME,end:!0}),isChat=null!==(0,hooks.RQ)(PATH_ROUTE.WS.CHAT),isChatSession=null!==(0,hooks.RQ)(PATH_ROUTE.WS.CHAT_SESSION),isDocumentsByRecording=null!==(0,hooks.RQ)(PATH_ROUTE.WS.DOCUMENTS_BY_RECORDING),isDocumentsByTopic=null!==(0,hooks.RQ)(PATH_ROUTE.WS.DOCUMENTS_BY_TOPIC),isDocumentsRoot=null!==(0,hooks.RQ)({path:PATH_ROUTE.WS.DOCUMENTS,end:!0}),isDocument=null!==(0,hooks.RQ)(PATH_ROUTE.WS.DOCUMENT),isRecordingDocument=null!==(0,hooks.RQ)(PATH_ROUTE.WS.RECORDING_DOCUMENT),isChatScreen=isChat||isChatSession;return isHome?{screen:"home",isChatScreen}:isChatScreen?{screen:"search",isChatScreen}:isDocumentsRoot||isDocumentsByRecording||isDocumentsByTopic?{screen:"documents",isChatScreen}:isRecordingDocument?{screen:"recording_document",isChatScreen}:isDocument?{screen:"document",isChatScreen}:{screen:null,isChatScreen}},captureTutorialEnded=({endResult,step,workspaceId})=>(0,captureAnalyticsEvent.L)({event:"search_tutorial_ended",properties:{result:endResult.result,step,via:"via"in endResult?endResult.via:void 0,question_kind:"questionKind"in endResult?endResult.questionKind:void 0,workspace_id:workspaceId}}),useSearchTutorialFlow=()=>{const{workspaceId}=(0,hooks.g)(),{isChatScreen}=useSearchTutorialScreen(),{data:me}=(0,useMeQuery.A)(),{navigateToNewChat}=(0,useNavigateToNewChat.A)(),{sendQuestion}=(0,useSearchAnswerControl.A)(),step=(0,searchTutorialStore.n)(state=>state.step),goTo=(0,searchTutorialStore.n)(state=>state.goTo),setDraft=(0,searchTutorialStore.n)(state=>state.setDraft),endTutorial=(0,searchTutorialStore.n)(state=>state.end),answerStatus=(0,searchAnswerStore.b)(state=>state.status),numericWorkspaceId=Number(workspaceId),end=endResult=>{null!==step&&(me&&((memberId,record)=>{try{localStorage.setItem(getKey(memberId),JSON.stringify(record))}catch{}})(me.memberId,"snoozed"===endResult.result?{state:"snoozed",at:toLocalDate(new Date)}:{state:"done"}),captureTutorialEnded({endResult,step,workspaceId:numericWorkspaceId}),endTutorial())};(0,react.useEffect)(()=>{null!==step&&(0,captureAnalyticsEvent.L)({event:"search_tutorial_step_viewed",properties:{step,workspace_id:numericWorkspaceId}})},[step,numericWorkspaceId]),(0,react.useEffect)(()=>{if(2!==step)return;const{question}=searchTutorial.B;let sendTimer,length="function"==typeof window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?question.length:0;setDraft(question.slice(0,length));const typingTimer=window.setInterval(()=>{if(length<question.length)return length+=1,void setDraft(question.slice(0,length));window.clearInterval(typingTimer),sendTimer=window.setTimeout(()=>goTo(3),500)},55);return()=>{window.clearInterval(typingTimer),window.clearTimeout(sendTimer)}},[step,setDraft,goTo]);const previousAnswerStatusRef=(0,react.useRef)(answerStatus);(0,react.useEffect)(()=>{const previous=previousAnswerStatusRef.current;previousAnswerStatusRef.current=answerStatus,4===step&&"SENDING"!==previous&&"SENDING"===answerStatus&&end({result:"completed",via:"typed"})},[answerStatus,step]);const isMovingToChatRef=(0,react.useRef)(!1);(0,react.useEffect)(()=>{isChatScreen&&(isMovingToChatRef.current=!1),null===step||1===step||isChatScreen||isMovingToChatRef.current||end({result:"left"})},[isChatScreen,step]);const isLeftCapturedRef=(0,react.useRef)(!1);(0,react.useEffect)(()=>{if(null===step)return void(isLeftCapturedRef.current=!1);const handlePageHide=()=>{isLeftCapturedRef.current||(isLeftCapturedRef.current=!0,captureTutorialEnded({endResult:{result:"left"},step,workspaceId:numericWorkspaceId}))};return window.addEventListener("pagehide",handlePageHide),()=>window.removeEventListener("pagehide",handlePageHide)},[step,numericWorkspaceId]);return{step,proceedFromFirst:()=>{workspaceId&&(isMovingToChatRef.current=!0,navigateToNewChat(workspaceId),goTo(2))},dismissFirst:isAgain=>end({result:isAgain?"closed":"snoozed"}),goToNext:next=>goTo(next),skip:()=>end({result:"skipped"}),finish:()=>end({result:"completed",via:"finish_button"}),chooseQuestionKind:async(kind,question)=>{end({result:"completed",via:"question_kind",questionKind:kind}),await sendQuestion({workspaceId:numericWorkspaceId,conversationId:void 0,content:question,entry:"tutorial"})}}};var documents=__webpack_require__("./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/documents/index.ts"),queryKey_document=__webpack_require__("./src/shared/api/queryKey/document.ts"),useQuery=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useQuery.js");const queries_useRecentDocumentsQuery=({workspaceId})=>(0,useQuery.I)({queryKey:queryKey_document.Y.recentList({workspaceId}),queryFn:()=>(0,documents.Bm)({workspaceId,size:3})});var toastContext=__webpack_require__("./src/shared/provider/context/toastContext/index.tsx"),recordingStore=__webpack_require__("./src/shared/store/recordingStore/index.ts");const useSearchTutorialTrigger=()=>{const{workspaceId}=(0,hooks.g)(),{pathname}=(0,hooks.zy)(),{screen}=useSearchTutorialScreen(),{data:me}=(0,useMeQuery.A)(),{data:recentDocuments}=queries_useRecentDocumentsQuery({workspaceId:Number(workspaceId)}),hasToast=(0,toastContext.FF)(),isRecording=(0,recordingStore.A)(state=>"idle"!==state.status),step=(0,searchTutorialStore.n)(state=>state.step),start=(0,searchTutorialStore.n)(state=>state.start),hasStartedRef=(0,react.useRef)(!1),[isDocumentChecked,setIsDocumentChecked]=(0,react.useState)(!1),memberId=me?.memberId,hasDocuments=(recentDocuments?.items.length??0)>0,entry=void 0===memberId?null:(record=(memberId=>{let raw;try{raw=localStorage.getItem(getKey(memberId))}catch{return{state:"done"}}if(null===raw)return null;try{const parsed=JSON.parse(raw);return(value=>{if("object"!=typeof value||null===value)return!1;const{state,at}=value;return"done"===state||"snoozed"===state&&"string"==typeof at})(parsed)?parsed:null}catch{return null}})(memberId),today=toLocalDate(new Date),null===record?"first":"done"===record.state?null:today>record.at?"again":null);var record,today;const isRecordingDocument="recording_document"===screen;(0,react.useEffect)(()=>{if(setIsDocumentChecked(!1),!isRecordingDocument)return;const scrollRoot=document.querySelector("[data-analytics-scroll-root]"),check=()=>setIsDocumentChecked(!0),timer=window.setTimeout(check,5e3);return scrollRoot?.addEventListener("scroll",check,{once:!0}),()=>{window.clearTimeout(timer),scrollRoot?.removeEventListener("scroll",check)}},[isRecordingDocument,pathname]);const isEligible=!hasStartedRef.current&&null===step&&null!==screen&&null!==entry&&hasDocuments&&!hasToast&&!isRecording&&(!isRecordingDocument||isDocumentChecked);(0,react.useEffect)(()=>{if(!isEligible||null===screen||null===entry)return;const timer=window.setInterval(()=>{if((()=>{const active=document.activeElement,isTyping=(active instanceof HTMLTextAreaElement||active instanceof HTMLInputElement)&&active.value.trim().length>0,isDialogOpen=null!==document.querySelector('[role="dialog"], [aria-modal="true"]');return isTyping||isDialogOpen})())return;window.clearInterval(timer),hasStartedRef.current=!0;start({source:screen,variant:"again"===entry?"again":isRecordingDocument?"document":"default"}),(0,captureAnalyticsEvent.L)({event:"search_tutorial_shown",properties:{source:screen,is_again:"again"===entry,workspace_id:Number(workspaceId)}})},600);return()=>window.clearInterval(timer)},[isEligible,screen,entry,isRecordingDocument,start,workspaceId,pathname])},findTarget=name=>{const candidates=document.querySelectorAll(`[data-search-tutorial="${name}"]`);return Array.from(candidates).find(element=>{const rect=element.getBoundingClientRect();return rect.width>0&&rect.height>0})},measure=targets=>{const rects={};for(const name of targets){const element=findTarget(name);if(!element)continue;const{top,left,width,height}=element.getBoundingClientRect();rects[name]={top,left,width,height}}return{rects,viewport:{width:window.innerWidth,height:window.innerHeight}}},useSpotlightRects=(targets,isEnabled)=>{const[layout,setLayout]=(0,react.useState)(()=>measure([])),targetKey=targets.join(",");return(0,react.useEffect)(()=>{if(!isEnabled)return;const names=targetKey.split(",").filter(Boolean);let frame=0;const tick=()=>{const next=measure(names);setLayout(previous=>{return a=previous,b=next,JSON.stringify(a)===JSON.stringify(b)?previous:next;var a,b}),frame=window.requestAnimationFrame(tick)};return tick(),()=>window.cancelAnimationFrame(frame)},[targetKey,isEnabled]),layout};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function CoachCard({step,title,description,footnote,actions,style}){return(0,emotion_react_jsx_runtime_browser_esm.FD)(Container,{role:"dialog","aria-modal":"false","aria-labelledby":"search-tutorial-title",style,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Progress,{children:[Array.from({length:4},(_,index)=>(0,emotion_react_jsx_runtime_browser_esm.Y)(Dot,{$isCurrent:index+1===step,"aria-hidden":"true"},index)),(0,emotion_react_jsx_runtime_browser_esm.FD)(StepText,{children:[step," / ",4]})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Text,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Title,{id:"search-tutorial-title",children:title}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Description,{children:description})]}),footnote&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Footnote,{"aria-live":"polite",children:footnote}),actions&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Actions,{children:actions})]})}const Container=emotion_styled_browser_esm.A.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* 12px */
  width: min(${21.25}rem, calc(100vw - 2rem));
  padding: 1.25rem; /* 20px */
  border-radius: 1rem; /* 16px */
  background-color: ${({theme})=>theme.neutral[0]};
  box-shadow:
    0 1px 2px rgba(31, 30, 28, 0.06),
    0 12px 32px -6px rgba(31, 30, 28, 0.18);
  pointer-events: auto;
`,Progress=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  gap: 0.375rem; /* 6px */
`,Dot=emotion_styled_browser_esm.A.span`
  width: ${({$isCurrent})=>$isCurrent?"1rem":"0.375rem"}; /* 16px : 6px */
  height: 0.375rem; /* 6px */
  border-radius: 0.1875rem; /* 3px */
  background-color: ${({theme,$isCurrent})=>$isCurrent?theme.neutral[800]:theme.neutral[300]};
`,StepText=emotion_styled_browser_esm.A.span`
  ${({theme})=>theme.text.caption01};
  color: ${({theme})=>theme.neutral[600]};
`,Text=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem; /* 6px */
`,Title=emotion_styled_browser_esm.A.h2`
  ${({theme})=>theme.text.heading04};
  color: ${({theme})=>theme.neutral[900]};
`,Description=emotion_styled_browser_esm.A.p`
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.neutral[600]};
`,Footnote=emotion_styled_browser_esm.A.p`
  ${({theme})=>theme.text.caption01};
  color: ${({theme})=>theme.neutral[600]};
`,Actions=emotion_styled_browser_esm.A.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.25rem; /* 4px */
`,CoachButton=emotion_styled_browser_esm.A.button`
  padding: 0.5625rem 1rem; /* 9px 16px */
  border-radius: 999px;
  ${({theme})=>theme.text.caption02};
  font-weight: 500;
  color: ${({theme,$variant})=>"primary"===$variant?theme.neutral[0]:theme.neutral[600]};
  background-color: ${({theme,$variant})=>"primary"===$variant?theme.neutral[800]:"transparent"};
  cursor: pointer;

  &:hover {
    background-color: ${({theme,$variant})=>"primary"===$variant?theme.neutral[900]:theme.neutral[100]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }
`;CoachCard.__docgenInfo={description:"탐색 튜토리얼의 안내 카드. 진행 점과 「n / 4」, 제목, 설명, 동작 버튼을 담아요.\n\n놓일 자리는 밝힌 대상에 맞춰 튜토리얼이 정해요.",methods:[],displayName:"CoachCard",props:{step:{required:!0,tsType:{name:"number"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},footnote:{required:!1,tsType:{name:"string"},description:"동작 버튼 아래에 두는 작은 진행 안내(예: 질문을 입력하는 중…)"},actions:{required:!1,tsType:{name:"ReactNode"},description:"오른쪽 아래 동작 버튼들"},style:{required:!1,tsType:{name:"CSSProperties"},description:"화면 안 위치. 밝힌 대상 옆에 놓여요"}}};var speechBubble=__webpack_require__("./src/assets/icons/speechBubble.svg");function QuestionKindCards({style,onChoose}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(List,{"data-search-tutorial":SEARCH_TUTORIAL_TARGET_questionKinds,"aria-label":"이렇게 물어볼 수 있어요",style,children:searchTutorial.X.map(({kind,question,label})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{children:(0,emotion_react_jsx_runtime_browser_esm.FD)(Card,{type:"button",onClick:()=>onChoose(kind,question),children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Question,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(speechBubble.A,{size:18,"aria-hidden":"true"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{children:question})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Kind,{children:label})]})},kind))})}const List=emotion_styled_browser_esm.A.ul`
  position: fixed;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem; /* 12px */
  pointer-events: auto;

  /* 좁은 화면에서는 세로로 쌓아요 */
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,Card=emotion_styled_browser_esm.A.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem; /* 8px */
  width: 100%;
  height: 100%;
  padding: 1rem 1.125rem; /* 16px 18px */
  border: 1px solid transparent;
  border-radius: 1rem; /* 16px */
  background-color: ${({theme})=>theme.neutral[0]};
  box-shadow: ${({theme})=>theme.shadow02};
  text-align: left;
  cursor: pointer;

  &:hover {
    border-color: ${({theme})=>theme.neutral[300]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }
`,Question=emotion_styled_browser_esm.A.span`
  display: flex;
  gap: 0.5rem; /* 8px */
  ${({theme})=>theme.text.label01};
  color: ${({theme})=>theme.neutral[900]};

  & > svg {
    flex-shrink: 0;
    margin-top: 0.125rem; /* 2px */
    color: ${({theme})=>theme.neutral[700]};
  }

  & > span {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`,Kind=emotion_styled_browser_esm.A.span`
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.neutral[600]};
`;function TutorialBar({onSkip}){return(0,emotion_react_jsx_runtime_browser_esm.FD)(TutorialBar_Container,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Label,{children:"탐색 둘러보기"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(TutorialBar_Description,{children:"예시 대화라 대화 목록에 남지 않아요"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(SkipButton,{type:"button",onClick:onSkip,children:"건너뛰기"})]})}QuestionKindCards.__docgenInfo={description:"튜토리얼 마지막 단계에서 독 입력창 위에 띄우는 질문 종류 카드 3개. 누르면 그 질문을 실제로 보내요.",methods:[],displayName:"QuestionKindCards",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""},onChoose:{required:!0,tsType:{name:"signature",type:"function",raw:"(kind: SearchTutorialQuestionKind, question: string) => void",signature:{arguments:[{type:{name:"SearchTutorialQuestionKind"},name:"kind"},{type:{name:"string"},name:"question"}],return:{name:"void"}}},description:""}}};const TutorialBar_Container=emotion_styled_browser_esm.A.div`
  position: fixed;
  top: 5rem; /* 80px, GNB 아래 */
  left: 50%;
  display: flex;
  align-items: center;
  gap: 0.75rem; /* 12px */
  max-width: calc(100vw - 2rem);
  padding: 0.5rem 0.5rem 0.5rem 1rem; /* 8px 8px 8px 16px */
  border-radius: 999px;
  background-color: ${({theme})=>theme.neutral[800]};
  transform: translateX(-50%);
  pointer-events: auto;
`,Label=emotion_styled_browser_esm.A.span`
  flex-shrink: 0;
  ${({theme})=>theme.text.caption02};
  font-weight: 500;
  color: ${({theme})=>theme.neutral[0]};
`,TutorialBar_Description=emotion_styled_browser_esm.A.span`
  overflow: hidden;
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.neutral[300]};
  white-space: nowrap;
  text-overflow: ellipsis;
`,SkipButton=emotion_styled_browser_esm.A.button`
  flex-shrink: 0;
  padding: 0.375rem 0.75rem; /* 6px 12px */
  border-radius: 999px;
  ${({theme})=>theme.text.caption02};
  font-weight: 500;
  color: ${({theme})=>theme.neutral[0]};
  background-color: rgba(255, 255, 255, 0.14);
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.24);
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.neutral[0]};
    outline-offset: 2px;
  }
`;TutorialBar.__docgenInfo={description:"튜토리얼 2~4단계에 화면 위쪽 가운데에 띄우는 바. 예시 대화라 대화 목록에 남지 않는다고 알리고 건너뛰기를 둬요.",methods:[],displayName:"TutorialBar",props:{onSkip:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const toHole=rect=>{const height=rect.height+12;return{top:rect.top-6,left:rect.left-6,width:rect.width+12,height,radius:Math.min(height/2,20)}},roundedRectPath=({top,left,width,height,radius})=>{const r=Math.max(0,Math.min(radius,width/2,height/2)),right=left+width,bottom=top+height;return[`M${left+r} ${top}`,"H"+(right-r),`A${r} ${r} 0 0 1 ${right} ${top+r}`,"V"+(bottom-r),`A${r} ${r} 0 0 1 ${right-r} ${bottom}`,`H${left+r}`,`A${r} ${r} 0 0 1 ${left} ${bottom-r}`,`V${top+r}`,`A${r} ${r} 0 0 1 ${left+r} ${top}`,"Z"].join(" ")},toDimClipPath=(viewport,holes)=>`path(evenodd, "${[`M0 0 H${viewport.width} V${viewport.height} H0 Z`,...holes.map(roundedRectPath)].join(" ")}")`,clampLeft=(left,viewportWidth)=>{const width=Math.min(340,viewportWidth-32);return Math.min(Math.max(left,16),viewportWidth-width-16)},placeBelowStart=(hole,viewport,cardHeight=200)=>({top:Math.min(hole.top+hole.height+16,viewport.height-cardHeight-16),left:clampLeft(hole.left,viewport.width)}),placeAboveStart=(hole,viewport)=>({bottom:viewport.height-hole.top+16,left:clampLeft(hole.left,viewport.width)});function SearchTutorial(){useSearchTutorialTrigger();const{step,proceedFromFirst,dismissFirst,goToNext,skip,finish,chooseQuestionKind}=useSearchTutorialFlow(),variant=(0,searchTutorialStore.n)(state=>state.variant),isAnswerShown=(0,searchTutorialStore.n)(state=>state.isAnswerShown),{isChatScreen}=useSearchTutorialScreen(),{rects,viewport}=useSpotlightRects(((step,isChatScreen)=>{switch(step){case 1:return[SEARCH_TUTORIAL_TARGET_searchTab,isChatScreen?SEARCH_TUTORIAL_TARGET_dockInput:SEARCH_TUTORIAL_TARGET_dockChat];case 2:return[SEARCH_TUTORIAL_TARGET_dockInput];case 3:return[SEARCH_TUTORIAL_TARGET_conversation];case 4:return[SEARCH_TUTORIAL_TARGET_dockInput,SEARCH_TUTORIAL_TARGET_questionKinds];default:return[]}})(step,isChatScreen),null!==step),isAgain="again"===variant;if((0,useKeyDown.A)({key:"Escape",isEnabled:null!==step,onKeyDown:()=>1===step?dismissFirst(isAgain):skip()}),null===step)return null;const searchTab=rects[SEARCH_TUTORIAL_TARGET_searchTab],dockChat=rects[SEARCH_TUTORIAL_TARGET_dockChat],dockInput=rects[SEARCH_TUTORIAL_TARGET_dockInput],conversation=rects[SEARCH_TUTORIAL_TARGET_conversation],questionKinds=rects[SEARCH_TUTORIAL_TARGET_questionKinds],holes=[],addHole=rect=>{rect&&holes.push(toHole(rect))};1===step&&(addHole(searchTab),addHole(isChatScreen?dockInput:dockChat)),2===step&&addHole(dockInput),3===step&&addHole(conversation),4===step&&dockInput&&addHole(questionKinds?((a,b)=>{const top=Math.min(a.top,b.top),left=Math.min(a.left,b.left);return{top,left,width:Math.max(a.left+a.width,b.left+b.width)-left,height:Math.max(a.top+a.height,b.top+b.height)-top}})(questionKinds,dockInput):dockInput);const copy=COACH_COPY[step],firstStepTargets=1===step?holes:[];return(0,react_dom.createPortal)((0,emotion_react_jsx_runtime_browser_esm.FD)(Overlay,{"data-testid":"search-tutorial",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Dim,{style:{clipPath:toDimClipPath(viewport,holes)},"aria-hidden":"true"}),holes.map((hole,index)=>(0,emotion_react_jsx_runtime_browser_esm.Y)(Spotlight,{"aria-hidden":"true",style:{top:hole.top,left:hole.left,width:hole.width,height:hole.height,borderRadius:hole.radius}},index)),firstStepTargets.map((hole,index)=>(0,emotion_react_jsx_runtime_browser_esm.Y)(HoleButton,{type:"button","aria-label":"탐색 열기",onClick:proceedFromFirst,style:{top:hole.top,left:hole.left,width:hole.width,height:hole.height,borderRadius:hole.radius}},index)),1===step&&!isChatScreen&&dockChat&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Hint,{style:{left:dockChat.left+dockChat.width/2,top:dockChat.top-48},children:"독의 채팅 버튼으로도 열 수 있어요"}),4===step&&dockInput&&(0,emotion_react_jsx_runtime_browser_esm.Y)(QuestionKindCards,{style:{left:dockInput.left,width:dockInput.width,bottom:viewport.height-dockInput.top+12},onChoose:(kind,question)=>{chooseQuestionKind(kind,question)}}),1===step?searchTab?(0,emotion_react_jsx_runtime_browser_esm.Y)(CoachCard,{step:1,title:"document"===variant?"궁금한 게 생기면 탐색에 물어보세요":copy.title,description:copy.description,style:(hole=toHole(searchTab),viewportWidth=viewport.width,{top:hole.top+hole.height+16,left:clampLeft(hole.left+hole.width/2-170,viewportWidth)}),actions:(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(CoachButton,{type:"button",$variant:"text",onClick:()=>dismissFirst(isAgain),children:FIRST_STEP_DISMISS_LABEL[variant]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(CoachButton,{type:"button",$variant:"primary",onClick:proceedFromFirst,children:"보여 주세요"})]})}):null:2===step?dockInput?(0,emotion_react_jsx_runtime_browser_esm.Y)(CoachCard,{step:2,title:copy.title,description:copy.description,footnote:"질문을 입력하는 중…",style:placeAboveStart(toHole(dockInput),viewport)}):null:3===step?conversation&&isAnswerShown?(0,emotion_react_jsx_runtime_browser_esm.Y)(CoachCard,{step:3,title:copy.title,description:copy.description,style:placeBelowStart(toHole(conversation),viewport),actions:(0,emotion_react_jsx_runtime_browser_esm.Y)(CoachButton,{type:"button",$variant:"primary",onClick:()=>goToNext(4),children:"다음"})}):null:questionKinds?(0,emotion_react_jsx_runtime_browser_esm.Y)(CoachCard,{step:4,title:copy.title,description:copy.description,style:placeAboveStart(toHole(questionKinds),viewport),actions:(0,emotion_react_jsx_runtime_browser_esm.Y)(CoachButton,{type:"button",$variant:"primary",onClick:finish,children:"끝내기"})}):null,step>=2&&(0,emotion_react_jsx_runtime_browser_esm.Y)(TutorialBar,{onSkip:skip})]}),document.body);var hole,viewportWidth}const Overlay=emotion_styled_browser_esm.A.div`
  position: fixed;
  inset: 0;
  z-index: 35; /* 모달 배경 막(30) 위, 토스트(40) 아래 */
  pointer-events: none;
`,Dim=emotion_styled_browser_esm.A.div`
  position: absolute;
  inset: 0;
  background-color: rgba(20, 19, 18, 0.58);
  pointer-events: auto;
`,Spotlight=emotion_styled_browser_esm.A.div`
  position: absolute;
  border: 3px solid ${({theme})=>theme.neutral[0]};
  box-shadow: 0 0 18px 2px rgba(255, 255, 255, 0.45);
  transform: translate(-3px, -3px);
  box-sizing: content-box;
  pointer-events: none;
`,HoleButton=emotion_styled_browser_esm.A.button`
  position: absolute;
  background: transparent;
  cursor: pointer;
  pointer-events: auto;

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 4px;
  }
`,Hint=emotion_styled_browser_esm.A.p`
  position: absolute;
  padding: 0.375rem 0.75rem; /* 6px 12px */
  border-radius: 999px;
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.neutral[800]};
  background-color: ${({theme})=>theme.neutral[0]};
  white-space: nowrap;
  transform: translateX(-50%);
`},"./src/shared/constants/searchTutorial/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,["B",0,{question:"알림은 어떻게 보내기로 했어?",answer:"실패 알림은 실패 이유와 다음에 할 일을 한 문장에 함께 쓰고, 밤 10시부터 아침 8시까지 온 알림은 모아서 8시에 보내기로 했어요. 알림 채널은 아직 정하지 못했어요.",evidences:[{title:"실패 알림 문구 개선",createdAt:"2026-10-21"},{title:"알림 묶어 보내기",createdAt:"2026-10-21"}]},"X",0,[{kind:"past_decision",question:"지난번에 정한 거 알려 줘",label:"결정 찾기"},{kind:"undecided",question:"아직 안 정한 게 뭐야?",label:"남은 결정"},{kind:"next_action",question:"다음에 할 일 정리해 줘",label:"할 일 확인"}]])},"./src/shared/hooks/domain/chat/useNavigateToNewChat/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_router__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/hooks.js"),_routes_PATH_ROUTE__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/routes/PATH_ROUTE.ts");const __WEBPACK_DEFAULT_EXPORT__=()=>{const navigate=(0,react_router__WEBPACK_IMPORTED_MODULE_0__.Zp)();return{navigateToNewChat:workspaceId=>{navigate((0,_routes_PATH_ROUTE__WEBPACK_IMPORTED_MODULE_1__.vX)({routeKey:"CHAT",params:{workspaceId}}),{replace:!0})}}};__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])}}]);
//# sourceMappingURL=3725.4161b226.iframe.bundle.js.map