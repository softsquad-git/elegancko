<template>
    <div class="admin-page">
        <h5 class="title">
            {{ title }}
        </h5>
        <div class="options">
            <b-button :to="{name: 'AdminDataSetting', params: {action: 'create'}}" variant="outline-secondary"><span
                class="fa fa-plus"></span></b-button>
            <b-dropdown variant="outline-secondary">
                <template v-slot:button-content>
                    <span class="fa fa-filter"></span>
                </template>
                <b-dropdown-item @click="ordering('DESC')">Malejąco</b-dropdown-item>
                <b-dropdown-item @click="ordering('ASC')">Rosnąco</b-dropdown-item>
            </b-dropdown>
            <b-dropdown variant="outline-secondary">
                <template v-slot:button-content>
                    <span class="fa fa-sort-numeric-up"></span>
                </template>
                <b-dropdown-item @click="pagination(6)">6</b-dropdown-item>
                <b-dropdown-item @click="pagination(12)">12</b-dropdown-item>
                <b-dropdown-item @click="pagination(18)">18</b-dropdown-item>
                <b-dropdown-item @click="pagination(24)">24</b-dropdown-item>
            </b-dropdown>
        </div>
        <div class="content mt-4">
            <table v-if="data.length > 0" class="table">
                <thead>
                <tr>
                    <th scope="col">L.p.</th>
                    <th scope="col">Nazwa</th>
                    <th scope="col">Wartość</th>
                    <th scope="col">Opcje</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(setting, index) in data">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ setting.type.name }}</td>
                    <td>{{ setting.value }}</td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <no-data-component v-if="data.length < 1" :msg="'Nie dodano żadnych ustawień'"></no-data-component>
        </div>
    </div>
</template>

<script>
import NoDataComponent from "../../NoDataComponent";
export default {
    name: "AdminPageSetting",
    components: {NoDataComponent},
    data() {
        return {
            data: [],
            title: 'Ustawienia strony',
            params: {
                ordering: '',
                pagination: ''
            }
        }
    },
    methods: {
        loadData() {
            this.$axios.get(`admin/settings/all`)
            .then((data) => {
                this.data = data.data.data;
            })
        }
    },
    created() {
        this.loadData();
        document.title = this.title;
    }
}
</script>

<style scoped>

</style>
