(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"09d3":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interactivity"},[n("lottie-player",{ref:"myAni",staticStyle:{width:"400px"},attrs:{src:"/hamster.json",id:"firstLottie"}})],1)},o=[];function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}var y={player:"lottie-player"},c=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,i=n.actions,o=n.container,s=n.mode,c=n.player,v=l(n,["actions","container","mode","player"]);if(a(this,e),u.set(this,{writable:!0,value:function(e){p(t,d).call(t,e.clientX,e.clientY)}}),f.set(this,{writable:!0,value:function(){p(t,d).call(t,-1,-1)}}),d.set(this,{writable:!0,value:function(e,n){if(-1!==e&&-1!==n){var i=t.getContainerCursorPosition(e,n);e=i.x,n=i.y}var o=t.actions.find((function(t){var i=t.position;return Array.isArray(i.x)&&Array.isArray(i.y)?e>=i.x[0]&&e<=i.x[1]&&n>=i.y[0]&&n<=i.y[1]:!Number.isNaN(i.x)&&!Number.isNaN(i.y)&&e===i.x&&n===i.y}));if(o)if("seek"===o.type){var r=(e-o.position.x[0])/(o.position.x[1]-o.position.x[0]),a=(n-o.position.y[0])/(o.position.y[1]-o.position.y[0]);t.player.playSegments(o.frames,!0),o.position.y[0]<0&&o.position.y[1]>1?t.player.goToAndStop(Math.floor(r*t.player.totalFrames),!0):t.player.goToAndStop(Math.ceil((r+a)/2*t.player.totalFrames),!0)}else"loop"===o.type?t.player.playSegments(o.frames,!0):"play"===o.type?(!0===t.player.isPaused&&t.player.resetSegments(),t.player.playSegments(o.frames)):"stop"===o.type&&t.player.goToAndStop(o.frames[0],!0)}}),m.set(this,{writable:!0,value:function(){var e=t.getContainerVisibility(),n=t.actions.find((function(t){var n=t.visibility;return e>=n[0]&&e<=n[1]}));n&&("seek"===n.type?t.player.goToAndStop(Math.ceil((e-n.visibility[0])/(n.visibility[1]-n.visibility[0])*t.player.totalFrames),!0):"loop"===n.type?(null===t.assignedSegment||t.assignedSegment!==n.frames||!0===t.player.isPaused)&&(t.player.playSegments(n.frames,!0),t.assignedSegment=n.frames):"play"===n.type?!0===t.player.isPaused&&(t.player.resetSegments(),t.player.play()):"stop"===n.type&&t.player.goToAndStop(n.frames[0],!0))}}),"object"!==r(c)||"AnimationItem"!==c.constructor.name){if("string"==typeof c){var h=document.querySelector(c);h&&"LOTTIE-PLAYER"===h.nodeName&&(c=h.getLottie())}else c instanceof HTMLElement&&"LOTTIE-PLAYER"===c.nodeName&&(c=c.getLottie());if(!c)throw new Error("".concat("[lottieInteractivity]:"," Specified player is invalid."),c)}"string"==typeof o&&(o=document.querySelector(o)),o||(o=c.wrapper),this.player=c,this.container=o,this.mode=s,this.actions=i,this.options=v,this.assignedSegment=null}var t,n,i;return t=e,(n=[{key:"getContainerVisibility",value:function(){var e=this.container.getBoundingClientRect(),t=e.top,n=e.height;return(window.innerHeight-t)/(window.innerHeight+n)}},{key:"getContainerCursorPosition",value:function(e,t){var n=this.container.getBoundingClientRect(),i=n.top;return{x:(e-n.left)/n.width,y:(t-i)/n.height}}},{key:"start",value:function(){var e=this;"scroll"===this.mode&&this.player.addEventListener("DOMLoaded",(function(){e.player.loop=!0,e.player.stop(),window.addEventListener("scroll",p(e,m))})),"cursor"===this.mode&&this.player.addEventListener("DOMLoaded",(function(){e.player.loop=!0,e.player.stop(),e.container.addEventListener("mousemove",p(e,u)),e.container.addEventListener("mouseout",p(e,f))}))}},{key:"stop",value:function(){"scroll"===this.mode&&window.removeEventListener("scroll",p(this,m)),"cursor"===this.mode&&(this.container.addEventListener("mousemove",p(this,u)),this.container.addEventListener("mouseout",p(this,f)))}}])&&s(t.prototype,n),i&&s(t,i),e}(),u=new WeakMap,f=new WeakMap,d=new WeakMap,m=new WeakMap,v=function(e){var t=new c(e);return t.start(),t},h={name:"Interactivity",data:function(){return{}},mounted:function(){this.$refs.myAni.addEventListener("load",(function(){v({player:"#firstLottie",mode:"cursor",actions:[{position:{x:[0,1],y:[-1,2]},type:"seek",frames:[0,180]}]})}))}},g=h,b=(n("2c87"),n("2877")),w=Object(b["a"])(g,i,o,!1,null,"67f21c4c",null);t["default"]=w.exports},"2c87":function(e,t,n){"use strict";n("70ef")},"70ef":function(e,t,n){}}]);
//# sourceMappingURL=about.865a5a78.js.map