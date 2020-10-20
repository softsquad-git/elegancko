<template>
<div class="container single-product-page">
    <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="single-product-images" v-viewer>
                <img class="w-100" v-for="image in product.images" :src="image" alt="'sd">
            </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6">
            <h4 class="title">{{ product.title }}</h4>
            <span class="text-bold">Kategoria: </span><router-link :to="''">{{ product.category.name }}</router-link>
            <p class="desc">
                {{ product.desc }}
            </p>
            <div class="info">
                <span class="price"> {{ product.price.price }} {{ product.price.currency }}</span>
                <multiselect
                    class="select-option"
                    id="size"
                    v-model="data.size_id"
                    :options="product.sizes"
                    label="name"
                    :close-on-select="true"
                    :multiple="false"
                    placeholder="Wybierz rozmiar"
                    track-by="id"
                ></multiselect>
                <multiselect
                    class="select-option"
                    id="color"
                    v-model="data.color_id"
                    :options="product.colors"
                    label="name"
                    :close-on-select="true"
                    :multiple="false"
                    placeholder="Wybierz kolor"
                    track-by="id"
                ></multiselect>
            </div>
            <div class="row mt-4">
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <button @click="addBasket" class="btn btn-outline-success w-100">Dodaj do koszyka</button>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <button @click="finalize" class="btn btn-outline-success w-100">Kup teraz</button>
                </div>
            </div>
            <div class="row">
                <div class="col-12 mt-4">
                    <p v-html="product.content"></p>
                </div>
            </div>
        </div>
    </div>
    <div v-if="relatedProducts.length > 0" class="row mt-5 mb-5">
        <div class="col-12">
            <h4 class="title mb-2">W tej samej kategorii</h4>
        </div>
        <div v-for="item in relatedProducts" class="col-xl-3 col-lg-3 col-md-3">
            <div class="single-product">
                <router-link
                    :to="{name: 'ProductShow', params: {id: item.id, title: item.title}}">
                    <img :src="item.image" class="product-image-photo" height="600"
                         :alt="item.title">
                </router-link>
                <router-link
                    :to="{name: 'ProductShow', params: {id: item.id, title: item.title}}">
                    {{ item.title }}
                </router-link>
                <div class="footer">
                            <span class="text-bold">
                                {{ item.price.price }} {{ item.price.currency }}
                            </span>
                    <span class="fa fa-heart-o"></span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import 'vue-multiselect/dist/vue-multiselect.min.css'
import 'viewerjs/dist/viewer.css'
import Multiselect from 'vue-multiselect'
import Viewer from 'v-viewer'
import Vue from 'vue'
Vue.use(Viewer)

export default {
    name: "Show",
    components: {
        Multiselect
    },
    data() {
        return {
            product: {},
            data: {
                color_id: '',
                size_id: '',
                product_id: ''
            },
            relatedProducts: []
        }
    },
    methods: {
        getProduct() {
            const id = this.$route.params.id;
            this.$axios.get(`front/products/find/${id}`)
                .then((data) => {
                    this.product = data.data.data;
                })
        },
        addBasket() {
            this.data.product_id = this.$route.params.id;
            this.data.color_id = this.data.color_id.id;
            this.data.size_id = this.data.size_id.id;
            if (localStorage.getItem('token') !== null) {
                this.$axios.post('basket/create', this.data)
                .then((data) => {
                    if (data.data.success === 1) {
                        this.data.color_id = '';
                        this.data.size_id = '';
                        alert('Dodano do koszyka')
                    }
                })
            } else {
                this.$store.commit('addToCart', this.data)
            }
        },
        finalize() {

        },
        getRelatedProducts() {
            this.$axios.get(`front/products/all?category_id=${1}&pagination=4`)
            .then((data) => {
                this.relatedProducts = data.data.data;
                console.log(data.data.data)
            })
        }
    },
    created() {
        this.getProduct();
        this.getRelatedProducts()
    }
}
</script>

<style scoped>
.single-product-page .price {
    font-size: 25px;
    margin-bottom: 22px;
    display: inline-block;
}
.select-option {
    margin-bottom: 10px;
}
.multiselect__tags {
    border:0!important;
}
.single-product-images {
    max-height: 600px;
    overflow: hidden;
}
.desc{
    margin-top: 10px;
}
</style>
