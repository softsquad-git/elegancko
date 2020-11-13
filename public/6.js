(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{15:function(a,t,e){var s=e(75);"string"==typeof s&&(s=[[a.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(3)(s,o);s.locals&&(a.exports=s.locals)},16:function(a,t,e){var s=e(77);"string"==typeof s&&(s=[[a.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(3)(s,o);s.locals&&(a.exports=s.locals)},200:function(a,t,e){"use strict";e.r(t);var s=e(35),o={name:"AdminAccountSetting",components:{AdminAccountEmailSetting:e(34).a,AdminAccountPasswordSetting:s.a},data:function(){return{title:"Twoje dane",data:{name:"",last_name:"",phone:"",city:"",post_code:"",address:"",user_id:""},loadSpinner:!1}},methods:{save:function(){var a=this;this.loadSpinner=!0,this.$axios.post("settings/basic-data",this.data).then((function(t){a.loadSpinner=!1,1===t.data.success&&(a.loadData(),a.$notify({group:"notification-success",title:"Udało się",text:"Dane zostały zapisane"}))})).catch((function(t){a.loadSpinner=!1,a.handleAjaxError(t)}))},loadData:function(){var a=this,t="user/logged";this.$route.params.id&&(t="admin/users/find/".concat(this.$route.params.id)),this.$axios.get(t).then((function(t){var e=t.data;a.data.name=e.name,a.data.last_name=e.last_name,a.$route.params.id&&(e=t.data.data,a.data.name=e.name.first,a.data.last_name=e.name.last,a.data.user_id=a.$route.params.id),a.data.phone=e.phone,a.data.city=e.city,a.data.post_code=e.post_code,a.data.address=e.address})).catch((function(t){return a.handleAjaxError(t)}))}},watch:{"$route.params.id":function(){this.loadData()}},created:function(){this.loadData()}},i=e(0),n=Object(i.a)(o,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"admin-page"},[e("h4",{staticClass:"title"},[a._v("\n        "+a._s(a.title)+"\n    ")]),a._v(" "),e("div",{staticClass:"content mt-3"},[e("form",{on:{submit:function(t){return t.preventDefault(),a.save(t)}}},[e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.data.name,expression:"data.name"}],staticClass:"form-control",attrs:{id:"name","aria-label":"Imie",placeholder:"Imię"},domProps:{value:a.data.name},on:{input:function(t){t.target.composing||a.$set(a.data,"name",t.target.value)}}})]),a._v(" "),e("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.data.last_name,expression:"data.last_name"}],staticClass:"form-control",attrs:{id:"last_name","aria-label":"Nazwisko",placeholder:"Nazwisko"},domProps:{value:a.data.last_name},on:{input:function(t){t.target.composing||a.$set(a.data,"last_name",t.target.value)}}})]),a._v(" "),e("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.data.phone,expression:"data.phone"}],staticClass:"form-control",attrs:{id:"phone","aria-label":"Telefon",placeholder:"Telefon"},domProps:{value:a.data.phone},on:{input:function(t){t.target.composing||a.$set(a.data,"phone",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.data.city,expression:"data.city"}],staticClass:"form-control",attrs:{id:"city","aria-label":"Miasto",placeholder:"Miasto"},domProps:{value:a.data.city},on:{input:function(t){t.target.composing||a.$set(a.data,"city",t.target.value)}}})]),a._v(" "),e("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.data.post_code,expression:"data.post_code"}],staticClass:"form-control",attrs:{id:"post_code","aria-label":"Kod pocztowy",placeholder:"Kod pocztowy"},domProps:{value:a.data.post_code},on:{input:function(t){t.target.composing||a.$set(a.data,"post_code",t.target.value)}}})]),a._v(" "),e("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.data.address,expression:"data.address"}],staticClass:"form-control",attrs:{id:"address","aria-label":"Adres",placeholder:"Adres"},domProps:{value:a.data.address},on:{input:function(t){t.target.composing||a.$set(a.data,"address",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-12"},[e("b-button",{attrs:{type:"submit",variant:"outline-secondary"}},[a.loadSpinner?e("b-spinner",{attrs:{small:""}}):a._e(),a._v(" Zapisz")],1)],1)])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"},[e("admin-account-email-setting")],1),a._v(" "),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"},[e("admin-account-password-setting")],1)])])])}),[],!1,null,"2e5ccf71",null);t.default=n.exports},34:function(a,t,e){"use strict";var s={name:"AdminAccountEmailSetting",data:function(){return{dataFirst:{new_email:"",user_id:""},dataSecond:{new_email_key:"",old_email_key:"",user_id:""},title:"Zmień adres E-mail",changeStatus:"",loadSpinner1:!1,loadSpinner2:!1,loadSpinner3:!1}},methods:{saveFirst:function(){var a=this;this.loadSpinner1=!0,this.$axios.post("settings/email-first",this.dataFirst).then((function(t){a.loadSpinner1=!1,1===t.data.success&&(a.checkEmail(),a.dataFirst.new_email="",a.$notify({group:"notification-success",title:"Udało się",text:"Kody zostały wysłane na obecny i nowy adres e-mail. Sprawdź pocztę"}))})).catch((function(t){a.loadSpinner1=!1,a.handleAjaxError(t)}))},saveSecond:function(){var a=this;this.loadSpinner2=!0,this.$axios.post("settings/email-second",this.dataSecond).then((function(t){a.loadSpinner2=!1,1===t.data.success&&(a.dataSecond.new_email_key="",a.dataSecond.old_email_key="",a.checkEmail(),a.$notify({group:"notification-success",title:"Udało się",text:"Adres E-mail został zmieniony"}),window.location.reload())})).catch((function(t){a.loadSpinner2=!1,a.handleAjaxError(t)}))},checkEmail:function(){var a=this;this.$axios.get("settings/check-email").then((function(t){a.changeStatus=t.data.status})).catch((function(t){return a.handleAjaxError(t)}))},removeChangeKey:function(){var a=this;this.loadSpinner3=!0,this.$axios.delete("settings/change-email-delete").then((function(t){a.loadSpinner3=!1,1===t.data.success&&a.checkEmail()})).catch((function(t){a.loadSpinner3=!1,a.handleAjaxError(t)}))}},created:function(){this.checkEmail(),this.$route.params.id&&(this.dataFirst.user_id=this.$route.params.id,this.dataSecond.user_id=this.$route.params.id)}},o=(e(74),e(0)),i=Object(o.a)(s,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("h4",{staticClass:"title-setting"},[a._v(a._s(a.title))]),a._v(" "),a.changeStatus?e("form",{on:{submit:function(t){return t.preventDefault(),a.saveSecond(t)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.dataSecond.new_email_key,expression:"dataSecond.new_email_key"}],staticClass:"form-control",attrs:{id:"new_email_key",placeholder:"Kod nowego adresu","aria-label":"Kod nowego adresu"},domProps:{value:a.dataSecond.new_email_key},on:{input:function(t){t.target.composing||a.$set(a.dataSecond,"new_email_key",t.target.value)}}})]),a._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.dataSecond.old_email_key,expression:"dataSecond.old_email_key"}],staticClass:"form-control",attrs:{id:"old_new_key",placeholder:"Kod obecnego adresu","aria-label":"Kod obecnego adresu"},domProps:{value:a.dataSecond.old_email_key},on:{input:function(t){t.target.composing||a.$set(a.dataSecond,"old_email_key",t.target.value)}}})]),a._v(" "),e("div",{staticClass:"form-group"},[e("b-button",{attrs:{type:"submit",variant:"outline-secondary"}},[a.loadSpinner2?e("b-spinner",{attrs:{small:""}}):a._e(),a._v(" Zapisz")],1),a._v(" "),e("b-button",{attrs:{type:"button",variant:"outline-danger"},on:{click:a.removeChangeKey}},[a.loadSpinner3?e("b-spinner",{attrs:{small:""}}):a._e(),a._v(" Zacznij od początku")],1)],1)]):e("form",{on:{submit:function(t){return t.preventDefault(),a.saveFirst(t)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.dataFirst.new_email,expression:"dataFirst.new_email"}],staticClass:"form-control",attrs:{id:"new_email",placeholder:"Nowy adres E-mail","aria-label":"Nowy adres E-mail"},domProps:{value:a.dataFirst.new_email},on:{input:function(t){t.target.composing||a.$set(a.dataFirst,"new_email",t.target.value)}}})]),a._v(" "),e("div",{staticClass:"form-group"},[e("b-button",{attrs:{type:"submit",variant:"outline-secondary"}},[a.loadSpinner1?e("b-spinner",{attrs:{small:""}}):a._e(),a._v(" Dalej")],1)],1)])])}),[],!1,null,"441f7929",null);t.a=i.exports},35:function(a,t,e){"use strict";var s={name:"AdminAccountPasswordSetting",data:function(){return{data:{new_password:"",old_password:"",user_id:""},title:"Zmień hasło",loadSpinner:!1}},methods:{save:function(){var a=this;this.loadSpinner=!0,this.$axios.post("settings/password",this.data).then((function(t){a.loadSpinner=!1,1===t.data.success&&(a.data.new_password="",a.data.old_password="",a.$notify({group:"notification-success",title:"Udało się",text:"Hasło zostało zmienione. Wyloguj się i zaloguj używając nowego hasła"}))})).catch((function(t){a.loadSpinner=!1,a.handleAjaxError(t)}))}},created:function(){this.$route.params.id&&(this.data.user_id=this.$route.params.id)}},o=(e(76),e(0)),i=Object(o.a)(s,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("h4",{staticClass:"title-setting"},[a._v(a._s(a.title))]),a._v(" "),e("form",{on:{submit:function(t){return t.preventDefault(),a.save(t)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.data.old_password,expression:"data.old_password"}],staticClass:"form-control",attrs:{id:"old_password",type:"password","aria-label":"Obecne hasło",placeholder:"Obecne hasło"},domProps:{value:a.data.old_password},on:{input:function(t){t.target.composing||a.$set(a.data,"old_password",t.target.value)}}})]),a._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.data.new_password,expression:"data.new_password"}],staticClass:"form-control",attrs:{id:"new_password",type:"password","aria-label":"Nowe hasło",placeholder:"Nowe hasło"},domProps:{value:a.data.new_password},on:{input:function(t){t.target.composing||a.$set(a.data,"new_password",t.target.value)}}})]),a._v(" "),e("div",{staticClass:"form-group"},[e("b-button",{attrs:{type:"submit",variant:"outline-secondary"}},[a.loadSpinner?e("b-spinner",{attrs:{small:""}}):a._e(),a._v(" Zapisz")],1)],1)])])}),[],!1,null,"abff00de",null);t.a=i.exports},74:function(a,t,e){"use strict";var s=e(15);e.n(s).a},75:function(a,t,e){(a.exports=e(2)(!1)).push([a.i,".title-setting[data-v-441f7929]{text-transform:uppercase;margin-bottom:20px}",""])},76:function(a,t,e){"use strict";var s=e(16);e.n(s).a},77:function(a,t,e){(a.exports=e(2)(!1)).push([a.i,".title-setting[data-v-abff00de]{text-transform:uppercase;margin-bottom:20px}",""])}}]);