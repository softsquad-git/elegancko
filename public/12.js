(window.webpackJsonp=window.webpackJsonp||[]).push([[12,14],{10:function(t,n,a){var o=a(53);"string"==typeof o&&(o=[[t.i,o,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};a(3)(o,e);o.locals&&(t.exports=o.locals)},138:function(t,n,a){"use strict";a.r(n);var o={name:"AdminPageSetting",components:{NoDataComponent:a(6).default},data:function(){return{data:[],title:"Ustawienia strony",params:{ordering:"",pagination:""}}},methods:{loadData:function(){var t=this;this.$axios.get("admin/settings/all").then((function(n){t.data=n.data.data}))},remove:function(t){}},created:function(){this.loadData(),document.title=this.title}},e=a(1),i=Object(e.a)(o,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"admin-page"},[a("h5",{staticClass:"title"},[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),a("div",{staticClass:"options"},[a("b-button",{attrs:{to:{name:"AdminDataSetting",params:{action:"create"}},variant:"outline-secondary"}},[a("span",{staticClass:"fa fa-plus"})]),t._v(" "),a("b-dropdown",{attrs:{variant:"outline-secondary"},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("span",{staticClass:"fa fa-filter"})]},proxy:!0}])},[t._v(" "),a("b-dropdown-item",{on:{click:function(n){return t.ordering("DESC")}}},[t._v("Malejąco")]),t._v(" "),a("b-dropdown-item",{on:{click:function(n){return t.ordering("ASC")}}},[t._v("Rosnąco")])],1),t._v(" "),a("b-dropdown",{attrs:{variant:"outline-secondary"},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("span",{staticClass:"fa fa-sort-numeric-up"})]},proxy:!0}])},[t._v(" "),a("b-dropdown-item",{on:{click:function(n){return t.pagination(6)}}},[t._v("6")]),t._v(" "),a("b-dropdown-item",{on:{click:function(n){return t.pagination(12)}}},[t._v("12")]),t._v(" "),a("b-dropdown-item",{on:{click:function(n){return t.pagination(18)}}},[t._v("18")]),t._v(" "),a("b-dropdown-item",{on:{click:function(n){return t.pagination(24)}}},[t._v("24")])],1)],1),t._v(" "),a("div",{staticClass:"content mt-4"},[t.data.length>0?a("table",{staticClass:"table"},[t._m(0),t._v(" "),a("tbody",t._l(t.data,(function(n,o){return a("tr",[a("th",{attrs:{scope:"row"}},[t._v(t._s(o+1))]),t._v(" "),a("td",[t._v(t._s(n.type.name))]),t._v(" "),a("td",[2===n.resource_type?a("img",{staticStyle:{width:"100px"},attrs:{src:n.value,alt:n.type.name}}):t._e(),t._v(" "),1===n.resource_type?a("span",[a("span",{domProps:{innerHTML:t._s(n.value)}})]):t._e()]),t._v(" "),a("td",[a("router-link",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{to:{name:"AdminDataSetting",params:{action:"edit",id:n.id}}}},[t._v("Edytuj")]),t._v(" "),a("b-button",{staticClass:"btn-sm",attrs:{variant:"outline-secondary"},on:{click:function(a){return t.remove(n.id)}}},[t._v("Usuń")])],1)])})),0)]):t._e(),t._v(" "),t.data.length<1?a("no-data-component",{attrs:{msg:"Nie dodano żadnych ustawień"}}):t._e()],1)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[this._v("L.p.")]),this._v(" "),n("th",{attrs:{scope:"col"}},[this._v("Nazwa")]),this._v(" "),n("th",{attrs:{scope:"col"}},[this._v("Wartość")]),this._v(" "),n("th",{attrs:{scope:"col"}},[this._v("Opcje")])])])}],!1,null,"682cb731",null);n.default=i.exports},52:function(t,n,a){"use strict";var o=a(10);a.n(o).a},53:function(t,n,a){(t.exports=a(2)(!1)).push([t.i,".no-data[data-v-726da324]{width:100%;padding:20px 0;font-size:18px;font-weight:700}",""])},6:function(t,n,a){"use strict";a.r(n);var o={name:"NoDataComponent",data:function(){return{}},props:{msg:""}},e=(a(52),a(1)),i=Object(e.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"no-data text-center"},[this._v("\n    "+this._s(this.msg)+"\n")])}),[],!1,null,"726da324",null);n.default=i.exports}}]);