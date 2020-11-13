<template>
    <div class="container pt-5">
        <h3>{{ page.title }}</h3>
        <p v-html="page.content"></p>
        <meta-component
            :title="page.meta.title"
            :description="page.meta.description"
            :keywords="page.meta.keywords"
            type="ITEM"
            />
    </div>
</template>

<script>
import MetaComponent from "../MetaComponent";
export default {
    name: "ShowPage",
    components: {MetaComponent},
    data() {
        return {
            page: {}
        }
    },
    methods: {
        loadData() {
            this.$Progress.start();
            let id = this.$route.params.id;
            this.$axios.get(`front/pages/find/${id}`)
                .then((data) => {
                    this.$Progress.finish();
                    this.page = data.data.data;
                })
                .catch((error) => this.handleAjaxError(error))
        }
    },
    created() {
        this.loadData();
    }
}
</script>

<style scoped>

</style>
