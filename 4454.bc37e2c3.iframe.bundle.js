"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4454],{"./src/modules/features/news/NewsPopover/constants/lastSeenNote.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,["S",0,"knot.releaseNote.lastSeenId"])},"./src/modules/features/news/NewsPopover/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>NewsPopover});var n=__webpack_require__("./src/shared/api/fetch/relay/n/index.ts");const releaseNoteKeys={all:["releaseNote"],list:()=>[...releaseNoteKeys.all,"list"]};var useQuery=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useQuery.js");const queries_useReleaseNotesQuery=()=>(0,useQuery.I)({queryKey:releaseNoteKeys.list(),queryFn:n.J});var _path,_path2,_path3,breakpoint=__webpack_require__("./src/shared/constants/breakpoint/index.ts"),Popover=__webpack_require__("./src/shared/components/composites/Popover/index.tsx"),emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),useMediaQuery=__webpack_require__("./src/shared/hooks/common/useMediaQuery/index.ts"),useIsSendingFeedback=__webpack_require__("./src/shared/hooks/domain/feedback/useIsSendingFeedback/index.ts"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),_excluded=["size"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const letter=function SvgLetter(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 18",width:size,height:size,focusable:"false","aria-hidden":"true"},props),_path||(_path=react.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4.7 8.5V3.6c0-.85.65-1.5 1.5-1.5h5.6c.85 0 1.5.65 1.5 1.5v4.9"})),_path2||(_path2=react.createElement("path",{fill:"currentColor",d:"M9 7.4s-1.7-1-1.7-2.15c0-.6.45-1 .95-1 .35 0 .6.2.75.45.15-.25.4-.45.75-.45.5 0 .95.4.95 1C10.7 6.4 9 7.4 9 7.4"})),_path3||(_path3=react.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M2.4 8.4c0-.62.68-1 1.21-.67L9 11.1l5.39-3.37a.79.79 0 0 1 1.21.67v5.5c0 .93-.77 1.7-1.7 1.7H4.1c-.93 0-1.7-.77-1.7-1.7z"})))};var useRecordingState=__webpack_require__("./src/shared/hooks/domain/recording/useRecordingState/index.ts"),lastSeenNote=__webpack_require__("./src/modules/features/news/NewsPopover/constants/lastSeenNote.ts");const readLastSeenId=()=>{try{return localStorage.getItem(lastSeenNote.S)}catch{return}};var news_path,feedback=__webpack_require__("./src/assets/icons/feedback.svg"),news_excluded=["size"];function news_extends(){return news_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},news_extends.apply(null,arguments)}const news=function SvgNews(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,props=function news_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function news_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,news_excluded);return react.createElement("svg",news_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 18",width:size,height:size,focusable:"false","aria-hidden":"true"},props),news_path||(news_path=react.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M2.75 7.25a.5.5 0 0 1 .5-.5h2.5l6.5-3v10.5l-6.5-3h-2.5a.5.5 0 0 1-.5-.5zM5.75 11.25l.75 3M14.75 7c.85 1 .85 3 0 4"})))};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function NewChip(){return(0,emotion_react_jsx_runtime_browser_esm.Y)(Root,{children:"NEW"})}const Root=emotion_styled_browser_esm.A.span`
  flex-shrink: 0;
  padding: 0.125rem 0.5rem; /* 2px 8px */
  border-radius: 62.4375rem; /* 999px */
  background-color: ${({theme})=>theme.sub.accent[100]};
  color: ${({theme})=>theme.sub.accent[700]};
  ${({theme})=>theme.text.caption01};
`;function NewsMenu({hasUnreadNews,onNewsSelect,onFeedbackSelect}){return(0,emotion_react_jsx_runtime_browser_esm.FD)(Container,{"aria-label":"새 소식과 피드백",children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(MenuItem,{type:"button",onClick:onNewsSelect,autoFocus:!0,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(news,{size:18}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Label,{children:"새 소식"}),hasUnreadNews&&(0,emotion_react_jsx_runtime_browser_esm.Y)(NewChip,{})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(MenuItem,{type:"button",onClick:onFeedbackSelect,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(feedback.A,{size:18}),"피드백 보내기"]})]})}NewChip.__docgenInfo={description:"피그마 Chip/새 소식 · 종류=NEW. 안 읽은 새 소식이 있는 메뉴 항목과 안 읽은 노트의 항목에 붙여요(NEWS-R3, NEWS-R4)",methods:[],displayName:"NewChip"};const Container=emotion_styled_browser_esm.A.nav`
  display: flex;
  flex-direction: column;
  width: 15rem; /* 240px */
  padding: 0.375rem; /* 6px */
  border: 1px solid ${({theme})=>theme.neutral[200]};
  border-radius: 1rem; /* 16px */
  background-color: ${({theme})=>theme.neutral[0]};
  box-shadow: ${({theme})=>theme.shadow03};
`,MenuItem=emotion_styled_browser_esm.A.button`
  display: flex;
  align-items: center;
  gap: 0.625rem; /* 10px */
  padding: 0.625rem 0.75rem; /* 10px 12px */
  border-radius: 0.5rem; /* 8px */
  color: ${({theme})=>theme.neutral[900]};
  ${({theme})=>theme.text.caption02};
  font-weight: 500;
  text-align: left;

  & > svg {
    flex-shrink: 0;
    color: ${({theme})=>theme.neutral[600]};
  }

  &:hover {
    background-color: ${({theme})=>theme.neutral[100]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: -2px;
  }
`,Label=emotion_styled_browser_esm.A.span`
  flex: 1;
`;NewsMenu.__docgenInfo={description:"「소식과 피드백」 버튼이 여는 메뉴. 고르면 메뉴가 닫히고 같은 자리에 그 패널이 열려요(NEWS-R3, FEEDBACK-R3).\n\n메뉴를 열면 첫 항목으로 포커스를 옮겨, 키보드로 연 사람이 바로 고를 수 있어요.",methods:[],displayName:"NewsMenu",props:{hasUnreadNews:{required:!0,tsType:{name:"boolean"},description:"안 읽은 새 소식이 있는지. 있으면 「새 소식」 끝에 NEW 칩을 붙여요(NEWS-R3)"},onNewsSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"「새 소식」을 누르면 불러요"},onFeedbackSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"「피드백 보내기」를 누르면 불러요"}}};const formatReleaseDate=releasedAt=>{const[,month,day]=releasedAt.split("-").map(Number);return`${month}월 ${day}일`};var PATH_ROUTE=__webpack_require__("./src/shared/routes/PATH_ROUTE.ts"),hooks=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/hooks.js"),lib=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/dom/lib.js"),chevronRight=__webpack_require__("./src/assets/icons/chevronRight.svg");function NewsImage({src}){const[isLoaded,setIsLoaded]=(0,react.useState)(!1);return(0,emotion_react_jsx_runtime_browser_esm.Y)(Image,{src,alt:"",hidden:!isLoaded,onLoad:()=>setIsLoaded(!0)})}const Image=emotion_styled_browser_esm.A.img`
  width: 100%;
  max-height: 15rem; /* 240px */
  border-radius: 0.75rem; /* 12px */
  background-color: ${({theme})=>theme.neutral[100]};
  object-fit: contain;

  /* 전역 스타일의 img display: block이 hidden을 덮어서 다시 숨겨요 */
  &[hidden] {
    display: none;
  }
`;function NewsItem({title,description,image,link,isFromFeedback,isNew}){const{workspaceId}=(0,hooks.g)();return(0,emotion_react_jsx_runtime_browser_esm.FD)(NewsItem_Container,{children:[(isNew||isFromFeedback)&&(0,emotion_react_jsx_runtime_browser_esm.FD)(ChipContainer,{children:[isNew&&(0,emotion_react_jsx_runtime_browser_esm.Y)(NewChip,{}),isFromFeedback&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Chip,{children:"피드백 덕분에 바뀌었어요"})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Title,{children:title}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Description,{children:description}),image?.startsWith("https://github.com/user-attachments/assets/")&&(0,emotion_react_jsx_runtime_browser_esm.Y)(NewsImage,{src:image}),link&&workspaceId&&(0,PATH_ROUTE.Iq)(link)&&(0,emotion_react_jsx_runtime_browser_esm.FD)(GoLink,{to:(0,PATH_ROUTE.vX)({routeKey:link,params:{workspaceId}}),children:["바로 가보기",(0,emotion_react_jsx_runtime_browser_esm.Y)(chevronRight.A,{size:12})]})]})}NewsImage.__docgenInfo={description:"새 소식 항목의 사진 칸. 사진을 항목 폭에 맞춰 원래 비율로 보여 주고 자르지 않아요(NEWS-R13).\n\n맞춘 높이가 240px을 넘으면 비율을 지킨 채 높이 240px로 줄이고 가운데에 둬요. 남는 양옆은 사진 칸 배경색이에요.\n사진을 다 불러오기 전과 불러오지 못했을 때는 사진 칸을 그리지 않아요(NEWS-R14).",methods:[],displayName:"NewsImage",props:{src:{required:!0,tsType:{name:"string"},description:"사진 주소. `NEWS_IMAGE_URL_PREFIX`로 시작하는 주소만 받아요"}}};const NewsItem_Container=emotion_styled_browser_esm.A.li`
  display: flex;
  flex-direction: column;
  gap: 0.375rem; /* 6px */
`,ChipContainer=emotion_styled_browser_esm.A.div`
  display: flex;
  gap: 0.375rem; /* 6px */
`,Chip=emotion_styled_browser_esm.A.span`
  padding: 0.125rem 0.5rem; /* 2px 8px */
  border-radius: 62.4375rem; /* 999px */
  background-color: ${({theme})=>theme.neutral[100]};
  color: ${({theme})=>theme.neutral[600]};
  ${({theme})=>theme.text.caption01};
`,Title=emotion_styled_browser_esm.A.p`
  margin: 0;
  color: ${({theme})=>theme.neutral[900]};
  ${({theme})=>theme.text.caption02};
  font-weight: 500;
`,Description=emotion_styled_browser_esm.A.p`
  margin: 0;
  color: ${({theme})=>theme.neutral[600]};
  ${({theme})=>theme.text.caption02};
`,GoLink=(0,emotion_styled_browser_esm.A)(lib.N_)`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: 0.125rem; /* 2px */
  padding-top: 0.125rem; /* 2px */
  color: ${({theme})=>theme.sub.accent[700]};
  ${({theme})=>theme.text.caption01};
  text-decoration: none;

  &:focus-visible {
    border-radius: 0.25rem; /* 4px */
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }
`;function NewsPanel({notes,newNoteIds}){const dateGroups=(notes=>notes.reduce((groups,{releasedAt,items})=>{const lastGroup=groups[groups.length-1];return lastGroup?.releasedAt===releasedAt?lastGroup.items.push(...items):groups.push({releasedAt,items:[...items]}),groups},[]))(notes.map(({id,releasedAt,items})=>({releasedAt,items:items.map(item=>({...item,isNew:newNoteIds.includes(id)}))})));return(0,emotion_react_jsx_runtime_browser_esm.FD)(NewsPanel_Container,{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Header,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(NewsPanel_Title,{children:"새 소식"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(NewsPanel_Description,{children:"새로 생기거나 달라진 점을 모아 둬요"})]}),0===dateGroups.length?(0,emotion_react_jsx_runtime_browser_esm.FD)(Empty,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(EmptyIconWrapper,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(news,{size:18})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(EmptyTitle,{children:"아직 새 소식이 없어요"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(EmptyDescription,{children:"바뀐 점이 생기면 여기에 모아 둘게요"})]}):(0,emotion_react_jsx_runtime_browser_esm.Y)(Body,{children:dateGroups.map(({releasedAt,items})=>(0,emotion_react_jsx_runtime_browser_esm.FD)(DateGroup,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(DateHeading,{children:formatReleaseDate(releasedAt)}),(0,emotion_react_jsx_runtime_browser_esm.Y)(ItemList,{children:items.map(item=>(0,emotion_react_jsx_runtime_browser_esm.Y)(NewsItem,{...item},item.title))})]},releasedAt))})]})}NewsItem.__docgenInfo={description:"새 소식 패널의 항목 하나. 제목과 설명 아래에 사진과 「바로 가보기」는 있을 때만 보여 줘요(NEWS-R4).\n\n안 읽은 노트의 항목에는 맨 위에 NEW 칩을, 피드백으로 고친 항목에는 「피드백 덕분에 바뀌었어요」 칩을 붙여요.\n사진은 GitHub 첨부 사진 주소일 때만 그려요(NEWS-R14).\n「바로 가보기」는 지금 보고 있는 워크스페이스의 화면으로 옮겨요. 앱에 없는 화면 이름이면 버튼을 숨겨요.",methods:[],displayName:"NewsItem",props:{isNew:{required:!0,tsType:{name:"boolean"},description:"안 읽은 노트의 항목인지. 맞으면 맨 위에 NEW 칩을 붙여요"}},composes:["ReleaseNoteItem"]};const NewsPanel_Container=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 22.5rem; /* 360px */
  /* 좁은 화면에서도 팝오버가 지키는 좌우 16px 여백 안에 들어가요 */
  max-width: calc(100vw - 2rem);
  /* GNB(44px) 가운데 버튼 아래 8px에서 열려 위로 48px, 화면 아래 여백 16px을 빼요 */
  max-height: calc(100dvh - 4rem);
  border: 1px solid ${({theme})=>theme.neutral[200]};
  border-radius: 1rem; /* 16px */
  background-color: ${({theme})=>theme.neutral[0]};
  box-shadow: ${({theme})=>theme.shadow03};
`,Header=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem; /* 2px */
  padding: 1.25rem 1.25rem 0.875rem; /* 20px 20px 14px */
  border-bottom: 1px solid ${({theme})=>theme.neutral[200]};
`,NewsPanel_Title=emotion_styled_browser_esm.A.h2`
  margin: 0;
  color: ${({theme})=>theme.neutral[900]};
  ${({theme})=>theme.text.label01};
`,NewsPanel_Description=emotion_styled_browser_esm.A.p`
  margin: 0;
  color: ${({theme})=>theme.neutral[500]};
  ${({theme})=>theme.text.caption01};
`,Body=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem; /* 28px */
  overflow-y: auto;
  padding: 1rem 1.25rem 1.5rem; /* 16px 20px 24px */
`,DateGroup=emotion_styled_browser_esm.A.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* 12px */
`,DateHeading=emotion_styled_browser_esm.A.h3`
  margin: 0;
  color: ${({theme})=>theme.neutral[500]};
  ${({theme})=>theme.text.caption01};
`,ItemList=emotion_styled_browser_esm.A.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem; /* 20px */
  margin: 0;
  padding: 0;
  list-style: none;
`,Empty=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem; /* 6px */
  padding: 2.5rem 1.25rem 3rem; /* 40px 20px 48px */
  text-align: center;
`,EmptyIconWrapper=emotion_styled_browser_esm.A.div`
  display: flex;
  padding: 0.6875rem; /* 11px */
  /* 피그마의 4px 간격 틀과 위아래 6px 간격을 합쳐 제목까지 16px을 띄워요 */
  margin-bottom: 0.625rem; /* 10px */
  border-radius: 62.4375rem; /* 999px */
  background-color: ${({theme})=>theme.neutral[100]};
  color: ${({theme})=>theme.neutral[500]};
`,EmptyTitle=emotion_styled_browser_esm.A.p`
  margin: 0;
  color: ${({theme})=>theme.neutral[800]};
  ${({theme})=>theme.text.caption02};
  font-weight: 500;
`,EmptyDescription=emotion_styled_browser_esm.A.p`
  margin: 0;
  color: ${({theme})=>theme.neutral[500]};
  ${({theme})=>theme.text.caption01};
`;function NewsPopoverContent({initialView,notes,unreadNoteIds,onNewsOpen,feedbackPanel}){const[view,setView]=(0,react.useState)(initialView),[newNoteIds]=(0,react.useState)(unreadNoteIds);return"news"===view?(0,emotion_react_jsx_runtime_browser_esm.Y)(NewsPanel,{notes,newNoteIds}):"feedback"===view?feedbackPanel:(0,emotion_react_jsx_runtime_browser_esm.Y)(NewsMenu,{hasUnreadNews:unreadNoteIds.length>0,onNewsSelect:()=>{setView("news"),onNewsOpen()},onFeedbackSelect:()=>setView("feedback")})}function NewsPopover({renderFeedbackPanel}){const{data,isPending}=queries_useReleaseNotesQuery(),notes=data?.notes??[],{isAutoOpen,unreadNoteIds,markAsSeen}=(({notes,noteIds})=>{const{isRecordingActive}=(0,useRecordingState.A)(),[lastSeenId,setLastSeenId]=(0,react.useState)(readLastSeenId),[canAutoOpen,setCanAutoOpen]=(0,react.useState)(()=>!isRecordingActive&&null===lastSeenId),isAutoOpen=canAutoOpen&&notes.length>0,unreadNoteIds=(({notes,noteIds,lastSeenId})=>{const visibleNoteIds=notes.map(({id})=>id);if(null===lastSeenId)return visibleNoteIds;const lastSeenIndex=void 0===lastSeenId?-1:noteIds.indexOf(lastSeenId);if(-1===lastSeenIndex)return[];const newerNoteIds=noteIds.slice(0,lastSeenIndex);return visibleNoteIds.filter(id=>newerNoteIds.includes(id))})({notes,noteIds,lastSeenId});return{isAutoOpen,unreadNoteIds,markAsSeen:()=>{if(setCanAutoOpen(!1),0!==notes.length){setLastSeenId(notes[0].id);try{localStorage.setItem(lastSeenNote.S,notes[0].id)}catch{}}}}})({notes,noteIds:data?.noteIds??[]}),hasUnreadNews=unreadNoteIds.length>0,{isMatched:isMobile}=(0,useMediaQuery.A)(breakpoint.nO.mobile),{isSendingFeedback}=(0,useIsSendingFeedback.A)(),initialView=isAutoOpen||isMobile?"news":"menu";return isPending?null:(0,emotion_react_jsx_runtime_browser_esm.Y)(Popover.A,{openOn:"click",placement:"bottom-end",isInitiallyOpen:isAutoOpen,isDismissible:!isSendingFeedback,onOpen:()=>{"news"===initialView&&markAsSeen()},content:({close})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(NewsPopoverContent,{initialView,notes,unreadNoteIds,onNewsOpen:markAsSeen,feedbackPanel:renderFeedbackPanel({onClose:close})}),children:triggerProps=>(0,emotion_react_jsx_runtime_browser_esm.FD)(Trigger,{type:"button","aria-label":hasUnreadNews?"새 소식과 피드백, 읽지 않은 소식 있음":"새 소식과 피드백",$hasUnreadNews:hasUnreadNews,...triggerProps,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(letter,{size:18}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Tooltip,{"aria-hidden":!0,children:"새 소식과 피드백"})]})})}NewsPanel.__docgenInfo={description:"새 소식 버튼이 여는 패널. 머리 아래에 노트를 배포 날짜별로 묶어 보여 주고, 노트가 없으면 빈 상태를 보여 줘요(NEWS-R4).\n\n안 읽은 노트의 항목에는 NEW 칩을 붙여요. 같은 날 낸 노트가 한 묶음에 모여도 칩은 노트마다 따로 정해요.\n화면 높이를 넘으면 머리는 그대로 두고 목록만 패널 안에서 스크롤해요.",methods:[],displayName:"NewsPanel",props:{notes:{required:!0,tsType:{name:"Array",elements:[{name:"ReleaseNote"}],raw:"ReleaseNote[]"},description:"보여 줄 노트. 최신 노트가 맨 앞이에요"},newNoteIds:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"NEW 칩을 붙일 안 읽은 노트의 id"}}},NewsPopoverContent.__docgenInfo={description:"「소식과 피드백」 팝오버의 내용. 메뉴, 새 소식 패널, 피드백 패널 중 하나를 그려요.\n\n무엇을 보여 줄지는 팝오버가 열린 동안만 들고 있어요. 닫히면 내용이 사라지므로 다음에 열 때는 `initialView`부터 보여요.\n패널의 NEW 칩도 같아요. 패널을 연 순간 모두 읽음이 되지만, 열려 있는 동안은 연 시점의 안 읽은 노트에 NEW를 붙여 둬요(NEWS-R4).",methods:[],displayName:"NewsPopoverContent",props:{initialView:{required:!0,tsType:{name:"union",raw:'"menu" | "news" | "feedback"',elements:[{name:"literal",value:'"menu"'},{name:"literal",value:'"news"'},{name:"literal",value:'"feedback"'}]},description:"열렸을 때 처음 보여 줄 것"},notes:{required:!0,tsType:{name:"Array",elements:[{name:"ReleaseNote"}],raw:"ReleaseNote[]"},description:"새 소식 패널에 보여 줄 노트"},unreadNoteIds:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"안 읽은 노트의 id. 있으면 메뉴의 「새 소식」과 새 소식 패널의 그 노트에 NEW 칩을 붙여요"},onNewsOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"메뉴에서 「새 소식」을 골라 새 소식 패널을 보여 줄 때 불러요"},feedbackPanel:{required:!0,tsType:{name:"ReactNode"},description:"메뉴에서 「피드백 보내기」를 고르면 그 자리에 그릴 피드백 패널"}}};const Tooltip=emotion_styled_browser_esm.A.span`
  position: absolute;
  top: calc(100% + 0.5rem); /* 8px */
  right: 0;
  z-index: 28; /* 화면 위에 떠 있는 패널(20)보다 위, 열린 팝오버(29)보다 아래에 떠요 */
  display: none;
  padding: 0.375rem 0.625rem; /* 6px 10px */
  border-radius: 0.375rem; /* 6px */
  background-color: ${({theme})=>theme.neutral[900]};
  color: ${({theme})=>theme.neutral[0]};
  white-space: nowrap;
  pointer-events: none;
  ${({theme})=>theme.text.caption01};
`,Trigger=emotion_styled_browser_esm.A.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem; /* 8px */
  border: 1px solid ${({theme})=>theme.neutral[200]};
  border-radius: 62.4375rem; /* 999px */
  background-color: ${({theme})=>theme.neutral[0]};
  color: ${({theme})=>theme.neutral[600]};
  box-shadow: ${({theme})=>theme.shadow01};
  transition:
    background-color 0.2s ease-in,
    color 0.2s ease-in;

  &[aria-expanded="true"] {
    border-color: ${({theme})=>theme.neutral[700]};
    background-color: ${({theme})=>theme.neutral[700]};
    color: ${({theme})=>theme.neutral[0]};
  }

  /* 메뉴나 패널이 같은 자리에 뜨므로 열려 있는 동안에는 툴팁을 띄우지 않아요 */
  /* 툴팁은 버튼 안의 하나뿐인 span이에요 */
  &:focus-visible:not([aria-expanded="true"]) > span {
    display: block;
  }

  /* 손가락으로 누른 뒤 남는 호버로 툴팁이 뜨지 않게, 마우스를 올릴 수 있을 때만 띄워요 */
  @media (hover: hover) {
    &:hover:not([aria-expanded="true"]) > span {
      display: block;
    }
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }

  /* 피그마 상태=새 소식 있음: 8px 점을 버튼 바깥 가장자리에서 위와 오른쪽으로 1px 안에 두고 흰 테두리 2px를 바깥으로 둘러요 */
  /* 위치는 버튼 테두리(1px) 안쪽에서 재므로 점 테두리와 버튼 테두리만큼 밖으로 밀어요 */
  ${({$hasUnreadNews,theme})=>$hasUnreadNews&&`\n    &::before {\n      position: absolute;\n      top: -0.125rem; /* 2px */\n      right: -0.125rem; /* 2px */\n      width: 0.75rem; /* 12px */\n      height: 0.75rem; /* 12px */\n      border: 2px solid ${theme.neutral[0]};\n      border-radius: 62.4375rem; /* 999px */\n      background-color: ${theme.sub.accent[500]};\n      content: "";\n    }\n  `}

  /* 손가락으로 누를 때는 보이는 크기(36px)는 그대로 두고 누르는 영역만 44px로 넓혀요(RESP-R9) */
  @media (pointer: coarse) {
    &::after {
      position: absolute;
      inset: -0.25rem; /* 4px */
      content: "";
    }
  }
`;NewsPopover.__docgenInfo={description:"Knot의 새 소식(릴리즈 노트)과 피드백 보내기를 여는 「소식과 피드백」 버튼. GNB 오른쪽 프로필 바로 왼쪽에 둬요(FEEDBACK-R1).\n\n누르면 버튼 아래에 메뉴(새 소식, 피드백 보내기)를 오른쪽 끝을 맞춰 열고, 고르면 같은 자리에 그 패널을 열어요(NEWS-R3, FEEDBACK-R3).\n다시 누르거나 바깥을 누르거나 ESC를 누르면 닫고, 닫으면 이 버튼으로 포커스를 돌려줘요(FEEDBACK-R4).\n피드백을 보내는 동안에는 이 방법으로 닫지 않아요(FEEDBACK-R8).\n열려 있는 동안 버튼은 채워진 모양이고, 닫혀 있을 때 올리거나 포커스하면 툴팁 「새 소식과 피드백」을 보여 줘요.\n\n노트는 프론트 Worker가 Notion 새 소식 DB에서 읽어 와요(ADR 956). 받지 못하면 새 소식 패널은 빈 상태를 보여 줘요.\n최근 3일 안에 배포한 노트와 Notion에서 「항상 보이기」로 남긴 노트만 보이고, 점과 NEW, 저절로 열기도 보이는 노트만 봐요(NEWS-R15).\n이 기기에서 새 소식을 한 번도 열지 않은 사용자에게는 노트를 받은 뒤 메뉴 없이 새 소식 패널을 저절로 열어 줘요(NEWS-R6).\n안 읽은 새 소식이 있으면 버튼 오른쪽 위에 점을 켜고 aria-label에 알려요. 새 소식 패널을 열면 꺼요(NEWS-R1, NEWS-R2).\n휴대폰에서는 피드백을 사이드바에서 열어서(FEEDBACK-R2), 누르면 메뉴 없이 새 소식 패널을 바로 열어요.",methods:[],displayName:"NewsPopover",props:{renderFeedbackPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: RenderFeedbackPanelParams) => ReactNode",signature:{arguments:[{type:{name:"RenderFeedbackPanelParams"},name:"params"}],return:{name:"ReactNode"}}},description:"메뉴에서 「피드백 보내기」를 고르면 같은 자리에 그릴 피드백 패널.\n피드백은 다른 도메인이라 이 버튼이 직접 그리지 않고, 버튼을 놓는 레이아웃이 넘겨요"}}}}}]);
//# sourceMappingURL=4454.bc37e2c3.iframe.bundle.js.map