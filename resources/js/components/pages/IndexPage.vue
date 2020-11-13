<template>
    <div class="home">
        <div class="top-banner" :style="'background: url('+top_banner+')'">
           <div class="container-fluid">
               <circle-spinner v-if="isLoadingSetting" class="m-auto" :loading="isLoadingSetting"></circle-spinner>
               <div class="row">
                   <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-xs-12">
                       <div class="top-banner-txt">
                           <h1 class="big">
                               {{ title }}
                           </h1>
                           <p>{{ description }}</p>
                       </div>
                   </div>
               </div>
           </div>
        </div>
        <div class="container text-center mt-5">
            <div class="subtitle">{{ $t('page.home.best') }}</div>
            <div class="title text-uppercase">{{ $t('page.home.promo') }}</div>
            <div class="row mt-4 mb-5">
                <circle-spinner v-if="isLoadingPromoProduct" class="m-auto" :loading="isLoadingPromoProduct"></circle-spinner>
                <div v-if="!isLoadingPromoProduct" v-for="product in products_promo" class="col-xl-4 col-lg-4 col-md-4">
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
            <div class="subtitle">{{ $t('page.home.best') }}</div>
            <div class="title text-uppercase">{{ $t('page.home.news') }}</div>
            <div class="row mt-4">
                <circle-spinner v-if="isLoadingNewsProduct" class="ml-auto mr-auto" :loading="isLoadingNewsProduct"></circle-spinner>
                <div v-if="!isLoadingNewsProduct" v-for="product in products_news" class="col-xl-4 col-lg-4 col-md-4">
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
        <meta-component
            type="HOME"/>
    </div>
</template>

<script>
import Categories from "./Categories";
import HomeInfo from "./HomeInfo";
import HomeProducts from "./HomeProducts";
import MetaComponent from "./MetaComponent";
import {CircleSpinner} from 'vue-spinners'

export default {
    name: "IndexPage",
    components: {MetaComponent, HomeProducts, HomeInfo, Categories, CircleSpinner},
    data() {
        return {
            title: '',
            description: '',
            top_banner: '',
            products_promo: [],
            products_news: [],
            categories: [],
            settings: [],
            isLoadingSetting: false,
            isLoadingPromoProduct: false,
            isLoadingNewsProduct: false
        }
    },
    methods: {
        loadProductsPromo() {
            this.isLoadingPromoProduct = true;
            this.$axios.get('front/products/all?type=2&pagination=3')
                .then((data) => {
                    this.isLoadingPromoProduct = false;
                    this.products_promo = data.data.data;
                }).catch((error) => {
                    this.isLoadingPromoProduct = false;
                     this.handleAjaxError(error)
            })
        },
        loadProductsNews() {
            this.isLoadingNewsProduct = true;
            this.$axios.get('front/products/all?type=3&pagination=3')
                .then((data) => {
                    this.isLoadingNewsProduct = false
                    this.products_news = data.data.data
                }).catch((error) => {
                    this.isLoadingNewsProduct = false;
                this.handleAjaxError(error)
            })
        }
    },
    created() {
        this.isLoadingSetting = true;
        this.$axios.get('front/settings/find-by-type/home_top_banner_text')
            .then((data) => {
                this.title = data.data.data.value
            });
        this.$axios.get('front/settings/find-by-type/home_top_banner_desc')
            .then((data) => {
                this.description = data.data.data.value
            });
        this.$axios.get('front/settings/find-by-type/home_top_banner')
            .then((data) => {
                this.isLoadingSetting = false;
                this.top_banner = data.data.data.value
            }).catch(() => {
                this.isLoadingSetting = false;
        })
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
.top-banner-txt h1.big {
    font-weight: bold;
    font-size: 7em;
}
.top-banner-txt p {
    font-weight: bold;
    font-size: 1.5em;
    padding-left: 10px;
}
.top-banner-txt {
    padding: 7em;
}

@media only screen and (max-width: 650px) {
    .top-banner {
        background-position: center top!important;
    }
    .top-banner-txt {
        padding: 6em 2em;
    }
    .top-banner-txt h1.big {
        font-size: 4em!important;
        text-align: left;
    }
    .top-banner-txt p {
        font-size: 1em;
    }
}

@media only screen and (max-width: 460px) {
    .top-banner-txt {
        padding: 6em 2em;
        text-align: center!important;
    }
    .top-banner-txt h1.big {
        font-size: 3em!important;
    }
}

</style>
