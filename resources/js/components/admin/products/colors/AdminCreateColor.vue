<template>
    <b-modal ref="create-color" hide-footer :title="title">
        <form @submit.prevent="save">
            <div class="form-group">
                <input id="key" type="text" placeholder="Klucz" class="form-control" aria-label="Klucz"
                       v-model="data.hex">
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
                <b-button variant="outline-secondary" type="submit"><b-spinner v-if="loadSpinner" small></b-spinner> Zapisz</b-button>
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
                name: '',
                locale: ''
            },
            action: false,
            colorId: '',
            loadSpinner: false
        }
    },
    methods: {
        save() {
            this.loadSpinner = true;
            let url = 'admin/products/colors/create';
            if (this.action === true) {
                url = `admin/products/colors/update/${this.colorId}`
            }
            this.$axios.post(url, this.data)
            .then((data) => {
                this.loadSpinner = false;
                if (data.data.success === 1) {
                    this.data.hex = '';
                    this.data.name = '';
                    this.$emit('loadData');
                    this.closeModal();
                }
            }).catch((error) => {this.loadSpinner = false; this.handleAjaxError(error)})
        },
        openModal(action = null, item = null) {
            if (action === 'edit') {
                this.action = true;
                this.colorId = item.id;
                this.data.hex = item.hex;
                this.data.name = item.name;
                this.data.locale = item.locale_key;
            }
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
