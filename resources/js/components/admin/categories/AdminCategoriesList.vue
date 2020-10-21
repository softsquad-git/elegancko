<template>
    <div class="admin-page">
        <h4 class="title">
            {{ title }}
        </h4>
        <div class="options">
            <b-button @click="showAdminDataCategory ^= true" variant="outline-secondary"><span
                class="fa fa-plus"></span>
            </b-button>
            <b-button @click="showSearch ^= true" variant="outline-secondary"><span class="fa fa-search"></span></b-button>
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
        <form v-if="showSearch" class="mt-3 mb-3" @submit.prevent="loadData">
            <div class="row pl-3 pr-3">
                <div class="col-xl-4 p-0 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <input id="name" aria-label="Nazwa" class="form-control" placeholder="Nazwa ..." v-model="params.name">
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 p-0 col-xs-12">
                    <select id="locale" aria-label="Język" class="form-control" v-model="params.locale">
                        <option selected value="">Wybierz język</option>
                        <option value="pl">PL</option>
                        <option value="en">EN</option>
                    </select>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 p-0 col-sm-12 col-xs-12">
                    <select id="active" aria-label="Aktywny?" class="form-control" v-model="params.is_active">
                        <option selected value="">Aktywny?</option>
                        <option value="1">Tak</option>
                        <option value="0">Nie</option>
                    </select>
                </div>
                <div class="col-xl-1 p-0 col-lg-1 col-md-1 col-sm-12 col-xs-12">
                    <b-button type="submit" class="search-btn w-100" variant="outline-secondary">
                        <span class="fa fa-search"></span>
                    </b-button>
                </div>
            </div>
        </form>
        <div class="content">
            <admin-data-category
                v-if="showAdminDataCategory"
                :category="category"
                @loadData="closeAdminDataCategory"></admin-data-category>
            <div class="row">
                <div class="col-12" v-for="category in data">
                    <div class="admin-categories-single">
                        <h4>{{ category.name }}</h4>
                        <span class="created">Dodano: {{ category.created_at | moment('calendar') }}</span>
                        <h5>Alias: {{ category.alias }}</h5>
                        <div class="info">
                            <span>Liczba produktów: <b>{{ category.c_products }}</b></span>
                            <span>Aktywna: <b>{{ category.activated === true ? 'Tak' : 'Nie' }}</b></span>
                        </div>
                        <div class="footer">
                            <b-button variant="outline-secondary"><span class="fa fa-eye"></span></b-button>
                            <b-button @click="action(category, 'edit')" variant="outline-secondary"><span class="fa fa-pencil"></span></b-button>
                            <b-button @click="action(category.id, 'remove')" variant="outline-danger"><span class="fa fa-trash"></span></b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminDataCategory from "./AdminDataCategory";
export default {
    name: "AdminCategoriesList",
    components: {AdminDataCategory},
    data() {
        return {
            title: 'Lista kategorii',
            data: [],
            params: {
                name: '',
                ordering: '',
                pagination: '',
                is_active: '',
                locale: ''
            },
            showAdminDataCategory: false,
            category: null,
            showSearch: false
        }
    },
    methods: {
        loadData() {
            this.$axios.get(`admin/categories/all?name=${this.params.name}&ordering=${this.params.ordering}&pagination=${this.params.pagination}&is_active=${this.params.is_active}&locale=${this.params.locale}`)
                .then((data) => {
                    this.data = data.data.data;
                })
        },
        ordering(ordering) {
            this.params.ordering = ordering;
            this.loadData();
        },
        pagination(count) {
            this.params.pagination = count;
            this.loadData();
        },
        closeAdminDataCategory() {
            this.showAdminDataCategory = false;
            this.loadData();
        },
        action(id, type) {
            if (type === 'edit') {
                this.category = id; // id = object category
                this.showAdminDataCategory = true;
            } else if (type === 'remove') {
                this.$confirm(
                    {
                        message: `Na pewno chcesz usunąć kategorię? Wraz z nią zostaną usunięte powiązane produkty`,
                        button: {
                            no: 'Nie',
                            yes: 'Tak'
                        },
                        callback: confirm => {
                            if (confirm) {
                                this.$axios.delete(`admin/categories/remove/${id}`) // id = id category
                                    .then((data) => {
                                        if (data.data.success === 1) {
                                            this.loadData()
                                        }
                                    })
                            }
                        }
                    }
                )
            }
        }
    },
    created() {
        this.loadData();
        document.title = this.title;
    }
}
</script>

<style scoped>
.search-btn {
    border-radius: 0;
    font-size: 20px;
    border: 0;
    padding-top: 8px;
}

</style>
