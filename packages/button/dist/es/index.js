function e(e,t,n,o,i,s,r,d,a,l){"boolean"!=typeof r&&(a=d,d=r,r=!1);const c="function"==typeof n?n.options:n;let f;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),o&&(c._scopeId=o),s?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=f):t&&(f=r?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,d(e))}),f)if(c.functional){const e=c.render;c.render=function(t,n){return f.call(n),e(t,n)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,f):[f]}return n}const t=e({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{class:["el-button","el-button--"+e.type],attrs:{disabled:e.disabled},on:{click:e.handleClick}},[e._t("default")],2)])},staticRenderFns:[]},undefined,{name:"MyyButton",props:{type:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},data:()=>({}),methods:{handleClick(e){e.preventDefault(),this.$emit("click",e)}}},"data-v-6917bb74",false,undefined,!1,void 0,void 0,void 0);t.install=e=>{e.component(t.name,t)};export default t;
