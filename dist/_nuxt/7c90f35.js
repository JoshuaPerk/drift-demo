(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{306:function(e,t,r){var content=r(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(69).default)("9e177958",content,!0,{sourceMap:!1})},312:function(e,t,r){"use strict";var n=r(2),o=r(5),c=r(44),d=r(26),l=r(38),f=r(201),m=r(15),v=r(3),h=r(200),x=r(135),w=r(313),y=r(314),C=r(87),_=r(315),D=[],k=o(D.sort),$=o(D.push),Q=v((function(){D.sort(void 0)})),A=v((function(){D.sort(null)})),j=x("sort"),E=!v((function(){if(C)return C<70;if(!(w&&w>3)){if(y)return!0;if(_)return _<603;var code,e,t,r,n="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(r=0;r<47;r++)D.push({k:e+r,v:t})}for(D.sort((function(a,b){return b.v-a.v})),r=0;r<D.length;r++)e=D[r].k.charAt(0),n.charAt(n.length-1)!==e&&(n+=e);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:Q||!A||!j||!E},{sort:function(e){void 0!==e&&c(e);var t=d(this);if(E)return void 0===e?k(t):k(t,e);var r,n,o=[],v=l(t);for(n=0;n<v;n++)n in t&&$(o,t[n]);for(h(o,function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:m(t)>m(r)?1:-1}}(e)),r=l(o),n=0;n<r;)t[n]=o[n++];for(;n<v;)f(t,n++);return t}})},313:function(e,t,r){var n=r(70).match(/firefox\/(\d+)/i);e.exports=!!n&&+n[1]},314:function(e,t,r){var n=r(70);e.exports=/MSIE|Trident/.test(n)},315:function(e,t,r){var n=r(70).match(/AppleWebKit\/(\d+)\./);e.exports=!!n&&+n[1]},316:function(e,t,r){"use strict";r(306)},317:function(e,t,r){var n=r(68)((function(i){return i[1]}));n.push([e.i,".grow{flex-grow:1}.grow-0{flex-grow:0}",""]),n.locals={},e.exports=n},320:function(e,t,r){"use strict";r.r(t);r(25);var n=r(8),o=(r(43),r(312),r(37),r(14),r(71),r(86),{name:"TheDemoMenu",data:function(){return{searchQuery:""}},computed:{demos:function(){return this.$store.state.demos.saved},activated:function(){return this.$store.state.demos.activated},filteredDemos:function(){var e=this;return this.demos.filter((function(t){return t.name.toLowerCase().includes(e.searchQuery.toLowerCase())})).sort((function(a,b){return new Date(b.updated_at)-new Date(a.updated_at)}))}},methods:{createDemo:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("demos/create");case 2:case"end":return t.stop()}}),t)})))()},cloneDemo:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.$store.dispatch("demos/clone",{demoId:e,demoName:t});case 2:case"end":return n.stop()}}),n)})))()},selectDemo:function(e){this.$store.commit("demos/select",{demoId:e})}}}),c=(r(316),r(52)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"relative mt-6 flex-1 px-4 sm:px-6"},[r("div",{staticClass:"border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-drift-indigo focus-within:border-drift-indigo"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm",attrs:{type:"text",placeholder:"Search Your Demos"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})]),e._v(" "),e._m(0),e._v(" "),e.filteredDemos.length?r("ul",{staticClass:"border rounded divide-y"},e._l(e.filteredDemos,(function(t){return r("li",{key:t.id,staticClass:"group p-4 cursor-pointer"},[r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"grow items-center transition origin-left group-hover:scale-105 opacity-75 group-hover:opacity-100 z-40",on:{click:function(r){return e.selectDemo(t.id)}}},[t.id===e.activated?r("span",{staticClass:"mr-2 text-xxs"},[e._v(" ✅ ")]):e._e(),e._v("\n          "+e._s(t.name)+"\n        ")]),e._v(" "),r("button",{staticClass:"grow-0 text-xs uppercase rounded border font-base leading-4 px-3 py-2 bg-drift-violet text-white z-50",on:{click:function(r){return e.cloneDemo(t.id,t.name)}}},[e._v("\n          Clone\n        ")])])])})),0):r("div",{staticClass:"uppercase text-xs text-center p-4 font-bold opacity-50"},[e._v("\n    😭 You don't have any demos\n  ")]),e._v(" "),r("button",{staticClass:"mt-6 w-full items-center px-6 py-3 border border-transparent rounded-md shadow-sm transition bg-drift-lime hover:bg-drift-cyan focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-drift-indigo font-bold uppercase",attrs:{type:"button"},on:{click:e.createDemo}},[e._v("\n    ⚡️ Create new demo\n  ")])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"relative mt-6 mb-2"},[r("div",{staticClass:"absolute inset-0 flex items-center",attrs:{"aria-hidden":"true"}},[r("div",{staticClass:"w-full border-t border-gray-200"})]),e._v(" "),r("div",{staticClass:"relative flex justify-start"},[r("span",{staticClass:"pr-2 bg-white text-xs uppercase font-bold"},[e._v("\n        Your Demos\n      ")])])])}],!1,null,null,null);t.default=component.exports}}]);