(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        category_id: '',
        is_activated: '',
        ordering: '',
        pagination: '',
        type: '',
        locale: ''
      },
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
      }],
      showSearch: false
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

      this.$axios.get("admin/products/all?title=".concat(this.params.title, "&category_id=").concat(this.params.category_id, "&is_activated=").concat(this.params.is_activated, "&ordering=").concat(this.params.ordering, "&pagination=").concat(this.params.pagination, "&type=").concat(this.params.type, "&locale=").concat(this.params.locale)).then(function (data) {
        _this.data = data.data;

        _this.loadCategories();
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
    },
    loadCategories: function loadCategories() {
      var _this3 = this;

      this.$axios.get('categories/all').then(function (data) {
        _this3.categories = data.data.data;
      });
    }
  },
  created: function created() {
    this.loadData();
    document.title = this.title;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/AdminProductsList.vue?vue&type=style&index=0&id=1636bd11&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/AdminProductsList.vue?vue&type=style&index=0&id=1636bd11&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.search-btn[data-v-1636bd11] {\n    border-radius: 0;\n    font-size: 20px;\n    border: 0;\n    padding-top: 8px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/AdminProductsList.vue?vue&type=style&index=0&id=1636bd11&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/AdminProductsList.vue?vue&type=style&index=0&id=1636bd11&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminProductsList.vue?vue&type=style&index=0&id=1636bd11&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/AdminProductsList.vue?vue&type=style&index=0&id=1636bd11&scoped=true&lang=css&");

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
        _c(
          "b-button",
          {
            attrs: { variant: "outline-secondary" },
            on: {
              click: function($event) {
                _vm.showSearch ^= true
              }
            }
          },
          [_c("span", { staticClass: "fa fa-search" })]
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
    _vm.showSearch
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
            _c("div", { staticClass: "row pl-3 pr-3" }, [
              _c(
                "div",
                {
                  staticClass:
                    "col-xl-2 p-0 col-lg-2 col-md-2 col-sm-12 col-xs-12"
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
                      "aria-label": "Tytuł",
                      placeholder: "Tytuł ..."
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
                          value: _vm.params.category_id,
                          expression: "params.category_id"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "category", "aria-label": "Kategoria" },
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
                            "category_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { selected: "", value: "" } }, [
                        _vm._v("Wybierz kategorię")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.categories, function(category) {
                        return _c(
                          "option",
                          { domProps: { value: category.id } },
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
                      attrs: { id: "type", "aria-label": "Rodzaj" },
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
                        _vm._v("Wybierz rodzaj")
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
                    "col-xl-2 col-lg-2 col-md-2 col-sm-12 p-0 col-xs-12"
                },
                [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.params.locale,
                          expression: "params.locale"
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
                            _vm.params,
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
                      _c("option", { attrs: { value: "pl" } }, [_vm._v("PL")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "en" } }, [_vm._v("EN")])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-xl-1 col-lg-1 col-md-1 p-0 col-sm-12 col-xs-12"
                },
                [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.params.is_activated,
                          expression: "params.is_activated"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "active", "aria-label": "Aktywny?" },
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
                            "is_activated",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { selected: "", value: "" } }, [
                        _vm._v("Aktywny?")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "1" } }, [_vm._v("Tak")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "0" } }, [_vm._v("Nie")])
                    ]
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
                      attrs: { type: "submit", variant: "outline-secondary" }
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
    _c("div", { staticClass: "content" }, [
      _c(
        "div",
        { staticClass: "row" },
        _vm._l(_vm.data.data, function(product) {
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
/* empty/unused harmony star reexport *//* harmony import */ var _AdminProductsList_vue_vue_type_style_index_0_id_1636bd11_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminProductsList.vue?vue&type=style&index=0&id=1636bd11&scoped=true&lang=css& */ "./resources/js/components/admin/products/AdminProductsList.vue?vue&type=style&index=0&id=1636bd11&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/components/admin/products/AdminProductsList.vue?vue&type=style&index=0&id=1636bd11&scoped=true&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/products/AdminProductsList.vue?vue&type=style&index=0&id=1636bd11&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminProductsList_vue_vue_type_style_index_0_id_1636bd11_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminProductsList.vue?vue&type=style&index=0&id=1636bd11&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/AdminProductsList.vue?vue&type=style&index=0&id=1636bd11&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminProductsList_vue_vue_type_style_index_0_id_1636bd11_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminProductsList_vue_vue_type_style_index_0_id_1636bd11_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminProductsList_vue_vue_type_style_index_0_id_1636bd11_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminProductsList_vue_vue_type_style_index_0_id_1636bd11_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminProductsList_vue_vue_type_style_index_0_id_1636bd11_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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