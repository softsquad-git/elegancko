<template>
    <div>
        <div class="admin-page-title">
            {{ title }}
            <router-link :to="{name: 'AdminMessagesList'}" class="fa fa-eye"></router-link>
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
import { CircleSpinner } from 'vue-spinners'
export default {
    name: "MessagesAdminReport",
    components: {CircleSpinner},
    data() {
        return {
            title: 'Wiadomości',
            data: {},
            isLoading: false
        }
    },
    methods: {
        loadData(){
            this.isLoading = true;
            this.$axios.get('admin/reports/messages')
            .then((data) => {
                this.isLoading = false;
                this.data = data.data;
            }).catch((error) => {
                this.isLoading = false;
                this.handleAjaxError(error)
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
