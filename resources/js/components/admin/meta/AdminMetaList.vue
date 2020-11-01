<template>
    <div class="admin-page">
        <h5 class="title">
            {{ title }}
        </h5>
        <div class="options">
            <b-button :to="{name: 'AdminMetaData', params: {action: 'create'}}" variant="outline-secondary"><span
                class="fa fa-add"></span>
            </b-button>
        </div>
        <div class="content mt-4">
            <table v-if="data.data.length > 0" class="table">
                <thead>
                <tr>
                    <th scope="col" class="text-center">L.p.</th>
                    <th scope="col">Strona</th>
                    <th scope="col">Tytuł</th>
                    <th scope="col">Opis</th>
                    <th scope="col">Słowa kluczowe</th>
                    <th scope="col">Język</th>
                    <th scope="col">Opcje</th>
                </tr>
                </thead>
                <tr v-for="(meta, index) in data.data">
                    <th scope="row" class="text-center">{{ index + 1 }}</th>
                    <td>{{ meta.resource.name }}</td>
                    <td>{{ meta.title }}</td>
                    <td>{{ meta.description }}</td>
                    <td>{{ meta.keywords }}</td>
                    <td v-html="meta.locale"></td>
                    <td>
                        <router-link :to="{name: 'AdminMetaData', params: {action: 'edit', id: meta.id}}"
                                     class="btn btn-outline-secondary btn-sm">Edytuj
                        </router-link>
                    </td>
                </tr>
                <tbody>
                </tbody>
            </table>
            <pagination :data="data" @pagination-change-page="loadData"></pagination>
            <no-data-component v-if="data.data.length < 1"
                               :msg="'Brak danych do wyświetlenia'"/>
        </div>
    </div>
</template>

<script>
import NoDataComponent from "../../NoDataComponent";

export default {
    name: "AdminMetaList",
    components: {NoDataComponent},
    data() {
        return {
            title: 'SEO',
            data: {}
        }
    },
    methods: {
        loadData() {
            this.$axios.get('admin/meta/all')
            .then((data) => {
                this.data = data.data;
            })
        }
    },
    created() {
        this.loadData()
        document.title = this.title;
    }
}
</script>

<style scoped>

</style>
