<template>
    <div>
        <div class="top-banner-products" :style="'background: url('+banner+')'">
            <div class="bg">
                <h1 class="title title-top-banner">{{title}}</h1>
            </div>
        </div>
        <div class="container">
            <form class="mt-3 mb-3" @submit.prevent="loadData">
                <div class="row pl-1 pr-1">
                    <div class="col-xl-5 p-0 col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <input id="title" aria-label="Tytuł" class="form-control" placeholder="Tytuł ..." v-model="params.title">
                    </div>
                    <div class="col-xl-3 p-0 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <select id="category" aria-label="Kategoria" class="form-control" v-model="params.category">
                            <option selected value="">Wybierz kategorię</option>
                            <option v-for="category in categories" :value="category.alias">{{ category.name }}</option>
                        </select>
                    </div>
                    <div class="col-xl-3 p-0 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <select id="type" aria-label="Rodzaj" class="form-control" v-model="params.type">
                            <option selected value="">Wybierz rodzaj</option>
                            <option v-for="type in types" :value="type.value">{{ type.text }}</option>
                        </select>
                    </div>
                    <div class="col-xl-1 p-0 col-lg-1 col-md-1 col-sm-12 col-xs-12">
                        <b-button type="submit" class="search-btn w-100" variant="outline-secondary">
                            <span class="fa fa-search"></span>
                        </b-button>
                    </div>
                </div>
            </form>
            <div class="row">
                <div class="col-xl-2 col-lg-2 col-md-2 offset-xl-10 offset-lg-10 offset-md-10">
                    <select id="ordering" aria-label="Sortuj" class="form-control min-select" v-model="params.ordering">
                        <option selected value="">Sortuj wg</option>
                        <option value="ASC">Najstarsze</option>
                        <option value="DESC">Najnowsze</option>
                        <option value="PRICE_MIN">Cena (rosnąco)</option>
                        <option value="PRICE_MAX">Cena (malejąco)</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="row">
                        <div v-if="data.data.length > 0" v-for="product in data.data" class="col-xl-3 col-lg-3 col-md-3 p-1">
                            <div class="single-product">
                                <router-link
                                    :to="{name: 'ProductShow', params: {id: product.id, title: product.title}}">
                                    <div class="product-image-photo"
                                         :style="'background: url('+product.image+')'"></div>
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
                        <no-data-component v-if="data.data.length < 1" :msg="'Brak danych do wyświetlenia'"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NoDataComponent from "../../NoDataComponent";
export default {
    name: "Index",
    components: {NoDataComponent},
    data() {
        return {
            title: 'Produkty',
            params: {
                title: '',
                category: '',
                ordering: '',
                pagination: '',
                type: ''
            },
            data: [],
            banner: '',
            categories: [],
            types: [
                {value: 2, text: 'Promocja'},
                {value: 3, text: 'Nowość'},
                {value: 4, text: 'Nowość w promocji'}
            ]
        }
    },
    methods: {
        loadData() {
            this.$axios.get(`front/products/all?title=${this.params.title}&category=${this.params.category}&ordering=${this.params.ordering}&pagination=${this.params.pagination}&type=${this.params.type}`)
                .then((data) => {
                    this.data = data.data;
                })
        },
        ordering(ordering) {
            this.params.ordering = ordering;
            this.loadData();
        },
        pagination(count) {
            this.params.pagination = count;
            this.loadData();
        },
        loadCategories() {
            this.$axios.get('categories/all')
                .then((data) => {
                    this.categories = data.data.data;
                })
        },
        checkCategory() {
            if (this.$route.params.category) {
                this.params.category = this.$route.params.category;
                this.$axios.get(`categories/find/${this.$route.params.category}`)
                .then((data) => {
                    let category = data.data.data;
                    this.title = category.name
                    this.banner = category.image;
                })
            } else {
                this.params.category = '';
                this.title = 'Produkty';
                this.$axios.get('front/settings/find-by-type/products_top_banner')
                    .then((data) => {
                        this.banner = data.data.data.value
                    });
            }
            this.loadData();
        }
    },
    watch: {
        'params.ordering' () {
            this.loadData();
        },
        'params.category' () {
            this.checkCategory();
        },
        '$route.params.category' () {
            this.checkCategory();
        }
    },
    created() {
        this.checkCategory();
        this.loadCategories();
        document.title = this.title;
    }
}
</script>

<style lang="scss" scoped>
.top-banner-products {
    height: 700px;
    background-position: center center!important;
    background-size: cover!important;
    text-align: center;
    line-height: 700px;
    .bg {
        background: #00000021;
    }
}
.search-btn {
    border-radius: 0;
    font-size: 20px;
    border: 0;
    padding-top: 8px;
}

</style>
