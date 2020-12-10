(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/shipments/AdminShipmentCreate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/shipments/AdminShipmentCreate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdminShipmentCreate",
  data: function data() {
    return {
      title: 'Dodaj opcję wysyłki',
      data: {
        name: '',
        price: '',
        locale: ''
      },
      action: false,
      shipmentId: '',
      loadSpinner: false
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      this.loadSpinner = true;
      var url = 'admin/shipments/create';

      if (this.action === true) {
        url = "admin/shipments/update/".concat(this.shipmentId);
      }

      this.$axios.post(url, this.data).then(function (data) {
        _this.loadSpinner = false;

        if (data.data.success === 1) {
          _this.$emit('loadData');

          _this.data.name = '';
          _this.data.price = '';
          _this.data.locale = '';

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
        this.shipmentId = item.id;
        this.data.locale = item.locale_key;
        this.data.price = item.price;
        this.data.name = item.name;
      }

      this.$refs['create-shipment'].show();
    },
    closeModal: function closeModal() {
      this.$refs['create-shipment'].hide();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/shipments/AdminShipmentsList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/shipments/AdminShipmentsList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminShipmentCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminShipmentCreate */ "./resources/js/components/admin/shipments/AdminShipmentCreate.vue");
/* harmony import */ var vue_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-spinners */ "./node_modules/vue-spinners/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AdminShipmentsList",
  components: {
    AdminShipmentCreate: _AdminShipmentCreate__WEBPACK_IMPORTED_MODULE_0__["default"],
    CircleSpinner: vue_spinners__WEBPACK_IMPORTED_MODULE_1__["CircleSpinner"]
  },
  data: function data() {
    return {
      title: 'Wysyłka',
      data: {},
      params: {
        ordering: '',
        pagination: ''
      },
      isLoadSpinner: false
    };
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.isLoadSpinner = true;
      this.$axios.get("admin/shipments/all?page=".concat(page, "&ordering=").concat(this.params.ordering, "&pagination=").concat(this.params.pagination)).then(function (data) {
        _this.isLoadSpinner = false;
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
    createShipmentModal: function createShipmentModal() {
      this.$refs.createShipment.openModal();
    },
    editShipmentModal: function editShipmentModal(item) {
      this.$refs.createShipment.openModal('edit', item);
    },
    remove: function remove(id) {
      var _this2 = this;

      this.$confirm({
        message: "Na pewno chcesz usun\u0105\u0107 wysy\u0142k\u0119?",
        button: {
          no: 'Nie',
          yes: 'Tak'
        },
        callback: function callback(confirm) {
          if (confirm) {
            _this2.$axios["delete"]("admin/shipments/remove/".concat(id)).then(function (data) {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/shipments/AdminShipmentCreate.vue?vue&type=template&id=7d685914&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/shipments/AdminShipmentCreate.vue?vue&type=template&id=7d685914&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    { ref: "create-shipment", attrs: { "hide-footer": "", title: _vm.title } },
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
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.data.price,
                  expression: "data.price"
                }
              ],
              staticClass: "form-control",
              attrs: {
                id: "price",
                type: "text",
                placeholder: "Cena",
                "aria-label": "Cena"
              },
              domProps: { value: _vm.data.price },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.data, "price", $event.target.value)
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
                  _vm._v("\n                Zapisz\n            ")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/shipments/AdminShipmentsList.vue?vue&type=template&id=9afa9b2e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/shipments/AdminShipmentsList.vue?vue&type=template&id=9afa9b2e&scoped=true& ***!
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
            on: { click: _vm.createShipmentModal }
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
      { staticClass: "content mt-4" },
      [
        _vm.isLoadSpinner
          ? _c("circle-spinner", {
              staticClass: "m-auto",
              attrs: { loading: _vm.isLoadSpinner }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.data.data.length > 0 && !_vm.isLoadSpinner
          ? _c("table", { staticClass: "table" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.data.data, function(shipment, index) {
                  return _c("tr", [
                    _c(
                      "th",
                      { staticClass: "text-center", attrs: { scope: "row" } },
                      [_vm._v(_vm._s(index + 1))]
                    ),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(shipment.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(shipment.price))]),
                    _vm._v(" "),
                    _c("td", {
                      domProps: { innerHTML: _vm._s(shipment.locale) }
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
                                return _vm.editShipmentModal(shipment)
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
                                return _vm.remove(shipment.id)
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
        _c("admin-shipment-create", {
          ref: "createShipment",
          on: { loadData: _vm.loadData }
        })
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nazwa")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Cena")]),
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

/***/ "./resources/js/components/admin/shipments/AdminShipmentCreate.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/admin/shipments/AdminShipmentCreate.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminShipmentCreate_vue_vue_type_template_id_7d685914_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminShipmentCreate.vue?vue&type=template&id=7d685914&scoped=true& */ "./resources/js/components/admin/shipments/AdminShipmentCreate.vue?vue&type=template&id=7d685914&scoped=true&");
/* harmony import */ var _AdminShipmentCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminShipmentCreate.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/shipments/AdminShipmentCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminShipmentCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminShipmentCreate_vue_vue_type_template_id_7d685914_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminShipmentCreate_vue_vue_type_template_id_7d685914_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7d685914",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/shipments/AdminShipmentCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/shipments/AdminShipmentCreate.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/admin/shipments/AdminShipmentCreate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminShipmentCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminShipmentCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/shipments/AdminShipmentCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminShipmentCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/shipments/AdminShipmentCreate.vue?vue&type=template&id=7d685914&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/shipments/AdminShipmentCreate.vue?vue&type=template&id=7d685914&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminShipmentCreate_vue_vue_type_template_id_7d685914_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminShipmentCreate.vue?vue&type=template&id=7d685914&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/shipments/AdminShipmentCreate.vue?vue&type=template&id=7d685914&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminShipmentCreate_vue_vue_type_template_id_7d685914_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminShipmentCreate_vue_vue_type_template_id_7d685914_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/shipments/AdminShipmentsList.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/admin/shipments/AdminShipmentsList.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminShipmentsList_vue_vue_type_template_id_9afa9b2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminShipmentsList.vue?vue&type=template&id=9afa9b2e&scoped=true& */ "./resources/js/components/admin/shipments/AdminShipmentsList.vue?vue&type=template&id=9afa9b2e&scoped=true&");
/* harmony import */ var _AdminShipmentsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminShipmentsList.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/shipments/AdminShipmentsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminShipmentsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminShipmentsList_vue_vue_type_template_id_9afa9b2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminShipmentsList_vue_vue_type_template_id_9afa9b2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9afa9b2e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/shipments/AdminShipmentsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/shipments/AdminShipmentsList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/admin/shipments/AdminShipmentsList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminShipmentsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminShipmentsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/shipments/AdminShipmentsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminShipmentsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/shipments/AdminShipmentsList.vue?vue&type=template&id=9afa9b2e&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/admin/shipments/AdminShipmentsList.vue?vue&type=template&id=9afa9b2e&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminShipmentsList_vue_vue_type_template_id_9afa9b2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminShipmentsList.vue?vue&type=template&id=9afa9b2e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/shipments/AdminShipmentsList.vue?vue&type=template&id=9afa9b2e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminShipmentsList_vue_vue_type_template_id_9afa9b2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminShipmentsList_vue_vue_type_template_id_9afa9b2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);