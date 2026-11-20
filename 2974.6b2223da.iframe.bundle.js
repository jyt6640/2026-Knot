"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2974],{"./src/modules/features/recording/RenameSpeaker/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>RenameSpeaker});var useRecordingTranscriptQuery=__webpack_require__("./src/shared/api/queries/useRecordingTranscriptQuery/index.ts"),recording=__webpack_require__("./src/shared/api/dto/recording.ts"),httpClient=__webpack_require__("./src/shared/api/httpClient/index.ts"),_recordingId_=__webpack_require__("./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/recordings/[recordingId]/index.ts");const RECORDING_SPEAKER_API_PATH=(workspaceId,recordingId,speakerNumber)=>`${(0,_recordingId_.$)(workspaceId,recordingId)}/speakers/${speakerNumber}`;var recordingDocument=__webpack_require__("./src/shared/api/queryKey/recordingDocument.ts"),QueryClientProvider=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),useMutation=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useMutation.js");function useChangeSpeakerNameMutation(){const client=(0,QueryClientProvider.jE)();return(0,useMutation.n)({retry:!1,networkMode:"always",mutationFn:({workspaceId,recordingId,speakerNumber,...input})=>(async({workspaceId,recordingId,body,speakerNumber})=>{const response=await(0,httpClient.ok)({method:"patch",url:RECORDING_SPEAKER_API_PATH(workspaceId,recordingId,speakerNumber),data:body});return new recording.HO(response.data)})({workspaceId,recordingId,speakerNumber,body:new recording.Nz(input)}),onSuccess:(data,params)=>{client.setQueryData(recordingDocument.x.transcript(params),old=>old?{...old,segments:old.segments.map(segment=>segment.speakerNumber===data.speakerNumber?{...segment,speakerDisplayName:data.displayName}:segment)}:old)},onSettled:async(_data,_error,params)=>{const key=recordingDocument.x.transcript(params),transcript=client.getQueryData(key);await Promise.all([client.invalidateQueries({queryKey:key}),client.invalidateQueries({predicate:query=>"documents"===query.queryKey[0]&&"transcript"===query.queryKey[1]&&query.queryKey[2]===params.workspaceId&&void 0!==transcript&&query.state.data?.transcriptId===transcript.transcriptId})])}})}var Popover=__webpack_require__("./src/shared/components/composites/Popover/index.tsx"),emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),useRedirectToLoginOnUnauthorized=__webpack_require__("./src/shared/hooks/domain/auth/useRedirectToLoginOnUnauthorized/index.ts"),captureAnalyticsEvent=__webpack_require__("./src/shared/utils/captureAnalyticsEvent/index.ts"),isUnauthorizedError=__webpack_require__("./src/shared/utils/isUnauthorizedError/index.ts"),workspace=__webpack_require__("./src/shared/api/dto/workspace.ts");const WORKSPACE_MEMBERS_API_PATH=workspaceId=>`/api/v1/workspaces/${workspaceId}/members`;var queryKey_workspace=__webpack_require__("./src/shared/api/queryKey/workspace.ts"),useInfiniteQuery=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js");function useWorkspaceMembersInfiniteQuery(workspaceId){return(0,useInfiniteQuery.q)({queryKey:queryKey_workspace.O.members(workspaceId),initialPageParam:null,queryFn:({pageParam})=>(async({workspaceId,cursor})=>{const response=await(0,httpClient.ok)({method:"get",url:WORKSPACE_MEMBERS_API_PATH(workspaceId),params:{cursor:cursor??void 0,limit:50}});return new workspace.Ju(response.data)})({workspaceId,cursor:pageParam}),getNextPageParam:page=>page.nextCursor??void 0,retry:!1})}var react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js");var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function SpeakerNameForm({workspaceId,currentName,isSaving,hasSaveError,isVerificationFailed,isVerifying,onVerify,onSave,onClose}){const titleId=(0,react.useId)(),inputId=(0,react.useId)(),errorId=(0,react.useId)(),input=(0,react.useRef)(null),[name,setName]=(0,react.useState)(""),[selectedId,setSelectedId]=(0,react.useState)(null),members=useWorkspaceMembersInfiniteQuery(workspaceId),validation=(value=>{if(/[\u0000-\u001f\u007f-\u009f\u2028\u2029]/u.test(value))return"이름에 줄바꿈이나 제어 문자를 넣을 수 없어요.";const length=[...value.trim()].length;return length>=1&&length<=50?null:"이름은 1~50자로 입력해 주세요."})(name);return(0,react.useEffect)(()=>{input.current?.focus()},[]),(0,emotion_react_jsx_runtime_browser_esm.FD)(Card,{role:"dialog","aria-labelledby":titleId,onSubmit:event=>{event.preventDefault(),isSaving||isVerificationFailed||isVerifying||null!==validation||onSave({name:name.trim(),nameSource:null===selectedId?"typed":"member"})},children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Header,{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Title,{id:titleId,children:"이름 바꾸기"}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Current,{children:["지금 이름: ",currentName]})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Close,{type:"button","aria-label":"이름 바꾸기 닫기",disabled:isSaving,onClick:onClose,children:"×"})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Field,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Label,{htmlFor:inputId,children:"새 이름"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Input,{id:inputId,ref:input,placeholder:"직접 입력",value:name,disabled:isSaving,"aria-invalid":name.length>0&&null!==validation,"aria-describedby":name.length>0&&validation?errorId:void 0,onChange:event=>{setName(event.target.value),setSelectedId(null)}}),name.length>0&&validation&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Error,{id:errorId,children:validation})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Field,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Label,{as:"p",children:"멤버에서 고르기"}),members.isPending&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Current,{role:"status",children:"멤버를 불러오고 있어요."}),members.isError&&(0,emotion_react_jsx_runtime_browser_esm.FD)(Error,{role:"alert",children:["멤버를 불러오지 못했어요. 이름을 직접 입력할 수 있어요."," ",(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{type:"button",onClick:()=>{members.refetch()},children:"다시 불러오기"})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(MemberList,{"aria-label":"워크스페이스 멤버",children:members.data?.pages.flatMap(page=>page.items).map(member=>(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{children:(0,emotion_react_jsx_runtime_browser_esm.FD)(Member,{type:"button",$isSelected:selectedId===member.memberId,"aria-pressed":selectedId===member.memberId,disabled:isSaving,onClick:()=>{setName(member.nickname),setSelectedId(member.memberId)},children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Avatar,{"aria-hidden":!0,children:member.profileImageUrl?(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:member.profileImageUrl,alt:""}):[...member.nickname][0]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(MemberName,{children:member.nickname}),selectedId===member.memberId&&(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{"aria-hidden":!0,children:"✓"})]})},member.memberId))}),members.hasNextPage&&(0,emotion_react_jsx_runtime_browser_esm.Y)(More,{type:"button",disabled:members.isFetchingNextPage,onClick:()=>{members.fetchNextPage()},children:"멤버 더 보기"})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Notice,{children:["이 녹음에서 ",(0,emotion_react_jsx_runtime_browser_esm.Y)("strong",{children:currentName}),"로 표시된 발화가 모두 ‘",name.trim()||"새 이름","’으로 바뀌어요."]}),hasSaveError&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Error,{role:"alert",children:"이름 저장을 확인하지 못했어요. 현재 표시된 이름을 확인하고 다시 시도해 주세요."}),isVerificationFailed&&(0,emotion_react_jsx_runtime_browser_esm.FD)(Error,{role:"alert",children:["현재 전사를 확인하지 못했어요."," ",(0,emotion_react_jsx_runtime_browser_esm.Y)(More,{type:"button",disabled:isVerifying,onClick:onVerify,children:isVerifying?"확인 중":"다시 확인"})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Actions,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Cancel,{type:"button",disabled:isSaving,onClick:onClose,children:"취소"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Save,{type:"submit",disabled:isSaving||isVerificationFailed||isVerifying||null!==validation,children:isSaving?"저장 중":"바꾸기"})]})]})}const Card=emotion_styled_browser_esm.A.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 22.5rem;
  max-width: calc(100vw - 2rem);
  max-height: calc(100dvh - 2rem);
  overflow-y: auto;
  padding: 1.5rem;
  border: 1px solid ${({theme})=>theme.neutral[200]};
  border-radius: 1.25rem;
  background: ${({theme})=>theme.neutral[0]};
  box-shadow: ${({theme})=>theme.shadow03};
`,Header=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
`,Title=emotion_styled_browser_esm.A.h3`
  ${({theme})=>theme.text.heading03};
  color: ${({theme})=>theme.neutral[900]};
`,Current=emotion_styled_browser_esm.A.p`
  margin-top: 0.25rem;
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.neutral[500]};
  overflow-wrap: anywhere;
`,Close=emotion_styled_browser_esm.A.button`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({theme})=>theme.neutral[600]};
`,Field=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Label=emotion_styled_browser_esm.A.label`
  ${({theme})=>theme.text.caption02};
  font-weight: 600;
  color: ${({theme})=>theme.neutral[600]};
`,Input=emotion_styled_browser_esm.A.input`
  width: 100%;
  height: 3.25rem;
  padding: 0 1rem;
  border: 1px solid ${({theme})=>theme.neutral[300]};
  border-radius: 0.875rem;
  background: ${({theme})=>theme.neutral[100]};
  color: ${({theme})=>theme.neutral[900]};
  ${({theme})=>theme.text.caption02};
  &:focus {
    outline: 2px solid ${({theme})=>theme.neutral[800]};
    outline-offset: -1px;
  }
`,MemberList=emotion_styled_browser_esm.A.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-height: 15rem;
  overflow-y: auto;
`,Member=emotion_styled_browser_esm.A.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  min-height: 3rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  ${({theme})=>theme.text.body01};
  cursor: pointer;
  background: ${({theme,$isSelected})=>$isSelected?theme.neutral[100]:theme.neutral[0]};
  font-weight: ${({$isSelected})=>$isSelected?600:400};
  color: ${({theme})=>theme.neutral[900]};
`,Avatar=emotion_styled_browser_esm.A.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  background: ${({theme})=>theme.neutral[200]};
  ${({theme})=>theme.text.caption02};
  font-weight: 600;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,MemberName=emotion_styled_browser_esm.A.span`
  flex: 1;
  text-align: left;
  overflow-wrap: anywhere;
`,Notice=emotion_styled_browser_esm.A.p`
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background: ${({theme})=>theme.neutral[50]};
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.neutral[600]};
  overflow-wrap: anywhere;
`,Error=emotion_styled_browser_esm.A.p`
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.sub.warning[700]};
`,More=emotion_styled_browser_esm.A.button`
  ${({theme})=>theme.text.caption02};
  text-decoration: underline;
  cursor: pointer;
`,Actions=emotion_styled_browser_esm.A.div`
  display: flex;
  gap: 0.5rem;
`,Cancel=emotion_styled_browser_esm.A.button`
  flex: 1;
  height: 3rem;
  border: 1px solid ${({theme})=>theme.neutral[200]};
  border-radius: 0.8125rem;
  ${({theme})=>theme.text.body01};
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`,Save=(0,emotion_styled_browser_esm.A)(Cancel)`
  border-color: ${({theme})=>theme.neutral[800]};
  background: ${({theme})=>theme.neutral[800]};
  color: ${({theme})=>theme.neutral[0]};
  font-weight: 600;
`;function RenameSpeaker({workspaceId,recordingId,speakerNumber,displayName,isInitiallyOpen=!1}){const mutation=useChangeSpeakerNameMutation(),verification=(0,useRecordingTranscriptQuery.A)({workspaceId,recordingId,isEnabled:!1});(0,useRedirectToLoginOnUnauthorized.A)({error:mutation.error});const trackSpeakerRenamed=({result,nameSource})=>{(0,captureAnalyticsEvent.L)({event:"speaker_renamed",properties:{result,name_source:nameSource,recording_id:recordingId,workspace_id:workspaceId}})};return(0,emotion_react_jsx_runtime_browser_esm.Y)(Popover.A,{placement:"bottom-start",openOn:"click",isInitiallyOpen,isDismissible:!mutation.isPending,onOpen:()=>mutation.reset(),content:({close})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(SpeakerNameForm,{workspaceId,currentName:displayName,isSaving:mutation.isPending,hasSaveError:mutation.isError,isVerificationFailed:verification.isError,isVerifying:verification.isFetching,onVerify:()=>{verification.refetch()},onClose:close,onSave:({name,nameSource})=>mutation.mutate({workspaceId,recordingId,speakerNumber,displayName:name},{onSuccess:()=>{trackSpeakerRenamed({result:"saved",nameSource}),close()},onError:error=>{(0,isUnauthorizedError.d)(error)||trackSpeakerRenamed({result:"failed",nameSource})}})}),children:props=>(0,emotion_react_jsx_runtime_browser_esm.Y)(Name,{type:"button",...props,"aria-label":`${displayName} 이름 바꾸기`,children:displayName})})}SpeakerNameForm.__docgenInfo={description:"",methods:[],displayName:"SpeakerNameForm",props:{workspaceId:{required:!0,tsType:{name:"number"},description:""},currentName:{required:!0,tsType:{name:"string"},description:""},isSaving:{required:!0,tsType:{name:"boolean"},description:""},hasSaveError:{required:!0,tsType:{name:"boolean"},description:""},isVerificationFailed:{required:!0,tsType:{name:"boolean"},description:""},isVerifying:{required:!0,tsType:{name:"boolean"},description:""},onVerify:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSave:{required:!0,tsType:{name:"signature",type:"function",raw:"(draft: SpeakerNameDraft) => void",signature:{arguments:[{type:{name:"SpeakerNameDraft"},name:"draft"}],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Name=emotion_styled_browser_esm.A.button`
  display: inline;
  padding: 0;
  font: inherit;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: ${({theme})=>theme.neutral[300]};
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  cursor: pointer;
  overflow-wrap: anywhere;
  &[aria-expanded="true"] {
    padding: 0 0.25rem;
    border-radius: 0.375rem;
    background: ${({theme})=>theme.neutral[800]};
    color: ${({theme})=>theme.neutral[0]};
    text-decoration: none;
  }
  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 3px;
  }
`;RenameSpeaker.__docgenInfo={description:"이름 선택은 계정 연결 없이 문자열만 복사해요.\n\n저장 결과가 정해지면 이름을 정한 방법과 함께 사용 기록(`speaker_renamed`)으로 보내요. 바꾼 이름은 넣지 않아요.\n로그인이 풀린 401은 결과가 아니라 보내지 않아요.",methods:[],displayName:"RenameSpeaker",props:{workspaceId:{required:!0,tsType:{name:"number"},description:""},recordingId:{required:!0,tsType:{name:"number"},description:""},speakerNumber:{required:!0,tsType:{name:"number"},description:""},displayName:{required:!0,tsType:{name:"string"},description:""},isInitiallyOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/recordings/[recordingId]/transcript/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _api_dto_recordingDocument__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/api/dto/recordingDocument.ts"),_api_httpClient__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/api/httpClient/index.ts");const RECORDING_TRANSCRIPT_API_PATH=(workspaceId,recordingId)=>`/api/v1/workspaces/${workspaceId}/recordings/${recordingId}/transcript`;__webpack_require__.d(__webpack_exports__,["W",0,RECORDING_TRANSCRIPT_API_PATH,"_",0,async({workspaceId,recordingId})=>{const response=await(0,_api_httpClient__WEBPACK_IMPORTED_MODULE_1__.ok)({method:"get",url:RECORDING_TRANSCRIPT_API_PATH(workspaceId,recordingId)});return new _api_dto_recordingDocument__WEBPACK_IMPORTED_MODULE_0__.wx(response.data)}])},"./src/shared/api/queries/useRecordingTranscriptQuery/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _api_fetch_api_v1_workspaces_workspaceId_recordings_recordingId_transcript__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/recordings/[recordingId]/transcript/index.ts"),_api_queryKey_recordingDocument__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/api/queryKey/recordingDocument.ts"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useQuery.js");const __WEBPACK_DEFAULT_EXPORT__=({workspaceId,recordingId,isEnabled=!0})=>(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.I)({queryKey:_api_queryKey_recordingDocument__WEBPACK_IMPORTED_MODULE_1__.x.transcript({workspaceId,recordingId}),queryFn:()=>(0,_api_fetch_api_v1_workspaces_workspaceId_recordings_recordingId_transcript__WEBPACK_IMPORTED_MODULE_0__._)({workspaceId,recordingId}),enabled:isEnabled});__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/hooks/domain/auth/useRedirectToLoginOnUnauthorized/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _hooks_domain_auth_useNavigateToLogin__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/hooks/domain/auth/useNavigateToLogin/index.ts"),_utils_isUnauthorizedError__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/utils/isUnauthorizedError/index.ts"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=({error})=>{const{navigateToLogin}=(0,_hooks_domain_auth_useNavigateToLogin__WEBPACK_IMPORTED_MODULE_0__.A)(),isUnauthorized=(0,_utils_isUnauthorizedError__WEBPACK_IMPORTED_MODULE_1__.d)(error);return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{isUnauthorized&&navigateToLogin({replace:!0})},[isUnauthorized,navigateToLogin]),{isUnauthorized}};__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])}}]);
//# sourceMappingURL=2974.6b2223da.iframe.bundle.js.map