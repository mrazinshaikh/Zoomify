/**
 * @fileOverview
 * This is an ECMAScript module (ESM) file for the ZoomifyJs JavaScript library.
 * It is designed for usage in modern JavaScript environments, supporting ECMAScript modules.
 *
 * @version 0.2.0
 * @see {@link https://github.com/mrazinshaikh/zoomifyjs/} for the latest version and documentation.
 *
 * @description
 * ZoomifyJs is a versatile JavaScript library that provides image zoom capabilities.
 * This ECMAScript module is suitable for modern web development, leveraging native module syntax
 * and allowing for a more modular code structure.
 *
 * @module ZoomifyJs
 * @license MIT
 */

var t=Object.defineProperty,e=(e,o,n)=>(((e,o,n)=>{o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n})(e,"symbol"!=typeof o?o+"":o,n),n);class o{constructor(t){e(this,"ALLOWED_OPTIONS",["selector","transitionDuration","easing","scale","clickToZoom","buttonText"]),e(this,"DEFAULT_SETTINGS",{selector:".zoomifyJs",transitionDuration:300,easing:"ease-in-out",scale:2,clickToZoom:!1,buttonText:"Click to zoom"});const o=this.DEFAULT_SETTINGS,n=t;if("string"==typeof t)o.selector=t;else for(const t in n)"string"==typeof t&&this.ALLOWED_OPTIONS.includes(t)&&(o[t]=n[t]);return o}}class n extends Error{constructor(t="Invalid element given. Element should be valid HTMLImageElement."){super(t),this.name="InvalidHTMLImageElementError"}}class i{constructor(t={}){this.zoomedIn=!1,this.config=new o(t),this.handleFocusZoom=t=>{t.preventDefault(),this.animating||(this.animating=!0,requestAnimationFrame((()=>{this.focusZoom.call(this,t),this.animating=!1})))},this.handleFocusZoomOut=t=>this.focusZoomOut.call(this,t),this.handleTouchEnd=t=>this.touchEnd.call(this,t),this.handleMouseEnter=t=>this.mouseEnter.call(this,t),this.handleMouseOut=t=>this.mouseOut.call(this,t),this.init(),this.timeout=null,this.lastTap=0}getElement(t=!1){if(this.element&&!t||(this.element="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector),!(this.element instanceof HTMLImageElement))throw new n;return this.element}init(){const t=this.getElement();if(t.style.cursor="zoom-in","ontouchstart"in window&&(this.touch=!0),this.touchLogic.call(this),this.config.clickToZoom)return t.zoomifyJs=this,void this.createClickToButton();this.setZoomEvents()}createClickToButton(){const t=this.getElement(),e=document.createElement("button");e.setAttribute("id","zoomifyJs-click-to-zoom"),e.style.cssText="border: 0; background: rgba(0,0,0, 0.5); padding: 10px 15px; border-radius: 20px; position: absolute; bottom: 15px; z-index: 10; left: 0; right: 0; width: max-content; color: white; margin: 0 auto; pointer-events: none;",e.textContent=this.config.buttonText,t.parentElement.style.position="relative",t.parentElement.appendChild(e),t.addEventListener("click",(t=>{const o=this.zoomedIn;this.zoomedIn=!this.zoomedIn,this.setZoomEvents(o),this.mouseEnter(t),this.zoomIn(),e.style.display=o?"block":"none"}))}zoomIn(){const t=this.getElement();t.style.transition=`scale ${this.config.transitionDuration}ms ${this.config.easing}`,this.focusZoom({target:t},!0)}zoomOut(){const t=this.getElement();this.focusZoomOut({target:t})}enableZoom(t){return this.zoom=t,t?this.zoomIn():this.zoomOut()}setZoomEvents(t=!1){const e=this.getElement();if(e.zoomifyJs=this,e.attributes.zoomify&&""!==e.attributes.zoomify.value){(new Image).src=e.attributes.zoomify.value}if(["mouseenter"].forEach((o=>{t?e.removeEventListener(o,this.handleMouseEnter):e.addEventListener(o,this.handleMouseEnter,{passive:!0})})),["mouseout"].forEach((o=>{t?e.removeEventListener(o,this.handleMouseOut):e.addEventListener(o,this.handleMouseOut,{passive:!0})})),["mousemove"].forEach((o=>{t?e.removeEventListener(o,this.handleFocusZoom):e.addEventListener(o,this.handleFocusZoom)})),["mouseleave"].forEach((o=>{t?e.removeEventListener(o,this.handleFocusZoomOut):e.addEventListener(o,this.handleFocusZoomOut,{passive:!0})})),["touchend"].forEach((o=>{t?e.removeEventListener(o,this.handleTouchEnd):e.addEventListener(o,this.handleTouchEnd)})),t)this.focusZoomOut({target:e}),e.removeEventListener("contextmenu",this.preventContextMenu),"IMG"===e.tagName&&"PICTURE"===e.parentElement.tagName&&setTimeout((()=>{e.parentElement.style.removeProperty("display"),e.parentElement.style.removeProperty("overflow"),e.parentElement.style.removeProperty("max-height"),e.parentElement.style.removeProperty("max-width"),e.style.removeProperty("transition"),e.removeAttribute("data-src")}),this.config.transitionDuration);else{if(e.addEventListener("contextmenu",this.preventContextMenu),e.style.transition=`scale ${this.config.transitionDuration}ms ${this.config.easing}`,"IMG"===e.tagName&&"PICTURE"===e.parentElement.tagName){const t=e.getBoundingClientRect();e.parentElement.style.display="block",e.parentElement.style.overflow="hidden",e.parentElement.style.maxHeight=`${t.height}px`,e.parentElement.style.maxWidth=`${t.width}px`}e.zoomifyJs=this}}preventContextMenu(t){t.preventDefault()}touchLogic(t=!1){let e,o,n,i,s=0,r=0;if(t)return s=0,void(r=0);const a=this.getElement();function l(t){if(!this.zoomedIn)return;t.preventDefault(),n=t.touches[0].clientX,i=t.touches[0].clientY;const l=.5*(n-e),c=.5*(i-o),h=Math.sqrt(l*l+c*c);let m="";m=Math.abs(l)>Math.abs(c)?l>0?"right":"left":c>0?"down":"up",console.log(`Direction: ${m}, Distance: ${h}`);const u=a.getBoundingClientRect(),d=a.parentElement.getBoundingClientRect(),g=s+l,f=r+c;(u.left<=d.left||g<s)&&(u.right>=d.right||g>s)&&(s=g),(u.top<=d.top||f<r)&&(u.bottom>=d.bottom||f>r)&&(r=f),a.style.transform=`translate(${s}px, ${r}px)`,e=n,o=i}a.addEventListener("touchstart",(function(t){e=t.touches[0].clientX,o=t.touches[0].clientY,n=e,i=o})),a.addEventListener("touchmove",(t=>{t.preventDefault(),this.animatingMove||(this.animatingMove=!0,requestAnimationFrame((()=>{l.call(this,t),this.animatingMove=!1})))}))}inBoundaries(t,e,o){const n=t.left+window.scrollX,i=t.top+window.scrollY,s=t.height,r=t.width;return o<=i+s&&o>=i&&e<=n+r&&e>=n}focusZoom(t,e=!1){const o=t.target,n=o.getBoundingClientRect();let i=t.pageX,s=t.pageY;if("TouchEvent"===t.constructor.name&&(i=t.changedTouches[0].pageX,s=t.changedTouches[0].pageY),!e&&!this.inBoundaries(n,i,s))return;const r=(i-(n.left+window.scrollX))/n.width*100,a=(s-(n.top+window.scrollY))/n.height*100;o.style.scale=this.config.scale,o.style.transformOrigin=`${r}% ${a}%`,this.zoomedIn=!0}focusZoomOut(t){const e=t.target;setTimeout((()=>{e.style.removeProperty("scale"),e.style.removeProperty("transform"),this.touchLogic(!0),setTimeout((()=>{e.style.removeProperty("transform-origin")}),this.config.transitionDuration),this.zoomedIn=!1}),100)}touchEnd(t){if(!this.zoomedIn)return;const e=(new Date).getTime(),o=e-this.lastTap;clearTimeout(this.timeout),o<500&&o>0?(t.preventDefault(),this.focusZoomOut.call(this,t)):this.timeout=setTimeout((()=>{clearTimeout(this.timeout)}),500),this.lastTap=e}mouseEnter(t){const e=t.target;e.attributes.zoomify&&""!==e.attributes.zoomify.value&&(e.setAttribute("data-src",e.attributes.src.value),e.attributes.src.value=e.attributes.zoomify.value)}mouseOut(t){const e=t.target,o=()=>{e.attributes.zoomify&&""!==e.attributes.zoomify.value&&(e.attributes.src.value=e.attributes["data-src"].value),e.removeEventListener("transitionend",o)};e.addEventListener("transitionend",o,{once:!0})}destroy(){this.zoomOut(),this.setZoomEvents(!0),this.config.clickToZoom&&this.getElement().parentElement.querySelector("#zoomifyJs-click-to-zoom").remove(),delete this.getElement().zoomifyJs}}export{i as default};
