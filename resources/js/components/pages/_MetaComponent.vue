<template>

</template>

<script>
export default {
    name: "_MetaComponent",
    props: {
        title: ''
    },
    created() {
        document.title = this.title;
    }
}
</script>

<style scoped>

</style>
