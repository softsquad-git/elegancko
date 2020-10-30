<template>
    <div>
        <div class="admin-page-title">
            {{ title }}
            <router-link :to="{name: 'AdminUsersList'}" class="fa fa-eye"></router-link>
        </div>
        <table class="table">
            <thead>
            <tr>
            </tr>
            </thead>
            <tbody>
            <tr><th scope="row">Wszyscy</th><td>{{ data.count_users }}</td></tr>
            <tr><th scope="row">Aktywni</th><td>{{ data.count_users_active }}</td></tr>
            <tr><th scope="row">Zablokowani</th><td>{{ data.count_users_lock }}</td></tr>
            <tr><th scope="row">Administratorzy</th><td>{{ data.count_users_admin }}</td></tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "UsersAdminReport",
    data() {
        return {
            title: 'Użytkownicy',
            data: {}
        }
    },
    methods: {
        loadData() {
            this.$axios.get('admin/reports/users')
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
