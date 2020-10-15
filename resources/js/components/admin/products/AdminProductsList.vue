<template>
    <div class="admin-page">
        <h4 class="title">
            {{ title }}
        </h4>
        <div class="options">
            <b-button :to="{name: 'AdminDataProduct', params: {action: 'create'}}" variant="outline-secondary"><span
                class="fa fa-plus"></span>
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
                <div v-for="product in data" class="col-12">
                    <div class="admin-products-single">
                        <div class="row">
                            <div class="col-xl-1 col-lg-1 col-md-3">
                                <img class="w-100" :src="product.image" :alt="product.title">
                            </div>
                            <div class="col-xl-7 col-lg-7 col-md-5">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="admin-product-content">
                                            <router-link to="#"><h5>{{ product.title }}</h5></router-link>
                                        </div>
                                    </div>
                                    <div class="col-12 info">
                                        Kategoria:
                                        <router-link to="#">{{ product.category.name }}</router-link>
                                        Dodano: <span
                                        class="text-bold">{{ product.created_at | moment('calendar') }}</span>
                                    </div>
                                    <div class="col-12 info">
                                        Cena: <span class="text-bold">{{ product.price.price }} {{ product.price.currency }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 text-right p-3">
                                <router-link :to="{name: 'AdminDataProduct', params: {action: 'edit', id: product.id}}" class="btn btn-outline-secondary btn-sm">Edytuj</router-link>
                                <b-button @click="remove(product.id)" class="btn-sm" variant="outline-secondary">Usuń
                                </b-button>
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
        },
        remove(id) {
            this.$confirm(
                {
                    message: `Na pewno chcesz usunąć ten produkt?`,
                    button: {
                        no: 'Nie',
                        yes: 'Tak'
                    },
                    callback: confirm => {
                        if (confirm) {
                            this.$axios.delete(`admin/products/remove/${id}`)
                                .then((data) => {
                                    if (data.data.success === 1) {
                                        this.loadData()
                                    }
                                })
                        }
                    }
                }
            )
        }
    },
    created() {
        this.loadData();
        document.title = this.title;
    }
}
</script>

<style scoped>

</style>
