(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{197:function(t,a,e){"use strict";e.r(a);var s={name:"AdminMetaData",data:function(){return{title:"",data:{title:"",description:"",keywords:"",locale:"",resource_type:""}}},methods:{loadDataEdit:function(){var t=this;this.$route.params.id?(this.title="SEO - Edytuj wpis",this.$axios.get("admin/meta/find/".concat(this.$route.params.id)).then((function(a){var e=a.data.data;console.log(e),t.data.resource_type=e.resource_type,t.data.title=e.title,t.data.description=e.description,t.data.keywords=e.keywords,t.data.locale=e.locale_key})).catch((function(a){t.handleAjaxError(a)}))):this.title="SEO - Dodaj nowy wpis"},save:function(){var t=this,a="admin/meta/create";this.$route.params.id&&(a="admin/meta/update/".concat(this.$route.params.id)),this.$axios.post(a,this.data).then((function(a){1===a.data.success&&(t.$router.push({name:"AdminMetaList"}),t.$notify({group:"foo",title:"Udało się",text:"Zamówienie zostało złożone i oczekuje na realizację"}))})).catch((function(a){t.handleAjaxError(a)}))}},created:function(){this.loadDataEdit()}},o=e(0),i=Object(o.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"admin-page"},[e("h4",{staticClass:"title"},[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),e("div",{staticClass:"options"},[e("b-button",{attrs:{to:{name:"AdminMetaList"},variant:"outline-danger"}},[e("span",{staticClass:"fa fa-times"})])],1),t._v(" "),e("div",{staticClass:"content mt-4"},[e("form",{staticClass:"mt-5",on:{submit:function(a){return a.preventDefault(),t.save(a)}}},[e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.resource_type,expression:"data.resource_type"}],staticClass:"form-control",attrs:{id:"resourceType",disabled:!!t.$route.params.id,"aria-label":"Typ",placeholder:"Typ"},domProps:{value:t.data.resource_type},on:{input:function(a){a.target.composing||t.$set(t.data,"resource_type",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"row form-group"},[e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.title,expression:"data.title"}],staticClass:"form-control",attrs:{id:"meta-title","aria-label":"Meta title",placeholder:"Meta tytuł"},domProps:{value:t.data.title},on:{input:function(a){a.target.composing||t.$set(t.data,"title",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"row form-group"},[e("div",{staticClass:"col-12"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.description,expression:"data.description"}],staticClass:"form-control",attrs:{id:"meta-desc","aria-label":"Meta opis",placeholder:"Meta opis"},domProps:{value:t.data.description},on:{input:function(a){a.target.composing||t.$set(t.data,"description",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"row form-group"},[e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.keywords,expression:"data.keywords"}],staticClass:"form-control",attrs:{id:"meta-keywords","aria-label":"Meta słowa kluczowe",placeholder:"Meta słowa kluczowe"},domProps:{value:t.data.keywords},on:{input:function(a){a.target.composing||t.$set(t.data,"keywords",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"row form-group"},[e("div",{staticClass:"col-12"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.data.locale,expression:"data.locale"}],staticClass:"form-control",attrs:{id:"locale","aria-label":"Język"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data,"locale",a.target.multiple?e:e[0])}}},[e("option",{attrs:{selected:"",value:""}},[t._v("Wybierz język")]),t._v(" "),e("option",{attrs:{value:"pl"}},[t._v("Polski")]),t._v(" "),e("option",{attrs:{value:"en"}},[t._v("Angielski")])])])]),t._v(" "),e("div",{staticClass:"row form-group"},[e("div",{staticClass:"col-12"},[e("b-button",{attrs:{type:"submit",variant:"outline-secondary"}},[t._v("Zapisz")])],1)])])])])}),[],!1,null,"0e53804f",null);a.default=i.exports}}]);