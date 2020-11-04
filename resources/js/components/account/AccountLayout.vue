<template>
    <div class="container-fluid">
        <b-navbar toggleable="lg" type="light">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :to="{name: 'AccountPageIndex'}">{{ name }}</b-nav-item>
                    <b-nav-item :to="{name: 'AccountOrdersList'}">Zamówienia</b-nav-item>
                    <b-nav-item :to="{name: 'AccountSetting'}">Ustawienia</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item :to="{name: 'Logout'}">Wyloguj się</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "AccountLayout",
    data() {
        return {
            name: ''
        }
    },
    created() {
        this.$axios.get('user/logged')
            .then((data) => {
                let user = data.data;
                this.name = user.name + ' ' + user.last_name;
            })
    }
}
</script>

<style scoped>
.navbar {
    border-bottom: 1px solid #e4e4e4 !important;
    margin-bottom: 30px !important;
}
</style>
