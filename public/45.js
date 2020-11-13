(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/colors/AdminColorsList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/colors/AdminColorsList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NoDataComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../NoDataComponent */ "./resources/js/components/NoDataComponent.vue");
/* harmony import */ var _AdminCreateColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminCreateColor */ "./resources/js/components/admin/products/colors/AdminCreateColor.vue");
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
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdminColorsList",
  components: {
    AdminCreateColor: _AdminCreateColor__WEBPACK_IMPORTED_MODULE_1__["default"],
    NoDataComponent: _NoDataComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      title: 'Kolory',
      data: {},
      params: {
        ordering: '',
        pagination: ''
      }
    };
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.$axios.get("admin/products/colors/all?page=".concat(page, "&ordering=").concat(this.params.ordering, "&pagination=").concat(this.params.pagination)).then(function (data) {
        _this.data = data.data;
      })["catch"](function (error) {
        return _this.handleAjaxError(error);
      });
    },
    ordering: function ordering(_ordering) {
      this.params.ordering = _ordering;
      this.loadData();
    },
    pagination: function pagination(count) {
      this.params.pagination = count;
      this.loadData();
    },
    createColorModal: function createColorModal() {
      this.$refs.createColor.openModal();
    },
    editColorModal: function editColorModal(item) {
      this.$refs.createColor.openModal('edit', item);
    },
    remove: function remove(id) {
      var _this2 = this;

      this.$confirm({
        message: "Na pewno chcesz usun\u0105\u0107 kolor?",
        button: {
          no: 'Nie',
          yes: 'Tak'
        },
        callback: function callback(confirm) {
          if (confirm) {
            _this2.$axios["delete"]("admin/products/colors/remove/".concat(id)).then(function (data) {
              if (data.data.success === 1) {
                _this2.loadData();

                _this2.$notify({
                  group: 'notification-success',
                  title: 'Udało się',
                  text: data.data.msg
                });
              }
            })["catch"](function (error) {
              return _this2.handleAjaxError(error);
            });
          }
        }
      });
    }
  },
  created: function created() {
    this.loadData();
    document.title = this.title;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/colors/AdminCreateColor.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/colors/AdminCreateColor.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdminCreateColor",
  data: function data() {
    return {
      title: '',
      data: {
        hex: '',
        name: '',
        locale: ''
      },
      action: false,
      colorId: '',
      loadSpinner: false
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      this.loadSpinner = true;
      var url = 'admin/products/colors/create';

      if (this.action === true) {
        url = "admin/products/colors/update/".concat(this.colorId);
      }

      this.$axios.post(url, this.data).then(function (data) {
        _this.loadSpinner = false;

        if (data.data.success === 1) {
          _this.data.hex = '';
          _this.data.name = '';

          _this.$emit('loadData');

          _this.closeModal();
        }
      })["catch"](function (error) {
        _this.loadSpinner = false;

        _this.handleAjaxError(error);
      });
    },
    openModal: function openModal() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (action === 'edit') {
        this.action = true;
        this.colorId = item.id;
        this.data.hex = item.hex;
        this.data.name = item.name;
        this.data.locale = item.locale_key;
      }

      this.$refs['create-color'].show();
    },
    closeModal: function closeModal() {
      this.$refs['create-color'].hide();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/colors/AdminColorsList.vue?vue&type=template&id=3ee80eae&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/colors/AdminColorsList.vue?vue&type=template&id=3ee80eae&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "admin-page" },
    [
      _c("h4", { staticClass: "title" }, [_vm._v(_vm._s(_vm.title))]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "options" },
        [
          _c(
            "b-button",
            {
              attrs: { variant: "outline-secondary" },
              on: { click: _vm.createColorModal }
            },
            [_c("span", { staticClass: "fa fa-plus" })]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown",
            {
              attrs: { variant: "outline-secondary" },
              scopedSlots: _vm._u([
                {
                  key: "button-content",
                  fn: function() {
                    return [_c("span", { staticClass: "fa fa-filter" })]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "b-dropdown-item",
                {
                  on: {
                    click: function($event) {
                      return _vm.ordering("DESC")
                    }
                  }
                },
                [_vm._v("Malejąco")]
              ),
              _vm._v(" "),
              _c(
                "b-dropdown-item",
                {
                  on: {
                    click: function($event) {
                      return _vm.ordering("ASC")
                    }
                  }
                },
                [_vm._v("Rosnąco")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown",
            {
              attrs: { variant: "outline-secondary" },
              scopedSlots: _vm._u([
                {
                  key: "button-content",
                  fn: function() {
                    return [
                      _c("span", { staticClass: "fa fa-sort-numeric-up" })
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "b-dropdown-item",
                {
                  on: {
                    click: function($event) {
                      return _vm.pagination(6)
                    }
                  }
                },
                [_vm._v("6")]
              ),
              _vm._v(" "),
              _c(
                "b-dropdown-item",
                {
                  on: {
                    click: function($event) {
                      return _vm.pagination(12)
                    }
                  }
                },
                [_vm._v("12")]
              ),
              _vm._v(" "),
              _c(
                "b-dropdown-item",
                {
                  on: {
                    click: function($event) {
                      return _vm.pagination(18)
                    }
                  }
                },
                [_vm._v("18")]
              ),
              _vm._v(" "),
              _c(
                "b-dropdown-item",
                {
                  on: {
                    click: function($event) {
                      return _vm.pagination(24)
                    }
                  }
                },
                [_vm._v("24")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content mt-4" },
        [
          _vm.data.data.length > 0
            ? _c("table", { staticClass: "table" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.data.data, function(color, index) {
                    return _c("tr", [
                      _c(
                        "th",
                        { staticClass: "text-center", attrs: { scope: "row" } },
                        [_vm._v(_vm._s(index + 1))]
                      ),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(color.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(color.hex))]),
                      _vm._v(" "),
                      _c("td", { style: "background:" + color.hex }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { innerHTML: _vm._s(color.locale) }
                      }),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "btn-sm",
                              attrs: { variant: "outline-secondary" },
                              on: {
                                click: function($event) {
                                  return _vm.editColorModal(color)
                                }
                              }
                            },
                            [_vm._v("Edytuj")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              staticClass: "btn-sm",
                              attrs: { variant: "outline-secondary" },
                              on: {
                                click: function($event) {
                                  return _vm.remove(color.id)
                                }
                              }
                            },
                            [_vm._v("Usuń\n                    ")]
                          )
                        ],
                        1
                      )
                    ])
                  }),
                  0
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("pagination", {
            attrs: { data: _vm.data },
            on: { "pagination-change-page": _vm.loadData }
          }),
          _vm._v(" "),
          _vm.data.data.length < 1
            ? _c("no-data-component", {
                attrs: { msg: "Brak danych do wyświetlenia" }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("admin-create-color", {
        ref: "createColor",
        on: { loadData: _vm.loadData }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center", attrs: { scope: "col" } }, [
          _vm._v("L.p.")
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nazwa")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Kod")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Kolor")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Język")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Opcje")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/colors/AdminCreateColor.vue?vue&type=template&id=3c561212&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/colors/AdminCreateColor.vue?vue&type=template&id=3c561212&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "b-modal",
    { ref: "create-color", attrs: { "hide-footer": "", title: _vm.title } },
    [
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
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.data.hex,
                  expression: "data.hex"
                }
              ],
              staticClass: "form-control",
              attrs: {
                id: "key",
                type: "text",
                placeholder: "Klucz",
                "aria-label": "Klucz"
              },
              domProps: { value: _vm.data.hex },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.data, "hex", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
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
                type: "text",
                placeholder: "Nazwa",
                "aria-label": "Nazwa"
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
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
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
                attrs: { id: "locale", "aria-label": "Wybierz język" },
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
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "", selected: "" } }, [
                  _vm._v("Wybierz język")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "pl" } }, [_vm._v("Polski")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "en" } }, [_vm._v("Angielski")])
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c(
                "b-button",
                { attrs: { variant: "outline-secondary", type: "submit" } },
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
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/products/colors/AdminColorsList.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/admin/products/colors/AdminColorsList.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminColorsList_vue_vue_type_template_id_3ee80eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminColorsList.vue?vue&type=template&id=3ee80eae&scoped=true& */ "./resources/js/components/admin/products/colors/AdminColorsList.vue?vue&type=template&id=3ee80eae&scoped=true&");
/* harmony import */ var _AdminColorsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminColorsList.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/products/colors/AdminColorsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminColorsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminColorsList_vue_vue_type_template_id_3ee80eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminColorsList_vue_vue_type_template_id_3ee80eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3ee80eae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/products/colors/AdminColorsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/products/colors/AdminColorsList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/admin/products/colors/AdminColorsList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminColorsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminColorsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/colors/AdminColorsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminColorsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/products/colors/AdminColorsList.vue?vue&type=template&id=3ee80eae&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/products/colors/AdminColorsList.vue?vue&type=template&id=3ee80eae&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminColorsList_vue_vue_type_template_id_3ee80eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminColorsList.vue?vue&type=template&id=3ee80eae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/colors/AdminColorsList.vue?vue&type=template&id=3ee80eae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminColorsList_vue_vue_type_template_id_3ee80eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminColorsList_vue_vue_type_template_id_3ee80eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/products/colors/AdminCreateColor.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/admin/products/colors/AdminCreateColor.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminCreateColor_vue_vue_type_template_id_3c561212_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminCreateColor.vue?vue&type=template&id=3c561212&scoped=true& */ "./resources/js/components/admin/products/colors/AdminCreateColor.vue?vue&type=template&id=3c561212&scoped=true&");
/* harmony import */ var _AdminCreateColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminCreateColor.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/products/colors/AdminCreateColor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminCreateColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminCreateColor_vue_vue_type_template_id_3c561212_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminCreateColor_vue_vue_type_template_id_3c561212_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3c561212",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/products/colors/AdminCreateColor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/products/colors/AdminCreateColor.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/admin/products/colors/AdminCreateColor.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCreateColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminCreateColor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/colors/AdminCreateColor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCreateColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/products/colors/AdminCreateColor.vue?vue&type=template&id=3c561212&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/products/colors/AdminCreateColor.vue?vue&type=template&id=3c561212&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCreateColor_vue_vue_type_template_id_3c561212_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminCreateColor.vue?vue&type=template&id=3c561212&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/colors/AdminCreateColor.vue?vue&type=template&id=3c561212&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCreateColor_vue_vue_type_template_id_3c561212_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCreateColor_vue_vue_type_template_id_3c561212_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);