(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{201:function(a,t,o){"use strict";o.r(t);var e={name:"OrderPage",data:function(){return{title:"Zamówienie",data:{name:"",last_name:"",email:"",shipment_id:"",post_code:"",country:"",city:"",address:"",type:1,company_name:"",nip:"",number_phone:"",comments:"",products:[]},createAccount:0,shipments:[],password:""}},methods:{save:function(){var a=this,t=this.$store.getters.StoreCart,o=[];if(t.forEach((function(a){o.push({size_id:a.size.id,color_id:a.color.id,quantity:a.quantity,product_id:a.product.id})})),this.data.products=o,1==this.createAccount){var e={name:this.data.name,last_name:this.data.last_name,email:this.data.email,password:this.password,terms:!0,city:this.data.city,address:this.data.address,post_code:this.data.post_code,phone:this.data.number_phone,country:this.data.country};this.$axios.post("auth/register",e).then((function(t){a.$notify({group:"foo",title:"Udało się",text:t.data.msg})})).catch((function(t){return a.handleAjaxError(t)}))}this.$axios.post("front/orders/create",this.data).then((function(t){var o=t.data.order_id;1===t.data.success&&(a.data.name="",a.data.last_name="",a.data.email="",a.data.shipment_id="",a.data.post_code="",a.data.city="",a.data.address="",a.data.country="",a.data.type=1,a.data.company_name="",a.data.number_phone="",a.data.products=[],a.data.comments="",a.$notify({group:"foo",title:"Udało się",text:"Zamówienie zostało złożone i oczekuje na realizację"}),a.$router.push({name:"OrderPay",params:{orderId:o}}))})).catch((function(t){return a.handleAjaxError(t)}))},buyCompany:function(a){this.data.type=a},findProduct:function(){}},watch:{createAccount:function(){console.log(this.createAccount)}},created:function(){var a=this;this.$axios.get("front/shipments/all").then((function(t){a.shipments=t.data.data}))}},s=o(0),l=Object(s.a)(e,(function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("form",{on:{submit:function(t){return t.preventDefault(),a.save(t)}}},[o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:a.data.name,expression:"data.name"}],staticClass:"form-control",attrs:{"aria-label":"Imię",placeholder:"Imię"},domProps:{value:a.data.name},on:{input:function(t){t.target.composing||a.$set(a.data,"name",t.target.value)}}})]),a._v(" "),o("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:a.data.last_name,expression:"data.last_name"}],staticClass:"form-control",attrs:{"aria-label":"Nazwisko",placeholder:"Nazwisko"},domProps:{value:a.data.last_name},on:{input:function(t){t.target.composing||a.$set(a.data,"last_name",t.target.value)}}})])]),a._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:a.data.email,expression:"data.email"}],staticClass:"form-control",attrs:{"aria-label":"E-mail",placeholder:"E-mail"},domProps:{value:a.data.email},on:{input:function(t){t.target.composing||a.$set(a.data,"email",t.target.value)}}})]),a._v(" "),o("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:a.data.number_phone,expression:"data.number_phone"}],staticClass:"form-control",attrs:{"aria-label":"Numer telefonu",placeholder:"Numer telefonu"},domProps:{value:a.data.number_phone},on:{input:function(t){t.target.composing||a.$set(a.data,"number_phone",t.target.value)}}})])]),a._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:a.data.post_code,expression:"data.post_code"}],staticClass:"form-control",attrs:{"aria-label":"Kod pocztowy",placeholder:"Kod pocztowy"},domProps:{value:a.data.post_code},on:{input:function(t){t.target.composing||a.$set(a.data,"post_code",t.target.value)}}})]),a._v(" "),o("div",{staticClass:"col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:a.data.city,expression:"data.city"}],staticClass:"form-control",attrs:{"aria-label":"Miasto",placeholder:"Miasto"},domProps:{value:a.data.city},on:{input:function(t){t.target.composing||a.$set(a.data,"city",t.target.value)}}})])]),a._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:a.data.address,expression:"data.address"}],staticClass:"form-control",attrs:{"aria-label":"Adres",placeholder:"Adres"},domProps:{value:a.data.address},on:{input:function(t){t.target.composing||a.$set(a.data,"address",t.target.value)}}})]),a._v(" "),o("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:a.data.country,expression:"data.country"}],staticClass:"form-control",attrs:{"aria-label":"Kraj",placeholder:"Kraj"},domProps:{value:a.data.country},on:{input:function(t){t.target.composing||a.$set(a.data,"country",t.target.value)}}})])]),a._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-12"},[o("b-button",{ref:"company",attrs:{type:"button",value:"2",variant:"outline-secondary"},on:{click:function(t){return a.buyCompany(1==a.data.type?2:1)}}},[a._v("\n                            Kupuję jako firma  "),o("span",{staticClass:"ml-2",class:2==a.data.type?"fa fa-angle-up":"fa fa-angle-down"})])],1)]),a._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-12"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:a.data.comments,expression:"data.comments"}],staticClass:"form-control",attrs:{"aria-label":"Uwagi",placeholder:"Uwagi (opcjonalnie)"},domProps:{value:a.data.comments},on:{input:function(t){t.target.composing||a.$set(a.data,"comments",t.target.value)}}})])]),a._v(" "),2==a.data.type?o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:a.data.company_name,expression:"data.company_name"}],staticClass:"form-control",attrs:{"aria-label":"Nazwa firmy",placeholder:"Nazwa firmy"},domProps:{value:a.data.company_name},on:{input:function(t){t.target.composing||a.$set(a.data,"company_name",t.target.value)}}})]),a._v(" "),o("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:a.data.nip,expression:"data.nip"}],staticClass:"form-control",attrs:{"aria-label":"NIP",placeholder:"NIP"},domProps:{value:a.data.nip},on:{input:function(t){t.target.composing||a.$set(a.data,"nip",t.target.value)}}})])]):a._e(),a._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-12"},[o("select",{directives:[{name:"model",rawName:"v-model",value:a.data.shipment_id,expression:"data.shipment_id"}],staticClass:"form-control",attrs:{"aria-label":"Wysyłka"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.data,"shipment_id",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"",selected:""}},[a._v("Wybierz wysyłkę")]),a._v(" "),a._l(a.shipments,(function(t){return o("option",{domProps:{value:t.id}},[a._v(a._s(t.name))])}))],2)])]),a._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"},[o("b-form-checkbox",{attrs:{id:"createAccount",name:"createAccount",value:"1","unchecked-value":"0"},model:{value:a.createAccount,callback:function(t){a.createAccount=t},expression:"createAccount"}},[a._v("\n                            załóż konto "),o("router-link",{attrs:{to:"#"}},[a._v("poznaj korzyści z posiadania konta")])],1)],1),a._v(" "),1==a.createAccount?o("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:a.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",type:"password",placeholder:"Hasło do konta","aria-label":"Hasło do konta"},domProps:{value:a.password},on:{input:function(t){t.target.composing||(a.password=t.target.value)}}})]):a._e()]),a._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-12"},[o("b-button",{attrs:{type:"submit",variant:"outline-secondary"}},[a._v("Dalej")])],1)])])])])])}),[],!1,null,"493c2b44",null);t.default=l.exports}}]);