"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4456],{"./src/modules/features/document/DocumentTree/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>DocumentTree});var useDocumentsQuery=__webpack_require__("./src/shared/api/queries/useDocumentsQuery/index.ts"),emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),useWorkspaceAccessGuard=__webpack_require__("./src/shared/hooks/domain/workspace/useWorkspaceAccessGuard/index.ts"),PATH_ROUTE=__webpack_require__("./src/shared/routes/PATH_ROUTE.ts"),groupDocumentsByTopic=__webpack_require__("./src/shared/utils/groupDocumentsByTopic/index.ts"),hooks=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/hooks.js");var react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js");const useLabelId=()=>({labelId:(0,react.useId)()});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function DocumentTreeEmpty(){const{labelId}=useLabelId();return(0,emotion_react_jsx_runtime_browser_esm.FD)(Container,{"aria-labelledby":labelId,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Label,{id:labelId,children:"문서"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Notice,{children:"아직 문서가 없어요"})]})}const Container=emotion_styled_browser_esm.A.nav`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.75rem; /* 12px */
`,Label=emotion_styled_browser_esm.A.span`
  ${({theme})=>theme.text.caption01};
  padding: 0 0.5rem 0 0.625rem; /* 0 8px 0 10px */
  color: ${({theme})=>theme.neutral[600]};
`,Notice=emotion_styled_browser_esm.A.p`
  ${({theme})=>theme.text.caption02};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: ${({theme})=>theme.neutral[600]};
  text-align: center;
`;DocumentTreeEmpty.__docgenInfo={description:"문서가 하나도 없을 때 보여 주는 문서 목록. 머리말은 그대로 두고, 그 아래 남은 자리의 가운데에 안내를 둬요.\n\n틀과 머리말까지 여기서 그려요. 문서를 받은 모습(`DocumentTree`)과 따로 바뀔 수 있어, 틀을 함께 쓰지 않아요.",methods:[],displayName:"DocumentTreeEmpty"};var chevronDown=__webpack_require__("./src/assets/icons/chevronDown.svg"),chevronRight=__webpack_require__("./src/assets/icons/chevronRight.svg");function DocumentTreeFolder({topic,documentCount,isExpanded,onToggle,children}){return(0,emotion_react_jsx_runtime_browser_esm.FD)(DocumentTreeFolder_Container,{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(FolderRow,{type:"button","aria-expanded":isExpanded,onClick:onToggle,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(NameContainer,{children:[isExpanded?(0,emotion_react_jsx_runtime_browser_esm.Y)(chevronDown.A,{size:12}):(0,emotion_react_jsx_runtime_browser_esm.Y)(chevronRight.A,{size:12}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Name,{children:topic})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentCount,{children:documentCount})]}),isExpanded&&(0,emotion_react_jsx_runtime_browser_esm.Y)(RowList,{children})]})}const DocumentTreeFolder_Container=emotion_styled_browser_esm.A.li`
  display: flex;
  flex-direction: column;
  gap: 0.125rem; /* 2px */
`,FolderRow=emotion_styled_browser_esm.A.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem; /* 8px */
  width: 100%;
  height: 2rem; /* 32px */
  padding: 0 0.625rem 0 0.5rem; /* 0 10px 0 8px */
  border-radius: 0.5rem; /* 8px */
  text-align: left;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({theme})=>theme.neutral[100]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: -2px;
  }
`,NameContainer=emotion_styled_browser_esm.A.span`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 8px */
  min-width: 0;

  & > svg {
    flex-shrink: 0;
    color: ${({theme})=>theme.neutral[400]};
  }
`,Name=emotion_styled_browser_esm.A.span`
  ${({theme})=>theme.text.caption02};
  overflow: hidden;
  color: ${({theme})=>theme.neutral[800]};
  white-space: nowrap;
  text-overflow: ellipsis;
`,DocumentCount=emotion_styled_browser_esm.A.span`
  ${({theme})=>theme.text.caption01};
  flex-shrink: 0;
  color: ${({theme})=>theme.neutral[600]};
`,RowList=emotion_styled_browser_esm.A.ul`
  display: flex;
  flex-direction: column;
  gap: 0.125rem; /* 2px */
  margin-left: 0.875rem; /* 14px */
  padding-left: 0.3125rem; /* 5px */
  border-left: 1px solid ${({theme})=>theme.neutral[200]};
`;DocumentTreeFolder.__docgenInfo={description:"사이드바 문서 목록의 폴더 하나. 폴더 행을 누르면 그 폴더의 문서 행을 펼치거나 접어요.",methods:[],displayName:"DocumentTreeFolder",props:{topic:{required:!0,tsType:{name:"string"},description:"폴더 이름. AI가 분류한 주제예요"},documentCount:{required:!0,tsType:{name:"number"},description:"이 폴더의 전체 문서 수. 아래에 그린 행을 센 값이 아니라 서버가 준 값이에요"},isExpanded:{required:!0,tsType:{name:"boolean"},description:""},onToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:"폴더에 담을 문서 행(`DocumentTreeRow`). 펼쳤을 때만 그려요"}}};var InlineError=__webpack_require__("./src/shared/components/primitives/ui/InlineError/index.tsx");function DocumentTreeLoadFailed({onRetry}){const{labelId}=useLabelId();return(0,emotion_react_jsx_runtime_browser_esm.FD)(DocumentTreeLoadFailed_Container,{"aria-labelledby":labelId,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentTreeLoadFailed_Label,{id:labelId,children:"문서"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(InlineErrorWrapper,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(InlineError.A,{message:"목록을 불러오지 못했어요",onRetry,size:"sm",align:"center"})})]})}const DocumentTreeLoadFailed_Container=emotion_styled_browser_esm.A.nav`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.75rem; /* 12px */
`,DocumentTreeLoadFailed_Label=emotion_styled_browser_esm.A.span`
  ${({theme})=>theme.text.caption01};
  padding: 0 0.5rem 0 0.625rem; /* 0 8px 0 10px */
  color: ${({theme})=>theme.neutral[600]};
`,InlineErrorWrapper=emotion_styled_browser_esm.A.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;DocumentTreeLoadFailed.__docgenInfo={description:"문서 목록을 불러오지 못했을 때 보여 주는 문서 목록(ERR-09).\n\n사이드바 전체가 아니라 목록만 실패한 것이라, 머리말은 그대로 두고 폴더가 있어야 할 자리에만 안내를 남겨요.\n사이드바는 폭이 좁아 작은 안내를 쓰고, 문구도 짧게 줄여요.\n\n틀과 머리말까지 여기서 그려요. 문서를 받은 모습(`DocumentTree`)과 따로 바뀔 수 있어, 틀을 함께 쓰지 않아요.",methods:[],displayName:"DocumentTreeLoadFailed",props:{onRetry:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"`다시 시도`를 눌렀을 때 실행할 동작"}}};var LinkTo=__webpack_require__("./src/shared/components/primitives/ui/LinkTo/index.tsx");function DocumentTreeRow({href,title,isCurrent}){return(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(RowLink,{href,"aria-current":isCurrent?"page":void 0,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Title,{children:title})})})}const RowLink=(0,emotion_styled_browser_esm.A)(LinkTo.A)`
  display: flex;
  align-items: center;
  height: 2rem; /* 32px */
  padding: 0 0.625rem 0 0.5rem; /* 0 10px 0 8px */
  border-radius: 0.5rem; /* 8px */
  color: ${({theme})=>theme.neutral[800]};
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({theme})=>theme.neutral[100]};
  }

  &[aria-current="page"] {
    background-color: ${({theme})=>theme.neutral[200]};
    color: ${({theme})=>theme.neutral[900]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: -2px;
  }
`,Title=emotion_styled_browser_esm.A.span`
  ${({theme})=>theme.text.caption02};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;DocumentTreeRow.__docgenInfo={description:"사이드바 문서 목록의 문서 행 하나. 제목을 한 줄로 보여주고, 누르면 그 문서 보기로 가요.\n지금 보는 문서는 배경으로 표시해요.",methods:[],displayName:"DocumentTreeRow",props:{href:{required:!0,tsType:{name:"string"},description:"행을 누르면 갈 문서 보기 주소"},title:{required:!0,tsType:{name:"string"},description:""},isCurrent:{required:!0,tsType:{name:"boolean"},description:"지금 보는 문서인지"}}};var Skeleton=__webpack_require__("./src/shared/components/primitives/ui/Skeleton/index.tsx");const FOLDER_DOCUMENT_COUNTS=[2,1,1,0];function DocumentTreeSkeleton(){const{labelId}=useLabelId();return(0,emotion_react_jsx_runtime_browser_esm.FD)(DocumentTreeSkeleton_Container,{"aria-labelledby":labelId,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentTreeSkeleton_Label,{id:labelId,children:"문서"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(FolderList,{role:"status","aria-label":"문서 목록을 불러오고 있어요",children:FOLDER_DOCUMENT_COUNTS.map((documentCount,folderIndex)=>(0,emotion_react_jsx_runtime_browser_esm.FD)(Folder,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Row,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Skeleton.A,{width:6,height:.75})}),Array.from({length:documentCount},(_,documentIndex)=>(0,emotion_react_jsx_runtime_browser_esm.Y)(Row,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Skeleton.A,{width:10,height:.75})},documentIndex))]},folderIndex))})]})}const DocumentTreeSkeleton_Container=emotion_styled_browser_esm.A.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* 12px */
`,DocumentTreeSkeleton_Label=emotion_styled_browser_esm.A.span`
  ${({theme})=>theme.text.caption01};
  padding: 0 0.5rem 0 0.625rem; /* 0 8px 0 10px */
  color: ${({theme})=>theme.neutral[600]};
`,FolderList=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* 8px */
`,Folder=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem; /* 2px */
`,Row=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  height: 2rem; /* 32px */
  padding-left: 1.75rem; /* 28px */
`;function DocumentTree(){const{labelId}=useLabelId(),{workspaceId}=(()=>{const params=(0,hooks.g)();return{workspaceId:Number(params.workspaceId)}})(),{currentDocumentId}=(()=>{const documentMatch=(0,hooks.RQ)(PATH_ROUTE.WS.DOCUMENT);return{currentDocumentId:null===documentMatch?null:Number(documentMatch.params.documentId)}})(),{data:documentList,error,isError,refetch}=(0,useDocumentsQuery.A)({workspaceId}),{isRedirecting}=(0,useWorkspaceAccessGuard.A)({error}),currentTopic=documentList?.items.find(({id})=>id===currentDocumentId)?.topic,{isFolderExpanded,toggleFolder}=(({workspaceId,currentTopic})=>{const[toggledFolders,setToggledFolders]=(0,react.useState)(()=>new Map),getFolderKey=topic=>`${workspaceId}/${topic}`,isFolderExpanded=topic=>toggledFolders.get(getFolderKey(topic))??topic===currentTopic;return{isFolderExpanded,toggleFolder:topic=>{const isExpanded=isFolderExpanded(topic);setToggledFolders(prev=>new Map(prev).set(getFolderKey(topic),!isExpanded))}}})({workspaceId,currentTopic}),handleRetry=()=>{refetch()};if(void 0===documentList&&isError&&!isRedirecting)return(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentTreeLoadFailed,{onRetry:handleRetry});if(void 0===documentList)return(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentTreeSkeleton,{});const folders=(0,groupDocumentsByTopic.o)({topics:documentList.topics,documents:documentList.items});return 0===folders.length?(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentTreeEmpty,{}):(0,emotion_react_jsx_runtime_browser_esm.FD)(DocumentTree_Container,{"aria-labelledby":labelId,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentTree_Label,{id:labelId,children:"문서"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentTree_FolderList,{children:folders.map(({topic,documentCount,documents})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentTreeFolder,{topic,documentCount,isExpanded:isFolderExpanded(topic),onToggle:()=>toggleFolder(topic),children:documents.map(({id,title})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(DocumentTreeRow,{href:(0,PATH_ROUTE.vX)({routeKey:"DOCUMENT",params:{workspaceId:String(workspaceId),documentId:String(id)}}),title,isCurrent:id===currentDocumentId},id))},topic))})]})}DocumentTreeSkeleton.__docgenInfo={description:"문서 목록을 불러오는 동안 보여 주는 문서 목록. 머리말은 그대로 두고, 폴더 이름과 문서 제목 자리를 회색 막대로 채워요.\n\n행의 높이와 간격을 실제 목록과 같게 지켜, 불러온 뒤 내용이 움직이지 않게 해요.\n화살표 · 문서 수 · 세로선은 그리지 않아요.\n\n틀과 머리말까지 여기서 그려요. 문서를 받은 모습(`DocumentTree`)과 따로 바뀔 수 있어, 틀을 함께 쓰지 않아요.",methods:[],displayName:"DocumentTreeSkeleton"};const DocumentTree_Container=emotion_styled_browser_esm.A.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* 12px */
`,DocumentTree_Label=emotion_styled_browser_esm.A.span`
  ${({theme})=>theme.text.caption01};
  padding: 0 0.5rem 0 0.625rem; /* 0 8px 0 10px */
  color: ${({theme})=>theme.neutral[600]};
`,DocumentTree_FolderList=emotion_styled_browser_esm.A.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* 8px */
`;DocumentTree.__docgenInfo={description:"사이드바의 문서 목록. 워크스페이스의 문서를 폴더(주제)별로 접어 보여주고, 문서를 누르면 그 문서 보기로 가요.\n\n폴더는 이름순, 폴더 안의 문서는 최근 회의순(최근에 시작한 녹음에서 나온 문서가 위)이에요(DOC-R15 · R16). 문서 목록 화면(`DocumentList`)과 같은 조회 · 같은 묶기를 써서 두 곳의 순서와 문서 수가 같아요.\n\n지금 보는 문서의 폴더만 펼친 채로 시작해요. 사용자가 누른 폴더는 누른 대로 두고, 그 기록은 워크스페이스마다 따로 두며 이 목록이 화면에 있는 동안만 남아요.\n\n문서를 받지 못한 동안에는 상태 화면이 목록 전체를 대신 그려요.\n- 불러오는 중: `DocumentTreeSkeleton`. 401 · 403 · 404로 다른 화면에 보내는 동안에도 이 화면이에요.\n- 불러오기 실패: `DocumentTreeLoadFailed`. 「다시 시도」는 문서 목록만 다시 받아요.\n- 문서 없음: `DocumentTreeEmpty`.\n\n문서를 한 번 받은 뒤에는 다시 불러오기가 실패해도 받은 목록을 계속 보여줘요.",methods:[],displayName:"DocumentTree"}}}]);
//# sourceMappingURL=4456.7f84b42a.iframe.bundle.js.map