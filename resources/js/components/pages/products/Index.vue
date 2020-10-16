<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="row">
                        <div v-for="product in data" class="col-xl-3 col-lg-3 col-md-3 p-1">
                            <div class="single-product">
                                <router-link
                                    :to="{name: 'ProductShow', params: {id: product.id, title: product.title}}">
                                    <img :src="product.image" class="product-image-photo" height="600"
                                         :alt="product.title">
                                </router-link>
                                <router-link
                                    :to="{name: 'ProductShow', params: {id: product.id, title: product.title}}">
                                    {{ product.title }}
                                </router-link>
                                <div class="footer">
                            <span class="text-bold">
                                {{ product.price.price }} {{ product.price.currency }}
                            </span>
                                    <span class="fa fa-heart-o"></span>
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
            data: []
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
        this.loadData();
        this.loadCategories();
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
</style>
