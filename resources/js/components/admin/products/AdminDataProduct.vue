<template>
    <div class="admin-page">
        <h4 class="title">
            {{ title }}
        </h4>
        <div class="options">
            <b-button @click="createShipmentModal" variant="outline-secondary"><span class="fa fa-shipping-fast"></span>
            </b-button>
            <b-button @click="createColorModal" variant="outline-secondary"><span class="fa fa-palette"></span>
            </b-button>
            <b-button @click="createSizeModal" variant="outline-secondary"><span class="fa fa-expand"></span></b-button>
            <b-button :to="{name: 'AdminProductsList'}" variant="outline-danger"><span class="fa fa-times"></span>
            </b-button>
        </div>
        <div class="content mt-4">
            <form @submit.prevent="save">
                <div class="form-group row">
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <input id="title" type="text" aria-label="Tytuł" placeholder="Tytuł" v-model="data.title"
                               class="form-control input-admin">
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <select id="category" aria-label="Kategoria" v-model="data.category_id"
                                class="form-control input-admin">
                            <option selected value="">Wybierz kategorię</option>
                            <option v-for="category in categories" v-if="category.parent_id === 0" :value="category.id"> {{ category.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-12">
                        <textarea id="description" placeholder="Krótki opis" v-model="data.description"
                                  aria-label="Kótki opis" class="form-control"></textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-12">
                        <quill-editor v-model="data.content"></quill-editor>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-xl-3 col-lg-3 col-md-3">
                        <select id="locale" aria-label="Wybierz język" v-model="data.locale" class="form-control">
                            <option value="" selected>Wybierz język</option>
                            <option value="pl">Polski</option>
                            <option value="en">Angielski</option>
                        </select>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3">
                        <select id="type" aria-label="Wybierz typ" v-model="data.type" class="form-control">
                            <option selected value="">Wybierz rodzaj</option>
                            <option value="1">Produkt standardowy</option>
                            <option value="2">Produkt w promocji</option>
                            <option value="3">Nowość</option>
                            <option value="4">Nowość w promocji</option>
                        </select>
                    </div>
                    <div v-if="data.type == 2 || data.type == 4" class="col-xl-2 col-lg-2 col-md-2 pl-0 pr-0">
                        <input id="old_price" type="text" @input="handleInput" aria-label="Poprzzednia cena"
                               v-model="data.old_price"
                               placeholder="Poprzednia cena" class="form-control">
                    </div>
                    <div class="pr-0" :class="priceCssClass">
                        <input id="price" type="text" @input="handleInput" aria-label="Cena" v-model="data.price"
                               placeholder="Cena" class="form-control">
                    </div>
                    <div class="pl-0" :class="priceCssClass">
                        <select id="currency" aria-label="Waluta" class="form-control" v-model="data.currency">
                            <option value="" selected>Waluta</option>
                            <option value="PLN">zł</option>
                            <option value="GPB">funt</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-xl-4 col-lg-4 col-md-4">
                        <label for="color">Kolor</label>
                        <multiselect
                            id="color"
                            v-model="data.colors"
                            :options="colors"
                            label="name"
                            :multiple="true"
                            track-by="id"
                            :close-on-select="false"
                        ></multiselect>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4">
                        <label for="size">Rozmiar</label>
                        <multiselect
                            id="size"
                            v-model="data.sizes"
                            :options="sizes"
                            label="name"
                            :close-on-select="false"
                            :multiple="true"
                            track-by="id"
                        ></multiselect>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4">
                        <label for="shipment">Wysyłka</label>
                        <multiselect
                            id="shipment"
                            v-model="data.shipments"
                            :options="shipments"
                            label="name"
                            :close-on-select="false"
                            :multiple="true"
                            track-by="id"
                        ></multiselect>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-12">
                        <b-form-group label="Dodaj zdjęcia:" label-for="file-default" label-cols-sm="2">
                            <b-form-file ref="file" multiple v-on:change="handleFileUpload()"
                                         id="file-default"></b-form-file>
                        </b-form-group>

                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-12">
                        <input id="meta-title" class="form-control" v-model="data.meta_title" aria-label="Meta title" placeholder="Meta tytuł">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-12">
                        <textarea id="meta-desc" class="form-control" v-model="data.meta_desc" aria-label="Meta opis" placeholder="Meta opis"></textarea>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-12">
                        <input id="meta-keywords" class="form-control" v-model="data.meta_keywords" aria-label="Meta słowa kluczowe" placeholder="Meta słowa kluczowe">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-12">
                        <b-button variant="outline-secondary" type="submit"><b-spinner v-if="loadSpinner" small></b-spinner> Zapisz</b-button>
                    </div>
                </div>
            </form>
            <div class="admin-product-images">
                <div v-if="productImages.length > 0" class="row">
                    <div class="col-12">
                        <b-button variant="outline-danger" class="btn-sm mb-2" @click="remove"
                                  v-if="productsIds.length > 0">
                            <b-spinner v-if="loadSpinnerImg" small></b-spinner> Usuń
                        </b-button>
                    </div>
                    <div v-for="image in productImages" class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
                        <div class="admin-product-image-bg" :style="'background: url('+image.src+')'">
                            <b-form-checkbox size="lg" v-model="productsIds" :value="image.id"></b-form-checkbox>
                        </div>
                    </div>
                </div>
                <no-data-component v-if="productImages.length < 1" :msg="'Brak dodanych zdjęć dla tego produktu'"/>
            </div>
        </div>
        <admin-size-create ref="createSize" @loadData="loadDataSizes"></admin-size-create>
        <admin-create-color ref="createColor" @loadData="loadDataColors"></admin-create-color>
        <admin-shipment-create ref="createShipment" @loadData="loadDataShipments"></admin-shipment-create>
    </div>
</template>

<script>
import 'vue-multiselect/dist/vue-multiselect.min.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import {quillEditor} from 'vue-quill-editor';
import AdminSizeCreate from "./sizes/AdminSizeCreate";
import AdminCreateColor from "./colors/AdminCreateColor";
import Multiselect from 'vue-multiselect'
import AdminShipmentCreate from "../shipments/AdminShipmentCreate";
import NoDataComponent from "../../NoDataComponent";

export default {
    name: "AdminDataProduct",
    components: {
        NoDataComponent,
        AdminShipmentCreate,
        AdminCreateColor,
        AdminSizeCreate,
        quillEditor,
        Multiselect
    },
    data() {
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
        }
    },
    methods: {
        save() {
            this.data.sizes = JSON.stringify(this.data.sizes);
            this.data.shipments = JSON.stringify(this.data.shipments);
            this.data.colors = JSON.stringify(this.data.colors);
            this.data.images = this.$refs.file.files;
            if (this.data.images.length > 0) {
                let formData = new FormData();
                for (let i = 0; i < this.data.images.length; i++) {
                    let image = this.data.images[i];
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

                return this.saveData(formData)
            }
            return this.saveData(this.data)
        },
        saveData(data) {
            this.loadSpinner = true;
            this.$axios.post(this.$route.params.id
                ? `admin/products/update/${this.$route.params.id}`
                : 'admin/products/create', data)
                .then((data) => {
                    this.loadSpinner = false;
                    if (data.data.success === 1) {
                        if (this.$route.params.action == 'edit') {
                            window.location.reload();
                        } else {
                            this.$router.push({name: 'AdminProductsList'})
                        }
                    }
                })
                .catch((error) => {
                    this.loadSpinner = false;
                    this.handleAjaxError(error)
                })
        },
        handleFileUpload() {
            this.data.images = this.$refs.file.files;
        },
        loadCategories() {
            this.$axios.get('categories/all')
                .then((data) => {
                    this.categories = data.data.data;
                })
                .catch((error) => {
                    this.handleAjaxError(error)
                })
        },
        createSizeModal() {
            this.$refs.createSize.openModal();
        },
        createColorModal() {
            this.$refs.createColor.openModal();
        },
        createShipmentModal() {
            this.$refs.createShipment.openModal();
        },
        loadDataSizes() {
            this.$axios.get('admin/products/sizes/all')
                .then((data) => {
                    this.sizes = data.data.data
                })
            .catch((error) => this.handleAjaxError(error))
        },
        loadDataColors() {
            this.$axios.get('admin/products/colors/all')
                .then((data) => {
                    this.colors = data.data.data
                }).catch((error) => this.handleAjaxError(error))
        },
        loadDataShipments() {
            this.$axios.get('admin/shipments/all')
                .then((data) => {
                    this.shipments = data.data.data;
                }).catch((error) => this.handleAjaxError(error))
        },
        handleInput(e) {
            let stringValue = e.target.value.toString()
            let regex = /^\d*(\.\d{1,2})?$/
            if (!stringValue.match(regex) && this.price !== '') {
                this.data.price = this.previousPrice
            }
            this.previousPrice = this.data.price
        },
        remove() {
            this.$confirm(
                {
                    message: `Na pewno chcesz usunąć zdjęcia?`,
                    button: {
                        no: 'Nie',
                        yes: 'Tak'
                    },
                    callback: confirm => {
                        if (confirm) {
                            this.loadSpinnerImg = true;
                            this.$axios.post(`admin/products/remove-images/${this.$route.params.id}`, this.productsIds)
                                .then((data) => {
                                    this.loadSpinnerImg = false;
                                    this.productsIds = [];
                                    if (data.data.success === 1) {
                                        this.checkAction();
                                        this.$notify({
                                            group: 'notification-success',
                                            title: 'Udało się',
                                            text: data.data.msg
                                        });
                                    }
                                }).catch((error) => {this.loadSpinnerImg = false; this.handleAjaxError(error)})
                        }
                    }
                }
            )
        },
        checkAction() {
            if (this.$route.params.id) {
                this.$axios.get(`admin/products/find/${this.$route.params.id}`)
                    .then((data) => {
                        const product = data.data.data;
                        this.productImages = data.data.data.images;
                        this.data.title = product.title;
                        this.data.category_id = product.category.id;
                        this.data.description = product.desc;
                        this.data.content = product.content;
                        this.data.price = product.price.price;
                        this.data.old_price = product.price.old;
                        this.data.type = product.type;
                        this.data.currency = product.price.currency;
                        this.data.locale = product.locale;
                        this.data.type = product.type.id;
                        this.data.sizes = product.sizes;
                        this.data.colors = product.colors;
                        this.data.shipments = product.shipments;
                        this.data.meta_title = product.meta.title;
                        this.data.meta_desc = product.meta.description;
                        this.data.meta_keywords = product.meta.keywords;
                    }).catch((error) => this.handleAjaxError(error))
            }
        }
    },
    computed: {
        priceCssClass() {
            if (this.data.type == 2 || this.data.type == 4) {
                return 'pl-0 col-xl-2 col-lg-2 col-md-2';
            }
            return 'col-xl-3 col-lg-3 col-md-3'
        },
    },
    created() {
        this.loadCategories();
        this.loadDataShipments();
        this.loadDataColors();
        this.loadDataSizes();
        this.checkAction();
        document.title = this.title;
    }
}
</script>

<style scoped>
.admin-product-image-bg {
    min-height: 400px;
    background-size: cover !important;
    padding: 5px 9px;
    margin-bottom: 25px;
}
</style>
