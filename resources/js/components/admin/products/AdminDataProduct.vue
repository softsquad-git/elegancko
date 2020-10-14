<template>
<div class="admin-page">
    <h4 class="title">
       {{ title }}
    </h4>
    <div class="options">
        <b-button :to="{name: 'AdminProductsList'}" variant="outline-danger"><span class="fa fa-times"></span></b-button>
    </div>
    <div class="content">

    </div>
</div>
</template>

<script>
    export default {
        name: "AdminDataProduct",
        data() {
            return {
                title: 'Dodaj produkt',
                data: {

                },
                categories: [],
            }
        },
        methods: {
            save() {
                this.$axios.post('admin/products/create', this.data)
                .then((data) => {
                    if (data.data.success === 1) {
                        this.$router.push({name: ''})
                    }
                })
                .catch((error) => {
                    //
                })
            },
            loadCategories() {
                this.$axios.get('categories/all')
                .then((data) => {
                    this.categories = data.data.data;
                })
                .catch((error) => {
                    //
                })
            }
        },
        created() {
            this.loadCategories();
        }
    }
</script>

<style scoped>

</style>
