(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{187:function(t,a,s){"use strict";s.r(a);var e={name:"AdminMetaList",components:{NoDataComponent:s(3).default},data:function(){return{title:"SEO",data:{}}},methods:{loadData:function(){var t=this;this.$Progress.start(),this.$axios.get("admin/meta/all").then((function(a){t.$Progress.finish(),t.data=a.data})).catch((function(a){t.$Progress.fail(),t.handleAjaxError(a)}))}},created:function(){this.loadData(),document.title=this.title}},n=s(0),o=Object(n.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"admin-page"},[s("h5",{staticClass:"title"},[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),s("div",{staticClass:"options"},[s("b-button",{attrs:{to:{name:"AdminMetaData",params:{action:"create"}},variant:"outline-secondary"}},[s("span",{staticClass:"fa fa-plus"})])],1),t._v(" "),s("div",{staticClass:"content mt-4"},[t.data.data.length>0?s("table",{staticClass:"table"},[t._m(0),t._v(" "),t._l(t.data.data,(function(a,e){return s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v(t._s(e+1))]),t._v(" "),s("td",[t._v(t._s(a.resource.name))]),t._v(" "),s("td",[t._v(t._s(a.title))]),t._v(" "),s("td",[t._v(t._s(a.description))]),t._v(" "),s("td",[t._v(t._s(a.keywords))]),t._v(" "),s("td",{domProps:{innerHTML:t._s(a.locale)}}),t._v(" "),s("td",[s("router-link",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{to:{name:"AdminMetaData",params:{action:"edit",id:a.id}}}},[t._v("Edytuj\n                    ")])],1)])})),t._v(" "),s("tbody")],2):t._e(),t._v(" "),s("pagination",{attrs:{data:t.data},on:{"pagination-change-page":t.loadData}}),t._v(" "),t.data.data.length<1?s("no-data-component",{attrs:{msg:"Brak danych do wyświetlenia"}}):t._e()],1)])}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("L.p.")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Strona")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Tytuł")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Opis")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Słowa kluczowe")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Język")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Opcje")])])])}],!1,null,"11fa13d4",null);a.default=o.exports}}]);