(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css");
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill/dist/quill.bubble.css */ "./node_modules/quill/dist/quill.bubble.css");
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sizes_AdminSizeCreate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sizes/AdminSizeCreate */ "./resources/js/components/admin/products/sizes/AdminSizeCreate.vue");
/* harmony import */ var _colors_AdminCreateColor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colors/AdminCreateColor */ "./resources/js/components/admin/products/colors/AdminCreateColor.vue");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shipments_AdminShipmentCreate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shipments/AdminShipmentCreate */ "./resources/js/components/admin/shipments/AdminShipmentCreate.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AdminDataProduct",
  components: {
    AdminShipmentCreate: _shipments_AdminShipmentCreate__WEBPACK_IMPORTED_MODULE_8__["default"],
    AdminCreateColor: _colors_AdminCreateColor__WEBPACK_IMPORTED_MODULE_6__["default"],
    AdminSizeCreate: _sizes_AdminSizeCreate__WEBPACK_IMPORTED_MODULE_5__["default"],
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_4__["quillEditor"],
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_7___default.a
  },
  data: function data() {
    return {
      title: 'Dodaj produkt',
      data: {
        title: '',
        category_id: '',
        content: '',
        description: '',
        locale: '',
        colors: [],
        sizes: [],
        shipments: [],
        images: [],
        price: '',
        type: ''
      },
      categories: [],
      sizes: [],
      colors: [],
      shipments: [],
      previousPrice: null
    };
  },
  methods: {
    save: function save() {
      this.data.images = this.$refs.file.files;

      if (this.data.images.length > 0) {
        var formData = new FormData();

        for (var i = 0; i < this.data.images.length; i++) {
          var image = this.data.images[i];
          formData.append('images[' + i + ']', image, image.name);
          formData.append('title', this.data.title);
          formData.append('category_id', this.data.category_id);
          formData.append('content', this.data.content);
          formData.append('description', this.data.description);
          formData.append('locale', this.data.locale);
          formData.append('sizes', JSON.stringify(this.data.sizes));
          formData.append('shipments', JSON.stringify(this.data.shipments));
          formData.append('price', this.data.price);
          formData.append('type', this.data.type);
          formData.append('colors', JSON.stringify(this.data.colors));
        }

        return this.saveData(formData);
      }

      return this.saveData(this.data);
    },
    saveData: function saveData(data) {
      var _this = this;

      this.$axios.post(this.$route.params.id ? "admin/products/update/".concat(this.$route.params.id) : 'admin/products/create', data).then(function (data) {
        if (data.data.success === 1) {
          _this.$router.push({
            name: 'AdminProductsList'
          });
        }
      })["catch"](function (error) {//
      });
    },
    handleFileUpload: function handleFileUpload() {
      this.data.images = this.$refs.file.files;
    },
    loadCategories: function loadCategories() {
      var _this2 = this;

      this.$axios.get('categories/all').then(function (data) {
        _this2.categories = data.data.data;
      })["catch"](function (error) {//
      });
    },
    createSizeModal: function createSizeModal() {
      this.$refs.createSize.openModal();
    },
    createColorModal: function createColorModal() {
      this.$refs.createColor.openModal();
    },
    createShipmentModal: function createShipmentModal() {
      this.$refs.createShipment.openModal();
    },
    loadDataSizes: function loadDataSizes() {
      var _this3 = this;

      this.$axios.get('admin/products/sizes/all').then(function (data) {
        _this3.sizes = data.data.data;
      });
    },
    loadDataColors: function loadDataColors() {
      var _this4 = this;

      this.$axios.get('admin/products/colors/all').then(function (data) {
        _this4.colors = data.data.data;
      });
    },
    loadDataShipments: function loadDataShipments() {
      var _this5 = this;

      this.$axios.get('admin/shipments/all').then(function (data) {
        _this5.shipments = data.data.data;
      });
    },
    handleInput: function handleInput(e) {
      var stringValue = e.target.value.toString();
      var regex = /^\d*(\.\d{1,2})?$/;

      if (!stringValue.match(regex) && this.price !== '') {
        this.data.price = this.previousPrice;
      }

      this.previousPrice = this.data.price;
    },
    checkAction: function checkAction() {
      var _this6 = this;

      if (this.$route.params.id !== null) {
        this.$axios.get("admin/products/find/".concat(this.$route.params.id)).then(function (data) {
          var product = data.data.data;
          _this6.data.title = product.title;
          _this6.data.category_id = product.category.id;
          _this6.data.description = product.description;
          _this6.data.content = product.content;
          _this6.data.price = product.price.price;
          _this6.data.locale = product.locale;
          _this6.data.type = product.type;
        });
      }
    }
  },
  created: function created() {
    this.loadCategories();
    this.loadDataShipments();
    this.loadDataColors();
    this.loadDataSizes();
    this.checkAction();
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdminCreateColor",
  data: function data() {
    return {
      title: '',
      data: {
        hex: '',
        name: ''
      }
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      console.log(this.data);
      this.$axios.post('admin/products/colors/create', this.data).then(function (data) {
        if (data.data.success === 1) {
          _this.data.hex = '';
          _this.data.name = '';

          _this.$emit('loadData');

          _this.closeModal();
        }
      });
    },
    openModal: function openModal() {
      this.$refs['create-color'].show();
    },
    closeModal: function closeModal() {
      this.$refs['create-color'].hide();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/sizes/AdminSizeCreate.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/sizes/AdminSizeCreate.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdminSizeCreate",
  data: function data() {
    return {
      title: 'Dodaj rozmiar',
      data: {
        key: '',
        name: ''
      }
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      this.$axios.post('admin/products/sizes/create', this.data).then(function (data) {
        if (data.data.success === 1) {
          _this.$emit('loadData');

          _this.data.key = '';
          _this.data.name = '';

          _this.closeModal();
        }
      });
    },
    closeModal: function closeModal() {
      this.$refs['create-size'].hide();
    },
    openModal: function openModal() {
      this.$refs['create-size'].show();
    }
  }
});

/***/ }),

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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdminShipmentCreate",
  data: function data() {
    return {
      title: 'Dodaj opcję wysyłki',
      data: {
        name: '',
        price: '',
        locale: ''
      }
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      this.$axios.post('admin/shipments/create', this.data).then(function (data) {
        if (data.data.success === 1) {
          _this.$emit('loadData');

          _this.data.name = '';
          _this.data.price = '';
          _this.data.locale = '';

          _this.closeModal();
        }
      });
    },
    openModal: function openModal() {
      this.$refs['create-shipment'].show();
    },
    closeModal: function closeModal() {
      this.$refs['create-shipment'].hide();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=template&id=60a98bc6&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=template&id=60a98bc6&scoped=true& ***!
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
    { staticClass: "admin-page" },
    [
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
              on: { click: _vm.createShipmentModal }
            },
            [_c("span", { staticClass: "fa fa-shipping-fast" })]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              attrs: { variant: "outline-secondary" },
              on: { click: _vm.createColorModal }
            },
            [_c("span", { staticClass: "fa fa-palette" })]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              attrs: { variant: "outline-secondary" },
              on: { click: _vm.createSizeModal }
            },
            [_c("span", { staticClass: "fa fa-expand" })]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              attrs: {
                to: { name: "AdminProductsList" },
                variant: "outline-danger"
              }
            },
            [_c("span", { staticClass: "fa fa-times" })]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "content mt-4" }, [
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
                  staticClass: "col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12"
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.title,
                        expression: "data.title"
                      }
                    ],
                    staticClass: "form-control input-admin",
                    attrs: {
                      id: "title",
                      type: "text",
                      "aria-label": "Tytuł",
                      placeholder: "Tytuł"
                    },
                    domProps: { value: _vm.data.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data, "title", $event.target.value)
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
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.category_id,
                          expression: "data.category_id"
                        }
                      ],
                      staticClass: "form-control input-admin",
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
                            _vm.data,
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
                      value: _vm.data.description,
                      expression: "data.description"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "description",
                    placeholder: "Krótki opis",
                    "aria-label": "Kótki opis"
                  },
                  domProps: { value: _vm.data.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "description", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "div",
                { staticClass: "col-12" },
                [
                  _c("quill-editor", {
                    model: {
                      value: _vm.data.content,
                      callback: function($$v) {
                        _vm.$set(_vm.data, "content", $$v)
                      },
                      expression: "data.content"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c("div", { staticClass: "col-xl-3 col-lg-3 col-md-3" }, [
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
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "", selected: "" } }, [
                      _vm._v("Wybierz język")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "pl" } }, [
                      _vm._v("Polski")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "en" } }, [
                      _vm._v("Angielski")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-3 col-lg-3 col-md-3" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.type,
                        expression: "data.type"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "type", "aria-label": "Wybierz typ" },
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
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("Produkt standardowy")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Produkt w promocji")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [_vm._v("Nowość")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "4" } }, [
                      _vm._v("Nowość w promocji")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-6 col-lg-6 col-md-6" }, [
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
                    type: "number",
                    "aria-label": "Cena",
                    placeholder: "Cena"
                  },
                  domProps: { value: _vm.data.price },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data, "price", $event.target.value)
                      },
                      _vm.handleInput
                    ]
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "div",
                { staticClass: "col-xl-4 col-lg-4 col-md-4" },
                [
                  _c("label", { attrs: { for: "color" } }, [_vm._v("Kolor")]),
                  _vm._v(" "),
                  _c("multiselect", {
                    attrs: {
                      id: "color",
                      options: _vm.colors,
                      label: "name",
                      multiple: true,
                      "track-by": "id",
                      "close-on-select": false
                    },
                    model: {
                      value: _vm.data.colors,
                      callback: function($$v) {
                        _vm.$set(_vm.data, "colors", $$v)
                      },
                      expression: "data.colors"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-xl-4 col-lg-4 col-md-4" },
                [
                  _c("label", { attrs: { for: "size" } }, [_vm._v("Rozmiar")]),
                  _vm._v(" "),
                  _c("multiselect", {
                    attrs: {
                      id: "size",
                      options: _vm.sizes,
                      label: "name",
                      "close-on-select": false,
                      multiple: true,
                      "track-by": "id"
                    },
                    model: {
                      value: _vm.data.sizes,
                      callback: function($$v) {
                        _vm.$set(_vm.data, "sizes", $$v)
                      },
                      expression: "data.sizes"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-xl-4 col-lg-4 col-md-4" },
                [
                  _c("label", { attrs: { for: "shipment" } }, [
                    _vm._v("Wysyłka")
                  ]),
                  _vm._v(" "),
                  _c("multiselect", {
                    attrs: {
                      id: "shipment",
                      options: _vm.shipments,
                      label: "name",
                      "close-on-select": false,
                      multiple: true,
                      "track-by": "id"
                    },
                    model: {
                      value: _vm.data.shipments,
                      callback: function($$v) {
                        _vm.$set(_vm.data, "shipments", $$v)
                      },
                      expression: "data.shipments"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "div",
                { staticClass: "col-12" },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Dodaj zdjęcia:",
                        "label-for": "file-default",
                        "label-cols-sm": "2"
                      }
                    },
                    [
                      _c("b-form-file", {
                        ref: "file",
                        attrs: { multiple: "", id: "file-default" },
                        on: {
                          change: function($event) {
                            return _vm.handleFileUpload()
                          }
                        }
                      })
                    ],
                    1
                  )
                ],
                1
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
                    { attrs: { variant: "outline-secondary", type: "submit" } },
                    [_vm._v("Zapisz")]
                  )
                ],
                1
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("admin-size-create", {
        ref: "createSize",
        on: { loadData: _vm.loadDataSizes }
      }),
      _vm._v(" "),
      _c("admin-create-color", {
        ref: "createColor",
        on: { loadData: _vm.loadDataColors }
      }),
      _vm._v(" "),
      _c("admin-shipment-create", {
        ref: "createShipment",
        on: { loadData: _vm.loadDataShipments }
      })
    ],
    1
  )
}
var staticRenderFns = []
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
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c(
                "b-button",
                { attrs: { variant: "outline-secondary", type: "submit" } },
                [_vm._v("Zapisz")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/sizes/AdminSizeCreate.vue?vue&type=template&id=30686e8f&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/sizes/AdminSizeCreate.vue?vue&type=template&id=30686e8f&scoped=true& ***!
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
  return _c(
    "b-modal",
    { ref: "create-size", attrs: { "hide-footer": "", title: _vm.title } },
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
                  value: _vm.data.key,
                  expression: "data.key"
                }
              ],
              staticClass: "form-control",
              attrs: {
                id: "key",
                type: "text",
                placeholder: "Klucz",
                "aria-label": "Klucz"
              },
              domProps: { value: _vm.data.key },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.data, "key", $event.target.value)
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
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c(
                "b-button",
                { attrs: { variant: "outline-secondary", type: "submit" } },
                [_vm._v("Zapisz")]
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
                [_vm._v("Zapisz")]
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

/***/ "./resources/js/components/admin/products/AdminDataProduct.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/admin/products/AdminDataProduct.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminDataProduct_vue_vue_type_template_id_60a98bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminDataProduct.vue?vue&type=template&id=60a98bc6&scoped=true& */ "./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=template&id=60a98bc6&scoped=true&");
/* harmony import */ var _AdminDataProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminDataProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminDataProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminDataProduct_vue_vue_type_template_id_60a98bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminDataProduct_vue_vue_type_template_id_60a98bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "60a98bc6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/products/AdminDataProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDataProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDataProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDataProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=template&id=60a98bc6&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=template&id=60a98bc6&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDataProduct_vue_vue_type_template_id_60a98bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDataProduct.vue?vue&type=template&id=60a98bc6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=template&id=60a98bc6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDataProduct_vue_vue_type_template_id_60a98bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDataProduct_vue_vue_type_template_id_60a98bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/components/admin/products/sizes/AdminSizeCreate.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/admin/products/sizes/AdminSizeCreate.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminSizeCreate_vue_vue_type_template_id_30686e8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminSizeCreate.vue?vue&type=template&id=30686e8f&scoped=true& */ "./resources/js/components/admin/products/sizes/AdminSizeCreate.vue?vue&type=template&id=30686e8f&scoped=true&");
/* harmony import */ var _AdminSizeCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminSizeCreate.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/products/sizes/AdminSizeCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminSizeCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminSizeCreate_vue_vue_type_template_id_30686e8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminSizeCreate_vue_vue_type_template_id_30686e8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "30686e8f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/products/sizes/AdminSizeCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/products/sizes/AdminSizeCreate.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/admin/products/sizes/AdminSizeCreate.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSizeCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminSizeCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/sizes/AdminSizeCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSizeCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/products/sizes/AdminSizeCreate.vue?vue&type=template&id=30686e8f&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/products/sizes/AdminSizeCreate.vue?vue&type=template&id=30686e8f&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSizeCreate_vue_vue_type_template_id_30686e8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminSizeCreate.vue?vue&type=template&id=30686e8f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/sizes/AdminSizeCreate.vue?vue&type=template&id=30686e8f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSizeCreate_vue_vue_type_template_id_30686e8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSizeCreate_vue_vue_type_template_id_30686e8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);