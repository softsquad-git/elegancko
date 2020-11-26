(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{110:function(t,a,n){"use strict";var o=n(26);n.n(o).a},111:function(t,a,n){(t.exports=n(2)(!1)).push([t.i,".search-btn[data-v-6633cfaf]{border-radius:0;font-size:20px;border:0;padding-top:8px}",""])},188:function(t,a,n){"use strict";n.r(a);var o={name:"AdminPagesList",components:{NoDataComponent:n(4).default},data:function(){return{data:{},title:"Strony",params:{title:"",is_active:"",position:"",ordering:"",pagination:""},showSearch:!1,loadSpinner:null}},methods:{loadData:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$Progress.start(),this.$axios.get("admin/pages/all?page=".concat(a,"&title=").concat(this.params.title,"&is_active=").concat(this.params.is_active,"&position=").concat(this.params.position,"&ordering=").concat(this.params.ordering,"&pagination=").concat(this.params.pagination)).then((function(a){t.$Progress.finish(),t.data=a.data})).catch((function(a){t.$Progress.fail(),t.handleAjaxError(a)}))},remove:function(t){var a=this;this.loadSpinner=t,this.$axios.delete("admin/pages/remove/".concat(t)).then((function(t){a.loadSpinner=null,1===t.data.success&&a.loadData()})).catch((function(t){a.loadSpinner=null,a.handleAjaxError(t)}))}},created:function(){this.loadData(),document.title=this.title}},e=(n(110),n(0)),s=Object(e.a)(o,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"admin-page"},[n("h5",{staticClass:"title"},[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"options"},[n("b-button",{attrs:{to:{name:"AdminDataPage",params:{action:"create"}},variant:"outline-secondary"}},[n("span",{staticClass:"fa fa-plus"})]),t._v(" "),n("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(a){t.showSearch^=!0}}},[n("span",{staticClass:"fa fa-search"})]),t._v(" "),n("b-dropdown",{attrs:{variant:"outline-secondary"},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("span",{staticClass:"fa fa-filter"})]},proxy:!0}])},[t._v(" "),n("b-dropdown-item",{on:{click:function(a){return t.ordering("DESC")}}},[t._v("Malejąco")]),t._v(" "),n("b-dropdown-item",{on:{click:function(a){return t.ordering("ASC")}}},[t._v("Rosnąco")])],1),t._v(" "),n("b-dropdown",{attrs:{variant:"outline-secondary"},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("span",{staticClass:"fa fa-sort-numeric-up"})]},proxy:!0}])},[t._v(" "),n("b-dropdown-item",{on:{click:function(a){return t.pagination(6)}}},[t._v("6")]),t._v(" "),n("b-dropdown-item",{on:{click:function(a){return t.pagination(12)}}},[t._v("12")]),t._v(" "),n("b-dropdown-item",{on:{click:function(a){return t.pagination(18)}}},[t._v("18")]),t._v(" "),n("b-dropdown-item",{on:{click:function(a){return t.pagination(24)}}},[t._v("24")])],1)],1),t._v(" "),t.showSearch?n("form",{staticClass:"mt-3 mb-3",on:{submit:function(a){return a.preventDefault(),t.loadData(a)}}},[n("div",{staticClass:"row pl-3 pr-3"},[n("div",{staticClass:"col-xl-4 p-0 col-lg-4 col-md-4 col-sm-12 col-xs-12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.params.title,expression:"params.title"}],staticClass:"form-control",attrs:{id:"title","aria-label":"Tytuł",placeholder:"Tytuł ..."},domProps:{value:t.params.title},on:{input:function(a){a.target.composing||t.$set(t.params,"title",a.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-12 p-0 col-xs-12"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.params.position,expression:"params.position"}],staticClass:"form-control",attrs:{id:"position","aria-label":"Pozycja"},on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.params,"position",a.target.multiple?n:n[0])}}},[n("option",{attrs:{selected:"",value:""}},[t._v("Wybierz pozycję")]),t._v(" "),n("option",{attrs:{value:"top"}},[t._v("Góra")]),t._v(" "),n("option",{attrs:{value:"bottom"}},[t._v("Stopka")])])]),t._v(" "),n("div",{staticClass:"col-xl-3 col-lg-3 col-md-3 p-0 col-sm-12 col-xs-12"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.params.is_active,expression:"params.is_active"}],staticClass:"form-control",attrs:{id:"active","aria-label":"Aktywny?"},on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.params,"is_active",a.target.multiple?n:n[0])}}},[n("option",{attrs:{selected:"",value:""}},[t._v("Aktywny?")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("Tak")]),t._v(" "),n("option",{attrs:{value:"0"}},[t._v("Nie")])])]),t._v(" "),n("div",{staticClass:"col-xl-1 p-0 col-lg-1 col-md-1 col-sm-12 col-xs-12"},[n("b-button",{staticClass:"search-btn w-100",attrs:{type:"submit",variant:"outline-secondary"}},[n("span",{staticClass:"fa fa-search"})])],1)])]):t._e(),t._v(" "),n("div",{staticClass:"content mt-4"},[t.data.data.length>0?n("table",{staticClass:"table"},[t._m(0),t._v(" "),n("tbody",t._l(t.data.data,(function(a,o){return n("tr",{key:a.id},[n("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v(t._s(o+1))]),t._v(" "),n("td",[t._v(t._s(a.title))]),t._v(" "),n("td",[t._v(t._s("top"===a.position?"Góra":"Stopka"))]),t._v(" "),n("td",[t._v(t._s(1==a.is_active?"Tak":"Nie"))]),t._v(" "),n("td",{domProps:{innerHTML:t._s(a.locale)}}),t._v(" "),n("td",[n("router-link",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{to:{name:"AdminDataPage",params:{action:"edit",id:a.id}}}},[t._v("Edytuj")]),t._v(" "),n("b-button",{staticClass:"btn-sm",attrs:{variant:"outline-secondary"},on:{click:function(n){return t.remove(a.id)}}},[t.loadSpinner===a.id?n("b-spinner",{attrs:{small:""}}):t._e(),t._v(" Usuń")],1)],1)])})),0)]):t._e(),t._v(" "),n("pagination",{attrs:{data:t.data},on:{"pagination-change-page":t.loadData}}),t._v(" "),t.data.data.length<1?n("no-data-component",{attrs:{msg:"Brak danych do wyświetlenia"}}):t._e()],1)])}),[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("thead",[n("tr",[n("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("L.p.")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Tytuł")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Pozycja")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Język")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Aktywna?")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Opcje")])])])}],!1,null,"6633cfaf",null);a.default=s.exports},26:function(t,a,n){var o=n(111);"string"==typeof o&&(o=[[t.i,o,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};n(3)(o,e);o.locals&&(t.exports=o.locals)}}]);