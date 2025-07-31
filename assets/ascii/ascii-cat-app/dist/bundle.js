(()=>{var wv=Object.create;var lc=Object.defineProperty;var Mv=Object.getOwnPropertyDescriptor;var Sv=Object.getOwnPropertyNames;var bv=Object.getPrototypeOf,Ev=Object.prototype.hasOwnProperty;var Tv=(n,e,t)=>e in n?lc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Qn=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Av=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Sv(e))!Ev.call(n,r)&&r!==t&&lc(n,r,{get:()=>e[r],enumerable:!(i=Mv(e,r))||i.enumerable});return n};var Vn=(n,e,t)=>(t=n!=null?wv(bv(n)):{},Av(e||!n||!n.__esModule?lc(t,"default",{value:n,enumerable:!0}):t,n));var Zf=(n,e,t)=>(Tv(n,typeof e!="symbol"?e+"":e,t),t);var od=Qn(Ce=>{"use strict";var zs=Symbol.for("react.element"),Cv=Symbol.for("react.portal"),Pv=Symbol.for("react.fragment"),Lv=Symbol.for("react.strict_mode"),Rv=Symbol.for("react.profiler"),Iv=Symbol.for("react.provider"),Dv=Symbol.for("react.context"),Nv=Symbol.for("react.forward_ref"),kv=Symbol.for("react.suspense"),zv=Symbol.for("react.memo"),Fv=Symbol.for("react.lazy"),jf=Symbol.iterator;function Ov(n){return n===null||typeof n!="object"?null:(n=jf&&n[jf]||n["@@iterator"],typeof n=="function"?n:null)}var Qf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ed=Object.assign,td={};function Rr(n,e,t){this.props=n,this.context=e,this.refs=td,this.updater=t||Qf}Rr.prototype.isReactComponent={};Rr.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Rr.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function nd(){}nd.prototype=Rr.prototype;function uc(n,e,t){this.props=n,this.context=e,this.refs=td,this.updater=t||Qf}var hc=uc.prototype=new nd;hc.constructor=uc;ed(hc,Rr.prototype);hc.isPureReactComponent=!0;var Jf=Array.isArray,id=Object.prototype.hasOwnProperty,fc={current:null},rd={key:!0,ref:!0,__self:!0,__source:!0};function sd(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)id.call(e,i)&&!rd.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:zs,type:n,key:s,ref:o,props:r,_owner:fc.current}}function Uv(n,e){return{$$typeof:zs,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function dc(n){return typeof n=="object"&&n!==null&&n.$$typeof===zs}function Bv(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Kf=/\/+/g;function cc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Bv(""+n.key):e.toString(36)}function jo(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case zs:case Cv:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+cc(o,0):i,Jf(r)?(t="",n!=null&&(t=n.replace(Kf,"$&/")+"/"),jo(r,e,t,"",function(c){return c})):r!=null&&(dc(r)&&(r=Uv(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Kf,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Jf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+cc(s,a);o+=jo(s,e,t,l,r)}else if(l=Ov(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+cc(s,a++),o+=jo(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zo(n,e,t){if(n==null)return n;var i=[],r=0;return jo(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Vv(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Dt={current:null},Jo={transition:null},Hv={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:Jo,ReactCurrentOwner:fc};Ce.Children={map:Zo,forEach:function(n,e,t){Zo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Zo(n,function(){e++}),e},toArray:function(n){return Zo(n,function(e){return e})||[]},only:function(n){if(!dc(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ce.Component=Rr;Ce.Fragment=Pv;Ce.Profiler=Rv;Ce.PureComponent=uc;Ce.StrictMode=Lv;Ce.Suspense=kv;Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hv;Ce.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=ed({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=fc.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)id.call(e,l)&&!rd.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:zs,type:n.type,key:r,ref:s,props:i,_owner:o}};Ce.createContext=function(n){return n={$$typeof:Dv,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Iv,_context:n},n.Consumer=n};Ce.createElement=sd;Ce.createFactory=function(n){var e=sd.bind(null,n);return e.type=n,e};Ce.createRef=function(){return{current:null}};Ce.forwardRef=function(n){return{$$typeof:Nv,render:n}};Ce.isValidElement=dc;Ce.lazy=function(n){return{$$typeof:Fv,_payload:{_status:-1,_result:n},_init:Vv}};Ce.memo=function(n,e){return{$$typeof:zv,type:n,compare:e===void 0?null:e}};Ce.startTransition=function(n){var e=Jo.transition;Jo.transition={};try{n()}finally{Jo.transition=e}};Ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ce.useCallback=function(n,e){return Dt.current.useCallback(n,e)};Ce.useContext=function(n){return Dt.current.useContext(n)};Ce.useDebugValue=function(){};Ce.useDeferredValue=function(n){return Dt.current.useDeferredValue(n)};Ce.useEffect=function(n,e){return Dt.current.useEffect(n,e)};Ce.useId=function(){return Dt.current.useId()};Ce.useImperativeHandle=function(n,e,t){return Dt.current.useImperativeHandle(n,e,t)};Ce.useInsertionEffect=function(n,e){return Dt.current.useInsertionEffect(n,e)};Ce.useLayoutEffect=function(n,e){return Dt.current.useLayoutEffect(n,e)};Ce.useMemo=function(n,e){return Dt.current.useMemo(n,e)};Ce.useReducer=function(n,e,t){return Dt.current.useReducer(n,e,t)};Ce.useRef=function(n){return Dt.current.useRef(n)};Ce.useState=function(n){return Dt.current.useState(n)};Ce.useSyncExternalStore=function(n,e,t){return Dt.current.useSyncExternalStore(n,e,t)};Ce.useTransition=function(){return Dt.current.useTransition()};Ce.version="18.2.0"});var Ir=Qn((Qb,ad)=>{"use strict";ad.exports=od()});var vd=Qn(Fe=>{"use strict";function vc(n,e){var t=n.length;n.push(e);e:for(;0<t;){var i=t-1>>>1,r=n[i];if(0<Ko(r,e))n[i]=e,n[t]=r,t=i;else break e}}function Mn(n){return n.length===0?null:n[0]}function ea(n){if(n.length===0)return null;var e=n[0],t=n.pop();if(t!==e){n[0]=t;e:for(var i=0,r=n.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=n[o],l=o+1,c=n[l];if(0>Ko(a,t))l<r&&0>Ko(c,a)?(n[i]=c,n[l]=t,i=l):(n[i]=a,n[o]=t,i=o);else if(l<r&&0>Ko(c,t))n[i]=c,n[l]=t,i=l;else break e}}return e}function Ko(n,e){var t=n.sortIndex-e.sortIndex;return t!==0?t:n.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(ld=performance,Fe.unstable_now=function(){return ld.now()}):(pc=Date,cd=pc.now(),Fe.unstable_now=function(){return pc.now()-cd});var ld,pc,cd,Hn=[],xi=[],Wv=1,ln=null,wt=3,ta=!1,er=!1,Os=!1,fd=typeof setTimeout=="function"?setTimeout:null,dd=typeof clearTimeout=="function"?clearTimeout:null,ud=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function yc(n){for(var e=Mn(xi);e!==null;){if(e.callback===null)ea(xi);else if(e.startTime<=n)ea(xi),e.sortIndex=e.expirationTime,vc(Hn,e);else break;e=Mn(xi)}}function xc(n){if(Os=!1,yc(n),!er)if(Mn(Hn)!==null)er=!0,wc(_c);else{var e=Mn(xi);e!==null&&Mc(xc,e.startTime-n)}}function _c(n,e){er=!1,Os&&(Os=!1,dd(Us),Us=-1),ta=!0;var t=wt;try{for(yc(e),ln=Mn(Hn);ln!==null&&(!(ln.expirationTime>e)||n&&!gd());){var i=ln.callback;if(typeof i=="function"){ln.callback=null,wt=ln.priorityLevel;var r=i(ln.expirationTime<=e);e=Fe.unstable_now(),typeof r=="function"?ln.callback=r:ln===Mn(Hn)&&ea(Hn),yc(e)}else ea(Hn);ln=Mn(Hn)}if(ln!==null)var s=!0;else{var o=Mn(xi);o!==null&&Mc(xc,o.startTime-e),s=!1}return s}finally{ln=null,wt=t,ta=!1}}var na=!1,Qo=null,Us=-1,pd=5,md=-1;function gd(){return!(Fe.unstable_now()-md<pd)}function mc(){if(Qo!==null){var n=Fe.unstable_now();md=n;var e=!0;try{e=Qo(!0,n)}finally{e?Fs():(na=!1,Qo=null)}}else na=!1}var Fs;typeof ud=="function"?Fs=function(){ud(mc)}:typeof MessageChannel<"u"?(gc=new MessageChannel,hd=gc.port2,gc.port1.onmessage=mc,Fs=function(){hd.postMessage(null)}):Fs=function(){fd(mc,0)};var gc,hd;function wc(n){Qo=n,na||(na=!0,Fs())}function Mc(n,e){Us=fd(function(){n(Fe.unstable_now())},e)}Fe.unstable_IdlePriority=5;Fe.unstable_ImmediatePriority=1;Fe.unstable_LowPriority=4;Fe.unstable_NormalPriority=3;Fe.unstable_Profiling=null;Fe.unstable_UserBlockingPriority=2;Fe.unstable_cancelCallback=function(n){n.callback=null};Fe.unstable_continueExecution=function(){er||ta||(er=!0,wc(_c))};Fe.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pd=0<n?Math.floor(1e3/n):5};Fe.unstable_getCurrentPriorityLevel=function(){return wt};Fe.unstable_getFirstCallbackNode=function(){return Mn(Hn)};Fe.unstable_next=function(n){switch(wt){case 1:case 2:case 3:var e=3;break;default:e=wt}var t=wt;wt=e;try{return n()}finally{wt=t}};Fe.unstable_pauseExecution=function(){};Fe.unstable_requestPaint=function(){};Fe.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var t=wt;wt=n;try{return e()}finally{wt=t}};Fe.unstable_scheduleCallback=function(n,e,t){var i=Fe.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?i+t:i):t=i,n){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=t+r,n={id:Wv++,callback:e,priorityLevel:n,startTime:t,expirationTime:r,sortIndex:-1},t>i?(n.sortIndex=t,vc(xi,n),Mn(Hn)===null&&n===Mn(xi)&&(Os?(dd(Us),Us=-1):Os=!0,Mc(xc,t-i))):(n.sortIndex=r,vc(Hn,n),er||ta||(er=!0,wc(_c))),n};Fe.unstable_shouldYield=gd;Fe.unstable_wrapCallback=function(n){var e=wt;return function(){var t=wt;wt=e;try{return n.apply(this,arguments)}finally{wt=t}}}});var xd=Qn((tE,yd)=>{"use strict";yd.exports=vd()});var Eg=Qn(en=>{"use strict";var Tp=Ir(),Kt=xd();function Y(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ap=new Set,ao={};function dr(n,e){Qr(n,e),Qr(n+"Capture",e)}function Qr(n,e){for(ao[n]=e,n=0;n<e.length;n++)Ap.add(e[n])}var si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=Object.prototype.hasOwnProperty,Gv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_d={},wd={};function Xv(n){return Xc.call(wd,n)?!0:Xc.call(_d,n)?!1:Gv.test(n)?wd[n]=!0:(_d[n]=!0,!1)}function qv(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Yv(n,e,t,i){if(e===null||typeof e>"u"||qv(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function zt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){yt[n]=new zt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];yt[e]=new zt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){yt[n]=new zt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){yt[n]=new zt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){yt[n]=new zt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){yt[n]=new zt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){yt[n]=new zt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){yt[n]=new zt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){yt[n]=new zt(n,5,!1,n.toLowerCase(),null,!1,!1)});var Fu=/[\-:]([a-z])/g;function Ou(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Fu,Ou);yt[e]=new zt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Fu,Ou);yt[e]=new zt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Fu,Ou);yt[e]=new zt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){yt[n]=new zt(n,1,!1,n.toLowerCase(),null,!1,!1)});yt.xlinkHref=new zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){yt[n]=new zt(n,1,!1,n.toLowerCase(),null,!0,!0)});function Uu(n,e,t,i){var r=yt.hasOwnProperty(e)?yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Yv(e,t,r,i)&&(t=null),i||r===null?Xv(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ci=Tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ia=Symbol.for("react.element"),kr=Symbol.for("react.portal"),zr=Symbol.for("react.fragment"),Bu=Symbol.for("react.strict_mode"),qc=Symbol.for("react.profiler"),Cp=Symbol.for("react.provider"),Pp=Symbol.for("react.context"),Vu=Symbol.for("react.forward_ref"),Yc=Symbol.for("react.suspense"),$c=Symbol.for("react.suspense_list"),Hu=Symbol.for("react.memo"),wi=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Lp=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Md=Symbol.iterator;function Bs(n){return n===null||typeof n!="object"?null:(n=Md&&n[Md]||n["@@iterator"],typeof n=="function"?n:null)}var Je=Object.assign,Sc;function $s(n){if(Sc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Sc=e&&e[1]||""}return`
`+Sc+n}var bc=!1;function Ec(n,e){if(!n||bc)return"";bc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{bc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?$s(n):""}function $v(n){switch(n.tag){case 5:return $s(n.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return n=Ec(n.type,!1),n;case 11:return n=Ec(n.type.render,!1),n;case 1:return n=Ec(n.type,!0),n;default:return""}}function Zc(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case zr:return"Fragment";case kr:return"Portal";case qc:return"Profiler";case Bu:return"StrictMode";case Yc:return"Suspense";case $c:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Pp:return(n.displayName||"Context")+".Consumer";case Cp:return(n._context.displayName||"Context")+".Provider";case Vu:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Hu:return e=n.displayName||null,e!==null?e:Zc(n.type)||"Memo";case wi:e=n._payload,n=n._init;try{return Zc(n(e))}catch{}}return null}function Zv(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zc(e);case 8:return e===Bu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ki(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Rp(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jv(n){var e=Rp(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ra(n){n._valueTracker||(n._valueTracker=jv(n))}function Ip(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Rp(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Ia(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function jc(n,e){var t=e.checked;return Je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Sd(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=ki(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dp(n,e){e=e.checked,e!=null&&Uu(n,"checked",e,!1)}function Jc(n,e){Dp(n,e);var t=ki(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Kc(n,e.type,t):e.hasOwnProperty("defaultValue")&&Kc(n,e.type,ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function bd(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Kc(n,e,t){(e!=="number"||Ia(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Zs=Array.isArray;function Yr(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+ki(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Qc(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Y(91));return Je({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ed(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Y(92));if(Zs(t)){if(1<t.length)throw Error(Y(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ki(t)}}function Np(n,e){var t=ki(e.value),i=ki(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Td(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function kp(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eu(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?kp(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var sa,zp=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(sa=sa||document.createElement("div"),sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sa.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function lo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jv=["Webkit","ms","Moz","O"];Object.keys(Ks).forEach(function(n){Jv.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ks[e]=Ks[n]})});function Fp(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ks.hasOwnProperty(n)&&Ks[n]?(""+e).trim():e+"px"}function Op(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Fp(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Kv=Je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tu(n,e){if(e){if(Kv[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Y(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Y(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Y(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Y(62))}}function nu(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iu=null;function Wu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ru=null,$r=null,Zr=null;function Ad(n){if(n=Ao(n)){if(typeof ru!="function")throw Error(Y(280));var e=n.stateNode;e&&(e=ol(e),ru(n.stateNode,n.type,e))}}function Up(n){$r?Zr?Zr.push(n):Zr=[n]:$r=n}function Bp(){if($r){var n=$r,e=Zr;if(Zr=$r=null,Ad(n),e)for(n=0;n<e.length;n++)Ad(e[n])}}function Vp(n,e){return n(e)}function Hp(){}var Tc=!1;function Wp(n,e,t){if(Tc)return n(e,t);Tc=!0;try{return Vp(n,e,t)}finally{Tc=!1,($r!==null||Zr!==null)&&(Hp(),Bp())}}function co(n,e){var t=n.stateNode;if(t===null)return null;var i=ol(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Y(231,e,typeof t));return t}var su=!1;if(si)try{Dr={},Object.defineProperty(Dr,"passive",{get:function(){su=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{su=!1}var Dr;function Qv(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Qs=!1,Da=null,Na=!1,ou=null,ey={onError:function(n){Qs=!0,Da=n}};function ty(n,e,t,i,r,s,o,a,l){Qs=!1,Da=null,Qv.apply(ey,arguments)}function ny(n,e,t,i,r,s,o,a,l){if(ty.apply(this,arguments),Qs){if(Qs){var c=Da;Qs=!1,Da=null}else throw Error(Y(198));Na||(Na=!0,ou=c)}}function pr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Gp(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Cd(n){if(pr(n)!==n)throw Error(Y(188))}function iy(n){var e=n.alternate;if(!e){if(e=pr(n),e===null)throw Error(Y(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Cd(r),n;if(s===i)return Cd(r),e;s=s.sibling}throw Error(Y(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(Y(189))}}if(t.alternate!==i)throw Error(Y(190))}if(t.tag!==3)throw Error(Y(188));return t.stateNode.current===t?n:e}function Xp(n){return n=iy(n),n!==null?qp(n):null}function qp(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=qp(n);if(e!==null)return e;n=n.sibling}return null}var Yp=Kt.unstable_scheduleCallback,Pd=Kt.unstable_cancelCallback,ry=Kt.unstable_shouldYield,sy=Kt.unstable_requestPaint,tt=Kt.unstable_now,oy=Kt.unstable_getCurrentPriorityLevel,Gu=Kt.unstable_ImmediatePriority,$p=Kt.unstable_UserBlockingPriority,ka=Kt.unstable_NormalPriority,ay=Kt.unstable_LowPriority,Zp=Kt.unstable_IdlePriority,nl=null,qn=null;function ly(n){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(nl,n,void 0,(n.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:hy,cy=Math.log,uy=Math.LN2;function hy(n){return n>>>=0,n===0?32:31-(cy(n)/uy|0)|0}var oa=64,aa=4194304;function js(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function za(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=js(a):(s&=o,s!==0&&(i=js(s)))}else o=t&~r,o!==0?i=js(o):s!==0&&(i=js(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-An(e),r=1<<t,i|=n[t],e&=~r;return i}function fy(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dy(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-An(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=fy(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function au(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function jp(){var n=oa;return oa<<=1,!(oa&4194240)&&(oa=64),n}function Ac(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Eo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-An(e),n[e]=t}function py(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-An(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Xu(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-An(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ze=0;function Jp(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Kp,qu,Qp,em,tm,lu=!1,la=[],Ai=null,Ci=null,Pi=null,uo=new Map,ho=new Map,Si=[],my="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ld(n,e){switch(n){case"focusin":case"focusout":Ai=null;break;case"dragenter":case"dragleave":Ci=null;break;case"mouseover":case"mouseout":Pi=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(e.pointerId)}}function Vs(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ao(e),e!==null&&qu(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function gy(n,e,t,i,r){switch(e){case"focusin":return Ai=Vs(Ai,n,e,t,i,r),!0;case"dragenter":return Ci=Vs(Ci,n,e,t,i,r),!0;case"mouseover":return Pi=Vs(Pi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return uo.set(s,Vs(uo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ho.set(s,Vs(ho.get(s)||null,n,e,t,i,r)),!0}return!1}function nm(n){var e=ir(n.target);if(e!==null){var t=pr(e);if(t!==null){if(e=t.tag,e===13){if(e=Gp(t),e!==null){n.blockedOn=e,tm(n.priority,function(){Qp(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ma(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=cu(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);iu=i,t.target.dispatchEvent(i),iu=null}else return e=Ao(t),e!==null&&qu(e),n.blockedOn=t,!1;e.shift()}return!0}function Rd(n,e,t){Ma(n)&&t.delete(e)}function vy(){lu=!1,Ai!==null&&Ma(Ai)&&(Ai=null),Ci!==null&&Ma(Ci)&&(Ci=null),Pi!==null&&Ma(Pi)&&(Pi=null),uo.forEach(Rd),ho.forEach(Rd)}function Hs(n,e){n.blockedOn===e&&(n.blockedOn=null,lu||(lu=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,vy)))}function fo(n){function e(r){return Hs(r,n)}if(0<la.length){Hs(la[0],n);for(var t=1;t<la.length;t++){var i=la[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ai!==null&&Hs(Ai,n),Ci!==null&&Hs(Ci,n),Pi!==null&&Hs(Pi,n),uo.forEach(e),ho.forEach(e),t=0;t<Si.length;t++)i=Si[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Si.length&&(t=Si[0],t.blockedOn===null);)nm(t),t.blockedOn===null&&Si.shift()}var jr=ci.ReactCurrentBatchConfig,Fa=!0;function yy(n,e,t,i){var r=ze,s=jr.transition;jr.transition=null;try{ze=1,Yu(n,e,t,i)}finally{ze=r,jr.transition=s}}function xy(n,e,t,i){var r=ze,s=jr.transition;jr.transition=null;try{ze=4,Yu(n,e,t,i)}finally{ze=r,jr.transition=s}}function Yu(n,e,t,i){if(Fa){var r=cu(n,e,t,i);if(r===null)Nc(n,e,i,Oa,t),Ld(n,i);else if(gy(r,n,e,t,i))i.stopPropagation();else if(Ld(n,i),e&4&&-1<my.indexOf(n)){for(;r!==null;){var s=Ao(r);if(s!==null&&Kp(s),s=cu(n,e,t,i),s===null&&Nc(n,e,i,Oa,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Nc(n,e,i,null,t)}}var Oa=null;function cu(n,e,t,i){if(Oa=null,n=Wu(i),n=ir(n),n!==null)if(e=pr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Gp(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Oa=n,null}function im(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oy()){case Gu:return 1;case $p:return 4;case ka:case ay:return 16;case Zp:return 536870912;default:return 16}default:return 16}}var Ei=null,$u=null,Sa=null;function rm(){if(Sa)return Sa;var n,e=$u,t=e.length,i,r="value"in Ei?Ei.value:Ei.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Sa=r.slice(n,1<i?1-i:void 0)}function ba(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ca(){return!0}function Id(){return!1}function Qt(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ca:Id,this.isPropagationStopped=Id,this}return Je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),e}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zu=Qt(os),To=Je({},os,{view:0,detail:0}),_y=Qt(To),Cc,Pc,Ws,il=Je({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ws&&(Ws&&n.type==="mousemove"?(Cc=n.screenX-Ws.screenX,Pc=n.screenY-Ws.screenY):Pc=Cc=0,Ws=n),Cc)},movementY:function(n){return"movementY"in n?n.movementY:Pc}}),Dd=Qt(il),wy=Je({},il,{dataTransfer:0}),My=Qt(wy),Sy=Je({},To,{relatedTarget:0}),Lc=Qt(Sy),by=Je({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),Ey=Qt(by),Ty=Je({},os,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ay=Qt(Ty),Cy=Je({},os,{data:0}),Nd=Qt(Cy),Py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ly={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iy(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Ry[n])?!!e[n]:!1}function ju(){return Iy}var Dy=Je({},To,{key:function(n){if(n.key){var e=Py[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=ba(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ly[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(n){return n.type==="keypress"?ba(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ba(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ny=Qt(Dy),ky=Je({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=Qt(ky),zy=Je({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),Fy=Qt(zy),Oy=Je({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uy=Qt(Oy),By=Je({},il,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Vy=Qt(By),Hy=[9,13,27,32],Ju=si&&"CompositionEvent"in window,eo=null;si&&"documentMode"in document&&(eo=document.documentMode);var Wy=si&&"TextEvent"in window&&!eo,sm=si&&(!Ju||eo&&8<eo&&11>=eo),zd=" ",Fd=!1;function om(n,e){switch(n){case"keyup":return Hy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function am(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fr=!1;function Gy(n,e){switch(n){case"compositionend":return am(e);case"keypress":return e.which!==32?null:(Fd=!0,zd);case"textInput":return n=e.data,n===zd&&Fd?null:n;default:return null}}function Xy(n,e){if(Fr)return n==="compositionend"||!Ju&&om(n,e)?(n=rm(),Sa=$u=Ei=null,Fr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sm&&e.locale!=="ko"?null:e.data;default:return null}}var qy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!qy[n.type]:e==="textarea"}function lm(n,e,t,i){Up(i),e=Ua(e,"onChange"),0<e.length&&(t=new Zu("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var to=null,po=null;function Yy(n){xm(n,0)}function rl(n){var e=Br(n);if(Ip(e))return n}function $y(n,e){if(n==="change")return e}var cm=!1;si&&(si?(ha="oninput"in document,ha||(Rc=document.createElement("div"),Rc.setAttribute("oninput","return;"),ha=typeof Rc.oninput=="function"),ua=ha):ua=!1,cm=ua&&(!document.documentMode||9<document.documentMode));var ua,ha,Rc;function Ud(){to&&(to.detachEvent("onpropertychange",um),po=to=null)}function um(n){if(n.propertyName==="value"&&rl(po)){var e=[];lm(e,po,n,Wu(n)),Wp(Yy,e)}}function Zy(n,e,t){n==="focusin"?(Ud(),to=e,po=t,to.attachEvent("onpropertychange",um)):n==="focusout"&&Ud()}function jy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return rl(po)}function Jy(n,e){if(n==="click")return rl(e)}function Ky(n,e){if(n==="input"||n==="change")return rl(e)}function Qy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Pn=typeof Object.is=="function"?Object.is:Qy;function mo(n,e){if(Pn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Xc.call(e,r)||!Pn(n[r],e[r]))return!1}return!0}function Bd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vd(n,e){var t=Bd(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Bd(t)}}function hm(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?hm(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function fm(){for(var n=window,e=Ia();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ia(n.document)}return e}function Ku(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function ex(n){var e=fm(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&hm(t.ownerDocument.documentElement,t)){if(i!==null&&Ku(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Vd(t,s);var o=Vd(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var tx=si&&"documentMode"in document&&11>=document.documentMode,Or=null,uu=null,no=null,hu=!1;function Hd(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;hu||Or==null||Or!==Ia(i)||(i=Or,"selectionStart"in i&&Ku(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),no&&mo(no,i)||(no=i,i=Ua(uu,"onSelect"),0<i.length&&(e=new Zu("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Or)))}function fa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ur={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},Ic={},dm={};si&&(dm=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function sl(n){if(Ic[n])return Ic[n];if(!Ur[n])return n;var e=Ur[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in dm)return Ic[n]=e[t];return n}var pm=sl("animationend"),mm=sl("animationiteration"),gm=sl("animationstart"),vm=sl("transitionend"),ym=new Map,Wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fi(n,e){ym.set(n,e),dr(e,[n])}for(da=0;da<Wd.length;da++)pa=Wd[da],Gd=pa.toLowerCase(),Xd=pa[0].toUpperCase()+pa.slice(1),Fi(Gd,"on"+Xd);var pa,Gd,Xd,da;Fi(pm,"onAnimationEnd");Fi(mm,"onAnimationIteration");Fi(gm,"onAnimationStart");Fi("dblclick","onDoubleClick");Fi("focusin","onFocus");Fi("focusout","onBlur");Fi(vm,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function qd(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,ny(i,e,void 0,n),n.currentTarget=null}function xm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;qd(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;qd(r,a,c),s=l}}}if(Na)throw n=ou,Na=!1,ou=null,n}function Ve(n,e){var t=e[gu];t===void 0&&(t=e[gu]=new Set);var i=n+"__bubble";t.has(i)||(_m(e,n,2,!1),t.add(i))}function Dc(n,e,t){var i=0;e&&(i|=4),_m(t,n,i,e)}var ma="_reactListening"+Math.random().toString(36).slice(2);function go(n){if(!n[ma]){n[ma]=!0,Ap.forEach(function(t){t!=="selectionchange"&&(nx.has(t)||Dc(t,!1,n),Dc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ma]||(e[ma]=!0,Dc("selectionchange",!1,e))}}function _m(n,e,t,i){switch(im(e)){case 1:var r=yy;break;case 4:r=xy;break;default:r=Yu}t=r.bind(null,e,t,n),r=void 0,!su||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Nc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Wp(function(){var c=s,u=Wu(t),f=[];e:{var h=ym.get(n);if(h!==void 0){var m=Zu,x=n;switch(n){case"keypress":if(ba(t)===0)break e;case"keydown":case"keyup":m=Ny;break;case"focusin":x="focus",m=Lc;break;case"focusout":x="blur",m=Lc;break;case"beforeblur":case"afterblur":m=Lc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=My;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Fy;break;case pm:case mm:case gm:m=Ey;break;case vm:m=Uy;break;case"scroll":m=_y;break;case"wheel":m=Vy;break;case"copy":case"cut":case"paste":m=Ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=kd}var d=(e&4)!==0,p=!d&&n==="scroll",v=d?h!==null?h+"Capture":null:h;d=[];for(var y=c,g;y!==null;){g=y;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,v!==null&&(w=co(y,v),w!=null&&d.push(vo(y,w,g)))),p)break;y=y.return}0<d.length&&(h=new m(h,x,null,t,u),f.push({event:h,listeners:d}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",h&&t!==iu&&(x=t.relatedTarget||t.fromElement)&&(ir(x)||x[oi]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=t.relatedTarget||t.toElement,m=c,x=x?ir(x):null,x!==null&&(p=pr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(d=Dd,w="onMouseLeave",v="onMouseEnter",y="mouse",(n==="pointerout"||n==="pointerover")&&(d=kd,w="onPointerLeave",v="onPointerEnter",y="pointer"),p=m==null?h:Br(m),g=x==null?h:Br(x),h=new d(w,y+"leave",m,t,u),h.target=p,h.relatedTarget=g,w=null,ir(u)===c&&(d=new d(v,y+"enter",x,t,u),d.target=g,d.relatedTarget=p,w=d),p=w,m&&x)t:{for(d=m,v=x,y=0,g=d;g;g=Nr(g))y++;for(g=0,w=v;w;w=Nr(w))g++;for(;0<y-g;)d=Nr(d),y--;for(;0<g-y;)v=Nr(v),g--;for(;y--;){if(d===v||v!==null&&d===v.alternate)break t;d=Nr(d),v=Nr(v)}d=null}else d=null;m!==null&&Yd(f,h,m,d,!1),x!==null&&p!==null&&Yd(f,p,x,d,!0)}}e:{if(h=c?Br(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var b=$y;else if(Od(h))if(cm)b=Ky;else{b=jy;var A=Zy}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=Jy);if(b&&(b=b(n,c))){lm(f,b,t,u);break e}A&&A(n,h,c),n==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Kc(h,"number",h.value)}switch(A=c?Br(c):window,n){case"focusin":(Od(A)||A.contentEditable==="true")&&(Or=A,uu=c,no=null);break;case"focusout":no=uu=Or=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Hd(f,t,u);break;case"selectionchange":if(tx)break;case"keydown":case"keyup":Hd(f,t,u)}var C;if(Ju)e:{switch(n){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Fr?om(n,t)&&(_="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(sm&&t.locale!=="ko"&&(Fr||_!=="onCompositionStart"?_==="onCompositionEnd"&&Fr&&(C=rm()):(Ei=u,$u="value"in Ei?Ei.value:Ei.textContent,Fr=!0)),A=Ua(c,_),0<A.length&&(_=new Nd(_,n,null,t,u),f.push({event:_,listeners:A}),C?_.data=C:(C=am(t),C!==null&&(_.data=C)))),(C=Wy?Gy(n,t):Xy(n,t))&&(c=Ua(c,"onBeforeInput"),0<c.length&&(u=new Nd("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:c}),u.data=C))}xm(f,e)})}function vo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ua(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=co(n,t),s!=null&&i.unshift(vo(n,s,r)),s=co(n,e),s!=null&&i.push(vo(n,s,r))),n=n.return}return i}function Nr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Yd(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=co(t,s),l!=null&&o.unshift(vo(t,l,a))):r||(l=co(t,s),l!=null&&o.push(vo(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var ix=/\r\n?/g,rx=/\u0000|\uFFFD/g;function $d(n){return(typeof n=="string"?n:""+n).replace(ix,`
`).replace(rx,"")}function ga(n,e,t){if(e=$d(e),$d(n)!==e&&t)throw Error(Y(425))}function Ba(){}var fu=null,du=null;function pu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,Zd=typeof Promise=="function"?Promise:void 0,ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Zd<"u"?function(n){return Zd.resolve(null).then(n).catch(ax)}:mu;function ax(n){setTimeout(function(){throw n})}function kc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),fo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);fo(e)}function Li(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function jd(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var as=Math.random().toString(36).slice(2),Xn="__reactFiber$"+as,yo="__reactProps$"+as,oi="__reactContainer$"+as,gu="__reactEvents$"+as,lx="__reactListeners$"+as,cx="__reactHandles$"+as;function ir(n){var e=n[Xn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[oi]||t[Xn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=jd(n);n!==null;){if(t=n[Xn])return t;n=jd(n)}return e}n=t,t=n.parentNode}return null}function Ao(n){return n=n[Xn]||n[oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Br(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Y(33))}function ol(n){return n[yo]||null}var vu=[],Vr=-1;function Oi(n){return{current:n}}function He(n){0>Vr||(n.current=vu[Vr],vu[Vr]=null,Vr--)}function Oe(n,e){Vr++,vu[Vr]=n.current,n.current=e}var zi={},Et=Oi(zi),Gt=Oi(!1),lr=zi;function es(n,e){var t=n.type.contextTypes;if(!t)return zi;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Xt(n){return n=n.childContextTypes,n!=null}function Va(){He(Gt),He(Et)}function Jd(n,e,t){if(Et.current!==zi)throw Error(Y(168));Oe(Et,e),Oe(Gt,t)}function wm(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Y(108,Zv(n)||"Unknown",r));return Je({},t,i)}function Ha(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||zi,lr=Et.current,Oe(Et,n),Oe(Gt,Gt.current),!0}function Kd(n,e,t){var i=n.stateNode;if(!i)throw Error(Y(169));t?(n=wm(n,e,lr),i.__reactInternalMemoizedMergedChildContext=n,He(Gt),He(Et),Oe(Et,n)):He(Gt),Oe(Gt,t)}var ti=null,al=!1,zc=!1;function Mm(n){ti===null?ti=[n]:ti.push(n)}function ux(n){al=!0,Mm(n)}function Ui(){if(!zc&&ti!==null){zc=!0;var n=0,e=ze;try{var t=ti;for(ze=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ti=null,al=!1}catch(r){throw ti!==null&&(ti=ti.slice(n+1)),Yp(Gu,Ui),r}finally{ze=e,zc=!1}}return null}var Hr=[],Wr=0,Wa=null,Ga=0,cn=[],un=0,cr=null,ni=1,ii="";function tr(n,e){Hr[Wr++]=Ga,Hr[Wr++]=Wa,Wa=n,Ga=e}function Sm(n,e,t){cn[un++]=ni,cn[un++]=ii,cn[un++]=cr,cr=n;var i=ni;n=ii;var r=32-An(i)-1;i&=~(1<<r),t+=1;var s=32-An(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ni=1<<32-An(e)+r|t<<r|i,ii=s+n}else ni=1<<s|t<<r|i,ii=n}function Qu(n){n.return!==null&&(tr(n,1),Sm(n,1,0))}function eh(n){for(;n===Wa;)Wa=Hr[--Wr],Hr[Wr]=null,Ga=Hr[--Wr],Hr[Wr]=null;for(;n===cr;)cr=cn[--un],cn[un]=null,ii=cn[--un],cn[un]=null,ni=cn[--un],cn[un]=null}var Jt=null,jt=null,Xe=!1,Tn=null;function bm(n,e){var t=hn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Qd(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Jt=n,jt=Li(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Jt=n,jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=cr!==null?{id:ni,overflow:ii}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=hn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Jt=n,jt=null,!0):!1;default:return!1}}function yu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function xu(n){if(Xe){var e=jt;if(e){var t=e;if(!Qd(n,e)){if(yu(n))throw Error(Y(418));e=Li(t.nextSibling);var i=Jt;e&&Qd(n,e)?bm(i,t):(n.flags=n.flags&-4097|2,Xe=!1,Jt=n)}}else{if(yu(n))throw Error(Y(418));n.flags=n.flags&-4097|2,Xe=!1,Jt=n}}}function ep(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Jt=n}function va(n){if(n!==Jt)return!1;if(!Xe)return ep(n),Xe=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!pu(n.type,n.memoizedProps)),e&&(e=jt)){if(yu(n))throw Em(),Error(Y(418));for(;e;)bm(n,e),e=Li(e.nextSibling)}if(ep(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Y(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){jt=Li(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}jt=null}}else jt=Jt?Li(n.stateNode.nextSibling):null;return!0}function Em(){for(var n=jt;n;)n=Li(n.nextSibling)}function ts(){jt=Jt=null,Xe=!1}function th(n){Tn===null?Tn=[n]:Tn.push(n)}var hx=ci.ReactCurrentBatchConfig;function bn(n,e){if(n&&n.defaultProps){e=Je({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Xa=Oi(null),qa=null,Gr=null,nh=null;function ih(){nh=Gr=qa=null}function rh(n){var e=Xa.current;He(Xa),n._currentValue=e}function _u(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Jr(n,e){qa=n,nh=Gr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Wt=!0),n.firstContext=null)}function dn(n){var e=n._currentValue;if(nh!==n)if(n={context:n,memoizedValue:e,next:null},Gr===null){if(qa===null)throw Error(Y(308));Gr=n,qa.dependencies={lanes:0,firstContext:n}}else Gr=Gr.next=n;return e}var rr=null;function sh(n){rr===null?rr=[n]:rr.push(n)}function Tm(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,sh(e)):(t.next=r.next,r.next=t),e.interleaved=t,ai(n,i)}function ai(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Mi=!1;function oh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Am(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ri(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ri(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ie&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ai(n,t)}return r=i.interleaved,r===null?(e.next=e,sh(i)):(e.next=r.next,r.next=e),i.interleaved=e,ai(n,t)}function Ea(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Xu(n,t)}}function tp(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ya(n,e,t,i){var r=n.updateQueue;Mi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,d=a;switch(h=e,m=t,d.tag){case 1:if(x=d.payload,typeof x=="function"){f=x.call(m,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=d.payload,h=typeof x=="function"?x.call(m,f,h):x,h==null)break e;f=Je({},f,h);break e;case 2:Mi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=f):u=u.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);hr|=o,n.lanes=o,n.memoizedState=f}}function np(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Y(191,r));r.call(i)}}}var Cm=new Tp.Component().refs;function wu(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Je({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ll={isMounted:function(n){return(n=n._reactInternals)?pr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=kt(),r=Di(n),s=ri(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ri(n,s,r),e!==null&&(Cn(e,n,r,i),Ea(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=kt(),r=Di(n),s=ri(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ri(n,s,r),e!==null&&(Cn(e,n,r,i),Ea(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=kt(),i=Di(n),r=ri(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ri(n,r,i),e!==null&&(Cn(e,n,i,t),Ea(e,n,i))}};function ip(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!mo(t,i)||!mo(r,s):!0}function Pm(n,e,t){var i=!1,r=zi,s=e.contextType;return typeof s=="object"&&s!==null?s=dn(s):(r=Xt(e)?lr:Et.current,i=e.contextTypes,s=(i=i!=null)?es(n,r):zi),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ll,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function rp(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&ll.enqueueReplaceState(e,e.state,null)}function Mu(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Cm,oh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=dn(s):(s=Xt(e)?lr:Et.current,r.context=es(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wu(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ll.enqueueReplaceState(r,r.state,null),Ya(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Y(309));var i=t.stateNode}if(!i)throw Error(Y(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Cm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Y(284));if(!t._owner)throw Error(Y(290,n))}return n}function ya(n,e){throw n=Object.prototype.toString.call(e),Error(Y(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function sp(n){var e=n._init;return e(n._payload)}function Lm(n){function e(v,y){if(n){var g=v.deletions;g===null?(v.deletions=[y],v.flags|=16):g.push(y)}}function t(v,y){if(!n)return null;for(;y!==null;)e(v,y),y=y.sibling;return null}function i(v,y){for(v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function r(v,y){return v=Ni(v,y),v.index=0,v.sibling=null,v}function s(v,y,g){return v.index=g,n?(g=v.alternate,g!==null?(g=g.index,g<y?(v.flags|=2,y):g):(v.flags|=2,y)):(v.flags|=1048576,y)}function o(v){return n&&v.alternate===null&&(v.flags|=2),v}function a(v,y,g,w){return y===null||y.tag!==6?(y=Wc(g,v.mode,w),y.return=v,y):(y=r(y,g),y.return=v,y)}function l(v,y,g,w){var b=g.type;return b===zr?u(v,y,g.props.children,w,g.key):y!==null&&(y.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===wi&&sp(b)===y.type)?(w=r(y,g.props),w.ref=Gs(v,y,g),w.return=v,w):(w=Ra(g.type,g.key,g.props,null,v.mode,w),w.ref=Gs(v,y,g),w.return=v,w)}function c(v,y,g,w){return y===null||y.tag!==4||y.stateNode.containerInfo!==g.containerInfo||y.stateNode.implementation!==g.implementation?(y=Gc(g,v.mode,w),y.return=v,y):(y=r(y,g.children||[]),y.return=v,y)}function u(v,y,g,w,b){return y===null||y.tag!==7?(y=ar(g,v.mode,w,b),y.return=v,y):(y=r(y,g),y.return=v,y)}function f(v,y,g){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Wc(""+y,v.mode,g),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ia:return g=Ra(y.type,y.key,y.props,null,v.mode,g),g.ref=Gs(v,null,y),g.return=v,g;case kr:return y=Gc(y,v.mode,g),y.return=v,y;case wi:var w=y._init;return f(v,w(y._payload),g)}if(Zs(y)||Bs(y))return y=ar(y,v.mode,g,null),y.return=v,y;ya(v,y)}return null}function h(v,y,g,w){var b=y!==null?y.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(v,y,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ia:return g.key===b?l(v,y,g,w):null;case kr:return g.key===b?c(v,y,g,w):null;case wi:return b=g._init,h(v,y,b(g._payload),w)}if(Zs(g)||Bs(g))return b!==null?null:u(v,y,g,w,null);ya(v,g)}return null}function m(v,y,g,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(g)||null,a(y,v,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ia:return v=v.get(w.key===null?g:w.key)||null,l(y,v,w,b);case kr:return v=v.get(w.key===null?g:w.key)||null,c(y,v,w,b);case wi:var A=w._init;return m(v,y,g,A(w._payload),b)}if(Zs(w)||Bs(w))return v=v.get(g)||null,u(y,v,w,b,null);ya(y,w)}return null}function x(v,y,g,w){for(var b=null,A=null,C=y,_=y=0,T=null;C!==null&&_<g.length;_++){C.index>_?(T=C,C=null):T=C.sibling;var L=h(v,C,g[_],w);if(L===null){C===null&&(C=T);break}n&&C&&L.alternate===null&&e(v,C),y=s(L,y,_),A===null?b=L:A.sibling=L,A=L,C=T}if(_===g.length)return t(v,C),Xe&&tr(v,_),b;if(C===null){for(;_<g.length;_++)C=f(v,g[_],w),C!==null&&(y=s(C,y,_),A===null?b=C:A.sibling=C,A=C);return Xe&&tr(v,_),b}for(C=i(v,C);_<g.length;_++)T=m(C,v,_,g[_],w),T!==null&&(n&&T.alternate!==null&&C.delete(T.key===null?_:T.key),y=s(T,y,_),A===null?b=T:A.sibling=T,A=T);return n&&C.forEach(function(W){return e(v,W)}),Xe&&tr(v,_),b}function d(v,y,g,w){var b=Bs(g);if(typeof b!="function")throw Error(Y(150));if(g=b.call(g),g==null)throw Error(Y(151));for(var A=b=null,C=y,_=y=0,T=null,L=g.next();C!==null&&!L.done;_++,L=g.next()){C.index>_?(T=C,C=null):T=C.sibling;var W=h(v,C,L.value,w);if(W===null){C===null&&(C=T);break}n&&C&&W.alternate===null&&e(v,C),y=s(W,y,_),A===null?b=W:A.sibling=W,A=W,C=T}if(L.done)return t(v,C),Xe&&tr(v,_),b;if(C===null){for(;!L.done;_++,L=g.next())L=f(v,L.value,w),L!==null&&(y=s(L,y,_),A===null?b=L:A.sibling=L,A=L);return Xe&&tr(v,_),b}for(C=i(v,C);!L.done;_++,L=g.next())L=m(C,v,_,L.value,w),L!==null&&(n&&L.alternate!==null&&C.delete(L.key===null?_:L.key),y=s(L,y,_),A===null?b=L:A.sibling=L,A=L);return n&&C.forEach(function(j){return e(v,j)}),Xe&&tr(v,_),b}function p(v,y,g,w){if(typeof g=="object"&&g!==null&&g.type===zr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ia:e:{for(var b=g.key,A=y;A!==null;){if(A.key===b){if(b=g.type,b===zr){if(A.tag===7){t(v,A.sibling),y=r(A,g.props.children),y.return=v,v=y;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===wi&&sp(b)===A.type){t(v,A.sibling),y=r(A,g.props),y.ref=Gs(v,A,g),y.return=v,v=y;break e}t(v,A);break}else e(v,A);A=A.sibling}g.type===zr?(y=ar(g.props.children,v.mode,w,g.key),y.return=v,v=y):(w=Ra(g.type,g.key,g.props,null,v.mode,w),w.ref=Gs(v,y,g),w.return=v,v=w)}return o(v);case kr:e:{for(A=g.key;y!==null;){if(y.key===A)if(y.tag===4&&y.stateNode.containerInfo===g.containerInfo&&y.stateNode.implementation===g.implementation){t(v,y.sibling),y=r(y,g.children||[]),y.return=v,v=y;break e}else{t(v,y);break}else e(v,y);y=y.sibling}y=Gc(g,v.mode,w),y.return=v,v=y}return o(v);case wi:return A=g._init,p(v,y,A(g._payload),w)}if(Zs(g))return x(v,y,g,w);if(Bs(g))return d(v,y,g,w);ya(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,y!==null&&y.tag===6?(t(v,y.sibling),y=r(y,g),y.return=v,v=y):(t(v,y),y=Wc(g,v.mode,w),y.return=v,v=y),o(v)):t(v,y)}return p}var ns=Lm(!0),Rm=Lm(!1),Co={},Yn=Oi(Co),xo=Oi(Co),_o=Oi(Co);function sr(n){if(n===Co)throw Error(Y(174));return n}function ah(n,e){switch(Oe(_o,e),Oe(xo,n),Oe(Yn,Co),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:eu(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=eu(e,n)}He(Yn),Oe(Yn,e)}function is(){He(Yn),He(xo),He(_o)}function Im(n){sr(_o.current);var e=sr(Yn.current),t=eu(e,n.type);e!==t&&(Oe(xo,n),Oe(Yn,t))}function lh(n){xo.current===n&&(He(Yn),He(xo))}var Ze=Oi(0);function $a(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fc=[];function ch(){for(var n=0;n<Fc.length;n++)Fc[n]._workInProgressVersionPrimary=null;Fc.length=0}var Ta=ci.ReactCurrentDispatcher,Oc=ci.ReactCurrentBatchConfig,ur=0,je=null,ot=null,dt=null,Za=!1,io=!1,wo=0,fx=0;function Mt(){throw Error(Y(321))}function uh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Pn(n[t],e[t]))return!1;return!0}function hh(n,e,t,i,r,s){if(ur=s,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ta.current=n===null||n.memoizedState===null?gx:vx,n=t(i,r),io){s=0;do{if(io=!1,wo=0,25<=s)throw Error(Y(301));s+=1,dt=ot=null,e.updateQueue=null,Ta.current=yx,n=t(i,r)}while(io)}if(Ta.current=ja,e=ot!==null&&ot.next!==null,ur=0,dt=ot=je=null,Za=!1,e)throw Error(Y(300));return n}function fh(){var n=wo!==0;return wo=0,n}function Gn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?je.memoizedState=dt=n:dt=dt.next=n,dt}function pn(){if(ot===null){var n=je.alternate;n=n!==null?n.memoizedState:null}else n=ot.next;var e=dt===null?je.memoizedState:dt.next;if(e!==null)dt=e,ot=n;else{if(n===null)throw Error(Y(310));ot=n,n={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},dt===null?je.memoizedState=dt=n:dt=dt.next=n}return dt}function Mo(n,e){return typeof e=="function"?e(n):e}function Uc(n){var e=pn(),t=e.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=n;var i=ot,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ur&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,je.lanes|=u,hr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Pn(i,e.memoizedState)||(Wt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,je.lanes|=s,hr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Bc(n){var e=pn(),t=e.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Pn(s,e.memoizedState)||(Wt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Dm(){}function Nm(n,e){var t=je,i=pn(),r=e(),s=!Pn(i.memoizedState,r);if(s&&(i.memoizedState=r,Wt=!0),i=i.queue,dh(Fm.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||dt!==null&&dt.memoizedState.tag&1){if(t.flags|=2048,So(9,zm.bind(null,t,i,r,e),void 0,null),pt===null)throw Error(Y(349));ur&30||km(t,e,r)}return r}function km(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function zm(n,e,t,i){e.value=t,e.getSnapshot=i,Om(e)&&Um(n)}function Fm(n,e,t){return t(function(){Om(e)&&Um(n)})}function Om(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Pn(n,t)}catch{return!0}}function Um(n){var e=ai(n,1);e!==null&&Cn(e,n,1,-1)}function op(n){var e=Gn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:n},e.queue=n,n=n.dispatch=mx.bind(null,je,n),[e.memoizedState,n]}function So(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Bm(){return pn().memoizedState}function Aa(n,e,t,i){var r=Gn();je.flags|=n,r.memoizedState=So(1|e,t,void 0,i===void 0?null:i)}function cl(n,e,t,i){var r=pn();i=i===void 0?null:i;var s=void 0;if(ot!==null){var o=ot.memoizedState;if(s=o.destroy,i!==null&&uh(i,o.deps)){r.memoizedState=So(e,t,s,i);return}}je.flags|=n,r.memoizedState=So(1|e,t,s,i)}function ap(n,e){return Aa(8390656,8,n,e)}function dh(n,e){return cl(2048,8,n,e)}function Vm(n,e){return cl(4,2,n,e)}function Hm(n,e){return cl(4,4,n,e)}function Wm(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Gm(n,e,t){return t=t!=null?t.concat([n]):null,cl(4,4,Wm.bind(null,e,n),t)}function ph(){}function Xm(n,e){var t=pn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&uh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function qm(n,e){var t=pn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&uh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Ym(n,e,t){return ur&21?(Pn(t,e)||(t=jp(),je.lanes|=t,hr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Wt=!0),n.memoizedState=t)}function dx(n,e){var t=ze;ze=t!==0&&4>t?t:4,n(!0);var i=Oc.transition;Oc.transition={};try{n(!1),e()}finally{ze=t,Oc.transition=i}}function $m(){return pn().memoizedState}function px(n,e,t){var i=Di(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Zm(n))jm(e,t);else if(t=Tm(n,e,t,i),t!==null){var r=kt();Cn(t,n,i,r),Jm(t,e,i)}}function mx(n,e,t){var i=Di(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Zm(n))jm(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Pn(a,o)){var l=e.interleaved;l===null?(r.next=r,sh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Tm(n,e,r,i),t!==null&&(r=kt(),Cn(t,n,i,r),Jm(t,e,i))}}function Zm(n){var e=n.alternate;return n===je||e!==null&&e===je}function jm(n,e){io=Za=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Jm(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Xu(n,t)}}var ja={readContext:dn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},gx={readContext:dn,useCallback:function(n,e){return Gn().memoizedState=[n,e===void 0?null:e],n},useContext:dn,useEffect:ap,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Aa(4194308,4,Wm.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Aa(4194308,4,n,e)},useInsertionEffect:function(n,e){return Aa(4,2,n,e)},useMemo:function(n,e){var t=Gn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Gn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=px.bind(null,je,n),[i.memoizedState,n]},useRef:function(n){var e=Gn();return n={current:n},e.memoizedState=n},useState:op,useDebugValue:ph,useDeferredValue:function(n){return Gn().memoizedState=n},useTransition:function(){var n=op(!1),e=n[0];return n=dx.bind(null,n[1]),Gn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=je,r=Gn();if(Xe){if(t===void 0)throw Error(Y(407));t=t()}else{if(t=e(),pt===null)throw Error(Y(349));ur&30||km(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,ap(Fm.bind(null,i,s,n),[n]),i.flags|=2048,So(9,zm.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Gn(),e=pt.identifierPrefix;if(Xe){var t=ii,i=ni;t=(i&~(1<<32-An(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=wo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=fx++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},vx={readContext:dn,useCallback:Xm,useContext:dn,useEffect:dh,useImperativeHandle:Gm,useInsertionEffect:Vm,useLayoutEffect:Hm,useMemo:qm,useReducer:Uc,useRef:Bm,useState:function(){return Uc(Mo)},useDebugValue:ph,useDeferredValue:function(n){var e=pn();return Ym(e,ot.memoizedState,n)},useTransition:function(){var n=Uc(Mo)[0],e=pn().memoizedState;return[n,e]},useMutableSource:Dm,useSyncExternalStore:Nm,useId:$m,unstable_isNewReconciler:!1},yx={readContext:dn,useCallback:Xm,useContext:dn,useEffect:dh,useImperativeHandle:Gm,useInsertionEffect:Vm,useLayoutEffect:Hm,useMemo:qm,useReducer:Bc,useRef:Bm,useState:function(){return Bc(Mo)},useDebugValue:ph,useDeferredValue:function(n){var e=pn();return ot===null?e.memoizedState=n:Ym(e,ot.memoizedState,n)},useTransition:function(){var n=Bc(Mo)[0],e=pn().memoizedState;return[n,e]},useMutableSource:Dm,useSyncExternalStore:Nm,useId:$m,unstable_isNewReconciler:!1};function rs(n,e){try{var t="",i=e;do t+=$v(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Vc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Su(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var xx=typeof WeakMap=="function"?WeakMap:Map;function Km(n,e,t){t=ri(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ka||(Ka=!0,Du=i),Su(n,e)},t}function Qm(n,e,t){t=ri(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Su(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Su(n,e),typeof i!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function lp(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new xx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Dx.bind(null,n,e,t),e.then(n,n))}function cp(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function up(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ri(-1,1),e.tag=2,Ri(t,e,1))),t.lanes|=1),n)}var _x=ci.ReactCurrentOwner,Wt=!1;function Nt(n,e,t,i){e.child=n===null?Rm(e,null,t,i):ns(e,n.child,t,i)}function hp(n,e,t,i,r){t=t.render;var s=e.ref;return Jr(e,r),i=hh(n,e,t,i,s,r),t=fh(),n!==null&&!Wt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,li(n,e,r)):(Xe&&t&&Qu(e),e.flags|=1,Nt(n,e,i,r),e.child)}function fp(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Mh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,eg(n,e,s,i,r)):(n=Ra(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:mo,t(o,i)&&n.ref===e.ref)return li(n,e,r)}return e.flags|=1,n=Ni(s,i),n.ref=e.ref,n.return=e,e.child=n}function eg(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(mo(s,i)&&n.ref===e.ref)if(Wt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Wt=!0);else return e.lanes=n.lanes,li(n,e,r)}return bu(n,e,t,i,r)}function tg(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(qr,Zt),Zt|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Oe(qr,Zt),Zt|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Oe(qr,Zt),Zt|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Oe(qr,Zt),Zt|=i;return Nt(n,e,r,t),e.child}function ng(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function bu(n,e,t,i,r){var s=Xt(t)?lr:Et.current;return s=es(e,s),Jr(e,r),t=hh(n,e,t,i,s,r),i=fh(),n!==null&&!Wt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,li(n,e,r)):(Xe&&i&&Qu(e),e.flags|=1,Nt(n,e,t,r),e.child)}function dp(n,e,t,i,r){if(Xt(t)){var s=!0;Ha(e)}else s=!1;if(Jr(e,r),e.stateNode===null)Ca(n,e),Pm(e,t,i),Mu(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=dn(c):(c=Xt(t)?lr:Et.current,c=es(e,c));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&rp(e,o,i,c),Mi=!1;var h=e.memoizedState;o.state=h,Ya(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Gt.current||Mi?(typeof u=="function"&&(wu(e,t,u,i),l=e.memoizedState),(a=Mi||ip(e,t,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Am(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:bn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=dn(l):(l=Xt(t)?lr:Et.current,l=es(e,l));var m=t.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&rp(e,o,i,l),Mi=!1,h=e.memoizedState,o.state=h,Ya(e,i,o,r);var x=e.memoizedState;a!==f||h!==x||Gt.current||Mi?(typeof m=="function"&&(wu(e,t,m,i),x=e.memoizedState),(c=Mi||ip(e,t,c,i,h,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Eu(n,e,t,i,s,r)}function Eu(n,e,t,i,r,s){ng(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Kd(e,t,!1),li(n,e,s);i=e.stateNode,_x.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ns(e,n.child,null,s),e.child=ns(e,null,a,s)):Nt(n,e,a,s),e.memoizedState=i.state,r&&Kd(e,t,!0),e.child}function ig(n){var e=n.stateNode;e.pendingContext?Jd(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Jd(n,e.context,!1),ah(n,e.containerInfo)}function pp(n,e,t,i,r){return ts(),th(r),e.flags|=256,Nt(n,e,t,i),e.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function Au(n){return{baseLanes:n,cachePool:null,transitions:null}}function rg(n,e,t){var i=e.pendingProps,r=Ze.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Oe(Ze,r&1),n===null)return xu(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fl(o,i,0,null),n=ar(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Au(t),e.memoizedState=Tu,n):mh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return wx(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ni(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ni(a,s):(s=ar(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Au(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Tu,i}return s=n.child,n=s.sibling,i=Ni(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function mh(n,e){return e=fl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function xa(n,e,t,i){return i!==null&&th(i),ns(e,n.child,null,t),n=mh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function wx(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Vc(Error(Y(422))),xa(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=fl({mode:"visible",children:i.children},r,0,null),s=ar(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ns(e,n.child,null,o),e.child.memoizedState=Au(o),e.memoizedState=Tu,s);if(!(e.mode&1))return xa(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Y(419)),i=Vc(s,i,void 0),xa(n,e,o,i)}if(a=(o&n.childLanes)!==0,Wt||a){if(i=pt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ai(n,r),Cn(i,n,r,-1))}return wh(),i=Vc(Error(Y(421))),xa(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Nx.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,jt=Li(r.nextSibling),Jt=e,Xe=!0,Tn=null,n!==null&&(cn[un++]=ni,cn[un++]=ii,cn[un++]=cr,ni=n.id,ii=n.overflow,cr=e),e=mh(e,i.children),e.flags|=4096,e)}function mp(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),_u(n.return,e,t)}function Hc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function sg(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Nt(n,e,i.children,t),i=Ze.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&mp(n,t,e);else if(n.tag===19)mp(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Oe(Ze,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&$a(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Hc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&$a(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Hc(e,!0,t,null,s);break;case"together":Hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ca(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function li(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),hr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(Y(153));if(e.child!==null){for(n=e.child,t=Ni(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ni(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Mx(n,e,t){switch(e.tag){case 3:ig(e),ts();break;case 5:Im(e);break;case 1:Xt(e.type)&&Ha(e);break;case 4:ah(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Oe(Xa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Oe(Ze,Ze.current&1),e.flags|=128,null):t&e.child.childLanes?rg(n,e,t):(Oe(Ze,Ze.current&1),n=li(n,e,t),n!==null?n.sibling:null);Oe(Ze,Ze.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return sg(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Oe(Ze,Ze.current),i)break;return null;case 22:case 23:return e.lanes=0,tg(n,e,t)}return li(n,e,t)}var og,Cu,ag,lg;og=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Cu=function(){};ag=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,sr(Yn.current);var s=null;switch(t){case"input":r=jc(n,r),i=jc(n,i),s=[];break;case"select":r=Je({},r,{value:void 0}),i=Je({},i,{value:void 0}),s=[];break;case"textarea":r=Qc(n,r),i=Qc(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ba)}tu(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ao.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ao.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ve("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};lg=function(n,e,t,i){t!==i&&(e.flags|=4)};function Xs(n,e){if(!Xe)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function St(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Sx(n,e,t){var i=e.pendingProps;switch(eh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return Xt(e.type)&&Va(),St(e),null;case 3:return i=e.stateNode,is(),He(Gt),He(Et),ch(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(va(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tn!==null&&(zu(Tn),Tn=null))),Cu(n,e),St(e),null;case 5:lh(e);var r=sr(_o.current);if(t=e.type,n!==null&&e.stateNode!=null)ag(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Y(166));return St(e),null}if(n=sr(Yn.current),va(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Xn]=e,i[yo]=s,n=(e.mode&1)!==0,t){case"dialog":Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":case"embed":Ve("load",i);break;case"video":case"audio":for(r=0;r<Js.length;r++)Ve(Js[r],i);break;case"source":Ve("error",i);break;case"img":case"image":case"link":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"input":Sd(i,s),Ve("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ve("invalid",i);break;case"textarea":Ed(i,s),Ve("invalid",i)}tu(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ga(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ga(i.textContent,a,n),r=["children",""+a]):ao.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ve("scroll",i)}switch(t){case"input":ra(i),bd(i,s,!0);break;case"textarea":ra(i),Td(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ba)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=kp(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Xn]=e,n[yo]=i,og(n,e,!1,!1),e.stateNode=n;e:{switch(o=nu(t,i),t){case"dialog":Ve("cancel",n),Ve("close",n),r=i;break;case"iframe":case"object":case"embed":Ve("load",n),r=i;break;case"video":case"audio":for(r=0;r<Js.length;r++)Ve(Js[r],n);r=i;break;case"source":Ve("error",n),r=i;break;case"img":case"image":case"link":Ve("error",n),Ve("load",n),r=i;break;case"details":Ve("toggle",n),r=i;break;case"input":Sd(n,i),r=jc(n,i),Ve("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Je({},i,{value:void 0}),Ve("invalid",n);break;case"textarea":Ed(n,i),r=Qc(n,i),Ve("invalid",n);break;default:r=i}tu(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Op(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zp(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&lo(n,l):typeof l=="number"&&lo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ao.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ve("scroll",n):l!=null&&Uu(n,s,l,o))}switch(t){case"input":ra(n),bd(n,i,!1);break;case"textarea":ra(n),Td(n);break;case"option":i.value!=null&&n.setAttribute("value",""+ki(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Yr(n,!!i.multiple,s,!1):i.defaultValue!=null&&Yr(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ba)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(n&&e.stateNode!=null)lg(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Y(166));if(t=sr(_o.current),sr(Yn.current),va(e)){if(i=e.stateNode,t=e.memoizedProps,i[Xn]=e,(s=i.nodeValue!==t)&&(n=Jt,n!==null))switch(n.tag){case 3:ga(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ga(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Xn]=e,e.stateNode=i}return St(e),null;case 13:if(He(Ze),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&jt!==null&&e.mode&1&&!(e.flags&128))Em(),ts(),e.flags|=98560,s=!1;else if(s=va(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(Y(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Y(317));s[Xn]=e}else ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),s=!1}else Tn!==null&&(zu(Tn),Tn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ze.current&1?at===0&&(at=3):wh())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return is(),Cu(n,e),n===null&&go(e.stateNode.containerInfo),St(e),null;case 10:return rh(e.type._context),St(e),null;case 17:return Xt(e.type)&&Va(),St(e),null;case 19:if(He(Ze),s=e.memoizedState,s===null)return St(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Xs(s,!1);else{if(at!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=$a(n),o!==null){for(e.flags|=128,Xs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Oe(Ze,Ze.current&1|2),e.child}n=n.sibling}s.tail!==null&&tt()>ss&&(e.flags|=128,i=!0,Xs(s,!1),e.lanes=4194304)}else{if(!i)if(n=$a(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Xe)return St(e),null}else 2*tt()-s.renderingStartTime>ss&&t!==1073741824&&(e.flags|=128,i=!0,Xs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=tt(),e.sibling=null,t=Ze.current,Oe(Ze,i?t&1|2:t&1),e):(St(e),null);case 22:case 23:return _h(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Zt&1073741824&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error(Y(156,e.tag))}function bx(n,e){switch(eh(e),e.tag){case 1:return Xt(e.type)&&Va(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return is(),He(Gt),He(Et),ch(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return lh(e),null;case 13:if(He(Ze),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Y(340));ts()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return He(Ze),null;case 4:return is(),null;case 10:return rh(e.type._context),null;case 22:case 23:return _h(),null;case 24:return null;default:return null}}var _a=!1,bt=!1,Ex=typeof WeakSet=="function"?WeakSet:Set,oe=null;function Xr(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Qe(n,e,i)}else t.current=null}function Pu(n,e,t){try{t()}catch(i){Qe(n,e,i)}}var gp=!1;function Tx(n,e){if(fu=Fa,n=fm(),Ku(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=n,h=null;t:for(;;){for(var m;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===n)break t;if(h===t&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(du={focusedElem:n,selectionRange:t},Fa=!1,oe=e;oe!==null;)if(e=oe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,oe=n;else for(;oe!==null;){e=oe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var d=x.memoizedProps,p=x.memoizedState,v=e.stateNode,y=v.getSnapshotBeforeUpdate(e.elementType===e.type?d:bn(e.type,d),p);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(w){Qe(e,e.return,w)}if(n=e.sibling,n!==null){n.return=e.return,oe=n;break}oe=e.return}return x=gp,gp=!1,x}function ro(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Pu(e,t,s)}r=r.next}while(r!==i)}}function ul(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Lu(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function cg(n){var e=n.alternate;e!==null&&(n.alternate=null,cg(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Xn],delete e[yo],delete e[gu],delete e[lx],delete e[cx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ug(n){return n.tag===5||n.tag===3||n.tag===4}function vp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ug(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ru(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ba));else if(i!==4&&(n=n.child,n!==null))for(Ru(n,e,t),n=n.sibling;n!==null;)Ru(n,e,t),n=n.sibling}function Iu(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Iu(n,e,t),n=n.sibling;n!==null;)Iu(n,e,t),n=n.sibling}var gt=null,En=!1;function _i(n,e,t){for(t=t.child;t!==null;)hg(n,e,t),t=t.sibling}function hg(n,e,t){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(nl,t)}catch{}switch(t.tag){case 5:bt||Xr(t,e);case 6:var i=gt,r=En;gt=null,_i(n,e,t),gt=i,En=r,gt!==null&&(En?(n=gt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):gt.removeChild(t.stateNode));break;case 18:gt!==null&&(En?(n=gt,t=t.stateNode,n.nodeType===8?kc(n.parentNode,t):n.nodeType===1&&kc(n,t),fo(n)):kc(gt,t.stateNode));break;case 4:i=gt,r=En,gt=t.stateNode.containerInfo,En=!0,_i(n,e,t),gt=i,En=r;break;case 0:case 11:case 14:case 15:if(!bt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pu(t,e,o),r=r.next}while(r!==i)}_i(n,e,t);break;case 1:if(!bt&&(Xr(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Qe(t,e,a)}_i(n,e,t);break;case 21:_i(n,e,t);break;case 22:t.mode&1?(bt=(i=bt)||t.memoizedState!==null,_i(n,e,t),bt=i):_i(n,e,t);break;default:_i(n,e,t)}}function yp(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Ex),e.forEach(function(i){var r=kx.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Sn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:gt=a.stateNode,En=!1;break e;case 3:gt=a.stateNode.containerInfo,En=!0;break e;case 4:gt=a.stateNode.containerInfo,En=!0;break e}a=a.return}if(gt===null)throw Error(Y(160));hg(s,o,r),gt=null,En=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Qe(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fg(e,n),e=e.sibling}function fg(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Sn(e,n),Wn(n),i&4){try{ro(3,n,n.return),ul(3,n)}catch(d){Qe(n,n.return,d)}try{ro(5,n,n.return)}catch(d){Qe(n,n.return,d)}}break;case 1:Sn(e,n),Wn(n),i&512&&t!==null&&Xr(t,t.return);break;case 5:if(Sn(e,n),Wn(n),i&512&&t!==null&&Xr(t,t.return),n.flags&32){var r=n.stateNode;try{lo(r,"")}catch(d){Qe(n,n.return,d)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Dp(r,s),nu(a,o);var c=nu(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Op(r,f):u==="dangerouslySetInnerHTML"?zp(r,f):u==="children"?lo(r,f):Uu(r,u,f,c)}switch(a){case"input":Jc(r,s);break;case"textarea":Np(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Yr(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Yr(r,!!s.multiple,s.defaultValue,!0):Yr(r,!!s.multiple,s.multiple?[]:"",!1))}r[yo]=s}catch(d){Qe(n,n.return,d)}}break;case 6:if(Sn(e,n),Wn(n),i&4){if(n.stateNode===null)throw Error(Y(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(d){Qe(n,n.return,d)}}break;case 3:if(Sn(e,n),Wn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{fo(e.containerInfo)}catch(d){Qe(n,n.return,d)}break;case 4:Sn(e,n),Wn(n);break;case 13:Sn(e,n),Wn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(yh=tt())),i&4&&yp(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(bt=(c=bt)||u,Sn(e,n),bt=c):Sn(e,n),Wn(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(oe=n,u=n.child;u!==null;){for(f=oe=u;oe!==null;){switch(h=oe,m=h.child,h.tag){case 0:case 11:case 14:case 15:ro(4,h,h.return);break;case 1:Xr(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(d){Qe(i,t,d)}}break;case 5:Xr(h,h.return);break;case 22:if(h.memoizedState!==null){_p(f);continue}}m!==null?(m.return=h,oe=m):_p(f)}u=u.sibling}e:for(u=null,f=n;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Fp("display",o))}catch(d){Qe(n,n.return,d)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(d){Qe(n,n.return,d)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Sn(e,n),Wn(n),i&4&&yp(n);break;case 21:break;default:Sn(e,n),Wn(n)}}function Wn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(ug(t)){var i=t;break e}t=t.return}throw Error(Y(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(lo(r,""),i.flags&=-33);var s=vp(n);Iu(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=vp(n);Ru(n,a,o);break;default:throw Error(Y(161))}}catch(l){Qe(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Ax(n,e,t){oe=n,dg(n,e,t)}function dg(n,e,t){for(var i=(n.mode&1)!==0;oe!==null;){var r=oe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||_a;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||bt;a=_a;var c=bt;if(_a=o,(bt=l)&&!c)for(oe=r;oe!==null;)o=oe,l=o.child,o.tag===22&&o.memoizedState!==null?wp(r):l!==null?(l.return=o,oe=l):wp(r);for(;s!==null;)oe=s,dg(s,e,t),s=s.sibling;oe=r,_a=a,bt=c}xp(n,e,t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,oe=s):xp(n,e,t)}}function xp(n){for(;oe!==null;){var e=oe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:bt||ul(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!bt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:bn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&np(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}np(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&fo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}bt||e.flags&512&&Lu(e)}catch(h){Qe(e,e.return,h)}}if(e===n){oe=null;break}if(t=e.sibling,t!==null){t.return=e.return,oe=t;break}oe=e.return}}function _p(n){for(;oe!==null;){var e=oe;if(e===n){oe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,oe=t;break}oe=e.return}}function wp(n){for(;oe!==null;){var e=oe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ul(4,e)}catch(l){Qe(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Qe(e,r,l)}}var s=e.return;try{Lu(e)}catch(l){Qe(e,s,l)}break;case 5:var o=e.return;try{Lu(e)}catch(l){Qe(e,o,l)}}}catch(l){Qe(e,e.return,l)}if(e===n){oe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,oe=a;break}oe=e.return}}var Cx=Math.ceil,Ja=ci.ReactCurrentDispatcher,gh=ci.ReactCurrentOwner,fn=ci.ReactCurrentBatchConfig,Ie=0,pt=null,rt=null,vt=0,Zt=0,qr=Oi(0),at=0,bo=null,hr=0,hl=0,vh=0,so=null,Ht=null,yh=0,ss=1/0,ei=null,Ka=!1,Du=null,Ii=null,wa=!1,Ti=null,Qa=0,oo=0,Nu=null,Pa=-1,La=0;function kt(){return Ie&6?tt():Pa!==-1?Pa:Pa=tt()}function Di(n){return n.mode&1?Ie&2&&vt!==0?vt&-vt:hx.transition!==null?(La===0&&(La=jp()),La):(n=ze,n!==0||(n=window.event,n=n===void 0?16:im(n.type)),n):1}function Cn(n,e,t,i){if(50<oo)throw oo=0,Nu=null,Error(Y(185));Eo(n,t,i),(!(Ie&2)||n!==pt)&&(n===pt&&(!(Ie&2)&&(hl|=t),at===4&&bi(n,vt)),qt(n,i),t===1&&Ie===0&&!(e.mode&1)&&(ss=tt()+500,al&&Ui()))}function qt(n,e){var t=n.callbackNode;dy(n,e);var i=za(n,n===pt?vt:0);if(i===0)t!==null&&Pd(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Pd(t),e===1)n.tag===0?ux(Mp.bind(null,n)):Mm(Mp.bind(null,n)),ox(function(){!(Ie&6)&&Ui()}),t=null;else{switch(Jp(i)){case 1:t=Gu;break;case 4:t=$p;break;case 16:t=ka;break;case 536870912:t=Zp;break;default:t=ka}t=wg(t,pg.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function pg(n,e){if(Pa=-1,La=0,Ie&6)throw Error(Y(327));var t=n.callbackNode;if(Kr()&&n.callbackNode!==t)return null;var i=za(n,n===pt?vt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=el(n,i);else{e=i;var r=Ie;Ie|=2;var s=gg();(pt!==n||vt!==e)&&(ei=null,ss=tt()+500,or(n,e));do try{Rx();break}catch(a){mg(n,a)}while(!0);ih(),Ja.current=s,Ie=r,rt!==null?e=0:(pt=null,vt=0,e=at)}if(e!==0){if(e===2&&(r=au(n),r!==0&&(i=r,e=ku(n,r))),e===1)throw t=bo,or(n,0),bi(n,i),qt(n,tt()),t;if(e===6)bi(n,i);else{if(r=n.current.alternate,!(i&30)&&!Px(r)&&(e=el(n,i),e===2&&(s=au(n),s!==0&&(i=s,e=ku(n,s))),e===1))throw t=bo,or(n,0),bi(n,i),qt(n,tt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Y(345));case 2:nr(n,Ht,ei);break;case 3:if(bi(n,i),(i&130023424)===i&&(e=yh+500-tt(),10<e)){if(za(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){kt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=mu(nr.bind(null,n,Ht,ei),e);break}nr(n,Ht,ei);break;case 4:if(bi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-An(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Cx(i/1960))-i,10<i){n.timeoutHandle=mu(nr.bind(null,n,Ht,ei),i);break}nr(n,Ht,ei);break;case 5:nr(n,Ht,ei);break;default:throw Error(Y(329))}}}return qt(n,tt()),n.callbackNode===t?pg.bind(null,n):null}function ku(n,e){var t=so;return n.current.memoizedState.isDehydrated&&(or(n,e).flags|=256),n=el(n,e),n!==2&&(e=Ht,Ht=t,e!==null&&zu(e)),n}function zu(n){Ht===null?Ht=n:Ht.push.apply(Ht,n)}function Px(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Pn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bi(n,e){for(e&=~vh,e&=~hl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-An(e),i=1<<t;n[t]=-1,e&=~i}}function Mp(n){if(Ie&6)throw Error(Y(327));Kr();var e=za(n,0);if(!(e&1))return qt(n,tt()),null;var t=el(n,e);if(n.tag!==0&&t===2){var i=au(n);i!==0&&(e=i,t=ku(n,i))}if(t===1)throw t=bo,or(n,0),bi(n,e),qt(n,tt()),t;if(t===6)throw Error(Y(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,nr(n,Ht,ei),qt(n,tt()),null}function xh(n,e){var t=Ie;Ie|=1;try{return n(e)}finally{Ie=t,Ie===0&&(ss=tt()+500,al&&Ui())}}function fr(n){Ti!==null&&Ti.tag===0&&!(Ie&6)&&Kr();var e=Ie;Ie|=1;var t=fn.transition,i=ze;try{if(fn.transition=null,ze=1,n)return n()}finally{ze=i,fn.transition=t,Ie=e,!(Ie&6)&&Ui()}}function _h(){Zt=qr.current,He(qr)}function or(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,sx(t)),rt!==null)for(t=rt.return;t!==null;){var i=t;switch(eh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Va();break;case 3:is(),He(Gt),He(Et),ch();break;case 5:lh(i);break;case 4:is();break;case 13:He(Ze);break;case 19:He(Ze);break;case 10:rh(i.type._context);break;case 22:case 23:_h()}t=t.return}if(pt=n,rt=n=Ni(n.current,null),vt=Zt=e,at=0,bo=null,vh=hl=hr=0,Ht=so=null,rr!==null){for(e=0;e<rr.length;e++)if(t=rr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}rr=null}return n}function mg(n,e){do{var t=rt;try{if(ih(),Ta.current=ja,Za){for(var i=je.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Za=!1}if(ur=0,dt=ot=je=null,io=!1,wo=0,gh.current=null,t===null||t.return===null){at=1,bo=e,rt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=cp(o);if(m!==null){m.flags&=-257,up(m,o,a,s,e),m.mode&1&&lp(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var d=new Set;d.add(l),e.updateQueue=d}else x.add(l);break e}else{if(!(e&1)){lp(s,c,e),wh();break e}l=Error(Y(426))}}else if(Xe&&a.mode&1){var p=cp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),up(p,o,a,s,e),th(rs(l,a));break e}}s=l=rs(l,a),at!==4&&(at=2),so===null?so=[s]:so.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=Km(s,l,e);tp(s,v);break e;case 1:a=l;var y=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ii===null||!Ii.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Qm(s,a,e);tp(s,w);break e}}s=s.return}while(s!==null)}yg(t)}catch(b){e=b,rt===t&&t!==null&&(rt=t=t.return);continue}break}while(!0)}function gg(){var n=Ja.current;return Ja.current=ja,n===null?ja:n}function wh(){(at===0||at===3||at===2)&&(at=4),pt===null||!(hr&268435455)&&!(hl&268435455)||bi(pt,vt)}function el(n,e){var t=Ie;Ie|=2;var i=gg();(pt!==n||vt!==e)&&(ei=null,or(n,e));do try{Lx();break}catch(r){mg(n,r)}while(!0);if(ih(),Ie=t,Ja.current=i,rt!==null)throw Error(Y(261));return pt=null,vt=0,at}function Lx(){for(;rt!==null;)vg(rt)}function Rx(){for(;rt!==null&&!ry();)vg(rt)}function vg(n){var e=_g(n.alternate,n,Zt);n.memoizedProps=n.pendingProps,e===null?yg(n):rt=e,gh.current=null}function yg(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=bx(t,e),t!==null){t.flags&=32767,rt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{at=6,rt=null;return}}else if(t=Sx(t,e,Zt),t!==null){rt=t;return}if(e=e.sibling,e!==null){rt=e;return}rt=e=n}while(e!==null);at===0&&(at=5)}function nr(n,e,t){var i=ze,r=fn.transition;try{fn.transition=null,ze=1,Ix(n,e,t,i)}finally{fn.transition=r,ze=i}return null}function Ix(n,e,t,i){do Kr();while(Ti!==null);if(Ie&6)throw Error(Y(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Y(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(py(n,s),n===pt&&(rt=pt=null,vt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||wa||(wa=!0,wg(ka,function(){return Kr(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=fn.transition,fn.transition=null;var o=ze;ze=1;var a=Ie;Ie|=4,gh.current=null,Tx(n,t),fg(t,n),ex(du),Fa=!!fu,du=fu=null,n.current=t,Ax(t,n,r),sy(),Ie=a,ze=o,fn.transition=s}else n.current=t;if(wa&&(wa=!1,Ti=n,Qa=r),s=n.pendingLanes,s===0&&(Ii=null),ly(t.stateNode,i),qt(n,tt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ka)throw Ka=!1,n=Du,Du=null,n;return Qa&1&&n.tag!==0&&Kr(),s=n.pendingLanes,s&1?n===Nu?oo++:(oo=0,Nu=n):oo=0,Ui(),null}function Kr(){if(Ti!==null){var n=Jp(Qa),e=fn.transition,t=ze;try{if(fn.transition=null,ze=16>n?16:n,Ti===null)var i=!1;else{if(n=Ti,Ti=null,Qa=0,Ie&6)throw Error(Y(331));var r=Ie;for(Ie|=4,oe=n.current;oe!==null;){var s=oe,o=s.child;if(oe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(oe=c;oe!==null;){var u=oe;switch(u.tag){case 0:case 11:case 15:ro(8,u,s)}var f=u.child;if(f!==null)f.return=u,oe=f;else for(;oe!==null;){u=oe;var h=u.sibling,m=u.return;if(cg(u),u===c){oe=null;break}if(h!==null){h.return=m,oe=h;break}oe=m}}}var x=s.alternate;if(x!==null){var d=x.child;if(d!==null){x.child=null;do{var p=d.sibling;d.sibling=null,d=p}while(d!==null)}}oe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,oe=o;else e:for(;oe!==null;){if(s=oe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ro(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,oe=v;break e}oe=s.return}}var y=n.current;for(oe=y;oe!==null;){o=oe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,oe=g;else e:for(o=y;oe!==null;){if(a=oe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ul(9,a)}}catch(b){Qe(a,a.return,b)}if(a===o){oe=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,oe=w;break e}oe=a.return}}if(Ie=r,Ui(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(nl,n)}catch{}i=!0}return i}finally{ze=t,fn.transition=e}}return!1}function Sp(n,e,t){e=rs(t,e),e=Km(n,e,1),n=Ri(n,e,1),e=kt(),n!==null&&(Eo(n,1,e),qt(n,e))}function Qe(n,e,t){if(n.tag===3)Sp(n,n,t);else for(;e!==null;){if(e.tag===3){Sp(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ii===null||!Ii.has(i))){n=rs(t,n),n=Qm(e,n,1),e=Ri(e,n,1),n=kt(),e!==null&&(Eo(e,1,n),qt(e,n));break}}e=e.return}}function Dx(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=kt(),n.pingedLanes|=n.suspendedLanes&t,pt===n&&(vt&t)===t&&(at===4||at===3&&(vt&130023424)===vt&&500>tt()-yh?or(n,0):vh|=t),qt(n,e)}function xg(n,e){e===0&&(n.mode&1?(e=aa,aa<<=1,!(aa&130023424)&&(aa=4194304)):e=1);var t=kt();n=ai(n,e),n!==null&&(Eo(n,e,t),qt(n,t))}function Nx(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),xg(n,t)}function kx(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Y(314))}i!==null&&i.delete(e),xg(n,t)}var _g;_g=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Gt.current)Wt=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Wt=!1,Mx(n,e,t);Wt=!!(n.flags&131072)}else Wt=!1,Xe&&e.flags&1048576&&Sm(e,Ga,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ca(n,e),n=e.pendingProps;var r=es(e,Et.current);Jr(e,t),r=hh(null,e,i,n,r,t);var s=fh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xt(i)?(s=!0,Ha(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,oh(e),r.updater=ll,e.stateNode=r,r._reactInternals=e,Mu(e,i,n,t),e=Eu(null,e,i,!0,s,t)):(e.tag=0,Xe&&s&&Qu(e),Nt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Ca(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Fx(i),n=bn(i,n),r){case 0:e=bu(null,e,i,n,t);break e;case 1:e=dp(null,e,i,n,t);break e;case 11:e=hp(null,e,i,n,t);break e;case 14:e=fp(null,e,i,bn(i.type,n),t);break e}throw Error(Y(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),bu(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),dp(n,e,i,r,t);case 3:e:{if(ig(e),n===null)throw Error(Y(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Am(n,e),Ya(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=rs(Error(Y(423)),e),e=pp(n,e,i,t,r);break e}else if(i!==r){r=rs(Error(Y(424)),e),e=pp(n,e,i,t,r);break e}else for(jt=Li(e.stateNode.containerInfo.firstChild),Jt=e,Xe=!0,Tn=null,t=Rm(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ts(),i===r){e=li(n,e,t);break e}Nt(n,e,i,t)}e=e.child}return e;case 5:return Im(e),n===null&&xu(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,pu(i,r)?o=null:s!==null&&pu(i,s)&&(e.flags|=32),ng(n,e),Nt(n,e,o,t),e.child;case 6:return n===null&&xu(e),null;case 13:return rg(n,e,t);case 4:return ah(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ns(e,null,i,t):Nt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),hp(n,e,i,r,t);case 7:return Nt(n,e,e.pendingProps,t),e.child;case 8:return Nt(n,e,e.pendingProps.children,t),e.child;case 12:return Nt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Oe(Xa,i._currentValue),i._currentValue=o,s!==null)if(Pn(s.value,o)){if(s.children===r.children&&!Gt.current){e=li(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ri(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),_u(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Y(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),_u(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Nt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Jr(e,t),r=dn(r),i=i(r),e.flags|=1,Nt(n,e,i,t),e.child;case 14:return i=e.type,r=bn(i,e.pendingProps),r=bn(i.type,r),fp(n,e,i,r,t);case 15:return eg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Ca(n,e),e.tag=1,Xt(i)?(n=!0,Ha(e)):n=!1,Jr(e,t),Pm(e,i,r),Mu(e,i,r,t),Eu(null,e,i,!0,n,t);case 19:return sg(n,e,t);case 22:return tg(n,e,t)}throw Error(Y(156,e.tag))};function wg(n,e){return Yp(n,e)}function zx(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(n,e,t,i){return new zx(n,e,t,i)}function Mh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Fx(n){if(typeof n=="function")return Mh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Vu)return 11;if(n===Hu)return 14}return 2}function Ni(n,e){var t=n.alternate;return t===null?(t=hn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ra(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Mh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case zr:return ar(t.children,r,s,e);case Bu:o=8,r|=8;break;case qc:return n=hn(12,t,e,r|2),n.elementType=qc,n.lanes=s,n;case Yc:return n=hn(13,t,e,r),n.elementType=Yc,n.lanes=s,n;case $c:return n=hn(19,t,e,r),n.elementType=$c,n.lanes=s,n;case Lp:return fl(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Cp:o=10;break e;case Pp:o=9;break e;case Vu:o=11;break e;case Hu:o=14;break e;case wi:o=16,i=null;break e}throw Error(Y(130,n==null?n:typeof n,""))}return e=hn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ar(n,e,t,i){return n=hn(7,n,i,e),n.lanes=t,n}function fl(n,e,t,i){return n=hn(22,n,i,e),n.elementType=Lp,n.lanes=t,n.stateNode={isHidden:!1},n}function Wc(n,e,t){return n=hn(6,n,null,e),n.lanes=t,n}function Gc(n,e,t){return e=hn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Ox(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Sh(n,e,t,i,r,s,o,a,l){return n=new Ox(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=hn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},oh(s),n}function Ux(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Mg(n){if(!n)return zi;n=n._reactInternals;e:{if(pr(n)!==n||n.tag!==1)throw Error(Y(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Y(171))}if(n.tag===1){var t=n.type;if(Xt(t))return wm(n,t,e)}return e}function Sg(n,e,t,i,r,s,o,a,l){return n=Sh(t,i,!0,n,r,s,o,a,l),n.context=Mg(null),t=n.current,i=kt(),r=Di(t),s=ri(i,r),s.callback=e??null,Ri(t,s,r),n.current.lanes=r,Eo(n,r,i),qt(n,i),n}function dl(n,e,t,i){var r=e.current,s=kt(),o=Di(r);return t=Mg(t),e.context===null?e.context=t:e.pendingContext=t,e=ri(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ri(r,e,o),n!==null&&(Cn(n,r,o,s),Ea(n,r,o)),o}function tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function bp(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function bh(n,e){bp(n,e),(n=n.alternate)&&bp(n,e)}function Bx(){return null}var bg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Eh(n){this._internalRoot=n}pl.prototype.render=Eh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Y(409));dl(n,e,null,null)};pl.prototype.unmount=Eh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;fr(function(){dl(null,n,null,null)}),e[oi]=null}};function pl(n){this._internalRoot=n}pl.prototype.unstable_scheduleHydration=function(n){if(n){var e=em();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Si.length&&e!==0&&e<Si[t].priority;t++);Si.splice(t,0,n),t===0&&nm(n)}};function Th(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ep(){}function Vx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tl(o);s.call(c)}}var o=Sg(e,i,n,0,null,!1,!1,"",Ep);return n._reactRootContainer=o,n[oi]=o.current,go(n.nodeType===8?n.parentNode:n),fr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=tl(l);a.call(c)}}var l=Sh(n,0,!1,null,null,!1,!1,"",Ep);return n._reactRootContainer=l,n[oi]=l.current,go(n.nodeType===8?n.parentNode:n),fr(function(){dl(e,l,t,i)}),l}function gl(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tl(o);a.call(l)}}dl(e,o,n,r)}else o=Vx(t,e,n,r,i);return tl(o)}Kp=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=js(e.pendingLanes);t!==0&&(Xu(e,t|1),qt(e,tt()),!(Ie&6)&&(ss=tt()+500,Ui()))}break;case 13:fr(function(){var i=ai(n,1);if(i!==null){var r=kt();Cn(i,n,1,r)}}),bh(n,1)}};qu=function(n){if(n.tag===13){var e=ai(n,134217728);if(e!==null){var t=kt();Cn(e,n,134217728,t)}bh(n,134217728)}};Qp=function(n){if(n.tag===13){var e=Di(n),t=ai(n,e);if(t!==null){var i=kt();Cn(t,n,e,i)}bh(n,e)}};em=function(){return ze};tm=function(n,e){var t=ze;try{return ze=n,e()}finally{ze=t}};ru=function(n,e,t){switch(e){case"input":if(Jc(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=ol(i);if(!r)throw Error(Y(90));Ip(i),Jc(i,r)}}}break;case"textarea":Np(n,t);break;case"select":e=t.value,e!=null&&Yr(n,!!t.multiple,e,!1)}};Vp=xh;Hp=fr;var Hx={usingClientEntryPoint:!1,Events:[Ao,Br,ol,Up,Bp,xh]},qs={findFiberByHostInstance:ir,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Wx={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Xp(n),n===null?null:n.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||Bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ys=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ys.isDisabled&&Ys.supportsFiber))try{nl=Ys.inject(Wx),qn=Ys}catch{}var Ys;en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hx;en.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Th(e))throw Error(Y(200));return Ux(n,e,null,t)};en.createRoot=function(n,e){if(!Th(n))throw Error(Y(299));var t=!1,i="",r=bg;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Sh(n,1,!1,null,null,t,!1,i,r),n[oi]=e.current,go(n.nodeType===8?n.parentNode:n),new Eh(e)};en.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Y(188)):(n=Object.keys(n).join(","),Error(Y(268,n)));return n=Xp(e),n=n===null?null:n.stateNode,n};en.flushSync=function(n){return fr(n)};en.hydrate=function(n,e,t){if(!ml(e))throw Error(Y(200));return gl(null,n,e,!0,t)};en.hydrateRoot=function(n,e,t){if(!Th(n))throw Error(Y(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=bg;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Sg(e,null,n,1,t??null,r,!1,s,o),n[oi]=e.current,go(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new pl(e)};en.render=function(n,e,t){if(!ml(e))throw Error(Y(200));return gl(null,n,e,!1,t)};en.unmountComponentAtNode=function(n){if(!ml(n))throw Error(Y(40));return n._reactRootContainer?(fr(function(){gl(null,null,n,!1,function(){n._reactRootContainer=null,n[oi]=null})}),!0):!1};en.unstable_batchedUpdates=xh;en.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!ml(t))throw Error(Y(200));if(n==null||n._reactInternals===void 0)throw Error(Y(38));return gl(n,e,t,!1,i)};en.version="18.2.0-next-9e3b772b8-20220608"});var Cg=Qn((iE,Ag)=>{"use strict";function Tg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tg)}catch(n){console.error(n)}}Tg(),Ag.exports=Eg()});var Lg=Qn(Ah=>{"use strict";var Pg=Cg();Ah.createRoot=Pg.createRoot,Ah.hydrateRoot=Pg.hydrateRoot;var rE});var cv=Qn(ic=>{"use strict";var Hb=Ir(),Wb=Symbol.for("react.element"),Gb=Symbol.for("react.fragment"),Xb=Object.prototype.hasOwnProperty,qb=Hb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yb={key:!0,ref:!0,__self:!0,__source:!0};function lv(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Xb.call(e,i)&&!Yb.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Wb,type:n,key:s,ref:o,props:r,_owner:qb.current}}ic.Fragment=Gb;ic.jsx=lv;ic.jsxs=lv});var Pr=Qn((lE,uv)=>{"use strict";uv.exports=cv()});var mE=Vn(Ir()),mv=Vn(Lg());var Jn=Vn(Ir());var $o=Vn(Ir());var Of="150";var Gx=0,Rg=1,Xx=2;var q0=1,qx=2,zo=3,$i=0,on=1,Xi=2;var Yi=0,bs=1,Ig=2,Dg=3,Ng=4,Yx=5,ws=100,$x=101,Zx=102,kg=103,zg=104,jx=200,Jx=201,Kx=202,Qx=203,Y0=204,$0=205,e_=206,t_=207,n_=208,i_=209,r_=210,s_=0,o_=1,a_=2,af=3,l_=4,c_=5,u_=6,h_=7,Z0=0,f_=1,d_=2,gi=0,p_=1,m_=2,g_=3,v_=4,y_=5,j0=300,Cs=301,Ps=302,lf=303,cf=304,ec=306,uf=1e3,Dn=1001,hf=1002,xt=1003,Fg=1004;var Ch=1005;var gn=1006,x_=1007;var Bo=1008;var Sr=1009,__=1010,w_=1011,J0=1012,M_=1013,_r=1014,wr=1015,Vo=1016,S_=1017,b_=1018,Es=1020,E_=1021,Nn=1023,T_=1024,A_=1025,Mr=1026,Ls=1027,C_=1028,P_=1029,L_=1030,R_=1031,I_=1033,Ph=33776,Lh=33777,Rh=33778,Ih=33779,Og=35840,Ug=35841,Bg=35842,Vg=35843,D_=36196,Hg=37492,Wg=37496,Gg=37808,Xg=37809,qg=37810,Yg=37811,$g=37812,Zg=37813,jg=37814,Jg=37815,Kg=37816,Qg=37817,e0=37818,t0=37819,n0=37820,i0=37821,Dh=36492,N_=36283,r0=36284,s0=36285,o0=36286;var Fl=2300,Ol=2301,Nh=2302,a0=2400,l0=2401,c0=2402;var br=3e3,We=3001,k_=3200,z_=3201,F_=0,O_=1;var Zn="srgb",Ho="srgb-linear",K0="display-p3";var kh=7680;var U_=519,u0=35044;var h0="300 es",ff=1035,Zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var zh=Math.PI/180,f0=180/Math.PI;function Yo(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function sn(n,e,t){return Math.max(e,Math.min(t,n))}function B_(n,e){return(n%e+e)%e}function Fh(n,e,t){return(1-t)*n+t*e}function d0(n){return(n&n-1)===0&&n!==0}function V_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vl(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ge=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class n{constructor(){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],x=i[8],d=r[0],p=r[3],v=r[6],y=r[1],g=r[4],w=r[7],b=r[2],A=r[5],C=r[8];return s[0]=o*d+a*y+l*b,s[3]=o*p+a*g+l*A,s[6]=o*v+a*w+l*C,s[1]=c*d+u*y+f*b,s[4]=c*p+u*g+f*A,s[7]=c*v+u*w+f*C,s[2]=h*d+m*y+x*b,s[5]=h*p+m*g+x*A,s[8]=h*v+m*w+x*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,x=t*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let d=1/x;return e[0]=f*d,e[1]=(r*c-u*i)*d,e[2]=(a*i-r*o)*d,e[3]=h*d,e[4]=(u*t-r*l)*d,e[5]=(r*s-a*t)*d,e[6]=m*d,e[7]=(i*l-c*t)*d,e[8]=(o*t-i*s)*d,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Oh.makeScale(e,t)),this}rotate(e){return this.premultiply(Oh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oh.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Oh=new Bt;function Q0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ul(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}var ji=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[o+0],m=s[o+1],x=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=d;return}if(f!==d||l!==h||c!==m||u!==x){let p=1-a,v=l*h+c*m+u*x+f*d,y=v>=0?1:-1,g=1-v*v;if(g>Number.EPSILON){let b=Math.sqrt(g),A=Math.atan2(b,v*y);p=Math.sin(p*A)/b,a=Math.sin(a*A)/b}let w=a*y;if(l=l*p+h*w,c=c*p+m*w,u=u*p+x*w,f=f*p+d*w,p===1-a){let b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+u*f+l*m-c*h,e[t+1]=l*x+u*h+c*f-a*m,e[t+2]=c*x+u*m+a*h-l*f,e[t+3]=u*x-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"YZX":this._x=h*u*f+c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f-h*m*x;break;case"XZY":this._x=h*u*f-c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){let m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(p0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(p0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uh.copy(this).projectOnVector(e),this.sub(Uh)}reflect(e){return this.sub(Uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uh=new k,p0=new ji;function Ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var H_=new Bt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),W_=new Bt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),qi=new k;function G_(n){return n.convertSRGBToLinear(),qi.set(n.r,n.g,n.b).applyMatrix3(W_),n.setRGB(qi.x,qi.y,qi.z)}function X_(n){return qi.set(n.r,n.g,n.b).applyMatrix3(H_),n.setRGB(qi.x,qi.y,qi.z).convertLinearToSRGB()}var q_={[Ho]:n=>n,[Zn]:n=>n.convertSRGBToLinear(),[K0]:G_},Y_={[Ho]:n=>n,[Zn]:n=>n.convertLinearToSRGB(),[K0]:X_},Ft={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Ho},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=q_[e],r=Y_[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},ls,Bl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Ul("canvas")),ls.width=e.width,ls.height=e.height;let i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ul("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ts(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ts(t[i]/255)*255):t[i]=Ts(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vl=class{constructor(e=null){this.isSource=!0,this.uuid=Yo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Vh(r[o].image)):s.push(Vh(r[o]))}else s=Vh(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Vh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $_=0,xn=class n extends Zi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Dn,r=Dn,s=gn,o=Bo,a=Nn,l=Sr,c=n.DEFAULT_ANISOTROPY,u=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Yo(),this.name="",this.source=new Vl(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==j0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uf:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uf:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=j0;xn.DEFAULT_ANISOTROPY=1;var _t=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],x=l[9],d=l[2],p=l[6],v=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(c+1)/2,w=(m+1)/2,b=(v+1)/2,A=(u+h)/4,C=(f+d)/4,_=(x+p)/4;return g>w&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=C/i):w>b?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=A/r,s=_/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=_/s),this.set(i,r,s,t),this}let y=Math.sqrt((p-x)*(p-x)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-x)/y,this.y=(f-d)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yi=class extends Zi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let r={width:e,height:t,depth:1};this.texture=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:gn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Vl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hl=class extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var df=class extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Er=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){let u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){let u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=mr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){let s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)mr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(mr)}else i.boundingBox===null&&i.computeBoundingBox(),Hh.copy(i.boundingBox),Hh.applyMatrix4(e.matrixWorld),this.union(Hh);let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mr),mr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),yl.subVectors(this.max,Po),cs.subVectors(e.a,Po),us.subVectors(e.b,Po),hs.subVectors(e.c,Po),Bi.subVectors(us,cs),Vi.subVectors(hs,us),gr.subVectors(cs,hs);let t=[0,-Bi.z,Bi.y,0,-Vi.z,Vi.y,0,-gr.z,gr.y,Bi.z,0,-Bi.x,Vi.z,0,-Vi.x,gr.z,0,-gr.x,-Bi.y,Bi.x,0,-Vi.y,Vi.x,0,-gr.y,gr.x,0];return!Wh(t,cs,us,hs,yl)||(t=[1,0,0,0,1,0,0,0,1],!Wh(t,cs,us,hs,yl))?!1:(xl.crossVectors(Bi,Vi),t=[xl.x,xl.y,xl.z],Wh(t,cs,us,hs,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ui=[new k,new k,new k,new k,new k,new k,new k,new k],mr=new k,Hh=new Er,cs=new k,us=new k,hs=new k,Bi=new k,Vi=new k,gr=new k,Po=new k,yl=new k,xl=new k,vr=new k;function Wh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){vr.fromArray(n,s);let a=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=t.dot(vr),u=i.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Z_=new Er,Lo=new k,Gh=new k,Wo=class{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Z_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);let t=Lo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(Gh)),this.expandByPoint(Lo.copy(e.center).sub(Gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new k,Xh=new k,_l=new k,Hi=new k,qh=new k,wl=new k,Yh=new k,pf=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xh.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Xh);let s=e.distanceTo(t)*.5,o=-this.direction.dot(_l),a=Hi.dot(this.direction),l=-Hi.dot(_l),c=Hi.lengthSq(),u=Math.abs(1-o*o),f,h,m,x;if(u>0)if(f=o*l-a,h=o*a-l,x=s*u,f>=0)if(h>=-x)if(h<=x){let d=1/u;f*=d,h*=d,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Xh).addScaledVector(_l,h),m}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,r,s){qh.subVectors(t,e),wl.subVectors(i,e),Yh.crossVectors(qh,wl);let o=this.direction.dot(Yh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);let l=a*this.direction.dot(wl.crossVectors(Hi,wl));if(l<0)return null;let c=a*this.direction.dot(qh.cross(Hi));if(c<0||l+c>o)return null;let u=-a*Hi.dot(Yh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ct=class n{constructor(){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,c,u,f,h,m,x,d,p){let v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=f,v[14]=h,v[3]=m,v[7]=x,v[11]=d,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=o*u,m=o*f,x=a*u,d=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=h-d*c,t[9]=-a*l,t[2]=d-h*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,m=l*f,x=c*u,d=c*f;t[0]=h+d*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-x,t[6]=d+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,m=l*f,x=c*u,d=c*f;t[0]=h-d*a,t[4]=-o*f,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*u,t[9]=d-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,m=o*f,x=a*u,d=a*f;t[0]=l*u,t[4]=x*c-m,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,m=o*c,x=a*l,d=a*c;t[0]=l*u,t[4]=d-h*f,t[8]=x*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+x,t[10]=h-d*f}else if(e.order==="XZY"){let h=o*l,m=o*c,x=a*l,d=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=o*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=a*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j_,e,J_)}lookAt(e,t,i){let r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Wi.crossVectors(i,nn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Wi.crossVectors(i,nn)),Wi.normalize(),Ml.crossVectors(nn,Wi),r[0]=Wi.x,r[4]=Ml.x,r[8]=nn.x,r[1]=Wi.y,r[5]=Ml.y,r[9]=nn.y,r[2]=Wi.z,r[6]=Ml.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],x=i[2],d=i[6],p=i[10],v=i[14],y=i[3],g=i[7],w=i[11],b=i[15],A=r[0],C=r[4],_=r[8],T=r[12],L=r[1],W=r[5],j=r[9],z=r[13],I=r[2],H=r[6],J=r[10],Q=r[14],G=r[3],q=r[7],K=r[11],pe=r[15];return s[0]=o*A+a*L+l*I+c*G,s[4]=o*C+a*W+l*H+c*q,s[8]=o*_+a*j+l*J+c*K,s[12]=o*T+a*z+l*Q+c*pe,s[1]=u*A+f*L+h*I+m*G,s[5]=u*C+f*W+h*H+m*q,s[9]=u*_+f*j+h*J+m*K,s[13]=u*T+f*z+h*Q+m*pe,s[2]=x*A+d*L+p*I+v*G,s[6]=x*C+d*W+p*H+v*q,s[10]=x*_+d*j+p*J+v*K,s[14]=x*T+d*z+p*Q+v*pe,s[3]=y*A+g*L+w*I+b*G,s[7]=y*C+g*W+w*H+b*q,s[11]=y*_+g*j+w*J+b*K,s[15]=y*T+g*z+w*Q+b*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],d=e[7],p=e[11],v=e[15];return x*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+d*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+v*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],d=e[13],p=e[14],v=e[15],y=f*p*c-d*h*c+d*l*m-a*p*m-f*l*v+a*h*v,g=x*h*c-u*p*c-x*l*m+o*p*m+u*l*v-o*h*v,w=u*d*c-x*f*c+x*a*m-o*d*m-u*a*v+o*f*v,b=x*f*l-u*d*l-x*a*h+o*d*h+u*a*p-o*f*p,A=t*y+i*g+r*w+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=y*C,e[1]=(d*h*s-f*p*s-d*r*m+i*p*m+f*r*v-i*h*v)*C,e[2]=(a*p*s-d*l*s+d*r*c-i*p*c-a*r*v+i*l*v)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*C,e[4]=g*C,e[5]=(u*p*s-x*h*s+x*r*m-t*p*m-u*r*v+t*h*v)*C,e[6]=(x*l*s-o*p*s-x*r*c+t*p*c+o*r*v-t*l*v)*C,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*C,e[8]=w*C,e[9]=(x*f*s-u*d*s-x*i*m+t*d*m+u*i*v-t*f*v)*C,e[10]=(o*d*s-x*a*s+x*i*c-t*d*c-o*i*v+t*a*v)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*m-t*a*m)*C,e[12]=b*C,e[13]=(u*d*r-x*f*r+x*i*h-t*d*h-u*i*p+t*f*p)*C,e[14]=(x*a*r-o*d*r-x*i*l+t*d*l+o*i*p-t*a*p)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,x=s*f,d=o*u,p=o*f,v=a*f,y=l*c,g=l*u,w=l*f,b=i.x,A=i.y,C=i.z;return r[0]=(1-(d+v))*b,r[1]=(m+w)*b,r[2]=(x-g)*b,r[3]=0,r[4]=(m-w)*A,r[5]=(1-(h+v))*A,r[6]=(p+y)*A,r[7]=0,r[8]=(x+g)*C,r[9]=(p-y)*C,r[10]=(1-(h+d))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=fs.set(r[0],r[1],r[2]).length(),o=fs.set(r[4],r[5],r[6]).length(),a=fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);let c=1/s,u=1/o,f=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,t.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){let a=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){let a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(o-s),f=(t+e)*l,h=(i+r)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},fs=new k,Ln=new Ct,j_=new k(0,0,0),J_=new k(1,1,1),Wi=new k,Ml=new k,nn=new k,m0=new Ct,g0=new ji,Wl=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return m0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return g0.setFromEuler(this),this.setFromQuaternion(g0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wl.DEFAULT_ORDER="XYZ";var Gl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},K_=0,v0=new k,ds=new ji,fi=new Ct,Sl=new k,Ro=new k,Q_=new k,e1=new ji,y0=new k(1,0,0),x0=new k(0,1,0),_0=new k(0,0,1),t1={type:"added"},w0={type:"removed"},kn=class n extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new Wl,i=new ji,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Bt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(y0,e)}rotateY(e){return this.rotateOnAxis(x0,e)}rotateZ(e){return this.rotateOnAxis(_0,e)}translateOnAxis(e,t){return v0.copy(e).applyQuaternion(this.quaternion),this.position.add(v0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(y0,e)}translateY(e){return this.translateOnAxis(x0,e)}translateZ(e){return this.translateOnAxis(_0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sl.copy(e):Sl.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Ro,Sl,this.up):fi.lookAt(Sl,Ro,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(fi),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(t1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(w0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(w0)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){let o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,Q_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++){let s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++){let a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};kn.DEFAULT_UP=new k(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new k,di=new k,$h=new k,pi=new k,ps=new k,ms=new k,M0=new k,Zh=new k,jh=new k,Jh=new k,Oo=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Rn.subVectors(e,t),r.cross(Rn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Rn.subVectors(r,t),di.subVectors(i,t),$h.subVectors(e,t);let o=Rn.dot(Rn),a=Rn.dot(di),l=Rn.dot($h),c=di.dot(di),u=di.dot($h),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);let h=1/f,m=(c*l-a*u)*h,x=(o*u-a*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pi),pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,pi),l.set(0,0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l}static isFrontFacing(e,t,i,r){return Rn.subVectors(i,t),di.subVectors(e,t),Rn.cross(di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Rn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return n.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;ps.subVectors(r,i),ms.subVectors(s,i),Zh.subVectors(e,i);let l=ps.dot(Zh),c=ms.dot(Zh);if(l<=0&&c<=0)return t.copy(i);jh.subVectors(e,r);let u=ps.dot(jh),f=ms.dot(jh);if(u>=0&&f<=u)return t.copy(r);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ps,o);Jh.subVectors(e,s);let m=ps.dot(Jh),x=ms.dot(Jh);if(x>=0&&m<=x)return t.copy(s);let d=m*c-l*x;if(d<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(ms,a);let p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return M0.subVectors(s,r),a=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(M0,a);let v=1/(p+d+h);return o=d*v,a=h*v,t.copy(i).addScaledVector(ps,o).addScaledVector(ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},n1=0,Rs=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=bs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Y0,this.blendDst=$0,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=af,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kh,this.stencilZFail=kh,this.stencilZPass=kh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},bl={h:0,s:0,l:0};function Kh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ue=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ft.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ft.workingColorSpace){if(e=B_(e,1),t=sn(t,0,1),i=sn(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Kh(o,s,e+1/3),this.g=Kh(o,s,e),this.b=Kh(o,s,e-1/3)}return Ft.toWorkingColorSpace(this,r),this}setStyle(e,t=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ft.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ft.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ft.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ft.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zn){let i=ev[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=Bh(e.r),this.g=Bh(e.g),this.b=Bh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Ft.fromWorkingColorSpace(At.copy(this),e),sn(At.r*255,0,255)<<16^sn(At.g*255,0,255)<<8^sn(At.b*255,0,255)<<0}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.fromWorkingColorSpace(At.copy(this),t);let i=At.r,r=At.g,s=At.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Zn){Ft.fromWorkingColorSpace(At.copy(this),e);let t=At.r,i=At.g,r=At.b;return e!==Zn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(In),In.h+=e,In.s+=t,In.l+=i,this.setHSL(In.h,In.s,In.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(bl);let i=Fh(In.h,bl.h,t),r=Fh(In.s,bl.s,t),s=Fh(In.l,bl.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},At=new Ue;Ue.NAMES=ev;var Xl=class extends Rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},st=new k,El=new Ge,yn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=u0,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)El.fromBufferAttribute(this,t),El.applyMatrix3(e),this.setXY(t,El.x,El.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vl(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vl(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vl(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==u0&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var ql=class extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Yl=class extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var vi=class extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var i1=0,mn=new Ct,Qh=new kn,gs=new k,rn=new Er,Io=new Er,mt=new k,Tr=class n extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Q0(e)?Yl:ql)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Bt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,i){return mn.makeTranslation(e,t,i),this.applyMatrix4(mn),this}scale(e,t,i){return mn.makeScale(e,t,i),this.applyMatrix4(mn),this}lookAt(e){return Qh.lookAt(e),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(rn.min,Io.min),rn.expandByPoint(mt),mt.addVectors(rn.max,Io.max),rn.expandByPoint(mt)):(rn.expandByPoint(Io.min),rn.expandByPoint(Io.max))}rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(e,c),mt.add(gs)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<a;L++)c[L]=new k,u[L]=new k;let f=new k,h=new k,m=new k,x=new Ge,d=new Ge,p=new Ge,v=new k,y=new k;function g(L,W,j){f.fromArray(r,L*3),h.fromArray(r,W*3),m.fromArray(r,j*3),x.fromArray(o,L*2),d.fromArray(o,W*2),p.fromArray(o,j*2),h.sub(f),m.sub(f),d.sub(x),p.sub(x);let z=1/(d.x*p.y-p.x*d.y);isFinite(z)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(z),y.copy(m).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(z),c[L].add(v),c[W].add(v),c[j].add(v),u[L].add(y),u[W].add(y),u[j].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let L=0,W=w.length;L<W;++L){let j=w[L],z=j.start,I=j.count;for(let H=z,J=z+I;H<J;H+=3)g(i[H+0],i[H+1],i[H+2])}let b=new k,A=new k,C=new k,_=new k;function T(L){C.fromArray(s,L*3),_.copy(C);let W=c[L];b.copy(W),b.sub(C.multiplyScalar(C.dot(W))).normalize(),A.crossVectors(_,W);let z=A.dot(u[L])<0?-1:1;l[L*4]=b.x,l[L*4+1]=b.y,l[L*4+2]=b.z,l[L*4+3]=z}for(let L=0,W=w.length;L<W;++L){let j=w[L],z=j.start,I=j.count;for(let H=z,J=z+I;H<J;H+=3)T(i[H+0]),T(i[H+1]),T(i[H+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);let r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,m=e.count;h<m;h+=3){let x=e.getX(h+0),d=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,d),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(d,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),m=0,x=0;for(let d=0,p=l.length;d<p;d++){a.isInterleavedBufferAttribute?m=l[d]*a.data.stride+a.offset:m=l[d]*u;for(let v=0;v<u;v++)h[x++]=c[m++]}return new yn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},S0=new Ct,$n=new pf,Tl=new Wo,b0=new k,Do=new k,No=new k,ko=new k,ef=new k,Al=new k,Cl=new Ge,Pl=new Ge,Ll=new Ge,tf=new k,Rl=new k,vn=class extends kn{constructor(e=new Tr,t=new Xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Al.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(ef.fromBufferAttribute(f,e),o?Al.addScaledVector(ef,u):Al.addScaledVector(ef.sub(t),u))}t.add(Al)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(s),$n.copy(e.ray).recast(e.near),Tl.containsPoint($n.origin)===!1&&($n.intersectSphere(Tl,b0)===null||$n.origin.distanceToSquared(b0)>(e.far-e.near)**2))||(S0.copy(s).invert(),$n.copy(e.ray).applyMatrix4(S0),i.boundingBox!==null&&$n.intersectsBox(i.boundingBox)===!1))return;let o,a=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,f=i.groups,h=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){let d=f[m],p=r[d.materialIndex],v=Math.max(d.start,h.start),y=Math.min(a.count,Math.min(d.start+d.count,h.start+h.count));for(let g=v,w=y;g<w;g+=3){let b=a.getX(g),A=a.getX(g+1),C=a.getX(g+2);o=Il(this,p,e,$n,c,u,b,A,C),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{let m=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let d=m,p=x;d<p;d+=3){let v=a.getX(d),y=a.getX(d+1),g=a.getX(d+2);o=Il(this,r,e,$n,c,u,v,y,g),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){let d=f[m],p=r[d.materialIndex],v=Math.max(d.start,h.start),y=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let g=v,w=y;g<w;g+=3){let b=g,A=g+1,C=g+2;o=Il(this,p,e,$n,c,u,b,A,C),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{let m=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let d=m,p=x;d<p;d+=3){let v=d,y=d+1,g=d+2;o=Il(this,r,e,$n,c,u,v,y,g),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}};function r1(n,e,t,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===$i,a),l===null)return null;Rl.copy(a),Rl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Rl);return c<t.near||c>t.far?null:{distance:c,point:Rl.clone(),object:n}}function Il(n,e,t,i,r,s,o,a,l){n.getVertexPosition(o,Do),n.getVertexPosition(a,No),n.getVertexPosition(l,ko);let c=r1(n,e,t,i,Do,No,ko,tf);if(c){r&&(Cl.fromBufferAttribute(r,o),Pl.fromBufferAttribute(r,a),Ll.fromBufferAttribute(r,l),c.uv=Oo.getUV(tf,Do,No,ko,Cl,Pl,Ll,new Ge)),s&&(Cl.fromBufferAttribute(s,o),Pl.fromBufferAttribute(s,a),Ll.fromBufferAttribute(s,l),c.uv2=Oo.getUV(tf,Do,No,ko,Cl,Pl,Ll,new Ge));let u={a:o,b:a,c:l,normal:new k,materialIndex:0};Oo.getNormal(Do,No,ko,u.normal),c.face=u}return c}var Go=class n extends Tr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vi(c,3)),this.setAttribute("normal",new vi(u,3)),this.setAttribute("uv",new vi(f,2));function x(d,p,v,y,g,w,b,A,C,_,T){let L=w/C,W=b/_,j=w/2,z=b/2,I=A/2,H=C+1,J=_+1,Q=0,G=0,q=new k;for(let K=0;K<J;K++){let pe=K*W-z;for(let F=0;F<H;F++){let Z=F*L-j;q[d]=Z*y,q[p]=pe*g,q[v]=I,c.push(q.x,q.y,q.z),q[d]=0,q[p]=0,q[v]=A>0?1:-1,u.push(q.x,q.y,q.z),f.push(F/C),f.push(1-K/_),Q+=1}}for(let K=0;K<_;K++)for(let pe=0;pe<C;pe++){let F=h+pe+H*K,Z=h+pe+H*(K+1),ie=h+(pe+1)+H*(K+1),N=h+(pe+1)+H*K;l.push(F,Z,N),l.push(Z,ie,N),G+=6}a.addGroup(m,G,T),m+=G,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Is(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ot(n){let e={};for(let t=0;t<n.length;t++){let i=Is(n[t]);for(let r in i)e[r]=i[r]}return e}function s1(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tv(n){return n.getRenderTarget()===null&&n.outputEncoding===We?Zn:Ho}var o1={clone:Is,merge:Ot},a1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zn=class extends Rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a1,this.fragmentShader=l1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=s1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},$l=class extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ut=class extends $l{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=f0*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(zh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return f0*2*Math.atan(Math.tan(zh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(zh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vs=-90,ys=1,mf=class extends kn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;let r=new Ut(vs,ys,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);let s=new Ut(vs,ys,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);let o=new Ut(vs,ys,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);let a=new Ut(vs,ys,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);let l=new Ut(vs,ys,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);let c=new Ut(vs,ys,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=gi,e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}},Zl=class extends xn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Cs,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gf=class extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Zl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Go(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Yi});s.uniforms.tEquirect.value=t;let o=new vn(r,s),a=t.minFilter;return t.minFilter===Bo&&(t.minFilter=gn),new mf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},nf=new k,c1=new k,u1=new Bt,mi=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=nf.subVectors(i,t).cross(c1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(nf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||u1.getNormalMatrix(e),r=this.coplanarPoint(nf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xs=new Wo,Dl=new k,jl=class{constructor(e=new mi,t=new mi,i=new mi,r=new mi,s=new mi,o=new mi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],x=i[10],d=i[11],p=i[12],v=i[13],y=i[14],g=i[15];return t[0].setComponents(a-r,f-l,d-h,g-p).normalize(),t[1].setComponents(a+r,f+l,d+h,g+p).normalize(),t[2].setComponents(a+s,f+c,d+m,g+v).normalize(),t[3].setComponents(a-s,f-c,d-m,g-v).normalize(),t[4].setComponents(a-o,f-u,d-x,g-y).normalize(),t[5].setComponents(a+o,f+u,d+x,g+y).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSprite(e){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Dl.x=r.normal.x>0?e.max.x:e.min.x,Dl.y=r.normal.y>0?e.max.y:e.min.y,Dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function h1(n,e){let t=e.isWebGL2,i=new WeakMap;function r(c,u){let f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){let h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}var Xo=class n extends Tr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,m=[],x=[],d=[],p=[];for(let v=0;v<u;v++){let y=v*h-o;for(let g=0;g<c;g++){let w=g*f-s;x.push(w,-y,0),d.push(0,0,1),p.push(g/a),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let y=0;y<a;y++){let g=y+c*v,w=y+c*(v+1),b=y+1+c*(v+1),A=y+1+c*v;m.push(g,w,A),m.push(w,b,A)}this.setIndex(m),this.setAttribute("position",new vi(x,3)),this.setAttribute("normal",new vi(d,3)),this.setAttribute("uv",new vi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},f1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,d1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,m1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y1="vec3 transformed = vec3( position );",x1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_1=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,w1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,R1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,I1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,D1=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,N1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O1="gl_FragColor = linearToOutputTexel( gl_FragColor );",U1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,V1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,X1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,j1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,J1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ew=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tw=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,nw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ow=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,aw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lw=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_w=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ww=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Sw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ew=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Tw=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Rw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Iw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Dw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Nw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Fw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ow=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ww=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$w=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Zw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,nM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,iM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,rM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,sM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,oM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,aM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,lM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,cM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,MM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bM=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,HM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Se={alphamap_fragment:f1,alphamap_pars_fragment:d1,alphatest_fragment:p1,alphatest_pars_fragment:m1,aomap_fragment:g1,aomap_pars_fragment:v1,begin_vertex:y1,beginnormal_vertex:x1,bsdfs:_1,iridescence_fragment:w1,bumpmap_pars_fragment:M1,clipping_planes_fragment:S1,clipping_planes_pars_fragment:b1,clipping_planes_pars_vertex:E1,clipping_planes_vertex:T1,color_fragment:A1,color_pars_fragment:C1,color_pars_vertex:P1,color_vertex:L1,common:R1,cube_uv_reflection_fragment:I1,defaultnormal_vertex:D1,displacementmap_pars_vertex:N1,displacementmap_vertex:k1,emissivemap_fragment:z1,emissivemap_pars_fragment:F1,encodings_fragment:O1,encodings_pars_fragment:U1,envmap_fragment:B1,envmap_common_pars_fragment:V1,envmap_pars_fragment:H1,envmap_pars_vertex:W1,envmap_physical_pars_fragment:tw,envmap_vertex:G1,fog_vertex:X1,fog_pars_vertex:q1,fog_fragment:Y1,fog_pars_fragment:$1,gradientmap_pars_fragment:Z1,lightmap_fragment:j1,lightmap_pars_fragment:J1,lights_lambert_fragment:K1,lights_lambert_pars_fragment:Q1,lights_pars_begin:ew,lights_toon_fragment:nw,lights_toon_pars_fragment:iw,lights_phong_fragment:rw,lights_phong_pars_fragment:sw,lights_physical_fragment:ow,lights_physical_pars_fragment:aw,lights_fragment_begin:lw,lights_fragment_maps:cw,lights_fragment_end:uw,logdepthbuf_fragment:hw,logdepthbuf_pars_fragment:fw,logdepthbuf_pars_vertex:dw,logdepthbuf_vertex:pw,map_fragment:mw,map_pars_fragment:gw,map_particle_fragment:vw,map_particle_pars_fragment:yw,metalnessmap_fragment:xw,metalnessmap_pars_fragment:_w,morphcolor_vertex:ww,morphnormal_vertex:Mw,morphtarget_pars_vertex:Sw,morphtarget_vertex:bw,normal_fragment_begin:Ew,normal_fragment_maps:Tw,normal_pars_fragment:Aw,normal_pars_vertex:Cw,normal_vertex:Pw,normalmap_pars_fragment:Lw,clearcoat_normal_fragment_begin:Rw,clearcoat_normal_fragment_maps:Iw,clearcoat_pars_fragment:Dw,iridescence_pars_fragment:Nw,output_fragment:kw,packing:zw,premultiplied_alpha_fragment:Fw,project_vertex:Ow,dithering_fragment:Uw,dithering_pars_fragment:Bw,roughnessmap_fragment:Vw,roughnessmap_pars_fragment:Hw,shadowmap_pars_fragment:Ww,shadowmap_pars_vertex:Gw,shadowmap_vertex:Xw,shadowmask_pars_fragment:qw,skinbase_vertex:Yw,skinning_pars_vertex:$w,skinning_vertex:Zw,skinnormal_vertex:jw,specularmap_fragment:Jw,specularmap_pars_fragment:Kw,tonemapping_fragment:Qw,tonemapping_pars_fragment:eM,transmission_fragment:tM,transmission_pars_fragment:nM,uv_pars_fragment:iM,uv_pars_vertex:rM,uv_vertex:sM,uv2_pars_fragment:oM,uv2_pars_vertex:aM,uv2_vertex:lM,worldpos_vertex:cM,background_vert:uM,background_frag:hM,backgroundCube_vert:fM,backgroundCube_frag:dM,cube_vert:pM,cube_frag:mM,depth_vert:gM,depth_frag:vM,distanceRGBA_vert:yM,distanceRGBA_frag:xM,equirect_vert:_M,equirect_frag:wM,linedashed_vert:MM,linedashed_frag:SM,meshbasic_vert:bM,meshbasic_frag:EM,meshlambert_vert:TM,meshlambert_frag:AM,meshmatcap_vert:CM,meshmatcap_frag:PM,meshnormal_vert:LM,meshnormal_frag:RM,meshphong_vert:IM,meshphong_frag:DM,meshphysical_vert:NM,meshphysical_frag:kM,meshtoon_vert:zM,meshtoon_frag:FM,points_vert:OM,points_frag:UM,shadow_vert:BM,shadow_frag:VM,sprite_vert:HM,sprite_frag:WM},ne={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Bt},uv2Transform:{value:new Bt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Bt}}},jn={basic:{uniforms:Ot([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Ot([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Ot([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Ot([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Ot([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Ot([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Ot([ne.points,ne.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Ot([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Ot([ne.common,ne.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Ot([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Ot([ne.sprite,ne.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:Ot([ne.common,ne.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:Ot([ne.lights,ne.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};jn.physical={uniforms:Ot([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};var Nl={r:0,b:0,g:0};function GM(n,e,t,i,r,s,o){let a=new Ue(0),l=s===!0?0:1,c,u,f=null,h=0,m=null;function x(p,v){let y=!1,g=v.isScene===!0?v.background:null;g&&g.isTexture&&(g=(v.backgroundBlurriness>0?t:e).get(g));let w=n.xr,b=w.getSession&&w.getSession();b&&b.environmentBlendMode==="additive"&&(g=null),g===null?d(a,l):g&&g.isColor&&(d(g,1),y=!0),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===ec)?(u===void 0&&(u=new vn(new Go(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Is(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=g.encoding!==We,(f!==g||h!==g.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new vn(new Xo(2,2),new zn({name:"BackgroundMaterial",uniforms:Is(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=g.encoding!==We,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,v){p.getRGB(Nl,tv(n)),i.buffers.color.setClear(Nl.r,Nl.g,Nl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(p,v=1){a.set(p),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(a,l)},render:x}}function XM(n,e,t,i){let r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null),c=l,u=!1;function f(I,H,J,Q,G){let q=!1;if(o){let K=d(Q,J,H);c!==K&&(c=K,m(c.object)),q=v(I,Q,J,G),q&&y(I,Q,J,G)}else{let K=H.wireframe===!0;(c.geometry!==Q.id||c.program!==J.id||c.wireframe!==K)&&(c.geometry=Q.id,c.program=J.id,c.wireframe=K,q=!0)}G!==null&&t.update(G,34963),(q||u)&&(u=!1,_(I,H,J,Q),G!==null&&n.bindBuffer(34963,t.get(G).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function x(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function d(I,H,J){let Q=J.wireframe===!0,G=a[I.id];G===void 0&&(G={},a[I.id]=G);let q=G[H.id];q===void 0&&(q={},G[H.id]=q);let K=q[Q];return K===void 0&&(K=p(h()),q[Q]=K),K}function p(I){let H=[],J=[],Q=[];for(let G=0;G<r;G++)H[G]=0,J[G]=0,Q[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:Q,object:I,attributes:{},index:null}}function v(I,H,J,Q){let G=c.attributes,q=H.attributes,K=0,pe=J.getAttributes();for(let F in pe)if(pe[F].location>=0){let ie=G[F],N=q[F];if(N===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(N=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(N=I.instanceColor)),ie===void 0||ie.attribute!==N||N&&ie.data!==N.data)return!0;K++}return c.attributesNum!==K||c.index!==Q}function y(I,H,J,Q){let G={},q=H.attributes,K=0,pe=J.getAttributes();for(let F in pe)if(pe[F].location>=0){let ie=q[F];ie===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor));let N={};N.attribute=ie,ie&&ie.data&&(N.data=ie.data),G[F]=N,K++}c.attributes=G,c.attributesNum=K,c.index=Q}function g(){let I=c.newAttributes;for(let H=0,J=I.length;H<J;H++)I[H]=0}function w(I){b(I,0)}function b(I,H){let J=c.newAttributes,Q=c.enabledAttributes,G=c.attributeDivisors;J[I]=1,Q[I]===0&&(n.enableVertexAttribArray(I),Q[I]=1),G[I]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,H),G[I]=H)}function A(){let I=c.newAttributes,H=c.enabledAttributes;for(let J=0,Q=H.length;J<Q;J++)H[J]!==I[J]&&(n.disableVertexAttribArray(J),H[J]=0)}function C(I,H,J,Q,G,q){i.isWebGL2===!0&&(J===5124||J===5125)?n.vertexAttribIPointer(I,H,J,G,q):n.vertexAttribPointer(I,H,J,Q,G,q)}function _(I,H,J,Q){if(i.isWebGL2===!1&&(I.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();let G=Q.attributes,q=J.getAttributes(),K=H.defaultAttributeValues;for(let pe in q){let F=q[pe];if(F.location>=0){let Z=G[pe];if(Z===void 0&&(pe==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),pe==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){let ie=Z.normalized,N=Z.itemSize,ue=t.get(Z);if(ue===void 0)continue;let le=ue.buffer,he=ue.type,fe=ue.bytesPerElement;if(Z.isInterleavedBufferAttribute){let xe=Z.data,Ee=xe.stride,Ae=Z.offset;if(xe.isInstancedInterleavedBuffer){for(let ke=0;ke<F.locationSize;ke++)b(F.location+ke,xe.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ke=0;ke<F.locationSize;ke++)w(F.location+ke);n.bindBuffer(34962,le);for(let ke=0;ke<F.locationSize;ke++)C(F.location+ke,N/F.locationSize,he,ie,Ee*fe,(Ae+N/F.locationSize*ke)*fe)}else{if(Z.isInstancedBufferAttribute){for(let xe=0;xe<F.locationSize;xe++)b(F.location+xe,Z.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let xe=0;xe<F.locationSize;xe++)w(F.location+xe);n.bindBuffer(34962,le);for(let xe=0;xe<F.locationSize;xe++)C(F.location+xe,N/F.locationSize,he,ie,N*fe,N/F.locationSize*xe*fe)}}else if(K!==void 0){let ie=K[pe];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(F.location,ie);break;case 3:n.vertexAttrib3fv(F.location,ie);break;case 4:n.vertexAttrib4fv(F.location,ie);break;default:n.vertexAttrib1fv(F.location,ie)}}}}A()}function T(){j();for(let I in a){let H=a[I];for(let J in H){let Q=H[J];for(let G in Q)x(Q[G].object),delete Q[G];delete H[J]}delete a[I]}}function L(I){if(a[I.id]===void 0)return;let H=a[I.id];for(let J in H){let Q=H[J];for(let G in Q)x(Q[G].object),delete Q[G];delete H[J]}delete a[I.id]}function W(I){for(let H in a){let J=a[H];if(J[I.id]===void 0)continue;let Q=J[I.id];for(let G in Q)x(Q[G].object),delete Q[G];delete J[I.id]}}function j(){z(),u=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:j,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:L,releaseStatesOfProgram:W,initAttributes:g,enableAttribute:w,disableUnusedAttributes:A}}function qM(n,e,t,i){let r=i.isWebGL2,s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function YM(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext,a=t.precision!==void 0?t.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),x=n.getParameter(34076),d=n.getParameter(34921),p=n.getParameter(36347),v=n.getParameter(36348),y=n.getParameter(36349),g=h>0,w=o||e.has("OES_texture_float"),b=g&&w,A=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:w,floatVertexTextures:b,maxSamples:A}}function $M(n){let e=this,t=null,i=0,r=!1,s=!1,o=new mi,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){let x=f.clippingPlanes,d=f.clipIntersection,p=f.clipShadows,v=n.get(f);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{let y=s?0:i,g=y*4,w=v.clippingState||null;l.value=w,w=u(x,h,g,m);for(let b=0;b!==g;++b)w[b]=t[b];v.clippingState=w,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,x){let d=f!==null?f.length:0,p=null;if(d!==0){if(p=l.value,x!==!0||p===null){let v=m+d*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<v)&&(p=new Float32Array(v));for(let g=0,w=m;g!==d;++g,w+=4)o.copy(f[g]).applyMatrix4(y,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function ZM(n){let e=new WeakMap;function t(o,a){return a===lf?o.mapping=Cs:a===cf&&(o.mapping=Ps),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===lf||a===cf)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new gf(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var vf=class extends $l{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ms=4,E0=[.125,.215,.35,.446,.526,.582],xr=20,rf=new vf,T0=new Ue,sf=null,yr=(1+Math.sqrt(5))/2,_s=1/yr,A0=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,yr,_s),new k(0,yr,-_s),new k(_s,0,yr),new k(-_s,0,yr),new k(yr,_s,0),new k(-yr,_s,0)],Jl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){sf=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sf),e.scissorTest=!1,kl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sf=this._renderer.getRenderTarget();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Vo,format:Nn,encoding:br,depthBuffer:!1},r=C0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C0(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jM(s)),this._blurMaterial=JM(s,e,t)}return r}_compileMaterial(e){let t=new vn(this._lodPlanes[0],e);this._renderer.compile(t,rf)}_sceneToCubeUV(e,t,i,r){let a=new Ut(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(T0),u.toneMapping=gi,u.autoClear=!1;let m=new Xl({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),x=new vn(new Go,m),d=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(T0),d=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):y===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));let g=this._cubeSize;kl(r,y*g,v>2?g:0,g,g),u.setRenderTarget(r),d&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Cs||e.mapping===Ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=L0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new vn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;kl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,rf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=A0[(r-1)%A0.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new vn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xr-1),d=s/x,p=isFinite(s)?1+Math.floor(u*d):xr;p>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xr}`);let v=[],y=0;for(let C=0;C<xr;++C){let _=C/d,T=Math.exp(-_*_/2);v.push(T),C===0?y+=T:C<p&&(y+=2*T)}for(let C=0;C<v.length;C++)v[C]=v[C]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=v,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:g}=this;h.dTheta.value=x,h.mipInt.value=g-i;let w=this._sizeLods[r],b=3*w*(r>g-Ms?r-g+Ms:0),A=4*(this._cubeSize-w);kl(t,b,A,3*w,2*w),l.setRenderTarget(t),l.render(f,rf)}};function jM(n){let e=[],t=[],i=[],r=n,s=n-Ms+1+E0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ms?l=E0[o-n+Ms-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,d=3,p=2,v=1,y=new Float32Array(d*x*m),g=new Float32Array(p*x*m),w=new Float32Array(v*x*m);for(let A=0;A<m;A++){let C=A%3*2/3-1,_=A>2?0:-1,T=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];y.set(T,d*x*A),g.set(h,p*x*A);let L=[A,A,A,A,A,A];w.set(L,v*x*A)}let b=new Tr;b.setAttribute("position",new yn(y,d)),b.setAttribute("uv",new yn(g,p)),b.setAttribute("faceIndex",new yn(w,v)),e.push(b),r>Ms&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function C0(n,e,t){let i=new yi(n,e,t);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function JM(n,e,t){let i=new Float32Array(xr),r=new k(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function P0(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function L0(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Uf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function KM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===lf||l===cf,u=l===Cs||l===Ps;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Jl(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Jl(n));let h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function QM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function eS(n,e,t,i){let r={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete r[h.id];let m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let x in h)e.update(h[x],34962);let m=f.morphAttributes;for(let x in m){let d=m[x];for(let p=0,v=d.length;p<v;p++)e.update(d[p],34962)}}function c(f){let h=[],m=f.index,x=f.attributes.position,d=0;if(m!==null){let y=m.array;d=m.version;for(let g=0,w=y.length;g<w;g+=3){let b=y[g+0],A=y[g+1],C=y[g+2];h.push(b,A,A,C,C,b)}}else{let y=x.array;d=x.version;for(let g=0,w=y.length/3-1;g<w;g+=3){let b=g+0,A=g+1,C=g+2;h.push(b,A,A,C,C,b)}}let p=new(Q0(h)?Yl:ql)(h,1);p.version=d;let v=s.get(f);v&&e.remove(v),s.set(f,p)}function u(f){let h=s.get(f);if(h){let m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function tS(n,e,t,i){let r=i.isWebGL2,s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,a,h*l),t.update(m,s,1)}function f(h,m,x){if(x===0)return;let d,p;if(r)d=n,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,a,h*l,x),t.update(m,s,x)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function nS(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function iS(n,e){return n[0]-e[0]}function rS(n,e){return Math.abs(e[1])-Math.abs(n[1])}function sS(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){let h=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=m!==void 0?m.length:0,d=s.get(u);if(d===void 0||d.count!==x){let I=function(){j.dispose(),s.delete(u),u.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let y=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],C=u.morphAttributes.color||[],_=0;y===!0&&(_=1),g===!0&&(_=2),w===!0&&(_=3);let T=u.attributes.position.count*_,L=1;T>e.maxTextureSize&&(L=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let W=new Float32Array(T*L*4*x),j=new Hl(W,T,L,x);j.type=wr,j.needsUpdate=!0;let z=_*4;for(let H=0;H<x;H++){let J=b[H],Q=A[H],G=C[H],q=T*L*4*H;for(let K=0;K<J.count;K++){let pe=K*z;y===!0&&(o.fromBufferAttribute(J,K),W[q+pe+0]=o.x,W[q+pe+1]=o.y,W[q+pe+2]=o.z,W[q+pe+3]=0),g===!0&&(o.fromBufferAttribute(Q,K),W[q+pe+4]=o.x,W[q+pe+5]=o.y,W[q+pe+6]=o.z,W[q+pe+7]=0),w===!0&&(o.fromBufferAttribute(G,K),W[q+pe+8]=o.x,W[q+pe+9]=o.y,W[q+pe+10]=o.z,W[q+pe+11]=G.itemSize===4?o.w:1)}}d={count:x,texture:j,size:new Ge(T,L)},s.set(u,d),u.addEventListener("dispose",I)}let p=0;for(let y=0;y<h.length;y++)p+=h[y];let v=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{let m=h===void 0?0:h.length,x=i[u.id];if(x===void 0||x.length!==m){x=[];for(let g=0;g<m;g++)x[g]=[g,0];i[u.id]=x}for(let g=0;g<m;g++){let w=x[g];w[0]=g,w[1]=h[g]}x.sort(rS);for(let g=0;g<8;g++)g<m&&x[g][1]?(a[g][0]=x[g][0],a[g][1]=x[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(iS);let d=u.morphAttributes.position,p=u.morphAttributes.normal,v=0;for(let g=0;g<8;g++){let w=a[g],b=w[0],A=w[1];b!==Number.MAX_SAFE_INTEGER&&A?(d&&u.getAttribute("morphTarget"+g)!==d[b]&&u.setAttribute("morphTarget"+g,d[b]),p&&u.getAttribute("morphNormal"+g)!==p[b]&&u.setAttribute("morphNormal"+g,p[b]),r[g]=A,v+=A):(d&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),p&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),r[g]=0)}let y=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function oS(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var iv=new xn,rv=new Hl,sv=new df,ov=new Zl,R0=[],I0=[],D0=new Float32Array(16),N0=new Float32Array(9),k0=new Float32Array(4);function Ns(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=R0[r];if(s===void 0&&(s=new Float32Array(r),R0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function tc(n,e){let t=I0[e];t===void 0&&(t=new Int32Array(e),I0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function aS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function lS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2fv(this.addr,e),ct(t,e)}}function cS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;n.uniform3fv(this.addr,e),ct(t,e)}}function uS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4fv(this.addr,e),ct(t,e)}}function hS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;k0.set(i),n.uniformMatrix2fv(this.addr,!1,k0),ct(t,i)}}function fS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;N0.set(i),n.uniformMatrix3fv(this.addr,!1,N0),ct(t,i)}}function dS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;D0.set(i),n.uniformMatrix4fv(this.addr,!1,D0),ct(t,i)}}function pS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function mS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2iv(this.addr,e),ct(t,e)}}function gS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;n.uniform3iv(this.addr,e),ct(t,e)}}function vS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4iv(this.addr,e),ct(t,e)}}function yS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2uiv(this.addr,e),ct(t,e)}}function _S(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;n.uniform3uiv(this.addr,e),ct(t,e)}}function wS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4uiv(this.addr,e),ct(t,e)}}function MS(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||iv,r)}function SS(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||sv,r)}function bS(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ov,r)}function ES(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||rv,r)}function TS(n){switch(n){case 5126:return aS;case 35664:return lS;case 35665:return cS;case 35666:return uS;case 35674:return hS;case 35675:return fS;case 35676:return dS;case 5124:case 35670:return pS;case 35667:case 35671:return mS;case 35668:case 35672:return gS;case 35669:case 35673:return vS;case 5125:return yS;case 36294:return xS;case 36295:return _S;case 36296:return wS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return SS;case 35680:case 36300:case 36308:case 36293:return bS;case 36289:case 36303:case 36311:case 36292:return ES}}function AS(n,e){n.uniform1fv(this.addr,e)}function CS(n,e){let t=Ns(e,this.size,2);n.uniform2fv(this.addr,t)}function PS(n,e){let t=Ns(e,this.size,3);n.uniform3fv(this.addr,t)}function LS(n,e){let t=Ns(e,this.size,4);n.uniform4fv(this.addr,t)}function RS(n,e){let t=Ns(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function IS(n,e){let t=Ns(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function DS(n,e){let t=Ns(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function NS(n,e){n.uniform1iv(this.addr,e)}function kS(n,e){n.uniform2iv(this.addr,e)}function zS(n,e){n.uniform3iv(this.addr,e)}function FS(n,e){n.uniform4iv(this.addr,e)}function OS(n,e){n.uniform1uiv(this.addr,e)}function US(n,e){n.uniform2uiv(this.addr,e)}function BS(n,e){n.uniform3uiv(this.addr,e)}function VS(n,e){n.uniform4uiv(this.addr,e)}function HS(n,e,t){let i=this.cache,r=e.length,s=tc(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||iv,s[o])}function WS(n,e,t){let i=this.cache,r=e.length,s=tc(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||sv,s[o])}function GS(n,e,t){let i=this.cache,r=e.length,s=tc(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ov,s[o])}function XS(n,e,t){let i=this.cache,r=e.length,s=tc(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||rv,s[o])}function qS(n){switch(n){case 5126:return AS;case 35664:return CS;case 35665:return PS;case 35666:return LS;case 35674:return RS;case 35675:return IS;case 35676:return DS;case 5124:case 35670:return NS;case 35667:case 35671:return kS;case 35668:case 35672:return zS;case 35669:case 35673:return FS;case 5125:return OS;case 36294:return US;case 36295:return BS;case 36296:return VS;case 35678:case 36198:case 36298:case 36306:case 35682:return HS;case 35679:case 36299:case 36307:return WS;case 35680:case 36300:case 36308:case 36293:return GS;case 36289:case 36303:case 36311:case 36292:return XS}}var yf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=TS(t.type)}},xf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=qS(t.type)}},_f=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},of=/(\w+)(\])?(\[|\.)?/g;function z0(n,e){n.seq.push(e),n.map[e.id]=e}function YS(n,e,t){let i=n.name,r=i.length;for(of.lastIndex=0;;){let s=of.exec(i),o=of.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){z0(t,c===void 0?new yf(a,n,e):new xf(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new _f(a),z0(t,f)),t=f}}}var As=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);YS(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function F0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var $S=0;function ZS(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function jS(n){switch(n){case br:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function O0(n,e,t){let i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ZS(n.getShaderSource(e),o)}else return r}function JS(n,e){let t=jS(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function KS(n,e){let t;switch(e){case p_:t="Linear";break;case m_:t="Reinhard";break;case g_:t="OptimizedCineon";break;case v_:t="ACESFilmic";break;case y_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function QS(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fo).join(`
`)}function eb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tb(n,e){let t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Fo(n){return n!==""}function U0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function B0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var nb=/^[ \t]*#include +<([\w\d./]+)>/gm;function wf(n){return n.replace(nb,ib)}function ib(n,e){let t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return wf(t)}var rb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V0(n){return n.replace(rb,sb)}function sb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function H0(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ob(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===q0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zo&&(e="SHADOWMAP_TYPE_VSM"),e}function ab(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Cs:case Ps:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function cb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Z0:e="ENVMAP_BLENDING_MULTIPLY";break;case f_:e="ENVMAP_BLENDING_MIX";break;case d_:e="ENVMAP_BLENDING_ADD";break}return e}function ub(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function hb(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ob(t),c=ab(t),u=lb(t),f=cb(t),h=ub(t),m=t.isWebGL2?"":QS(t),x=eb(s),d=r.createProgram(),p,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[x].filter(Fo).join(`
`),p.length>0&&(p+=`
`),v=[m,x].filter(Fo).join(`
`),v.length>0&&(v+=`
`)):(p=[H0(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),v=[m,H0(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Se.tonemapping_pars_fragment:"",t.toneMapping!==gi?KS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Se.encodings_pars_fragment,JS("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fo).join(`
`)),o=wf(o),o=U0(o,t),o=B0(o,t),a=wf(a),a=U0(a,t),a=B0(a,t),o=V0(o),a=V0(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===h0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===h0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let g=y+p+o,w=y+v+a,b=F0(r,35633,g),A=F0(r,35632,w);if(r.attachShader(d,b),r.attachShader(d,A),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),n.debug.checkShaderErrors){let T=r.getProgramInfoLog(d).trim(),L=r.getShaderInfoLog(b).trim(),W=r.getShaderInfoLog(A).trim(),j=!0,z=!0;if(r.getProgramParameter(d,35714)===!1){j=!1;let I=O0(r,b,"vertex"),H=O0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+T+`
`+I+`
`+H)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(L===""||W==="")&&(z=!1);z&&(this.diagnostics={runnable:j,programLog:T,vertexShader:{log:L,prefix:p},fragmentShader:{log:W,prefix:v}})}r.deleteShader(b),r.deleteShader(A);let C;this.getUniforms=function(){return C===void 0&&(C=new As(r,d)),C};let _;return this.getAttributes=function(){return _===void 0&&(_=tb(r,d)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=$S++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=b,this.fragmentShader=A,this}var fb=0,Mf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Sf(e),t.set(e,i)),i}},Sf=class{constructor(e){this.id=fb++,this.code=e,this.usedTimes=0}};function db(n,e,t,i,r,s,o){let a=new Gl,l=new Mf,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures,m=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_,T,L,W,j){let z=W.fog,I=j.geometry,H=_.isMeshStandardMaterial?W.environment:null,J=(_.isMeshStandardMaterial?t:e).get(_.envMap||H),Q=J&&J.mapping===ec?J.image.height:null,G=x[_.type];_.precision!==null&&(m=r.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));let q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,K=q!==void 0?q.length:0,pe=0;I.morphAttributes.position!==void 0&&(pe=1),I.morphAttributes.normal!==void 0&&(pe=2),I.morphAttributes.color!==void 0&&(pe=3);let F,Z,ie,N;if(G){let Ee=jn[G];F=Ee.vertexShader,Z=Ee.fragmentShader}else F=_.vertexShader,Z=_.fragmentShader,l.update(_),ie=l.getVertexShaderID(_),N=l.getFragmentShaderID(_);let ue=n.getRenderTarget(),le=_.alphaTest>0,he=_.clearcoat>0,fe=_.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:_.type,vertexShader:F,fragmentShader:Z,defines:_.defines,customVertexShaderID:ie,customFragmentShaderID:N,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:h,outputEncoding:ue===null?n.outputEncoding:ue.isXRRenderTarget===!0?ue.texture.encoding:br,map:!!_.map,matcap:!!_.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:Q,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===O_,tangentSpaceNormalMap:_.normalMapType===F_,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===We,clearcoat:he,clearcoatMap:he&&!!_.clearcoatMap,clearcoatRoughnessMap:he&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:he&&!!_.clearcoatNormalMap,iridescence:fe,iridescenceMap:fe&&!!_.iridescenceMap,iridescenceThicknessMap:fe&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===bs,alphaMap:!!_.alphaMap,alphaTest:le,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!I.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!z,useFog:_.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:pe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:_.toneMapped?n.toneMapping:gi,useLegacyLights:n.useLegacyLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xi,flipSided:_.side===on,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)T.push(L),T.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(v(T,_),y(T,_),T.push(n.outputEncoding)),T.push(_.customProgramCacheKey),T.join()}function v(_,T){_.push(T.precision),_.push(T.outputEncoding),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.combine),_.push(T.vertexUvs),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function y(_,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),_.push(a.mask)}function g(_){let T=x[_.type],L;if(T){let W=jn[T];L=o1.clone(W.uniforms)}else L=_.uniforms;return L}function w(_,T){let L;for(let W=0,j=c.length;W<j;W++){let z=c[W];if(z.cacheKey===T){L=z,++L.usedTimes;break}}return L===void 0&&(L=new hb(n,T,_,s),c.push(L)),L}function b(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),_.destroy()}}function A(_){l.remove(_)}function C(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:g,acquireProgram:w,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:C}}function pb(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function mb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function W0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function G0(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,x,d,p){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:d,group:p},n[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=m,v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=d,v.group=p),e++,v}function a(f,h,m,x,d,p){let v=o(f,h,m,x,d,p);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):t.push(v)}function l(f,h,m,x,d,p){let v=o(f,h,m,x,d,p);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function c(f,h){t.length>1&&t.sort(f||mb),i.length>1&&i.sort(h||W0),r.length>1&&r.sort(h||W0)}function u(){for(let f=e,h=n.length;f<h;f++){let m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function gb(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new G0,n.set(i,[o])):r>=s.length?(o=new G0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function vb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ue};break;case"SpotLight":t={position:new k,direction:new k,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function yb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var xb=0;function _b(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wb(n,e){let t=new vb,i=yb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new k);let s=new k,o=new Ct,a=new Ct;function l(u,f){let h=0,m=0,x=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let d=0,p=0,v=0,y=0,g=0,w=0,b=0,A=0,C=0,_=0;u.sort(_b);let T=f===!0?Math.PI:1;for(let W=0,j=u.length;W<j;W++){let z=u[W],I=z.color,H=z.intensity,J=z.distance,Q=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=I.r*H*T,m+=I.g*H*T,x+=I.b*H*T;else if(z.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(z.sh.coefficients[G],H);else if(z.isDirectionalLight){let G=t.get(z);if(G.color.copy(z.color).multiplyScalar(z.intensity*T),z.castShadow){let q=z.shadow,K=i.get(z);K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,r.directionalShadow[d]=K,r.directionalShadowMap[d]=Q,r.directionalShadowMatrix[d]=z.shadow.matrix,w++}r.directional[d]=G,d++}else if(z.isSpotLight){let G=t.get(z);G.position.setFromMatrixPosition(z.matrixWorld),G.color.copy(I).multiplyScalar(H*T),G.distance=J,G.coneCos=Math.cos(z.angle),G.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),G.decay=z.decay,r.spot[v]=G;let q=z.shadow;if(z.map&&(r.spotLightMap[C]=z.map,C++,q.updateMatrices(z),z.castShadow&&_++),r.spotLightMatrix[v]=q.matrix,z.castShadow){let K=i.get(z);K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,r.spotShadow[v]=K,r.spotShadowMap[v]=Q,A++}v++}else if(z.isRectAreaLight){let G=t.get(z);G.color.copy(I).multiplyScalar(H),G.halfWidth.set(z.width*.5,0,0),G.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=G,y++}else if(z.isPointLight){let G=t.get(z);if(G.color.copy(z.color).multiplyScalar(z.intensity*T),G.distance=z.distance,G.decay=z.decay,z.castShadow){let q=z.shadow,K=i.get(z);K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,K.shadowCameraNear=q.camera.near,K.shadowCameraFar=q.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=Q,r.pointShadowMatrix[p]=z.shadow.matrix,b++}r.point[p]=G,p++}else if(z.isHemisphereLight){let G=t.get(z);G.skyColor.copy(z.color).multiplyScalar(H*T),G.groundColor.copy(z.groundColor).multiplyScalar(H*T),r.hemi[g]=G,g++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;let L=r.hash;(L.directionalLength!==d||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==y||L.hemiLength!==g||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==A||L.numSpotMaps!==C)&&(r.directional.length=d,r.spot.length=v,r.rectArea.length=y,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=A+C-_,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=_,L.directionalLength=d,L.pointLength=p,L.spotLength=v,L.rectAreaLength=y,L.hemiLength=g,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=A,L.numSpotMaps=C,r.version=xb++)}function c(u,f){let h=0,m=0,x=0,d=0,p=0,v=f.matrixWorldInverse;for(let y=0,g=u.length;y<g;y++){let w=u[y];if(w.isDirectionalLight){let b=r.directional[h];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(v),h++}else if(w.isSpotLight){let b=r.spot[x];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(v),x++}else if(w.isRectAreaLight){let b=r.rectArea[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(v),a.identity(),o.copy(w.matrixWorld),o.premultiply(v),a.extractRotation(o),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),d++}else if(w.isPointLight){let b=r.point[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(v),m++}else if(w.isHemisphereLight){let b=r.hemi[p];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:r}}function X0(n,e){let t=new wb(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Mb(n,e){let t=new WeakMap;function i(s,o=0){let a=t.get(s),l;return a===void 0?(l=new X0(n,e),t.set(s,[l])):o>=a.length?(l=new X0(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}var bf=class extends Rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ef=class extends Rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Eb(n,e,t){let i=new jl,r=new Ge,s=new Ge,o=new _t,a=new bf({depthPacking:z_}),l=new Ef,c={},u=t.maxTextureSize,f={[$i]:on,[on]:$i,[Xi]:Xi},h=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Sb,fragmentShader:bb}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let x=new Tr;x.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let d=new vn(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=q0,this.render=function(w,b,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;let C=n.getRenderTarget(),_=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Yi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let W=0,j=w.length;W<j;W++){let z=w[W],I=z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);let H=I.getFrameExtents();if(r.multiply(H),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,I.mapSize.y=s.y)),I.map===null){let Q=this.type!==zo?{minFilter:xt,magFilter:xt}:{};I.map=new yi(r.x,r.y,Q),I.map.texture.name=z.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();let J=I.getViewportCount();for(let Q=0;Q<J;Q++){let G=I.getViewport(Q);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),L.viewport(o),I.updateMatrices(z,Q),i=I.getFrustum(),g(b,A,I.camera,z,this.type)}I.isPointLightShadow!==!0&&this.type===zo&&v(I,A),I.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(C,_,T)};function v(w,b){let A=e.update(d);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new yi(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(b,null,A,h,d,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(b,null,A,m,d,null)}function y(w,b,A,C,_,T){let L=null,W=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(W!==void 0)L=W;else if(L=A.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let j=L.uuid,z=b.uuid,I=c[j];I===void 0&&(I={},c[j]=I);let H=I[z];H===void 0&&(H=L.clone(),I[z]=H),L=H}return L.visible=b.visible,L.wireframe=b.wireframe,T===zo?L.side=b.shadowSide!==null?b.shadowSide:b.side:L.side=b.shadowSide!==null?b.shadowSide:f[b.side],L.alphaMap=b.alphaMap,L.alphaTest=b.alphaTest,L.map=b.map,L.clipShadows=b.clipShadows,L.clippingPlanes=b.clippingPlanes,L.clipIntersection=b.clipIntersection,L.displacementMap=b.displacementMap,L.displacementScale=b.displacementScale,L.displacementBias=b.displacementBias,L.wireframeLinewidth=b.wireframeLinewidth,L.linewidth=b.linewidth,A.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(A.matrixWorld),L.nearDistance=C,L.farDistance=_),L}function g(w,b,A,C,_){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===zo)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);let W=e.update(w),j=w.material;if(Array.isArray(j)){let z=W.groups;for(let I=0,H=z.length;I<H;I++){let J=z[I],Q=j[J.materialIndex];if(Q&&Q.visible){let G=y(w,Q,C,A.near,A.far,_);n.renderBufferDirect(A,null,W,G,w,J)}}}else if(j.visible){let z=y(w,j,C,A.near,A.far,_);n.renderBufferDirect(A,null,W,z,w,null)}}let L=w.children;for(let W=0,j=L.length;W<j;W++)g(L[W],b,A,C,_)}}function Tb(n,e,t){let i=t.isWebGL2;function r(){let P=!1,U=new _t,$=null,se=new _t(0,0,0,0);return{setMask:function(ce){$!==ce&&!P&&(n.colorMask(ce,ce,ce,ce),$=ce)},setLocked:function(ce){P=ce},setClear:function(ce,Be,ht,Rt,Un){Un===!0&&(ce*=Rt,Be*=Rt,ht*=Rt),U.set(ce,Be,ht,Rt),se.equals(U)===!1&&(n.clearColor(ce,Be,ht,Rt),se.copy(U))},reset:function(){P=!1,$=null,se.set(-1,0,0,0)}}}function s(){let P=!1,U=null,$=null,se=null;return{setTest:function(ce){ce?le(2929):he(2929)},setMask:function(ce){U!==ce&&!P&&(n.depthMask(ce),U=ce)},setFunc:function(ce){if($!==ce){switch(ce){case s_:n.depthFunc(512);break;case o_:n.depthFunc(519);break;case a_:n.depthFunc(513);break;case af:n.depthFunc(515);break;case l_:n.depthFunc(514);break;case c_:n.depthFunc(518);break;case u_:n.depthFunc(516);break;case h_:n.depthFunc(517);break;default:n.depthFunc(515)}$=ce}},setLocked:function(ce){P=ce},setClear:function(ce){se!==ce&&(n.clearDepth(ce),se=ce)},reset:function(){P=!1,U=null,$=null,se=null}}}function o(){let P=!1,U=null,$=null,se=null,ce=null,Be=null,ht=null,Rt=null,Un=null;return{setTest:function(et){P||(et?le(2960):he(2960))},setMask:function(et){U!==et&&!P&&(n.stencilMask(et),U=et)},setFunc:function(et,an,Bn){($!==et||se!==an||ce!==Bn)&&(n.stencilFunc(et,an,Bn),$=et,se=an,ce=Bn)},setOp:function(et,an,Bn){(Be!==et||ht!==an||Rt!==Bn)&&(n.stencilOp(et,an,Bn),Be=et,ht=an,Rt=Bn)},setLocked:function(et){P=et},setClear:function(et){Un!==et&&(n.clearStencil(et),Un=et)},reset:function(){P=!1,U=null,$=null,se=null,ce=null,Be=null,ht=null,Rt=null,Un=null}}}let a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap,h={},m={},x=new WeakMap,d=[],p=null,v=!1,y=null,g=null,w=null,b=null,A=null,C=null,_=null,T=!1,L=null,W=null,j=null,z=null,I=null,H=n.getParameter(35661),J=!1,Q=0,G=n.getParameter(7938);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),J=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),J=Q>=2);let q=null,K={},pe=n.getParameter(3088),F=n.getParameter(2978),Z=new _t().fromArray(pe),ie=new _t().fromArray(F);function N(P,U,$){let se=new Uint8Array(4),ce=n.createTexture();n.bindTexture(P,ce),n.texParameteri(P,10241,9728),n.texParameteri(P,10240,9728);for(let Be=0;Be<$;Be++)n.texImage2D(U+Be,0,6408,1,1,0,6408,5121,se);return ce}let ue={};ue[3553]=N(3553,3553,1),ue[34067]=N(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),le(2929),l.setFunc(af),Vt(!1),Lt(Rg),le(2884),Pt(Yi);function le(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function he(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function fe(P,U){return m[P]!==U?(n.bindFramebuffer(P,U),m[P]=U,i&&(P===36009&&(m[36160]=U),P===36160&&(m[36009]=U)),!0):!1}function xe(P,U){let $=d,se=!1;if(P)if($=x.get(U),$===void 0&&($=[],x.set(U,$)),P.isWebGLMultipleRenderTargets){let ce=P.texture;if($.length!==ce.length||$[0]!==36064){for(let Be=0,ht=ce.length;Be<ht;Be++)$[Be]=36064+Be;$.length=ce.length,se=!0}}else $[0]!==36064&&($[0]=36064,se=!0);else $[0]!==1029&&($[0]=1029,se=!0);se&&(t.isWebGL2?n.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Ee(P){return p!==P?(n.useProgram(P),p=P,!0):!1}let Ae={[ws]:32774,[$x]:32778,[Zx]:32779};if(i)Ae[kg]=32775,Ae[zg]=32776;else{let P=e.get("EXT_blend_minmax");P!==null&&(Ae[kg]=P.MIN_EXT,Ae[zg]=P.MAX_EXT)}let ke={[jx]:0,[Jx]:1,[Kx]:768,[Y0]:770,[r_]:776,[n_]:774,[e_]:772,[Qx]:769,[$0]:771,[i_]:775,[t_]:773};function Pt(P,U,$,se,ce,Be,ht,Rt){if(P===Yi){v===!0&&(he(3042),v=!1);return}if(v===!1&&(le(3042),v=!0),P!==Yx){if(P!==y||Rt!==T){if((g!==ws||A!==ws)&&(n.blendEquation(32774),g=ws,A=ws),Rt)switch(P){case bs:n.blendFuncSeparate(1,771,1,771);break;case Ig:n.blendFunc(1,1);break;case Dg:n.blendFuncSeparate(0,769,0,1);break;case Ng:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case bs:n.blendFuncSeparate(770,771,1,771);break;case Ig:n.blendFunc(770,1);break;case Dg:n.blendFuncSeparate(0,769,0,1);break;case Ng:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,b=null,C=null,_=null,y=P,T=Rt}return}ce=ce||U,Be=Be||$,ht=ht||se,(U!==g||ce!==A)&&(n.blendEquationSeparate(Ae[U],Ae[ce]),g=U,A=ce),($!==w||se!==b||Be!==C||ht!==_)&&(n.blendFuncSeparate(ke[$],ke[se],ke[Be],ke[ht]),w=$,b=se,C=Be,_=ht),y=P,T=!1}function _n(P,U){P.side===Xi?he(2884):le(2884);let $=P.side===on;U&&($=!$),Vt($),P.blending===bs&&P.transparent===!1?Pt(Yi):Pt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let se=P.stencilWrite;c.setTest(se),se&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ye(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?le(32926):he(32926)}function Vt(P){L!==P&&(P?n.frontFace(2304):n.frontFace(2305),L=P)}function Lt(P){P!==Gx?(le(2884),P!==W&&(P===Rg?n.cullFace(1029):P===Xx?n.cullFace(1028):n.cullFace(1032))):he(2884),W=P}function Ke(P){P!==j&&(J&&n.lineWidth(P),j=P)}function Ye(P,U,$){P?(le(32823),(z!==U||I!==$)&&(n.polygonOffset(U,$),z=U,I=$)):he(32823)}function On(P){P?le(3089):he(3089)}function wn(P){P===void 0&&(P=33984+H-1),q!==P&&(n.activeTexture(P),q=P)}function E(P,U,$){$===void 0&&(q===null?$=33984+H-1:$=q);let se=K[$];se===void 0&&(se={type:void 0,texture:void 0},K[$]=se),(se.type!==P||se.texture!==U)&&(q!==$&&(n.activeTexture($),q=$),n.bindTexture(P,U||ue[P]),se.type=P,se.texture=U)}function M(){let P=K[q];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function B(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(P){Z.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Z.copy(P))}function me(P){ie.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ie.copy(P))}function De(P,U){let $=f.get(U);$===void 0&&($=new WeakMap,f.set(U,$));let se=$.get(P);se===void 0&&(se=n.getUniformBlockIndex(U,P.name),$.set(P,se))}function $e(P,U){let se=f.get(U).get(P);u.get(U)!==se&&(n.uniformBlockBinding(U,se,P.__bindingPointIndex),u.set(U,se))}function ut(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},q=null,K={},m={},x=new WeakMap,d=[],p=null,v=!1,y=null,g=null,w=null,b=null,A=null,C=null,_=null,T=!1,L=null,W=null,j=null,z=null,I=null,Z.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:le,disable:he,bindFramebuffer:fe,drawBuffers:xe,useProgram:Ee,setBlending:Pt,setMaterial:_n,setFlipSided:Vt,setCullFace:Lt,setLineWidth:Ke,setPolygonOffset:Ye,setScissorTest:On,activeTexture:wn,bindTexture:E,unbindTexture:M,compressedTexImage2D:B,compressedTexImage3D:ee,texImage2D:de,texImage3D:we,updateUBOMapping:De,uniformBlockBinding:$e,texStorage2D:X,texStorage3D:_e,texSubImage2D:te,texSubImage3D:re,compressedTexSubImage2D:ge,compressedTexSubImage3D:ae,scissor:ye,viewport:me,reset:ut}}function Ab(n,e,t,i,r,s,o){let a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap,d,p=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,M){return v?new OffscreenCanvas(E,M):Ul("canvas")}function g(E,M,B,ee){let te=1;if((E.width>ee||E.height>ee)&&(te=ee/Math.max(E.width,E.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let re=M?V_:Math.floor,ge=re(te*E.width),ae=re(te*E.height);d===void 0&&(d=y(ge,ae));let X=B?y(ge,ae):d;return X.width=ge,X.height=ae,X.getContext("2d").drawImage(E,0,0,ge,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ge+"x"+ae+")."),X}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function w(E){return d0(E.width)&&d0(E.height)}function b(E){return a?!1:E.wrapS!==Dn||E.wrapT!==Dn||E.minFilter!==xt&&E.minFilter!==gn}function A(E,M){return E.generateMipmaps&&M&&E.minFilter!==xt&&E.minFilter!==gn}function C(E){n.generateMipmap(E)}function _(E,M,B,ee,te=!1){if(a===!1)return M;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let re=M;return M===6403&&(B===5126&&(re=33326),B===5131&&(re=33325),B===5121&&(re=33321)),M===33319&&(B===5126&&(re=33328),B===5131&&(re=33327),B===5121&&(re=33323)),M===6408&&(B===5126&&(re=34836),B===5131&&(re=34842),B===5121&&(re=ee===We&&te===!1?35907:32856),B===32819&&(re=32854),B===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function T(E,M,B){return A(E,B)===!0||E.isFramebufferTexture&&E.minFilter!==xt&&E.minFilter!==gn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function L(E){return E===xt||E===Fg||E===Ch?9728:9729}function W(E){let M=E.target;M.removeEventListener("dispose",W),z(M),M.isVideoTexture&&x.delete(M)}function j(E){let M=E.target;M.removeEventListener("dispose",j),H(M)}function z(E){let M=i.get(E);if(M.__webglInit===void 0)return;let B=E.source,ee=p.get(B);if(ee){let te=ee[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&I(E),Object.keys(ee).length===0&&p.delete(B)}i.remove(E)}function I(E){let M=i.get(E);n.deleteTexture(M.__webglTexture);let B=E.source,ee=p.get(B);delete ee[M.__cacheKey],o.memory.textures--}function H(E){let M=E.texture,B=i.get(E),ee=i.get(M);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)n.deleteFramebuffer(B.__webglFramebuffer[te]),B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[te]);else{if(n.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let te=0;te<B.__webglColorRenderbuffer.length;te++)B.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[te]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let te=0,re=M.length;te<re;te++){let ge=i.get(M[te]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(M[te])}i.remove(M),i.remove(E)}let J=0;function Q(){J=0}function G(){let E=J;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),J+=1,E}function q(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.encoding),M.join()}function K(E,M){let B=i.get(E);if(E.isVideoTexture&&On(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){let ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(B,E,M);return}}t.bindTexture(3553,B.__webglTexture,33984+M)}function pe(E,M){let B=i.get(E);if(E.version>0&&B.__version!==E.version){he(B,E,M);return}t.bindTexture(35866,B.__webglTexture,33984+M)}function F(E,M){let B=i.get(E);if(E.version>0&&B.__version!==E.version){he(B,E,M);return}t.bindTexture(32879,B.__webglTexture,33984+M)}function Z(E,M){let B=i.get(E);if(E.version>0&&B.__version!==E.version){fe(B,E,M);return}t.bindTexture(34067,B.__webglTexture,33984+M)}let ie={[uf]:10497,[Dn]:33071,[hf]:33648},N={[xt]:9728,[Fg]:9984,[Ch]:9986,[gn]:9729,[x_]:9985,[Bo]:9987};function ue(E,M,B){if(B?(n.texParameteri(E,10242,ie[M.wrapS]),n.texParameteri(E,10243,ie[M.wrapT]),(E===32879||E===35866)&&n.texParameteri(E,32882,ie[M.wrapR]),n.texParameteri(E,10240,N[M.magFilter]),n.texParameteri(E,10241,N[M.minFilter])):(n.texParameteri(E,10242,33071),n.texParameteri(E,10243,33071),(E===32879||E===35866)&&n.texParameteri(E,32882,33071),(M.wrapS!==Dn||M.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,10240,L(M.magFilter)),n.texParameteri(E,10241,L(M.minFilter)),M.minFilter!==xt&&M.minFilter!==gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let ee=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===xt||M.minFilter!==Ch&&M.minFilter!==Bo||M.type===wr&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Vo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function le(E,M){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",W));let ee=M.source,te=p.get(ee);te===void 0&&(te={},p.set(ee,te));let re=q(M);if(re!==E.__cacheKey){te[re]===void 0&&(te[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[re].usedTimes++;let ge=te[E.__cacheKey];ge!==void 0&&(te[E.__cacheKey].usedTimes--,ge.usedTimes===0&&I(M)),E.__cacheKey=re,E.__webglTexture=te[re].texture}return B}function he(E,M,B){let ee=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=35866),M.isData3DTexture&&(ee=32879);let te=le(E,M),re=M.source;t.bindTexture(ee,E.__webglTexture,33984+B);let ge=i.get(re);if(re.version!==ge.__version||te===!0){t.activeTexture(33984+B),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);let ae=b(M)&&w(M.image)===!1,X=g(M.image,ae,!1,u);X=wn(M,X);let _e=w(X)||a,de=s.convert(M.format,M.encoding),we=s.convert(M.type),ye=_(M.internalFormat,de,we,M.encoding,M.isVideoTexture);ue(ee,M,_e);let me,De=M.mipmaps,$e=a&&M.isVideoTexture!==!0,ut=ge.__version===void 0||te===!0,P=T(M,X,_e);if(M.isDepthTexture)ye=6402,a?M.type===wr?ye=36012:M.type===_r?ye=33190:M.type===Es?ye=35056:ye=33189:M.type===wr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Mr&&ye===6402&&M.type!==J0&&M.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=_r,we=s.convert(M.type)),M.format===Ls&&ye===6402&&(ye=34041,M.type!==Es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Es,we=s.convert(M.type))),ut&&($e?t.texStorage2D(3553,1,ye,X.width,X.height):t.texImage2D(3553,0,ye,X.width,X.height,0,de,we,null));else if(M.isDataTexture)if(De.length>0&&_e){$e&&ut&&t.texStorage2D(3553,P,ye,De[0].width,De[0].height);for(let U=0,$=De.length;U<$;U++)me=De[U],$e?t.texSubImage2D(3553,U,0,0,me.width,me.height,de,we,me.data):t.texImage2D(3553,U,ye,me.width,me.height,0,de,we,me.data);M.generateMipmaps=!1}else $e?(ut&&t.texStorage2D(3553,P,ye,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,de,we,X.data)):t.texImage2D(3553,0,ye,X.width,X.height,0,de,we,X.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&ut&&t.texStorage3D(35866,P,ye,De[0].width,De[0].height,X.depth);for(let U=0,$=De.length;U<$;U++)me=De[U],M.format!==Nn?de!==null?$e?t.compressedTexSubImage3D(35866,U,0,0,0,me.width,me.height,X.depth,de,me.data,0,0):t.compressedTexImage3D(35866,U,ye,me.width,me.height,X.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage3D(35866,U,0,0,0,me.width,me.height,X.depth,de,we,me.data):t.texImage3D(35866,U,ye,me.width,me.height,X.depth,0,de,we,me.data)}else{$e&&ut&&t.texStorage2D(3553,P,ye,De[0].width,De[0].height);for(let U=0,$=De.length;U<$;U++)me=De[U],M.format!==Nn?de!==null?$e?t.compressedTexSubImage2D(3553,U,0,0,me.width,me.height,de,me.data):t.compressedTexImage2D(3553,U,ye,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage2D(3553,U,0,0,me.width,me.height,de,we,me.data):t.texImage2D(3553,U,ye,me.width,me.height,0,de,we,me.data)}else if(M.isDataArrayTexture)$e?(ut&&t.texStorage3D(35866,P,ye,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,de,we,X.data)):t.texImage3D(35866,0,ye,X.width,X.height,X.depth,0,de,we,X.data);else if(M.isData3DTexture)$e?(ut&&t.texStorage3D(32879,P,ye,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,de,we,X.data)):t.texImage3D(32879,0,ye,X.width,X.height,X.depth,0,de,we,X.data);else if(M.isFramebufferTexture){if(ut)if($e)t.texStorage2D(3553,P,ye,X.width,X.height);else{let U=X.width,$=X.height;for(let se=0;se<P;se++)t.texImage2D(3553,se,ye,U,$,0,de,we,null),U>>=1,$>>=1}}else if(De.length>0&&_e){$e&&ut&&t.texStorage2D(3553,P,ye,De[0].width,De[0].height);for(let U=0,$=De.length;U<$;U++)me=De[U],$e?t.texSubImage2D(3553,U,0,0,de,we,me):t.texImage2D(3553,U,ye,de,we,me);M.generateMipmaps=!1}else $e?(ut&&t.texStorage2D(3553,P,ye,X.width,X.height),t.texSubImage2D(3553,0,0,0,de,we,X)):t.texImage2D(3553,0,ye,de,we,X);A(M,_e)&&C(ee),ge.__version=re.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function fe(E,M,B){if(M.image.length!==6)return;let ee=le(E,M),te=M.source;t.bindTexture(34067,E.__webglTexture,33984+B);let re=i.get(te);if(te.version!==re.__version||ee===!0){t.activeTexture(33984+B),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);let ge=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,X=[];for(let U=0;U<6;U++)!ge&&!ae?X[U]=g(M.image[U],!1,!0,c):X[U]=ae?M.image[U].image:M.image[U],X[U]=wn(M,X[U]);let _e=X[0],de=w(_e)||a,we=s.convert(M.format,M.encoding),ye=s.convert(M.type),me=_(M.internalFormat,we,ye,M.encoding),De=a&&M.isVideoTexture!==!0,$e=re.__version===void 0||ee===!0,ut=T(M,_e,de);ue(34067,M,de);let P;if(ge){De&&$e&&t.texStorage2D(34067,ut,me,_e.width,_e.height);for(let U=0;U<6;U++){P=X[U].mipmaps;for(let $=0;$<P.length;$++){let se=P[$];M.format!==Nn?we!==null?De?t.compressedTexSubImage2D(34069+U,$,0,0,se.width,se.height,we,se.data):t.compressedTexImage2D(34069+U,$,me,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+U,$,0,0,se.width,se.height,we,ye,se.data):t.texImage2D(34069+U,$,me,se.width,se.height,0,we,ye,se.data)}}}else{P=M.mipmaps,De&&$e&&(P.length>0&&ut++,t.texStorage2D(34067,ut,me,X[0].width,X[0].height));for(let U=0;U<6;U++)if(ae){De?t.texSubImage2D(34069+U,0,0,0,X[U].width,X[U].height,we,ye,X[U].data):t.texImage2D(34069+U,0,me,X[U].width,X[U].height,0,we,ye,X[U].data);for(let $=0;$<P.length;$++){let ce=P[$].image[U].image;De?t.texSubImage2D(34069+U,$+1,0,0,ce.width,ce.height,we,ye,ce.data):t.texImage2D(34069+U,$+1,me,ce.width,ce.height,0,we,ye,ce.data)}}else{De?t.texSubImage2D(34069+U,0,0,0,we,ye,X[U]):t.texImage2D(34069+U,0,me,we,ye,X[U]);for(let $=0;$<P.length;$++){let se=P[$];De?t.texSubImage2D(34069+U,$+1,0,0,we,ye,se.image[U]):t.texImage2D(34069+U,$+1,me,we,ye,se.image[U])}}}A(M,de)&&C(34067),re.__version=te.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function xe(E,M,B,ee,te){let re=s.convert(B.format,B.encoding),ge=s.convert(B.type),ae=_(B.internalFormat,re,ge,B.encoding);i.get(M).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,ae,M.width,M.height,M.depth,0,re,ge,null):t.texImage2D(te,0,ae,M.width,M.height,0,re,ge,null)),t.bindFramebuffer(36160,E),Ye(M)?h.framebufferTexture2DMultisampleEXT(36160,ee,te,i.get(B).__webglTexture,0,Ke(M)):(te===3553||te>=34069&&te<=34074)&&n.framebufferTexture2D(36160,ee,te,i.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ee(E,M,B){if(n.bindRenderbuffer(36161,E),M.depthBuffer&&!M.stencilBuffer){let ee=33189;if(B||Ye(M)){let te=M.depthTexture;te&&te.isDepthTexture&&(te.type===wr?ee=36012:te.type===_r&&(ee=33190));let re=Ke(M);Ye(M)?h.renderbufferStorageMultisampleEXT(36161,re,ee,M.width,M.height):n.renderbufferStorageMultisample(36161,re,ee,M.width,M.height)}else n.renderbufferStorage(36161,ee,M.width,M.height);n.framebufferRenderbuffer(36160,36096,36161,E)}else if(M.depthBuffer&&M.stencilBuffer){let ee=Ke(M);B&&Ye(M)===!1?n.renderbufferStorageMultisample(36161,ee,35056,M.width,M.height):Ye(M)?h.renderbufferStorageMultisampleEXT(36161,ee,35056,M.width,M.height):n.renderbufferStorage(36161,34041,M.width,M.height),n.framebufferRenderbuffer(36160,33306,36161,E)}else{let ee=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<ee.length;te++){let re=ee[te],ge=s.convert(re.format,re.encoding),ae=s.convert(re.type),X=_(re.internalFormat,ge,ae,re.encoding),_e=Ke(M);B&&Ye(M)===!1?n.renderbufferStorageMultisample(36161,_e,X,M.width,M.height):Ye(M)?h.renderbufferStorageMultisampleEXT(36161,_e,X,M.width,M.height):n.renderbufferStorage(36161,X,M.width,M.height)}}n.bindRenderbuffer(36161,null)}function Ae(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);let ee=i.get(M.depthTexture).__webglTexture,te=Ke(M);if(M.depthTexture.format===Mr)Ye(M)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,te):n.framebufferTexture2D(36160,36096,3553,ee,0);else if(M.depthTexture.format===Ls)Ye(M)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,te):n.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function ke(E){let M=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ae(M.__webglFramebuffer,E)}else if(B){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=n.createRenderbuffer(),Ee(M.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Ee(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function Pt(E,M,B){let ee=i.get(E);M!==void 0&&xe(ee.__webglFramebuffer,E,E.texture,36064,3553),B!==void 0&&ke(E)}function _n(E){let M=E.texture,B=i.get(E),ee=i.get(M);E.addEventListener("dispose",j),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=M.version,o.memory.textures++);let te=E.isWebGLCubeRenderTarget===!0,re=E.isWebGLMultipleRenderTargets===!0,ge=w(E)||a;if(te){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)B.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(B.__webglFramebuffer=n.createFramebuffer(),re)if(r.drawBuffers){let ae=E.texture;for(let X=0,_e=ae.length;X<_e;X++){let de=i.get(ae[X]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Ye(E)===!1){let ae=re?M:[M];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let X=0;X<ae.length;X++){let _e=ae[X];B.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(36161,B.__webglColorRenderbuffer[X]);let de=s.convert(_e.format,_e.encoding),we=s.convert(_e.type),ye=_(_e.internalFormat,de,we,_e.encoding,E.isXRRenderTarget===!0),me=Ke(E);n.renderbufferStorageMultisample(36161,me,ye,E.width,E.height),n.framebufferRenderbuffer(36160,36064+X,36161,B.__webglColorRenderbuffer[X])}n.bindRenderbuffer(36161,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,ee.__webglTexture),ue(34067,M,ge);for(let ae=0;ae<6;ae++)xe(B.__webglFramebuffer[ae],E,M,36064,34069+ae);A(M,ge)&&C(34067),t.unbindTexture()}else if(re){let ae=E.texture;for(let X=0,_e=ae.length;X<_e;X++){let de=ae[X],we=i.get(de);t.bindTexture(3553,we.__webglTexture),ue(3553,de,ge),xe(B.__webglFramebuffer,E,de,36064+X,3553),A(de,ge)&&C(3553)}t.unbindTexture()}else{let ae=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?ae=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,ee.__webglTexture),ue(ae,M,ge),xe(B.__webglFramebuffer,E,M,36064,ae),A(M,ge)&&C(ae),t.unbindTexture()}E.depthBuffer&&ke(E)}function Vt(E){let M=w(E)||a,B=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,te=B.length;ee<te;ee++){let re=B[ee];if(A(re,M)){let ge=E.isWebGLCubeRenderTarget?34067:3553,ae=i.get(re).__webglTexture;t.bindTexture(ge,ae),C(ge),t.unbindTexture()}}}function Lt(E){if(a&&E.samples>0&&Ye(E)===!1){let M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],B=E.width,ee=E.height,te=16384,re=[],ge=E.stencilBuffer?33306:36096,ae=i.get(E),X=E.isWebGLMultipleRenderTargets===!0;if(X)for(let _e=0;_e<M.length;_e++)t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,ae.__webglFramebuffer),n.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ae.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){re.push(36064+_e),E.depthBuffer&&re.push(ge);let de=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(de===!1&&(E.depthBuffer&&(te|=256),E.stencilBuffer&&(te|=1024)),X&&n.framebufferRenderbuffer(36008,36064,36161,ae.__webglColorRenderbuffer[_e]),de===!0&&(n.invalidateFramebuffer(36008,[ge]),n.invalidateFramebuffer(36009,[ge])),X){let we=i.get(M[_e]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,we,0)}n.blitFramebuffer(0,0,B,ee,0,0,B,ee,te,9728),m&&n.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let _e=0;_e<M.length;_e++){t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+_e,36161,ae.__webglColorRenderbuffer[_e]);let de=i.get(M[_e]).__webglTexture;t.bindFramebuffer(36160,ae.__webglFramebuffer),n.framebufferTexture2D(36009,36064+_e,3553,de,0)}t.bindFramebuffer(36009,ae.__webglMultisampledFramebuffer)}}function Ke(E){return Math.min(f,E.samples)}function Ye(E){let M=i.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function On(E){let M=o.render.frame;x.get(E)!==M&&(x.set(E,M),E.update())}function wn(E,M){let B=E.encoding,ee=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ff||B!==br&&(B===We?a===!1?e.has("EXT_sRGB")===!0&&ee===Nn?(E.format=ff,E.minFilter=gn,E.generateMipmaps=!1):M=Bl.sRGBToLinear(M):(ee!==Nn||te!==Sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),M}this.allocateTextureUnit=G,this.resetTextureUnits=Q,this.setTexture2D=K,this.setTexture2DArray=pe,this.setTexture3D=F,this.setTextureCube=Z,this.rebindTextures=Pt,this.setupRenderTarget=_n,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ye}function Cb(n,e,t){let i=t.isWebGL2;function r(s,o=null){let a;if(s===Sr)return 5121;if(s===S_)return 32819;if(s===b_)return 32820;if(s===__)return 5120;if(s===w_)return 5122;if(s===J0)return 5123;if(s===M_)return 5124;if(s===_r)return 5125;if(s===wr)return 5126;if(s===Vo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===E_)return 6406;if(s===Nn)return 6408;if(s===T_)return 6409;if(s===A_)return 6410;if(s===Mr)return 6402;if(s===Ls)return 34041;if(s===ff)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===C_)return 6403;if(s===P_)return 36244;if(s===L_)return 33319;if(s===R_)return 33320;if(s===I_)return 36249;if(s===Ph||s===Lh||s===Rh||s===Ih)if(o===We)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ph)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ih)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ph)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ih)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Og||s===Ug||s===Bg||s===Vg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Og)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ug)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===D_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Hg||s===Wg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Hg)return o===We?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Wg)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gg||s===Xg||s===qg||s===Yg||s===$g||s===Zg||s===jg||s===Jg||s===Kg||s===Qg||s===e0||s===t0||s===n0||s===i0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Gg)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xg)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qg)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yg)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$g)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zg)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===jg)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jg)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kg)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qg)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===e0)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===t0)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===n0)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===i0)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Dh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Dh)return o===We?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===N_||s===r0||s===s0||s===o0)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Dh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===r0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===s0)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===o0)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Es?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var Tf=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ss=class extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pb={type:"move"},Uo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let d of e.hand.values()){let p=t.getJointPose(d,i),v=this._getHandJoint(c,d);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ss;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Af=class extends xn{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Mr,u!==Mr&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Mr&&(i=_r),i===void 0&&u===Ls&&(i=Es),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:xt,this.minFilter=l!==void 0?l:xt,this.flipY=!1,this.generateMipmaps=!1}},Cf=class extends Zi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,x=null,d=t.getContextAttributes(),p=null,v=null,y=[],g=[],w=new Set,b=new Map,A=new Ut;A.layers.enable(1),A.viewport=new _t;let C=new Ut;C.layers.enable(2),C.viewport=new _t;let _=[A,C],T=new Tf;T.layers.enable(1),T.layers.enable(2);let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Z=y[F];return Z===void 0&&(Z=new Uo,y[F]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(F){let Z=y[F];return Z===void 0&&(Z=new Uo,y[F]=Z),Z.getGripSpace()},this.getHand=function(F){let Z=y[F];return Z===void 0&&(Z=new Uo,y[F]=Z),Z.getHandSpace()};function j(F){let Z=g.indexOf(F.inputSource);if(Z===-1)return;let ie=y[Z];ie!==void 0&&ie.dispatchEvent({type:F.type,data:F.inputSource})}function z(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",I);for(let F=0;F<y.length;F++){let Z=g[F];Z!==null&&(g[F]=null,y[F].disconnect(Z))}L=null,W=null,e.setRenderTarget(p),m=null,h=null,f=null,r=null,v=null,pe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",z),r.addEventListener("inputsourceschange",I),d.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:m}),v=new yi(m.framebufferWidth,m.framebufferHeight,{format:Nn,type:Sr,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let Z=null,ie=null,N=null;d.depth&&(N=d.stencil?35056:33190,Z=d.stencil?Ls:Mr,ie=d.stencil?Es:_r);let ue={colorFormat:32856,depthFormat:N,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ue),r.updateRenderState({layers:[h]}),v=new yi(h.textureWidth,h.textureHeight,{format:Nn,type:Sr,depthTexture:new Af(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});let le=e.properties.get(v);le.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function I(F){for(let Z=0;Z<F.removed.length;Z++){let ie=F.removed[Z],N=g.indexOf(ie);N>=0&&(g[N]=null,y[N].disconnect(ie))}for(let Z=0;Z<F.added.length;Z++){let ie=F.added[Z],N=g.indexOf(ie);if(N===-1){for(let le=0;le<y.length;le++)if(le>=g.length){g.push(ie),N=le;break}else if(g[le]===null){g[le]=ie,N=le;break}if(N===-1)break}let ue=y[N];ue&&ue.connect(ie)}}let H=new k,J=new k;function Q(F,Z,ie){H.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(ie.matrixWorld);let N=H.distanceTo(J),ue=Z.projectionMatrix.elements,le=ie.projectionMatrix.elements,he=ue[14]/(ue[10]-1),fe=ue[14]/(ue[10]+1),xe=(ue[9]+1)/ue[5],Ee=(ue[9]-1)/ue[5],Ae=(ue[8]-1)/ue[0],ke=(le[8]+1)/le[0],Pt=he*Ae,_n=he*ke,Vt=N/(-Ae+ke),Lt=Vt*-Ae;Z.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Lt),F.translateZ(Vt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();let Ke=he+Vt,Ye=fe+Vt,On=Pt-Lt,wn=_n+(N-Lt),E=xe*fe/Ye*Ke,M=Ee*fe/Ye*Ke;F.projectionMatrix.makePerspective(On,wn,E,M,Ke,Ye)}function G(F,Z){Z===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Z.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;T.near=C.near=A.near=F.near,T.far=C.far=A.far=F.far,(L!==T.near||W!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),L=T.near,W=T.far);let Z=F.parent,ie=T.cameras;G(T,Z);for(let ue=0;ue<ie.length;ue++)G(ie[ue],Z);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),F.matrix.copy(T.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);let N=F.children;for(let ue=0,le=N.length;ue<le;ue++)N[ue].updateMatrixWorld(!0);ie.length===2?Q(T,A,C):T.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(F){l=F,h!==null&&(h.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)},this.getPlanes=function(){return w};let q=null;function K(F,Z){if(u=Z.getViewerPose(c||o),x=Z,u!==null){let ie=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let N=!1;ie.length!==T.cameras.length&&(T.cameras.length=0,N=!0);for(let ue=0;ue<ie.length;ue++){let le=ie[ue],he=null;if(m!==null)he=m.getViewport(le);else{let xe=f.getViewSubImage(h,le);he=xe.viewport,ue===0&&(e.setRenderTargetTextures(v,xe.colorTexture,h.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(v))}let fe=_[ue];fe===void 0&&(fe=new Ut,fe.layers.enable(ue),fe.viewport=new _t,_[ue]=fe),fe.matrix.fromArray(le.transform.matrix),fe.projectionMatrix.fromArray(le.projectionMatrix),fe.viewport.set(he.x,he.y,he.width,he.height),ue===0&&T.matrix.copy(fe.matrix),N===!0&&T.cameras.push(fe)}}for(let ie=0;ie<y.length;ie++){let N=g[ie],ue=y[ie];N!==null&&ue!==void 0&&ue.update(N,Z,c||o)}if(q&&q(F,Z),Z.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let ie=null;for(let N of w)Z.detectedPlanes.has(N)||(ie===null&&(ie=[]),ie.push(N));if(ie!==null)for(let N of ie)w.delete(N),b.delete(N),i.dispatchEvent({type:"planeremoved",data:N});for(let N of Z.detectedPlanes)if(!w.has(N))w.add(N),b.set(N,Z.lastChangedTime),i.dispatchEvent({type:"planeadded",data:N});else{let ue=b.get(N);N.lastChangedTime>ue&&(b.set(N,N.lastChangedTime),i.dispatchEvent({type:"planechanged",data:N}))}}x=null}let pe=new nv;pe.setAnimationLoop(K),this.setAnimationLoop=function(F){q=F},this.dispose=function(){}}};function Lb(n,e){function t(d,p){p.color.getRGB(d.fogColor.value,tv(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,v,y,g){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),c(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&h(d,p,g)):p.isMeshMatcapMaterial?(r(d,p),m(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),x(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?a(d,p,v,y):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===on&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===on&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let v=e.get(p).envMap;if(v&&(d.envMap.value=v,d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;let w=n.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*w}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uvTransform.value.copy(y.matrix));let g;p.aoMap?g=p.aoMap:p.lightMap&&(g=p.lightMap),g!==void 0&&(g.isWebGLRenderTarget&&(g=g.texture),g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uv2Transform.value.copy(g.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,v,y){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*v,d.scale.value=y*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uvTransform.value.copy(g.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,v){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===on&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function x(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Rb(n,e,t,i){let r={},s={},o=[],a=t.isWebGL2?n.getParameter(35375):0;function l(y,g){let w=g.program;i.uniformBlockBinding(y,w)}function c(y,g){let w=r[y.id];w===void 0&&(x(y),w=u(y),r[y.id]=w,y.addEventListener("dispose",p));let b=g.program;i.updateUBOMapping(y,b);let A=e.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function u(y){let g=f();y.__bindingPointIndex=g;let w=n.createBuffer(),b=y.__size,A=y.usage;return n.bindBuffer(35345,w),n.bufferData(35345,b,A),n.bindBuffer(35345,null),n.bindBufferBase(35345,g,w),w}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let g=r[y.id],w=y.uniforms,b=y.__cache;n.bindBuffer(35345,g);for(let A=0,C=w.length;A<C;A++){let _=w[A];if(m(_,A,b)===!0){let T=_.__offset,L=Array.isArray(_.value)?_.value:[_.value],W=0;for(let j=0;j<L.length;j++){let z=L[j],I=d(z);typeof z=="number"?(_.__data[0]=z,n.bufferSubData(35345,T+W,_.__data)):z.isMatrix3?(_.__data[0]=z.elements[0],_.__data[1]=z.elements[1],_.__data[2]=z.elements[2],_.__data[3]=z.elements[0],_.__data[4]=z.elements[3],_.__data[5]=z.elements[4],_.__data[6]=z.elements[5],_.__data[7]=z.elements[0],_.__data[8]=z.elements[6],_.__data[9]=z.elements[7],_.__data[10]=z.elements[8],_.__data[11]=z.elements[0]):(z.toArray(_.__data,W),W+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,T,_.__data)}}n.bindBuffer(35345,null)}function m(y,g,w){let b=y.value;if(w[g]===void 0){if(typeof b=="number")w[g]=b;else{let A=Array.isArray(b)?b:[b],C=[];for(let _=0;_<A.length;_++)C.push(A[_].clone());w[g]=C}return!0}else if(typeof b=="number"){if(w[g]!==b)return w[g]=b,!0}else{let A=Array.isArray(w[g])?w[g]:[w[g]],C=Array.isArray(b)?b:[b];for(let _=0;_<A.length;_++){let T=A[_];if(T.equals(C[_])===!1)return T.copy(C[_]),!0}}return!1}function x(y){let g=y.uniforms,w=0,b=16,A=0;for(let C=0,_=g.length;C<_;C++){let T=g[C],L={boundary:0,storage:0},W=Array.isArray(T.value)?T.value:[T.value];for(let j=0,z=W.length;j<z;j++){let I=W[j],H=d(I);L.boundary+=H.boundary,L.storage+=H.storage}if(T.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=w,C>0){A=w%b;let j=b-A;A!==0&&j-L.boundary<0&&(w+=b-A,T.__offset=w)}w+=L.storage}return A=w%b,A>0&&(w+=b-A),y.__size=w,y.__cache={},this}function d(y){let g={boundary:0,storage:0};return typeof y=="number"?(g.boundary=4,g.storage=4):y.isVector2?(g.boundary=8,g.storage=8):y.isVector3||y.isColor?(g.boundary=16,g.storage=12):y.isVector4?(g.boundary=16,g.storage=16):y.isMatrix3?(g.boundary=48,g.storage=48):y.isMatrix4?(g.boundary=64,g.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),g}function p(y){let g=y.target;g.removeEventListener("dispose",p);let w=o.indexOf(g.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function v(){for(let y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:v}}function Ib(){let n=Ul("canvas");return n.style.display="block",n}function nc(n={}){this.isWebGLRenderer=!0;let e=n.canvas!==void 0?n.canvas:Ib(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1,u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null,m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=br,this.useLegacyLights=!0,this.toneMapping=gi,this.toneMappingExposure=1;let d=this,p=!1,v=0,y=0,g=null,w=-1,b=null,A=new _t,C=new _t,_=null,T=e.width,L=e.height,W=1,j=null,z=null,I=new _t(0,0,T,L),H=new _t(0,0,T,L),J=!1,Q=new jl,G=!1,q=!1,K=null,pe=new Ct,F=new k,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return g===null?W:1}let N=t;function ue(S,D){for(let O=0;O<S.length;O++){let R=S[O],V=e.getContext(R,D);if(V!==null)return V}return null}try{let S={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Of}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",me,!1),N===null){let D=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&D.shift(),N=ue(D,S),N===null)throw ue(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let le,he,fe,xe,Ee,Ae,ke,Pt,_n,Vt,Lt,Ke,Ye,On,wn,E,M,B,ee,te,re,ge,ae,X;function _e(){le=new QM(N),he=new YM(N,le,n),le.init(he),ge=new Cb(N,le,he),fe=new Tb(N,le,he),xe=new nS,Ee=new pb,Ae=new Ab(N,le,fe,Ee,he,ge,xe),ke=new ZM(d),Pt=new KM(d),_n=new h1(N,he),ae=new XM(N,le,_n,he),Vt=new eS(N,_n,xe,ae),Lt=new oS(N,Vt,_n,xe),ee=new sS(N,he,Ae),E=new $M(Ee),Ke=new db(d,ke,Pt,le,he,ae,E),Ye=new Lb(d,Ee),On=new gb,wn=new Mb(le,he),B=new GM(d,ke,Pt,fe,Lt,u,o),M=new Eb(d,Lt,he),X=new Rb(N,xe,he,fe),te=new qM(N,le,xe,he),re=new tS(N,le,xe,he),xe.programs=Ke.programs,d.capabilities=he,d.extensions=le,d.properties=Ee,d.renderLists=On,d.shadowMap=M,d.state=fe,d.info=xe}_e();let de=new Cf(d,N);this.xr=de,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=le.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=le.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(T,L,!1))},this.getSize=function(S){return S.set(T,L)},this.setSize=function(S,D,O=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=S,L=D,e.width=Math.floor(S*W),e.height=Math.floor(D*W),O===!0&&(e.style.width=S+"px",e.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(T*W,L*W).floor()},this.setDrawingBufferSize=function(S,D,O){T=S,L=D,W=O,e.width=Math.floor(S*O),e.height=Math.floor(D*O),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(I)},this.setViewport=function(S,D,O,R){S.isVector4?I.set(S.x,S.y,S.z,S.w):I.set(S,D,O,R),fe.viewport(A.copy(I).multiplyScalar(W).floor())},this.getScissor=function(S){return S.copy(H)},this.setScissor=function(S,D,O,R){S.isVector4?H.set(S.x,S.y,S.z,S.w):H.set(S,D,O,R),fe.scissor(C.copy(H).multiplyScalar(W).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(S){fe.setScissorTest(J=S)},this.setOpaqueSort=function(S){j=S},this.setTransparentSort=function(S){z=S},this.getClearColor=function(S){return S.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor.apply(B,arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha.apply(B,arguments)},this.clear=function(S=!0,D=!0,O=!0){let R=0;S&&(R|=16384),D&&(R|=256),O&&(R|=1024),N.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",me,!1),On.dispose(),wn.dispose(),Ee.dispose(),ke.dispose(),Pt.dispose(),Lt.dispose(),ae.dispose(),X.dispose(),Ke.dispose(),de.dispose(),de.removeEventListener("sessionstart",$),de.removeEventListener("sessionend",se),K&&(K.dispose(),K=null),ce.stop()};function we(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;let S=xe.autoReset,D=M.enabled,O=M.autoUpdate,R=M.needsUpdate,V=M.type;_e(),xe.autoReset=S,M.enabled=D,M.autoUpdate=O,M.needsUpdate=R,M.type=V}function me(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function De(S){let D=S.target;D.removeEventListener("dispose",De),$e(D)}function $e(S){ut(S),Ee.remove(S)}function ut(S){let D=Ee.get(S).programs;D!==void 0&&(D.forEach(function(O){Ke.releaseProgram(O)}),S.isShaderMaterial&&Ke.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,O,R,V,ve){D===null&&(D=Z);let Me=V.isMesh&&V.matrixWorld.determinant()<0,be=vv(S,D,O,R,V);fe.setMaterial(R,Me);let Te=O.index,Ne=1;R.wireframe===!0&&(Te=Vt.getWireframeAttribute(O),Ne=2);let Pe=O.drawRange,Le=O.attributes.position,nt=Pe.start*Ne,Yt=(Pe.start+Pe.count)*Ne;ve!==null&&(nt=Math.max(nt,ve.start*Ne),Yt=Math.min(Yt,(ve.start+ve.count)*Ne)),Te!==null?(nt=Math.max(nt,0),Yt=Math.min(Yt,Te.count)):Le!=null&&(nt=Math.max(nt,0),Yt=Math.min(Yt,Le.count));let Kn=Yt-nt;if(Kn<0||Kn===1/0)return;ae.setup(V,R,be,O,Te);let Ji,it=te;if(Te!==null&&(Ji=_n.get(Te),it=re,it.setIndex(Ji)),V.isMesh)R.wireframe===!0?(fe.setLineWidth(R.wireframeLinewidth*ie()),it.setMode(1)):it.setMode(4);else if(V.isLine){let Re=R.linewidth;Re===void 0&&(Re=1),fe.setLineWidth(Re*ie()),V.isLineSegments?it.setMode(1):V.isLineLoop?it.setMode(2):it.setMode(3)}else V.isPoints?it.setMode(0):V.isSprite&&it.setMode(4);if(V.isInstancedMesh)it.renderInstances(nt,Kn,V.count);else if(O.isInstancedBufferGeometry){let Re=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,rc=Math.min(O.instanceCount,Re);it.renderInstances(nt,Kn,rc)}else it.render(nt,Kn)},this.compile=function(S,D){function O(R,V,ve){R.transparent===!0&&R.side===Xi&&R.forceSinglePass===!1?(R.side=on,R.needsUpdate=!0,an(R,V,ve),R.side=$i,R.needsUpdate=!0,an(R,V,ve),R.side=Xi):an(R,V,ve)}h=wn.get(S),h.init(),x.push(h),S.traverseVisible(function(R){R.isLight&&R.layers.test(D.layers)&&(h.pushLight(R),R.castShadow&&h.pushShadow(R))}),h.setupLights(d.useLegacyLights),S.traverse(function(R){let V=R.material;if(V)if(Array.isArray(V))for(let ve=0;ve<V.length;ve++){let Me=V[ve];O(Me,S,R)}else O(V,S,R)}),x.pop(),h=null};let P=null;function U(S){P&&P(S)}function $(){ce.stop()}function se(){ce.start()}let ce=new nv;ce.setAnimationLoop(U),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(S){P=S,de.setAnimationLoop(S),S===null?ce.stop():ce.start()},de.addEventListener("sessionstart",$),de.addEventListener("sessionend",se),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(D),D=de.getCamera()),S.isScene===!0&&S.onBeforeRender(d,S,D,g),h=wn.get(S,x.length),h.init(),x.push(h),pe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Q.setFromProjectionMatrix(pe),q=this.localClippingEnabled,G=E.init(this.clippingPlanes,q),f=On.get(S,m.length),f.init(),m.push(f),Be(S,D,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(j,z),G===!0&&E.beginShadows();let O=h.state.shadowsArray;if(M.render(O,S,D),G===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),B.render(f,S),h.setupLights(d.useLegacyLights),D.isArrayCamera){let R=D.cameras;for(let V=0,ve=R.length;V<ve;V++){let Me=R[V];ht(f,S,Me,Me.viewport)}}else ht(f,S,D);g!==null&&(Ae.updateMultisampleRenderTarget(g),Ae.updateRenderTargetMipmap(g)),S.isScene===!0&&S.onAfterRender(d,S,D),ae.resetDefaultState(),w=-1,b=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Be(S,D,O,R){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Q.intersectsSprite(S)){R&&F.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pe);let Me=Lt.update(S),be=S.material;be.visible&&f.push(S,Me,be,O,F.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==xe.render.frame&&(S.skeleton.update(),S.skeleton.frame=xe.render.frame),!S.frustumCulled||Q.intersectsObject(S))){R&&F.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pe);let Me=Lt.update(S),be=S.material;if(Array.isArray(be)){let Te=Me.groups;for(let Ne=0,Pe=Te.length;Ne<Pe;Ne++){let Le=Te[Ne],nt=be[Le.materialIndex];nt&&nt.visible&&f.push(S,Me,nt,O,F.z,Le)}}else be.visible&&f.push(S,Me,be,O,F.z,null)}}let ve=S.children;for(let Me=0,be=ve.length;Me<be;Me++)Be(ve[Me],D,O,R)}function ht(S,D,O,R){let V=S.opaque,ve=S.transmissive,Me=S.transparent;h.setupLightsView(O),G===!0&&E.setGlobalState(d.clippingPlanes,O),ve.length>0&&Rt(V,D,O),R&&fe.viewport(A.copy(R)),V.length>0&&Un(V,D,O),ve.length>0&&Un(ve,D,O),Me.length>0&&Un(Me,D,O),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Rt(S,D,O){let R=he.isWebGL2;K===null&&(K=new yi(1024,1024,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?Vo:Sr,minFilter:Bo,samples:R&&s===!0?4:0}));let V=d.getRenderTarget();d.setRenderTarget(K),d.clear();let ve=d.toneMapping;d.toneMapping=gi,Un(S,D,O),d.toneMapping=ve,Ae.updateMultisampleRenderTarget(K),Ae.updateRenderTargetMipmap(K),d.setRenderTarget(V)}function Un(S,D,O){let R=D.isScene===!0?D.overrideMaterial:null;for(let V=0,ve=S.length;V<ve;V++){let Me=S[V],be=Me.object,Te=Me.geometry,Ne=R===null?Me.material:R,Pe=Me.group;be.layers.test(O.layers)&&et(be,D,O,Te,Ne,Pe)}}function et(S,D,O,R,V,ve){S.onBeforeRender(d,D,O,R,V,ve),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(d,D,O,R,S,ve),V.transparent===!0&&V.side===Xi&&V.forceSinglePass===!1?(V.side=on,V.needsUpdate=!0,d.renderBufferDirect(O,D,R,V,S,ve),V.side=$i,V.needsUpdate=!0,d.renderBufferDirect(O,D,R,V,S,ve),V.side=Xi):d.renderBufferDirect(O,D,R,V,S,ve),S.onAfterRender(d,D,O,R,V,ve)}function an(S,D,O){D.isScene!==!0&&(D=Z);let R=Ee.get(S),V=h.state.lights,ve=h.state.shadowsArray,Me=V.state.version,be=Ke.getParameters(S,V.state,ve,D,O),Te=Ke.getProgramCacheKey(be),Ne=R.programs;R.environment=S.isMeshStandardMaterial?D.environment:null,R.fog=D.fog,R.envMap=(S.isMeshStandardMaterial?Pt:ke).get(S.envMap||R.environment),Ne===void 0&&(S.addEventListener("dispose",De),Ne=new Map,R.programs=Ne);let Pe=Ne.get(Te);if(Pe!==void 0){if(R.currentProgram===Pe&&R.lightsStateVersion===Me)return Bn(S,be),Pe}else be.uniforms=Ke.getUniforms(S),S.onBuild(O,be,d),S.onBeforeCompile(be,d),Pe=Ke.acquireProgram(be,Te),Ne.set(Te,Pe),R.uniforms=be.uniforms;let Le=R.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Le.clippingPlanes=E.uniform),Bn(S,be),R.needsLights=xv(S),R.lightsStateVersion=Me,R.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.directionalShadowMap.value=V.state.directionalShadowMap,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotShadowMap.value=V.state.spotShadowMap,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMap.value=V.state.pointShadowMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix);let nt=Pe.getUniforms(),Yt=As.seqWithValue(nt.seq,Le);return R.currentProgram=Pe,R.uniformsList=Yt,Pe}function Bn(S,D){let O=Ee.get(S);O.outputEncoding=D.outputEncoding,O.instancing=D.instancing,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function vv(S,D,O,R,V){D.isScene!==!0&&(D=Z),Ae.resetTextureUnits();let ve=D.fog,Me=R.isMeshStandardMaterial?D.environment:null,be=g===null?d.outputEncoding:g.isXRRenderTarget===!0?g.texture.encoding:br,Te=(R.isMeshStandardMaterial?Pt:ke).get(R.envMap||Me),Ne=R.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Pe=!!R.normalMap&&!!O.attributes.tangent,Le=!!O.morphAttributes.position,nt=!!O.morphAttributes.normal,Yt=!!O.morphAttributes.color,Kn=R.toneMapped?d.toneMapping:gi,Ji=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,it=Ji!==void 0?Ji.length:0,Re=Ee.get(R),rc=h.state.lights;if(G===!0&&(q===!0||S!==b)){let $t=S===b&&R.id===w;E.setState(R,S,$t)}let ft=!1;R.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==rc.state.version||Re.outputEncoding!==be||V.isInstancedMesh&&Re.instancing===!1||!V.isInstancedMesh&&Re.instancing===!0||V.isSkinnedMesh&&Re.skinning===!1||!V.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Te||R.fog===!0&&Re.fog!==ve||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==E.numPlanes||Re.numIntersection!==E.numIntersection)||Re.vertexAlphas!==Ne||Re.vertexTangents!==Pe||Re.morphTargets!==Le||Re.morphNormals!==nt||Re.morphColors!==Yt||Re.toneMapping!==Kn||he.isWebGL2===!0&&Re.morphTargetsCount!==it)&&(ft=!0):(ft=!0,Re.__version=R.version);let Ki=Re.currentProgram;ft===!0&&(Ki=an(R,D,V));let Yf=!1,ks=!1,sc=!1,It=Ki.getUniforms(),Qi=Re.uniforms;if(fe.useProgram(Ki.program)&&(Yf=!0,ks=!0,sc=!0),R.id!==w&&(w=R.id,ks=!0),Yf||b!==S){if(It.setValue(N,"projectionMatrix",S.projectionMatrix),he.logarithmicDepthBuffer&&It.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),b!==S&&(b=S,ks=!0,sc=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){let $t=It.map.cameraPosition;$t!==void 0&&$t.setValue(N,F.setFromMatrixPosition(S.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&It.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||V.isSkinnedMesh)&&It.setValue(N,"viewMatrix",S.matrixWorldInverse)}if(V.isSkinnedMesh){It.setOptional(N,V,"bindMatrix"),It.setOptional(N,V,"bindMatrixInverse");let $t=V.skeleton;$t&&(he.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),It.setValue(N,"boneTexture",$t.boneTexture,Ae),It.setValue(N,"boneTextureSize",$t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let oc=O.morphAttributes;if((oc.position!==void 0||oc.normal!==void 0||oc.color!==void 0&&he.isWebGL2===!0)&&ee.update(V,O,Ki),(ks||Re.receiveShadow!==V.receiveShadow)&&(Re.receiveShadow=V.receiveShadow,It.setValue(N,"receiveShadow",V.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(Qi.envMap.value=Te,Qi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),ks&&(It.setValue(N,"toneMappingExposure",d.toneMappingExposure),Re.needsLights&&yv(Qi,sc),ve&&R.fog===!0&&Ye.refreshFogUniforms(Qi,ve),Ye.refreshMaterialUniforms(Qi,R,W,L,K),As.upload(N,Re.uniformsList,Qi,Ae)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(As.upload(N,Re.uniformsList,Qi,Ae),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&It.setValue(N,"center",V.center),It.setValue(N,"modelViewMatrix",V.modelViewMatrix),It.setValue(N,"normalMatrix",V.normalMatrix),It.setValue(N,"modelMatrix",V.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){let $t=R.uniformsGroups;for(let ac=0,_v=$t.length;ac<_v;ac++)if(he.isWebGL2){let $f=$t[ac];X.update($f,Ki),X.bind($f,Ki)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ki}function yv(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function xv(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(S,D,O){Ee.get(S.texture).__webglTexture=D,Ee.get(S.depthTexture).__webglTexture=O;let R=Ee.get(S);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=O===void 0,R.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){let O=Ee.get(S);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,O=0){g=S,v=D,y=O;let R=!0,V=null,ve=!1,Me=!1;if(S){let Te=Ee.get(S);Te.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),R=!1):Te.__webglFramebuffer===void 0?Ae.setupRenderTarget(S):Te.__hasExternalTextures&&Ae.rebindTextures(S,Ee.get(S.texture).__webglTexture,Ee.get(S.depthTexture).__webglTexture);let Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Me=!0);let Pe=Ee.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(V=Pe[D],ve=!0):he.isWebGL2&&S.samples>0&&Ae.useMultisampledRTT(S)===!1?V=Ee.get(S).__webglMultisampledFramebuffer:V=Pe,A.copy(S.viewport),C.copy(S.scissor),_=S.scissorTest}else A.copy(I).multiplyScalar(W).floor(),C.copy(H).multiplyScalar(W).floor(),_=J;if(fe.bindFramebuffer(36160,V)&&he.drawBuffers&&R&&fe.drawBuffers(S,V),fe.viewport(A),fe.scissor(C),fe.setScissorTest(_),ve){let Te=Ee.get(S.texture);N.framebufferTexture2D(36160,36064,34069+D,Te.__webglTexture,O)}else if(Me){let Te=Ee.get(S.texture),Ne=D||0;N.framebufferTextureLayer(36160,36064,Te.__webglTexture,O||0,Ne)}w=-1},this.readRenderTargetPixels=function(S,D,O,R,V,ve,Me){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){fe.bindFramebuffer(36160,be);try{let Te=S.texture,Ne=Te.format,Pe=Te.type;if(Ne!==Nn&&ge.convert(Ne)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Le=Pe===Vo&&(le.has("EXT_color_buffer_half_float")||he.isWebGL2&&le.has("EXT_color_buffer_float"));if(Pe!==Sr&&ge.convert(Pe)!==N.getParameter(35738)&&!(Pe===wr&&(he.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-R&&O>=0&&O<=S.height-V&&N.readPixels(D,O,R,V,ge.convert(Ne),ge.convert(Pe),ve)}finally{let Te=g!==null?Ee.get(g).__webglFramebuffer:null;fe.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(S,D,O=0){let R=Math.pow(2,-O),V=Math.floor(D.image.width*R),ve=Math.floor(D.image.height*R);Ae.setTexture2D(D,0),N.copyTexSubImage2D(3553,O,0,0,S.x,S.y,V,ve),fe.unbindTexture()},this.copyTextureToTexture=function(S,D,O,R=0){let V=D.image.width,ve=D.image.height,Me=ge.convert(O.format),be=ge.convert(O.type);Ae.setTexture2D(O,0),N.pixelStorei(37440,O.flipY),N.pixelStorei(37441,O.premultiplyAlpha),N.pixelStorei(3317,O.unpackAlignment),D.isDataTexture?N.texSubImage2D(3553,R,S.x,S.y,V,ve,Me,be,D.image.data):D.isCompressedTexture?N.compressedTexSubImage2D(3553,R,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,Me,D.mipmaps[0].data):N.texSubImage2D(3553,R,S.x,S.y,Me,be,D.image),R===0&&O.generateMipmaps&&N.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(S,D,O,R,V=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ve=S.max.x-S.min.x+1,Me=S.max.y-S.min.y+1,be=S.max.z-S.min.z+1,Te=ge.convert(R.format),Ne=ge.convert(R.type),Pe;if(R.isData3DTexture)Ae.setTexture3D(R,0),Pe=32879;else if(R.isDataArrayTexture)Ae.setTexture2DArray(R,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,R.flipY),N.pixelStorei(37441,R.premultiplyAlpha),N.pixelStorei(3317,R.unpackAlignment);let Le=N.getParameter(3314),nt=N.getParameter(32878),Yt=N.getParameter(3316),Kn=N.getParameter(3315),Ji=N.getParameter(32877),it=O.isCompressedTexture?O.mipmaps[0]:O.image;N.pixelStorei(3314,it.width),N.pixelStorei(32878,it.height),N.pixelStorei(3316,S.min.x),N.pixelStorei(3315,S.min.y),N.pixelStorei(32877,S.min.z),O.isDataTexture||O.isData3DTexture?N.texSubImage3D(Pe,V,D.x,D.y,D.z,ve,Me,be,Te,Ne,it.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Pe,V,D.x,D.y,D.z,ve,Me,be,Te,it.data)):N.texSubImage3D(Pe,V,D.x,D.y,D.z,ve,Me,be,Te,Ne,it),N.pixelStorei(3314,Le),N.pixelStorei(32878,nt),N.pixelStorei(3316,Yt),N.pixelStorei(3315,Kn),N.pixelStorei(32877,Ji),V===0&&R.generateMipmaps&&N.generateMipmap(Pe),fe.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ae.setTextureCube(S,0):S.isData3DTexture?Ae.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ae.setTexture2DArray(S,0):Ae.setTexture2D(S,0),fe.unbindTexture()},this.resetState=function(){v=0,y=0,g=null,fe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(nc.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(n){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!n}}});var Pf=class extends nc{};Pf.prototype.isWebGL1Renderer=!0;var Kl=class extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};var Ql=class extends xn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};function Gi(n,e,t){return av(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)}function zl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function av(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ds=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lf=class extends Ds{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:a0,endingEnd:a0}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case l0:s=e,a=2*t-i;break;case c0:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case l0:o=e,l=2*i-t;break;case c0:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,m=this._weightNext,x=(i-t)/(r-t),d=x*x,p=d*x,v=-h*p+2*h*d-h*x,y=(1+h)*p+(-1.5-2*h)*d+(-.5+h)*x+1,g=(-1-m)*p+(1.5+m)*d+.5*x,w=m*p-m*d;for(let b=0;b!==a;++b)s[b]=v*o[u+b]+y*o[c+b]+g*o[l+b]+w*o[f+b];return s}},Rf=class extends Ds{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}},If=class extends Ds{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Fn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zl(t,this.TimeBufferType),this.values=zl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:zl(e.times,Array),values:zl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new If(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Lf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fl:t=this.InterpolantFactoryMethodDiscrete;break;case Ol:t=this.InterpolantFactoryMethodLinear;break;case Nh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fl;case this.InterpolantFactoryMethodLinear:return Ol;case this.InterpolantFactoryMethodSmooth:return Nh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=Gi(i,s,o),this.values=Gi(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&av(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=Gi(this.times),t=Gi(this.values),i=this.getValueSize(),r=this.getInterpolation()===Nh,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*i,h=f-i,m=f+i;for(let x=0;x!==i;++x){let d=t[f+x];if(d!==t[h+x]||d!==t[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,h=o*i;for(let m=0;m!==i;++m)t[h+m]=t[f+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Gi(e,0,o),this.values=Gi(t,0,o*i)):(this.times=e,this.values=t),this}clone(){let e=Gi(this.times,0),t=Gi(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Ol;var Ar=class extends Fn{};Ar.prototype.ValueTypeName="bool";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=Fl;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Df=class extends Fn{};Df.prototype.ValueTypeName="color";var Nf=class extends Fn{};Nf.prototype.ValueTypeName="number";var kf=class extends Ds{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)ji.slerpFlat(s,0,o,c-a,o,c,l);return s}},qo=class extends Fn{InterpolantFactoryMethodLinear(e){return new kf(this.times,this.values,this.getValueSize(),e)}};qo.prototype.ValueTypeName="quaternion";qo.prototype.DefaultInterpolation=Ol;qo.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends Fn{};Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=Fl;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var zf=class extends Fn{};zf.prototype.ValueTypeName="vector";var Bf="\\[\\]\\.:\\/",Db=new RegExp("["+Bf+"]","g"),Vf="[^"+Bf+"]",Nb="[^"+Bf.replace("\\.","")+"]",kb=/((?:WC+[\/:])*)/.source.replace("WC",Vf),zb=/(WCOD+)?/.source.replace("WCOD",Nb),Fb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vf),Ob=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vf),Ub=new RegExp("^"+kb+zb+Fb+Ob+"$"),Bb=["material","materials","bones","map"],Ff=class{constructor(e,t,i){let r=i||qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},qe=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Db,"")}static parseTrackName(e){let t=Ub.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Bb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qe.Composite=Ff;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);var hv=Vn(Pr()),$b=`
varying vec2 vUv;
uniform float uTime;
uniform float uEnableWaves;
void main() {
  vUv = uv;
  float t = uTime * 5.;
  vec3 p = position;
  if (uEnableWaves > 0.5) {
    p.x += sin(t + position.y) * 0.5;
    p.y += cos(t + position.z) * 0.15;
    p.z += sin(t + position.x);
  }
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.0);
}`,Zb=`
varying vec2 vUv;
uniform float uTime;
uniform sampler2D uTexture;
void main() {
  float t = uTime;
  vec2 pos = vUv;
  float r = texture2D(uTexture, pos + cos(t*2.-t+pos.x)*.01).r;
  float g = texture2D(uTexture, pos + tan(t*.5+pos.x-t)*.01).g;
  float b = texture2D(uTexture, pos - cos(t*2.+t+pos.y)*.01).b;
  float a = texture2D(uTexture, pos).a;
  gl_FragColor = vec4(r,g,b,a);
}`;Math.map=(n,e,t,i,r)=>(n-e)/(t-e)*(r-i)+i;var Hf=class{constructor(e,{fontSize:t=12,fontFamily:i="'Courier New', monospace",invert:r=!0,charset:s}={}){this.renderer=e,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.pre=document.createElement("pre"),this.dom=document.createElement("div"),Object.assign(this.dom.style,{position:"absolute",inset:0}),this.dom.append(this.pre,this.canvas),this.fontSize=t,this.fontFamily=i,this.charset=s??" .\\'`^\",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",this.invert=r}setSize(e,t){this.canvas.width=Math.floor(e/(this.fontSize*.6)),this.canvas.height=Math.floor(t/this.fontSize),this.ctx.font=`${this.fontSize}px ${this.fontFamily}`,Object.assign(this.pre.style,{margin:0,padding:0,lineHeight:"1em",mixBlendMode:"difference",fontFamily:this.fontFamily,fontSize:`${this.fontSize}px`,position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"})}render(e,t){this.renderer.render(e,t);let i=this.canvas.width,r=this.canvas.height;if(!i||!r)return;this.ctx.drawImage(this.renderer.domElement,0,0,i,r);let{data:s}=this.ctx.getImageData(0,0,i,r),o="";for(let a=0,l=s.length;a<l;a+=4){let c=a/4,u=c%i,f=(.3*s[a]+.6*s[a+1]+.1*s[a+2])/255,h=Math.floor((this.invert?f:1-f)*(this.charset.length-1));o+=this.charset[h],u===i-1&&(o+=`
`)}this.pre.textContent=o}},Wf=class{constructor(e,{fontSize:t=200,color:i="#fdf9f3",fontFamily:r="IBM Plex Mono"}={}){this.txt=e,this.fontSize=t,this.color=i,this.fontFamily=r,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.font=`${this.fontSize}px ${this.fontFamily}`,this.resize()}resize(){this.ctx.font=this.font;let e=this.ctx.measureText(this.txt);this.canvas.width=e.width+20,this.canvas.height=this.fontSize+20}render(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle=this.color,this.ctx.font=this.font,this.ctx.fillText(this.txt,10,this.fontSize)}get texture(){return this.canvas}},Gf=class{constructor(e,t,i,r){Zf(this,"animate",()=>{let e=()=>{this.frame=requestAnimationFrame(e);let{width:t,height:i}=this.el.getBoundingClientRect();!t||!i||(this.txt.render(),this.tex.needsUpdate=!0,this.mesh.material.uniforms.uTime.value=Math.sin(Date.now()*.001),this.filter.render(this.scene,this.camera))};e()});Object.assign(this,e),this.el=t,this.scene=new Kl,this.camera=new Ut(45,i/r,1,1e3),this.camera.position.z=30,this.txt=new Wf(this.text,{fontSize:this.textFontSize,color:this.textColor}),this.txt.render(),this.tex=new Ql(this.txt.texture),this.tex.minFilter=xt;let s=this.txt.canvas.width/this.txt.canvas.height,o=new Xo(this.planeBaseHeight*s,this.planeBaseHeight,36,36),a=new zn({vertexShader:$b,fragmentShader:Zb,transparent:!0,uniforms:{uTime:{value:0},uTexture:{value:this.tex},uEnableWaves:{value:this.enableWaves?1:0}}});this.mesh=new vn(o,a),this.scene.add(this.mesh),this.renderer=new nc({alpha:!0,antialias:!1}),this.renderer.setPixelRatio(1),this.filter=new Hf(this.renderer,{fontSize:this.asciiFontSize}),t.appendChild(this.filter.dom),this.setSize(i,r),this.animate()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.filter.setSize(e,t)}dispose(){cancelAnimationFrame(this.frame)}};function Xf({text:n="Hello!",asciiFontSize:e=8,textFontSize:t=200,textColor:i="#fdf9f3",planeBaseHeight:r=8,enableWaves:s=!0}){let o=(0,$o.useRef)(null),a=(0,$o.useRef)(null);return(0,$o.useEffect)(()=>{let l=o.current,c=(h,m)=>(a.current=new Gf({text:n,asciiFontSize:e,textFontSize:t,textColor:i,planeBaseHeight:r,enableWaves:s},l,h,m),()=>a.current.dispose()),u=l.getBoundingClientRect();if(u.width&&u.height)return c(u.width,u.height);let f=new ResizeObserver(([h])=>{let{width:m,height:x}=h.contentRect;m&&x&&(f.disconnect(),c(m,x))});return f.observe(l),()=>f.disconnect()},[n,e,t,i,r,s]),(0,hv.jsx)("div",{ref:o,style:{position:"absolute",inset:0}})}var Lr=Vn(Pr()),fv=["9D2-iu9Ms-A","11mqSLKps7s","ufnhwRwzACo","qh8VmhR8NPs","55jy4jqWEVo","gnEy-4zjYQI","vD8jLGGQeAI","MsYnCKIDg4s","7TCIul9eP50","OwerV0bpXIk","po1f3tD-d7g"],dv=[` /\\_/\\
( o.o )
 > ^ <`,` /\\_/\\
( OwO )
 > ^ <`],jb=` /\\_/\\
( -.- )
 > ^ <`;function qf(){let n=(0,Jn.useRef)(null),[e,t]=(0,Jn.useState)(0),[i,r]=(0,Jn.useState)(1),[s,o]=(0,Jn.useState)(0),[a,l]=(0,Jn.useState)(!0),[c,u]=(0,Jn.useState)(null);(0,Jn.useEffect)(()=>{if(!a)return;let x=setInterval(()=>{t(d=>(d+1)%dv.length),o(d=>{let p=(n.current.offsetWidth||300)-160,v=d+i*4;return(v<=0||v>=p)&&r(y=>-y),Math.max(0,Math.min(v,p))})},120);return()=>clearInterval(x)},[a,i]);let f=()=>{l(!1),t(void 0);let x=fv[Math.random()*fv.length|0];setTimeout(()=>u(x),500)},h=()=>l(!0),m=e===void 0?jb:dv[e];return(0,Lr.jsxs)("div",{ref:n,onClick:f,style:{position:"relative",width:"100%",minHeight:"260px",cursor:"pointer"},children:[(0,Lr.jsx)("div",{style:{position:"absolute",transform:`translateX(${s}px)`},children:(0,Lr.jsx)(Xf,{text:m,asciiFontSize:8,textFontSize:80,planeBaseHeight:5,enableWaves:!1})}),c&&(0,Lr.jsx)("div",{style:{marginTop:"170px",display:"flex",justifyContent:"center"},children:(0,Lr.jsx)("iframe",{width:"560",height:"315",src:`https://www.youtube.com/embed/${c}?autoplay=1`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,onLoad:h})})]})}var gv=Vn(Pr());function pv(){let n=document.getElementById("react-target");n&&(0,mv.createRoot)(n).render((0,gv.jsx)(qf,{}))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",pv):pv();})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
