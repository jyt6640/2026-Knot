"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8207],{"./src/shared/components/composites/Tabs/index.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>Tabs});var tabMotion=__webpack_require__("./src/shared/constants/tabMotion/index.ts"),emotion_styled_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_suppor_1e45ff7b04d06d3f2b60330d973b73ec/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),useSlidingIndicator=__webpack_require__("./src/shared/hooks/common/useSlidingIndicator/index.ts");var emotion_react_jsx_runtime_browser_esm=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.18_react@19.2.8_supports-color@10.2.2/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function Tabs({id,items,value,onChange,panelId,"aria-label":ariaLabel}){const{handleKeyDown}=(({values,value,onChange})=>({handleKeyDown:event=>{const currentIndex=values.indexOf(value),lastIndex=values.length-1,nextIndex={ArrowRight:currentIndex===lastIndex?0:currentIndex+1,ArrowLeft:0===currentIndex?lastIndex:currentIndex-1,Home:0,End:lastIndex}[event.key];if(void 0===nextIndex)return;event.preventDefault();const nextValue=values[nextIndex];onChange(nextValue);const nextTab=event.currentTarget.parentElement?.querySelector(`[data-value="${nextValue}"]`);nextTab?.focus()}}))({values:items.map(item=>item.value),value,onChange}),activeTabIndex=items.findIndex(item=>item.value===value),{containerRef,indicatorRef}=(0,useSlidingIndicator.A)({activeTabIndex,activeTabSelector:'[aria-selected="true"]'});return(0,emotion_react_jsx_runtime_browser_esm.FD)(TabList,{ref:containerRef,role:"tablist","aria-label":ariaLabel,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Indicator,{ref:indicatorRef,"aria-hidden":"true",hidden:-1===activeTabIndex}),items.map(item=>{const isSelected=item.value===value;return(0,emotion_react_jsx_runtime_browser_esm.Y)(Tab,{type:"button",role:"tab",id:`${id}-${item.value}`,"data-value":item.value,"aria-selected":isSelected,"aria-controls":panelId,tabIndex:isSelected?0:-1,$isSelected:isSelected,onClick:()=>{isSelected||onChange(item.value)},onKeyDown:handleKeyDown,children:item.label},item.value)})]})}const TabList=emotion_styled_browser_esm.A.div`
  position: relative; /* 알약이 이 자리를 기준으로 탭 아래에 놓여요 */
  display: inline-flex;
  /* 세로로 쌓는 부모가 늘려도 탭 묶음은 글자 폭만 차지해요 */
  width: fit-content;
  gap: 0.125rem; /* 2px */
  padding: 0.25rem; /* 4px */
  border-radius: 62.4375rem; /* 999px */
  background-color: ${({theme})=>theme.neutral[100]};
`,Indicator=emotion_styled_browser_esm.A.span`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 62.4375rem;
  background-color: ${({theme})=>theme.neutral[800]};
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    transition-property: translate, width;
    transition-duration: 0s;
    transition-timing-function: ${tabMotion.fE};

    &[data-sliding="true"] {
      transition-duration: ${240}ms;
    }
  }
`,Tab=emotion_styled_browser_esm.A.button`
  position: relative; /* 먼저 놓인 알약보다 위에 글자를 그려요 */
  ${({theme})=>theme.text.caption02};
  padding: 0.375rem 1rem; /* 6px 16px */
  border-radius: 62.4375rem; /* 999px */
  color: ${({theme,$isSelected})=>$isSelected?theme.neutral[0]:theme.neutral[600]};
  white-space: nowrap;
  cursor: pointer;

  /* 글자색은 알약이 지나가는 동안 같은 시간에 바꿔요 */
  @media (prefers-reduced-motion: no-preference) {
    transition-property: color, transform;
    transition-duration:
      ${240}ms, ${200}ms;
    transition-timing-function: ${tabMotion.fE}, ${tabMotion.yA};

    &:active {
      transform: scale(${.96});
      transition-duration:
        ${240}ms, ${100}ms;
      transition-timing-function: ${tabMotion.fE}, ${tabMotion.fE};
    }
  }

  &:hover:not([aria-selected="true"]) {
    color: ${({theme})=>theme.neutral[800]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.sub.accent[500]};
    outline-offset: 2px;
  }
`;Tabs.__docgenInfo={description:'알약 모양 탭 목록. 고른 탭은 진한 알약으로, 나머지는 글자만 보여요.\n\n어느 탭을 골랐는지는 쓰는 쪽이 들고 있어요(`value` · `onChange`). 주소처럼 바깥에 있는 상태가 탭을 정하는 경우가 많아,\n이 컴포넌트는 고른 값을 기억하지 않고 그리기와 키보드 조작만 맡아요. 화살표 · Home · End로 옮기면 바로 골라요.\n\n움직임은 GNB 내비 필과 같아요. 진한 알약 하나가 탭 사이를 미끄러지며 물방울처럼 늘어났다가 맺히고,\n누르는 동안 탭이 살짝 작아졌다가 떼면 통 튀어 돌아와요. 고른 탭을 다시 누르면 알약도 함께 눌렸다가 제자리에서 맺혀요.\n움직임 줄이기를 켜 두면 눌림, 미끄러짐, 물방울 없이 바로 바뀌어요.\n탭이 가리키는 영역은 쓰는 쪽이 `role="tabpanel"`로 그리고, `panelId`와 탭 id(`${id}-${value}`)로 서로 이어요.',methods:[],displayName:"Tabs",props:{id:{required:!0,tsType:{name:"string"},description:'탭 요소 id의 앞부분. 탭 하나의 id는 `${id}-${value}`라, 탭이 가리키는 영역(`role="tabpanel"`)이\n`aria-labelledby`로 이 id를 가리킬 수 있어요'},items:{required:!0,tsType:{name:"unknown"},description:"탭 목록. 적힌 순서대로 왼쪽부터 놓아요"},value:{required:!0,tsType:{name:"Value"},description:"지금 고른 탭의 값"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: Value) => void",signature:{arguments:[{type:{name:"Value"},name:"value"}],return:{name:"void"}}},description:"다른 탭을 골랐을 때. 이미 고른 탭을 다시 눌러도 부르지 않아요"},panelId:{required:!0,tsType:{name:"string"},description:"탭이 가리키는 영역의 id. 모든 탭의 `aria-controls`가 돼요"},"aria-label":{required:!0,tsType:{name:"string"},description:"탭 목록이 무엇을 고르는지 알리는 이름"}}}},"./src/shared/constants/tabMotion/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,["KD",0,{x:1.08,y:.94},"_H",0,{stretch:.2,swell:.5,settle:.75},"fE",0,"cubic-bezier(0.22, 1, 0.36, 1)","jc",0,"cubic-bezier(0.37, 0, 0.63, 1)","wq",0,{swell:.4,settle:.72},"yA",0,"cubic-bezier(0.34, 1.56, 0.64, 1)"])},"./src/shared/hooks/common/useSlidingIndicator/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>common_useSlidingIndicator});var tabMotion=__webpack_require__("./src/shared/constants/tabMotion/index.ts"),react=__webpack_require__("../../../../Users/yongtae/Desktop/knot-personal/frontend/node_modules/.pnpm/react@19.2.8/node_modules/react/index.js");const isOnActiveTab=(target,activeTabSelector)=>target instanceof Element&&null!==target.closest(`button${activeTabSelector}`),settleKeyframes=({swellOffset,settleOffset})=>[{offset:swellOffset,scale:String(1.06),easing:tabMotion.jc},{offset:settleOffset,scale:String(.985),easing:tabMotion.jc},{offset:1,scale:"1"}],common_useIndicatorDroplet=({containerRef,indicatorRef,activeTabSelector})=>{const dropletRef=(0,react.useRef)(null),morph=(0,react.useCallback)(({keyframes,duration,isHeld=!1})=>{const indicator=indicatorRef.current;if(!indicator||"function"!=typeof indicator.animate||window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;const currentScale=(element=>{const{scale}=getComputedStyle(element);return"none"===scale?"1":scale})(indicator);dropletRef.current?.cancel(),dropletRef.current=indicator.animate([{scale:currentScale,easing:tabMotion.fE},...keyframes],{duration,fill:isHeld?"forwards":"none"})},[indicatorRef]),playSlideDroplet=(0,react.useCallback)(()=>morph({keyframes:[{offset:tabMotion._H.stretch,scale:`${tabMotion.KD.x} ${tabMotion.KD.y}`,easing:tabMotion.jc},...settleKeyframes({swellOffset:tabMotion._H.swell,settleOffset:tabMotion._H.settle})],duration:380}),[morph]);return(0,react.useEffect)(()=>{const container=containerRef.current;if(!container)return;const playTapDroplet=()=>morph({keyframes:settleKeyframes({swellOffset:tabMotion.wq.swell,settleOffset:tabMotion.wq.settle}),duration:320}),handleRelease=()=>{window.removeEventListener("pointerup",handleRelease),window.removeEventListener("pointercancel",handleRelease),playTapDroplet()},handlePointerDown=event=>{0===event.button&&isOnActiveTab(event.target,activeTabSelector)&&(morph({keyframes:[{scale:String(.96)}],duration:100,isHeld:!0}),window.addEventListener("pointerup",handleRelease),window.addEventListener("pointercancel",handleRelease))},handleClick=event=>{0===event.detail&&isOnActiveTab(event.target,activeTabSelector)&&playTapDroplet()};return container.addEventListener("pointerdown",handlePointerDown),container.addEventListener("click",handleClick),()=>{container.removeEventListener("pointerdown",handlePointerDown),container.removeEventListener("click",handleClick),window.removeEventListener("pointerup",handleRelease),window.removeEventListener("pointercancel",handleRelease)}},[containerRef,morph,activeTabSelector]),{playSlideDroplet}},placeIndicator=({container,indicator,activeTabSelector,isSliding})=>{const activeTab=container.querySelector(activeTabSelector);activeTab&&(indicator.dataset.sliding=String(isSliding),indicator.style.width=`${activeTab.offsetWidth}px`,indicator.style.height=`${activeTab.offsetHeight}px`,indicator.style.translate=`${activeTab.offsetLeft}px ${activeTab.offsetTop}px`)},common_useSlidingIndicator=({activeTabIndex,activeTabSelector})=>{const containerRef=(0,react.useRef)(null),indicatorRef=(0,react.useRef)(null),placedTabIndexRef=(0,react.useRef)(-1),{playSlideDroplet}=common_useIndicatorDroplet({containerRef,indicatorRef,activeTabSelector});return(0,react.useLayoutEffect)(()=>{const container=containerRef.current,indicator=indicatorRef.current;if(!container||!indicator)return;const placedTabIndex=placedTabIndexRef.current;if(placedTabIndexRef.current=activeTabIndex,-1===activeTabIndex)return;const isSliding=-1!==placedTabIndex&&placedTabIndex!==activeTabIndex;placeIndicator({container,indicator,activeTabSelector,isSliding}),isSliding&&playSlideDroplet()},[activeTabIndex,activeTabSelector,playSlideDroplet]),(0,react.useEffect)(()=>{const container=containerRef.current,indicator=indicatorRef.current;if(!container||!indicator||"undefined"==typeof ResizeObserver)return;const observer=new ResizeObserver(()=>placeIndicator({container,indicator,activeTabSelector,isSliding:!1}));return observer.observe(container),container.querySelectorAll("button").forEach(tab=>observer.observe(tab)),()=>observer.disconnect()},[activeTabSelector]),{containerRef,indicatorRef}}}}]);
//# sourceMappingURL=8207.b572ce61.iframe.bundle.js.map