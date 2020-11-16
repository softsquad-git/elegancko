<template>
<div class="container single-product-page">
    <div class="row mb-2">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <viewer :images="product.images">
                <div class="row">
                    <div class="col-4 p-1" v-for="image in product.images" :key="image.src">
                        <img class="w-100 product-show-image img-thumbnail" :alt="image.src" :src="image.src">
                    </div>
                </div>
            </viewer>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h4 class="title">{{ product.title }}</h4>
            <div><span class="text-bold">{{ $t('page.product.category') }}: </span><router-link :to="{name: 'ProductsIndex', params: {category: product.category.alias }}">{{ product.category.name }}</router-link></div>
            <p class="desc">
                {{ product.desc }}
            </p>
            <div class="info">
                <span class="price"> <del v-if="product.price.old">{{product.price.old}}</del> {{ product.price.price }}  {{ product.price.currency }}</span>
                <multiselect
                    class="select-option"
                    id="size"
                    v-model="data.size"
                    :options="product.sizes"
                    label="name"
                    :close-on-select="true"
                    :multiple="false"
                    :placeholder="$t('page.product.select_size')"
                    track-by="id"
                ></multiselect>
                <multiselect
                    class="select-option"
                    id="color"
                    v-model="data.color"
                    :options="product.colors"
                    label="name"
                    :close-on-select="true"
                    :multiple="false"
                    :placeholder="$t('page.product.select_color')"
                    track-by="id"
                ></multiselect>
            </div>
            <div class="row mt-4">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <b-button variant="outline-secondary" @click="addBasket" class="w-100 br-0 margin-bottom-15">{{ $t('page.product.add_basket') }}</b-button>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <b-button variant="outline-secondary" @click="finalize" class="w-100 br-0">{{ $t('page.product.buy_now') }}</b-button>
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
            <h4 class="title mb-2">{{ $t('page.product.in_some_category') }} <b-spinner v-if="isLoadingRelatedProduct" class="float-right" small :label="$t('page.product.loading_related_product')"></b-spinner></h4>
        </div>
        <div v-for="item in relatedProducts" class="col-xl-3 col-lg-3 col-md-3">
            <div class="single-product">
                <router-link
                    :to="{name: 'ProductShow', params: {id: item.id, title: item.title}}">
                    <div class="product-image-photo" :style="'background: url('+item.image+')'"></div>
                </router-link>
                <router-link
                    :to="{name: 'ProductShow', params: {id: item.id, title: item.title}}">
                    {{ item.title }}
                </router-link>
                <div class="footer">
                            <span class="text-bold">
                                {{ item.price.price }} {{ item.price.currency }}
                            </span>
                </div>
            </div>
        </div>
    </div>
    <meta-component
        :title="product.meta.title"
        :description="product.meta.description"
        :keywords="product.meta.keywords"
        type="ITEM"
    />
</div>
</template>

<script>
import 'vue-multiselect/dist/vue-multiselect.min.css'
import 'viewerjs/dist/viewer.css'
import Multiselect from 'vue-multiselect'
import Viewer from 'v-viewer'
import Vue from 'vue'
import MetaComponent from "../MetaComponent";
import { mapGetters } from 'vuex'
Vue.use(Viewer)

export default {
    name: "Show",
    components: {
        MetaComponent,
        Multiselect
    },
    data() {
        return {
            product: {},
            data: {
                color: '',
                size: '',
                product: '',
                quantity: 1
            },
            relatedProducts: [],
            isLoadingRelatedProduct: false
        }
    },
    computed: {
      ...mapGetters({
          StoreCart: 'StoreCart'
      })
    },
    methods: {
        getProduct() {
            this.$Progress.start();
            const id = this.$route.params.id;
            this.$axios.get(`front/products/find/${id}`)
                .then((data) => {
                    this.$Progress.finish();
                    this.product = data.data.data;
                }).catch((error) => this.handleAjaxError(error))
        },
        addBasket() {
            this.data.product = this.product;
            this.$store.dispatch('addItem', this.data);
        },
        finalize() {
            if (this.data.size !== '' && this.data.color !== '') {
                return this.$router.push({name: 'OrderPage', params: {product_id: this.$route.params.id, size_id: this.data.size.id, color_id: this.data.color.id}})
            } else {
                alert('Wypełnij pola')
            }
        },
        getRelatedProducts() {
            this.isLoadingRelatedProduct = true;
            this.$axios.get(`front/products/all?category_id=${1}&pagination=4`)
            .then((data) => {
                this.isLoadingRelatedProduct = false;
                this.relatedProducts = data.data.data;
            }).catch((error) => {
                this.isLoadingRelatedProduct = false;
                this.handleAjaxError(error)
            })
        }
    },
    watch: {
        '$route.params.id' () {
            this.getProduct();
        },
        StoreCart() {
            this.$notify({
                group: 'notification-success',
                title: 'Udało się',
                text: 'Produkt został dodany do koszyka'
            })
            this.data.color = ''; this.data.size = '';
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
