(window.webpackJsonp=window.webpackJsonp||[]).push([[16,23],{12:function(t,a,e){var o=e(66);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e(3)(o,n);o.locals&&(t.exports=o.locals)},176:function(t,a,e){"use strict";e.r(a);var o={name:"AdminProductsList",components:{NoDataComponent:e(4).default},data:function(){return{title:"Produkty",data:[],params:{title:"",category:"",is_activated:"",ordering:"",pagination:"",type:"",locale:""},categories:[],types:[{value:2,text:"Promocja"},{value:3,text:"Nowość"},{value:4,text:"Nowość w promocji"}],showSearch:!1}},methods:{ordering:function(t){this.params.ordering=t,this.loadData()},pagination:function(t){this.params.pagination=t,this.loadData()},loadData:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$axios.get("admin/products/all?page=".concat(a,"&title=").concat(this.params.title,"&category=").concat(this.params.category,"&is_activated=").concat(this.params.is_activated,"&ordering=").concat(this.params.ordering,"&pagination=").concat(this.params.pagination,"&type=").concat(this.params.type,"&locale=").concat(this.params.locale)).then((function(a){t.data=a.data,t.loadCategories()})).catch((function(){}))},remove:function(t){var a=this;this.$confirm({message:"Na pewno chcesz usunąć ten produkt?",button:{no:"Nie",yes:"Tak"},callback:function(e){e&&a.$axios.delete("admin/products/remove/".concat(t)).then((function(t){1===t.data.success&&(a.loadData(),a.$notify({group:"foo",title:"Udało się",text:"Produkt został usunięty ze sklepu"}))}))}})},loadCategories:function(){var t=this;this.$axios.get("categories/all").then((function(a){t.categories=a.data.data}))}},created:function(){this.loadData(),document.title=this.title}},n=(e(93),e(0)),s=Object(n.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"admin-page"},[e("h4",{staticClass:"title"},[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),e("div",{staticClass:"options"},[e("b-button",{attrs:{to:{name:"AdminDataProduct",params:{action:"create"}},variant:"outline-secondary"}},[e("span",{staticClass:"fa fa-plus"})]),t._v(" "),e("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(a){t.showSearch^=!0}}},[e("span",{staticClass:"fa fa-search"})]),t._v(" "),e("b-dropdown",{attrs:{variant:"outline-secondary"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("span",{staticClass:"fa fa-filter"})]},proxy:!0}])},[t._v(" "),e("b-dropdown-item",{on:{click:function(a){return t.ordering("DESC")}}},[t._v("Malejąco")]),t._v(" "),e("b-dropdown-item",{on:{click:function(a){return t.ordering("ASC")}}},[t._v("Rosnąco")])],1),t._v(" "),e("b-dropdown",{attrs:{variant:"outline-secondary"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("span",{staticClass:"fa fa-sort-numeric-up"})]},proxy:!0}])},[t._v(" "),e("b-dropdown-item",{on:{click:function(a){return t.pagination(6)}}},[t._v("6")]),t._v(" "),e("b-dropdown-item",{on:{click:function(a){return t.pagination(12)}}},[t._v("12")]),t._v(" "),e("b-dropdown-item",{on:{click:function(a){return t.pagination(18)}}},[t._v("18")]),t._v(" "),e("b-dropdown-item",{on:{click:function(a){return t.pagination(24)}}},[t._v("24")])],1)],1),t._v(" "),t.showSearch?e("form",{staticClass:"mt-3 mb-3",on:{submit:function(a){return a.preventDefault(),t.loadData(a)}}},[e("div",{staticClass:"row pl-3 pr-3"},[e("div",{staticClass:"col-xl-2 p-0 col-lg-2 col-md-2 col-sm-12 col-xs-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.params.title,expression:"params.title"}],staticClass:"form-control",attrs:{id:"title","aria-label":"Tytuł",placeholder:"Tytuł ..."},domProps:{value:t.params.title},on:{input:function(a){a.target.composing||t.$set(t.params,"title",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-xl-3 p-0 col-lg-3 col-md-3 col-sm-12 col-xs-12"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.params.category,expression:"params.category"}],staticClass:"form-control",attrs:{id:"category","aria-label":"Kategoria"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.params,"category",a.target.multiple?e:e[0])}}},[e("option",{attrs:{selected:"",value:""}},[t._v("Wybierz kategorię")]),t._v(" "),t._l(t.categories,(function(a){return e("option",{domProps:{value:a.id}},[t._v(t._s(a.name))])}))],2)]),t._v(" "),e("div",{staticClass:"col-xl-3 p-0 col-lg-3 col-md-3 col-sm-12 col-xs-12"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.params.type,expression:"params.type"}],staticClass:"form-control",attrs:{id:"type","aria-label":"Rodzaj"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.params,"type",a.target.multiple?e:e[0])}}},[e("option",{attrs:{selected:"",value:""}},[t._v("Wybierz rodzaj")]),t._v(" "),t._l(t.types,(function(a){return e("option",{domProps:{value:a.value}},[t._v(t._s(a.text))])}))],2)]),t._v(" "),e("div",{staticClass:"col-xl-2 col-lg-2 col-md-2 col-sm-12 p-0 col-xs-12"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.params.locale,expression:"params.locale"}],staticClass:"form-control",attrs:{id:"locale","aria-label":"Język"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.params,"locale",a.target.multiple?e:e[0])}}},[e("option",{attrs:{selected:"",value:""}},[t._v("Wybierz język")]),t._v(" "),e("option",{attrs:{value:"pl"}},[t._v("PL")]),t._v(" "),e("option",{attrs:{value:"en"}},[t._v("EN")])])]),t._v(" "),e("div",{staticClass:"col-xl-1 col-lg-1 col-md-1 p-0 col-sm-12 col-xs-12"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.params.is_activated,expression:"params.is_activated"}],staticClass:"form-control",attrs:{id:"active","aria-label":"Aktywny?"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.params,"is_activated",a.target.multiple?e:e[0])}}},[e("option",{attrs:{selected:"",value:""}},[t._v("Aktywny?")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("Tak")]),t._v(" "),e("option",{attrs:{value:"0"}},[t._v("Nie")])])]),t._v(" "),e("div",{staticClass:"col-xl-1 p-0 col-lg-1 col-md-1 col-sm-12 col-xs-12"},[e("b-button",{staticClass:"search-btn w-100",attrs:{type:"submit",variant:"outline-secondary"}},[e("span",{staticClass:"fa fa-search"})])],1)])]):t._e(),t._v(" "),e("div",{staticClass:"content mt-4"},[t.data.data.length>0?e("table",{staticClass:"table"},[t._m(0),t._v(" "),e("tbody",t._l(t.data.data,(function(a,o){return e("tr",[e("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v(t._s(o+1))]),t._v(" "),e("td",[e("img",{staticStyle:{width:"100px"},attrs:{src:a.image,alt:a.title}})]),t._v(" "),e("td",[t._v(t._s(a.title))]),t._v(" "),e("td",[t._v(t._s(a.category.name))]),t._v(" "),e("td",[a.price.old?e("del",[t._v(t._s(a.price.old))]):t._e(),t._v(" "+t._s(a.price.price)+"\n                    ")]),t._v(" "),e("td",{domProps:{innerHTML:t._s(a.locale)}}),t._v(" "),e("td",[t._v(t._s(t._f("moment")(a.created_at,"calendar")))]),t._v(" "),e("td",[t._v(t._s(1==a.is_activated?"Tak":"Nie"))]),t._v(" "),e("td",[e("router-link",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{to:{name:"AdminDataProduct",params:{action:"edit",id:a.id}}}},[t._v("Edytuj")]),t._v(" "),e("b-button",{staticClass:"btn-sm",attrs:{variant:"outline-secondary"},on:{click:function(e){return t.remove(a.id)}}},[t._v("Usuń")])],1)])})),0)]):t._e(),t._v(" "),e("pagination",{attrs:{data:t.data},on:{"pagination-change-page":t.loadData}}),t._v(" "),t.data.data.length<1?e("no-data-component",{attrs:{msg:"Brak dodanych produktów"}}):t._e()],1)])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("L.p.")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Zdjęcie")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Tytuł")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Kategoria")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Cena")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Język")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Data dodania")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Aktywny")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Opcje")])])])}],!1,null,"65b22cfa",null);a.default=s.exports},23:function(t,a,e){var o=e(94);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e(3)(o,n);o.locals&&(t.exports=o.locals)},4:function(t,a,e){"use strict";e.r(a);var o={name:"NoDataComponent",data:function(){return{}},props:{msg:""}},n=(e(65),e(0)),s=Object(n.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"no-data text-center"},[this._v("\n    "+this._s(this.msg)+"\n")])}),[],!1,null,"726da324",null);a.default=s.exports},65:function(t,a,e){"use strict";var o=e(12);e.n(o).a},66:function(t,a,e){(t.exports=e(2)(!1)).push([t.i,".no-data[data-v-726da324]{width:100%;padding:20px 0;font-size:18px;font-weight:700}",""])},93:function(t,a,e){"use strict";var o=e(23);e.n(o).a},94:function(t,a,e){(t.exports=e(2)(!1)).push([t.i,".search-btn[data-v-65b22cfa]{border-radius:0;font-size:20px;border:0;padding-top:8px}",""])}}]);