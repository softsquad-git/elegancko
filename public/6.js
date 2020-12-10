(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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
/* harmony import */ var _NoDataComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../NoDataComponent */ "./resources/js/components/NoDataComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    NoDataComponent: _NoDataComponent__WEBPACK_IMPORTED_MODULE_9__["default"],
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
        old_price: '',
        currency: '',
        type: '',
        meta_title: '',
        meta_desc: '',
        meta_keywords: ''
      },
      categories: [],
      sizes: [],
      colors: [],
      shipments: [],
      previousPrice: null,
      productImages: [],
      productsIds: [],
      loadSpinner: false,
      loadSpinnerImg: false
    };
  },
  methods: {
    save: function save() {
      this.data.sizes = JSON.stringify(this.data.sizes);
      this.data.shipments = JSON.stringify(this.data.shipments);
      this.data.colors = JSON.stringify(this.data.colors);
      this.data.images = this.$refs.file.files;

      if (this.data.images.length > 0) {
        var formData = new FormData();

        for (var i = 0; i < this.data.images.length; i++) {
          var image = this.data.images[i];
          formData.append('images[' + i + ']', image, image.name);
        }

        formData.append('title', this.data.title);
        formData.append('category_id', this.data.category_id);
        formData.append('content', this.data.content);
        formData.append('description', this.data.description);
        formData.append('locale', this.data.locale);
        formData.append('sizes', this.data.sizes);
        formData.append('shipments', this.data.shipments);
        formData.append('price', this.data.price);
        formData.append('old_price', this.data.old_price);
        formData.append('currency', this.data.currency);
        formData.append('type', this.data.type);
        formData.append('colors', this.data.colors);
        formData.append('meta_title', this.data.meta_title);
        formData.append('meta_desc', this.data.meta_desc);
        formData.append('meta_keywords', this.data.meta_keywords);
        return this.saveData(formData);
      }

      return this.saveData(this.data);
    },
    saveData: function saveData(data) {
      var _this = this;

      this.loadSpinner = true;
      this.$axios.post(this.$route.params.id ? "admin/products/update/".concat(this.$route.params.id) : 'admin/products/create', data).then(function (data) {
        _this.loadSpinner = false;

        if (data.data.success === 1) {
          if (_this.$route.params.action == 'edit') {
            window.location.reload();
          } else {
            _this.$router.push({
              name: 'AdminProductsList'
            });
          }
        }
      })["catch"](function (error) {
        _this.loadSpinner = false;

        _this.handleAjaxError(error);
      });
    },
    handleFileUpload: function handleFileUpload() {
      this.data.images = this.$refs.file.files;
    },
    loadCategories: function loadCategories() {
      var _this2 = this;

      this.$axios.get('categories/all').then(function (data) {
        _this2.categories = data.data.data;
      })["catch"](function (error) {
        _this2.handleAjaxError(error);
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
      })["catch"](function (error) {
        return _this3.handleAjaxError(error);
      });
    },
    loadDataColors: function loadDataColors() {
      var _this4 = this;

      this.$axios.get('admin/products/colors/all').then(function (data) {
        _this4.colors = data.data.data;
      })["catch"](function (error) {
        return _this4.handleAjaxError(error);
      });
    },
    loadDataShipments: function loadDataShipments() {
      var _this5 = this;

      this.$axios.get('admin/shipments/all').then(function (data) {
        _this5.shipments = data.data.data;
      })["catch"](function (error) {
        return _this5.handleAjaxError(error);
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
    remove: function remove() {
      var _this6 = this;

      this.$confirm({
        message: "Na pewno chcesz usun\u0105\u0107 zdj\u0119cia?",
        button: {
          no: 'Nie',
          yes: 'Tak'
        },
        callback: function callback(confirm) {
          if (confirm) {
            _this6.loadSpinnerImg = true;

            _this6.$axios.post("admin/products/remove-images/".concat(_this6.$route.params.id), _this6.productsIds).then(function (data) {
              _this6.loadSpinnerImg = false;
              _this6.productsIds = [];

              if (data.data.success === 1) {
                _this6.checkAction();

                _this6.$notify({
                  group: 'notification-success',
                  title: 'Udało się',
                  text: data.data.msg
                });
              }
            })["catch"](function (error) {
              _this6.loadSpinnerImg = false;

              _this6.handleAjaxError(error);
            });
          }
        }
      });
    },
    checkAction: function checkAction() {
      var _this7 = this;

      if (this.$route.params.id) {
        this.$axios.get("admin/products/find/".concat(this.$route.params.id)).then(function (data) {
          var product = data.data.data;
          _this7.productImages = data.data.data.images;
          _this7.data.title = product.title;
          _this7.data.category_id = product.category.id;
          _this7.data.description = product.desc;
          _this7.data.content = product.content;
          _this7.data.price = product.price.price;
          _this7.data.old_price = product.price.old;
          _this7.data.type = product.type;
          _this7.data.currency = product.price.currency;
          _this7.data.locale = product.locale;
          _this7.data.type = product.type.id;
          _this7.data.sizes = product.sizes;
          _this7.data.colors = product.colors;
          _this7.data.shipments = product.shipments;
          _this7.data.meta_title = product.meta.title;
          _this7.data.meta_desc = product.meta.description;
          _this7.data.meta_keywords = product.meta.keywords;
        })["catch"](function (error) {
          return _this7.handleAjaxError(error);
        });
      }
    }
  },
  computed: {
    priceCssClass: function priceCssClass() {
      if (this.data.type == 2 || this.data.type == 4) {
        return 'pl-0 col-xl-2 col-lg-2 col-md-2';
      }

      return 'col-xl-3 col-lg-3 col-md-3';
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
        name: '',
        locale: ''
      },
      action: false,
      colorId: '',
      loadSpinner: false
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      this.loadSpinner = true;
      var url = 'admin/products/colors/create';

      if (this.action === true) {
        url = "admin/products/colors/update/".concat(this.colorId);
      }

      this.$axios.post(url, this.data).then(function (data) {
        _this.loadSpinner = false;

        if (data.data.success === 1) {
          _this.data.hex = '';
          _this.data.name = '';

          _this.$emit('loadData');

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
        this.colorId = item.id;
        this.data.hex = item.hex;
        this.data.name = item.name;
        this.data.locale = item.locale_key;
      }

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
        name: '',
        locale: ''
      },
      action: false,
      sizeId: '',
      loadSpinner: false
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      this.loadSpinner = true;
      var url = 'admin/products/sizes/create';

      if (this.action === true) {
        url = "admin/products/sizes/update/".concat(this.sizeId);
      }

      this.$axios.post(url, this.data).then(function (data) {
        _this.loadSpinner = false;

        if (data.data.success === 1) {
          _this.$emit('loadData');

          _this.data.key = '';
          _this.data.name = '';

          _this.closeModal();
        }
      })["catch"](function (error) {
        _this.loadSpinner = false;

        _this.handleAjaxError(error);
      });
    },
    closeModal: function closeModal() {
      this.$refs['create-size'].hide();
    },
    openModal: function openModal() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (action === 'edit') {
        this.action = true;
        this.sizeId = item.id;
        this.data.name = item.name;
        this.data.key = item.key;
        this.data.locale = item.locale_key;
      }

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=style&index=0&id=60a98bc6&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=style&index=0&id=60a98bc6&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.admin-product-image-bg[data-v-60a98bc6] {\n    min-height: 400px;\n    background-size: cover !important;\n    padding: 5px 9px;\n    margin-bottom: 25px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=style&index=0&id=60a98bc6&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=style&index=0&id=60a98bc6&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDataProduct.vue?vue&type=style&index=0&id=60a98bc6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=style&index=0&id=60a98bc6&scoped=true&lang=css&");

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
                        return category.parent_id === 0
                          ? _c("option", { domProps: { value: category.id } }, [
                              _vm._v(" " + _vm._s(category.name))
                            ])
                          : _vm._e()
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
              _vm.data.type == 2 || _vm.data.type == 4
                ? _c(
                    "div",
                    { staticClass: "col-xl-2 col-lg-2 col-md-2 pl-0 pr-0" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.old_price,
                            expression: "data.old_price"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "old_price",
                          type: "text",
                          "aria-label": "Poprzzednia cena",
                          placeholder: "Poprzednia cena"
                        },
                        domProps: { value: _vm.data.old_price },
                        on: {
                          input: [
                            function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.data,
                                "old_price",
                                $event.target.value
                              )
                            },
                            _vm.handleInput
                          ]
                        }
                      })
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "pr-0", class: _vm.priceCssClass }, [
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pl-0", class: _vm.priceCssClass }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.currency,
                        expression: "data.currency"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "currency", "aria-label": "Waluta" },
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
                          "currency",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "", selected: "" } }, [
                      _vm._v("Waluta")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "PLN" } }, [_vm._v("zł")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "GPB" } }, [_vm._v("funt")])
                  ]
                )
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
            _c("div", { staticClass: "row form-group" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.meta_title,
                      expression: "data.meta_title"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "meta-title",
                    "aria-label": "Meta title",
                    placeholder: "Meta tytuł"
                  },
                  domProps: { value: _vm.data.meta_title },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "meta_title", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row form-group" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.meta_desc,
                      expression: "data.meta_desc"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "meta-desc",
                    "aria-label": "Meta opis",
                    placeholder: "Meta opis"
                  },
                  domProps: { value: _vm.data.meta_desc },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "meta_desc", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row form-group" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.meta_keywords,
                      expression: "data.meta_keywords"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "meta-keywords",
                    "aria-label": "Meta słowa kluczowe",
                    placeholder: "Meta słowa kluczowe"
                  },
                  domProps: { value: _vm.data.meta_keywords },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "meta_keywords", $event.target.value)
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
                  _c(
                    "b-button",
                    { attrs: { variant: "outline-secondary", type: "submit" } },
                    [
                      _vm.loadSpinner
                        ? _c("b-spinner", { attrs: { small: "" } })
                        : _vm._e(),
                      _vm._v(" Zapisz")
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "admin-product-images" },
          [
            _vm.productImages.length > 0
              ? _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _c(
                      "div",
                      { staticClass: "col-12" },
                      [
                        _vm.productsIds.length > 0
                          ? _c(
                              "b-button",
                              {
                                staticClass: "btn-sm mb-2",
                                attrs: { variant: "outline-danger" },
                                on: { click: _vm.remove }
                              },
                              [
                                _vm.loadSpinnerImg
                                  ? _c("b-spinner", { attrs: { small: "" } })
                                  : _vm._e(),
                                _vm._v(" Usuń\n                    ")
                              ],
                              1
                            )
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.productImages, function(image) {
                      return _c(
                        "div",
                        {
                          staticClass:
                            "col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "admin-product-image-bg",
                              style: "background: url(" + image.src + ")"
                            },
                            [
                              _c("b-form-checkbox", {
                                attrs: { size: "lg", value: image.id },
                                model: {
                                  value: _vm.productsIds,
                                  callback: function($$v) {
                                    _vm.productsIds = $$v
                                  },
                                  expression: "productsIds"
                                }
                              })
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
            _vm.productImages.length < 1
              ? _c("no-data-component", {
                  attrs: { msg: "Brak dodanych zdjęć dla tego produktu" }
                })
              : _vm._e()
          ],
          1
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
                  _vm._v(" Zapisz")
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
                  _vm._v(" Zapisz")
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
/* empty/unused harmony star reexport *//* harmony import */ var _AdminDataProduct_vue_vue_type_style_index_0_id_60a98bc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminDataProduct.vue?vue&type=style&index=0&id=60a98bc6&scoped=true&lang=css& */ "./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=style&index=0&id=60a98bc6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=style&index=0&id=60a98bc6&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=style&index=0&id=60a98bc6&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDataProduct_vue_vue_type_style_index_0_id_60a98bc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDataProduct.vue?vue&type=style&index=0&id=60a98bc6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/products/AdminDataProduct.vue?vue&type=style&index=0&id=60a98bc6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDataProduct_vue_vue_type_style_index_0_id_60a98bc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDataProduct_vue_vue_type_style_index_0_id_60a98bc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDataProduct_vue_vue_type_style_index_0_id_60a98bc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDataProduct_vue_vue_type_style_index_0_id_60a98bc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDataProduct_vue_vue_type_style_index_0_id_60a98bc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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