<template>
<div class="container-fluid">
    <b-navbar toggleable="lg" type="light">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item :to="{name: 'IndexPage'}">Panel administracyjny</b-nav-item>
                <b-nav-item :to="{name: 'AdminProductsList'}">Produkty</b-nav-item>
                <b-nav-item :to="{name: 'IndexPage'}">Użytkownicy</b-nav-item>
                <b-nav-item :to="{name: 'IndexPage'}">Ustawienia</b-nav-item>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
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

</style>
