(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{169:function(t,e,a){"use strict";a.r(e);var n={name:"ShowPage",components:{MetaComponent:a(6).a},data:function(){return{page:{}}},methods:{loadData:function(){var t=this,e=this.$route.params.id;this.$axios.get("front/pages/find/".concat(e)).then((function(e){t.page=e.data.data})).catch((function(e){return t.handleAjaxError(e)}))}},created:function(){this.loadData()}},o=a(0),i=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container pt-5"},[a("h3",[t._v(t._s(t.page.title))]),t._v(" "),a("p",{domProps:{innerHTML:t._s(t.page.content)}}),t._v(" "),a("meta-component",{attrs:{title:t.page.meta.title,description:t.page.meta.description,keywords:t.page.meta.keywords,type:"ITEM"}})],1)}),[],!1,null,"f337b770",null);e.default=i.exports}}]);