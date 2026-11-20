"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9146],{"./src/shared/components/primitives/ui/OnboardingCard/index.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("storybook/test"),_primitives_layout_Spacing__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/components/primitives/layout/Spacing/index.tsx"),_primitives_ui_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/components/primitives/ui/Button/index.tsx"),_primitives_ui_CountTextField__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/components/primitives/ui/CountTextField/index.tsx"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/shared/components/primitives/ui/OnboardingCard/index.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Shared/OnboardingCard",component:___WEBPACK_IMPORTED_MODULE_4__.A,parameters:{design:{type:"figma",url:"https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=424-1193"},docs:{description:{component:"온보딩 화면에서 내용을 담는 흰 카드예요. 닉네임 입력처럼 가운데 카드 하나로 이뤄진 온보딩 화면에 씁니다.\n\n**크기**\n- 너비를 고정하지 않고 최대 너비만 둬요. 넓은 화면에서는 456px에서 멈추고, 좁아지면 화면을 따라 줄어들어요.\n- 안쪽 내용 폭은 좌우 여백 48px을 뺀 360px이에요.\n- 피그마 원본은 460px이지만 여백 48과 내용 360을 더하면 456이에요. 남는 4px은 내용이 바뀌면 따라 바뀌어야 하는 값이라 보고 456으로 두었어요.\n\n**쓰는 법**\n- 자식 사이 간격은 자리마다 달라서(12, 24) 카드가 정하지 않아요. 쓰는 쪽에서 `Spacing`으로 벌려요.\n- 홈 화면 카드와는 여백·간격이 달라서(48/12 vs 20/32) 같은 컴포넌트로 묶지 않았어요."}}},args:{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FK,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)("h1",{children:"닉네임"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_primitives_layout_Spacing__WEBPACK_IMPORTED_MODULE_1__.A,{size:.75}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_primitives_ui_CountTextField__WEBPACK_IMPORTED_MODULE_3__.A,{value:"",onChange:(0,storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),maxLength:20,placeholder:"닉네임","aria-label":"닉네임"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_primitives_layout_Spacing__WEBPACK_IMPORTED_MODULE_1__.A,{size:1.5}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_primitives_ui_Button__WEBPACK_IMPORTED_MODULE_2__.A,{size:"lg",isFullWidth:!0,disabled:!0,children:"확인"})]})}},Default={},Narrow={decorators:[Story=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)("div",{style:{width:"20rem"},children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(Story,{})})]};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source},description:{story:"넓은 화면에서의 모양이에요. 456px에서 멈춰요. 예: 닉네임 입력 화면",...Default.parameters?.docs?.description}}},Narrow.parameters={...Narrow.parameters,docs:{...Narrow.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    width: "20rem"\n  }}>\n        <Story />\n      </div>]\n}',...Narrow.parameters?.docs?.source},description:{story:"카드보다 좁은 화면이에요. 카드가 화면을 따라 줄어들어요.",...Narrow.parameters?.docs?.description}}},__webpack_require__.d(__webpack_exports__,["Default",0,Default,"Narrow",0,Narrow,"__namedExportsOrder",0,["Default","Narrow"],"default",0,__WEBPACK_DEFAULT_EXPORT__])},"./src/shared/components/primitives/layout/Spacing/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js").A.div`
  flex-shrink: 0;
  ${({direction="vertical",size})=>{const value="number"==typeof size?`${size}rem`:size;return"vertical"===direction?`height: ${value};`:`width: ${value};`}}
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
`;Button.__docgenInfo={description:"액션을 실행하는 버튼.",methods:[],displayName:"Button",props:{size:{required:!1,tsType:{name:"union",raw:'"lg" | "md" | "sm"',elements:[{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"filled" | "outline" | "accent" | "danger"',elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"filled"',computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isFullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:'"button"',computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]}},"./src/shared/components/primitives/ui/OnboardingCard/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>OnboardingCard});var _constants_breakpoint__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/constants/breakpoint/index.ts"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_primitives_layout_Stack__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/components/primitives/layout/Stack/index.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function OnboardingCard({children,...props}){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(Root,{...props,children})}const Root=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(_primitives_layout_Stack__WEBPACK_IMPORTED_MODULE_2__.A)`
  width: 100%;
  max-width: 28.5rem; /* 456px = 360 + 좌우 padding 48 */
  padding: 3rem; /* 48px */
  border-radius: 1.5rem; /* 24px */
  background-color: ${({theme})=>theme.neutral[0]};
  box-shadow: ${({theme})=>theme.shadow02};

  /* 모바일은 안쪽 여백을 줄여 360px 화면에서도 입력칸과 버튼 폭을 지켜요 */
  ${_constants_breakpoint__WEBPACK_IMPORTED_MODULE_0__.Wi.mobile} {
    padding: 2rem 1.5rem; /* 32px 24px */
  }
`;OnboardingCard.__docgenInfo={description:"온보딩 플로우에서 내용을 담는 흰 카드.",methods:[],displayName:"OnboardingCard",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]}},"./src/shared/components/primitives/ui/Spinner/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>Spinner});var emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const spinnerMaskurl_namespaceObject="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTIyLjI4NDMgOC4zMjg1M0MyMi44NDYgOC4xMjc5OSAyMy4xNDMzIDcuNTA3MzkgMjIuODkzMSA2Ljk2NTk0QzIxLjgxMDIgNC42MjI2IDE5Ljk5NTIgMi42ODEyMSAxNy43MDc2IDEuNDQ0MjdDMTUuMTAyMSAwLjAzNTQzMjIgMTIuMDY3NSAtMC4zNTk5NzkgOS4xODc5NyAwLjMzNDEzMUM2LjMwODQxIDEuMDI4MjQgMy43ODczMSAyLjc2MjgyIDIuMTA5ODQgNS4yMDQwN0MwLjQzMjM1NiA3LjY0NTMyIC0wLjI4Mjk2NSAxMC42MjA3IDAuMTAxNTMgMTMuNTU3N0MwLjQ4NjAyNSAxNi40OTQ3IDEuOTQzMTcgMTkuMTg1NyA0LjE5MjU0IDIxLjExMjhDNi40NDE5MSAyMy4wNCA5LjMyNDU2IDI0LjA2NzEgMTIuMjg1OCAyMy45OTY2QzE1LjI0NjkgMjMuOTI2MSAxOC4wNzc0IDIyLjc2MjggMjAuMjMyNSAyMC43MzA4QzIyLjEyNDYgMTguOTQ2NiAyMy4zNzg3IDE2LjYwMzQgMjMuODIxOCAxNC4wNjAzQzIzLjkyNDIgMTMuNDcyNyAyMy40NzczIDEyLjk0OTUgMjIuODgyOCAxMi45MDA0VjEyLjkwMDRDMjIuMjg4NCAxMi44NTEyIDIxLjc3MjYgMTMuMjk1MiAyMS42NTg2IDEzLjg4MDdDMjEuMjY3IDE1Ljg5MjEgMjAuMjU0NiAxNy43NDExIDE4Ljc1MDYgMTkuMTU5MkMxNi45ODM1IDIwLjgyNTUgMTQuNjYyNSAyMS43Nzk0IDEyLjIzNDMgMjEuODM3MkM5LjgwNjE0IDIxLjg5NSA3LjQ0MjM3IDIxLjA1MjggNS41OTc4OCAxOS40NzI1QzMuNzUzNCAxNy44OTIyIDIuNTU4NTQgMTUuNjg1NiAyLjI0MzI1IDEzLjI3NzNDMS45Mjc5NyAxMC44NjkgMi41MTQ1MyA4LjQyOTE2IDMuODkwMDYgNi40MjczNEM1LjI2NTYgNC40MjU1MiA3LjMzMjkgMy4wMDMxNiA5LjY5NDE0IDIuNDMzOTlDMTIuMDU1NCAxLjg2NDgyIDE0LjU0MzcgMi4xODkwNSAxNi42ODAyIDMuMzQ0M0MxOC40OTg2IDQuMzI3NTEgMTkuOTUyOCA1Ljg1MzUzIDIwLjg0OSA3LjY5NjRDMjEuMTA5OSA4LjIzMjggMjEuNzIyNSA4LjUyOTA3IDIyLjI4NDMgOC4zMjg1M1Y4LjMyODUzWiIvPjwvc3ZnPgo=";var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function Spinner({size="1.5rem",...props}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(Root,{$size:size,"aria-hidden":!0,...props})}const spin=emotion_react_browser_esm.i7`
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
`;Spinner.__docgenInfo={description:"회전하는 로딩 표시.",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"string"},description:"지름. 부모 글자 크기를 따라가게 하려면 `1em`을 넘기면 돼요.",defaultValue:{value:'"1.5rem"',computed:!1}}},composes:["HTMLAttributes"]}},"./src/shared/constants/breakpoint/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){const SCREEN_CONDITION={belowDesktop:`(max-width: ${1024-.02}px)`,mobile:`(max-width: ${768-.02}px)`},MEDIA_QUERY={belowDesktop:`@media ${SCREEN_CONDITION.belowDesktop}`,mobile:`@media ${SCREEN_CONDITION.mobile}`};__webpack_require__.d(__webpack_exports__,["Wi",0,MEDIA_QUERY,"nO",0,SCREEN_CONDITION])}}]);
//# sourceMappingURL=shared-components-primitives-ui-OnboardingCard-index-stories.393bb8db.iframe.bundle.js.map