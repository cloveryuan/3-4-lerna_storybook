function e(e,t,n,o,r,i,s,d,a,l){"boolean"!=typeof s&&(a=d,d=s,s=!1);const c="function"==typeof n?n.options:n;let f;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,r&&(c.functional=!0)),o&&(c._scopeId=o),i?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=f):t&&(f=s?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,d(e))}),f)if(c.functional){const e=c.render;c.render=function(t,n){return f.call(n),e(t,n)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,f):[f]}return n}const t=e({render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("form",[e._t("default")],2)},staticRenderFns:[]},undefined,{name:"MyyForm",provide(){return{form:this}},props:{model:{type:Object},rules:{type:Object}},data:()=>({}),methods:{validate(e){if(this.model)if(this.rules){const t=this.$children.filter((e=>e.prop)).map((e=>e.validate&&e.validate()));Promise.all(t).then((()=>e(!0))).catch((()=>e(!1)))}else e(!0);else console.warn("[Lg Warn][Form]model is required for validate to work!")}}},"data-v-6e39c11e",false,undefined,!1,void 0,void 0,void 0);t.install=e=>{e.component(t.name,t)};export default t;