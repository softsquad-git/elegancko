(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/categories/AdminDataCategory.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/categories/AdminDataCategory.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_products_Index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/products/Index */ "./resources/js/components/pages/products/Index.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AdminDataCategory",
  components: {
    Index: _pages_products_Index__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      title: 'Dodaj kategorię',
      categories: [],
      data: {
        name: '',
        alias: '',
        parent_id: '',
        is_active: '',
        position: '',
        locale: '',
        image: null,
        meta: {
          title: '',
          description: '',
          keywords: ''
        }
      }
    };
  },
  methods: {
    save: function save() {
      this.data.image = this.$refs.files.files;

      if (this.data.image !== null && this.data.image.length > 0) {
        var formData = new FormData();
        var image = this.data.image;
        formData.append('image', image[0], image.name);
        formData.append('name', this.data.name);
        formData.append('alias', this.data.alias);
        formData.append('parent_id', this.data.parent_id);
        formData.append('is_active', this.data.is_active);
        formData.append('position', this.data.position);
        formData.append('locale', this.data.locale);
        formData.append('meta', this.data.meta);
        return this.saveData(formData);
      } else {
        return this.saveData(this.data);
      }
    },
    saveData: function saveData(data) {
      var _this = this;

      var url = 'admin/categories/create';

      if (this.$route.params.id) {
        url = "admin/categories/update/".concat(this.$route.params.id);
      }

      this.$axios.post(url, data).then(function (data) {
        if (data.data.success === 1) {
          _this.$router.push({
            name: 'AdminCategoriesList'
          });

          _this.data.name = '';
          _this.data.alias = '';
          _this.data.is_active = '';
          _this.data.position = '';
          _this.data.locale = '';
        }
      })["catch"](function (error) {//
      });
    }
  },
  created: function created() {
    var _this2 = this;

    this.$axios.get("admin/categories/all?parent_id=0").then(function (data) {
      _this2.categories = data.data.data;
    });

    if (this.$route.params.id) {
      this.$axios.get("admin/categories/find/".concat(this.$route.params.id)).then(function (data) {
        var category = data.data.data;
        _this2.data.name = category.name;
        _this2.data.parent_id = category.parent_id === 0 ? '' : category.parent_id;
        _this2.data.alias = category.alias;
        _this2.data.locale = category.locale;
        _this2.data.is_active = category.is_active;
        _this2.data.position = category.position === null ? '' : category.position;
        _this2.data.meta.title = category.meta.title;
        _this2.data.meta.description = category.meta.description;
        _this2.data.meta.keywords = category.meta.keywords;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/categories/AdminDataCategory.vue?vue&type=template&id=c58732a2&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/categories/AdminDataCategory.vue?vue&type=template&id=c58732a2&scoped=true& ***!
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
              to: { name: "AdminDataCategoriesList" },
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
          staticClass: "mt-5",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.save($event)
            }
          }
        },
        [
          _c("div", { staticClass: "row form-group" }, [
            _c("div", { staticClass: "col-xl-4 col-lg-4 col-md-4" }, [
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
            _c("div", { staticClass: "col-xl-4 col-lg-4 col-md-4" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.data.alias,
                    expression: "data.alias"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "alias",
                  type: "text",
                  placeholder: "Alias",
                  "aria-label": "Alias"
                },
                domProps: { value: _vm.data.alias },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.data, "alias", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-4 col-lg-4 col-md-4" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.parent_id,
                      expression: "data.parent_id"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "parent", "aria-label": "Kategoria nadrzędna" },
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
                        "parent_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { selected: "", value: "" } }, [
                    _vm._v("Wybierz kategorię nadrzędną")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.categories, function(category) {
                    return _c("option", { domProps: { value: category.id } }, [
                      _vm._v(_vm._s(category.name))
                    ])
                  })
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row form-group" }, [
            _c("div", { staticClass: "col-xl-4 col-lg-4 col-md-4" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.is_active,
                      expression: "data.is_active"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "is_active", "aria-label": "Aktywna" },
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
                        "is_active",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { selected: "", value: "" } }, [
                    _vm._v("Aktywna?")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "1" } }, [_vm._v("Tak")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "0" } }, [_vm._v("Nie")])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-4 col-lg-4 col-md-4" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.position,
                      expression: "data.position"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "position", "aria-label": "Pozycja" },
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
                        "position",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { selected: "", value: "" } }, [
                    _vm._v("Pozycja")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "1" } }, [_vm._v("Ogólna")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "2" } }, [
                    _vm._v("Na stronie głównej")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-4 col-lg-4 col-md-4" }, [
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
                  _c("option", { attrs: { selected: "", value: "" } }, [
                    _vm._v("Wybierz język")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "pl" } }, [_vm._v("Polski")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "en" } }, [
                    _vm._v("Angielski")
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row form-group" }, [
            _c(
              "div",
              { staticClass: "col-12" },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      label: "Wbierz zdjęcie:",
                      "label-for": "file-default",
                      "label-cols-sm": "2"
                    }
                  },
                  [
                    _c("b-form-file", {
                      ref: "files",
                      attrs: { id: "file-default" }
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
                    value: _vm.data.meta.title,
                    expression: "data.meta.title"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "meta-title",
                  "aria-label": "Meta title",
                  placeholder: "Meta tytuł"
                },
                domProps: { value: _vm.data.meta.title },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.data.meta, "title", $event.target.value)
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
                    value: _vm.data.meta.description,
                    expression: "data.meta.description"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "meta-desc",
                  "aria-label": "Meta opis",
                  placeholder: "Meta opis"
                },
                domProps: { value: _vm.data.meta.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.data.meta, "description", $event.target.value)
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
                    value: _vm.data.meta.keywords,
                    expression: "data.meta.keywords"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "meta-keywords",
                  "aria-label": "Meta słowa kluczowe",
                  placeholder: "Meta słowa kluczowe"
                },
                domProps: { value: _vm.data.meta.keywords },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.data.meta, "keywords", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row form-group" }, [
            _c(
              "div",
              { staticClass: "col-12" },
              [
                _c(
                  "b-button",
                  { attrs: { type: "submit", variant: "outline-secondary" } },
                  [_vm._v("Zapisz")]
                )
              ],
              1
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/categories/AdminDataCategory.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/admin/categories/AdminDataCategory.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminDataCategory_vue_vue_type_template_id_c58732a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminDataCategory.vue?vue&type=template&id=c58732a2&scoped=true& */ "./resources/js/components/admin/categories/AdminDataCategory.vue?vue&type=template&id=c58732a2&scoped=true&");
/* harmony import */ var _AdminDataCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminDataCategory.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/categories/AdminDataCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminDataCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminDataCategory_vue_vue_type_template_id_c58732a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminDataCategory_vue_vue_type_template_id_c58732a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c58732a2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/categories/AdminDataCategory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/categories/AdminDataCategory.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/admin/categories/AdminDataCategory.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDataCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDataCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/categories/AdminDataCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDataCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/categories/AdminDataCategory.vue?vue&type=template&id=c58732a2&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/admin/categories/AdminDataCategory.vue?vue&type=template&id=c58732a2&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDataCategory_vue_vue_type_template_id_c58732a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDataCategory.vue?vue&type=template&id=c58732a2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/categories/AdminDataCategory.vue?vue&type=template&id=c58732a2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDataCategory_vue_vue_type_template_id_c58732a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDataCategory_vue_vue_type_template_id_c58732a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);