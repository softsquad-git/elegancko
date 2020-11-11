(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/Show.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/Show.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css");
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var viewerjs_dist_viewer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! viewerjs/dist/viewer.css */ "./node_modules/viewerjs/dist/viewer.css");
/* harmony import */ var viewerjs_dist_viewer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(viewerjs_dist_viewer_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var v_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! v-viewer */ "./node_modules/v-viewer/dist/v-viewer.js");
/* harmony import */ var v_viewer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(v_viewer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MetaComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MetaComponent */ "./resources/js/components/pages/MetaComponent.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







vue__WEBPACK_IMPORTED_MODULE_4___default.a.use(v_viewer__WEBPACK_IMPORTED_MODULE_3___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Show",
  components: {
    MetaComponent: _MetaComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      product: {},
      data: {
        color: '',
        size: '',
        product: '',
        quantity: 1
      },
      relatedProducts: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])({
    StoreCart: 'StoreCart'
  })),
  methods: {
    getProduct: function getProduct() {
      var _this = this;

      var id = this.$route.params.id;
      this.$axios.get("front/products/find/".concat(id)).then(function (data) {
        _this.product = data.data.data;
      })["catch"](function (error) {
        return _this.handleAjaxError(error);
      });
    },
    addBasket: function addBasket() {
      this.data.product = this.product;
      this.$store.dispatch('addItem', this.data);
    },
    finalize: function finalize() {
      if (this.data.size !== '' && this.data.color !== '') {
        return this.$router.push({
          name: 'OrderPage',
          params: {
            product_id: this.$route.params.id,
            size_id: this.data.size.id,
            color_id: this.data.color.id
          }
        });
      } else {
        alert('Wypełnij pola');
      }
    },
    getRelatedProducts: function getRelatedProducts() {
      var _this2 = this;

      this.$axios.get("front/products/all?category_id=".concat(1, "&pagination=4")).then(function (data) {
        _this2.relatedProducts = data.data.data;
      })["catch"](function (error) {
        return _this2.handleAjaxError(error);
      });
    }
  },
  watch: {
    '$route.params.id': function $routeParamsId() {
      this.getProduct();
    },
    StoreCart: function StoreCart() {
      this.$notify({
        group: 'notification-success',
        title: 'Udało się',
        text: 'Produkt został dodany do koszyka'
      });
      this.data.color = '';
      this.data.size = '';
    }
  },
  created: function created() {
    this.getProduct();
    this.getRelatedProducts();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/Show.vue?vue&type=style&index=0&id=40296962&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/Show.vue?vue&type=style&index=0&id=40296962&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.single-product-page .price[data-v-40296962] {\n    font-size: 25px;\n    margin-bottom: 22px;\n    display: inline-block;\n}\n.select-option[data-v-40296962] {\n    margin-bottom: 10px;\n}\n.multiselect__tags[data-v-40296962] {\n    border:0!important;\n}\n.single-product-images[data-v-40296962] {\n    max-height: 600px;\n    overflow: hidden;\n}\n.desc[data-v-40296962]{\n    margin-top: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/Show.vue?vue&type=style&index=0&id=40296962&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/Show.vue?vue&type=style&index=0&id=40296962&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=style&index=0&id=40296962&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/Show.vue?vue&type=style&index=0&id=40296962&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/Show.vue?vue&type=template&id=40296962&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/Show.vue?vue&type=template&id=40296962&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container single-product-page" },
    [
      _c("div", { staticClass: "row mb-2" }, [
        _c(
          "div",
          { staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" },
          [
            _c(
              "div",
              { directives: [{ name: "viewer", rawName: "v-viewer" }] },
              [
                _c(
                  "div",
                  { staticClass: "row p-2" },
                  _vm._l(_vm.product.images, function(image) {
                    return _c("img", {
                      staticClass:
                        "w-100 col-xl-4 col-lg-4 col-md-4 col-sm-2 col-xs-2 p-0",
                      attrs: { src: image.src, alt: "'sd" }
                    })
                  }),
                  0
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" },
          [
            _c("h4", { staticClass: "title" }, [
              _vm._v(_vm._s(_vm.product.title))
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("span", { staticClass: "text-bold" }, [
                  _vm._v("Kategoria: ")
                ]),
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: {
                        name: "ProductsIndex",
                        params: { category: _vm.product.category.alias }
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.product.category.name))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("p", { staticClass: "desc" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.product.desc) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "info" },
              [
                _c("span", { staticClass: "price" }, [
                  _vm.product.price.old
                    ? _c("del", [_vm._v(_vm._s(_vm.product.price.old))])
                    : _vm._e(),
                  _vm._v(
                    " " +
                      _vm._s(_vm.product.price.price) +
                      "  " +
                      _vm._s(_vm.product.price.currency)
                  )
                ]),
                _vm._v(" "),
                _c("multiselect", {
                  staticClass: "select-option",
                  attrs: {
                    id: "size",
                    options: _vm.product.sizes,
                    label: "name",
                    "close-on-select": true,
                    multiple: false,
                    placeholder: "Wybierz rozmiar",
                    "track-by": "id"
                  },
                  model: {
                    value: _vm.data.size,
                    callback: function($$v) {
                      _vm.$set(_vm.data, "size", $$v)
                    },
                    expression: "data.size"
                  }
                }),
                _vm._v(" "),
                _c("multiselect", {
                  staticClass: "select-option",
                  attrs: {
                    id: "color",
                    options: _vm.product.colors,
                    label: "name",
                    "close-on-select": true,
                    multiple: false,
                    placeholder: "Wybierz kolor",
                    "track-by": "id"
                  },
                  model: {
                    value: _vm.data.color,
                    callback: function($$v) {
                      _vm.$set(_vm.data, "color", $$v)
                    },
                    expression: "data.color"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-4" }, [
              _c(
                "div",
                {
                  staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12"
                },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "w-100 br-0 margin-bottom-15",
                      attrs: { variant: "outline-secondary" },
                      on: { click: _vm.addBasket }
                    },
                    [_vm._v("Dodaj do koszyka")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12"
                },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "w-100 br-0",
                      attrs: { variant: "outline-secondary" },
                      on: { click: _vm.finalize }
                    },
                    [_vm._v("Kup teraz")]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 mt-4" }, [
                _c("p", {
                  domProps: { innerHTML: _vm._s(_vm.product.content) }
                })
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _vm.relatedProducts.length > 0
        ? _c(
            "div",
            { staticClass: "row mt-5 mb-5" },
            [
              _vm._m(0),
              _vm._v(" "),
              _vm._l(_vm.relatedProducts, function(item) {
                return _c(
                  "div",
                  { staticClass: "col-xl-3 col-lg-3 col-md-3" },
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
                                params: { id: item.id, title: item.title }
                              }
                            }
                          },
                          [
                            _c("div", {
                              staticClass: "product-image-photo",
                              style: "background: url(" + item.image + ")"
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
                                params: { id: item.id, title: item.title }
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                    " +
                                _vm._s(item.title) +
                                "\n                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "footer" }, [
                          _c("span", { staticClass: "text-bold" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(item.price.price) +
                                " " +
                                _vm._s(item.price.currency) +
                                "\n                            "
                            )
                          ])
                        ])
                      ],
                      1
                    )
                  ]
                )
              })
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c("meta-component", {
        attrs: {
          title: _vm.product.meta.title,
          description: _vm.product.meta.description,
          keywords: _vm.product.meta.keywords,
          type: "ITEM"
        }
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
    return _c("div", { staticClass: "col-12" }, [
      _c("h4", { staticClass: "title mb-2" }, [_vm._v("W tej samej kategorii")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/products/Show.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/products/Show.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_40296962_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=40296962&scoped=true& */ "./resources/js/components/pages/products/Show.vue?vue&type=template&id=40296962&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/products/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Show_vue_vue_type_style_index_0_id_40296962_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Show.vue?vue&type=style&index=0&id=40296962&scoped=true&lang=css& */ "./resources/js/components/pages/products/Show.vue?vue&type=style&index=0&id=40296962&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_40296962_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_40296962_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "40296962",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/products/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/products/Show.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/products/Show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/products/Show.vue?vue&type=style&index=0&id=40296962&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/pages/products/Show.vue?vue&type=style&index=0&id=40296962&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_40296962_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=style&index=0&id=40296962&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/Show.vue?vue&type=style&index=0&id=40296962&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_40296962_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_40296962_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_40296962_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_40296962_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_40296962_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pages/products/Show.vue?vue&type=template&id=40296962&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/pages/products/Show.vue?vue&type=template&id=40296962&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_40296962_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=40296962&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/Show.vue?vue&type=template&id=40296962&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_40296962_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_40296962_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);