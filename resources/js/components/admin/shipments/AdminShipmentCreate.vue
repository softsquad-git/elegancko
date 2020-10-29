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
                <b-button variant="outline-secondary" type="submit">Zapisz</b-button>
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
            }
        }
    },
    methods: {
        save() {
            this.$axios.post('admin/shipments/create', this.data)
                .then((data) => {
                    if (data.data.success === 1) {
                        this.$emit('loadData');
                        this.data.name = '';
                        this.data.price = '';
                        this.data.locale = '';
                        this.closeModal();
                    }
                })
        },
        openModal() {
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
