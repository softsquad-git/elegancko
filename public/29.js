(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/meta/AdminMetaData.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/meta/AdminMetaData.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdminMetaData",
  data: function data() {
    return {
      title: '',
      data: {
        title: '',
        description: '',
        keywords: '',
        locale: '',
        resource_type: ''
      }
    };
  },
  methods: {
    loadDataEdit: function loadDataEdit() {
      var _this = this;

      if (this.$route.params.id) {
        this.title = 'SEO - Edytuj wpis';
        this.$axios.get("admin/meta/find/".concat(this.$route.params.id)).then(function (data) {
          var meta = data.data.data;
          console.log(meta);
          _this.data.resource_type = meta.resource_type;
          _this.data.title = meta.title;
          _this.data.description = meta.description;
          _this.data.keywords = meta.keywords;
          _this.data.locale = meta.locale_key;
        })["catch"](function (error) {
          _this.handleAjaxError(error);
        });
      } else {
        this.title = 'SEO - Dodaj nowy wpis';
      }
    },
    save: function save() {
      var _this2 = this;

      var url = 'admin/meta/create';

      if (this.$route.params.id) {
        url = "admin/meta/update/".concat(this.$route.params.id);
      }

      this.$axios.post(url, this.data).then(function (data) {
        if (data.data.success === 1) {
          _this2.$router.push({
            name: 'AdminMetaList'
          });

          _this2.$notify({
            group: 'foo',
            title: 'Udało się',
            text: 'Zamówienie zostało złożone i oczekuje na realizację'
          });
        }
      })["catch"](function (error) {
        _this2.handleAjaxError(error);
      });
    }
  },
  created: function created() {
    this.loadDataEdit();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/meta/AdminMetaData.vue?vue&type=template&id=53699d1f&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/meta/AdminMetaData.vue?vue&type=template&id=53699d1f&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "options" },
      [
        _c(
          "b-button",
          {
            attrs: { to: { name: "AdminMetaList" }, variant: "outline-danger" }
          },
          [_c("span", { staticClass: "fa fa-times" })]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "content mt-4" }, [
      _c(
        "form",
        {
          staticClass: "mt-5",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.save($event)
            }
          }
        },
        [
          _c("div", { staticClass: "form-group row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.data.resource_type,
                    expression: "data.resource_type"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "resourceType",
                  disabled: _vm.$route.params.id ? true : false,
                  "aria-label": "Typ",
                  placeholder: "Typ"
                },
                domProps: { value: _vm.data.resource_type },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.data, "resource_type", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row form-group" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.data.title,
                    expression: "data.title"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "meta-title",
                  "aria-label": "Meta title",
                  placeholder: "Meta tytuł"
                },
                domProps: { value: _vm.data.title },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.data, "title", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row form-group" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.data.description,
                    expression: "data.description"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "meta-desc",
                  "aria-label": "Meta opis",
                  placeholder: "Meta opis"
                },
                domProps: { value: _vm.data.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.data, "description", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row form-group" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.data.keywords,
                    expression: "data.keywords"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "meta-keywords",
                  "aria-label": "Meta słowa kluczowe",
                  placeholder: "Meta słowa kluczowe"
                },
                domProps: { value: _vm.data.keywords },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.data, "keywords", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row form-group" }, [
            _c("div", { staticClass: "col-12" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.locale,
                      expression: "data.locale"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "locale", "aria-label": "Język" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.data,
                        "locale",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { selected: "", value: "" } }, [
                    _vm._v("Wybierz język")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "pl" } }, [_vm._v("Polski")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "en" } }, [
                    _vm._v("Angielski")
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row form-group" }, [
            _c(
              "div",
              { staticClass: "col-12" },
              [
                _c(
                  "b-button",
                  { attrs: { type: "submit", variant: "outline-secondary" } },
                  [_vm._v("Zapisz")]
                )
              ],
              1
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/meta/AdminMetaData.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/admin/meta/AdminMetaData.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminMetaData_vue_vue_type_template_id_53699d1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminMetaData.vue?vue&type=template&id=53699d1f&scoped=true& */ "./resources/js/components/admin/meta/AdminMetaData.vue?vue&type=template&id=53699d1f&scoped=true&");
/* harmony import */ var _AdminMetaData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminMetaData.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/meta/AdminMetaData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminMetaData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminMetaData_vue_vue_type_template_id_53699d1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminMetaData_vue_vue_type_template_id_53699d1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53699d1f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/meta/AdminMetaData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/meta/AdminMetaData.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/meta/AdminMetaData.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMetaData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminMetaData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/meta/AdminMetaData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMetaData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/meta/AdminMetaData.vue?vue&type=template&id=53699d1f&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/admin/meta/AdminMetaData.vue?vue&type=template&id=53699d1f&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMetaData_vue_vue_type_template_id_53699d1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminMetaData.vue?vue&type=template&id=53699d1f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/meta/AdminMetaData.vue?vue&type=template&id=53699d1f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMetaData_vue_vue_type_template_id_53699d1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMetaData_vue_vue_type_template_id_53699d1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);