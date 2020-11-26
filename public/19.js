(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{116:function(t,a,n){"use strict";var s=n(29);n.n(s).a},117:function(t,a,n){(t.exports=n(2)(!1)).push([t.i,".search-btn[data-v-a7f85afc]{border-radius:0;font-size:20px;border:0;padding-top:8px}",""])},181:function(t,a,n){"use strict";n.r(a);var s={name:"AdminOrdersList",components:{NoDataComponent:n(4).default},data:function(){return{data:[],title:"Zamówienia",params:{email:"",status:"",payment_status:"",ordering:"",pagination:""},showSearch:!1}},methods:{loadData:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$Progress.start(),this.$axios.get("admin/orders/all?page=".concat(a,"&email=").concat(this.params.email,"&status=").concat(this.params.status,"&payment_status=").concat(this.params.payment_status,"&ordering=").concat(this.params.ordering,"&pagination=").concat(this.params.pagination)).then((function(a){t.$Progress.finish(),t.data=a.data})).catch((function(a){t.$Progress.fail(),t.handleAjaxError(a)}))},ordering:function(t){this.params.ordering=t,this.loadData()},pagination:function(t){this.params.pagination=t,this.loadData()},remove:function(t){var a=this;this.$confirm({message:"Na pewno chcesz usunąć zamówienie?",button:{no:"Nie",yes:"Tak"},callback:function(n){n&&(a.loadSpinner=!0,a.$axios.delete("admin/orders/remove/".concat(t)).then((function(t){a.loadSpinner=!1,1===t.data.success&&(a.loadData(),a.$notify({group:"notification-success",title:"Udało się",text:t.data.msg}))})).catch((function(t){a.handleAjaxError(t),a.loadSpinner=!1})))}})},redirect:function(){this.$route.params.email?this.params.email=this.$route.params.email:this.params.email="",this.loadData()}},created:function(){this.redirect(),document.title=this.title}},e=(n(116),n(0)),o=Object(e.a)(s,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"admin-page"},[n("h5",{staticClass:"title"},[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"options"},[n("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(a){t.showSearch^=!0}}},[n("span",{staticClass:"fa fa-search"})]),t._v(" "),n("b-dropdown",{attrs:{variant:"outline-secondary"},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("span",{staticClass:"fa fa-filter"})]},proxy:!0}])},[t._v(" "),n("b-dropdown-item",{on:{click:function(a){return t.ordering("DESC")}}},[t._v("Malejąco")]),t._v(" "),n("b-dropdown-item",{on:{click:function(a){return t.ordering("ASC")}}},[t._v("Rosnąco")])],1),t._v(" "),n("b-dropdown",{attrs:{variant:"outline-secondary"},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("span",{staticClass:"fa fa-sort-numeric-up"})]},proxy:!0}])},[t._v(" "),n("b-dropdown-item",{on:{click:function(a){return t.pagination(6)}}},[t._v("6")]),t._v(" "),n("b-dropdown-item",{on:{click:function(a){return t.pagination(12)}}},[t._v("12")]),t._v(" "),n("b-dropdown-item",{on:{click:function(a){return t.pagination(18)}}},[t._v("18")]),t._v(" "),n("b-dropdown-item",{on:{click:function(a){return t.pagination(24)}}},[t._v("24")])],1)],1),t._v(" "),t.showSearch?n("form",{staticClass:"mt-3 mb-3",on:{submit:function(a){return a.preventDefault(),t.loadData(a)}}},[n("div",{staticClass:"row pl-3 pr-3"},[n("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-12 p-0 col-xs-12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.params.email,expression:"params.email"}],staticClass:"form-control",attrs:{id:"email","aria-label":"E-mail",placeholder:"E-mail ..."},domProps:{value:t.params.email},on:{input:function(a){a.target.composing||t.$set(t.params,"email",a.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-xl-3 col-lg-3 col-md-3 p-0 col-sm-12 col-xs-12"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.params.status,expression:"params.status"}],staticClass:"form-control",attrs:{id:"status","aria-label":"Status"},on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.params,"status",a.target.multiple?n:n[0])}}},[n("option",{attrs:{selected:"",value:""}},[t._v("Status zamówienia")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("Złożono zamówienie")]),t._v(" "),n("option",{attrs:{value:"2"}},[t._v("Przyjęto do realizacji")]),t._v(" "),n("option",{attrs:{value:"3"}},[t._v("Oczekuje na nadanie")]),t._v(" "),n("option",{attrs:{value:"4"}},[t._v("Przesyłka wysłana")]),t._v(" "),n("option",{attrs:{value:"5"}},[t._v("Zakończone")])])]),t._v(" "),n("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 p-0 col-sm-12 col-xs-12"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.params.payment_status,expression:"params.payment_status"}],staticClass:"form-control",attrs:{id:"status_payment","aria-label":"Status zamówienia"},on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.params,"payment_status",a.target.multiple?n:n[0])}}},[n("option",{attrs:{selected:"",value:""}},[t._v("Status płatności")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("Rozpoczęta")]),t._v(" "),n("option",{attrs:{value:"2"}},[t._v("Zakończona")])])]),t._v(" "),n("div",{staticClass:"col-xl-1 p-0 col-lg-1 col-md-1 col-sm-12 col-xs-12"},[n("b-button",{staticClass:"search-btn w-100",attrs:{type:"submit",variant:"outline-secondary"}},[n("span",{staticClass:"fa fa-search"})])],1)])]):t._e(),t._v(" "),n("div",{staticClass:"content mt-4"},[t.data.data.length>0?n("table",{staticClass:"table"},[t._m(0),t._v(" "),t._l(t.data.data,(function(a,s){return n("tr",[n("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v(t._s(s+1))]),t._v(" "),n("td",[t._v(t._s(a.name.full))]),t._v(" "),n("td",[t._v(t._s(a.contact.email))]),t._v(" "),n("td",[t._v(t._s(t._f("moment")(a.created_at,"calendar")))]),t._v(" "),n("td",[t._v(t._s(a.status.name))]),t._v(" "),n("td",[t._v(t._s(a.status.payment.status.name))]),t._v(" "),n("td",[t._v(t._s(a.price))]),t._v(" "),n("td",[n("b-button",{staticClass:"btn-sm",attrs:{variant:"outline-secondary",to:{name:"AdminOrderFind",params:{id:a.id,action:"show"}}}},[t._v("\n                        Szczegóły\n                    ")]),t._v(" "),n("b-button",{staticClass:"btn-sm",attrs:{variant:"outline-secondary"},on:{click:function(n){return t.remove(a.id)}}},[t._v("Usuń\n                    ")])],1)])})),t._v(" "),n("tbody")],2):t._e(),t._v(" "),n("pagination",{attrs:{data:t.data},on:{"pagination-change-page":t.loadData}}),t._v(" "),t.data.data.length<1?n("no-data-component",{attrs:{msg:"Brak danych do wyświetlenia"}}):t._e()],1)])}),[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("thead",[n("tr",[n("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("L.p.")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Imię i Nazwisko")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("E-mail")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Data złożenia")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Status płatności")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Cena")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Opcje")])])])}],!1,null,"a7f85afc",null);a.default=o.exports},29:function(t,a,n){var s=n(117);"string"==typeof s&&(s=[[t.i,s,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};n(3)(s,e);s.locals&&(t.exports=s.locals)}}]);