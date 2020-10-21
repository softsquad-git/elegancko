(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/AdminProductsList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/AdminProductsList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
  name: "AdminProductsList",
  data: function data() {
    return {
      title: 'Lista produktów',
      data: [],
      params: {
        title: '',
        category: '',
        is_activated: '',
        ordering: '',
        pagination: ''
      }
    };
  },
  methods: {
    ordering: function ordering(_ordering) {
      this.params.ordering = _ordering;
      this.loadData();
    },
    pagination: function pagination(count) {
      this.params.pagination = count;
      this.loadData();
    },
    loadData: function loadData() {
      var _this = this;

      this.$axios.get("admin/products/all?title=".concat(this.params.title, "&category_id=").concat(this.params.category, "&is_activated=").concat(this.params.is_activated, "&ordering=").concat(this.params.ordering, "&pagination=").concat(this.params.pagination)).then(function (data) {
        _this.data = data.data.data;
      })["catch"](function () {//
      });
    },
    remove: function remove(id) {
      var _this2 = this;

      this.$confirm({
        message: "Na pewno chcesz usun\u0105\u0107 ten produkt?",
        button: {
          no: 'Nie',
          yes: 'Tak'
        },
        callback: function callback(confirm) {
          if (confirm) {
            _this2.$axios["delete"]("admin/products/remove/".concat(id)).then(function (data) {
              if (data.data.success === 1) {
                _this2.loadData();

                _this2.$notify({
                  group: 'foo',
                  title: 'Udało się',
                  text: 'Produkt został usunięty ze sklepu'
                });
              }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/AdminProductsList.vue?vue&type=template&id=1636bd11&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/AdminProductsList.vue?vue&type=template&id=1636bd11&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
            attrs: {
              to: { name: "AdminDataProduct", params: { action: "create" } },
              variant: "outline-secondary"
            }
          },
          [_c("span", { staticClass: "fa fa-plus" })]
        ),
        _vm._v(" "),
        _c("b-button", { attrs: { variant: "outline-secondary" } }, [
          _c("span", { staticClass: "fa fa-search" })
        ]),
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
                  return [_c("span", { staticClass: "fa fa-sort-numeric-up" })]
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
    _c("div", { staticClass: "content" }, [
      _c(
        "div",
        { staticClass: "row" },
        _vm._l(_vm.data, function(product) {
          return _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "admin-products-single" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-xl-1 col-lg-1 col-md-3" }, [
                  _c("img", {
                    staticClass: "w-100",
                    attrs: { src: product.image, alt: product.title }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-7 col-lg-7 col-md-5" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "div",
                        { staticClass: "admin-product-content" },
                        [
                          _c("router-link", { attrs: { to: "#" } }, [
                            _c("h5", [_vm._v(_vm._s(product.title))])
                          ])
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 info" },
                      [
                        _vm._v(
                          "\n                                    Kategoria:\n                                    "
                        ),
                        _c("router-link", { attrs: { to: "#" } }, [
                          _vm._v(_vm._s(product.category.name))
                        ]),
                        _vm._v(
                          "\n                                    Dodano: "
                        ),
                        _c("span", { staticClass: "text-bold" }, [
                          _vm._v(
                            _vm._s(
                              _vm._f("moment")(product.created_at, "calendar")
                            )
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 info" }, [
                      _vm._v("\n                                    Cena: "),
                      _c("span", { staticClass: "text-bold" }, [
                        _vm._v(
                          _vm._s(product.price.price) +
                            " " +
                            _vm._s(product.price.currency)
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xl-4 col-lg-4 col-md-4 text-right p-3" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-outline-secondary btn-sm",
                        attrs: {
                          to: {
                            name: "AdminDataProduct",
                            params: { action: "edit", id: product.id }
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
                            return _vm.remove(product.id)
                          }
                        }
                      },
                      [_vm._v("Usuń")]
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/products/AdminProductsList.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/admin/products/AdminProductsList.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminProductsList_vue_vue_type_template_id_1636bd11_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminProductsList.vue?vue&type=template&id=1636bd11&scoped=true& */ "./resources/js/components/admin/products/AdminProductsList.vue?vue&type=template&id=1636bd11&scoped=true&");
/* harmony import */ var _AdminProductsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminProductsList.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/products/AdminProductsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminProductsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminProductsList_vue_vue_type_template_id_1636bd11_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminProductsList_vue_vue_type_template_id_1636bd11_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1636bd11",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/products/AdminProductsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/products/AdminProductsList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/admin/products/AdminProductsList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminProductsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminProductsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/AdminProductsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminProductsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/products/AdminProductsList.vue?vue&type=template&id=1636bd11&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/admin/products/AdminProductsList.vue?vue&type=template&id=1636bd11&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminProductsList_vue_vue_type_template_id_1636bd11_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminProductsList.vue?vue&type=template&id=1636bd11&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/AdminProductsList.vue?vue&type=template&id=1636bd11&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminProductsList_vue_vue_type_template_id_1636bd11_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminProductsList_vue_vue_type_template_id_1636bd11_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);