<template>
    <div class="home">
        <div class="top-banner" :style="'background: url('+settings[0].value+')'">
           <div class="container-fluid">
               <div class="row">
                   <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-xs-12">
                       <div class="top-banner-txt">
                           <h1 class="big">
                               {{ settings[1] ? settings[1].value : '' }}
                           </h1>
                           <p>{{ settings[2] ? settings[2].value : '' }}</p>
                       </div>
                   </div>
               </div>
           </div>
        </div>
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
        <meta-component
            type="HOME"/>
    </div>
</template>

<script>
import Categories from "./Categories";
import HomeInfo from "./HomeInfo";
import HomeProducts from "./HomeProducts";
import MetaComponent from "./MetaComponent";

export default {
    name: "IndexPage",
    components: {MetaComponent, HomeProducts, HomeInfo, Categories},
    data() {
        return {
            top_banner: '',
            products_promo: [],
            products_news: [],
            categories: [],
            data: [
                'home_top_banner',
                'home_top_banner_title',
                'home_top_banner_desc'
            ],
            settings: []
        }
    },
    methods: {
        loadProductsPromo() {
            this.$axios.get('front/products/all?type=2&pagination=3')
                .then((data) => {
                    this.products_promo = data.data.data;
                }).catch((error) => this.handleAjaxError(error))
        },
        loadProductsNews() {
            this.$axios.get('front/products/all?type=3&pagination=3')
                .then((data) => {
                    this.products_news = data.data.data;
                }).catch((error) => this.handleAjaxError(error))
        }
    },
    created() {
        this.$axios.post('front/settings/find-by-types', this.data)
            .then((data) => {
                this.settings = data.data.data;
                console.log(data.data.data)
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
