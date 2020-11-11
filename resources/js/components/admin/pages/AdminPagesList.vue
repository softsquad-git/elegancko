<template>
    <div class="admin-page">
        <h5 class="title">
            {{ title }}
        </h5>
        <div class="options">
            <b-button :to="{name: 'AdminDataPage', params: {action: 'create'}}" variant="outline-secondary"><span
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
                    <input id="title" aria-label="Tytuł" class="form-control" placeholder="Tytuł ..."
                           v-model="params.title">
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 p-0 col-xs-12">
                    <select id="position" aria-label="Pozycja" class="form-control" v-model="params.position">
                        <option selected value="">Wybierz pozycję</option>
                        <option value="top">Góra</option>
                        <option value="bottom">Stopka</option>
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
                    <th scope="col">Tytuł</th>
                    <th scope="col">Pozycja</th>
                    <th scope="col">Język</th>
                    <th scope="col">Aktywna?</th>
                    <th scope="col">Opcje</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(page, index) in data.data" :key="page.id">
                    <th scope="row" class="text-center">{{ index + 1 }}</th>
                    <td>{{ page.title }}</td>
                    <td>{{ page.position === 'top' ? 'Góra' : 'Stopka' }}</td>
                    <td>{{ page.is_active == 1 ? 'Tak' : 'Nie' }}</td>
                    <td v-html="page.locale"></td>
                    <td>
                        <router-link :to="{name: 'AdminDataPage', params: {action: 'edit', id: page.id}}" class="btn btn-outline-secondary btn-sm">Edytuj</router-link>
                        <b-button @click="remove(page.id)" class="btn-sm" variant="outline-secondary">Usuń</b-button>
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
import NoDataComponent from "../../NoDataComponent";
export default {
    name: "AdminPagesList",
    components: {NoDataComponent},
    data() {
        return {
            data: {},
            title: 'Strony',
            params: {
                title: '',
                is_active: '',
                position: '',
                ordering: '',
                pagination: ''
            },
            showSearch: false
        }
    },
    methods: {
        loadData(page = 1) {
            this.$axios.get(`admin/pages/all?page=${page}&title=${this.params.title}&is_active=${this.params.is_active}&position=${this.params.position}&ordering=${this.params.ordering}&pagination=${this.params.pagination}`)
            .then((data) => {
                this.data = data.data
            }).catch((error) => this.handleAjaxError(error))
        },
        remove(id) {
            this.$axios.delete(`admin/pages/remove/${id}`)
            .then((data) => {
                if (data.data.success === 1) {
                    this.loadData();
                }
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
