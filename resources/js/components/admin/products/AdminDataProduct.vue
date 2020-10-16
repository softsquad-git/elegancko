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
                            <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
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
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <input id="price" type="number" @input="handleInput" aria-label="Cena" v-model="data.price"
                               placeholder="Cena" class="form-control">
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
                            <b-form-file ref="file" multiple v-on:change="handleFileUpload()" id="file-default"></b-form-file>
                        </b-form-group>

                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-12">
                        <b-button variant="outline-secondary" type="submit">Zapisz</b-button>
                    </div>
                </div>
            </form>
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

export default {
    name: "AdminDataProduct",
    components: {
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
                type: ''
            },
            categories: [],
            sizes: [],
            colors: [],
            shipments: [],
            previousPrice: null
        }
    },
    methods: {
        save() {
            this.data.images = this.$refs.file.files;
            if (this.data.images.length > 0) {
                let formData = new FormData();
                for (let i = 0; i < this.data.images.length; i++) {
                    let image = this.data.images[i];
                    formData.append('images[' + i + ']', image, image.name);
                    formData.append('title', this.data.title);
                    formData.append('category_id', this.data.category_id);
                    formData.append('content', this.data.content);
                    formData.append('description', this.data.description);
                    formData.append('locale', this.data.locale);
                    formData.append('sizes', this.data.sizes);
                    formData.append('shipments', this.data.shipments);
                    formData.append('price', this.data.price);
                    formData.append('type', this.data.type);
                    formData.append('colors', this.data.colors);
                }
                return  this.saveData(formData)
            }
            return  this.saveData(this.data)
        },
        saveData(data) {
            this.$axios.post(this.$route.params.id ? `admin/products/update/${this.$route.params.id}` : 'admin/products/create', data)
                .then((data) => {
                    if (data.data.success === 1) {
                        this.$router.push({name: 'AdminProductsList'})
                    }
                })
                .catch((error) => {
                    //
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
                    //
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
        },
        loadDataColors() {
            this.$axios.get('admin/products/colors/all')
                .then((data) => {
                    this.colors = data.data.data
                })
        },
        loadDataShipments() {
            this.$axios.get('admin/shipments/all')
                .then((data) => {
                    this.shipments = data.data.data;
                })
        },
        handleInput(e) {
            let stringValue = e.target.value.toString()
            let regex = /^\d*(\.\d{1,2})?$/
            if (!stringValue.match(regex) && this.price !== '') {
                this.data.price = this.previousPrice
            }
            this.previousPrice = this.data.price
        },
        checkAction() {
            if (this.$route.params.id !== null) {
                this.$axios.get(`admin/products/find/${this.$route.params.id}`)
                    .then((data) => {
                        const product = data.data.data;
                        this.data.title = product.title;
                        this.data.category_id = product.category.id;
                        this.data.description = product.description;
                        this.data.content = product.content;
                        this.data.price = product.price.price;
                        this.data.locale = product.locale;
                        this.data.type = product.type;
                    })
            }
        }
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

</style>
