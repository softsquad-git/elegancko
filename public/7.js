(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminPageIndex.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminPageIndex.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reports_UsersAdminReport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports/UsersAdminReport */ "./resources/js/components/admin/reports/UsersAdminReport.vue");
/* harmony import */ var _reports_OrdersAdminReport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports/OrdersAdminReport */ "./resources/js/components/admin/reports/OrdersAdminReport.vue");
/* harmony import */ var _reports_MessagesAdminReport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports/MessagesAdminReport */ "./resources/js/components/admin/reports/MessagesAdminReport.vue");
/* harmony import */ var vue_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-spinners */ "./node_modules/vue-spinners/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AdminPageIndex",
  components: {
    MessagesAdminReport: _reports_MessagesAdminReport__WEBPACK_IMPORTED_MODULE_2__["default"],
    OrdersAdminReport: _reports_OrdersAdminReport__WEBPACK_IMPORTED_MODULE_1__["default"],
    UsersAdminReport: _reports_UsersAdminReport__WEBPACK_IMPORTED_MODULE_0__["default"],
    CircleSpinner: vue_spinners__WEBPACK_IMPORTED_MODULE_3__["CircleSpinner"]
  },
  data: function data() {
    return {
      title: 'Panel administratora',
      adminData: {
        title: 'Dane podstawowe',
        data: []
      },
      isLoading: false
    };
  },
  methods: {
    loadBasicData: function loadBasicData() {
      var _this = this;

      this.isLoading = true;
      this.$axios.get('user/logged').then(function (data) {
        _this.isLoading = false;
        _this.adminData.data = data.data;
      })["catch"](function (error) {
        return _this.handleAjaxError(error);
      });
    }
  },
  created: function created() {
    this.loadBasicData();
    document.title = this.title;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/reports/MessagesAdminReport.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/reports/MessagesAdminReport.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_spinners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-spinners */ "./node_modules/vue-spinners/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "MessagesAdminReport",
  components: {
    CircleSpinner: vue_spinners__WEBPACK_IMPORTED_MODULE_0__["CircleSpinner"]
  },
  data: function data() {
    return {
      title: 'Wiadomości',
      data: {},
      isLoading: false
    };
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      this.isLoading = true;
      this.$axios.get('admin/reports/messages').then(function (data) {
        _this.isLoading = false;
        _this.data = data.data;
      })["catch"](function (error) {
        _this.handleAjaxError(error);
      });
    }
  },
  created: function created() {
    this.loadData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/reports/OrdersAdminReport.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/reports/OrdersAdminReport.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_spinners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-spinners */ "./node_modules/vue-spinners/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "OrdersAdminReport",
  components: {
    CircleSpinner: vue_spinners__WEBPACK_IMPORTED_MODULE_0__["CircleSpinner"]
  },
  data: function data() {
    return {
      title: 'Zamówienia',
      data: {},
      isLoading: false
    };
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      this.isLoading = true;
      this.$axios.get('admin/reports/orders').then(function (data) {
        _this.isLoading = false;
        _this.data = data.data;
      })["catch"](function (error) {
        _this.handleAjaxError(error);
      });
    }
  },
  created: function created() {
    this.loadData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/reports/UsersAdminReport.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/reports/UsersAdminReport.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_spinners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-spinners */ "./node_modules/vue-spinners/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UsersAdminReport",
  components: {
    CircleSpinner: vue_spinners__WEBPACK_IMPORTED_MODULE_0__["CircleSpinner"]
  },
  data: function data() {
    return {
      title: 'Użytkownicy',
      data: {},
      isLoading: false
    };
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      this.isLoading = true;
      this.$axios.get('admin/reports/users').then(function (data) {
        _this.isLoading = false;
        _this.data = data.data;
      })["catch"](function (error) {
        return _this.handleAjaxError(error);
      });
    }
  },
  created: function created() {
    this.loadData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminPageIndex.vue?vue&type=template&id=e2a3bac2&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminPageIndex.vue?vue&type=template&id=e2a3bac2&scoped=true& ***!
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
  return _c("div", { staticClass: "admin-page" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" },
        [
          _c(
            "div",
            { staticClass: "admin-page-title" },
            [
              _vm._v(_vm._s(_vm.adminData.title) + " "),
              _c("router-link", {
                staticClass: "fa fa-edit",
                attrs: { to: { name: "AdminAccountSetting" } }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm.isLoading
            ? _c("circle-spinner", { attrs: { loading: _vm.isLoading } })
            : _vm._e(),
          _vm._v(" "),
          !_vm.isLoading
            ? _c("table", { staticClass: "table" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("tbody", [
                  _c("tr", [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v("Imię i nazwisko")
                    ]),
                    _c("td", [
                      _vm._v(
                        _vm._s(_vm.adminData.data.name) +
                          " " +
                          _vm._s(_vm.adminData.data.last_name)
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", { attrs: { scope: "row" } }, [_vm._v("E-mail")]),
                    _c("td", [_vm._v(_vm._s(_vm.adminData.data.email))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", { attrs: { scope: "row" } }, [_vm._v("Telefon")]),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          _vm.adminData.data.phone
                            ? _vm.adminData.data.phone
                            : "---"
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", { attrs: { scope: "row" } }, [_vm._v("Miasto")]),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          _vm.adminData.data.city
                            ? _vm.adminData.data.city
                            : "---"
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v("Kod pocztowy")
                    ]),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          _vm.adminData.data.post_code
                            ? _vm.adminData.data.post_code
                            : "---"
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", { attrs: { scope: "row" } }, [_vm._v("Adres")]),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          _vm.adminData.data.address
                            ? _vm.adminData.data.address
                            : "---"
                        )
                      )
                    ])
                  ])
                ])
              ])
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" },
        [_c("users-admin-report")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" },
        [_c("orders-admin-report")],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" },
        [_c("messages-admin-report")],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [_c("tr")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/reports/MessagesAdminReport.vue?vue&type=template&id=366d15e8&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/reports/MessagesAdminReport.vue?vue&type=template&id=366d15e8&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "admin-page-title" },
        [
          _vm._v("\n        " + _vm._s(_vm.title) + "\n        "),
          _c("router-link", {
            staticClass: "fa fa-eye",
            attrs: { to: { name: "AdminMessagesList" } }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.isLoading
        ? _c("circle-spinner", { attrs: { loading: _vm.isLoading } })
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c("table", { staticClass: "table" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [_vm._v("Łącznie")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.data.count_messages))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [_vm._v("Odczytane")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.data.count_reading_messages))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [_vm._v("Wysłane")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.data.count_send_messages))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [_vm._v("Otrzymane")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.data.count_received_messages))])
              ])
            ])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [_c("tr")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/reports/OrdersAdminReport.vue?vue&type=template&id=1c34c993&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/reports/OrdersAdminReport.vue?vue&type=template&id=1c34c993&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "admin-page-title" },
        [
          _vm._v("\n        " + _vm._s(_vm.title) + "\n        "),
          _c("router-link", {
            staticClass: "fa fa-eye",
            attrs: { to: { name: "AdminOrdersList" } }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.isLoading
        ? _c("circle-spinner", { attrs: { loading: _vm.isLoading } })
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c("table", { staticClass: "table" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [_vm._v("Łącznie")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.data.count_orders))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [_vm._v("Opłacone")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.data.count_orders_payment_finish))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [_vm._v("Zrealizowane")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.data.count_orders_finish))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [_vm._v("Zysk")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.data.count_orders_profit))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [_vm._v("Zwroty")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.data.count_returns))])
              ])
            ])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [_c("tr")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/reports/UsersAdminReport.vue?vue&type=template&id=7cfb8214&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/reports/UsersAdminReport.vue?vue&type=template&id=7cfb8214&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "admin-page-title" },
        [
          _vm._v("\n        " + _vm._s(_vm.title) + "\n        "),
          _c("router-link", {
            staticClass: "fa fa-eye",
            attrs: { to: { name: "AdminUsersList" } }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.isLoading
        ? _c("circle-spinner", { attrs: { loading: _vm.isLoading } })
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c("table", { staticClass: "table" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [_vm._v("Wszyscy")]),
                _c("td", [_vm._v(_vm._s(_vm.data.count_users))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [_vm._v("Aktywni")]),
                _c("td", [_vm._v(_vm._s(_vm.data.count_users_active))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [_vm._v("Zablokowani")]),
                _c("td", [_vm._v(_vm._s(_vm.data.count_users_lock))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [
                  _vm._v("Administratorzy")
                ]),
                _c("td", [_vm._v(_vm._s(_vm.data.count_users_admin))])
              ])
            ])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [_c("tr")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/AdminPageIndex.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/AdminPageIndex.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminPageIndex_vue_vue_type_template_id_e2a3bac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminPageIndex.vue?vue&type=template&id=e2a3bac2&scoped=true& */ "./resources/js/components/admin/AdminPageIndex.vue?vue&type=template&id=e2a3bac2&scoped=true&");
/* harmony import */ var _AdminPageIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminPageIndex.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminPageIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminPageIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminPageIndex_vue_vue_type_template_id_e2a3bac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminPageIndex_vue_vue_type_template_id_e2a3bac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e2a3bac2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminPageIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminPageIndex.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/AdminPageIndex.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPageIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminPageIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminPageIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPageIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AdminPageIndex.vue?vue&type=template&id=e2a3bac2&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminPageIndex.vue?vue&type=template&id=e2a3bac2&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPageIndex_vue_vue_type_template_id_e2a3bac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminPageIndex.vue?vue&type=template&id=e2a3bac2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminPageIndex.vue?vue&type=template&id=e2a3bac2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPageIndex_vue_vue_type_template_id_e2a3bac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPageIndex_vue_vue_type_template_id_e2a3bac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/reports/MessagesAdminReport.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/admin/reports/MessagesAdminReport.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MessagesAdminReport_vue_vue_type_template_id_366d15e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessagesAdminReport.vue?vue&type=template&id=366d15e8&scoped=true& */ "./resources/js/components/admin/reports/MessagesAdminReport.vue?vue&type=template&id=366d15e8&scoped=true&");
/* harmony import */ var _MessagesAdminReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessagesAdminReport.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/reports/MessagesAdminReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MessagesAdminReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MessagesAdminReport_vue_vue_type_template_id_366d15e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MessagesAdminReport_vue_vue_type_template_id_366d15e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "366d15e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/reports/MessagesAdminReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/reports/MessagesAdminReport.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/admin/reports/MessagesAdminReport.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessagesAdminReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessagesAdminReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/reports/MessagesAdminReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessagesAdminReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/reports/MessagesAdminReport.vue?vue&type=template&id=366d15e8&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/admin/reports/MessagesAdminReport.vue?vue&type=template&id=366d15e8&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessagesAdminReport_vue_vue_type_template_id_366d15e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessagesAdminReport.vue?vue&type=template&id=366d15e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/reports/MessagesAdminReport.vue?vue&type=template&id=366d15e8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessagesAdminReport_vue_vue_type_template_id_366d15e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessagesAdminReport_vue_vue_type_template_id_366d15e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/reports/OrdersAdminReport.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/admin/reports/OrdersAdminReport.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrdersAdminReport_vue_vue_type_template_id_1c34c993_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrdersAdminReport.vue?vue&type=template&id=1c34c993&scoped=true& */ "./resources/js/components/admin/reports/OrdersAdminReport.vue?vue&type=template&id=1c34c993&scoped=true&");
/* harmony import */ var _OrdersAdminReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrdersAdminReport.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/reports/OrdersAdminReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrdersAdminReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrdersAdminReport_vue_vue_type_template_id_1c34c993_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrdersAdminReport_vue_vue_type_template_id_1c34c993_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c34c993",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/reports/OrdersAdminReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/reports/OrdersAdminReport.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/admin/reports/OrdersAdminReport.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersAdminReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrdersAdminReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/reports/OrdersAdminReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersAdminReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/reports/OrdersAdminReport.vue?vue&type=template&id=1c34c993&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/admin/reports/OrdersAdminReport.vue?vue&type=template&id=1c34c993&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersAdminReport_vue_vue_type_template_id_1c34c993_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrdersAdminReport.vue?vue&type=template&id=1c34c993&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/reports/OrdersAdminReport.vue?vue&type=template&id=1c34c993&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersAdminReport_vue_vue_type_template_id_1c34c993_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersAdminReport_vue_vue_type_template_id_1c34c993_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/reports/UsersAdminReport.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/admin/reports/UsersAdminReport.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersAdminReport_vue_vue_type_template_id_7cfb8214_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersAdminReport.vue?vue&type=template&id=7cfb8214&scoped=true& */ "./resources/js/components/admin/reports/UsersAdminReport.vue?vue&type=template&id=7cfb8214&scoped=true&");
/* harmony import */ var _UsersAdminReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersAdminReport.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/reports/UsersAdminReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsersAdminReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsersAdminReport_vue_vue_type_template_id_7cfb8214_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsersAdminReport_vue_vue_type_template_id_7cfb8214_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7cfb8214",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/reports/UsersAdminReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/reports/UsersAdminReport.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/admin/reports/UsersAdminReport.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersAdminReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersAdminReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/reports/UsersAdminReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersAdminReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/reports/UsersAdminReport.vue?vue&type=template&id=7cfb8214&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/admin/reports/UsersAdminReport.vue?vue&type=template&id=7cfb8214&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersAdminReport_vue_vue_type_template_id_7cfb8214_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersAdminReport.vue?vue&type=template&id=7cfb8214&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/reports/UsersAdminReport.vue?vue&type=template&id=7cfb8214&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersAdminReport_vue_vue_type_template_id_7cfb8214_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersAdminReport_vue_vue_type_template_id_7cfb8214_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);