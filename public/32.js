(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/settings/AdminAccountSetting.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/settings/AdminAccountSetting.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminAccountPasswordSetting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminAccountPasswordSetting */ "./resources/js/components/admin/settings/AdminAccountPasswordSetting.vue");
/* harmony import */ var _AdminAccountEmailSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminAccountEmailSetting */ "./resources/js/components/admin/settings/AdminAccountEmailSetting.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdminAccountSetting",
  components: {
    AdminAccountEmailSetting: _AdminAccountEmailSetting__WEBPACK_IMPORTED_MODULE_1__["default"],
    AdminAccountPasswordSetting: _AdminAccountPasswordSetting__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      title: 'Twoje dane',
      data: {
        name: '',
        last_name: '',
        phone: '',
        city: '',
        post_code: '',
        address: '',
        user_id: ''
      },
      loadSpinner: false
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      this.loadSpinner = true;
      this.$axios.post('settings/basic-data', this.data).then(function (data) {
        _this.loadSpinner = false;

        if (data.data.success === 1) {
          _this.loadData();

          _this.$notify({
            group: 'notification-success',
            title: 'Udało się',
            text: 'Dane zostały zapisane'
          });
        }
      })["catch"](function (error) {
        _this.loadSpinner = false;

        _this.handleAjaxError(error);
      });
    },
    loadData: function loadData() {
      var _this2 = this;

      var url = 'user/logged';

      if (this.$route.params.id) {
        url = "admin/users/find/".concat(this.$route.params.id);
      }

      this.$axios.get(url).then(function (data) {
        var user = data.data;
        _this2.data.name = user.name;
        _this2.data.last_name = user.last_name;

        if (_this2.$route.params.id) {
          user = data.data.data;
          _this2.data.name = user.name.first;
          _this2.data.last_name = user.name.last;
          _this2.data.user_id = _this2.$route.params.id;
        }

        _this2.data.phone = user.phone;
        _this2.data.city = user.city;
        _this2.data.post_code = user.post_code;
        _this2.data.address = user.address;
      })["catch"](function (error) {
        return _this2.handleAjaxError(error);
      });
    }
  },
  watch: {
    '$route.params.id': function $routeParamsId() {
      this.loadData();
    }
  },
  created: function created() {
    this.loadData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/settings/AdminAccountSetting.vue?vue&type=template&id=0fbc33d1&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/settings/AdminAccountSetting.vue?vue&type=template&id=0fbc33d1&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "admin-page" }, [
    _c("h4", { staticClass: "title" }, [
      _vm._v("\n        " + _vm._s(_vm.title) + "\n    ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "content mt-3" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.save($event)
            }
          }
        },
        [
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "div",
              { staticClass: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.name,
                      expression: "data.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "name",
                    "aria-label": "Imie",
                    placeholder: "Imię"
                  },
                  domProps: { value: _vm.data.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "name", $event.target.value)
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.last_name,
                      expression: "data.last_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "last_name",
                    "aria-label": "Nazwisko",
                    placeholder: "Nazwisko"
                  },
                  domProps: { value: _vm.data.last_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "last_name", $event.target.value)
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.phone,
                      expression: "data.phone"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "phone",
                    "aria-label": "Telefon",
                    placeholder: "Telefon"
                  },
                  domProps: { value: _vm.data.phone },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "phone", $event.target.value)
                    }
                  }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "div",
              { staticClass: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.city,
                      expression: "data.city"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "city",
                    "aria-label": "Miasto",
                    placeholder: "Miasto"
                  },
                  domProps: { value: _vm.data.city },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "city", $event.target.value)
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.post_code,
                      expression: "data.post_code"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "post_code",
                    "aria-label": "Kod pocztowy",
                    placeholder: "Kod pocztowy"
                  },
                  domProps: { value: _vm.data.post_code },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "post_code", $event.target.value)
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.address,
                      expression: "data.address"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "address",
                    "aria-label": "Adres",
                    placeholder: "Adres"
                  },
                  domProps: { value: _vm.data.address },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "address", $event.target.value)
                    }
                  }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "div",
              { staticClass: "col-12" },
              [
                _c(
                  "b-button",
                  { attrs: { type: "submit", variant: "outline-secondary" } },
                  [
                    _vm.loadSpinner
                      ? _c("b-spinner", { attrs: { small: "" } })
                      : _vm._e(),
                    _vm._v(" Zapisz")
                  ],
                  1
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" },
          [_c("admin-account-email-setting")],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" },
          [_c("admin-account-password-setting")],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/settings/AdminAccountSetting.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/admin/settings/AdminAccountSetting.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminAccountSetting_vue_vue_type_template_id_0fbc33d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminAccountSetting.vue?vue&type=template&id=0fbc33d1&scoped=true& */ "./resources/js/components/admin/settings/AdminAccountSetting.vue?vue&type=template&id=0fbc33d1&scoped=true&");
/* harmony import */ var _AdminAccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminAccountSetting.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/settings/AdminAccountSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminAccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminAccountSetting_vue_vue_type_template_id_0fbc33d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminAccountSetting_vue_vue_type_template_id_0fbc33d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0fbc33d1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/settings/AdminAccountSetting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/settings/AdminAccountSetting.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/admin/settings/AdminAccountSetting.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminAccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminAccountSetting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/settings/AdminAccountSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminAccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/settings/AdminAccountSetting.vue?vue&type=template&id=0fbc33d1&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/admin/settings/AdminAccountSetting.vue?vue&type=template&id=0fbc33d1&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminAccountSetting_vue_vue_type_template_id_0fbc33d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminAccountSetting.vue?vue&type=template&id=0fbc33d1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/settings/AdminAccountSetting.vue?vue&type=template&id=0fbc33d1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminAccountSetting_vue_vue_type_template_id_0fbc33d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminAccountSetting_vue_vue_type_template_id_0fbc33d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);