(function(n){function A(A){for(var r,l,i=A[0],s=A[1],u=A[2],c=0,f=[];c<i.length;c++)l=i[c],t[l]&&f.push(t[l][0]),t[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r]);p&&p(A);while(f.length)f.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var n,A=0;A<o.length;A++){for(var e=o[A],r=!0,i=1;i<e.length;i++){var s=e[i];0!==t[s]&&(r=!1)}r&&(o.splice(A--,1),n=l(l.s=e[0]))}return n}var r={},t={app:0},o=[];function l(A){if(r[A])return r[A].exports;var e=r[A]={i:A,l:!1,exports:{}};return n[A].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=n,l.c=r,l.d=function(n,A,e){l.o(n,A)||Object.defineProperty(n,A,{enumerable:!0,get:e})},l.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,A){if(1&A&&(n=l(n)),8&A)return n;if(4&A&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&A&&"string"!=typeof n)for(var r in n)l.d(e,r,function(A){return n[A]}.bind(null,r));return e},l.n=function(n){var A=n&&n.__esModule?function(){return n["default"]}:function(){return n};return l.d(A,"a",A),A},l.o=function(n,A){return Object.prototype.hasOwnProperty.call(n,A)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=A,i=i.slice();for(var u=0;u<i.length;u++)A(i[u]);var p=s;o.push([0,"chunk-vendors"]),e()})({0:function(n,A,e){n.exports=e("56d7")},"034f":function(n,A,e){"use strict";var r=e("c21b"),t=e.n(r);t.a},"56d7":function(n,A,e){"use strict";e.r(A);e("cadf"),e("551c"),e("097d");var r=e("2b0e"),t=function(){var n=this,A=n.$createElement,r=n._self._c||A;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{id:"profile-pic",alt:"mouse logo",src:e("cf05")}}),r("HelloWorld",{attrs:{msg:"Hi, my name is Natalie"}})],1)},o=[],l=function(){var n=this,A=n.$createElement,e=n._self._c||A;return e("div",{staticClass:"hello"},[e("h1",[n._v(n._s(n.msg))]),e("p",[n._v("\n    Thanks for visiting my website!\n  ")])])},i=[],s={name:"HelloWorld",props:{msg:String}},u=s,p=(e("6375"),e("2877")),c=Object(p["a"])(u,l,i,!1,null,"2b10dff8",null);c.options.__file="HelloWorld.vue";var f=c.exports,a={name:"app",components:{HelloWorld:f}},g=a,v=(e("034f"),Object(p["a"])(g,t,o,!1,null,null,null));v.options.__file="App.vue";var d=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(n){return n(d)}}).$mount("#app")},6375:function(n,A,e){"use strict";var r=e("7db0"),t=e.n(r);t.a},"7db0":function(n,A,e){},c21b:function(n,A,e){},cf05:function(n,A){n.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.c2574d5e.js.map