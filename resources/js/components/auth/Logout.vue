<template>

</template>

<script>
export default {
    name: "Logout",
    created() {
        this.$axios.post('auth/logout')
        .then((data) => {
            if (data.data.success === 1) {
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
                this.$notify({
                    group: 'foo',
                    title: 'Udało się',
                    text: data.data.msg
                })
                this.$router.push({
                    name: 'IndexPage'
                })
            }
        })
        .catch((error) => {
            if (error.response.status === 401) {
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
                this.$router.push({
                    name: 'IndexPage'
                })
            }
        })
    }
}
</script>

<style scoped>

</style>
