/*!
 Lo-Dash 1.0.0-rc.1 (Custom Build) lodash.com/license
 Build: `lodash underscore -m -o ./lodash.underscore.js`
 Underscore.js 1.4.2 underscorejs.org/LICENSE
*/
;(function(e,t){function n(e){if(e&&"object"==typeof e&&e.__wrapped__)return e;if(!(this instanceof n))return new n(e);this.__wrapped__=e}function r(e,t){var n=e.b,r=t.b,e=e.a,t=t.a;if(e!==t){if(e>t||"undefined"==typeof e)return 1;if(e<t||"undefined"==typeof t)return-1}return n<r?-1:1}function i(e,t,n){function r(){var i=arguments,s=t;return n.length&&(i=i.length?n.concat(f(i)):n),this instanceof r?(i=e.apply(this,i),y(i)?i:this):e.apply(s,i)}return e&&e.prototype&&(a.prototype=e.prototype,r.prototype=new 
a,a.prototype=null),r}function s(e,t){return e?"function"!=typeof e?function(t){return t[e]}:"undefined"!=typeof t?function(n,r,i){return e.call(t,n,r,i)}:e:I}function o(e){return"\\"+Et[e]}function u(e){return Tt[e]}function a(){}function f(e,t,n){t||(t=0),"undefined"==typeof n&&(n=e?e.length:0);for(var r=-1,n=n-t||0,i=Array(0>n?0:n);++r<n;)i[r]=e[t+r];return i}function l(e){return Nt[e]}function c(e){if(!e)return e;for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t];if(r)for(var i in r)e
[i]=r[i]}return e}function h(e){var t=[];return xt(e,function(e,n){t.push(n)}),t}function p(e){if(!e)return e;for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t];if(r)for(var i in r)null==e[i]&&(e[i]=r[i])}return e}function d(e){var t=[];return St(e,function(e,n){g(e)&&t.push(n)}),t.sort()}function v(e){var t={};return xt(e,function(e,n){t[e]=n}),t}function m(e,t,n,r){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;var i=rt.call(e),s=rt.call(t);if(i!=s)return!1;switch(i){case ht
:case pt:return+e==+t;case dt:return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case mt:case gt:return e==t+""}s=i==ct;if(!s){if(e.__wrapped__||t.__wrapped__)return m(e.__wrapped__||e,t.__wrapped__||t);if(i!=vt)return!1;var i=e.constructor,o=t.constructor;if(i!=o&&(!g(i)||!(i instanceof i&&g(o)&&o instanceof o)))return!1}n||(n=[]),r||(r=[]);for(i=n.length;i--;)if(n[i]==e)return r[i]==t;var u=!0,a=0;n.push(e),r.push(t);if(s){a=e.length;if(u=a==t.length)for(;a--&&(u=m(e[a],t[a],n,r)););return u}return St(e,function(
e,i,s){if(tt.call(s,i))return a++,!(u=tt.call(t,i)&&m(e,t[i],n,r))&&X}),u&&St(t,function(e,t,n){if(tt.call(n,t))return!(u=-1<--a)&&X}),u}function g(e){return"function"==typeof e}function y(e){return e?wt[typeof e]:!1}function b(e){return"number"==typeof e||rt.call(e)==dt}function w(e){return"string"==typeof e||rt.call(e)==gt}function E(e){var t=[];return xt(e,function(e){t.push(e)}),t}function S(e,t){var n=!1;return"number"==typeof (e?e.length:0)?n=-1<P(e,t):Lt(e,function(e){return(n=e===t)&&X}),
n}function x(e,t,n){var r=!0,t=s(t,n);if(Ct(e))for(var n=-1,i=e.length;++n<i&&(r=!!t(e[n],n,e)););else Lt(e,function(e,n,i){return!(r=!!t(e,n,i))&&X});return r}function T(e,t,n){var r=[],t=s(t,n);if(Ct(e))for(var n=-1,i=e.length;++n<i;){var o=e[n];t(o,n,e)&&r.push(o)}else Lt(e,function(e,n,i){t(e,n,i)&&r.push(e)});return r}function N(e,t,n){var r,t=s(t,n);return Lt(e,function(e,n,i){if(t(e,n,i))return r=e,X}),r}function C(e,t,n){var r=-1,i=e?e.length:0,o=Array("number"==typeof i?i:0),t=s(t,n);if(
Ct(e))for(;++r<i;)o[r]=t(e[r],r,e);else Lt(e,function(e,n,i){o[++r]=t(e,n,i)});return o}function k(e,t,n){var r=-Infinity,i=-1,o=e?e.length:0,u=r;if(t||!Ct(e))t=s(t,n),Lt(e,function(e,n,i){n=t(e,n,i),n>r&&(r=n,u=e)});else for(;++i<o;)e[i]>u&&(u=e[i]);return u}function L(e,t){return C(e,t+"")}function A(e,t,n,r){var i=3>arguments.length;return t||(t=I),Lt(e,function(e,s,o){n=i?(i=!1,e):t.call(r,n,e,s,o)}),n}function O(e,t,n,r){var i=e?e.length:0,s=3>arguments.length;if("number"!=typeof i)var o=kt(
e),i=o.length;return t||(t=I),Lt(e,function(u,a,f){a=o?o[--i]:--i,n=s?(s=!1,e[a]):t.call(r,n,e[a],a,f)}),n}function M(e,t,n){var r,t=s(t,n);if(Ct(e))for(var n=-1,i=e.length;++n<i&&!(r=t(e[n],n,e)););else Lt(e,function(e,n,i){return(r=t(e,n,i))&&X});return!!r}function _(e,t,n){if(e){var r=e.length;return null==t||n?e[0]:f(e,0,ft(at(0,t),r))}}function D(e,t){for(var n=-1,r=e?e.length:0,i=[];++n<r;){var s=e[n];Ct(s)?nt.apply(i,t?s:D(s)):i.push(s)}return i}function P(e,t,n){var r=-1,i=e?e.length:0;if("number"==typeof 
n)r=(0>n?at(0,i+n):n||0)-1;else if(n)return r=B(e,t),e[r]===t?r:-1;for(;++r<i;)if(e[r]===t)return r;return-1}function H(e,t,n){return f(e,null==t||n?1:at(0,t))}function B(e,t,n,r){for(var i=0,o=e?e.length:i,n=n?s(n,r):I,t=n(t);i<o;)r=i+o>>>1,n(e[r])<t?i=r+1:o=r;return i}function j(e,t,n,r){var i=-1,o=e?e.length:0,u=[],a=u;n&&(a=[],n=s(n,r));for(;++i<o;){var r=e[i],f=n?n(r,i,e):r;if(t?!i||a[a.length-1]!==f:0>P(a,f))n&&a.push(f),u.push(r)}return u}function F(e,t){return yt||it&&2<arguments.length?it
.call.apply(it,arguments):i(e,t,f(arguments,2))}function I(e){return e}function q(e){Lt(d(e),function(t){var r=n[t]=e[t];n.prototype[t]=function(){var e=[this.__wrapped__];return nt.apply(e,arguments),e=r.apply(n,e),this.__chain__&&(e=new n(e),e.__chain__=!0),e}})}var R="object"==typeof exports&&exports,U="object"==typeof global&&global;U.global===U&&(e=U);var z=[],U=new function(){},W=0,X=U,V=e._,$=/&(?:amp|lt|gt|quot|#x27);/g,J=RegExp("^"+(U.valueOf+"").replace(/[.*+?^=!:${}()|[\]\/\\]/g,"\\$&"
).replace(/valueOf|for [^\]]+/g,".+?")+"$"),K=/($^)/,Q=/[&<>"']/g,G=/['\n\r\t\u2028\u2029\\]/g,Y=Math.ceil,Z=z.concat,et=Math.floor,tt=U.hasOwnProperty,nt=z.push,rt=U.toString,it=J.test(it=f.bind)&&it,st=J.test(st=Array.isArray)&&st,ot=e.isFinite,ut=J.test(ut=Object.keys)&&ut,at=Math.max,ft=Math.min,lt=Math.random,ct="[object Array]",ht="[object Boolean]",pt="[object Date]",dt="[object Number]",vt="[object Object]",mt="[object RegExp]",gt="[object String]",U=!!e.attachEvent,U=it&&!/\n|true/.test(
it+U),yt=it&&!U,bt=(bt={0:1,length:1},z.splice.call(bt,0,1),bt[0]),wt={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,"undefined":!1},Et={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"};n.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,variable:""},n.isArguments=function(e){return"[object Arguments]"==rt.call(e)},n.isArguments(arguments)||(n.isArguments=function(e){return e?tt.call(e,"callee"):!1});var St=
function(e,t){var n;if(!e)return e;t||(t=I);for(n in e)if(t(e[n],n,e)===X)break;return e},xt=function(e,t){var n;if(!e)return e;t||(t=I);for(n in e)if(tt.call(e,n)&&t(e[n],n,e)===X)break;return e},Tt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"},Nt=v(Tt),Ct=st||function(e){return rt.call(e)==ct};g(/x/)&&(g=function(e){return"[object Function]"==rt.call(e)});var kt=ut?function(e){return y(e)?ut(e):[]}:h,Lt=function(e,t,n){if(!e)return e;var t=t&&"undefined"==typeof n?t:s(t,n),r=e.length
,n=-1;if("number"==typeof r){for(;++n<r;)if(t(e[n],n,e)===X)return e}else for(n in e)if(tt.call(e,n)&&t(e[n],n,e)===X)return e};n.VERSION="1.0.0-rc.1",n.after=function(e,t){return 1>e?t():function(){if(1>--e)return t.apply(this,arguments)}},n.bind=F,n.bindAll=function(e){for(var t=arguments,n=1<t.length?0:(t=d(e),-1),r=t.length;++n<r;){var i=t[n];e[i]=F(e[i],e)}return e},n.chain=function(e){return e=new n(e),e.__chain__=!0,e},n.clone=function(e){return e&&wt[typeof e]?Ct(e)?f(e):c({},e):e},n.compact=
function(e){for(var t=-1,n=e?e.length:0,r=[];++t<n;){var i=e[t];i&&r.push(i)}return r},n.compose=function(){var e=arguments;return function(){for(var t=arguments,n=e.length;n--;)t=[e[n].apply(this,t)];return t[0]}},n.contains=S,n.countBy=function(e,t,n){var r={},t=s(t,n);return Lt(e,function(e,n,i){n=t(e,n,i),tt.call(r,n)?r[n]++:r[n]=1}),r},n.debounce=function(e,t,n){function r(){u=null,n||(s=e.apply(o,i))}var i,s,o,u;return function(){var a=n&&!u;return i=arguments,o=this,clearTimeout(u),u=setTimeout
(r,t),a&&(s=e.apply(o,i)),s}},n.defaults=p,n.defer=function(e){var n=f(arguments,1);return setTimeout(function(){e.apply(t,n)},1)},n.delay=function(e,n){var r=f(arguments,2);return setTimeout(function(){e.apply(t,r)},n)},n.difference=function(e){for(var t=-1,n=e.length,r=Z.apply(z,arguments),i=[];++t<n;){var s=e[t];0>P(r,s,n)&&i.push(s)}return i},n.escape=function(e){return null==e?"":(e+"").replace(Q,u)},n.every=x,n.filter=T,n.find=N,n.first=_,n.flatten=D,n.forEach=Lt,n.functions=d,n.groupBy=function(
e,t,n){var r={},t=s(t,n);return Lt(e,function(e,n,i){n=t(e,n,i),(tt.call(r,n)?r[n]:r[n]=[]).push(e)}),r},n.has=function(e,t){return e?tt.call(e,t):!1},n.identity=I,n.indexOf=P,n.initial=function(e,t,n){if(!e)return[];var r=e.length;return f(e,0,ft(at(0,r-(null==t||n?1:t||0)),r))},n.intersection=function(e){var t=arguments,n=t.length,r=[];return Lt(e,function(e){if(0>P(r,e)){for(var i=n;--i;)if(0>P(t[i],e))return;r.push(e)}}),r},n.invert=v,n.invoke=function(e,t){var n=f(arguments,2),r="function"==typeof 
t,i=[];return Lt(e,function(e){i.push((r?t:e[t]).apply(e,n))}),i},n.isArray=Ct,n.isBoolean=function(e){return!0===e||!1===e||rt.call(e)==ht},n.isDate=function(e){return rt.call(e)==pt},n.isElement=function(e){return e?1===e.nodeType:!1},n.isEmpty=function(e){if(!e)return!0;if(Ct(e)||w(e))return!e.length;for(var t in e)if(tt.call(e,t))return!1;return!0},n.isEqual=m,n.isFinite=function(e){return ot(e)&&rt.call(e)==dt},n.isFunction=g,n.isNaN=function(e){return b(e)&&e!=+e},n.isNull=function(e){return null===
e},n.isNumber=b,n.isObject=y,n.isRegExp=function(e){return rt.call(e)==mt},n.isString=w,n.isUndefined=function(e){return"undefined"==typeof e},n.keys=kt,n.last=function(e,t,n){if(e){var r=e.length;return null==t||n?e[r-1]:f(e,at(0,r-t))}},n.lastIndexOf=function(e,t,n){var r=e?e.length:0;for("number"==typeof n&&(r=(0>n?at(0,r+n):ft(n,r-1))+1);r--;)if(e[r]===t)return r;return-1},n.map=C,n.max=k,n.memoize=function(e,t){var n={};return function(){var r=t?t.apply(this,arguments):arguments[0];return tt
.call(n,r)?n[r]:n[r]=e.apply(this,arguments)}},n.min=function(e,t,n){var r=Infinity,i=-1,o=e?e.length:0,u=r;if(t||!Ct(e))t=s(t,n),Lt(e,function(e,n,i){n=t(e,n,i),n<r&&(r=n,u=e)});else for(;++i<o;)e[i]<u&&(u=e[i]);return u},n.mixin=q,n.noConflict=function(){return e._=V,this},n.object=function(e,t){for(var n=-1,r=e?e.length:0,i={};++n<r;){var s=e[n];t?i[s]=t[n]:i[s[0]]=s[1]}return i},n.omit=function(e){var t=Z.apply(z,arguments),n={};return St(e,function(e,r){0>P(t,r,1)&&(n[r]=e)}),n},n.once=function(
e){var t,n=!1;return function(){return n?t:(n=!0,t=e.apply(this,arguments),e=null,t)}},n.pairs=function(e){var t=[];return xt(e,function(e,n){t.push([n,e])}),t},n.pick=function(e){for(var t=0,n=Z.apply(z,arguments),r=n.length,i={};++t<r;){var s=n[t];s in e&&(i[s]=e[s])}return i},n.pluck=L,n.random=function(e,t){return null==e&&null==t&&(t=1),e=+e||0,null==t&&(t=e,e=0),e+et(lt()*((+t||0)-e+1))},n.range=function(e,t,n){e=+e||0,n=+n||1,null==t&&(t=e,e=0);for(var r=-1,t=at(0,Y((t-e)/n)),i=Array(t);++
r<t;)i[r]=e,e+=n;return i},n.reduce=A,n.reduceRight=O,n.reject=function(e,t,n){return t=s(t,n),T(e,function(e,n,r){return!t(e,n,r)})},n.rest=H,n.result=function(e,t){var n=e?e[t]:null;return g(n)?e[t]():n},n.shuffle=function(e){var t=-1,n=Array(e?e.length:0);return Lt(e,function(e){var r=et(lt()*(++t+1));n[t]=n[r],n[r]=e}),n},n.size=function(e){var t=e?e.length:0;return"number"==typeof t?t:kt(e).length},n.some=M,n.sortBy=function(e,t,n){var i=[],t=s(t,n);Lt(e,function(e,n,r){i.push({a:t(e,n,r),b:
n,c:e})}),e=i.length;for(i.sort(r);e--;)i[e]=i[e].c;return i},n.sortedIndex=B,n.tap=function(e,t){return t(e),e},n.template=function(e,t,r){e||(e="");var r=p({},r,n.templateSettings),i=0,s="__p+='",u=r.variable;e.replace(RegExp((r.escape||K).source+"|"+(r.interpolate||K).source+"|"+(r.evaluate||K).source+"|$","g"),function(t,n,r,u,a){s+=e.slice(i,a).replace(G,o),s+=n?"'+_['escape']("+n+")+'":u?"';"+u+";__p+='":r?"'+((__t=("+r+"))==null?'':__t)+'":"",i=a+t.length}),s+="';\n",u||(u="obj",s="with("+
u+"||{}){"+s+"}"),s="function("+u+"){var __t,__p='',__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}"+s+"return __p}";try{var a=Function("_","return "+s)(n)}catch(f){throw f.source=s,f}return t?a(t):(a.source=s,a)},n.throttle=function(e,t){function n(){u=new Date,o=null,i=e.apply(s,r)}var r,i,s,o,u=0;return function(){var a=new Date,f=t-(a-u);return r=arguments,s=this,0>=f?(clearTimeout(o),u=a,i=e.apply(s,r)):o||(o=setTimeout(n,f)),i}},n.times=function(e,t,n){for(var e=+e||0
,r=-1,i=Array(e);++r<e;)i[r]=t.call(n,r);return i},n.toArray=function(e){return"number"==typeof (e?e.length:0)?f(e):E(e)},n.unescape=function(e){return null==e?"":(e+"").replace($,l)},n.union=function(){return j(Z.apply(z,arguments))},n.uniq=j,n.uniqueId=function(e){var t=W++;return e?e+t:t},n.values=E,n.where=function(e,t){var n=kt(t);return T(e,function(e){for(var r=n.length;r--;){var i=e[n[r]]===t[n[r]];if(!i)break}return!!i})},n.without=function(e){for(var t=-1,n=e.length,r=[];++t<n;){var i=e
[t];0>P(arguments,i,1)&&r.push(i)}return r},n.wrap=function(e,t){return function(){var n=[e];return nt.apply(n,arguments),t.apply(this,n)}},n.zip=function(e){for(var t=-1,n=e?k(L(arguments,"length")):0,r=Array(n);++t<n;)r[t]=L(arguments,t);return r},n.all=x,n.any=M,n.collect=C,n.detect=N,n.drop=H,n.each=Lt,n.extend=c,n.foldl=A,n.foldr=O,n.head=_,n.include=S,n.inject=A,n.methods=d,n.select=T,n.tail=H,n.take=_,n.unique=j,q(n),n.prototype.chain=function(){return this.__chain__=!0,this},n.prototype.value=
function(){return this.__wrapped__},Lt("pop push reverse shift sort splice unshift".split(" "),function(e){var t=z[e];n.prototype[e]=function(){var e=this.__wrapped__;return t.apply(e,arguments),bt&&e.length===0&&delete e[0],this}}),Lt(["concat","join","slice"],function(e){var t=z[e];n.prototype[e]=function(){var e=t.apply(this.__wrapped__,arguments);return this.__chain__&&(e=new n(e),e.__chain__=!0),e}}),R?"object"==typeof module&&module&&module.exports==R?(module.exports=n)._=n:R._=n:e._=n})(this
);