!function(){var e,t,o,n,r={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},a=r,i=!1,l=!1,s={x:0,y:0},c=!1,u=document.documentElement,d=[],m=/^Mac/.test(navigator.platform),h={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},f={37:1,38:1,39:1,40:1};function p(){if(!c&&document.body){c=!0;var n=document.body,r=document.documentElement,s=window.innerHeight,d=n.scrollHeight;if(u=0<=document.compatMode.indexOf("CSS")?r:n,e=n,a.keyboardSupport&&H("keydown",M),top!=self)l=!0;else if(J&&s<d&&(n.offsetHeight<=s||r.offsetHeight<=s)){var m,h=document.createElement("div");if(h.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+u.scrollHeight+"px",document.body.appendChild(h),o=function(){m=m||setTimeout(function(){i||(h.style.height="0",h.style.height=u.scrollHeight+"px",m=null)},500)},setTimeout(o,10),H("resize",o),(t=new X(o)).observe(n,{attributes:!0,childList:!0,characterData:!1}),u.offsetHeight<=s){var f=document.createElement("div");f.style.clear="both",n.appendChild(f)}}a.fixedBackground||i||(n.style.backgroundAttachment="scroll",r.style.backgroundAttachment="scroll")}}var w=[],v=!1,y=Date.now();function g(e,t,o){if(function(e,t){e=0<e?1:-1,t=0<t?1:-1,s.x===e&&s.y===t||(s.x=e,s.y=t,w=[],y=0)}(t,o),1!=a.accelerationMax){var n=Date.now()-y;if(n<a.accelerationDelta){var r=(1+50/n)/2;1<r&&(r=Math.min(r,a.accelerationMax),t*=r,o*=r)}y=Date.now()}if(w.push({x:t,y:o,lastX:t<0?.99:-.99,lastY:o<0?.99:-.99,start:Date.now()}),!v){var i=_(),l=e===i||e===document.body;null==e.$scrollBehavior&&function(e){var t=x(e);if(null==D[t]){var o=getComputedStyle(e,"")["scroll-behavior"];D[t]="smooth"==o}return D[t]}(e)&&(e.$scrollBehavior=e.style.scrollBehavior,e.style.scrollBehavior="auto");var c=function(n){for(var r=Date.now(),i=0,s=0,u=0;u<w.length;u++){var d=w[u],m=r-d.start,h=m>=a.animationTime,f=h?1:m/a.animationTime;a.pulseAlgorithm&&(f=R(f));var p=d.x*f-d.lastX>>0,y=d.y*f-d.lastY>>0;i+=p,s+=y,d.lastX+=p,d.lastY+=y,h&&(w.splice(u,1),u--)}l?window.scrollBy(i,s):(i&&(e.scrollLeft+=i),s&&(e.scrollTop+=s)),t||o||(w=[]),w.length?N(c,e,1e3/a.frameRate+1):(v=!1,null!=e.$scrollBehavior&&(e.style.scrollBehavior=e.$scrollBehavior,e.$scrollBehavior=null))};N(c,e,0),v=!0}}function b(t){c||p();var o=t.target;if(t.defaultPrevented||t.ctrlKey)return!0;if(j(e,"embed")||j(o,"embed")&&/\.pdf/i.test(o.src)||j(e,"object")||o.shadowRoot)return!0;var r=-t.wheelDeltaX||t.deltaX||0,i=-t.wheelDeltaY||t.deltaY||0;m&&(t.wheelDeltaX&&Y(t.wheelDeltaX,120)&&(r=t.wheelDeltaX/Math.abs(t.wheelDeltaX)*-120),t.wheelDeltaY&&Y(t.wheelDeltaY,120)&&(i=t.wheelDeltaY/Math.abs(t.wheelDeltaY)*-120)),r||i||(i=-t.wheelDelta||0),1===t.deltaMode&&(r*=40,i*=40);var s=B(o);return s?!!function(e){if(e){d.length||(d=[e,e,e]),e=Math.abs(e),d.push(e),d.shift(),clearTimeout(n),n=setTimeout(function(){try{localStorage.SS_deltaBuffer=d.join(",")}catch(e){}},1e3);var t=120<e&&I(e),o=!I(120)&&!I(100)&&!t;return e<50||o}}(i)||(1.2<Math.abs(r)&&(r*=a.stepSize/120),1.2<Math.abs(i)&&(i*=a.stepSize/120),g(s,r,i),t.preventDefault(),void A()):!l||!W||(Object.defineProperty(t,"target",{value:window.frameElement}),parent.wheel(t))}function M(t){var o=t.target,n=t.ctrlKey||t.altKey||t.metaKey||t.shiftKey&&t.keyCode!==h.spacebar;document.body.contains(e)||(e=document.activeElement);var r=/^(button|submit|radio|checkbox|file|color|image)$/i;if(t.defaultPrevented||/^(textarea|select|embed|object)$/i.test(o.nodeName)||j(o,"input")&&!r.test(o.type)||j(e,"video")||function(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(o=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return o}(t)||o.isContentEditable||n)return!0;if((j(o,"button")||j(o,"input")&&r.test(o.type))&&t.keyCode===h.spacebar)return!0;if(j(o,"input")&&"radio"==o.type&&f[t.keyCode])return!0;var i=0,s=0,c=B(e);if(!c)return!l||!W||parent.keydown(t);var u=c.clientHeight;switch(c==document.body&&(u=window.innerHeight),t.keyCode){case h.up:s=-a.arrowScroll;break;case h.down:s=a.arrowScroll;break;case h.spacebar:s=-(t.shiftKey?1:-1)*u*.9;break;case h.pageup:s=.9*-u;break;case h.pagedown:s=.9*u;break;case h.home:c==document.body&&document.scrollingElement&&(c=document.scrollingElement),s=-c.scrollTop;break;case h.end:var d=c.scrollHeight-c.scrollTop-u;s=0<d?10+d:0;break;case h.left:i=-a.arrowScroll;break;case h.right:i=a.arrowScroll;break;default:return!0}g(c,i,s),t.preventDefault(),A()}function S(t){e=t.target}var k,T,x=(k=0,function(e){return e.uniqueID||(e.uniqueID=k++)}),E={},L={},D={};function A(){clearTimeout(T),T=setInterval(function(){E=L=D={}},1e3)}function C(e,t,o){for(var n=o?E:L,r=e.length;r--;)n[x(e[r])]=t;return t}function B(e){var t=[],o=document.body,n=u.scrollHeight;do{var r=L[x(e)];if(r)return C(t,r);if(t.push(e),n===e.scrollHeight){var a=O(u)&&O(o)||z(u);if(l&&$(u)||!l&&a)return C(t,_())}else if($(e)&&z(e))return C(t,e)}while(e=e.parentElement)}function $(e){return e.clientHeight+10<e.scrollHeight}function O(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function z(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function H(e,t,o){window.addEventListener(e,t,o||!1)}function P(e,t,o){window.removeEventListener(e,t,o||!1)}function j(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{d=localStorage.SS_deltaBuffer.split(",")}catch(b){}function Y(e,t){return Math.floor(e/t)==e/t}function I(e){return Y(d[0],e)&&Y(d[1],e)&&Y(d[2],e)}var q,N=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},X=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,_=(q=document.scrollingElement,function(){if(!q){var e=document.createElement("div");e.style.cssText="height:10000px;width:1px;",document.body.appendChild(e);var t=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,3),q=document.body.scrollTop!=t?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(e)}return q});function K(e){var t;return((e*=a.pulseScale)<1?e-(1-Math.exp(-e)):(e-=1,(t=Math.exp(-1))+(1-Math.exp(-e))*(1-t)))*a.pulseNormalize}function R(e){return 1<=e?1:e<=0?0:(1==a.pulseNormalize&&(a.pulseNormalize/=K(1)),K(e))}var Q=window.navigator.userAgent,V=/Edge/.test(Q),W=/chrome/i.test(Q)&&!V,F=/safari/i.test(Q)&&!V,U=/mobile/i.test(Q),G=/Windows NT 6.1/i.test(Q)&&/rv:11/i.test(Q),J=F&&(/Version\/8/i.test(Q)||/Version\/9/i.test(Q)),Z=(W||F||G)&&!U,ee=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ee=!0}}))}catch(b){}var te=!!ee&&{passive:!1},oe="onwheel"in document.createElement("div")?"wheel":"mousewheel";function ne(e){for(var t in e)r.hasOwnProperty(t)&&(a[t]=e[t])}oe&&Z&&(H(oe,b,te),H("mousedown",S),H("load",p)),ne.destroy=function(){t&&t.disconnect(),P(oe,b),P("mousedown",S),P("keydown",M),P("resize",o),P("load",p)},window.SmoothScrollOptions&&ne(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return ne}):"object"==typeof exports?module.exports=ne:window.SmoothScroll=ne}(),$(document).ready(function(){"use strict";var e=document.querySelector(".scrollup .track");e.style.transition=e.style.WebkitTransition="none",e.style.strokeDasharray="322 645",e.style.strokeDashoffset=322,e.getBoundingClientRect(),e.style.transition=e.style.WebkitTransition="stroke-dashoffset 10ms linear";var t=function(){var t=322-322*$(window).scrollTop()/($(document).height()-$(window).height());e.style.strokeDashoffset=t};t(),$(window).scroll(t),jQuery(window).on("scroll",function(){jQuery(this).scrollTop()>50?jQuery(".scrollup").addClass("active-progress"):jQuery(".scrollup").removeClass("active-progress")}),jQuery(".scrollup").on("click",function(e){return e.preventDefault(),jQuery("html, body").animate({scrollTop:0},550),!1})});var str="InterSmart Solutions";console.log("Powered by "+str),$(document).ready(function(){var e=$("footer").height()+"px";$("footer").css("min-height",e)}),function(){var e,t,o=document.documentElement,n=window,r=n.scrollY||o.scrollTop,a=0,i=0,l=document.getElementById("Header");window.addEventListener("scroll",function(){e=n.scrollY||o.scrollTop,a=e>r?2:1,0==e&&l.classList.remove("scrolled"),a!==i&&(t=!0,2===a&&e>200?(l.classList.add("hide"),l.classList.remove("scrolled")):1===a?(l.classList.remove("hide"),l.classList.add("scrolled")):t=!1,t=t),r=e,t&&(i=a)})}();var $hamburger=$(".menu_icon"),$ServiceMenu=$(".ServiceMenu");TweenLite.set("#MainMenu .MainMenuLinks li",{autoAlpha:0,x:-110}),TweenLite.set("#MainMenu .talkTOExp",{autoAlpha:0,y:110}),TweenLite.set("#MainMenu .socialId",{autoAlpha:0,y:110}),TweenLite.set("#MainMenu .items",{autoAlpha:0,x:-110}),TweenLite.set("#MainMenu .menu_icon",{autoAlpha:0,x:-110}),TweenLite.set("#MainMenu #air_baloon",{autoAlpha:0,y:-110}),TweenLite.set("#MainMenu .Bubbles",{autoAlpha:0});var hamburgerMotion=(new TimelineMax).set("body",{className:"+=MenuOpen"}).from("#MainMenu",.4,{autoAlpha:0,x:"-100%"},.2,.5).from("#MainMenu .Brand",.4,{y:40},.2,.5).staggerTo("#MainMenu .MainMenuLinks li",.2,{autoAlpha:1,x:0,ease:Sine.easeOut},.1,.3).staggerTo(["#MainMenu .talkTOExp","#MainMenu .socialId"],.3,{autoAlpha:1,y:0,ease:Sine.easeOut},.2,.4).staggerTo("#MainMenu .items",.5,{autoAlpha:1,x:0,ease:Sine.easeOut},.3,.5).to("#MainMenu .menu_icon",.3,{autoAlpha:1,x:0},1,.3).to("#MainMenu #air_baloon",.3,{autoAlpha:1,y:0},1,.3).to("#MainMenu .Bubbles",.4,{autoAlpha:1},1,.3).reverse();$hamburger.on("click",function(e){hamburgerMotion.reversed(!hamburgerMotion.reversed())}),$ServiceMenu.on("click",function(e){hamburgerMotion.reversed(!hamburgerMotion.reversed())});const can=document.querySelector("#MainMenu  .Bubbles> span");function tweenProperty(e,t,o,n){var r=gsap.utils.random(1,4,.2,!0),a=gsap.utils.random(.2,1.5,.2,!0);gsap.to(e,{[t]:gsap.utils.random(o,n),duration:r(),delay:a(),ease:"none",onComplete:tweenProperty,onCompleteParams:[e,t,o,n]})}gsap.utils.toArray("#MainMenu .Bubbles span").forEach(e=>{tweenProperty(e,"x",-60,20),tweenProperty(e,"y",-80,20),tweenProperty(e,"opacity",0,1)}),$(document).keyup(function(e){$("body").hasClass("MenuOpen")&&27===e.keyCode&&hamburgerMotion.reversed(!hamburgerMotion.reversed())}),document.addEventListener("DOMContentLoaded",function(){var e;if("IntersectionObserver"in window){e=document.querySelectorAll(".lazy");var t=new IntersectionObserver(function(e,o){e.forEach(function(e){if(e.isIntersecting){var o=e.target;o.src=o.dataset.src,o.classList.remove("lazy"),t.unobserve(o)}})});e.forEach(function(e){t.observe(e)})}else{var o;function n(){o&&clearTimeout(o),o=setTimeout(function(){var t=window.pageYOffset;e.forEach(function(e){e.offsetTop<window.innerHeight+t&&(e.src=e.dataset.src,e.classList.remove("lazy"))}),0==e.length&&(document.removeEventListener("scroll",n),window.removeEventListener("resize",n),window.removeEventListener("orientationChange",n))},20)}e=document.querySelectorAll(".lazy"),document.addEventListener("scroll",n),window.addEventListener("resize",n),window.addEventListener("orientationChange",n)}});