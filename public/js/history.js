(self.webpackChunk=self.webpackChunk||[]).push([[908],{8135:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});const n={name:"history",data:function(){return{loading:!0,slips:void 0}},mounted:function(){this.getBets("history")},created:function(){var t=this;axios.post("user").then((function(e){0!==Object.keys(e.data).length?t.loading=!1:t.$router.push({name:"sports"})}))},methods:{getBets:function(t){var e=this;axios.post("get-bets",{params:{param:t}}).then((function(t){console.log(t),0!==Object.keys(t.data).length&&(e.slips=t.data),e.loading=!1})).catch((function(t){console.error(t)}))}}};const i=(0,s(1900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main pages justify-content-start align-items-start w-100"},[s("div",{staticClass:"bets-headers p-3 text-center bg-primary text-white h3 w-100 mb-0"},[t._v("\n    Bets History\n  ")]),t._v(" "),t.slips?s("div",{staticClass:"scroller"},t._l(t.slips,(function(e){return s("div",{key:e.id,staticClass:"bets-rows"},[t._v("\n      "+t._s(e)+"\n    ")])})),0):s("div",{staticClass:"scroller text-center w-100 bg-dark d-flex flex-column justify-content-center align-items-center"},[s("h4",{staticClass:"my-3"},[t._v("\n      No bet slips found in history.\n    ")]),t._v(" "),s("router-link",{staticClass:"btn btn-primary mt-3",attrs:{to:{name:"active",params:{}}}},[t._v("\n      Active Bets\n    ")])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"})])}),[],!1,null,null,null).exports},1900:(t,e,s)=>{"use strict";function n(t,e,s,n,i,a,o,r){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):i&&(c=r?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}s.d(e,{Z:()=>n})}}]);
//# sourceMappingURL=history.js.map