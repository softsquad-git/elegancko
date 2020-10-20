<template>
    <div class="admin-page">
        <h5 class="title">
            {{ title }}
        </h5>
        <div class="options">
            <b-button @click="addType" variant="outline-secondary"><span class="fa fa-plus" title="Dodaj typ"></span>
            </b-button>
            <b-button :to="{name: 'AdminPageSetting'}" variant="outline-danger" title="Anuluj"><span
                class="fa fa-times"></span></b-button>
        </div>
        <div class="content mt-4 mb-5">
            <form @submit.prevent="save">
                <div class="form-group row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12">
                        <select id="type" class="form-control" aria-label="Wybierz typ" v-model="data.type_id">
                            <option selected value="">Wybierz typ</option>
                            <option v-for="type in types" :value="type.id">{{ type.name }}</option>
                        </select>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12">
                        <input id="value" class="form-control" aria-label="Wartość" v-model="data.value"
                               placeholder="Wartość">
                    </div>
                </div>
                <div class="form-group">
                    <b-button type="submit" variant="outline-secondary">Zapisz</b-button>
                </div>
            </form>
        </div>
        <admin-create-setting-type ref="adminCreateSettingType" @loadData="loadDataTypes"></admin-create-setting-type>
    </div>
</template>

<script>
import AdminCreateSettingType from "./AdminCreateSettingType";

export default {
    name: "AdminDataSetting",
    components: {AdminCreateSettingType},
    data() {
        return {
            title: 'Dodaj ustawienia',
            data: {
                type_id: '',
                value: ''
            },
            types: []
        }
    },
    methods: {
        loadDataTypes() {
            this.$axios.get('admin/settings/types/all')
                .then((data) => {
                    this.types = data.data.data;
                })
        },
        addType() {
            this.$refs.adminCreateSettingType.openModal();
        },
        save() {
            this.$axios.post('admin/settings/create', this.data)
                .then((data) => {
                    if (data.data.success === 1) {
                        this.data.type_id = '';
                        this.data.value = '';
                        alert('Dodano ustawienia')
                    }
                })
        }
    },
    created() {
        this.loadDataTypes();
    }
}
</script>

<style scoped>

</style>
