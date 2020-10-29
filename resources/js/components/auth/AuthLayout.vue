<template>
<div class="auth">
    <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-7">
            <div class="auth-bg"></div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-5">
            <router-view/>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "AuthLayout"
    }
</script>

<style scoped>

</style>
