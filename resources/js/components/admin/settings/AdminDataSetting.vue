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
                    <div class="col-xl-5 col-lg-5 col-md-5 col-xs-12 col-sm-12">
                        <select :disabled="is_edit === true" id="type" class="form-control" aria-label="Wybierz typ" v-model="data.type_id">
                            <option selected value="">Wybierz typ</option>
                            <option v-for="type in types" :value="type.id">{{ type.name }}</option>
                        </select>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-2 col-xs-12 col-sm-12">
                        <select id="selectType" class="form-control" aria-label="Wybierz typ" v-model="data.resource_type">
                            <option selected value="">Wybierz rodzaj</option>
                            <option value="1">Tekst</option>
                            <option value="2">Plik</option>
                        </select>
                    </div>
                    <div class="col-xl-5 col-lg-5 col-md-5 col-xs-12 col-sm-12">
                        <input v-if="data.resource_type == 1" id="value" class="form-control" aria-label="Wartość" v-model="data.value"
                               placeholder="Wartość">
                        <b-form-group v-if="data.resource_type == 2" label="Wbierz plik:" label-for="file-default" label-cols-sm="2">
                            <b-form-file ref="files" id="file-default"></b-form-file>
                        </b-form-group>
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
                resource_type: '',
                value: '',
            },
            types: [],
            is_edit: false
        }
    },
    methods: {
        loadDataTypes() {
            this.$axios.get('admin/settings/types/all')
                .then((data) => {
                    this.types = data.data.data;
                }).catch((error) => this.handleAjaxError(error))
        },
        addType() {
            this.$refs.adminCreateSettingType.openModal();
        },
        save() {
            if (this.data.resource_type == 1) {
                return this.saveData(this.data)
            } else {
                this.data.value = this.$refs.files.files;
                let formData = new FormData();
                let file = this.data.value;
                formData.append('value', file[0], file.name);
                formData.append('type_id', this.data.type_id);
                formData.append('resource_type', this.data.resource_type);
                return this.saveData(formData);
            }
        },
        saveData(data) {
            let url = 'admin/settings/create'
            if (this.$route.params.id) {
                url = `admin/settings/update/${this.$route.params.id}`
            }
            this.$axios.post(url, data)
                .then((data) => {
                    if (data.data.success === 1) {
                        this.data.type_id = '';
                        this.data.value = '';
                        this.data.resource_type = '';
                        this.$notify({
                            group: 'notification-success',
                            title: 'Udało się',
                            text: 'Dane zostały zapisane'
                        })
                        this.$router.push({name: 'AdminPageSetting'})
                    }
                }).catch((error) => this.handleAjaxError(error))
        }
    },
    created() {
        this.loadDataTypes();
        if (this.$route.params.action === 'edit' && this.$route.params.id) {
            this.$axios.get(`admin/settings/find/${this.$route.params.id}`)
            .then((data) => {
                let item = data.data.data;
                this.data.type_id = item.type.id;
                this.data.resource_type = item.resource_type;
                this.data.value = item.value;
                this.is_edit = true;
            }).catch((error) => this.handleAjaxError(error))
        }
    }
}
</script>

<style scoped>

</style>
