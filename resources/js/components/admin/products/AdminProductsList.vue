<template>
    <div class="admin-page">
        <h4 class="title">
            {{ title }}
        </h4>
        <div class="options">
            <b-button :to="{name: 'AdminDataProduct', params: {action: 'create'}}" variant="outline-secondary"><span
                class="fa fa-plus"></span>
            </b-button>
            <b-button @click="showSearch ^= true" variant="outline-secondary"><span class="fa fa-search"></span></b-button>
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
        <form v-if="showSearch" class="mt-3 mb-3" @submit.prevent="loadData">
            <div class="row pl-3 pr-3">
                <div class="col-xl-2 p-0 col-lg-2 col-md-2 col-sm-12 col-xs-12">
                    <input id="title" aria-label="Tytuł" class="form-control" placeholder="Tytuł ..." v-model="params.title">
                </div>
                <div class="col-xl-3 p-0 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <select id="category" aria-label="Kategoria" class="form-control" v-model="params.category_id">
                        <option selected value="">Wybierz kategorię</option>
                        <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                    </select>
                </div>
                <div class="col-xl-3 p-0 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <select id="type" aria-label="Rodzaj" class="form-control" v-model="params.type">
                        <option selected value="">Wybierz rodzaj</option>
                        <option v-for="type in types" :value="type.value">{{ type.text }}</option>
                    </select>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 p-0 col-xs-12">
                    <select id="locale" aria-label="Język" class="form-control" v-model="params.locale">
                        <option selected value="">Wybierz język</option>
                        <option value="pl">PL</option>
                        <option value="en">EN</option>
                    </select>
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 p-0 col-sm-12 col-xs-12">
                    <select id="active" aria-label="Aktywny?" class="form-control" v-model="params.is_activated">
                        <option selected value="">Aktywny?</option>
                        <option value="1">Tak</option>
                        <option value="0">Nie</option>
                    </select>
                </div>
                <div class="col-xl-1 p-0 col-lg-1 col-md-1 col-sm-12 col-xs-12">
                    <b-button type="submit" class="search-btn w-100" variant="outline-secondary">
                        <span class="fa fa-search"></span>
                    </b-button>
                </div>
            </div>
        </form>
        <div class="content">
            <div class="row">
                <div v-for="product in data.data" class="col-12">
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
                                <b-button @click="remove(product.id)" class="btn-sm" variant="outline-secondary">Usuń</b-button>
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
                category_id: '',
                is_activated: '',
                ordering: '',
                pagination: '',
                type: '',
                locale: ''
            },
            categories: [],
            types: [
                {value: 2, text: 'Promocja'},
                {value: 3, text: 'Nowość'},
                {value: 4, text: 'Nowość w promocji'}
            ],
            showSearch: false
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
            this.$axios.get(`admin/products/all?title=${this.params.title}&category_id=${this.params.category_id}&is_activated=${this.params.is_activated}&ordering=${this.params.ordering}&pagination=${this.params.pagination}&type=${this.params.type}&locale=${this.params.locale}`)
                .then((data) => {
                    this.data = data.data;
                    this.loadCategories();
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
                                        this.loadData();
                                        this.$notify({
                                            group: 'foo',
                                            title: 'Udało się',
                                            text: 'Produkt został usunięty ze sklepu'
                                        })
                                    }
                                })
                        }
                    }
                }
            )
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

</style>
