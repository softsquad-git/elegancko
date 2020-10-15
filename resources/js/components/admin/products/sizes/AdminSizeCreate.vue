<template>
    <b-modal ref="create-size" hide-footer :title="title">
        <form @submit.prevent="save">
            <div class="form-group">
                <input id="key" type="text" placeholder="Klucz" class="form-control" aria-label="Klucz"
                       v-model="data.key">
            </div>
            <div class="form-group">
                <input id="name" type="text" placeholder="Nazwa" class="form-control" aria-label="Nazwa"
                       v-model="data.name">
            </div>
            <div class="form-group">
                <b-button variant="outline-secondary" type="submit">Zapisz</b-button>
            </div>
        </form>
    </b-modal>
</template>

<script>
export default {
    name: "AdminSizeCreate",
    data() {
        return {
            title: 'Dodaj rozmiar',
            data: {
                key: '',
                name: ''
            }
        }
    },
    methods: {
        save() {
            this.$axios.post('admin/products/sizes/create', this.data)
                .then((data) => {
                    if (data.data.success === 1) {
                        this.$emit('loadData')
                        this.data.key = '';
                        this.data.name = '';
                        this.closeModal();
                    }
                })
        },
        closeModal() {
            this.$refs['create-size'].hide()
        },
        openModal() {
            this.$refs['create-size'].show()
        }
    }
}
</script>

<style scoped>

</style>
