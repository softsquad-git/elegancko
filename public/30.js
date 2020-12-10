(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/meta/AdminMetaList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/meta/AdminMetaList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NoDataComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../NoDataComponent */ "./resources/js/components/NoDataComponent.vue");
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
  name: "AdminMetaList",
  components: {
    NoDataComponent: _NoDataComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      title: 'SEO',
      data: {}
    };
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      this.$Progress.start();
      this.$axios.get('admin/meta/all').then(function (data) {
        _this.$Progress.finish();

        _this.data = data.data;
      })["catch"](function (error) {
        _this.$Progress.fail();

        _this.handleAjaxError(error);
      });
    }
  },
  created: function created() {
    this.loadData();
    document.title = this.title;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/meta/AdminMetaList.vue?vue&type=template&id=38fbc413&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/meta/AdminMetaList.vue?vue&type=template&id=38fbc413&scoped=true& ***!
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
    _c("h5", { staticClass: "title" }, [
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
              to: { name: "AdminMetaData", params: { action: "create" } },
              variant: "outline-secondary"
            }
          },
          [_c("span", { staticClass: "fa fa-plus" })]
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
          ? _c(
              "table",
              { staticClass: "table" },
              [
                _vm._m(0),
                _vm._v(" "),
                _vm._l(_vm.data.data, function(meta, index) {
                  return _c("tr", [
                    _c(
                      "th",
                      { staticClass: "text-center", attrs: { scope: "row" } },
                      [_vm._v(_vm._s(index + 1))]
                    ),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(meta.resource.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(meta.title))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(meta.description))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(meta.keywords))]),
                    _vm._v(" "),
                    _c("td", { domProps: { innerHTML: _vm._s(meta.locale) } }),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-outline-secondary btn-sm",
                            attrs: {
                              to: {
                                name: "AdminMetaData",
                                params: { action: "edit", id: meta.id }
                              }
                            }
                          },
                          [_vm._v("Edytuj\n                    ")]
                        )
                      ],
                      1
                    )
                  ])
                }),
                _vm._v(" "),
                _c("tbody")
              ],
              2
            )
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
    )
  ])
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Strona")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Tytuł")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Opis")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Słowa kluczowe")]),
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

/***/ "./resources/js/components/admin/meta/AdminMetaList.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/admin/meta/AdminMetaList.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminMetaList_vue_vue_type_template_id_38fbc413_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminMetaList.vue?vue&type=template&id=38fbc413&scoped=true& */ "./resources/js/components/admin/meta/AdminMetaList.vue?vue&type=template&id=38fbc413&scoped=true&");
/* harmony import */ var _AdminMetaList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminMetaList.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/meta/AdminMetaList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminMetaList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminMetaList_vue_vue_type_template_id_38fbc413_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminMetaList_vue_vue_type_template_id_38fbc413_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "38fbc413",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/meta/AdminMetaList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/meta/AdminMetaList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/meta/AdminMetaList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMetaList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminMetaList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/meta/AdminMetaList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMetaList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/meta/AdminMetaList.vue?vue&type=template&id=38fbc413&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/admin/meta/AdminMetaList.vue?vue&type=template&id=38fbc413&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMetaList_vue_vue_type_template_id_38fbc413_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminMetaList.vue?vue&type=template&id=38fbc413&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/meta/AdminMetaList.vue?vue&type=template&id=38fbc413&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMetaList_vue_vue_type_template_id_38fbc413_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMetaList_vue_vue_type_template_id_38fbc413_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);