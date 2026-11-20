/*! For license information please see 8014.7f06563e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8014],{"./src/modules/features/document/TopicDocumentList/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>TopicDocumentList});var useDocumentsQuery=__webpack_require__("./src/shared/api/queries/useDocumentsQuery/index.ts"),emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),useWorkspaceAccessGuard=__webpack_require__("./src/shared/hooks/domain/workspace/useWorkspaceAccessGuard/index.ts"),groupDocumentsByTopic=__webpack_require__("./src/shared/utils/groupDocumentsByTopic/index.ts"),hooks=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/hooks.js");var PATH_ROUTE=__webpack_require__("./src/shared/routes/PATH_ROUTE.ts"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),react_dom=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-dom@19.2.8_react@19.2.8/node_modules/react-dom/index.js");const ROW_HEIGHT_REM_withoutSummary=4,ROW_HEIGHT_REM_withSummary=5.75,useVisibleRowRange=({cardRef,documents,keptIndex})=>{const offsets=(0,react.useMemo)(()=>(({documents,remPx})=>{const offsets=[0];return documents.forEach(({summary},index)=>{const rowHeightRem=null===summary?ROW_HEIGHT_REM_withoutSummary:ROW_HEIGHT_REM_withSummary,dividerPx=0===index?0:1;offsets.push(offsets[index]+rowHeightRem*remPx+dividerPx)}),offsets})({documents,remPx:parseFloat(getComputedStyle(document.documentElement).fontSize)}),[documents]),[range,setRange]=(0,react.useState)({start:0,end:0}),drawnRangeRef=(0,react.useRef)(range);(0,react.useLayoutEffect)(()=>{drawnRangeRef.current=range},[range]),(0,react.useLayoutEffect)(()=>{const card=cardRef.current;if(null===card)return;const applyRange=next=>{setRange(previous=>previous.start===next.start&&previous.end===next.end?previous:next)},main=card.closest("main");if(null===main)return void applyRange({start:0,end:offsets.length-1});const measureView=()=>{const viewStart=main.getBoundingClientRect().top-card.getBoundingClientRect().top;return{viewStart,viewEnd:viewStart+main.clientHeight}},getRange=view=>(({offsets,viewStart,viewEnd,overscanPx})=>{const rangeStart=viewStart-overscanPx,rangeEnd=viewEnd+overscanPx,rowCount=offsets.length-1;let firstInRange=-1,lastInRange=-1;for(let index=0;index<rowCount;index+=1)offsets[index+1]>rangeStart&&offsets[index]<rangeEnd&&(-1===firstInRange&&(firstInRange=index),lastInRange=index);return-1===firstInRange?{start:0,end:0}:{start:firstInRange,end:lastInRange+1}})({offsets,...view,overscanPx:325}),handleViewChange=()=>{const view=measureView(),{start,end}=drawnRangeRef.current;(({offsets,start,end,viewStart,viewEnd})=>{const cardHeight=offsets[offsets.length-1],visibleTop=Math.max(viewStart,0),visibleBottom=Math.min(viewEnd,cardHeight);return visibleBottom<=visibleTop||start!==end&&offsets[start]<=visibleTop&&visibleBottom<=offsets[end]})({offsets,start,end,...view})?applyRange(getRange(view)):(0,react_dom.flushSync)(()=>applyRange(getRange(view)))};applyRange(getRange(measureView())),main.addEventListener("scroll",handleViewChange,{passive:!0});const resizeObserver=new ResizeObserver(handleViewChange);return resizeObserver.observe(main),()=>{main.removeEventListener("scroll",handleViewChange),resizeObserver.disconnect()}},[cardRef,offsets]);const{firstRowTop,items}=(({offsets,start,end,keptIndex})=>{const row=index=>({type:"row",index}),rangeRows=Array.from({length:end-start},(_,k)=>row(start+k));if(null===keptIndex||!(keptIndex<start||keptIndex>=end))return{firstRowTop:offsets[start],items:rangeRows};if(start===end)return{firstRowTop:offsets[keptIndex],items:[row(keptIndex)]};const gap=height=>height>0?[{type:"gap",height}]:[];return keptIndex<start?{firstRowTop:offsets[keptIndex],items:[row(keptIndex),...gap(offsets[start]-offsets[keptIndex+1]),...rangeRows]}:{firstRowTop:offsets[start],items:[...rangeRows,...gap(offsets[keptIndex]-offsets[end]),row(keptIndex)]}})({offsets,start:range.start,end:range.end,keptIndex});return{cardHeight:offsets[offsets.length-1],firstRowTop,drawnRows:items}};var Chip=__webpack_require__("./src/shared/components/primitives/ui/Chip/index.tsx"),LinkTo=__webpack_require__("./src/shared/components/primitives/ui/LinkTo/index.tsx"),formatDate=__webpack_require__("./src/shared/utils/formatDate/index.ts"),formatDurationFromSeconds=__webpack_require__("./src/shared/utils/formatDurationFromSeconds/index.ts"),chevronRight=__webpack_require__("./src/assets/icons/chevronRight.svg"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function DocumentRow({href,title,summary,createdAt,recordingDurationSeconds,index,rowCount,onFocus}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(Item,{$isFirstRow:0===index,"aria-posinset":index+1,"aria-setsize":rowCount,children:(0,emotion_react_jsx_runtime_browser_esm.FD)(RowLink,{href,onFocus,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(TextBlock,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Title,{children:title}),null!==summary&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Summary,{children:summary})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Meta,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(CreatedDate,{dateTime:createdAt,children:(0,formatDate.Y)(createdAt)}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Chip.A,{children:(0,formatDurationFromSeconds.b)(recordingDurationSeconds)})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(chevronRight.A,{size:12,"aria-hidden":!0})]})})}const Item=emotion_styled_browser_esm.A.li`
  border-top: ${({theme,$isFirstRow})=>$isFirstRow?"none":`1px solid ${theme.neutral[200]}`};
`,RowLink=(0,emotion_styled_browser_esm.A)(LinkTo.A)`
  display: flex;
  align-items: center;
  gap: 1rem; /* 16px */
  padding: 1.25rem 1.5rem; /* 20px 24px */

  & > svg {
    flex-shrink: 0;
    color: ${({theme})=>theme.neutral[500]};
  }

  /* 카드가 모서리 밖을 잘라 내므로 테두리를 안쪽에 그려요 */
  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: -2px;
  }
`,TextBlock=emotion_styled_browser_esm.A.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 0.25rem; /* 4px */
  /* 글이 길어도 날짜 묶음을 밀어내지 않고 말줄임돼요 */
  min-width: 0;
`,Title=emotion_styled_browser_esm.A.p`
  ${({theme})=>theme.text.label01};
  overflow: hidden;
  color: ${({theme})=>theme.neutral[900]};
  white-space: nowrap;
  text-overflow: ellipsis;
`,Summary=emotion_styled_browser_esm.A.p`
  ${({theme})=>theme.text.body01};
  overflow: hidden;
  color: ${({theme})=>theme.neutral[800]};
  white-space: nowrap;
  text-overflow: ellipsis;
`,Meta=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.5rem; /* 8px */
`,CreatedDate=emotion_styled_browser_esm.A.time`
  ${({theme})=>theme.text.caption01};
  color: ${({theme})=>theme.neutral[500]};
`;function DocumentFolder({workspaceId,topic,documentCount,documents}){const topicId=(0,react.useId)(),cardRef=(0,react.useRef)(null),[focusedIndex,setFocusedIndex]=(0,react.useState)(null),{cardHeight,firstRowTop,drawnRows}=useVisibleRowRange({cardRef,documents,keptIndex:focusedIndex});return(0,emotion_react_jsx_runtime_browser_esm.FD)(Container,{"aria-labelledby":topicId,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(TopicHeader,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Topic,{id:topicId,children:topic}),(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentCount,{children:documentCount})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Card,{ref:cardRef,style:{height:cardHeight,paddingTop:firstRowTop},onBlur:event=>{event.currentTarget.contains(event.relatedTarget)||setFocusedIndex(null)},children:drawnRows.map(row=>{if("gap"===row.type)return(0,emotion_react_jsx_runtime_browser_esm.Y)(RowGap,{"aria-hidden":!0,style:{height:row.height}},"gap");const{id,title,summary,createdAt,recordingDurationSeconds}=documents[row.index];return(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentRow,{href:(0,PATH_ROUTE.vX)({routeKey:"DOCUMENT",params:{workspaceId:String(workspaceId),documentId:String(id)}}),title,summary,createdAt,recordingDurationSeconds,index:row.index,rowCount:documents.length,onFocus:()=>setFocusedIndex(row.index)},id)})})]})}DocumentRow.__docgenInfo={description:"문서 목록의 행 하나. 왼쪽에 제목과 한 줄 요약, 오른쪽에 만든 날짜와 녹음 길이를 보여주고, 누르면 그 문서 보기로 가요.\n\n확인 여부와 문서 상태는 보여주지 않아요(DOC-R10 · DOC-R11).",methods:[],displayName:"DocumentRow",props:{href:{required:!0,tsType:{name:"string"},description:"행을 누르면 갈 문서 보기 주소"},title:{required:!0,tsType:{name:"string"},description:""},summary:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"한 줄 요약. 없으면 null이고, 그때는 요약 줄을 그리지 않아요"},createdAt:{required:!0,tsType:{name:"string"},description:"문서 생성 시각(ISO 8601)"},recordingDurationSeconds:{required:!0,tsType:{name:"number"},description:"녹음 길이(초)"},index:{required:!0,tsType:{name:"number"},description:"폴더 안에서 이 행의 순서(0부터). 첫 행이 아니면 위쪽에 구분선을 그어요.\n카드에는 화면 근처의 행만 그려서, 카드의 첫 행이 폴더의 첫 행이 아닐 수 있어요"},rowCount:{required:!0,tsType:{name:"number"},description:"폴더의 행 수. 화면 근처의 행만 그려도 스크린 리더가 전체 행 수를 읽게 알려요"},onFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"행에 포커스가 들어오면 불러요. 포커스가 있는 행은 화면에서 멀어져도 지우지 않으려고 받아요"}}};const RowGap=emotion_styled_browser_esm.A.li``,Container=emotion_styled_browser_esm.A.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* 12px */
`,TopicHeader=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  gap: 0.375rem; /* 6px */
  padding-left: 0.25rem; /* 4px */
`,Topic=emotion_styled_browser_esm.A.h3`
  ${({theme})=>theme.text.label01};
  color: ${({theme})=>theme.neutral[700]};
  overflow-wrap: anywhere;
`,DocumentCount=emotion_styled_browser_esm.A.span`
  ${({theme})=>theme.text.caption02};
  flex-shrink: 0;
  color: ${({theme})=>theme.neutral[500]};
`,Card=emotion_styled_browser_esm.A.ul`
  overflow: hidden;
  border-radius: 1.25rem; /* 20px */
  background-color: ${({theme})=>theme.neutral[0]};
  box-shadow: ${({theme})=>theme.shadow02};
`;function DocumentListEmpty(){return(0,emotion_react_jsx_runtime_browser_esm.FD)(Notice,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(NoticeTitle,{children:"아직 문서가 없어요"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(NoticeDescription,{children:"독의 마이크로 회의를 녹음하면 주제별로 정리된 문서가 폴더에 모여요"})]})}DocumentFolder.__docgenInfo={description:"문서 목록의 폴더 하나. 폴더 이름과 문서 수 아래에, 그 폴더의 문서 행을 카드 하나로 묶어 보여줘요.\n\n문서가 많아도 카드 안에는 화면 근처의 행만 그려요. 카드는 행을 모두 그린 높이를 갖고, 그린 행은 위쪽 여백으로 제자리에 놓아요.\n포커스가 있는 행은 화면에서 멀어져도 지우지 않아서, 키보드로 고른 행이 사라져 포커스를 잃지 않아요.",methods:[],displayName:"DocumentFolder",props:{workspaceId:{required:!0,tsType:{name:"number"},description:"행을 누르면 갈 문서 보기 주소의 워크스페이스 id"},topic:{required:!0,tsType:{name:"string"},description:"폴더 이름. AI가 분류한 주제예요"},documentCount:{required:!0,tsType:{name:"number"},description:"이 폴더의 전체 문서 수. 아래에 그린 행을 센 값이 아니라 서버가 준 값이에요"},documents:{required:!0,tsType:{name:"Array",elements:[{name:"FolderDocument"}],raw:"FolderDocument[]"},description:"폴더의 문서. 화면에 그리는 순서 그대로예요"}}};const Notice=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem; /* 4px */
  height: 20rem; /* 320px */
  text-align: center;
`,NoticeTitle=emotion_styled_browser_esm.A.p`
  ${({theme})=>theme.text.body01};
  color: ${({theme})=>theme.neutral[700]};
`,NoticeDescription=emotion_styled_browser_esm.A.p`
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.neutral[500]};
`;DocumentListEmpty.__docgenInfo={description:"문서가 하나도 없을 때 「주제별」 탭의 목록 자리에 두는 안내. 피그마 「문서 목록/빈 상태」예요.\n\n제목 「문서」와 탭은 문서 탭 섹션이 그대로 두고, 목록 자리만 이 안내로 바뀌어요.",methods:[],displayName:"DocumentListEmpty"};var InlineError=__webpack_require__("./src/shared/components/primitives/ui/InlineError/index.tsx");function DocumentListLoadFailed({onRetry}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(InlineErrorWrapper,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(InlineError.A,{message:"목록을 불러오지 못했어요. 다시 시도해 주세요.",onRetry,align:"center"})})}const InlineErrorWrapper=emotion_styled_browser_esm.A.div`
  display: flex;
  justify-content: center;
  padding-top: 5.75rem; /* 92px */
`;DocumentListLoadFailed.__docgenInfo={description:"문서 목록을 불러오지 못했을 때 「주제별」 탭의 목록 자리에 두는 안내. 피그마 「문서 목록/불러오기 실패」예요(ERR-09).\n\n화면 전체가 아니라 목록만 실패한 것이라, 제목 「문서」와 탭은 문서 탭 섹션이 그대로 두고 목록이 있어야 할 자리에만 안내를 남겨요.",methods:[],displayName:"DocumentListLoadFailed",props:{onRetry:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"`다시 시도`를 눌렀을 때 실행할 동작"}}};var Skeleton=__webpack_require__("./src/shared/components/primitives/ui/Skeleton/index.tsx");const FOLDER_ROW_COUNTS=[2,1,1];function DocumentListSkeleton(){return(0,emotion_react_jsx_runtime_browser_esm.Y)(Folders,{role:"status","aria-label":"문서 목록을 불러오고 있어요",children:FOLDER_ROW_COUNTS.map((rowCount,folderIndex)=>(0,emotion_react_jsx_runtime_browser_esm.FD)(Folder,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(TopicRow,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Skeleton.A,{width:3.75,height:.875})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentListSkeleton_Card,{children:Array.from({length:rowCount},(_,rowIndex)=>(0,emotion_react_jsx_runtime_browser_esm.FD)(Row,{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(DocumentListSkeleton_TextBlock,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Line,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Skeleton.A,{width:7.5,height:.875})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Line,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Skeleton.A,{width:"62%",height:.875})})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(DocumentListSkeleton_Meta,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Skeleton.A,{width:5.625}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Skeleton.A,{width:2.5,height:.75})]})]},rowIndex))})]},folderIndex))})}const Folders=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem; /* 28px */
`,Folder=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* 12px */
`,TopicRow=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  height: 1.5rem; /* 24px */
  padding-left: 0.25rem; /* 4px */
`,DocumentListSkeleton_Card=emotion_styled_browser_esm.A.div`
  overflow: hidden;
  border-radius: 1.25rem; /* 20px */
  background-color: ${({theme})=>theme.neutral[0]};
  box-shadow: ${({theme})=>theme.shadow02};
`,Row=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem; /* 16px */
  padding: 1.25rem 1.5rem; /* 20px 24px */

  & + & {
    border-top: 1px solid ${({theme})=>theme.neutral[200]};
  }
`,DocumentListSkeleton_TextBlock=emotion_styled_browser_esm.A.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 0.25rem; /* 4px */
`,Line=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  height: 1.5rem; /* 24px */
`,DocumentListSkeleton_Meta=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.5rem; /* 8px */
`;function TopicDocumentList(){const{workspaceId}=(()=>{const params=(0,hooks.g)();return{workspaceId:Number(params.workspaceId)}})(),{data:documentList,error,isError,refetch}=(0,useDocumentsQuery.A)({workspaceId}),{isRedirecting}=(0,useWorkspaceAccessGuard.A)({error}),handleRetry=()=>{refetch()};if(void 0===documentList&&isError&&!isRedirecting)return(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentListLoadFailed,{onRetry:handleRetry});if(void 0===documentList)return(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentListSkeleton,{});const folders=(0,groupDocumentsByTopic.o)({topics:documentList.topics,documents:documentList.items});return 0===folders.length?(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentListEmpty,{}):(0,emotion_react_jsx_runtime_browser_esm.Y)(TopicDocumentList_Folders,{children:folders.map(({topic,documentCount,documents})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentFolder,{workspaceId,topic,documentCount,documents},topic))})}DocumentListSkeleton.__docgenInfo={description:"문서 목록을 불러오는 동안 「주제별」 탭의 목록 자리에 두는 회색 덩어리. 폴더 이름 · 카드 · 행 자리를 채워요.\n\n폴더와 행의 간격 · 여백 · 높이를 실제 목록과 같게 지켜, 불러온 뒤 내용이 크게 움직이지 않게 해요.",methods:[],displayName:"DocumentListSkeleton"};const TopicDocumentList_Folders=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem; /* 28px */
`;TopicDocumentList.__docgenInfo={description:"문서 탭 「주제별」 탭의 목록. 워크스페이스의 모든 문서를 폴더(주제)별로 모아 보여주고, 행을 누르면 그 문서 보기로 가요(DOC-R1).\n\n제목 「문서」와 탭은 문서 탭 섹션(`DocumentArchive`)이 그리고, 여기서는 탭이 가리키는 목록만 그려요.\n\n폴더는 이름순, 폴더 안의 문서는 최근 회의순(최근에 시작한 녹음에서 나온 문서가 위)이에요(DOC-R15 · R16). 확인 여부나 문서 상태로 묶거나 정렬하지 않아요(DOC-R11).\n\n문서를 받지 못한 동안에는 상태 화면이 목록 자리를 대신 그려요.\n- 불러오는 중: `DocumentListSkeleton`. 401 · 403 · 404로 다른 화면에 보내는 동안에도 이 화면이에요.\n- 불러오기 실패: `DocumentListLoadFailed`. 이어 받는 도중에 실패한 경우도 받은 일부를 쓰지 않고 이 화면이에요. 「다시 시도」는 처음부터 다시 받아요.\n- 문서 없음: `DocumentListEmpty`.\n\n문서를 한 번 받은 뒤에는 다시 불러오기만 실패해도 받은 문서를 계속 보여줘요.\n\n주소의 워크스페이스 id는 숫자인지 확인하지 않고 그대로 요청해요. 잘못된 주소인지는 서버가 판단하고, 여기서는 그 응답에 따라 목록을 불러오지 못했다고 알려요.\n같은 판단을 프론트에도 두면 기준이 두 곳에 생기기 때문이에요.",methods:[],displayName:"TopicDocumentList"}},"../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-dom@19.2.8_react@19.2.8/node_modules/react-dom/cjs/react-dom.production.js"(__unused_webpack_module,exports,__webpack_require__){var React=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js");function formatProdErrorMessage(code){var url="https://react.dev/errors/"+code;if(1<arguments.length){url+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)url+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+code+"; visit "+url+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function noop(){}var Internals={d:{f:noop,r:function(){throw Error(formatProdErrorMessage(522))},D:noop,C:noop,L:noop,m:noop,X:noop,S:noop,M:noop},p:0,findDOMNode:null},REACT_PORTAL_TYPE=Symbol.for("react.portal");var ReactSharedInternals=React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function getCrossOriginStringAs(as,input){return"font"===as?"":"string"==typeof input?"use-credentials"===input?input:"":void 0}exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Internals,exports.createPortal=function(children,container){var key=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!container||1!==container.nodeType&&9!==container.nodeType&&11!==container.nodeType)throw Error(formatProdErrorMessage(299));return function createPortal$1(children,containerInfo,implementation){var key=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:REACT_PORTAL_TYPE,key:null==key?null:""+key,children,containerInfo,implementation}}(children,container,null,key)},exports.flushSync=function(fn){var previousTransition=ReactSharedInternals.T,previousUpdatePriority=Internals.p;try{if(ReactSharedInternals.T=null,Internals.p=2,fn)return fn()}finally{ReactSharedInternals.T=previousTransition,Internals.p=previousUpdatePriority,Internals.d.f()}},exports.preconnect=function(href,options){"string"==typeof href&&(options?options="string"==typeof(options=options.crossOrigin)?"use-credentials"===options?options:"":void 0:options=null,Internals.d.C(href,options))},exports.prefetchDNS=function(href){"string"==typeof href&&Internals.d.D(href)},exports.preinit=function(href,options){if("string"==typeof href&&options&&"string"==typeof options.as){var as=options.as,crossOrigin=getCrossOriginStringAs(as,options.crossOrigin),integrity="string"==typeof options.integrity?options.integrity:void 0,fetchPriority="string"==typeof options.fetchPriority?options.fetchPriority:void 0;"style"===as?Internals.d.S(href,"string"==typeof options.precedence?options.precedence:void 0,{crossOrigin,integrity,fetchPriority}):"script"===as&&Internals.d.X(href,{crossOrigin,integrity,fetchPriority,nonce:"string"==typeof options.nonce?options.nonce:void 0})}},exports.preinitModule=function(href,options){if("string"==typeof href)if("object"==typeof options&&null!==options){if(null==options.as||"script"===options.as){var crossOrigin=getCrossOriginStringAs(options.as,options.crossOrigin);Internals.d.M(href,{crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0,nonce:"string"==typeof options.nonce?options.nonce:void 0})}}else null==options&&Internals.d.M(href)},exports.preload=function(href,options){if("string"==typeof href&&"object"==typeof options&&null!==options&&"string"==typeof options.as){var as=options.as,crossOrigin=getCrossOriginStringAs(as,options.crossOrigin);Internals.d.L(href,as,{crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0,nonce:"string"==typeof options.nonce?options.nonce:void 0,type:"string"==typeof options.type?options.type:void 0,fetchPriority:"string"==typeof options.fetchPriority?options.fetchPriority:void 0,referrerPolicy:"string"==typeof options.referrerPolicy?options.referrerPolicy:void 0,imageSrcSet:"string"==typeof options.imageSrcSet?options.imageSrcSet:void 0,imageSizes:"string"==typeof options.imageSizes?options.imageSizes:void 0,media:"string"==typeof options.media?options.media:void 0})}},exports.preloadModule=function(href,options){if("string"==typeof href)if(options){var crossOrigin=getCrossOriginStringAs(options.as,options.crossOrigin);Internals.d.m(href,{as:"string"==typeof options.as&&"script"!==options.as?options.as:void 0,crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0})}else Internals.d.m(href)},exports.requestFormReset=function(form){Internals.d.r(form)},exports.unstable_batchedUpdates=function(fn,a){return fn(a)},exports.useFormState=function(action,initialState,permalink){return ReactSharedInternals.H.useFormState(action,initialState,permalink)},exports.useFormStatus=function(){return ReactSharedInternals.H.useHostTransitionStatus()},exports.version="19.2.8"},"../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-dom@19.2.8_react@19.2.8/node_modules/react-dom/index.js"(module,__unused_webpack_exports,__webpack_require__){!function checkDCE(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(err){console.error(err)}}(),module.exports=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-dom@19.2.8_react@19.2.8/node_modules/react-dom/cjs/react-dom.production.js")}}]);
//# sourceMappingURL=8014.7f06563e.iframe.bundle.js.map