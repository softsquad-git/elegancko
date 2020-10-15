<template>
    <b-modal ref="create-color" hide-footer :title="title">
        <form @submit.prevent="save">
            <div class="form-group">
                <input id="key" type="color" placeholder="Klucz" class="form-control" aria-label="Klucz"
                       v-model="data.hex">
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
    name: "AdminCreateColor",
    data() {
        return {
            title: '',
            data: {
                hex: '',
                name: ''
            }
        }
    },
    methods: {
        save() {
            this.$axios.post('admin/products/colors/create', this.data)
            .then((data) => {
                if (data.data.success === 1) {
                    this.data.hex = '';
                    this.data.name = '';
                    this.$emit('loadData');
                    this.closeModal();
                }
            })
        },
        openModal() {
            this.$refs['create-color'].show()
        },
        closeModal() {
            this.$refs['create-color'].hide()
        }
    }
}
</script>

<style scoped>

</style>
