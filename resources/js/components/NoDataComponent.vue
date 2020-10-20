<template>
    <div class="alert alert-danger text-center">
        {{ msg }}
    </div>
</template>

<script>
export default {
    name: "NoDataComponent",
    data() {
        return {
            //
        }
    },
    props: {
        msg: ''
    }
}
</script>

<style scoped>

</style>
