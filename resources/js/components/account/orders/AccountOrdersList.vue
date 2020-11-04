<template>
    <div class="admin-page">
        <h5 class="title">
            {{ title }}
        </h5>
        <div class="options">
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
                <div class="col-xl-5 col-lg-5 col-md-5 p-0 col-sm-12 col-xs-12">
                    <select id="status" aria-label="Status" class="form-control" v-model="params.status">
                        <option selected value="">Status zamówienia</option>
                        <option value="1">Złożono zamówienie</option>
                        <option value="2">Przyjęto do realizacji</option>
                        <option value="3">Oczekuje na nadanie</option>
                        <option value="4">Przesyłka wysłana</option>
                        <option value="5">Zakończone</option>
                    </select>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 p-0 col-sm-12 col-xs-12">
                    <select id="status_payment" aria-label="Status zamówienia" class="form-control" v-model="params.payment_status">
                        <option selected value="">Status płatności</option>
                        <option value="1">Rozpoczęta</option>
                        <option value="2">Zakończona</option>
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
                    <th scope="col">Imię i Nazwisko</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Data złożenia</th>
                    <th scope="col">Status</th>
                    <th scope="col">Status płatności</th>
                    <th scope="col">Cena</th>
                    <th scope="col">Opcje</th>
                </tr>
                </thead>
                <tr v-for="(order, index) in data.data">
                    <th scope="row" class="text-center">{{ index + 1 }}</th>
                    <td>{{order.name.full}}</td>
                    <td>{{order.contact.email}}</td>
                    <td>{{order.created_at | moment('calendar')}}</td>
                    <td>{{order.status.name}}</td>
                    <td>{{order.status.payment.status.name}}</td>
                    <td>{{order.price}}</td>
                    <td>
                        <b-button variant="outline-secondary" class="btn-sm" :to="{name: 'AdminOrderFind', params: {id: order.id, action: 'show'}}">
                            Szczegóły
                        </b-button>
                        <b-button @click="remove(order.id)" class="btn-sm" variant="outline-secondary">Usuń
                        </b-button>
                    </td>
                </tr>
                <tbody>
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
    name: "AccountOrdersList",
    components: {NoDataComponent},
    data() {
        return {
            title: 'Zamówienia',
            data: {},
            params: {
                'status': '',
                'payment_status': '',
                'ordering': '',
                'pagination': ''
            },
            showSearch: false
        }
    },
    methods: {
        loadData(page = 1) {
            this.$axios.get(`account/orders/all?page=${page}&status=${this.params.status}&payment_status=${this.params.payment_status}&ordering=${this.params.ordering}&pagination=${this.params.pagination}`)
            .then((data) => {
                this.data = data.data;
            })
            .catch((error) => {
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

<style scoped>
.search-btn {
    border-radius: 0;
    font-size: 20px;
    border: 0;
    padding-top: 8px;
}
</style>
