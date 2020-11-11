<template>
<div class="admin-page">
    <h4 class="title">{{ title }}</h4>
    <div class="options">
        <b-button @click="createColorModal" variant="outline-secondary"><span
            class="fa fa-plus"></span>
        </b-button>
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
        <table v-if="data.data.length > 0" class="table">
            <thead>
            <tr>
                <th scope="col" class="text-center">L.p.</th>
                <th scope="col">Nazwa</th>
                <th scope="col">Kod</th>
                <th scope="col">Kolor</th>
                <th scope="col">Język</th>
                <th scope="col">Opcje</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(color, index) in data.data">
                <th scope="row" class="text-center">{{ index + 1 }}</th>
                <td>{{ color.name }}</td>
                <td>{{ color.hex }}</td>
                <td :style="'background:'+color.hex"></td>
                <td v-html="color.locale"></td>
                <td>
                    <b-button @click="editColorModal(color)" class="btn-sm" variant="outline-secondary">Edytuj</b-button>
                    <b-button @click="remove(color.id)" class="btn-sm" variant="outline-secondary">Usuń
                    </b-button>
                </td>
            </tr>
            </tbody>
        </table>
        <pagination :data="data" @pagination-change-page="loadData"></pagination>
        <no-data-component v-if="data.data.length < 1" :msg="'Brak danych do wyświetlenia'"/>
    </div>
    <admin-create-color ref="createColor" @loadData="loadData"></admin-create-color>
</div>
</template>

<script>
import NoDataComponent from "../../../NoDataComponent";
import AdminCreateColor from "./AdminCreateColor";
export default {
    name: "AdminColorsList",
    components: {AdminCreateColor, NoDataComponent},
    data() {
        return {
            title: 'Kolory',
            data: {},
            params: {
                ordering: '',
                pagination: ''
            }
        }
    },
    methods: {
        loadData(page = 1) {
            this.$axios.get(`admin/products/colors/all?page=${page}&ordering=${this.params.ordering}&pagination=${this.params.pagination}`)
                .then((data) => {
                    this.data = data.data;
                })
                .catch((error) => this.handleAjaxError(error));
        },
        ordering(ordering) {
            this.params.ordering = ordering;
            this.loadData();
        },
        pagination(count) {
            this.params.pagination = count;
            this.loadData();
        },
        createColorModal() {
            this.$refs.createColor.openModal();
        },
        editColorModal(item) {
            this.$refs.createColor.openModal('edit', item)
        },
        remove(id) {
            this.$confirm(
                {
                    message: `Na pewno chcesz usunąć kolor?`,
                    button: {
                        no: 'Nie',
                        yes: 'Tak'
                    },
                    callback: confirm => {
                        if (confirm) {
                            this.$axios.delete(`admin/products/colors/remove/${id}`)
                                .then((data) => {
                                    if(data.data.success === 1) {
                                        this.loadData();
                                        this.$notify({
                                            group: 'notification-success',
                                            title: 'Udało się',
                                            text: data.data.msg
                                        })
                                    }
                                })
                                .catch((error) => this.handleAjaxError(error))
                        }
                    }
                }
            )
        }
    },
    created() {
        this.loadData();
        document.title = this.title
    }
}
</script>

<style scoped>

</style>
