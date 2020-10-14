<template>
    <div class="admin-page">
        <h4 class="title">
            {{ title }}
        </h4>
        <div class="options">
            <b-button :to="{name: 'AdminDataProduct', params: {action: 'create'}}" variant="outline-secondary"><span class="fa fa-plus"></span>
            </b-button>
            <b-button variant="outline-secondary"><span class="fa fa-search"></span>
            </b-button>
            <b-dropdown variant="outline-secondary">
                <template v-slot:button-content>
                    <span class="fa fa-filter"></span>
                </template>
                <b-dropdown-item @click="ordering('DESC')">Malejąco</b-dropdown-item>
                <b-dropdown-item @click="ordering('ASC')">Rosnąco</b-dropdown-item>
            </b-dropdown>
            <b-dropdown variant="outline-secondary">
                <template v-slot:button-content>
                    <span class="fa fa-sort-numeric-up"></span>
                </template>
                <b-dropdown-item @click="pagination(6)">6</b-dropdown-item>
                <b-dropdown-item @click="pagination(12)">12</b-dropdown-item>
                <b-dropdown-item @click="pagination(18)">18</b-dropdown-item>
                <b-dropdown-item @click="pagination(24)">24</b-dropdown-item>
            </b-dropdown>
        </div>
        <div class="content">
            <div class="row">
                <div class="col-12">
                    <div class="admin-products-single">
                        <div class="row">
                            <div class="col-xl-1 col-lg-1 col-md-3">
                                <img class="w-100" :src="'https://media.missguided.com/i/missguided/DD921696_01?fmt=jpeg&fmt.jpeg.interlaced=true&$product-page__main--2x$'" :alt="''">
                            </div>
                            <div class="col-xl-7 col-lg-7 col-md-5">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="admin-product-content">
                                            <router-link to="#"> <h5>Navy Floral Print Milkmaid Midi Dress</h5></router-link>
                                        </div>
                                    </div>
                                    <div class="col-12 info">
                                        Kategoria: <router-link to="#">Music</router-link> Dodano: <span class="text-bold">2020-09-23</span>
                                    </div>
                                    <div class="col-12 info">
                                        Cena: <span class="text-bold">345 PLN</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 text-right p-3">
                                <router-link class="btn btn-outline-secondary btn-sm" to="#">Edytuj</router-link>
                                <b-button :to="{name: 'AdminCreateProduct'}" class="btn-sm" variant="outline-secondary">Usuń</b-button>
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
        name: "AdminProductsList",
        data() {
            return {
                title: 'Lista produktów',
                data: [],
                params: {
                    title: '',
                    category: '',
                    is_activated: '',
                    ordering: '',
                    pagination: ''
                }
            }
        },
        methods: {
            ordering(ordering) {
                this.params.ordering = ordering;
                this.loadData();
            },
            pagination(count) {
                this.params.pagination = count;
                this.loadData();
            },
            loadData() {
                this.$axios.get(`admin/products/all?title=${this.params.title}&category_id=${this.params.category}&is_activated=${this.params.is_activated}&ordering=${this.params.ordering}&pagination=${this.params.pagination}`)
                    .then((data) => {
                        this.data = data.data.data;
                    })
                    .catch(() => {
                        //
                    })
            }
        },
        created() {
            this.loadData();
            document.title = this.title;
        }
    }
</script>

<style>
    .admin-page .title {
        font-family: 'Lato', cursive;
        display: inline;
    }

    .admin-page .options {
        float: right;
        margin-top: 5px;
    }

    .admin-products-single {
        border: 1px solid #dcdada;
        border-radius: 3px;
        height: auto;
        margin: 10px auto;
    }

    .admin-product-content {
        padding: 10px 0;
    }

    .admin-product-content a {
        color: #464545;
    }

    .admin-products-single .info {
        font-size: 15px;
    }

    .admin-products-single .info a, .admin-products-single .info .text-bold {
        font-weight: bold;
    }
</style>
