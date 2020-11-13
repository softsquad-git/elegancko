<template>
    <div class="admin-page">
        <h4 class="title">
            {{ title }}
        </h4>
        <div class="options">
            <b-button :to="{name: 'AdminDataProduct', params: {action: 'create'}}" variant="outline-secondary"><span
                class="fa fa-plus"></span>
            </b-button>
            <b-button @click="showSearch ^= true" variant="outline-secondary"><span class="fa fa-search"></span>
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
        <form v-if="showSearch" class="mt-3 mb-3" @submit.prevent="loadData">
            <div class="row pl-3 pr-3">
                <div class="col-xl-2 p-0 col-lg-2 col-md-2 col-sm-12 col-xs-12">
                    <input id="title" aria-label="Tytuł" class="form-control" placeholder="Tytuł ..."
                           v-model="params.title">
                </div>
                <div class="col-xl-3 p-0 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <select id="category" aria-label="Kategoria" class="form-control" v-model="params.category">
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
        <div class="content mt-4">
            <table v-if="data.data.length > 0" class="table">
                <thead>
                <tr>
                    <th scope="col" class="text-center">L.p.</th>
                    <th scope="col">Zdjęcie</th>
                    <th scope="col">Tytuł</th>
                    <th scope="col">Kategoria</th>
                    <th scope="col">Cena</th>
                    <th scope="col">Język</th>
                    <th scope="col">Data dodania</th>
                    <th scope="col">Aktywny</th>
                    <th scope="col">Opcje</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(product, index) in data.data">
                    <th scope="row" class="text-center">{{ index + 1 }}</th>
                    <td><img style="width: 100px;" :src="product.image" :alt="product.title"></td>
                    <td>{{ product.title }}</td>
                    <td>{{ product.category.name }}</td>
                    <td>
                        <del v-if="product.price.old">{{ product.price.old }}</del>
                        {{ product.price.price }}
                    </td>
                    <td v-html="product.locale"></td>
                    <td>{{ product.created_at | moment('calendar') }}</td>
                    <td>{{ product.is_activated == 1 ? 'Tak' : 'Nie' }}</td>
                    <td>
                        <router-link :to="{name: 'AdminDataProduct', params: {action: 'edit', id: product.id}}"
                                     class="btn btn-outline-secondary btn-sm">Edytuj
                        </router-link>
                        <b-button @click="remove(product.id)" class="btn-sm" variant="outline-secondary">
                            <b-spinner v-if="loadSpinner === product.id" small></b-spinner>
                            Usuń
                        </b-button>
                    </td>
                </tr>
                </tbody>
            </table>
            <pagination :data="data" @pagination-change-page="loadData"></pagination>
            <no-data-component v-if="data.data.length < 1" :msg="'Brak dodanych produktów'"/>
        </div>
    </div>
</template>

<script>
import NoDataComponent from "../../NoDataComponent";

export default {
    name: "AdminProductsList",
    components: {NoDataComponent},
    data() {
        return {
            title: 'Produkty',
            data: [],
            params: {
                title: '',
                category: '',
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
            showSearch: false,
            loadSpinner: null
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
        loadData(page = 1) {
            this.$Progress.start();
            this.$axios.get(`admin/products/all?page=${page}&title=${this.params.title}&category=${this.params.category}&is_activated=${this.params.is_activated}&ordering=${this.params.ordering}&pagination=${this.params.pagination}&type=${this.params.type}&locale=${this.params.locale}`)
                .then((data) => {
                    this.$Progress.finish();
                    this.data = data.data;
                    this.loadCategories();
                })
                .catch((error) => {
                    this.$Progress.fail();
                    this.handleAjaxError(error)
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
                            this.loadSpinner = id;
                            this.$axios.delete(`admin/products/remove/${id}`)
                                .then((data) => {
                                    this.loadSpinner = null;
                                    if (data.data.success === 1) {
                                        this.loadData();
                                        this.$notify({
                                            group: 'foo',
                                            title: 'Udało się',
                                            text: 'Produkt został usunięty ze sklepu'
                                        })
                                    }
                                }).catch((error) => {
                                this.handleAjaxError(error);
                                this.loadSpinner = null
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
                }).catch((error) => this.handleAjaxError(error))
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
