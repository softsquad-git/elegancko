<template>
<div class="admin-page">
    <h4 class="title">
        {{ title }}
    </h4>
    <div class="options">
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
            <div class="col-xl-4 p-0 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <input id="email" aria-label="Email" class="form-control" placeholder="Email ..." v-model="params.email">
            </div>
            <div class="col-xl-4 p-0 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <input id="name" aria-label="Imię" class="form-control" placeholder="Imię i nazwisko ..." v-model="params.name">
            </div>
            <div class="col-xl-3 p-0 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <select id="isReading" aria-label="Przeczytane" class="form-control" v-model="params.is_reading">
                    <option selected value="">Przecztane?</option>
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
                <th scope="col">Imię i nazwisko</th>
                <th scope="col">E-mail</th>
                <th scope="col">Tytuł</th>
                <th scope="col">Przeczytane</th>
                <th scope="col">Od / Do</th>
                <th scope="col">Data</th>
                <th scope="col">Opcje</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(message, index) in data.data">
                <th scope="row" class="text-center">{{ index + 1 }}</th>
                <td>{{message.name}}</td>
                <td>{{message.email}}</td>
                <td>{{message.subject}}</td>
                <td>{{message.reading.txt}}</td>
                <td>{{message.to.txt}}</td>
                <td>{{message.created_at | moment('calendar')}}</td>
                <td>
                    <router-link :to="''" class="btn btn-sm btn-outline-secondary">Zobacz</router-link>
                    <b-button @click="remove(product.id)" class="btn-sm" variant="outline-secondary">Usuń</b-button>
                </td>
            </tr>
            </tbody>
        </table>
        <pagination :data="data" @pagination-change-page="loadData"></pagination>
        <no-data-component v-if="data.data.length < 1" :msg="'Brak wiadomości do wyświetlenia'"/>
    </div>
</div>
</template>

<script>
import NoDataComponent from "../../NoDataComponent";
export default {
    name: "AdminMessagesLIst",
    components: {NoDataComponent},
    data() {
        return {
            title: 'Wiadomości',
            showSearch: false,
            data: {},
            params: {
                email: '',
                is_reading: '',
                ordering: '',
                pagination: '',
                name: ''
            }
        }
    },
    methods: {
        loadData(page = 1) {
            this.$axios.get(`admin/messages/all?page=${page}&email=${this.params.email}&name=${this.params.name}&is_reading=${this.params.is_reading}&ordering=${this.params.ordering}&pagination=${this.params.pagination}`)
                .then((data) => {
                    this.data = data.data;
                    console.log(data.data.data)
                })
        },
        pagination(count) {
            this.params.pagination = count;
            this.loadData();
        },
        ordering(ordering) {
            this.params.ordering = ordering;
            this.loadData();
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
