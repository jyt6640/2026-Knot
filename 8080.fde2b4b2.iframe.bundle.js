"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8080],{"./src/assets/icons/file.svg"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),_excluded=["size"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgFile(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16",width:size,height:size,focusable:"false","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{stroke:"currentColor",strokeLinejoin:"round",strokeWidth:1.4,d:"M9.467 2.133H5a1.333 1.333 0 0 0-1.333 1.334v9.066A1.333 1.333 0 0 0 5 13.867h6a1.333 1.333 0 0 0 1.333-1.334v-7.4z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{stroke:"currentColor",strokeLinejoin:"round",strokeWidth:1.4,d:"M9.4 2.267v3h2.867"})))};__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/modules/features/document/MeetingDocumentList/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>MeetingDocumentList});var useDocumentsByRecordingQuery=__webpack_require__("./src/shared/api/queries/useDocumentsByRecordingQuery/index.ts"),useRecordingDocumentQuery=__webpack_require__("./src/shared/api/queries/useRecordingDocumentQuery/index.ts"),emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),useRedirectToLoginOnUnauthorized=__webpack_require__("./src/shared/hooks/domain/auth/useRedirectToLoginOnUnauthorized/index.ts"),useRetryFailedRecording=__webpack_require__("./src/shared/hooks/domain/recording/useRetryFailedRecording/index.ts"),InlineError=__webpack_require__("./src/shared/components/primitives/ui/InlineError/index.tsx"),Skeleton=__webpack_require__("./src/shared/components/primitives/ui/Skeleton/index.tsx"),PATH_ROUTE=__webpack_require__("./src/shared/routes/PATH_ROUTE.ts"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),hooks=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/hooks.js"),Spinner=__webpack_require__("./src/shared/components/primitives/ui/Spinner/index.tsx"),icons_alert=__webpack_require__("./src/assets/icons/alert.svg"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function DocumentFailedCard({onRetry,isRetrying}){return(0,emotion_react_jsx_runtime_browser_esm.FD)(Card,{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(TopRow,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(icons_alert.A,{size:16,"aria-hidden":!0}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Title,{children:"문서를 만들지 못했어요"})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(BottomRow,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Description,{children:"녹음은 보관해 두었어요."}),void 0!==onRetry&&(0,emotion_react_jsx_runtime_browser_esm.FD)(RetryButton,{type:"button",disabled:isRetrying,"aria-busy":isRetrying,onClick:onRetry,children:[isRetrying&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Spinner.A,{size:"0.75rem"}),"다시 시도"]})]})]})}const Card=emotion_styled_browser_esm.A.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.375rem; /* 6px */
  min-height: 5rem; /* 80px */
  padding: 1rem 1.25rem; /* 16px 20px */
  border: 1px dashed ${({theme})=>theme.neutral[300]};
  border-radius: 1rem; /* 16px */
  background-color: ${({theme})=>theme.neutral[100]};
`,TopRow=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 8px */

  & > svg {
    flex-shrink: 0;
    color: ${({theme})=>theme.sub.warning[700]};
  }
`,Title=emotion_styled_browser_esm.A.p`
  ${({theme})=>theme.text.label01};
  color: ${({theme})=>theme.neutral[900]};
`,BottomRow=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem; /* 8px */
`,Description=emotion_styled_browser_esm.A.p`
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.neutral[600]};
`,RetryButton=emotion_styled_browser_esm.A.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.25rem; /* 4px */
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.neutral[900]};
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 0.1875rem; /* 3px */

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }
`;DocumentFailedCard.__docgenInfo={description:"「이 회의에서 나온 문서」에서 만들지 못한 문서 자리를 알리는 카드(STT-R52 · R42). 피그마 Card/RelatedDoc 상태=만들지 못함이에요.\n\n실패한 문서 작업이 여러 개여도 카드는 하나예요. 「다시 시도」는 실패한 문서 작업을 모두 다시 접수해요.\n무엇을 다시 접수할지는 이 카드를 놓는 쪽이 정해요.",methods:[],displayName:"DocumentFailedCard",props:{onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"「다시 시도」를 눌렀을 때. 서버가 다시 시도할 수 없다고 하면 넘기지 않고, 그때는 「다시 시도」를 그리지 않아요"},isRetrying:{required:!0,tsType:{name:"boolean"},description:"다시 시도 요청의 응답을 기다리는 중인지. 그동안 「다시 시도」를 누를 수 없어요"}}};var RelatedCard=__webpack_require__("./src/shared/components/primitives/ui/RelatedCard/index.tsx"),file=__webpack_require__("./src/assets/icons/file.svg");function MeetingDocumentCard({href,title,summary}){return(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(RelatedCard.A,{href,icon:(0,emotion_react_jsx_runtime_browser_esm.Y)(file.A,{size:16,"aria-hidden":!0}),title,description:summary})})}MeetingDocumentCard.__docgenInfo={description:"「이 회의에서 나온 문서」의 문서 카드 하나. 제목과 한 줄 요약을 담고, 누르면 그 문서의 문서 보기로 가요(STT-R52). 피그마 Card/RelatedDoc 상태=기본이에요.\n\n주제 · 날짜 · 녹음 길이 · 확인 상태는 보여주지 않아요. 제목과 요약은 한 줄을 넘으면 말줄임해요.",methods:[],displayName:"MeetingDocumentCard",props:{href:{required:!0,tsType:{name:"string"},description:"카드를 누르면 갈 문서 보기 주소"},title:{required:!0,tsType:{name:"string"},description:""},summary:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"한 줄 요약. 없으면 null이고, 그때는 제목만 보여줘요"}}};function MeetingDocumentList(){const titleId=(0,react.useId)(),params=(0,hooks.g)(),workspaceId=Number(params.workspaceId),recordingId=Number(params.recordingId),{data:recordingDocument}=(0,useRecordingDocumentQuery.A)({workspaceId,recordingId}),{data:documentList,error,isError,refetch}=(0,useDocumentsByRecordingQuery.A)({workspaceId,recordingSessionId:recordingId,isPolling:"PROCESSING"===recordingDocument?.processingStatus}),{isUnauthorized}=(0,useRedirectToLoginOnUnauthorized.A)({error}),isDocumentFailed="DOCUMENT_FAILED"===recordingDocument?.processingStatus,isRetryable=recordingDocument?.isRetryable??!1,{handleRetry,isRetrying}=(0,useRetryFailedRecording.A)({surface:"recording_document",workspaceId,recordingId,failedStatus:isDocumentFailed?"documentFailed":null,isRetryable,retryableJobIds:recordingDocument?.retryableJobIds??[]}),documents=void 0===documentList?void 0:(items=documentList.items,[...items].sort((a,b)=>Date.parse(a.createdAt)-Date.parse(b.createdAt)||a.id-b.id));var items;const handleRetryLoad=()=>{refetch()};return(0,emotion_react_jsx_runtime_browser_esm.FD)(Root,{"aria-labelledby":titleId,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Heading,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(MeetingDocumentList_Title,{id:titleId,children:"이 회의에서 나온 문서"}),void 0!==documents&&documents.length>0&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Count,{children:documents.length})]}),void 0===documents?isError&&!isUnauthorized?(0,emotion_react_jsx_runtime_browser_esm.Y)(InlineError.A,{message:"목록을 불러오지 못했어요. 다시 시도해 주세요.",onRetry:handleRetryLoad}):(0,emotion_react_jsx_runtime_browser_esm.FD)(Grid,{"aria-hidden":!0,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Skeleton.A,{height:5,radius:1}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Skeleton.A,{height:5,radius:1})]}):(0,emotion_react_jsx_runtime_browser_esm.FD)(Grid,{children:[documents.map(({id,title,summary})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(MeetingDocumentCard,{href:(0,PATH_ROUTE.vX)({routeKey:"DOCUMENT",params:{workspaceId:String(workspaceId),documentId:String(id)}}),title,summary},id)),isDocumentFailed&&(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentFailedCard,{onRetry:isRetryable?handleRetry:void 0,isRetrying})]})]})}const Root=emotion_styled_browser_esm.A.section`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 16px */
`,Heading=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: baseline;
  gap: 0.375rem; /* 6px */
`,MeetingDocumentList_Title=emotion_styled_browser_esm.A.h3`
  ${({theme})=>theme.text.heading04};
  color: ${({theme})=>theme.neutral[900]};
`,Count=emotion_styled_browser_esm.A.span`
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.neutral[500]};
`,Grid=emotion_styled_browser_esm.A.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(17.5rem, 100%), 1fr));
  gap: 1rem 1.25rem; /* 16px 20px */
`;MeetingDocumentList.__docgenInfo={description:"녹음 문서의 「이 회의에서 나온 문서」(STT-R52). 그 녹음에서 나온 주제별 문서를 두 열 카드로 보여 주고, 카드를 누르면 문서 보기로 가요.\n\n보여 주는 문서와 순서는 문서 탭 「녹음별」 탭에서 그 녹음 아래에 보이는 문서와 같아요. 「녹음별」 탭처럼 만든 순서로 늘어놓아요.\n머리의 「이 회의에서 나온 문서」 옆에 만들어진 문서 수를 둬요. 실패 카드는 세지 않고, 만들어진 문서가 없으면 수를 두지 않아요.\n\n문서 생성이 실패한 녹음(`DOCUMENT_FAILED`)이면 문서 카드 뒤에 「문서를 만들지 못했어요」 카드를 하나 둬요.\n서버가 다시 시도할 수 있다고 하면(`isRetryable`) 그 카드의 「다시 시도」가 실패한 문서 작업을 모두 다시 접수하고, 접수되면 녹음 문서가 정리 중으로 바뀌어요.\n\n목록을 받지 못한 동안에는 이 자리만 상태를 그려요. 불러오는 중은 카드 모양 덩어리, 불러오기 실패는 안내와 「다시 시도」예요.\n제목 · 회의 전체 요약 · 전사 · 녹음 음성은 그대로 읽을 수 있어요.\n\n어느 처리 상태에서 이 자리를 둘지(완료 · 문서 생성 실패)는 이 목록을 놓는 쪽이 정해요. 녹음 문서는 이 목록이 있어도 주제별 문서가 아니에요(STT-R40).",methods:[],displayName:"MeetingDocumentList"}},"./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/documents/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _api_dto_document__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/api/dto/document.ts"),_api_httpClient__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/api/httpClient/index.ts");const DOCUMENTS_API_PATH=workspaceId=>`/api/v1/workspaces/${workspaceId}/documents`,getDocumentsApi=async({workspaceId,cursor,size,recordingSessionId,myConfirmation})=>{const response=await(0,_api_httpClient__WEBPACK_IMPORTED_MODULE_1__.ok)({method:"get",url:DOCUMENTS_API_PATH(workspaceId),params:{cursor,size,recordingSessionId,myConfirmation}});return new _api_dto_document__WEBPACK_IMPORTED_MODULE_0__.h8(response.data)};__webpack_require__.d(__webpack_exports__,["Bm",0,getDocumentsApi,"oj",0,async({workspaceId,recordingSessionId,myConfirmation})=>{const firstPage=await getDocumentsApi({workspaceId,size:100,recordingSessionId,myConfirmation}),items=[...firstPage.items];let nextCursor=firstPage.nextCursor;for(let pageCount=1;null!==nextCursor&&pageCount<20;pageCount+=1){const page=await getDocumentsApi({workspaceId,cursor:nextCursor,size:100,recordingSessionId,myConfirmation});items.push(...page.items),nextCursor=page.nextCursor}return{topics:firstPage.topics,items,nextCursor}},"wt",0,DOCUMENTS_API_PATH])},"./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/recordings/[recordingId]/document/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _api_dto_recordingDocument__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/api/dto/recordingDocument.ts"),_api_httpClient__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/api/httpClient/index.ts");const RECORDING_DOCUMENT_API_PATH=(workspaceId,recordingId)=>`/api/v1/workspaces/${workspaceId}/recordings/${recordingId}/document`;__webpack_require__.d(__webpack_exports__,["$",0,async({workspaceId,recordingId})=>{const response=await(0,_api_httpClient__WEBPACK_IMPORTED_MODULE_1__.ok)({method:"get",url:RECORDING_DOCUMENT_API_PATH(workspaceId,recordingId)});return new _api_dto_recordingDocument__WEBPACK_IMPORTED_MODULE_0__.bt(response.data)},"R",0,RECORDING_DOCUMENT_API_PATH])},"./src/shared/api/queries/useDocumentsByRecordingQuery/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _api_fetch_api_v1_workspaces_workspaceId_documents__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/documents/index.ts"),_api_queryKey_document__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/api/queryKey/document.ts"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useQuery.js");const __WEBPACK_DEFAULT_EXPORT__=({workspaceId,recordingSessionId,isEnabled=!0,isPolling=!1})=>{const query=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.I)({queryKey:_api_queryKey_document__WEBPACK_IMPORTED_MODULE_1__.Y.list({workspaceId,recordingSessionId}),queryFn:()=>(0,_api_fetch_api_v1_workspaces_workspaceId_documents__WEBPACK_IMPORTED_MODULE_0__.oj)({workspaceId,recordingSessionId}),enabled:isEnabled,refetchInterval:!!isPolling&&3e3}),previous=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({workspaceId,recordingSessionId,isPolling}),{refetch}=query;return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{const last=previous.current;previous.current={workspaceId,recordingSessionId,isPolling},isEnabled&&last.workspaceId===workspaceId&&last.recordingSessionId===recordingSessionId&&last.isPolling&&!isPolling&&refetch()},[workspaceId,recordingSessionId,isEnabled,isPolling,refetch]),query};__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/api/queries/useRecordingDocumentQuery/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _api_fetch_api_v1_workspaces_workspaceId_recordings_recordingId_document__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/recordings/[recordingId]/document/index.ts"),_api_httpClient_error__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/api/httpClient/error/index.ts"),_api_queryKey_recordingDocument__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/api/queryKey/recordingDocument.ts"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useQuery.js");const __WEBPACK_DEFAULT_EXPORT__=({workspaceId,recordingId,isEnabled=!0,isPolling=!1})=>(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.I)({queryKey:_api_queryKey_recordingDocument__WEBPACK_IMPORTED_MODULE_2__.x.detail({workspaceId,recordingId}),queryFn:()=>(0,_api_fetch_api_v1_workspaces_workspaceId_recordings_recordingId_document__WEBPACK_IMPORTED_MODULE_0__.$)({workspaceId,recordingId}),enabled:isEnabled,refetchInterval:query=>{if(!isPolling)return!1;const{data,error}=query.state;if(void 0===data)return!1;if((0,_api_httpClient_error__WEBPACK_IMPORTED_MODULE_1__.d)(error)&&error.isClientError)return!1;const summaryStatus=data.meetingSummary?.status;return!!("PROCESSING"===data.processingStatus||"QUEUED"===summaryStatus||"RUNNING"===summaryStatus)&&3e3}});__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/api/queryKey/document.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){const documentKeys={all:["documents"],list:({workspaceId,recordingSessionId})=>[...documentKeys.all,"list",workspaceId,{recordingSessionId}],recordingList:({workspaceId})=>[...documentKeys.all,"recordingList",workspaceId],recentList:({workspaceId})=>[...documentKeys.all,"recentList",workspaceId],pendingList:({workspaceId})=>[...documentKeys.all,"pendingList",workspaceId],detail:({workspaceId,documentId})=>[...documentKeys.all,"detail",workspaceId,documentId],confirmations:params=>[...documentKeys.detail(params),"confirmations"],transcript:({workspaceId,documentId})=>[...documentKeys.all,"transcript",workspaceId,documentId]};__webpack_require__.d(__webpack_exports__,["Y",0,documentKeys])},"./src/shared/components/primitives/ui/RelatedCard/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>RelatedCard});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_primitives_ui_LinkTo__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/components/primitives/ui/LinkTo/index.tsx"),_assets_icons_chevronRight_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/assets/icons/chevronRight.svg"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function RelatedCard({href,icon,title,description}){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(CardLink,{href,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(TopRow,{children:[icon,(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(Title,{children:title}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_assets_icons_chevronRight_svg__WEBPACK_IMPORTED_MODULE_2__.A,{size:12,"aria-hidden":!0})]}),null!==description&&(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(Description,{children:description})]})}const CardLink=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A)(_primitives_ui_LinkTo__WEBPACK_IMPORTED_MODULE_1__.A)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.375rem; /* 6px */
  height: 100%;
  min-height: 5rem; /* 80px */
  padding: 1rem 1.25rem; /* 16px 20px */
  border-radius: 1rem; /* 16px */
  background-color: ${({theme})=>theme.neutral[0]};
  box-shadow: ${({theme})=>theme.shadow02};

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }
`,TopRow=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 8px */

  & > svg {
    flex-shrink: 0;
    color: ${({theme})=>theme.neutral[400]};
  }

  /* 화살표는 아이콘보다 한 단계 진해요 */
  & > svg:last-of-type {
    color: ${({theme})=>theme.neutral[500]};
  }
`,Title=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.p`
  flex: 1;
  min-width: 0;
  ${({theme})=>theme.text.label01};
  overflow: hidden;
  color: ${({theme})=>theme.neutral[900]};
  white-space: nowrap;
  text-overflow: ellipsis;
`,Description=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.p`
  ${({theme})=>theme.text.caption02};
  overflow: hidden;
  color: ${({theme})=>theme.neutral[600]};
  white-space: nowrap;
  text-overflow: ellipsis;
`;RelatedCard.__docgenInfo={description:"다른 화면으로 이어지는 흰 카드 하나. 아이콘 · 제목 · 화살표 아래에 한 줄 설명을 두고, 누르면 그 주소로 가요. 피그마 Card/RelatedDoc 상태=기본이에요.\n\n녹음 문서의 「이 회의에서 나온 문서」(STT-R52)와 문서 보기의 「이 문서가 나온 녹음」(DOC-R25)이 같은 모양을 써요.",methods:[],displayName:"RelatedCard",props:{href:{required:!0,tsType:{name:"string"},description:"카드를 누르면 갈 주소"},icon:{required:!0,tsType:{name:"ReactNode"},description:"제목 앞 16px 아이콘. 장식이라 스크린리더에는 읽히지 않게 넘겨요"},title:{required:!0,tsType:{name:"ReactNode"},description:"제목. 한 줄을 넘으면 말줄임해요. 아직 받지 못했으면 스켈레톤 같은 자리 표시를 넘겨요"},description:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"제목 아래 한 줄 설명. 없으면 null이고, 그때는 제목만 보여줘요"}}}}}]);
//# sourceMappingURL=8080.fde2b4b2.iframe.bundle.js.map