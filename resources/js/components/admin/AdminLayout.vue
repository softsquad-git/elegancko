<template>
<div class="container-fluid">
    <b-navbar toggleable="lg" type="light">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item :to="{name: 'IndexPage'}">Panel administracyjny</b-nav-item>
                <b-nav-item :to="{name: 'AdminProductsList'}">Produkty</b-nav-item>
                <b-nav-item :to="{name: 'AdminCategoriesList'}">Kategorie</b-nav-item>
                <b-nav-item :to="{name: 'AdminPagesList'}">Strony</b-nav-item>
                <b-nav-item :to="{name: 'AdminUsersList'}">Użytkownicy</b-nav-item>
                <b-nav-item :to="{name: 'AdminOrdersList'}">Zamówienia</b-nav-item>
                <b-nav-item :to="{name: 'AdminMessagesList'}">Wiadomości</b-nav-item>
                <b-nav-item-dropdown text="Ustawienia" right>
                    <b-dropdown-item :to="{name: 'AdminPageSetting'}">Strony</b-dropdown-item>
                    <b-dropdown-item :to="{name: 'AdminAccountSetting'}">Dane podstawowe</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item :to="{name: 'IndexPage'}">Wyloguj się</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <router-view/>
</div>
</template>

<script>
    export default {
        name: "AdminLayout"
    }
</script>

<style scoped>
.navbar {
    border-bottom: 1px solid #e4e4e4!important;
    margin-bottom: 30px!important;
}
</style>
