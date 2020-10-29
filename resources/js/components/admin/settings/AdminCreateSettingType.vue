<template>
    <b-modal ref="create-setting-type" hide-footer :title="title">
        <form @submit.prevent="save">
            <div class="form-group">
                <input id="name" type="text" placeholder="Nazwa" class="form-control" aria-label="Nazwa"
                       v-model="data.name">
            </div>
            <div class="form-group">
                <input id="type" type="text" placeholder="Typ" class="form-control" aria-label="Type"
                       v-model="data._key">
            </div>
            <div class="form-group">
                <b-button variant="outline-secondary" type="submit">Zapisz</b-button>
            </div>
        </form>
    </b-modal>
</template>

<script>
export default {
    name: "AdminCreateSettingType",
    data() {
        return {
            data: {
                name: '',
                _key: ''
            },
            title: 'Dodaj własny type ustawień'
        }
    },
    methods: {
        save() {
            this.$axios.post('admin/settings/types/create', this.data)
                .then((data) => {
                    if (data.data.success === 1) {
                        this.$emit('loadData');
                        this.data.name = '';
                        this.data._key = '';
                        this.closeModal();
                    }
                })
        },
        openModal() {
            this.$refs['create-setting-type'].show();
        },
        closeModal() {
            this.$refs['create-setting-type'].hide();
        }
    }
}
</script>

<style scoped>

</style>
