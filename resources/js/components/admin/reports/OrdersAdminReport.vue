<template>
    <div>
        <div class="admin-page-title">
            {{ title }}
            <router-link :to="{name: 'AdminOrdersList'}" class="fa fa-eye"></router-link>
        </div>
        <circle-spinner v-if="isLoading" :loading="isLoading"></circle-spinner>
        <table v-if="!isLoading" class="table">
            <thead>
            <tr>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">Łącznie</th>
                <td>{{ data.count_orders }}</td>
            </tr>
            <tr>
                <th scope="row">Opłacone</th>
                <td>{{ data.count_orders_payment_finish }}</td>
            </tr>
            <tr>
                <th scope="row">Zrealizowane</th>
                <td>{{ data.count_orders_finish }}</td>
            </tr>
            <tr>
                <th scope="row">Zysk</th>
                <td>{{ data.count_orders_profit }}</td>
            </tr>
            <tr>
                <th scope="row">Zwroty</th>
                <td>{{ data.count_returns }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { CircleSpinner } from 'vue-spinners'
export default {
    name: "OrdersAdminReport",
    components: {CircleSpinner},
    data() {
        return {
            title: 'Zamówienia',
            data: {},
            isLoading: false
        }
    },
    methods: {
        loadData() {
            this.isLoading = true
            this.$axios.get('admin/reports/orders')
                .then((data) => {
                    this.isLoading = false;
                    this.data = data.data;
                }).catch((error) => {
                    this.isLoading = false;this.handleAjaxError(error)
            })
        }
    },
    created() {
        this.loadData();
    }
}
</script>

<style scoped>

</style>
