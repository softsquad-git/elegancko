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
                <select id="locale" aria-label="Wybierz język" v-model="data.locale" class="form-control">
                    <option value="" selected>Wybierz język</option>
                    <option value="pl">Polski</option>
                    <option value="en">Angielski</option>
                </select>
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
                name: '',
                locale: ''
            },
            action: false,
            sizeId: ''
        }
    },
    methods: {
        save() {
            let url = 'admin/products/sizes/create';
            if (this.action === true) {
                url = `admin/products/sizes/update/${this.sizeId}`
            }
            this.$axios.post(url, this.data)
                .then((data) => {
                    if (data.data.success === 1) {
                        this.$emit('loadData')
                        this.data.key = '';
                        this.data.name = '';
                        this.closeModal();
                    }
                }).catch((error) => this.handleAjaxError(error))
        },
        closeModal() {
            this.$refs['create-size'].hide()
        },
        openModal(action = null, item = null) {
            if (action === 'edit') {
                this.action = true;
                this.sizeId = item.id
                this.data.name = item.name;
                this.data.key = item.key;
                this.data.locale = item.locale_key;
            }
            this.$refs['create-size'].show()
        }
    }
}
</script>

<style scoped>

</style>
