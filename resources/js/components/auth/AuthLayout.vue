<template>
<div class="auth">
    <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-7">
            <div class="auth-bg" :style="'background: url('+banner+')'"></div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-5">
            <router-view/>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "AuthLayout",
        data() {
            return{
                banner: ''
            }
        },
        created() {
            this.$axios.get('front/settings/find-by-type/auth_left_banner')
                .then((data) => {
                    this.banner = data.data.data.value
                }).catch((error) => this.handleAjaxError(error))
        }
    }
</script>

<style scoped>

</style>
