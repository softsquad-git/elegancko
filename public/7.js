(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/categories/AdminCategoriesList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/categories/AdminCategoriesList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminDataCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminDataCategory */ "./resources/js/components/admin/categories/AdminDataCategory.vue");
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
  name: "AdminCategoriesList",
  components: {
    AdminDataCategory: _AdminDataCategory__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      title: 'Lista kategorii',
      data: [],
      params: {
        name: '',
        ordering: '',
        pagination: '',
        is_active: '',
        locale: ''
      },
      showAdminDataCategory: false
    };
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      this.$axios.get("admin/categories/all?name=".concat(this.params.name, "&ordering=").concat(this.params.ordering, "&pagination=").concat(this.params.pagination, "&is_active=").concat(this.params.is_active, "&locale=").concat(this.params.locale)).then(function (data) {
        _this.data = data.data.data;
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
    closeAdminDataCategory: function closeAdminDataCategory() {
      this.showAdminDataCategory = false;
      this.loadData();
    },
    action: function action(id, type) {
      var _this2 = this;

      if (type === 'edit') {
        this.$refs.editCategoryWindow.edit(id); // id = object category

        this.showAdminDataCategory = true;
      } else if (type === 'remove') {
        this.$confirm({
          message: "Na pewno chcesz usun\u0105\u0107 kategori\u0119? Wraz z ni\u0105 zostan\u0105 usuni\u0119te powi\u0105zane produkty",
          button: {
            no: 'Nie',
            yes: 'Tak'
          },
          callback: function callback(confirm) {
            if (confirm) {
              _this2.$axios["delete"]("admin/categories/remove/".concat(id)) // id = id category
              .then(function (data) {
                if (data.data.success === 1) {
                  _this2.loadData();
                }
              });
            }
          }
        });
      }
    }
  },
  created: function created() {
    this.loadData();
    document.title = this.title;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/categories/AdminCategoriesList.vue?vue&type=template&id=19542c01&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/categories/AdminCategoriesList.vue?vue&type=template&id=19542c01&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
            attrs: { variant: "outline-secondary" },
            on: {
              click: function($event) {
                _vm.showAdminDataCategory ^= true
              }
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
    _c(
      "div",
      { staticClass: "content" },
      [
        _vm.showAdminDataCategory
          ? _c("admin-data-category", {
              ref: "editCategoryWindow",
              on: { loadData: _vm.closeAdminDataCategory }
            })
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.data, function(category) {
            return _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "admin-categories-single" }, [
                _c("h4", [_vm._v(_vm._s(category.name))]),
                _vm._v(" "),
                _c("span", { staticClass: "created" }, [
                  _vm._v(
                    "Dodano: " +
                      _vm._s(_vm._f("moment")(category.created_at, "calendar"))
                  )
                ]),
                _vm._v(" "),
                _c("h5", [_vm._v("Alias: " + _vm._s(category.alias))]),
                _vm._v(" "),
                _c("div", { staticClass: "info" }, [
                  _c("span", [
                    _vm._v("Liczba produktów: "),
                    _c("b", [_vm._v(_vm._s(category.c_products))])
                  ]),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v("Aktywna: "),
                    _c("b", [
                      _vm._v(
                        _vm._s(category.activated === true ? "Tak" : "Nie")
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "footer" },
                  [
                    _c(
                      "b-button",
                      { attrs: { variant: "outline-secondary" } },
                      [_c("span", { staticClass: "fa fa-eye" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "outline-secondary" },
                        on: {
                          click: function($event) {
                            return _vm.action(category, "edit")
                          }
                        }
                      },
                      [_c("span", { staticClass: "fa fa-pencil" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "outline-danger" },
                        on: {
                          click: function($event) {
                            return _vm.action(category.id, "remove")
                          }
                        }
                      },
                      [_c("span", { staticClass: "fa fa-trash" })]
                    )
                  ],
                  1
                )
              ])
            ])
          }),
          0
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/categories/AdminCategoriesList.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/admin/categories/AdminCategoriesList.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminCategoriesList_vue_vue_type_template_id_19542c01_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminCategoriesList.vue?vue&type=template&id=19542c01&scoped=true& */ "./resources/js/components/admin/categories/AdminCategoriesList.vue?vue&type=template&id=19542c01&scoped=true&");
/* harmony import */ var _AdminCategoriesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminCategoriesList.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/categories/AdminCategoriesList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminCategoriesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminCategoriesList_vue_vue_type_template_id_19542c01_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminCategoriesList_vue_vue_type_template_id_19542c01_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "19542c01",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/categories/AdminCategoriesList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/categories/AdminCategoriesList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/admin/categories/AdminCategoriesList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCategoriesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminCategoriesList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/categories/AdminCategoriesList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCategoriesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/categories/AdminCategoriesList.vue?vue&type=template&id=19542c01&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/categories/AdminCategoriesList.vue?vue&type=template&id=19542c01&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCategoriesList_vue_vue_type_template_id_19542c01_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminCategoriesList.vue?vue&type=template&id=19542c01&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/categories/AdminCategoriesList.vue?vue&type=template&id=19542c01&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCategoriesList_vue_vue_type_template_id_19542c01_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCategoriesList_vue_vue_type_template_id_19542c01_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);