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
            <categories :limit="3" :position="2" :name="''" :ordering="''"/>
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
            <home-info/>
            <home-products/>
        </div>
    </div>
</template>

<script>
import Categories from "./Categories";
import HomeInfo from "./HomeInfo";
import HomeProducts from "./HomeProducts";

export default {
    name: "IndexPage",
    components: {HomeProducts, HomeInfo, Categories},
    data() {
        return {
            top_banner: '',
            products_promo: [],
            products_news: [],
            categories: []
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
