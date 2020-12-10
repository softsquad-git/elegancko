(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NoDataComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../NoDataComponent */ "./resources/js/components/NoDataComponent.vue");
/* harmony import */ var _MetaComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MetaComponent */ "./resources/js/components/pages/MetaComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Index",
  components: {
    MetaComponent: _MetaComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    NoDataComponent: _NoDataComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      isFilters: false,
      title: 'Produkty',
      params: {
        title: '',
        category: '',
        ordering: '',
        pagination: '',
        type: ''
      },
      data: [],
      banner: '',
      categories: [],
      types: [{
        value: 2,
        text: 'Promocja'
      }, {
        value: 3,
        text: 'Nowość'
      }, {
        value: 4,
        text: 'Nowość w promocji'
      }]
    };
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.$Progress.start();
      this.$axios.get("front/products/all?page=".concat(page, "&title=").concat(this.params.title, "&category=").concat(this.params.category, "&ordering=").concat(this.params.ordering, "&pagination=").concat(this.params.pagination, "&type=").concat(this.params.type)).then(function (data) {
        _this.$Progress.finish();

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
    loadCategories: function loadCategories() {
      var _this2 = this;

      this.$axios.get('categories/all').then(function (data) {
        _this2.categories = data.data.data;
      })["catch"](function (error) {
        return _this2.handleAjaxError(error);
      });
    },
    checkCategory: function checkCategory() {
      var _this3 = this;

      if (this.$route.params.category) {
        this.params.category = this.$route.params.category;
        this.$axios.get("categories/find/".concat(this.$route.params.category)).then(function (data) {
          var category = data.data.data;
          _this3.title = category.name;
          _this3.banner = category.image;
        })["catch"](function (error) {
          return _this3.handleAjaxError(error);
        });
      } else {
        this.params.category = '';
        this.title = 'Produkty';
        this.$axios.get('front/settings/find-by-type/products_top_banner').then(function (data) {
          _this3.banner = data.data.data.value;
        })["catch"](function (error) {
          return _this3.handleAjaxError(error);
        });
      }

      this.loadData();
    }
  },
  watch: {
    'params.ordering': function paramsOrdering() {
      this.loadData();
    },
    'params.category': function paramsCategory() {
      this.checkCategory();
    },
    '$route.params.category': function $routeParamsCategory() {
      this.checkCategory();
    }
  },
  created: function created() {
    this.checkCategory();
    this.loadCategories();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/Index.vue?vue&type=style&index=0&id=08f4c9bd&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/Index.vue?vue&type=style&index=0&id=08f4c9bd&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top-banner-products[data-v-08f4c9bd] {\n  height: 700px;\n  background-position: center center !important;\n  background-size: cover !important;\n  text-align: center;\n  line-height: 700px;\n}\n.top-banner-products .bg[data-v-08f4c9bd] {\n  background: #00000021;\n}\n.search-btn[data-v-08f4c9bd] {\n  border-radius: 0;\n  font-size: 20px;\n  border: 0;\n  padding-top: 8px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/Index.vue?vue&type=style&index=0&id=08f4c9bd&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/Index.vue?vue&type=style&index=0&id=08f4c9bd&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=08f4c9bd&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/Index.vue?vue&type=style&index=0&id=08f4c9bd&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/Index.vue?vue&type=template&id=08f4c9bd&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/Index.vue?vue&type=template&id=08f4c9bd&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "div",
        {
          staticClass: "top-banner-products",
          style: "background: url(" + _vm.banner + ")"
        },
        [
          _c("div", { staticClass: "bg" }, [
            _c("h1", { staticClass: "title title-top-banner" }, [
              _vm._v(_vm._s(_vm.title))
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _vm.isFilters
          ? _c(
              "form",
              {
                staticClass: "mt-3 mb-3",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.loadData($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "row pl-1 pr-1" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-xl-5 p-0 col-lg-5 col-md-5 col-sm-12 col-xs-12"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.params.title,
                            expression: "params.title"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "title",
                          "aria-label": _vm.$t("form.title"),
                          placeholder: _vm.$t("form.title")
                        },
                        domProps: { value: _vm.params.title },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.params, "title", $event.target.value)
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-xl-3 p-0 col-lg-3 col-md-3 col-sm-12 col-xs-12"
                    },
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.params.category,
                              expression: "params.category"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            id: "category",
                            "aria-label": _vm.$t("form.category")
                          },
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
                                _vm.params,
                                "category",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { selected: "", value: "" } }, [
                            _vm._v(_vm._s(_vm.$t("form.category")))
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.categories, function(category) {
                            return _c(
                              "option",
                              { domProps: { value: category.alias } },
                              [_vm._v(_vm._s(category.name))]
                            )
                          })
                        ],
                        2
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-xl-3 p-0 col-lg-3 col-md-3 col-sm-12 col-xs-12"
                    },
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.params.type,
                              expression: "params.type"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            id: "type",
                            "aria-label": _vm.$t("form.type")
                          },
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
                                _vm.params,
                                "type",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { selected: "", value: "" } }, [
                            _vm._v(_vm._s(_vm.$t("form.type")))
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.types, function(type) {
                            return _c(
                              "option",
                              { domProps: { value: type.value } },
                              [_vm._v(_vm._s(type.text))]
                            )
                          })
                        ],
                        2
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-xl-1 p-0 col-lg-1 col-md-1 col-sm-12 col-xs-12"
                    },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "search-btn w-100",
                          attrs: {
                            type: "submit",
                            variant: "outline-secondary"
                          }
                        },
                        [_c("span", { staticClass: "fa fa-search" })]
                      )
                    ],
                    1
                  )
                ])
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.isFilters
          ? _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass:
                    "col-xl-2 col-lg-2 col-md-2 offset-xl-10 offset-lg-10 offset-md-10"
                },
                [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.params.ordering,
                          expression: "params.ordering"
                        }
                      ],
                      staticClass: "form-control min-select",
                      attrs: { id: "ordering", "aria-label": "Sortuj" },
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
                            _vm.params,
                            "ordering",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { selected: "", value: "" } }, [
                        _vm._v(_vm._s(_vm.$t("form.sort.title")))
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "ASC" } }, [
                        _vm._v(_vm._s(_vm.$t("form.sort.options.asc")))
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "DESC" } }, [
                        _vm._v(_vm._s(_vm.$t("form.sort.options.desc")))
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "PRICE_MIN" } }, [
                        _vm._v(_vm._s(_vm.$t("form.sort.options.price_min")))
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "PRICE_MAX" } }, [
                        _vm._v(_vm._s(_vm.$t("form.sort.options.price_max")))
                      ])
                    ]
                  )
                ]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _c(
                "b-button",
                {
                  staticClass: "search-btn btn-sm float-right",
                  attrs: { variant: "outline-secondary" },
                  on: {
                    click: function($event) {
                      _vm.isFilters ^= true
                    }
                  }
                },
                [
                  _c("span", {
                    class: _vm.isFilters
                      ? "fa fa-search-minus"
                      : "fa fa-search-plus"
                  })
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xl-12 col-lg-12 col-md-12" }, [
            _c(
              "div",
              { staticClass: "row" },
              [
                _vm._l(_vm.data.data, function(product) {
                  return _vm.data.data.length > 0
                    ? _c(
                        "div",
                        { staticClass: "col-xl-3 col-lg-3 col-md-3 p-1" },
                        [
                          _c(
                            "div",
                            { staticClass: "single-product" },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "ProductShow",
                                      params: {
                                        id: product.id,
                                        title: product.title
                                      }
                                    }
                                  }
                                },
                                [
                                  _c("div", {
                                    staticClass: "product-image-photo",
                                    style:
                                      "background: url(" + product.image + ")"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "ProductShow",
                                      params: {
                                        id: product.id,
                                        title: product.title
                                      }
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(product.title) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "footer" }, [
                                _c("span", { staticClass: "text-bold" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(product.price.price) +
                                      " " +
                                      _vm._s(product.price.currency) +
                                      "\n                                "
                                  )
                                ])
                              ])
                            ],
                            1
                          )
                        ]
                      )
                    : _vm._e()
                }),
                _vm._v(" "),
                _vm.data.data.length < 1
                  ? _c("no-data-component", {
                      attrs: { msg: _vm.$t("msg.no_data") }
                    })
                  : _vm._e()
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12 mt-4" },
            [
              _c("pagination", {
                attrs: { data: _vm.data },
                on: { "pagination-change-page": _vm.loadData }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("meta-component", { attrs: { type: "PRODUCTS" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/products/Index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/pages/products/Index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_08f4c9bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=08f4c9bd&scoped=true& */ "./resources/js/components/pages/products/Index.vue?vue&type=template&id=08f4c9bd&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/products/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_08f4c9bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=08f4c9bd&lang=scss&scoped=true& */ "./resources/js/components/pages/products/Index.vue?vue&type=style&index=0&id=08f4c9bd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_08f4c9bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_08f4c9bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "08f4c9bd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/products/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/products/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pages/products/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/products/Index.vue?vue&type=style&index=0&id=08f4c9bd&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/pages/products/Index.vue?vue&type=style&index=0&id=08f4c9bd&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_08f4c9bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=08f4c9bd&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/Index.vue?vue&type=style&index=0&id=08f4c9bd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_08f4c9bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_08f4c9bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_08f4c9bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_08f4c9bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_08f4c9bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pages/products/Index.vue?vue&type=template&id=08f4c9bd&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/pages/products/Index.vue?vue&type=template&id=08f4c9bd&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_08f4c9bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=08f4c9bd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/Index.vue?vue&type=template&id=08f4c9bd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_08f4c9bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_08f4c9bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);