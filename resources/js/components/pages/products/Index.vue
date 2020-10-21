<template>
    <div>
        <div class="top-banner-products" :style="'background: url('+banner+')'">
            <h1 class="title title-top-banner">{{title}}</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="row">
                        <div v-for="product in data" class="col-xl-3 col-lg-3 col-md-3 p-1">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            title: 'Produkty',
            params: {
                title: '',
                category_id: '',
                ordering: '',
                pagination: ''
            },
            data: [],
            banner: ''
        }
    },
    methods: {
        loadData() {
            this.$axios.get(`front/products/all?title=${this.params.title}&category_id=${this.params.category_id}&ordering=${this.params.ordering}&pagination=${this.params.pagination}`)
                .then((data) => {
                    this.data = data.data.data;
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
        }
    },
    created() {
        const category = this.$route.params.category;
        if (category) {
            this.params.category = category;
        }
        this.loadData();
        this.loadCategories();
        this.$axios.get('front/settings/find-by-type/products_top_banner')
            .then((data) => {
                this.banner = data.data.data.value
            });
        document.title = this.title;
    }
}
</script>

<style scoped>
.search-btn {
    border-radius: 0;
    font-size: 20px;
    border: 0;
    padding-top: 8px;
}
.top-banner-products {
    height: 600px;
    background-position: top center;
    background-size: cover;
    text-align: center;
    line-height: 600px;
}
</style>
