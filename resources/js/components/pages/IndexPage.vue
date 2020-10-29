<template>
    <div class="home">
        <div class="top-banner" :style="'background: url('+top_banner+')'">er</div>
        <div class="container text-center mt-5">
            <div class="subtitle">najlepsze</div>
            <div class="title text-uppercase">Promocje</div>
            <div class="row mt-4 mb-5">
                <div v-for="product in products_promo" class="col-xl-4 col-lg-4 col-md-4">
                    <div class="single-product">
                        <router-link
                            :to="{name: 'ProductShow', params: {id: product.id, title: product.title}}">
                            <div class="product-image-photo" :style="'background: url('+product.image+')'"></div>
                        </router-link>
                        <router-link
                            :to="{name: 'ProductShow', params: {id: product.id, title: product.title}}">
                            {{ product.title }}
                        </router-link>
                        <div class="footer">
                            <span class="text-bold">
                                {{ product.price.price }} {{ product.price.currency }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <home-categories/>
        </div>
        <div class="container text-center mt-5">
            <div class="subtitle">najlepsze</div>
            <div class="title text-uppercase">Nowości</div>
            <div class="row mt-4">
                <div v-for="product in products_news" class="col-xl-4 col-lg-4 col-md-4">
                    <div class="single-product">
                        <router-link
                            :to="{name: 'ProductShow', params: {id: product.id, title: product.title}}">
                            <div class="product-image-photo" :style="'background: url('+product.image+')'"></div>
                        </router-link>
                        <router-link
                            :to="{name: 'ProductShow', params: {id: product.id, title: product.title}}">
                            {{ product.title }}
                        </router-link>
                        <div class="footer">
                            <span class="text-bold">
                                {{ product.price.price }} {{ product.price.currency }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HomeCategories from "./HomeCategories";

export default {
    name: "IndexPage",
    components: {HomeCategories},
    data() {
        return {
            top_banner: '',
            products_promo: [],
            products_news: []
        }
    },
    methods: {
        loadProductsPromo() {
            this.$axios.get('front/products/all?type=2&pagination=3')
                .then((data) => {
                    this.products_promo = data.data.data;
                })
        },
        loadProductsNews() {
            this.$axios.get('front/products/all?type=3&pagination=3')
                .then((data) => {
                    this.products_news = data.data.data;
                })
        }
    },
    created() {
        this.$axios.get('front/settings/find-by-type/home_top_banner')
            .then((data) => {
                this.top_banner = data.data.data.value
            });
        this.loadProductsPromo();
        this.loadProductsNews();
    }
}
</script>

<style scoped>
.top-banner {
    height: 90vh;
    background-position: center center;
    background-size: cover;
}
</style>
