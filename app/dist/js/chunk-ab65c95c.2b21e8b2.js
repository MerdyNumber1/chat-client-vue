(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab65c95c"],{"1da1":function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));e("d3b7");function n(t,r,e,n,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void e(u)}s.done?r(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function s(t){n(a,o,i,s,c,"next",t)}function c(t){n(a,o,i,s,c,"throw",t)}s(void 0)}))}}},"62d5":function(t,r,e){},"96cf":function(t,r){!function(r){"use strict";var e,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"===typeof t,l=r.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=r.regeneratorRuntime=u?t.exports:{},l.wrap=b;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",m={},g={};g[a]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==n&&o.call(y,a)&&(g=y);var w=_.prototype=L.prototype=Object.create(g);E.prototype=w.constructor=_,_.constructor=E,_[c]=E.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===E||"GeneratorFunction"===(r.displayName||r.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},k(D.prototype),D.prototype[s]=function(){return this},l.AsyncIterator=D,l.async=function(t,r,e,n){var o=new D(b(t,r,e,n));return l.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){while(r.length){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},l.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}}}function b(t,r,e,n){var o=r&&r.prototype instanceof L?r:L,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=j(t,e,a),i}function x(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}function L(){}function E(){}function _(){}function k(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function D(t){function r(e,n,i,a){var s=x(t[e],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){r("next",t,i,a)}),(function(t){r("throw",t,i,a)})):Promise.resolve(u).then((function(t){c.value=t,i(c)}),a)}a(s.arg)}var e;function n(t,n){function o(){return new Promise((function(e,o){r(t,n,e,o)}))}return e=e?e.then(o,o):o()}this._invoke=n}function j(t,r,e){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return F()}e.method=o,e.arg=i;while(1){var a=e.delegate;if(a){var s=O(a,e);if(s){if(s===m)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var c=x(t,r,e);if("normal"===c.type){if(n=e.done?d:h,c.arg===m)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=d,e.method="throw",e.arg=c.arg)}}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=x(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){while(++n<t.length)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:F}}function F(){return{value:e,done:!0}}}(function(){return this}()||Function("return this")())},b05b:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"signup"},[e("signup-form")],1)},o=[],i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"signup"},[e("b-alert",{attrs:{show:!!t.error,variant:"danger"}},[t._v(t._s(t.error))]),e("b-form",{staticClass:"signup-form"},[e("b-form-group",{attrs:{id:"group-email",label:"Ваш email:","label-for":"email"}},[e("b-form-input",{attrs:{id:"email",type:"email",required:"",placeholder:"Введите Email",trim:""},model:{value:t.registerData.email,callback:function(r){t.$set(t.registerData,"email",r)},expression:"registerData.email"}})],1),e("b-form-group",{attrs:{id:"group-name",label:"Ваше имя:","label-for":"name"}},[e("b-form-input",{attrs:{id:"name",required:"",placeholder:"Ваше имя",trim:""},model:{value:t.registerData.name,callback:function(r){t.$set(t.registerData,"name",r)},expression:"registerData.name"}})],1),e("b-form-group",{attrs:{id:"group-password",label:"Пароль:","label-for":"password"}},[e("b-form-input",{attrs:{id:"password",type:"password",required:"",placeholder:"Пароль",trim:""},model:{value:t.registerData.password,callback:function(r){t.$set(t.registerData,"password",r)},expression:"registerData.password"}})],1),e("b-button",{staticClass:"col-12",attrs:{type:"submit",variant:"primary",disabled:t.isSending},on:{click:function(r){return r.preventDefault(),t.handleRegister(r)}}},[t._v("Зарегистрироваться")])],1),e("p",{staticClass:"text-center mt-2"},[t._v("или "),e("b-link",{attrs:{to:{name:"Login"}}},[t._v("Войти")])],1),e("b-modal",{attrs:{id:"confirm-popup","hide-footer":"",title:"Проверьте почту"}},[t._v(" На вашу почту было отправлено письмо с подтверждением регистрации ")])],1)},a=[],s=(e("b0c0"),e("96cf"),e("1da1")),c=e("5530"),u=e("2f62"),l=e("1c4a"),f={name:"SignUpForm",data:function(){return{error:"",registerData:{name:"",email:"",password:""},isSending:!1}},methods:Object(c["a"])({handleRegister:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e=new l({name:t.registerData.name,password:t.registerData.password,email:t.registerData.email},{name:"required|min:3|max:16",email:"required|email",password:"required|min:6|max:32"}),!e.passes()){r.next=19;break}return t.error="",t.isSending=!0,r.prev=4,r.next=7,t.register(t.registerData);case 7:t.registerData.name="",t.registerData.password="",t.registerData.email="",t.$bvModal.show("confirm-popup"),r.next=16;break;case 13:r.prev=13,r.t0=r["catch"](4),t.error=r.t0.error;case 16:t.isSending=!1,r.next=20;break;case 19:t.error=e.errors.first("email")||e.errors.first("name")||e.errors.first("password");case 20:case"end":return r.stop()}}),r,null,[[4,13]])})))()}},Object(u["b"])({register:"user/register"}))},h=f,p=(e("cf5d"),e("2877")),d=Object(p["a"])(h,i,a,!1,null,"e7d05fe6",null),m=d.exports,g={name:"Signup",metaInfo:{title:"Регистрация"},components:{"signup-form":m}},v=g,y=Object(p["a"])(v,n,o,!1,null,null,null);r["default"]=y.exports},cf5d:function(t,r,e){"use strict";var n=e("62d5"),o=e.n(n);o.a}}]);
//# sourceMappingURL=chunk-ab65c95c.2b21e8b2.js.map