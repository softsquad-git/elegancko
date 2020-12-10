(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/OrderPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/orders/OrderPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "OrderPage",
  data: function data() {
    return {
      title: this.$t('page.order.title'),
      data: {
        name: '',
        last_name: '',
        email: '',
        shipment_id: '',
        post_code: '',
        country: '',
        city: '',
        address: '',
        type: 1,
        company_name: '',
        nip: '',
        number_phone: '',
        comments: '',
        products: []
      },
      createAccount: 0,
      shipments: [],
      password: ''
    };
  },
  props: {
    shipment: ''
  },
  methods: {
    save: function save() {
      var _this = this;

      var productsBasket = this.$store.getters.StoreCart;
      var products = [];
      productsBasket.forEach(function (productItem) {
        products.push({
          size_id: productItem.size.id,
          color_id: productItem.color.id,
          quantity: productItem.quantity,
          product_id: productItem.product.id
        });
      });
      this.data.products = products;

      if (this.createAccount == 1) {
        var dataRegister = {
          name: this.data.name,
          last_name: this.data.last_name,
          email: this.data.email,
          password: this.password,
          terms: true,
          city: this.data.city,
          address: this.data.address,
          post_code: this.data.post_code,
          phone: this.data.number_phone,
          country: this.data.country
        };
        this.$axios.post('auth/register', dataRegister).then(function (data) {
          _this.$notify({
            group: 'foo',
            title: 'Udało się',
            text: data.data.msg
          });
        })["catch"](function (error) {
          return _this.handleAjaxError(error);
        });
      }

      this.$axios.post('front/orders/create', this.data).then(function (data) {
        var orderId = data.data.order_id;

        if (data.data.success === 1) {
          _this.data.name = '';
          _this.data.last_name = '';
          _this.data.email = '';
          _this.data.shipment_id = '';
          _this.data.post_code = '';
          _this.data.city = '';
          _this.data.address = '';
          _this.data.country = '';
          _this.data.type = 1;
          _this.data.company_name = '';
          _this.data.number_phone = '';
          _this.data.products = [];
          _this.data.comments = '';

          _this.$notify({
            group: 'foo',
            title: 'Udało się',
            text: 'Zamówienie zostało złożone i oczekuje na realizację'
          });

          _this.$router.push({
            name: 'OrderPay',
            params: {
              orderId: orderId
            }
          });
        }
      })["catch"](function (error) {
        return _this.handleAjaxError(error);
      });
    },
    buyCompany: function buyCompany(type) {
      this.data.type = type;
    },
    findProduct: function findProduct() {}
  },
  watch: {
    'createAccount': function createAccount() {
      console.log(this.createAccount);
    },
    'shipment': function shipment() {
      if (this.shipment.id) {
        this.data.shipment_id = this.shipment.id;
      }
    }
  },
  created: function created() {
    var _this2 = this;

    this.$axios.get('front/shipments/all').then(function (data) {
      _this2.shipments = data.data.data;
    });

    if (this.shipment.id) {
      this.data.shipment_id = this.shipment.id;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/OrderPage.vue?vue&type=template&id=23fc7e04&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/orders/OrderPage.vue?vue&type=template&id=23fc7e04&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
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
                {
                  staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                },
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
                      "aria-label": _vm.$t("form.first_name"),
                      placeholder: _vm.$t("form.first_name")
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
                {
                  staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                },
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
                      "aria-label": _vm.$t("form.last_name"),
                      placeholder: _vm.$t("form.last_name")
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
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "div",
                {
                  staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.email,
                        expression: "data.email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      "aria-label": _vm.$t("form.email"),
                      placeholder: _vm.$t("form.email")
                    },
                    domProps: { value: _vm.data.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data, "email", $event.target.value)
                      }
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.number_phone,
                        expression: "data.number_phone"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      "aria-label": _vm.$t("form.phone"),
                      placeholder: _vm.$t("form.phone")
                    },
                    domProps: { value: _vm.data.number_phone },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data, "number_phone", $event.target.value)
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
                {
                  staticClass: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"
                },
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
                      "aria-label": _vm.$t("form.post_code"),
                      placeholder: _vm.$t("form.post_code")
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
                {
                  staticClass: "col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12"
                },
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
                      "aria-label": _vm.$t("form.city"),
                      placeholder: _vm.$t("form.city")
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
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "div",
                {
                  staticClass: "col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12"
                },
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
                      "aria-label": _vm.$t("form.address"),
                      placeholder: _vm.$t("form.address")
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
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.country,
                        expression: "data.country"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      "aria-label": _vm.$t("form.address"),
                      placeholder: _vm.$t("form.country")
                    },
                    domProps: { value: _vm.data.country },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data, "country", $event.target.value)
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
                    {
                      ref: "company",
                      attrs: {
                        type: "button",
                        value: "2",
                        variant: "outline-secondary"
                      },
                      on: {
                        click: function($event) {
                          return _vm.buyCompany(_vm.data.type == 1 ? 2 : 1)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.$t("page.order.buy_company")) +
                          "  "
                      ),
                      _c("span", {
                        staticClass: "ml-2",
                        class:
                          _vm.data.type == 2
                            ? "fa fa-angle-up"
                            : "fa fa-angle-down"
                      })
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.comments,
                      expression: "data.comments"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    "aria-label": _vm.$t("page.order.warning"),
                    placeholder: _vm.$t("page.order.warning")
                  },
                  domProps: { value: _vm.data.comments },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "comments", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _vm.data.type == 2
              ? _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.company_name,
                            expression: "data.company_name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          "aria-label": _vm.$t("page.order.company_nip"),
                          placeholder: _vm.$t("page.order.company_name")
                        },
                        domProps: { value: _vm.data.company_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.data,
                              "company_name",
                              $event.target.value
                            )
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
                        "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.nip,
                            expression: "data.nip"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          "aria-label": _vm.$t("page.order.company_nip"),
                          placeholder: _vm.$t("page.order.company_nip")
                        },
                        domProps: { value: _vm.data.nip },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "nip", $event.target.value)
                          }
                        }
                      })
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.shipment_id,
                        expression: "data.shipment_id"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      "aria-label": _vm.$t("page.basket.select_shipment")
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
                          _vm.data,
                          "shipment_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "", selected: "" } }, [
                      _vm._v(_vm._s(_vm.$t("page.basket.select_shipment")))
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.shipments, function(shipment) {
                      return _c(
                        "option",
                        { domProps: { value: shipment.id } },
                        [_vm._v(_vm._s(shipment.name))]
                      )
                    })
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "div",
                {
                  staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                },
                [
                  _c(
                    "b-form-checkbox",
                    {
                      attrs: {
                        id: "createAccount",
                        name: "createAccount",
                        value: "1",
                        "unchecked-value": "0"
                      },
                      model: {
                        value: _vm.createAccount,
                        callback: function($$v) {
                          _vm.createAccount = $$v
                        },
                        expression: "createAccount"
                      }
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.$t("page.order.create_account")) +
                          " "
                      ),
                      _c("router-link", { attrs: { to: "#" } }, [
                        _vm._v(
                          _vm._s(_vm.$t("page.order.create_account_profit"))
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.createAccount == 1
                ? _c(
                    "div",
                    {
                      staticClass:
                        "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.password,
                            expression: "password"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "password",
                          type: "password",
                          placeholder: _vm.$t("page.order.create_account_pass"),
                          "aria-label": _vm.$t("page.order.create_account_pass")
                        },
                        domProps: { value: _vm.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.password = $event.target.value
                          }
                        }
                      })
                    ]
                  )
                : _vm._e()
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
                    [_vm._v(_vm._s(_vm.$t("btn.next")))]
                  )
                ],
                1
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/orders/OrderPage.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/orders/OrderPage.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderPage_vue_vue_type_template_id_23fc7e04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderPage.vue?vue&type=template&id=23fc7e04&scoped=true& */ "./resources/js/components/orders/OrderPage.vue?vue&type=template&id=23fc7e04&scoped=true&");
/* harmony import */ var _OrderPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderPage.vue?vue&type=script&lang=js& */ "./resources/js/components/orders/OrderPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrderPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderPage_vue_vue_type_template_id_23fc7e04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderPage_vue_vue_type_template_id_23fc7e04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "23fc7e04",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/orders/OrderPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/orders/OrderPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/orders/OrderPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/OrderPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/orders/OrderPage.vue?vue&type=template&id=23fc7e04&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/orders/OrderPage.vue?vue&type=template&id=23fc7e04&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPage_vue_vue_type_template_id_23fc7e04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderPage.vue?vue&type=template&id=23fc7e04&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/OrderPage.vue?vue&type=template&id=23fc7e04&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPage_vue_vue_type_template_id_23fc7e04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPage_vue_vue_type_template_id_23fc7e04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);