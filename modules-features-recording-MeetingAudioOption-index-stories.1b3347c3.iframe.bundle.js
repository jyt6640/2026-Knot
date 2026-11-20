"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7490],{"./src/modules/features/recording/MeetingAudioOption/index.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ConnectDialog:()=>ConnectDialog,ConnectDialogMeetingApp:()=>ConnectDialogMeetingApp,Connecting:()=>Connecting,Default:()=>Default,Mobile:()=>Mobile,NoAudio:()=>NoAudio,Stopped:()=>Stopped,Together:()=>Together,TogetherPaused:()=>TogetherPaused,Unsupported:()=>Unsupported,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _path,_path2,dialogContext=__webpack_require__("./src/shared/provider/context/dialogContext/index.tsx"),toastContext=__webpack_require__("./src/shared/provider/context/toastContext/index.tsx"),recordingStore=__webpack_require__("./src/shared/store/recordingStore/index.ts"),components=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/components.js"),external_STORYBOOK_MODULE_TEST_=__webpack_require__("storybook/test"),Button=__webpack_require__("./src/shared/components/primitives/ui/Button/index.tsx"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),_excluded=["size"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const monitor=function SvgMonitor(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",width:size,height:size,focusable:"false","aria-hidden":"true"},props),_path||(_path=react.createElement("path",{stroke:"currentColor",strokeWidth:1.5,d:"M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"})),_path2||(_path2=react.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:1.5,d:"M8.5 20h7M12 16v4"})))},MEETING_AUDIO_COPY={MEETING_TITLE:"화상 회의 상대방 목소리",OPTION:"함께 녹음하기",RECONNECT:"다시 연결하기",STATUS:{RECORDING:"녹음 중",PAUSED:"일시정지",NO_AUDIO:"소리 없음",STOPPED:"멈춤",UNSUPPORTED:"지원 안 함"},MEETING_DESCRIPTION:{off:"Zoom, Google Meet 같은 화상 회의 중이라면 상대방 목소리도 함께 녹음할 수 있어요",connecting:"브라우저 공유 창에서 회의 화면을 골라 주세요",on:"이어폰으로 들어도 그대로 녹음돼요. 그만 녹음하려면 브라우저의 「공유 중지」를 누르세요",paused:"녹음을 이어 가면 지금 대화와 함께 다시 녹음돼요",noAudio:"소리가 들어오지 않아요. 다시 연결할 때 「오디오도 공유」를 켜 주세요",stopped:"화면 공유가 끝났어요. 지금 대화는 계속 녹음하고 있어요",unsupported:"이 브라우저에서는 녹음할 수 없어요. 다음 녹음은 Chrome이나 Edge에서 시작해 보세요",mobile:"화상 회의 소리는 컴퓨터의 Chrome, Edge에서만 녹음할 수 있어요"},DIALOG:{TITLE:"화상 회의 상대방 목소리도 녹음할까요?",DESCRIPTION:"지금 나누는 대화는 마이크로 녹음되고 있어요.\n화상 회의 화면을 공유하면 상대방 목소리도 함께 녹음돼요.",LOCATION_QUESTION:"화상 회의를 어디서 열었나요?",STEPS_TITLE:"다음에 열리는 공유 창에서 이렇게 해 주세요",EXAMPLE_TITLE:"공유 창은 이렇게 생겼어요",EXAMPLE_TABS:["Chrome 탭","창","전체 화면"],EXAMPLE_AUDIO_HINT:"꼭 켜 주세요",NOTICE:"녹음하기 전에 참여자에게 먼저 알려 주세요",CANCEL:"취소",CONFIRM:"공유할 화면 고르기"},LOCATIONS:{browserTab:{LABEL:"브라우저에서",DESCRIPTION:"Google Meet, 웹 Zoom",STEPS:["위쪽에서 「Chrome 탭」을 눌러요","회의 중인 탭을 골라요","아래쪽 「탭 오디오도 공유」를 켜고 「공유」를 눌러요"],EXAMPLE_TAB:"Chrome 탭",EXAMPLE_ITEM:"Google Meet · 주간 회의",EXAMPLE_AUDIO:"탭 오디오도 공유"},meetingApp:{LABEL:"설치한 앱에서",DESCRIPTION:"Zoom, Teams, Discord 앱",STEPS:["위쪽에서 「전체 화면」을 눌러요","아래쪽 「시스템 오디오도 공유」를 켜고 「공유」를 눌러요"],EXAMPLE_TAB:"전체 화면",EXAMPLE_ITEM:"전체 화면",EXAMPLE_AUDIO:"시스템 오디오도 공유"}}};var toastMessages=__webpack_require__("./src/shared/constants/toastMessages/index.ts"),useRecordingState=__webpack_require__("./src/shared/hooks/domain/recording/useRecordingState/index.ts"),headphones=__webpack_require__("./src/assets/icons/headphones.svg"),breakpoint=__webpack_require__("./src/shared/constants/breakpoint/index.ts"),emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),useKeyDown=__webpack_require__("./src/shared/hooks/common/useKeyDown/index.ts"),Pop=__webpack_require__("./src/shared/components/primitives/animation/Pop/index.tsx"),Dim=__webpack_require__("./src/shared/components/primitives/ui/Dim/index.tsx"),check18=__webpack_require__("./src/assets/icons/check18.svg"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function SharePickerExample({tab,item,audio}){return(0,emotion_react_jsx_runtime_browser_esm.FD)(Container,{"aria-hidden":!0,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Top,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Caption,{children:MEETING_AUDIO_COPY.DIALOG.EXAMPLE_TITLE}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Tabs,{children:MEETING_AUDIO_COPY.DIALOG.EXAMPLE_TABS.map(label=>(0,emotion_react_jsx_runtime_browser_esm.Y)(Tab,{$isSelected:label===tab,children:label},label))})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Item,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Thumb,{}),item]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(AudioToggle,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Switch,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)(AudioLabel,{children:audio}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Hint,{children:MEETING_AUDIO_COPY.DIALOG.EXAMPLE_AUDIO_HINT})]})]})}const Container=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem; /* 10px */
  padding: 0.75rem; /* 12px */
  border-radius: 0.625rem; /* 10px */
  background-color: ${({theme})=>theme.neutral[0]};
  box-shadow: inset 0 0 0 1px ${({theme})=>theme.neutral[200]};
`,Top=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem; /* 8px */
`,Caption=emotion_styled_browser_esm.A.span`
  ${({theme})=>theme.text.caption01};
  color: ${({theme})=>theme.neutral[500]};
`,Tabs=emotion_styled_browser_esm.A.div`
  display: flex;
  gap: 0.25rem; /* 4px */
`,Tab=emotion_styled_browser_esm.A.span`
  padding: 0.1875rem 0.5rem; /* 3px 8px */
  border-radius: 0.375rem; /* 6px */
  ${({theme})=>theme.text.caption01};
  background-color: ${({theme,$isSelected})=>$isSelected?theme.sub.accent[100]:"transparent"};
  color: ${({theme,$isSelected})=>$isSelected?theme.sub.accent[700]:theme.neutral[500]};
`,Item=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  gap: 0.625rem; /* 10px */
  padding: 0.5rem; /* 8px */
  border-radius: 0.5rem; /* 8px */
  background-color: ${({theme})=>theme.sub.accent[100]};
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.neutral[800]};
`,Thumb=emotion_styled_browser_esm.A.span`
  flex-shrink: 0;
  width: 2.75rem; /* 44px */
  height: 1.75rem; /* 28px */
  border-radius: 0.25rem; /* 4px */
  background-color: ${({theme})=>theme.neutral[200]};
`,AudioToggle=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  gap: 0.625rem; /* 10px */
  padding: 0.5rem 0.625rem; /* 8px 10px */
  border-radius: 0.5rem; /* 8px */
  box-shadow: inset 0 0 0 2px ${({theme})=>theme.sub.accent[500]};
`,Switch=emotion_styled_browser_esm.A.span`
  position: relative;
  flex-shrink: 0;
  width: 1.875rem; /* 30px */
  height: 1.125rem; /* 18px */
  border-radius: 0.5625rem; /* 9px */
  background-color: ${({theme})=>theme.sub.accent[500]};

  &::after {
    content: "";
    position: absolute;
    top: 0.125rem; /* 2px */
    right: 0.125rem;
    width: 0.875rem; /* 14px */
    height: 0.875rem;
    border-radius: 50%;
    background-color: ${({theme})=>theme.neutral[0]};
  }
`,AudioLabel=emotion_styled_browser_esm.A.span`
  flex: 1;
  min-width: 0;
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.neutral[900]};
`,Hint=emotion_styled_browser_esm.A.span`
  flex-shrink: 0;
  ${({theme})=>theme.text.caption01};
  color: ${({theme})=>theme.sub.accent[700]};
`;SharePickerExample.__docgenInfo={description:"브라우저 공유 창을 흉내 낸 그림. 어디를 고르고 무엇을 켜야 하는지 짚어 줘요.\n\n같은 내용을 위의 단계 글이 이미 말해서 화면 낭독기에는 숨겨요.",methods:[],displayName:"SharePickerExample",props:{tab:{required:!0,tsType:{name:"string"},description:"골라야 하는 공유 창 탭. `DIALOG.EXAMPLE_TABS` 중 하나"},item:{required:!0,tsType:{name:"string"},description:"골라야 하는 항목 이름"},audio:{required:!0,tsType:{name:"string"},description:"꼭 켜야 하는 오디오 공유 스위치 이름"}}};const LOCATIONS=Object.keys(MEETING_AUDIO_COPY.LOCATIONS);function MeetingAudioConnectDialog({onClose,onConfirm}){const id=(0,react.useId)(),[location,setLocation]=(0,react.useState)("browserTab"),guide=MEETING_AUDIO_COPY.LOCATIONS[location],handleClose=()=>onClose(location);return(0,useKeyDown.A)({key:"Escape",isEnabled:!0,onKeyDown:handleClose}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Dim.A,{onClick:handleClose,children:(0,emotion_react_jsx_runtime_browser_esm.FD)(MeetingAudioConnectDialog_Container,{role:"dialog","aria-modal":"true","aria-labelledby":`${id}-title`,onClick:e=>e.stopPropagation(),children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Head,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Title,{id:`${id}-title`,children:MEETING_AUDIO_COPY.DIALOG.TITLE}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Description,{children:MEETING_AUDIO_COPY.DIALOG.DESCRIPTION})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Where,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Question,{id:`${id}-location`,children:MEETING_AUDIO_COPY.DIALOG.LOCATION_QUESTION}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Options,{role:"radiogroup","aria-labelledby":`${id}-location`,children:LOCATIONS.map(key=>{const isSelected=key===location;return(0,emotion_react_jsx_runtime_browser_esm.FD)(Option,{$isSelected:isSelected,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(HiddenRadio,{type:"radio",name:id,checked:isSelected,onChange:()=>setLocation(key)}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Radio,{$isSelected:isSelected}),(0,emotion_react_jsx_runtime_browser_esm.FD)(OptionText,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(OptionLabel,{children:MEETING_AUDIO_COPY.LOCATIONS[key].LABEL}),(0,emotion_react_jsx_runtime_browser_esm.Y)(OptionDescription,{children:MEETING_AUDIO_COPY.LOCATIONS[key].DESCRIPTION})]})]},key)})})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Steps,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(StepsTitle,{children:MEETING_AUDIO_COPY.DIALOG.STEPS_TITLE}),(0,emotion_react_jsx_runtime_browser_esm.Y)(StepList,{children:guide.STEPS.map((step,index)=>(0,emotion_react_jsx_runtime_browser_esm.FD)(Step,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(StepNumber,{children:index+1}),step]},step))}),(0,emotion_react_jsx_runtime_browser_esm.Y)(SharePickerExample,{tab:guide.EXAMPLE_TAB,item:guide.EXAMPLE_ITEM,audio:guide.EXAMPLE_AUDIO})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Notice,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(check18.A,{"aria-hidden":!0}),MEETING_AUDIO_COPY.DIALOG.NOTICE]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Actions,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{size:"md",variant:"outline",isFullWidth:!0,onClick:handleClose,children:MEETING_AUDIO_COPY.DIALOG.CANCEL}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{size:"md",isFullWidth:!0,onClick:()=>onConfirm(location),children:MEETING_AUDIO_COPY.DIALOG.CONFIRM})]})]})})}const MeetingAudioConnectDialog_Container=(0,emotion_styled_browser_esm.A)(Pop.A)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* 24px */
  width: 100%;
  max-width: 35rem; /* 560px */
  /* 키가 큰 창이라 낮은 화면에서는 창 안에서 스크롤해요 */
  max-height: 100%;
  overflow-y: auto;
  padding: 2rem; /* 32px */
  border-radius: 1.25rem; /* 20px */
  background-color: ${({theme})=>theme.neutral[0]};
  box-shadow: ${({theme})=>theme.shadow03};

  /* 모바일은 화면 아래에 붙는 시트로 그려요. 위 모서리만 둥글고, 기기 안전 영역만큼 아래를 더 띄워요(RESP-R7) */
  ${breakpoint.Wi.mobile} {
    max-width: none;
    padding: 1.75rem 1.5rem calc(1.5rem + env(safe-area-inset-bottom)); /* 28px 24px 24px */
    border-radius: 1.25rem 1.25rem 0 0; /* 20px */
  }
`,Head=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* 8px */
  overflow-wrap: break-word;
`,Title=emotion_styled_browser_esm.A.h2`
  ${({theme})=>theme.text.heading02};
  color: ${({theme})=>theme.neutral[900]};
`,Description=emotion_styled_browser_esm.A.p`
  ${({theme})=>theme.text.body01};
  color: ${({theme})=>theme.neutral[600]};
  white-space: pre-line;
`,Where=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem; /* 10px */
`,Question=emotion_styled_browser_esm.A.p`
  ${({theme})=>theme.text.label01};
  color: ${({theme})=>theme.neutral[900]};
`,Options=emotion_styled_browser_esm.A.div`
  display: flex;
  gap: 0.5rem; /* 8px */
`,Option=emotion_styled_browser_esm.A.label`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  gap: 0.625rem; /* 10px */
  min-width: 0;
  /* 피그마는 높이 60px 고정에 위아래 여백 12px이라 글이 여백을 넘쳐요. 높이를 맞추려 위아래 여백을 줄였어요 */
  min-height: 3.75rem; /* 60px */
  padding: 0.375rem 0.875rem; /* 6px 14px */
  border-radius: 0.75rem; /* 12px */
  background-color: ${({theme,$isSelected})=>$isSelected?theme.neutral[50]:theme.neutral[0]};
  box-shadow: ${({theme,$isSelected})=>$isSelected?`inset 0 0 0 1.5px ${theme.primary}`:`inset 0 0 0 1px ${theme.neutral[200]}`};
  cursor: pointer;

  &:has(:focus-visible) {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }
`,HiddenRadio=emotion_styled_browser_esm.A.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
`,Radio=emotion_styled_browser_esm.A.span`
  flex-shrink: 0;
  width: 1.125rem; /* 18px */
  height: 1.125rem;
  border: ${({theme,$isSelected})=>$isSelected?`5px solid ${theme.primary}`:`1.5px solid ${theme.neutral[300]}`};
  border-radius: 50%;
`,OptionText=emotion_styled_browser_esm.A.span`
  display: flex;
  flex-direction: column;
  gap: 0.125rem; /* 2px */
  min-width: 0;
`,OptionLabel=emotion_styled_browser_esm.A.span`
  ${({theme})=>theme.text.label01};
  color: ${({theme})=>theme.neutral[900]};
`,OptionDescription=emotion_styled_browser_esm.A.span`
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.neutral[500]};
`,Steps=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* 12px */
  padding: 1rem; /* 16px */
  border-radius: 0.875rem; /* 14px */
  background-color: ${({theme})=>theme.neutral[50]};
`,StepsTitle=emotion_styled_browser_esm.A.p`
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.neutral[600]};
`,StepList=emotion_styled_browser_esm.A.ol`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* 12px */
`,Step=emotion_styled_browser_esm.A.li`
  display: flex;
  gap: 0.625rem; /* 10px */
  ${({theme})=>theme.text.body01};
  color: ${({theme})=>theme.neutral[800]};
`,StepNumber=emotion_styled_browser_esm.A.span`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 1.375rem; /* 22px */
  height: 1.375rem;
  border-radius: 50%;
  background-color: ${({theme})=>theme.primary};
  ${({theme})=>theme.text.caption01};
  color: ${({theme})=>theme.neutral[0]};
`,Notice=emotion_styled_browser_esm.A.p`
  display: flex;
  gap: 0.5rem; /* 8px */
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.neutral[700]};

  & > svg {
    flex-shrink: 0;
    color: ${({theme})=>theme.neutral[800]};
  }
`,Actions=emotion_styled_browser_esm.A.div`
  display: flex;
  gap: 0.5rem; /* 8px */
`;MeetingAudioConnectDialog.__docgenInfo={description:"공유 창을 열기 전에 회의를 연 곳별 공유 창 설정과 녹음 고지를 보여 주는 모달(STT-R45).\nFigma `Dialog/화상 회의 연결`(5406-3567)이에요.\n\n회의를 연 곳은 브라우저가 기본이고, 고른 곳에 따라 공유 창에서 고를 것과 예시 그림이 바뀌어요.\n바깥을 누르거나 ESC를 눌러도 [취소]와 같이 모달만 닫혀요.\n고른 곳은 공유 창 설정 안내에만 쓰고, 닫거나 고를 때 사용 기록에 남기도록 쓰는 쪽에 넘겨요.",methods:[],displayName:"MeetingAudioConnectDialog",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(location: MeetingLocation) => void",signature:{arguments:[{type:{name:"unknown"},name:"location"}],return:{name:"void"}}},description:"취소 · 바깥 누름 · ESC로 닫을 때. 그때 골라 둔 회의를 연 곳을 받아요"},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"(location: MeetingLocation) => void",signature:{arguments:[{type:{name:"unknown"},name:"location"}],return:{name:"void"}}},description:"「공유할 화면 고르기」를 눌렀을 때. 고른 회의를 연 곳을 받아요"}}};var captureAnalyticsEvent=__webpack_require__("./src/shared/utils/captureAnalyticsEvent/index.ts");const LOCATION_BY_MEETING_LOCATION={browserTab:"browser_tab",meetingApp:"meeting_app"},RESULT_BY_CONNECT_RESULT={connected:"connected",noAudio:"no_audio",cancelled:"share_cancelled"},useMeetingAudioOption=()=>{const{open}=(0,dialogContext.sp)(),{show}=(0,toastContext.dj)(),{status,isEnding,isMeetingAudioSupported,meetingAudioStatus,connectMeetingAudio}=(0,useRecordingState.A)(),[isConnecting,setIsConnecting]=(0,react.useState)(!1),{trackConnectResult}=(()=>{const{session}=(0,useRecordingState.A)();return{trackConnectResult:({result,location,isReconnect})=>{null!==session&&"notConnected"!==result&&(0,captureAnalyticsEvent.L)({event:"meeting_audio_connect_result",properties:{result:"dialogCancelled"===result?"dialog_cancelled":RESULT_BY_CONNECT_RESULT[result],location:LOCATION_BY_MEETING_LOCATION[location],is_reconnect:isReconnect,recording_id:session.recordingId,workspace_id:session.workspaceId}})}}})();return{meetingState:/Android|iPhone|iPad|iPod|Mobi/i.test(navigator.userAgent)?"mobile":isMeetingAudioSupported?isConnecting?"connecting":"on"===meetingAudioStatus&&"paused"===status?"paused":meetingAudioStatus:"unsupported",isEnding,handleConnectClick:()=>{const isReconnect="noAudio"===meetingAudioStatus||"stopped"===meetingAudioStatus;open(({close})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(MeetingAudioConnectDialog,{onClose:location=>{trackConnectResult({result:"dialogCancelled",location,isReconnect}),close()},onConfirm:location=>{close(),setIsConnecting(!0),connectMeetingAudio().then(result=>{"connected"===result&&show({...toastMessages.D.MEETING_AUDIO_CONNECTED,icon:headphones.A}),trackConnectResult({result,location,isReconnect})}).finally(()=>setIsConnecting(!1))}}))}}};function SoundSourceCard({icon,title,status,description,action}){const tone=status?.tone;return(0,emotion_react_jsx_runtime_browser_esm.FD)(SoundSourceCard_Container,{$tone:tone,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(IconWrap,{"aria-hidden":!0,$tone:tone,children:icon}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Text,{role:"status",children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(TitleRow,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(SoundSourceCard_Title,{$tone:tone,children:title}),status?.label&&(0,emotion_react_jsx_runtime_browser_esm.FD)(Status,{$tone:status.tone,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Dot,{"aria-hidden":!0,$tone:status.tone}),status.label]})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(SoundSourceCard_Description,{$tone:tone,children:description})]}),action]})}const SoundSourceCard_Container=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* 12px */
  min-width: 0;
  padding: 0.75rem 1rem; /* 12px 16px */
  border: 1px solid
    ${({theme,$tone})=>"caution"===$tone?theme.sub.caution[700]:theme.neutral[200]};
  border-radius: 0.875rem; /* 14px */
  background-color: ${({theme,$tone})=>"disabled"===$tone?theme.neutral[100]:theme.neutral[50]};

  ${breakpoint.Wi.mobile} {
    padding: 1rem; /* 16px */
  }

  & > button {
    flex-shrink: 0;
  }
`,IconWrap=emotion_styled_browser_esm.A.span`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 2.5rem; /* 40px */
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${({theme})=>theme.neutral[0]};
  color: ${({theme})=>theme.neutral[500]};

  & > svg {
    opacity: ${({$tone})=>"disabled"===$tone?.5:1};
  }
`,Text=emotion_styled_browser_esm.A.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.25rem; /* 4px */
  min-width: 0;
`,TitleRow=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 0.625rem; /* 10px */
`,SoundSourceCard_Title=emotion_styled_browser_esm.A.span`
  ${({theme})=>theme.text.label01};
  color: ${({theme,$tone})=>"disabled"===$tone?theme.neutral[500]:theme.neutral[900]};
`,statusColor=(theme,tone)=>({recording:{dot:theme.sub.warning[600],text:theme.sub.warning[700]},paused:{dot:theme.neutral[400],text:theme.neutral[600]},caution:{dot:theme.sub.caution[700],text:theme.sub.caution[700]},disabled:{dot:theme.neutral[400],text:theme.neutral[500]}}[tone]),Status=emotion_styled_browser_esm.A.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem; /* 6px */
  ${({theme})=>theme.text.caption02};
  color: ${({theme,$tone})=>statusColor(theme,$tone).text};
`,Dot=emotion_styled_browser_esm.A.span`
  flex-shrink: 0;
  width: 0.375rem; /* 6px */
  height: 0.375rem;
  border-radius: 50%;
  background-color: ${({theme,$tone})=>statusColor(theme,$tone).dot};
`,SoundSourceCard_Description=emotion_styled_browser_esm.A.p`
  ${({theme})=>theme.text.caption02};
  color: ${({theme,$tone})=>"disabled"===$tone?theme.neutral[500]:theme.neutral[600]};
  overflow-wrap: break-word;
`;SoundSourceCard.__docgenInfo={description:"녹음하는 소리 하나를 보여 주는 줄. Figma `Recorder/SoundSource`의 `Source`예요.\n\n상태가 `caution`이면 테두리를 주의색으로, `disabled`면 줄 전체를 흐리게 그려요.\n상태와 설명이 바뀌면 화면 낭독기가 읽어요.",methods:[],displayName:"SoundSourceCard",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"string"},description:""},status:{required:!0,tsType:{name:"union",raw:"SoundSourceStatus | null",elements:[{name:"SoundSourceStatus"},{name:"null"}]},description:"없으면 이름만 보여요"},description:{required:!0,tsType:{name:"string"},description:""},action:{required:!1,tsType:{name:"ReactNode"},description:"오른쪽 끝에 둘 버튼"}}};const{STATUS}=MEETING_AUDIO_COPY,MEETING_STATUS={off:null,connecting:null,on:{label:STATUS.RECORDING,tone:"recording"},paused:{label:STATUS.PAUSED,tone:"paused"},noAudio:{label:STATUS.NO_AUDIO,tone:"caution"},stopped:{label:STATUS.STOPPED,tone:"caution"},unsupported:{label:STATUS.UNSUPPORTED,tone:"disabled"},mobile:{tone:"disabled"}},MEETING_ACTION={off:MEETING_AUDIO_COPY.OPTION,connecting:MEETING_AUDIO_COPY.OPTION,noAudio:MEETING_AUDIO_COPY.RECONNECT,stopped:MEETING_AUDIO_COPY.RECONNECT};function MeetingAudioOption(){const{meetingState,isEnding,handleConnectClick}=useMeetingAudioOption(),actionLabel=MEETING_ACTION[meetingState];return(0,emotion_react_jsx_runtime_browser_esm.Y)(SoundSourceCard,{icon:(0,emotion_react_jsx_runtime_browser_esm.Y)(monitor,{}),title:MEETING_AUDIO_COPY.MEETING_TITLE,status:MEETING_STATUS[meetingState],description:MEETING_AUDIO_COPY.MEETING_DESCRIPTION[meetingState],action:actionLabel&&!isEnding&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{size:"sm",variant:"outline",isLoading:"connecting"===meetingState,onClick:handleConnectClick,children:actionLabel})})}MeetingAudioOption.__docgenInfo={description:"녹음 화면의 「화상 회의 상대방 목소리」 줄(STT-R44~R49). Figma `Recorder/SoundSource`(5404-3689)예요.\n\n녹음은 독 마이크로 시작해 지금 나누는 대화만 녹음하고(STT-R43), 「함께 녹음하기」로 공유한 탭, 화면의 소리를\n같은 녹음에 섞어요. Chrome 계열이 아닌 브라우저와 모바일에서는 지원하지 않는다고만 알리고 마이크 녹음은 그대로예요.\n소리 없이 공유했거나 함께 녹음하다 공유가 멈추면 토스트 대신 줄 안에 계속 남겨(뒤에 있는 탭에서도 사라지지 않게)\n「다시 연결하기」를 둬요.",methods:[],displayName:"MeetingAudioOption"};const pretendBrowser=userAgent=>{const spy=(0,external_STORYBOOK_MODULE_TEST_.spyOn)(navigator,"userAgent","get").mockReturnValue(userAgent);return()=>spy.mockRestore()},index_stories={title:"Recording/MeetingAudioOption",component:MeetingAudioOption,parameters:{layout:"padded",design:[{name:"녹음 · 온라인 회의 소리도 함께 녹음",type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5403-3372"},{name:"녹음/화상 회의 · 연결 직후 (이어폰 토스트)",type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5466-65312"}],docs:{description:{component:"녹음 화면의 「화상 회의 상대방 목소리」 줄이에요. 녹음 조작 바와 녹음 카드 사이에 한 줄로 놓여요.\n\n**동작 규칙**\n- 녹음은 독 마이크로 바로 시작해 지금 나누는 대화만 녹음해요. 화상 회의(Zoom, Google Meet 등)의 상대방 목소리까지 담으려면 녹음 중에 이 줄의 「함께 녹음하기」를 눌러요. 시작 전에 고르게 하면 독 마이크를 누르면 바로 시작하는 흐름이 바뀌어서 녹음 중에 골라요.\n- 누르면 연결 안내를 먼저 보여 줘요. 화상 회의를 어디서 열었는지(브라우저에서, 설치한 앱에서) 고르면 공유 창에서 누를 곳과 켤 오디오 공유를 예시 그림과 함께 짚어 주고, 녹음 고지를 함께 보여 줘요. 「공유할 화면 고르기」를 누르면 브라우저의 공유 창이 열려요.\n- 공유 창에서 고르는 동안은 버튼이 로딩으로 바뀌어요. 소리가 있는 탭이나 화면을 고르면 그때부터 지금 대화와 상대방 목소리를 섞어 같은 녹음에 이어 담고, 버튼이 사라져요. 연결된 순간 「이어폰을 끼면 더 깨끗하게 녹음돼요」 토스트를 띄워요. 누른 직후엔 안내 모달과 공유 창이 화면을 덮어서 연결된 뒤에 띄워요. 일시정지하면 두 소리 모두 일시정지예요.\n- 공유 창을 닫으면 아무 알림 없이 처음 모습으로 돌아가요. 소리 없이 공유했거나 함께 녹음하다 브라우저의 「공유 중지」를 누르면 녹음을 끝내지 않고 지금 대화만 이어 녹음하며, 토스트 대신 줄 안에 알림과 「다시 연결하기」를 남겨요. 뒤에 있는 탭에서도 사라지지 않게 하려는 거예요.\n- 컴퓨터의 Chrome, Edge 같은 Chrome 계열 브라우저만 상대방 목소리를 줘요. Safari, Firefox와 모바일에서는 지원하지 않는다고만 알리고 마이크 녹음은 그대로예요."}}},beforeEach:()=>(recordingStore.A.getState().discardRecording(),recordingStore.A.setState({status:"recording",accumulatedMs:0,resumedAt:Date.now()}),pretendBrowser("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/155.0.0.0 Safari/537.36")),decorators:[Story=>(0,emotion_react_jsx_runtime_browser_esm.Y)(components.fS,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(toastContext.tE,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(dialogContext.Co,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Story,{})})})})]},Default={parameters:{design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-3453"}}},ConnectDialog={parameters:{design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-3542"}},play:async({canvasElement})=>{const canvas=(0,external_STORYBOOK_MODULE_TEST_.within)(canvasElement);await external_STORYBOOK_MODULE_TEST_.userEvent.click(canvas.getByRole("button",{name:MEETING_AUDIO_COPY.OPTION}))}},ConnectDialogMeetingApp={parameters:{design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-3741"}},play:async({canvasElement})=>{const canvas=(0,external_STORYBOOK_MODULE_TEST_.within)(canvasElement);await external_STORYBOOK_MODULE_TEST_.userEvent.click(canvas.getByRole("button",{name:MEETING_AUDIO_COPY.OPTION})),await external_STORYBOOK_MODULE_TEST_.userEvent.click((0,external_STORYBOOK_MODULE_TEST_.within)(document.body).getByRole("radio",{name:new RegExp(MEETING_AUDIO_COPY.LOCATIONS.meetingApp.LABEL)}))}},Connecting={parameters:{design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-3935"}},beforeEach:()=>{const spy=(0,external_STORYBOOK_MODULE_TEST_.spyOn)(navigator.mediaDevices,"getDisplayMedia").mockReturnValue(new Promise(()=>{}));return()=>spy.mockRestore()},play:async({canvasElement})=>{const canvas=(0,external_STORYBOOK_MODULE_TEST_.within)(canvasElement);await external_STORYBOOK_MODULE_TEST_.userEvent.click(canvas.getByRole("button",{name:MEETING_AUDIO_COPY.OPTION})),await external_STORYBOOK_MODULE_TEST_.userEvent.click((0,external_STORYBOOK_MODULE_TEST_.within)(document.body).getByRole("button",{name:MEETING_AUDIO_COPY.DIALOG.CONFIRM}))}},Together={parameters:{design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-4024"}},beforeEach:()=>{recordingStore.A.setState({meetingAudioStatus:"on"})}},TogetherPaused={parameters:{design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-4110"}},beforeEach:()=>{recordingStore.A.setState({status:"paused",resumedAt:null,meetingAudioStatus:"on"})}},NoAudio={parameters:{design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-4239"}},beforeEach:()=>{recordingStore.A.setState({meetingAudioStatus:"noAudio"})}},Stopped={parameters:{design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-4328"}},beforeEach:()=>{recordingStore.A.setState({meetingAudioStatus:"stopped"})}},Unsupported={beforeEach:()=>pretendBrowser("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.6 Safari/605.1.15"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-4417"}}},Mobile={beforeEach:()=>pretendBrowser("Mozilla/5.0 (Linux; Android 16; Pixel 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/155.0.0.0 Mobile Safari/537.36"),globals:{viewport:{value:"mobile390",isRotated:!1}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-4503"}}},__namedExportsOrder=["Default","ConnectDialog","ConnectDialogMeetingApp","Connecting","Together","TogetherPaused","NoAudio","Stopped","Unsupported","Mobile"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    design: {\n      type: "figma",\n      url: "https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-3453"\n    }\n  }\n}',...Default.parameters?.docs?.source},description:{story:"Chrome 계열에서 마이크만 녹음하는 중이에요. 독 마이크로 녹음을 막 시작한 녹음 화면의 모습이에요.",...Default.parameters?.docs?.description}}},ConnectDialog.parameters={...ConnectDialog.parameters,docs:{...ConnectDialog.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    design: {\n      type: "figma",\n      url: "https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-3542"\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.click(canvas.getByRole("button", {\n      name: MEETING_AUDIO_COPY.OPTION\n    }));\n  }\n}',...ConnectDialog.parameters?.docs?.source},description:{story:"「함께 녹음하기」를 누른 직후예요. 공유 창보다 먼저 「브라우저에서」 기준의 연결 안내를 보여 줘요.\n「공유할 화면 고르기」를 누르면 실제 브라우저의 공유 창이 열려요.",...ConnectDialog.parameters?.docs?.description}}},ConnectDialogMeetingApp.parameters={...ConnectDialogMeetingApp.parameters,docs:{...ConnectDialogMeetingApp.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    design: {\n      type: "figma",\n      url: "https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-3741"\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.click(canvas.getByRole("button", {\n      name: MEETING_AUDIO_COPY.OPTION\n    }));\n    // 모달은 패널 밖(body)에 그려져요\n    await userEvent.click(within(document.body).getByRole("radio", {\n      name: new RegExp(MEETING_AUDIO_COPY.LOCATIONS.meetingApp.LABEL)\n    }));\n  }\n}',...ConnectDialogMeetingApp.parameters?.docs?.source},description:{story:"연결 안내에서 「설치한 앱에서」를 골랐어요. Zoom, Teams, Discord 앱처럼 브라우저 밖의 회의는 전체 화면과 시스템 오디오를 공유해요.",...ConnectDialogMeetingApp.parameters?.docs?.description}}},Connecting.parameters={...Connecting.parameters,docs:{...Connecting.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    design: {\n      type: "figma",\n      url: "https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-3935"\n    }\n  },\n  beforeEach: () => {\n    const spy = spyOn(navigator.mediaDevices, "getDisplayMedia").mockReturnValue(new Promise(() => {}));\n    return () => spy.mockRestore();\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.click(canvas.getByRole("button", {\n      name: MEETING_AUDIO_COPY.OPTION\n    }));\n    await userEvent.click(within(document.body).getByRole("button", {\n      name: MEETING_AUDIO_COPY.DIALOG.CONFIRM\n    }));\n  }\n}',...Connecting.parameters?.docs?.source},description:{story:"공유 창이 열려 회의 화면을 고르는 중이에요. 고르거나 닫을 때까지 버튼이 로딩으로 바뀌어요.",...Connecting.parameters?.docs?.description}}},Together.parameters={...Together.parameters,docs:{...Together.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    design: {\n      type: "figma",\n      url: "https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-4024"\n    }\n  },\n  beforeEach: () => {\n    useRecordingStore.setState({\n      meetingAudioStatus: "on"\n    });\n  }\n}',...Together.parameters?.docs?.source},description:{story:"지금 대화와 화상 회의 상대방 목소리를 함께 녹음하는 중이에요. 「공유 중지」로 멈출 수 있다고 알려 줘요.",...Together.parameters?.docs?.description}}},TogetherPaused.parameters={...TogetherPaused.parameters,docs:{...TogetherPaused.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    design: {\n      type: "figma",\n      url: "https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-4110"\n    }\n  },\n  beforeEach: () => {\n    useRecordingStore.setState({\n      status: "paused",\n      resumedAt: null,\n      meetingAudioStatus: "on"\n    });\n  }\n}',...TogetherPaused.parameters?.docs?.source},description:{story:"함께 녹음하다 일시정지했어요. 두 소리 모두 일시정지예요.",...TogetherPaused.parameters?.docs?.description}}},NoAudio.parameters={...NoAudio.parameters,docs:{...NoAudio.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    design: {\n      type: "figma",\n      url: "https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-4239"\n    }\n  },\n  beforeEach: () => {\n    useRecordingStore.setState({\n      meetingAudioStatus: "noAudio"\n    });\n  }\n}',...NoAudio.parameters?.docs?.source},description:{story:"공유는 했지만 소리가 오지 않았어요. 지금 대화만 녹음하며 알려요. 예: 탭을 공유하면서 「탭 오디오도 공유」를 끈 경우",...NoAudio.parameters?.docs?.description}}},Stopped.parameters={...Stopped.parameters,docs:{...Stopped.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    design: {\n      type: "figma",\n      url: "https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-4328"\n    }\n  },\n  beforeEach: () => {\n    useRecordingStore.setState({\n      meetingAudioStatus: "stopped"\n    });\n  }\n}',...Stopped.parameters?.docs?.source},description:{story:"함께 녹음하다 공유가 멈췄어요. 녹음은 지금 대화만으로 이어져요. 예: 브라우저의 「공유 중지」를 누르거나 회의 탭을 닫은 경우",...Stopped.parameters?.docs?.description}}},Unsupported.parameters={...Unsupported.parameters,docs:{...Unsupported.parameters?.docs,source:{originalSource:'{\n  beforeEach: () => pretendBrowser(SAFARI_UA),\n  parameters: {\n    design: {\n      type: "figma",\n      url: "https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-4417"\n    }\n  }\n}',...Unsupported.parameters?.docs?.source},description:{story:"상대방 목소리를 받을 수 없는 컴퓨터 브라우저예요. 「지원 안 함」과 다음 녹음은 Chrome이나 Edge에서 하라는 안내만 보여요. 예: Safari, Firefox",...Unsupported.parameters?.docs?.description}}},Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:'{\n  beforeEach: () => pretendBrowser(ANDROID_CHROME_UA),\n  globals: {\n    viewport: {\n      value: "mobile390",\n      isRotated: false\n    }\n  },\n  parameters: {\n    design: {\n      type: "figma",\n      url: "https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=5407-4503"\n    }\n  }\n}',...Mobile.parameters?.docs?.source},description:{story:"휴대폰이에요. 공유 창이 없어 상대방 목소리는 녹음할 수 없고, 컴퓨터의 Chrome, Edge에서만 된다고 알려요.",...Mobile.parameters?.docs?.description}}}},"./src/shared/components/primitives/animation/Pop/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _emotion_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");const popIn=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.i7`
  0% {
    opacity: 0;
    transform: translateY(2%) scale(0.95);
  }
  40% {
    opacity: 1;
    transform: translateY(-1%) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`,popOut=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.i7`
  to {
    opacity: 0;
    transform: translateY(2%) scale(0.96);
  }
`,__WEBPACK_DEFAULT_EXPORT__=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  animation: ${popIn} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;

  &[data-overlay-state="closing"],
  [data-overlay-state="closing"] & {
    animation: ${popOut} 0.2s ease-in-out forwards;
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    &[data-overlay-state="closing"],
    [data-overlay-state="closing"] & {
      animation: none;
    }
  }
`;__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/components/primitives/ui/Button/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>Button});var _emotion_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_shared_components_primitives_ui_Spinner__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/components/primitives/ui/Spinner/index.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const BUTTON_SIZE={lg:{paddingX:"1.25rem",paddingY:"1rem",borderRadius:"0.875rem",gap:"0.5rem",iconSize:"1.5rem",spinnerSize:"1.5rem"},md:{paddingX:"1.125rem",paddingY:"0.75rem",borderRadius:"0.8125rem",gap:"0.4375rem",iconSize:"1.125rem",spinnerSize:"1.375rem"},sm:{paddingX:"1rem",paddingY:"0.5rem",borderRadius:"0.75rem",gap:"0.375rem",iconSize:"1rem",spinnerSize:"1.25rem"}};function Button({size="md",variant="filled",isLoading=!1,isFullWidth=!1,disabled=!1,type="button",children,...props}){const status=isLoading?"loading":disabled?"inactive":"active";return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(Root,{type,disabled:disabled||isLoading,"aria-busy":isLoading,$size:size,$variant:variant,$status:status,$isFullWidth:isFullWidth,...props,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(Content,{$isHidden:isLoading,$size:size,children}),isLoading&&(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(SpinnerWrapper,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_shared_components_primitives_ui_Spinner__WEBPACK_IMPORTED_MODULE_2__.A,{size:BUTTON_SIZE[size].spinnerSize})})]})}const Root=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.button`
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
`;Button.__docgenInfo={description:"액션을 실행하는 버튼.",methods:[],displayName:"Button",props:{size:{required:!1,tsType:{name:"union",raw:'"lg" | "md" | "sm"',elements:[{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"filled" | "outline" | "accent" | "danger"',elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"filled"',computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isFullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:'"button"',computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]}},"./src/shared/components/primitives/ui/Dim/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _emotion_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_constants_breakpoint__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/constants/breakpoint/index.ts"),_emotion_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");const dimShow=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.i7`
  from {
    opacity: 0;
  }
`,dimHide=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.i7`
  to {
    opacity: 0;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.A.div`
  position: fixed;
  inset: 0;
  z-index: 30; /* 겹쳐 뜨는 패널(20)보다 위 */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem; /* 16px — 좁은 화면에서도 가장자리에 붙지 않아요 */
  background-color: ${({theme})=>`${theme.neutral[900]}66`}; /* 40% */
  animation: ${dimShow} 0.4s ease;

  [data-overlay-state="closing"] & {
    animation: ${dimHide} 0.2s ease-in-out forwards;
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    [data-overlay-state="closing"] & {
      animation: none;
    }
  }

  ${_constants_breakpoint__WEBPACK_IMPORTED_MODULE_1__.Wi.mobile} {
    align-items: flex-end;
    padding: 0;
  }
`;__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/components/primitives/ui/Spinner/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>Spinner});var emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const spinnerMaskurl_namespaceObject="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTIyLjI4NDMgOC4zMjg1M0MyMi44NDYgOC4xMjc5OSAyMy4xNDMzIDcuNTA3MzkgMjIuODkzMSA2Ljk2NTk0QzIxLjgxMDIgNC42MjI2IDE5Ljk5NTIgMi42ODEyMSAxNy43MDc2IDEuNDQ0MjdDMTUuMTAyMSAwLjAzNTQzMjIgMTIuMDY3NSAtMC4zNTk5NzkgOS4xODc5NyAwLjMzNDEzMUM2LjMwODQxIDEuMDI4MjQgMy43ODczMSAyLjc2MjgyIDIuMTA5ODQgNS4yMDQwN0MwLjQzMjM1NiA3LjY0NTMyIC0wLjI4Mjk2NSAxMC42MjA3IDAuMTAxNTMgMTMuNTU3N0MwLjQ4NjAyNSAxNi40OTQ3IDEuOTQzMTcgMTkuMTg1NyA0LjE5MjU0IDIxLjExMjhDNi40NDE5MSAyMy4wNCA5LjMyNDU2IDI0LjA2NzEgMTIuMjg1OCAyMy45OTY2QzE1LjI0NjkgMjMuOTI2MSAxOC4wNzc0IDIyLjc2MjggMjAuMjMyNSAyMC43MzA4QzIyLjEyNDYgMTguOTQ2NiAyMy4zNzg3IDE2LjYwMzQgMjMuODIxOCAxNC4wNjAzQzIzLjkyNDIgMTMuNDcyNyAyMy40NzczIDEyLjk0OTUgMjIuODgyOCAxMi45MDA0VjEyLjkwMDRDMjIuMjg4NCAxMi44NTEyIDIxLjc3MjYgMTMuMjk1MiAyMS42NTg2IDEzLjg4MDdDMjEuMjY3IDE1Ljg5MjEgMjAuMjU0NiAxNy43NDExIDE4Ljc1MDYgMTkuMTU5MkMxNi45ODM1IDIwLjgyNTUgMTQuNjYyNSAyMS43Nzk0IDEyLjIzNDMgMjEuODM3MkM5LjgwNjE0IDIxLjg5NSA3LjQ0MjM3IDIxLjA1MjggNS41OTc4OCAxOS40NzI1QzMuNzUzNCAxNy44OTIyIDIuNTU4NTQgMTUuNjg1NiAyLjI0MzI1IDEzLjI3NzNDMS45Mjc5NyAxMC44NjkgMi41MTQ1MyA4LjQyOTE2IDMuODkwMDYgNi40MjczNEM1LjI2NTYgNC40MjU1MiA3LjMzMjkgMy4wMDMxNiA5LjY5NDE0IDIuNDMzOTlDMTIuMDU1NCAxLjg2NDgyIDE0LjU0MzcgMi4xODkwNSAxNi42ODAyIDMuMzQ0M0MxOC40OTg2IDQuMzI3NTEgMTkuOTUyOCA1Ljg1MzUzIDIwLjg0OSA3LjY5NjRDMjEuMTA5OSA4LjIzMjggMjEuNzIyNSA4LjUyOTA3IDIyLjI4NDMgOC4zMjg1M1Y4LjMyODUzWiIvPjwvc3ZnPgo=";var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function Spinner({size="1.5rem",...props}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(Root,{$size:size,"aria-hidden":!0,...props})}const spin=emotion_react_browser_esm.i7`
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
`;Spinner.__docgenInfo={description:"회전하는 로딩 표시.",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"string"},description:"지름. 부모 글자 크기를 따라가게 하려면 `1em`을 넘기면 돼요.",defaultValue:{value:'"1.5rem"',computed:!1}}},composes:["HTMLAttributes"]}},"./src/shared/hooks/common/useExitAnimation/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=({value,ref})=>{const[previousValue,setPreviousValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value),[exitingValue,setExitingValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);value!==previousValue&&(setPreviousValue(value),setExitingValue(null===value?previousValue:null));const isExiting=null===value&&null!==exitingValue;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{if(!isExiting)return;const animations=ref.current?"function"!=typeof(element=ref.current).getAnimations?[]:element.getAnimations({subtree:!0}).filter(animation=>animation.effect?.getComputedTiming().endTime!==1/0):[];var element;if(0===animations.length)return void setExitingValue(null);let isCancelled=!1;return Promise.allSettled(animations.map(animation=>animation.finished)).then(()=>{isCancelled||setExitingValue(null)}),()=>{isCancelled=!0}},[isExiting,ref]),{renderedValue:value??exitingValue,isExiting}};__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/hooks/common/useKeyDown/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=({key,isEnabled,onKeyDown})=>{const handlerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onKeyDown);handlerRef.current=onKeyDown,(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!isEnabled)return;const handleKeyDown=e=>{e.key===key&&handlerRef.current(e)};return document.addEventListener("keydown",handleKeyDown),()=>document.removeEventListener("keydown",handleKeyDown)},[key,isEnabled])};__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/hooks/domain/recording/useRecordingState/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _store_recordingStore__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/store/recordingStore/index.ts"),_store_recordingStore_meetingAudio__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/store/recordingStore/meetingAudio.ts");const __WEBPACK_DEFAULT_EXPORT__=()=>{const status=(0,_store_recordingStore__WEBPACK_IMPORTED_MODULE_0__.A)(state=>state.status),session=(0,_store_recordingStore__WEBPACK_IMPORTED_MODULE_0__.A)(state=>state.session),isEnding=(0,_store_recordingStore__WEBPACK_IMPORTED_MODULE_0__.A)(state=>state.isEnding),analyser=(0,_store_recordingStore__WEBPACK_IMPORTED_MODULE_0__.A)(state=>state.analyser),isMicrophoneLost=(0,_store_recordingStore__WEBPACK_IMPORTED_MODULE_0__.A)(state=>state.isMicrophoneLost),clearMicrophoneLost=(0,_store_recordingStore__WEBPACK_IMPORTED_MODULE_0__.A)(state=>state.clearMicrophoneLost),meetingAudioStatus=(0,_store_recordingStore__WEBPACK_IMPORTED_MODULE_0__.A)(state=>state.meetingAudioStatus),connectMeetingAudio=(0,_store_recordingStore__WEBPACK_IMPORTED_MODULE_0__.A)(state=>state.connectMeetingAudio);return{status,session,isRecordingActive:"idle"!==status,analyser,isMicrophoneLost,isEnding,isConnectionLost:(0,_store_recordingStore__WEBPACK_IMPORTED_MODULE_0__.A)(state=>"idle"!==state.status&&(state.isHeartbeatFailing||state.isChunkTransferStalled)),isChunkArchiveFailed:(0,_store_recordingStore__WEBPACK_IMPORTED_MODULE_0__.A)(state=>state.isChunkArchiveFailed),clearMicrophoneLost,isMeetingAudioSupported:(0,_store_recordingStore_meetingAudio__WEBPACK_IMPORTED_MODULE_1__.S)(),meetingAudioStatus,connectMeetingAudio}};__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/provider/context/dialogContext/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Co:()=>DialogProvider,sp:()=>useDialog,y2:()=>useHasDialog});var emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),useExitAnimation=__webpack_require__("./src/shared/hooks/common/useExitAnimation/index.ts"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js");const common_useReturnFocus=({isActive})=>{const returnFocusRef=(0,react.useRef)(null),remember=(0,react.useCallback)(()=>{null===returnFocusRef.current&&document.activeElement instanceof HTMLElement&&(returnFocusRef.current=document.activeElement)},[]);return(0,react.useEffect)(()=>{isActive||(returnFocusRef.current?.focus(),returnFocusRef.current=null)},[isActive]),{remember}};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const DialogContext=(0,react.createContext)(null),HasDialogContext=(0,react.createContext)(!1);function DialogProvider({children}){const{dialog,show,closeOpenedDialog}=(()=>{const[openedDialog,setOpenedDialog]=(0,react.useState)(null);return{dialog:openedDialog,show:(0,react.useCallback)(render=>{const nextDialog={render,close:()=>setOpenedDialog(current=>current===nextDialog?null:current)};return setOpenedDialog(nextDialog),nextDialog.close},[]),closeOpenedDialog:(0,react.useCallback)(()=>setOpenedDialog(null),[])}})(),{remember}=common_useReturnFocus({isActive:null!==dialog}),dialogLayerRef=(0,react.useRef)(null),{renderedValue:renderedDialog,isExiting}=(0,useExitAnimation.A)({value:dialog,ref:dialogLayerRef}),controlsValue=(0,react.useMemo)(()=>({open:nextRender=>(remember(),show(nextRender)),closeOpenedDialog}),[closeOpenedDialog,remember,show]);return(0,emotion_react_jsx_runtime_browser_esm.Y)(DialogContext.Provider,{value:controlsValue,children:(0,emotion_react_jsx_runtime_browser_esm.FD)(HasDialogContext.Provider,{value:null!==dialog,children:[children,renderedDialog&&(0,emotion_react_jsx_runtime_browser_esm.Y)(DialogLayer,{ref:dialogLayerRef,"data-overlay-state":isExiting?"closing":"open",inert:isExiting,children:renderedDialog.render({close:renderedDialog.close})})]})})}const DialogLayer=emotion_styled_browser_esm.A.div`
  display: contents;
`,useDialog=()=>{const controls=(0,react.useContext)(DialogContext);if(null===controls)throw new Error("useDialog는 DialogProvider 안에서만 쓸 수 있어요. DialogProvider를 앱 최상단에 넣어 주세요.");return controls},useHasDialog=()=>(0,react.useContext)(HasDialogContext);DialogProvider.__docgenInfo={description:'어느 화면에서든 `useDialog`로 모달을 띄울 수 있게 해 주는 프로바이더.\n\n지금 떠 있는 모달 하나만 들고 있고, 무엇을 어떻게 그릴지는 모르므로\n모달의 종류나 겉모양이 바뀌어도 이 파일은 바뀌지 않아요.\n어떤 모달이 떠 있는지는 `useOpenedDialog`가, 모두 닫히면 처음 모달을 열기 전\n포커스 자리로 돌려주는 일은 `useReturnFocus`가 맡고, 여기서는 둘을 이어 주기만 해요.\n\n닫힌 모달은 `useExitAnimation`이 닫힘 애니메이션이 끝날 때까지 조금 더 그려 둬요.\n그동안 감싼 요소에 `data-overlay-state="closing"`을 붙이고, 어떻게 사라질지는 이 표시를 읽는 `Dim`과 카드(`Pop`)가 정해요.\n사라지는 모달은 `inert`로 막아서 버튼이 클릭이나 키보드로 다시 눌리지 않아요.',methods:[],displayName:"DialogProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/zustand@5.0.15_@types+react@19.2.18_react@19.2.8_use-sync-external-store@1.7.0_react@19.2.8_/node_modules/zustand/esm/react.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:()=>create});var react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js");const createStoreImpl=createState=>{let state;const listeners=new Set,setState=(partial,replace)=>{const nextState="function"==typeof partial?partial(state):partial;if(!Object.is(nextState,state)){const previousState=state;state=(null!=replace?replace:"object"!=typeof nextState||null===nextState)?nextState:Object.assign({},state,nextState),listeners.forEach(listener=>listener(state,previousState))}},getState=()=>state,api={setState,getState,getInitialState:()=>initialState,subscribe:listener=>(listeners.add(listener),()=>listeners.delete(listener))},initialState=state=createState(setState,getState,api);return api},identity=arg=>arg;const createImpl=createState=>{const api=(createState=>createState?createStoreImpl(createState):createStoreImpl)(createState),useBoundStore=selector=>function useStore(api,selector=identity){const slice=react.useSyncExternalStore(api.subscribe,react.useCallback(()=>selector(api.getState()),[api,selector]),react.useCallback(()=>selector(api.getInitialState()),[api,selector]));return react.useDebugValue(slice),slice}(api,selector);return Object.assign(useBoundStore,api),useBoundStore},create=createState=>createState?createImpl(createState):createImpl}}]);
//# sourceMappingURL=modules-features-recording-MeetingAudioOption-index-stories.1b3347c3.iframe.bundle.js.map