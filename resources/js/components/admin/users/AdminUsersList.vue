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
                <div class="col-xl-4 p-0 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <input id="name" aria-label="Nazwa" class="form-control" placeholder="Nazwa ..."
                           v-model="params.name">
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 p-0 col-xs-12">
                    <input id="email" aria-label="E-mail" class="form-control" placeholder="E-mail ..."
                           v-model="params.email">
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 p-0 col-sm-12 col-xs-12">
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
                    <th scope="col">Imię i Nazwisko</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Złożone zamówienia</th>
                    <th scope="col">Wysłane wiadomości</th>
                    <th scope="col">Data rejestracji</th>
                    <th scope="col">Aktywny</th>
                    <th scope="col">Opcje</th>
                </tr>
                </thead>
                <tr v-for="(user, index) in data.data">
                    <th scope="row" class="text-center">{{ index + 1 }}</th>
                    <td>{{ user.name.full }}</td>
                    <td>{{ user.email }}</td>
                    <td><router-link :to="{name: 'AdminOrdersList', params: {email: user.email}}">{{ user.c_orders }}</router-link></td>
                    <td>{{ user.c_messages }}</td>
                    <td>{{ user.created_at | moment('calendar') }}</td>
                    <td>{{ user.is_activated == 1 ? 'Tak' : 'Nie' }}</td>
                    <td>
                        <router-link :to="{name: 'AdminAccountSetting', params: {id: user.id}}"
                                     class="btn btn-outline-secondary btn-sm">Edytuj
                        </router-link>
                        <b-button @click="remove(user.id)" class="btn-sm" variant="outline-secondary">Usuń
                        </b-button>
                    </td>
                </tr>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "AdminUsersList",
    data() {
        return {
            title: 'Lista użytkowników',
            params: {
                name: '',
                email: '',
                is_activated: '',
                ordering: '',
                pagination: ''
            },
            data: [],
            showSearch: false
        }
    },
    methods: {
        loadData() {
            this.$axios.get(`admin/users/all?name=${this.params.name}&email=${this.params.email}&is_activated=${this.params.is_activated}&ordering=${this.params.ordering}&pagination=${this.params.pagination}`)
                .then((data) => {
                    this.data = data.data;
                    console.log(data.data.data);
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
        remove(id) {

        }
    },
    created() {
        this.loadData();
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
