<template>
    <b-modal ref="create-shipment" hide-footer :title="title">
        <form @submit.prevent="save">
            <div class="form-group">
                <input id="name" type="text" placeholder="Nazwa" class="form-control" aria-label="Nazwa"
                       v-model="data.name">
            </div>
            <div class="form-group">
                <input id="price" type="text" placeholder="Cena" class="form-control" aria-label="Cena"
                       v-model="data.price">
            </div>
            <div class="form-group">
                <select id="locale" aria-label="Wybierz język" v-model="data.locale" class="form-control">
                    <option value="" selected>Wybierz język</option>
                    <option value="pl">Polski</option>
                    <option value="en">Angielski</option>
                </select>
            </div>
            <div class="form-group">
                <b-button variant="outline-secondary" type="submit">
                    <b-spinner v-if="loadSpinner" small></b-spinner>
                    Zapisz
                </b-button>
            </div>
        </form>
    </b-modal>
</template>

<script>
export default {
    name: "AdminShipmentCreate",
    data() {
        return {
            title: 'Dodaj opcję wysyłki',
            data: {
                name: '',
                price: '',
                locale: ''
            },
            action: false,
            shipmentId: '',
            loadSpinner: false
        }
    },
    methods: {
        save() {
            this.loadSpinner = true;
            let url = 'admin/shipments/create';
            if (this.action === true) {
                url = `admin/shipments/update/${this.shipmentId}`;
            }
            this.$axios.post(url, this.data)
                .then((data) => {
                    this.loadSpinner = false;
                    if (data.data.success === 1) {
                        this.$emit('loadData');
                        this.data.name = '';
                        this.data.price = '';
                        this.data.locale = '';
                        this.closeModal();
                    }
                }).catch((error) => {
                this.loadSpinner = false;
                this.handleAjaxError(error)
            })
        },
        openModal(action = null, item = null) {
            if (action === 'edit') {
                this.action = true;
                this.shipmentId = item.id;
                this.data.locale = item.locale_key;
                this.data.price = item.price;
                this.data.name = item.name;
            }
            this.$refs['create-shipment'].show()
        },
        closeModal() {
            this.$refs['create-shipment'].hide()
        }
    }
}
</script>

<style scoped>

</style>
