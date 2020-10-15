<template>
    <div class="admin-page">
        <h5 class="title">
            {{ title }}
        </h5>
        <div class="options">
            <b-button variant="outline-secondary"><span class="fa fa-search"></span></b-button>
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
                <div v-for="user in data" class="col-12">
                    <div class="admin-products-single">
                        <div class="row">
                            <div class="col-xl-1 col-lg-1 col-md-3">
                                <img class="w-100" :src="user.avatar" :alt="user.name.full">
                            </div>
                            <div class="col-xl-7 col-lg-7 col-md-5">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="admin-product-content">
                                            <router-link to="#"><h5>{{ user.name.full }}</h5></router-link>
                                        </div>
                                    </div>
                                    <div class="col-12 info">
                                        Złożone zamówienia: <span class="text-bold">{{ user.c_orders }}</span>
                                        Wysłane wiadomości: <span class="text-bold">{{ user.c_messages }}</span>
                                    </div>
                                    <div class="col-12 info">
                                        Data rejestracji: <span class="text-bold">{{ user.created_at | moment('calendar') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 text-right p-3">
                                <router-link to="#" class="btn btn-outline-secondary btn-sm">Edytuj</router-link>
                                <b-button @click="remove(user.id)" class="btn-sm" variant="outline-secondary">Usuń
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
            data: []
        }
    },
    methods: {
        loadData() {
            this.$axios.get(`admin/users/all?name=${this.params.name}&email=${this.params.email}&is_activated=${this.params.is_activated}&ordering=${this.params.ordering}&pagination=${this.params.pagination}`)
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
        remove(id) {

        }
    },
    created() {
        this.loadData();
    }
}
</script>

<style scoped>

</style>
