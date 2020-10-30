<template>
    <div>
        <div class="admin-page-title">
            {{ title }}
            <router-link :to="{name: 'AdminMessagesList'}" class="fa fa-eye"></router-link>
        </div>
        <table class="table">
            <thead>
            <tr>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">Łącznie</th>
                <td>{{ data.count_messages }}</td>
            </tr>
            <tr>
                <th scope="row">Odczytane</th>
                <td>{{ data.count_reading_messages }}</td>
            </tr>
            <tr>
                <th scope="row">Wysłane</th>
                <td>{{ data.count_send_messages }}</td>
            </tr>
            <tr>
                <th scope="row">Otrzymane</th>
                <td>{{ data.count_received_messages }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "MessagesAdminReport",
    data() {
        return {
            title: 'Wiadomości',
            data: {}
        }
    },
    methods: {
        loadData(){
            this.$axios.get('admin/reports/messages')
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
