"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[19],{"./src/assets/icons/chevronDown.svg"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),_excluded=["size"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgChevronDown(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 12 12",width:size,height:size,focusable:"false","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M2.5 4 6 8l3.5-4"})))};__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/modules/features/workspace/WorkspaceSwitcher/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>WorkspaceSwitcher});var emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),useExitAnimation=__webpack_require__("./src/shared/hooks/common/useExitAnimation/index.ts"),Avatar=__webpack_require__("./src/shared/components/primitives/ui/Avatar/index.tsx"),chevronDown=__webpack_require__("./src/assets/icons/chevronDown.svg"),useWorkspaceQuery=__webpack_require__("./src/shared/api/queries/useWorkspaceQuery/index.ts"),useWorkspacesQuery=__webpack_require__("./src/shared/api/queries/useWorkspacesQuery/index.ts"),httpClient=__webpack_require__("./src/shared/api/httpClient/index.ts");const WORKSPACE_MEMBERS_ME_API_PATH=workspaceId=>`/api/v1/workspaces/${workspaceId}/members/me`;var workspace=__webpack_require__("./src/shared/api/queryKey/workspace.ts"),QueryClientProvider=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),useMutation=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useMutation.js");const mutations_useLeaveWorkspaceMutation=()=>{const queryClient=(0,QueryClientProvider.jE)();return(0,useMutation.n)({mutationFn:({workspaceId})=>(async workspaceId=>{await(0,httpClient.ok)({method:"delete",url:WORKSPACE_MEMBERS_ME_API_PATH(workspaceId)})})(workspaceId),onSuccess:()=>queryClient.invalidateQueries({queryKey:workspace.O.list()}),onError:(_error,{workspaceId})=>queryClient.invalidateQueries({queryKey:workspace.O.detail(workspaceId)})})};var dto_workspace=__webpack_require__("./src/shared/api/dto/workspace.ts");const WORKSPACE_OWNERSHIP_TRANSFERS_API_PATH=workspaceId=>`/api/v1/workspaces/${workspaceId}/ownership-transfers`,mutations_useTransferWorkspaceOwnershipMutation=()=>{const queryClient=(0,QueryClientProvider.jE)();return(0,useMutation.n)({mutationFn:({workspaceId,...input})=>(async({workspaceId,body})=>{await(0,httpClient.ok)({method:"post",url:WORKSPACE_OWNERSHIP_TRANSFERS_API_PATH(workspaceId),data:body})})({workspaceId,body:new dto_workspace.Zm(input)}),onSuccess:()=>queryClient.invalidateQueries({queryKey:workspace.O.list()}),onError:(_error,{workspaceId})=>queryClient.invalidateQueries({queryKey:workspace.O.ownershipTransferCandidates(workspaceId)})})},WORKSPACE_OWNERSHIP_TRANSFER_CANDIDATES_API_PATH=workspaceId=>`/api/v1/workspaces/${workspaceId}/ownership-transfer-candidates`;var useQuery=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useQuery.js");const queries_useOwnershipTransferCandidatesQuery=({workspaceId})=>(0,useQuery.I)({queryKey:workspace.O.ownershipTransferCandidates(workspaceId),queryFn:()=>(async workspaceId=>{const response=await(0,httpClient.ok)({method:"get",url:WORKSPACE_OWNERSHIP_TRANSFER_CANDIDATES_API_PATH(workspaceId)});return new dto_workspace.FZ(response.data)})(workspaceId)});var toastMessages=__webpack_require__("./src/shared/constants/toastMessages/index.ts"),useKeyDown=__webpack_require__("./src/shared/hooks/common/useKeyDown/index.ts"),ConfirmDialog=__webpack_require__("./src/shared/components/primitives/ui/ConfirmDialog/index.tsx"),Dim=__webpack_require__("./src/shared/components/primitives/ui/Dim/index.tsx"),InlineError=__webpack_require__("./src/shared/components/primitives/ui/InlineError/index.tsx"),MemberSelectDialog=__webpack_require__("./src/shared/components/primitives/ui/MemberSelectDialog/index.tsx"),dialogContext=__webpack_require__("./src/shared/provider/context/dialogContext/index.tsx"),toastContext=__webpack_require__("./src/shared/provider/context/toastContext/index.tsx"),PATH_ROUTE=__webpack_require__("./src/shared/routes/PATH_ROUTE.ts"),recordingStore=__webpack_require__("./src/shared/store/recordingStore/index.ts"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),hooks=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/hooks.js"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function LeaveConfirmDialog({description,onCancel,onConfirm}){return(0,useKeyDown.A)({key:"Escape",isEnabled:!0,onKeyDown:onCancel}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Dim.A,{onClick:onCancel,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(ConfirmDialog.A,{role:"dialog","aria-modal":"true","aria-label":"워크스페이스에서 나갈까요?",onClick:e=>e.stopPropagation(),title:"워크스페이스에서 나갈까요?",description,cancelLabel:"취소",confirmLabel:"나가기",isDestructive:!0,onCancel,onConfirm})})}function OwnerLeaveDialog({workspaceId,onCancel,onTransfer,onDelete}){const{data,isError,refetch}=queries_useOwnershipTransferCandidatesQuery({workspaceId}),isCandidatesLoadFailed=void 0===data&&isError,[selectedMemberId,setSelectedMemberId]=(0,react.useState)(null),[isDeleteConfirmOpen,setIsDeleteConfirmOpen]=(0,react.useState)(!1),backToMemberSelect=()=>setIsDeleteConfirmOpen(!1);return(0,useKeyDown.A)({key:"Escape",isEnabled:!0,onKeyDown:isDeleteConfirmOpen?backToMemberSelect:onCancel}),isDeleteConfirmOpen?(0,emotion_react_jsx_runtime_browser_esm.Y)(Dim.A,{onClick:backToMemberSelect,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(ConfirmDialog.A,{role:"dialog","aria-modal":"true","aria-label":"워크스페이스를 삭제할까요?",onClick:e=>e.stopPropagation(),title:"워크스페이스를 삭제할까요?",description:"멤버 모두 더 이상 들어올 수 없고,\n문서와 녹음도 함께 사라져요.",cancelLabel:"취소",confirmLabel:"삭제",isDestructive:!0,onCancel:backToMemberSelect,onConfirm:onDelete})}):(0,emotion_react_jsx_runtime_browser_esm.Y)(Dim.A,{onClick:null===selectedMemberId?onCancel:void 0,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(MemberSelectDialog.A,{role:"dialog","aria-modal":"true","aria-label":"누구에게 owner를 넘길까요?",onClick:e=>e.stopPropagation(),title:"누구에게 owner를 넘길까요?",description:"owner 권한을 넘겨야 나갈 수 있어요.\n내가 만든 문서와 녹음은 그대로 남아요.",members:(data?.candidates??[]).map(({memberId,nickname})=>({id:memberId,name:nickname})),memberListNotice:isCandidatesLoadFailed&&(0,emotion_react_jsx_runtime_browser_esm.Y)(InlineError.A,{message:"멤버 목록을 불러오지 못했어요. 다시 시도해 주세요.",onRetry:()=>{refetch()},align:"center"}),selectedMemberId,onSelectMember:setSelectedMemberId,cancelLabel:"취소",confirmLabel:"넘기고 나가기",linkLabel:"워크스페이스 삭제하기",onCancel,onConfirm:()=>{null!==selectedMemberId&&onTransfer(selectedMemberId)},onLinkClick:()=>setIsDeleteConfirmOpen(!0)})})}const workspace_useLeaveWorkspaceDialog=({workspaceId})=>{const{open}=(0,dialogContext.sp)(),{show}=(0,toastContext.dj)(),navigate=(0,hooks.Zp)(),discardRecording=(0,recordingStore.A)(state=>state.discardRecording),{data:workspace}=(0,useWorkspaceQuery.A)({workspaceId}),{mutateAsync:leaveWorkspace}=mutations_useLeaveWorkspaceMutation(),{mutateAsync:transferOwnership}=mutations_useTransferWorkspaceOwnershipMutation();return{openLeaveWorkspaceDialog:()=>{if(void 0===workspace)return;const{myRole,activeMemberCount}=workspace;let isRequesting=!1;open(({close})=>{const leaveBy=async(request,failedToast)=>{if(!isRequesting){isRequesting=!0;try{await request()}catch{return void show(failedToast)}finally{isRequesting=!1}close(),discardRecording(),navigate(PATH_ROUTE.WS.HOME,{replace:!0})}},leave=()=>leaveBy(()=>leaveWorkspace({workspaceId}),toastMessages.D.WORKSPACE_LEAVE_FAILED);return 1===activeMemberCount?(0,emotion_react_jsx_runtime_browser_esm.Y)(LeaveConfirmDialog,{description:"남은 멤버가 없어 워크스페이스도 함께 삭제돼요.\n문서와 녹음을 다시 볼 수 없어요.",onCancel:close,onConfirm:leave}):"OWNER"===myRole?(0,emotion_react_jsx_runtime_browser_esm.Y)(OwnerLeaveDialog,{workspaceId,onCancel:close,onTransfer:successorMemberId=>leaveBy(()=>transferOwnership({workspaceId,successorMemberId}),toastMessages.D.OWNERSHIP_TRANSFER_FAILED),onDelete:()=>{close(),discardRecording()}}):(0,emotion_react_jsx_runtime_browser_esm.Y)(LeaveConfirmDialog,{description:"내가 만든 문서와 녹음은 그대로 남아요.\n다시 들어오려면 초대 코드가 필요해요.",onCancel:close,onConfirm:leave})})}}};var useOutsideClick=__webpack_require__("./src/shared/hooks/common/useOutsideClick/index.ts");var useRecordingControl=__webpack_require__("./src/shared/hooks/domain/recording/useRecordingControl/index.ts");function EndRecordingBeforeMoveDialog({onCancel,onConfirm}){return(0,useKeyDown.A)({key:"Escape",isEnabled:!0,onKeyDown:onCancel}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Dim.A,{onClick:onCancel,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(ConfirmDialog.A,{role:"dialog","aria-modal":"true","aria-label":"녹음을 끝내고 이동할까요?",onClick:e=>e.stopPropagation(),title:"녹음을 끝내고 이동할까요?",description:"녹음은 워크스페이스마다 따로 있어요.\n지금 녹음은 문서로 정리돼요.",cancelLabel:"취소",confirmLabel:"끝내고 이동",onCancel,onConfirm})})}const recording_useEndRecordingBeforeMove=()=>{const{open}=(0,dialogContext.sp)(),isRecordingActive=(0,recordingStore.A)(state=>"idle"!==state.status),{endRecordingWithoutConfirm}=(0,useRecordingControl.A)();return{moveAfterEndingRecording:move=>{isRecordingActive?recordingStore.A.getState().isEnding||open(({close})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(EndRecordingBeforeMoveDialog,{onCancel:close,onConfirm:async()=>{close();"notEnded"!==await endRecordingWithoutConfirm("workspace_move")&&move()}})):move()}}};var useNavigateToWorkspaceCreate=__webpack_require__("./src/shared/hooks/domain/workspace/useNavigateToWorkspaceCreate/index.ts");const useWorkspaceSwitcher=()=>{const currentWorkspaceId=(()=>{const{workspaceId}=(0,hooks.g)();return Number(workspaceId)})(),{menuId,menuAreaRef,isOpen,handleToggle,close}=(()=>{const menuId=(0,react.useId)(),[isOpen,setIsOpen]=(0,react.useState)(!1),close=()=>setIsOpen(!1),{ref:menuAreaRef}=(0,useOutsideClick.A)({isEnabled:isOpen,onOutsideClick:close});return(0,useKeyDown.A)({key:"Escape",isEnabled:isOpen,onKeyDown:close}),{menuId,menuAreaRef,isOpen,handleToggle:()=>setIsOpen(prev=>!prev),close}})(),{switchWorkspace,createWorkspace}=(({currentWorkspaceId})=>{const{navigateWithToast}=(0,toastContext.dj)(),{navigateToWorkspaceCreate}=(0,useNavigateToWorkspaceCreate.A)(),{moveAfterEndingRecording}=recording_useEndRecordingBeforeMove();return{switchWorkspace:workspaceId=>{workspaceId!==currentWorkspaceId&&moveAfterEndingRecording(()=>navigateWithToast({to:(0,PATH_ROUTE.vX)({routeKey:"WORKSPACE_HOME",params:{workspaceId:String(workspaceId)}}),toast:toastMessages.D.WORKSPACE_CHANGED}))},createWorkspace:()=>{moveAfterEndingRecording(navigateToWorkspaceCreate)}}})({currentWorkspaceId}),{openLeaveWorkspaceDialog}=workspace_useLeaveWorkspaceDialog({workspaceId:currentWorkspaceId}),{data:workspace}=(0,useWorkspaceQuery.A)({workspaceId:currentWorkspaceId}),{data:workspaceList}=(0,useWorkspacesQuery.A)();return{currentWorkspaceId,workspaceName:workspace?.name??"",workspaces:workspaceList?.workspaces??[],menuId,menuAreaRef,isOpen,handleToggle,handleSelectWorkspace:workspaceId=>{close(),switchWorkspace(workspaceId)},handleCreateWorkspace:()=>{close(),createWorkspace()},handleLeaveWorkspace:()=>{close(),openLeaveWorkspaceDialog()}}};var Unfold=__webpack_require__("./src/shared/components/primitives/animation/Unfold/index.tsx"),Divider=__webpack_require__("./src/shared/components/primitives/ui/Divider/index.tsx");function WorkspaceMenu({id,workspaces,currentWorkspaceId,onSelectWorkspace,onCreateWorkspace,onLeaveWorkspace,isClosing}){return(0,emotion_react_jsx_runtime_browser_esm.FD)(Container,{as:"section",id,"aria-label":"워크스페이스 메뉴","data-overlay-state":isClosing?"closing":"open",inert:isClosing,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(SectionLabel,{children:"워크스페이스"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(WorkspaceList,{children:workspaces.map(({id:workspaceId,name})=>{const isCurrent=workspaceId===currentWorkspaceId;return(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{children:(0,emotion_react_jsx_runtime_browser_esm.FD)(WorkspaceItem,{type:"button","aria-current":isCurrent||void 0,$isCurrent:isCurrent,onClick:()=>onSelectWorkspace(workspaceId),children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(AvatarWrapper,{"aria-hidden":!0,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Avatar.A,{label:name,name,size:24})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(ItemName,{children:name})]})},workspaceId)})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(DividerWrapper,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Divider.A,{})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(ActionItem,{type:"button",onClick:onCreateWorkspace,children:"새 워크스페이스 만들기"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(DividerWrapper,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Divider.A,{})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(ActionItem,{type:"button",$isWarning:!0,onClick:onLeaveWorkspace,children:"워크스페이스 나가기"})]})}const Container=(0,emotion_styled_browser_esm.A)(Unfold.A)`
  position: absolute;
  top: calc(100% + 0.25rem); /* 4px */
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.125rem; /* 2px */
  padding: 0.375rem; /* 6px */
  border: 1px solid ${({theme})=>theme.neutral[200]};
  border-radius: 1rem; /* 16px */
  background-color: ${({theme})=>theme.neutral[0]};
  box-shadow: ${({theme})=>theme.shadow03};
`,SectionLabel=emotion_styled_browser_esm.A.span`
  padding: 0.375rem 0.625rem 0.25rem; /* 6px 10px 4px */
  color: ${({theme})=>theme.neutral[500]};
  ${({theme})=>theme.text.caption01};
`,WorkspaceList=emotion_styled_browser_esm.A.ul`
  display: flex;
  flex-direction: column;
  gap: 0.125rem; /* 2px */
`,WorkspaceItem=emotion_styled_browser_esm.A.button`
  display: flex;
  align-items: center;
  gap: 0.625rem; /* 10px */
  width: 100%;
  padding: 0.375rem 0.5rem; /* 6px 8px */
  border-radius: 0.5rem; /* 8px */
  background-color: ${({theme,$isCurrent})=>$isCurrent?theme.neutral[100]:"transparent"};
  color: ${({theme,$isCurrent})=>$isCurrent?theme.neutral[900]:theme.neutral[700]};
  text-align: left;
  transition: background-color 0.2s ease-in;

  &:hover,
  &:focus-visible {
    background-color: ${({theme})=>theme.neutral[100]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: -2px;
  }
`,AvatarWrapper=emotion_styled_browser_esm.A.span`
  display: flex;
  flex-shrink: 0;
`,ItemName=emotion_styled_browser_esm.A.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${({theme})=>theme.text.caption02};
`,DividerWrapper=emotion_styled_browser_esm.A.div`
  padding: 0.3125rem 0; /* 5px 0 */
`,ActionItem=emotion_styled_browser_esm.A.button`
  width: 100%;
  padding: 0.5rem 0.625rem; /* 8px 10px */
  border-radius: 0.5rem; /* 8px */
  color: ${({theme,$isWarning})=>$isWarning?theme.sub.warning[600]:theme.neutral[700]};
  text-align: left;
  transition: background-color 0.2s ease-in;
  ${({theme})=>theme.text.caption02};

  &:hover,
  &:focus-visible {
    background-color: ${({theme})=>theme.neutral[100]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: -2px;
  }
`;function WorkspaceSwitcher(){const{currentWorkspaceId,workspaceName,workspaces,menuId,menuAreaRef,isOpen,handleToggle,handleSelectWorkspace,handleCreateWorkspace,handleLeaveWorkspace}=useWorkspaceSwitcher(),{renderedValue:isMenuRendered,isExiting:isMenuClosing}=(0,useExitAnimation.A)({value:isOpen||null,ref:menuAreaRef});return(0,emotion_react_jsx_runtime_browser_esm.FD)(WorkspaceSwitcher_Container,{ref:menuAreaRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Trigger,{type:"button","aria-label":"워크스페이스 메뉴","aria-haspopup":"true","aria-expanded":isOpen,"aria-controls":isOpen?menuId:void 0,onClick:handleToggle,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(WorkspaceInfo,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Avatar.A,{label:workspaceName||"워크스페이스",name:workspaceName,size:24}),(0,emotion_react_jsx_runtime_browser_esm.Y)(WorkspaceName,{children:workspaceName})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(chevronDown.A,{size:12})]}),isMenuRendered&&(0,emotion_react_jsx_runtime_browser_esm.Y)(WorkspaceMenu,{id:menuId,workspaces,currentWorkspaceId,onSelectWorkspace:handleSelectWorkspace,onCreateWorkspace:handleCreateWorkspace,onLeaveWorkspace:handleLeaveWorkspace,isClosing:isMenuClosing})]})}WorkspaceMenu.__docgenInfo={description:"워크스페이스 이름 아래로 펼치는 워크스페이스 메뉴.\n\n내 워크스페이스 목록, 새 워크스페이스 만들기, 워크스페이스 나가기를 차례로 둬요.\n지금 워크스페이스는 체크 아이콘 없이 배경과 글자색으로만 구분해요.\n열릴 때는 위쪽 끝에서 펼쳐지고, 닫힐 때는 다시 접히며 사라져요.",methods:[],displayName:"WorkspaceMenu",props:{id:{required:!0,tsType:{name:"string"},description:""},workspaces:{required:!0,tsType:{name:"Array",elements:[{name:"WorkspaceMenuItem"}],raw:"WorkspaceMenuItem[]"},description:"내가 속한 워크스페이스 목록"},currentWorkspaceId:{required:!0,tsType:{name:"number"},description:"지금 보고 있는 워크스페이스 ID. 이 항목을 선택된 모양으로 그려요"},onSelectWorkspace:{required:!0,tsType:{name:"signature",type:"function",raw:"(workspaceId: number) => void",signature:{arguments:[{type:{name:"number"},name:"workspaceId"}],return:{name:"void"}}},description:""},onCreateWorkspace:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLeaveWorkspace:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isClosing:{required:!0,tsType:{name:"boolean"},description:"닫혀서 접히는 중인지. 이 동안에는 접히며 사라지고 눌리지 않아요"}}};const WorkspaceSwitcher_Container=emotion_styled_browser_esm.A.div`
  position: relative;
  flex-shrink: 0;
`,Trigger=emotion_styled_browser_esm.A.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem; /* 8px */
  width: 100%;
  height: 2.5rem; /* 40px */
  padding: 0 0.5rem; /* 8px */
  border-radius: 0.5rem; /* 8px */
  color: ${({theme})=>theme.neutral[400]};
  text-align: left;
  transition: background-color 0.2s ease-in;

  &:hover,
  &:focus-visible {
    background-color: ${({theme})=>theme.neutral[100]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: -2px;
  }

  & > svg {
    flex-shrink: 0;
  }
`,WorkspaceInfo=emotion_styled_browser_esm.A.div`
  display: flex;
  align-items: center;
  gap: 0.625rem; /* 10px */
  min-width: 0;
`,WorkspaceName=emotion_styled_browser_esm.A.span`
  overflow: hidden;
  color: ${({theme})=>theme.neutral[900]};
  white-space: nowrap;
  text-overflow: ellipsis;
  ${({theme})=>theme.text.label01};
`;WorkspaceSwitcher.__docgenInfo={description:"지금 워크스페이스의 이름을 보여 주고, 누르면 다른 워크스페이스로 옮겨 가거나 새로 만들거나 나갈 수 있는 메뉴를 여는 버튼.\n\n사이드바 맨 위에 둬요. 메뉴는 이름 바로 아래로 펼쳐지고, 감싸는 영역의 폭을 그대로 써요.\n닫힌 메뉴는 `useExitAnimation`이 접히는 애니메이션이 끝날 때까지 조금 더 그려 둬요.",methods:[],displayName:"WorkspaceSwitcher"}},"./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _api_dto_workspace__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/api/dto/workspace.ts"),_api_httpClient__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/api/httpClient/index.ts");const WORKSPACE_API_PATH=workspaceId=>`/api/v1/workspaces/${workspaceId}`;__webpack_require__.d(__webpack_exports__,["O",0,async workspaceId=>{const response=await(0,_api_httpClient__WEBPACK_IMPORTED_MODULE_1__.ok)({method:"get",url:WORKSPACE_API_PATH(workspaceId)});return new _api_dto_workspace__WEBPACK_IMPORTED_MODULE_0__.kV(response.data)},"h",0,WORKSPACE_API_PATH])},"./src/shared/api/queries/useWorkspaceQuery/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _api_fetch_api_v1_workspaces_workspaceId___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/api/fetch/api/v1/workspaces/[workspaceId]/index.ts"),_api_queryKey_workspace__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/api/queryKey/workspace.ts"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@tanstack+react-query@5.102.0_react@19.2.8/node_modules/@tanstack/react-query/build/modern/useQuery.js");const __WEBPACK_DEFAULT_EXPORT__=({workspaceId})=>(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.I)({queryKey:_api_queryKey_workspace__WEBPACK_IMPORTED_MODULE_1__.O.detail(workspaceId),queryFn:()=>(0,_api_fetch_api_v1_workspaces_workspaceId___WEBPACK_IMPORTED_MODULE_0__.O)(workspaceId),enabled:Number.isInteger(workspaceId)});__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/components/primitives/ui/Avatar/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>Avatar});var _path,emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),_excluded=["size"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const avatarGlyph=function SvgAvatarGlyph(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",width:size,height:size,focusable:"false","aria-hidden":"true"},props),_path||(_path=react.createElement("path",{fill:"currentColor",d:"M12 12.133c1.533 0 2.733-1.266 2.733-2.733S13.533 6.666 12 6.666 9.267 7.934 9.267 9.4s1.2 2.733 2.733 2.733M12 13.533c-2.667 0-4.8 1.534-4.8 3.467 0 .2.133.333.333.333h8.934c.2 0 .333-.133.333-.333 0-1.934-2.133-3.467-4.8-3.467"})))};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function Avatar({label,src,name,size=32,className}){const[isImageBroken,setIsImageBroken]=(0,react.useState)(!1),initial=name?.trim().charAt(0)??"",canShowImage=Boolean(src)&&!isImageBroken;return(0,emotion_react_jsx_runtime_browser_esm.Y)(Root,{className,role:"img","aria-label":label,$size:size,$hasImage:canShowImage,children:canShowImage?(0,emotion_react_jsx_runtime_browser_esm.Y)(Image,{src,alt:"",onError:()=>setIsImageBroken(!0)}):initial?(0,emotion_react_jsx_runtime_browser_esm.Y)(Initial,{$size:size,children:initial}):(0,emotion_react_jsx_runtime_browser_esm.Y)(avatarGlyph,{size:Math.round(.7*size)})})}const Root=emotion_styled_browser_esm.A.span`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${({$size})=>$size/16}rem;
  height: ${({$size})=>$size/16}rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({theme,$hasImage})=>$hasImage?theme.neutral[200]:theme.neutral[800]};
  color: ${({theme})=>theme.neutral[0]};
`,Image=emotion_styled_browser_esm.A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Initial=emotion_styled_browser_esm.A.span`
  ${({theme,$size})=>$size>=32?theme.text.caption02:theme.text.caption01};
`;Avatar.__docgenInfo={description:"원형 아바타.",methods:[],displayName:"Avatar",props:{label:{required:!0,tsType:{name:"string"},description:"접근성 이름. 누구의 아바타인지 알려줘요"},src:{required:!1,tsType:{name:"string"},description:"프로필 이미지 URL. 없거나 불러오지 못하면 이름 첫 글자로 대신해요"},name:{required:!1,tsType:{name:"string"},description:"이미지를 못 쓸 때 첫 글자를 딸 이름. 이것도 없으면 기본 글리프를 그려요"},size:{required:!1,tsType:{name:"number"},description:"지름(px). 사이드바 워크스페이스는 24, GNB는 32",defaultValue:{value:"32",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/shared/components/primitives/ui/Divider/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>Divider});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function Divider({label,...props}){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.FD)(Container,{role:"separator",...props,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(Line,{}),label&&(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.FD)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.FK,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(Label,{children:label}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(Line,{})]})]})}const Container=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* 12px */
  width: 100%;
`,Line=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.span`
  flex: 1 0 0;
  min-width: 1px;
  height: 1px;
  background-color: ${({theme})=>theme.neutral[200]};
`,Label=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.span`
  flex-shrink: 0;
  color: ${({theme})=>theme.neutral[400]};
  white-space: nowrap;
  ${({theme})=>theme.text.caption01};
`;Divider.__docgenInfo={description:"콘텐츠를 가로로 나누는 구분선.",methods:[],displayName:"Divider",props:{label:{required:!1,tsType:{name:"string"},description:"선 가운데에 넣을 짧은 글자. `또는`처럼 두 선택지를 나눌 때 써요."}},composes:["HTMLAttributes"]}},"./src/shared/components/primitives/ui/MemberSelectDialog/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>MemberSelectDialog});var _rect,_circle,breakpoint=__webpack_require__("./src/shared/constants/breakpoint/index.ts"),emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Pop=__webpack_require__("./src/shared/components/primitives/animation/Pop/index.tsx"),Avatar=__webpack_require__("./src/shared/components/primitives/ui/Avatar/index.tsx"),Button=__webpack_require__("./src/shared/components/primitives/ui/Button/index.tsx"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"),_excluded=["size"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const radioSelected=function SvgRadioSelected(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",width:size,height:size,focusable:"false","aria-hidden":"true"},props),_rect||(_rect=react.createElement("rect",{width:18.5,height:18.5,x:.75,y:.75,stroke:"currentColor",strokeWidth:1.5,rx:9.25})),_circle||(_circle=react.createElement("circle",{cx:10,cy:10,r:5,fill:"currentColor"})))};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function MemberSelectDialog({title,description,members,memberListNotice,selectedMemberId,onSelectMember,cancelLabel,confirmLabel,linkLabel,onCancel,onConfirm,onLinkClick,...rest}){const id=(0,react.useId)(),titleId=`${id}-title`;return(0,emotion_react_jsx_runtime_browser_esm.FD)(Container,{...rest,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Head,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Title,{id:titleId,children:title}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Description,{children:description})]}),memberListNotice?(0,emotion_react_jsx_runtime_browser_esm.Y)(MemberListNoticeWrapper,{children:memberListNotice}):(0,emotion_react_jsx_runtime_browser_esm.Y)(MemberList,{role:"radiogroup","aria-labelledby":titleId,children:members.map(({id:memberId,name})=>{const isSelected=memberId===selectedMemberId;return(0,emotion_react_jsx_runtime_browser_esm.FD)(MemberItem,{$isSelected:isSelected,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(AvatarWrapper,{"aria-hidden":!0,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Avatar.A,{label:name,name,size:32})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(MemberName,{children:name}),(0,emotion_react_jsx_runtime_browser_esm.Y)(HiddenRadio,{type:"radio",name:id,checked:isSelected,onChange:()=>onSelectMember(memberId)}),isSelected?(0,emotion_react_jsx_runtime_browser_esm.Y)(SelectedRadio,{size:20}):(0,emotion_react_jsx_runtime_browser_esm.Y)(EmptyRadio,{})]},memberId)})}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Footer,{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Actions,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{size:"md",variant:"outline",isFullWidth:!0,onClick:onCancel,children:cancelLabel}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{size:"md",variant:"danger",isFullWidth:!0,disabled:null===selectedMemberId,onClick:onConfirm,children:confirmLabel})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(TextLink,{type:"button",onClick:onLinkClick,children:linkLabel})]})]})}const Container=(0,emotion_styled_browser_esm.A)(Pop.A)`
  display: flex;
  flex-direction: column;
  gap: 2rem; /* 32px */
  width: 100%;
  max-width: 32.5rem; /* 520px */
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
  text-align: center;
  overflow-wrap: break-word;
`,Title=emotion_styled_browser_esm.A.h2`
  ${({theme})=>theme.text.heading02};
  color: ${({theme})=>theme.neutral[900]};
`,Description=emotion_styled_browser_esm.A.p`
  ${({theme})=>theme.text.body01};
  color: ${({theme})=>theme.neutral[600]};
  white-space: pre-line;
`,MemberList=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 0.25rem; /* 4px */
  max-height: 17.25rem; /* 276px — 5명(행 52px, 간격 4px)까지 보이고 넘치면 스크롤해요 */
  overflow-y: auto;
`,MemberListNoticeWrapper=emotion_styled_browser_esm.A.div`
  display: flex;
  justify-content: center;
`,MemberItem=emotion_styled_browser_esm.A.label`
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.75rem; /* 12px */
  padding: 0.625rem 0.75rem; /* 10px 12px */
  border-radius: 0.75rem; /* 12px */
  background-color: ${({theme,$isSelected})=>$isSelected?theme.neutral[100]:"transparent"};
  cursor: pointer;

  &:has(:focus-visible) {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: -2px;
  }
`,AvatarWrapper=emotion_styled_browser_esm.A.span`
  display: flex;
  flex-shrink: 0;
`,MemberName=emotion_styled_browser_esm.A.span`
  flex: 1;
  min-width: 0;
  overflow-wrap: break-word;
  ${({theme})=>theme.text.body01};
  color: ${({theme})=>theme.neutral[900]};
`,HiddenRadio=emotion_styled_browser_esm.A.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
`,SelectedRadio=(0,emotion_styled_browser_esm.A)(radioSelected)`
  flex-shrink: 0;
  color: ${({theme})=>theme.primary};
`,EmptyRadio=emotion_styled_browser_esm.A.span`
  flex-shrink: 0;
  width: 1.25rem; /* 20px */
  height: 1.25rem; /* 20px */
  border: 1.5px solid ${({theme})=>theme.neutral[300]};
  border-radius: 50%;
`,Footer=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; /* 16px */
`,Actions=emotion_styled_browser_esm.A.div`
  display: flex;
  gap: 0.5rem; /* 8px */
  width: 100%;
`,TextLink=emotion_styled_browser_esm.A.button`
  ${({theme})=>theme.text.caption02};
  color: ${({theme})=>theme.sub.warning[700]};

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`;MemberSelectDialog.__docgenInfo={description:"멤버 하나를 고르는 모달 카드.\n\n되돌릴 수 없는 동작에 쓰는 창이라 주 버튼을 경고색으로 그려요.",methods:[],displayName:"MemberSelectDialog",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"한 줄 제목"},description:{required:!0,tsType:{name:"ReactNode"},description:"제목 아래 안내. 최대 두 줄이에요. 줄바꿈은 의미 단위로 직접 넣어요"},members:{required:!0,tsType:{name:"Array",elements:[{name:"MemberSelectDialogMember"}],raw:"MemberSelectDialogMember[]"},description:"고를 수 있는 멤버 목록. 5명이 넘으면 목록 안에서 스크롤해요"},memberListNotice:{required:!1,tsType:{name:"ReactNode"},description:"멤버 목록 자리에 대신 둘 안내. 있으면 목록을 그리지 않아요. 예: 목록을 불러오지 못했을 때의 `InlineError`"},selectedMemberId:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"고른 멤버의 ID. 아직 고르지 않았으면 `null`이고, 그동안 주 버튼은 누를 수 없어요"},onSelectMember:{required:!0,tsType:{name:"signature",type:"function",raw:"(memberId: number) => void",signature:{arguments:[{type:{name:"number"},name:"memberId"}],return:{name:"void"}}},description:"멤버를 골랐을 때 할 일"},cancelLabel:{required:!0,tsType:{name:"string"},description:"왼쪽 보조 버튼 문구. 예: `취소`"},confirmLabel:{required:!0,tsType:{name:"string"},description:"오른쪽 주 버튼 문구. 예: `넘기고 나가기`"},linkLabel:{required:!0,tsType:{name:"string"},description:"버튼 아래 경고색 텍스트 링크 문구. 예: `워크스페이스 삭제하기`"},onCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"보조 버튼을 눌렀을 때 할 일"},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"주 버튼을 눌렀을 때 할 일"},onLinkClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"텍스트 링크를 눌렀을 때 할 일"}},composes:["Omit"]}},"./src/shared/hooks/common/useOutsideClick/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=({isEnabled,onOutsideClick})=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),handlerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onOutsideClick);return handlerRef.current=onOutsideClick,(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!isEnabled)return;const handlePointerDown=e=>{e.target instanceof Node&&(ref.current?.contains(e.target)||handlerRef.current())};return document.addEventListener("pointerdown",handlePointerDown),()=>document.removeEventListener("pointerdown",handlePointerDown)},[isEnabled]),{ref}};__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/hooks/domain/workspace/useNavigateToWorkspaceCreate/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _routes_PATH_ROUTE__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/routes/PATH_ROUTE.ts"),react_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react-router@8.3.0_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/react-router/dist/production/lib/hooks.js");const __WEBPACK_DEFAULT_EXPORT__=()=>{const navigate=(0,react_router__WEBPACK_IMPORTED_MODULE_1__.Zp)();return{navigateToWorkspaceCreate:()=>{navigate(_routes_PATH_ROUTE__WEBPACK_IMPORTED_MODULE_0__.WS.WORKSPACE_CREATE)}}};__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])}}]);
//# sourceMappingURL=19.7111bf6c.iframe.bundle.js.map