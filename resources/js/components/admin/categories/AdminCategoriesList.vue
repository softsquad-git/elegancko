<template>
    <div class="admin-page">
        <h4 class="title">
            {{ title }}
        </h4>
        <div class="options">
            <b-button :to="{name: 'AdminDataCategory', params: {action: 'create'}}" variant="outline-secondary"><span
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
                <div class="col-xl-4 p-0 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <input id="name" aria-label="Nazwa" class="form-control" placeholder="Nazwa ..."
                           v-model="params.name">
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 p-0 col-xs-12">
                    <select id="locale" aria-label="Język" class="form-control" v-model="params.locale">
                        <option selected value="">Wybierz język</option>
                        <option value="pl">PL</option>
                        <option value="en">EN</option>
                    </select>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 p-0 col-sm-12 col-xs-12">
                    <select id="active" aria-label="Aktywny?" class="form-control" v-model="params.is_active">
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
                    <th scope="col">Nazwa</th>
                    <th scope="col">Alias</th>
                    <th scope="col">Pozycja</th>
                    <th scope="col">Język</th>
                    <th scope="col">Aktywna</th>
                    <th scope="col">Opcje</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(category, index) in data.data">
                    <th scope="row" class="text-center">{{ index + 1 }}</th>
                    <td><img style="width: 100px;" :src="category.image" :alt="category.name"></td>
                    <td>{{ category.name }}</td>
                    <td>{{ category.alias }}</td>
                    <td>{{ category.position == 1 ? 'Ogólna' : 'Na stronie głównej' }}</td>
                    <td v-html="category.locale"></td>
                    <td>{{ category.activated ? 'Tak' : 'Nie' }}</td>
                    <td>
                        <router-link :to="{name: 'AdminDataCategory', params: {action: 'edit', id: category.id}}"
                                     class="btn btn-outline-secondary btn-sm">Edytuj
                        </router-link>
                        <b-button @click="remove(category.id)" class="btn-sm" variant="outline-secondary">
                            <b-spinner v-if="loadSpinner === category.id" small></b-spinner> Usuń
                        </b-button>
                    </td>
                </tr>
                </tbody>
            </table>
            <pagination :data="data" @pagination-change-page="loadData"></pagination>
            <no-data-component v-if="data.data.length < 1" :msg="'Brak danych do wyświetlenia'"/>
        </div>
    </div>
</template>

<script>
import AdminDataCategory from "./AdminDataCategory";
import NoDataComponent from "../../NoDataComponent";

export default {
    name: "AdminCategoriesList",
    components: {NoDataComponent, AdminDataCategory},
    data() {
        return {
            title: 'Kategorie',
            data: [],
            params: {
                name: '',
                ordering: '',
                pagination: '',
                is_active: '',
                locale: ''
            },
            showSearch: false,
            loadSpinner: null
        }
    },
    methods: {
        loadData(page = 1) {
            this.$Progress.start();
            this.$axios.get(`admin/categories/all?page=${page}&name=${this.params.name}&ordering=${this.params.ordering}&pagination=${this.params.pagination}&is_active=${this.params.is_active}&locale=${this.params.locale}`)
                .then((data) => {
                    this.$Progress.finish();
                    this.data = data.data;
                })
                .catch((error) => {
                    this.$Progress.fail();
                    this.handleAjaxError(error);
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
        closeAdminDataCategory() {
            this.showAdminDataCategory = false;
            this.loadData();
        },
        remove(id) {
            this.$confirm(
                {
                    message: `Na pewno chcesz usunąć kategorię? Wraz z nią zostaną usunięte powiązane produkty`,
                    button: {
                        no: 'Nie',
                        yes: 'Tak'
                    },
                    callback: confirm => {
                        if (confirm) {
                            this.loadSpinner = id;
                            this.$axios.delete(`admin/categories/remove/${id}`) // id = id category
                                .then((data) => {
                                    if (data.data.success === 1) {
                                        this.loadSpinner = null;
                                        this.loadData()
                                    }
                                })
                                .catch((error) => {
                                    this.loadSpinner = null;
                                    this.handleAjaxError(error);
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
.search-btn {
    border-radius: 0;
    font-size: 20px;
    border: 0;
    padding-top: 8px;
}

</style>
