<template>
    <div>
        <div class="admin-page-title">
            {{ title }}
            <router-link :to="{name: 'AdminOrdersList'}" class="fa fa-eye"></router-link>
        </div>
        <table class="table">
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
export default {
    name: "OrdersAdminReport",
    data() {
        return {
            title: 'Zamówienia',
            data: {}
        }
    },
    methods: {
        loadData() {
            this.$axios.get('admin/reports/orders')
                .then((data) => {
                    this.data = data.data;
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
