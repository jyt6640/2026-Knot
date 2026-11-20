"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9019],{"./src/modules/features/search/SearchConversationList/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>SearchConversationList});var emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),hooks=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/hooks.js"),conversations=__webpack_require__("./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/search/conversations/index.ts"),search=__webpack_require__("./src/shared/api/queryKey/search.ts"),useQuery=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useQuery.js"),utils=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+query-core@5.102.0/node_modules/@tanstack/query-core/build/modern/utils.js");const queries_useSearchConversationsQuery=({workspaceId})=>(0,useQuery.I)({queryKey:search.v.conversations(workspaceId),queryFn:null===workspaceId?utils.hT:()=>(0,conversations.d9)({workspaceId})});var useRedirectToLoginOnUnauthorized=__webpack_require__("./src/shared/hooks/domain/auth/useRedirectToLoginOnUnauthorized/index.ts"),useNavigateToChatSession=__webpack_require__("./src/shared/hooks/domain/chat/useNavigateToChatSession/index.ts");const GROUP_LABELS=["오늘","이번 주","지난 30일","이전"],getGroupIndex=({updatedAt,now})=>{if(b=now,(a=updatedAt).getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate())return 0;var a,b;const elapsed=now.getTime()-updatedAt.getTime();return elapsed<6048e5?1:elapsed<2592e6?2:3},useSearchConversationList=()=>{const{workspaceId,sessionId}=(0,hooks.g)(),{navigateToChatSession}=(0,useNavigateToChatSession.A)(),{data,error,isError,refetch}=queries_useSearchConversationsQuery({workspaceId:workspaceId?Number(workspaceId):null}),{isUnauthorized}=(0,useRedirectToLoginOnUnauthorized.A)({error}),groups=(({conversations,now=new Date})=>{const grouped=GROUP_LABELS.map(()=>[]);for(const conversation of conversations)grouped[getGroupIndex({updatedAt:new Date(conversation.updatedAt),now})].push(conversation);const groups=[];return grouped.forEach((groupConversations,index)=>{0!==groupConversations.length&&groups.push({label:GROUP_LABELS[index],conversations:[...groupConversations].sort((a,b)=>new Date(b.updatedAt).getTime()-new Date(a.updatedAt).getTime())})}),groups})({conversations:data?.items??[]});return{groups,openedConversationId:sessionId??null,isLoadFailed:void 0===data&&isError&&!isUnauthorized,handleSelectConversation:conversationId=>{workspaceId&&navigateToChatSession({workspaceId,sessionId:String(conversationId)})},handleRetry:()=>{refetch()}}};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function EmptySearchConversationList(){return(0,emotion_react_jsx_runtime_browser_esm.FD)(Container,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Title,{children:"아직 나눈 대화가 없어요"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Description,{children:"새 대화를 시작하면 여기에 기록이 남아요"})]})}const Container=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  text-align: center;
`,Title=emotion_styled_browser_esm.A.strong`
  ${({theme})=>theme.text.label01};
  color: ${({theme})=>theme.neutral[900]};
`,Description=emotion_styled_browser_esm.A.span`
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.neutral[600]};
`;EmptySearchConversationList.__docgenInfo={description:"워크스페이스에 아직 대화가 하나도 없을 때 목록 자리에 놓이는 안내.\n\n대화가 없는 게 오류가 아니라는 것과, 어떻게 하면 목록이 채워지는지를 알려줍니다.",methods:[],displayName:"EmptySearchConversationList"};const formatRelativeTime=({date,now=new Date})=>{const elapsed=now.getTime()-new Date(date).getTime();return elapsed<6e4?"방금":elapsed<36e5?`${Math.floor(elapsed/6e4)}분 전`:elapsed<864e5?`${Math.floor(elapsed/36e5)}시간 전`:elapsed<6048e5?`${Math.floor(elapsed/864e5)}일 전`:elapsed<2592e6?`${Math.floor(elapsed/6048e5)}주 전`:elapsed<31536e6?`${Math.floor(elapsed/2592e6)}개월 전`:`${Math.floor(elapsed/31536e6)}년 전`};function SearchConversationRow({title,updatedAtLabel,isSelected=!1,onSelect}){return(0,emotion_react_jsx_runtime_browser_esm.FD)(SearchConversationRow_Container,{type:"button","aria-current":isSelected?"page":void 0,$isSelected:isSelected,onClick:onSelect,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(SearchConversationRow_Title,{$isSelected:isSelected,children:title}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Time,{children:updatedAtLabel})]})}const SearchConversationRow_Container=emotion_styled_browser_esm.A.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1875rem; /* 3px */
  width: 100%;
  padding: 0.625rem; /* 10px */
  border-radius: 0.75rem; /* 12px */
  text-align: left;
  cursor: pointer;
  transition: background-color 0.3s ease-in;

  background-color: ${({theme,$isSelected})=>$isSelected?theme.neutral[100]:"transparent"};

  &:hover {
    background-color: ${({theme})=>theme.neutral[100]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }
`,SearchConversationRow_Title=emotion_styled_browser_esm.A.span`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${({theme})=>theme.text.caption02};

  color: ${({theme,$isSelected})=>$isSelected?theme.neutral[900]:theme.neutral[600]};
`,Time=emotion_styled_browser_esm.A.span`
  ${({theme})=>theme.text.caption01};
  color: ${({theme})=>theme.neutral[600]};
`;function SearchConversationGroup({label,conversations,openedConversationId,onSelectConversation}){return(0,emotion_react_jsx_runtime_browser_esm.FD)(SearchConversationGroup_Container,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Label,{children:label}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Rows,{children:conversations.map(({id,title,updatedAt})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(SearchConversationRow,{title,updatedAtLabel:formatRelativeTime({date:updatedAt}),isSelected:openedConversationId===String(id),onSelect:()=>onSelectConversation(id)},id))})]})}SearchConversationRow.__docgenInfo={description:"대화 목록의 한 줄. 대화 제목과 마지막으로 오간 시각을 보여줍니다.\n\n지금 보고 있는 대화는 `isSelected`로 채워진 모양이 되며, 이 상태를 `aria-current`로도 알립니다.",methods:[],displayName:"SearchConversationRow",props:{title:{required:!0,tsType:{name:"string"},description:""},updatedAtLabel:{required:!0,tsType:{name:"string"},description:'마지막으로 메시지가 오간 시각을 "2일 전"처럼 바꾼 문구'},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const SearchConversationGroup_Container=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,Label=emotion_styled_browser_esm.A.h3`
  width: 100%;
  ${({theme})=>theme.text.caption01};
  color: ${({theme})=>theme.neutral[600]};
`,Rows=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* 8px */
  width: 100%;
`;SearchConversationGroup.__docgenInfo={description:'"오늘"처럼 같은 기간에 묶인 대화를 기간 이름과 함께 보여줍니다.',methods:[],displayName:"SearchConversationGroup",props:{label:{required:!0,tsType:{name:"string"},description:""},conversations:{required:!0,tsType:{name:"Array",elements:[{name:"SearchConversationListItem"}],raw:"SearchConversationListItem[]"},description:""},openedConversationId:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onSelectConversation:{required:!0,tsType:{name:"signature",type:"function",raw:"(conversationId: number) => void",signature:{arguments:[{type:{name:"number"},name:"conversationId"}],return:{name:"void"}}},description:""}}};var InlineError=__webpack_require__("./src/shared/components/primitives/ui/InlineError/index.tsx");function SearchConversationListLoadFailed({onRetry}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(Root,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(InlineError.A,{message:"대화 목록을 불러오지 못했어요",onRetry,size:"sm",align:"center"})})}const Root=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;function SearchConversationList(){const{groups,openedConversationId,isLoadFailed,handleSelectConversation,handleRetry}=useSearchConversationList();return isLoadFailed?(0,emotion_react_jsx_runtime_browser_esm.Y)(SearchConversationListLoadFailed,{onRetry:handleRetry}):0===groups.length?(0,emotion_react_jsx_runtime_browser_esm.Y)(EmptySearchConversationList,{}):(0,emotion_react_jsx_runtime_browser_esm.Y)(SearchConversationList_Container,{children:groups.map(({label,conversations})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(SearchConversationGroup,{label,conversations,openedConversationId,onSelectConversation:handleSelectConversation},label))})}SearchConversationListLoadFailed.__docgenInfo={description:"대화 목록을 불러오지 못했을 때 목록 자리에 놓이는 안내.\n\n대화가 없는 빈 목록과 구분되도록, 빈 안내 대신 실패 안내와 `다시 시도`를 둬요.\n드로어는 폭이 좁아 사이드바의 문서 목록 실패(`DocumentTreeLoadFailed`)처럼 작은 안내를 써요.",methods:[],displayName:"SearchConversationListLoadFailed",props:{onRetry:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"`다시 시도`를 눌렀을 때 실행할 동작"}}};const SearchConversationList_Container=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* 12px */
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;SearchConversationList.__docgenInfo={description:"워크스페이스에 쌓인 내 탐색 대화 목록.\n\n목록을 받지 못하고 실패하면 빈 안내 대신 실패 안내(`SearchConversationListLoadFailed`)를 둬요. 「다시 시도」는 대화 목록만 다시 받아요.",methods:[],displayName:"SearchConversationList"}},"./src/modules/widgets/chat/ChatListDrawer/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>ChatListDrawer});var _path,breakpoint=__webpack_require__("./src/shared/constants/breakpoint/index.ts"),emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),SearchConversationList=__webpack_require__("./src/modules/features/search/SearchConversationList/index.tsx"),useNavigateToNewChat=__webpack_require__("./src/shared/hooks/domain/chat/useNavigateToNewChat/index.ts"),hooks=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/hooks.js"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),_excluded=["size"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const plus=function SvgPlus(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",width:size,height:size,focusable:"false","aria-hidden":"true"},props),_path||(_path=react.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M7 2.4v9.2M2.4 7h9.2"})))};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ChatListDrawer(){const{workspaceId}=(0,hooks.g)(),{navigateToNewChat}=(0,useNavigateToNewChat.A)();return(0,emotion_react_jsx_runtime_browser_esm.FD)(Container,{"aria-label":"대화 목록",children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(DrawerHead,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Title,{children:"대화"}),(0,emotion_react_jsx_runtime_browser_esm.FD)(NewChatButton,{type:"button",onClick:()=>{workspaceId&&navigateToNewChat(workspaceId)},children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(plus,{size:14}),"새 채팅"]})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(SearchConversationList.A,{})]})}const Container=emotion_styled_browser_esm.A.aside`
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

  /* 모바일 덮개는 화면 폭에서 오른쪽 70px을 남기고 최대 320px까지 넓혀요(RESP-R2) */
  ${breakpoint.Wi.mobile} {
    width: min(20rem, 100vw - 4.375rem); /* 320px */
  }
`,DrawerHead=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  height: 2.5rem; /* 40px */
  padding-left: 0.25rem; /* 4px */
`,Title=emotion_styled_browser_esm.A.h2`
  color: ${({theme})=>theme.neutral[900]};
  ${({theme})=>theme.text.label01};
`,NewChatButton=emotion_styled_browser_esm.A.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.3125rem; /* 5px */
  height: 1.875rem; /* 30px */
  padding: 0 0.75rem 0 0.625rem; /* 0 12px 0 10px */
  border-radius: 62.4375rem; /* 999px */
  background-color: ${({theme})=>theme.neutral[700]};
  color: ${({theme})=>theme.neutral[0]};
  white-space: nowrap;
  transition: background-color 0.2s ease-in;
  ${({theme})=>theme.text.caption01};

  &:hover {
    background-color: ${({theme})=>theme.neutral[800]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }
`;ChatListDrawer.__docgenInfo={description:"대화 목록 드로어. 목록은 `SearchConversationList`가 그리고, 여기서는 드로어 껍데기와 새 채팅 버튼만 얹어요.",methods:[],displayName:"ChatListDrawer"}}}]);
//# sourceMappingURL=9019.9356627c.iframe.bundle.js.map