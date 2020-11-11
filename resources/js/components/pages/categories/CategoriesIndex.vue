<template>
    <div>
        <div class="top-banner-products" :style="'background: url('+banner+')'">
            <div class="bg">
                <h1 class="title title-top-banner">{{ title }}</h1>
            </div>
        </div>
        <div class="container-fluid">
            <form class="mt-5 mb-5" @submit.prevent="loadData">
                <div class="row pl-1 pr-1">
                    <div class="col-xl-5 p-0 col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <input id="name" aria-label="Nazwa" class="form-control" placeholder="Nazwa ..."
                               v-model="params.name">
                    </div>
                    <div class="col-xl-3 p-0 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <select id="category" aria-label="Sortuj" class="form-control" v-model="params.ordering">
                            <option selected value="">Sortuj od</option>
                            <option value="ASC">Najstarsze</option>
                            <option value="DESC">Najnowsze</option>
                        </select>
                    </div>
                    <div class="col-xl-3 p-0 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <select id="type" aria-label="Na strone" class="form-control" v-model="params.pagination">
                            <option selected value="">Rekordów na stronę</option>
                            <option value="3">3</option>
                            <option value="6">6</option>
                            <option value="9">9</option>
                            <option value="12">12</option>
                            <option value="15">15</option>
                            <option value="18">18</option>
                        </select>
                    </div>
                    <div class="col-xl-1 p-0 col-lg-1 col-md-1 col-sm-12 col-xs-12">
                        <b-button type="submit" class="search-btn w-100" variant="outline-secondary">
                            <span class="fa fa-search"></span>
                        </b-button>
                    </div>
                </div>
            </form>
            <categories :limit="this.params.pagination"
                        :name="this.params.name"
                        :position="''"
                        :ordering="this.params.ordering"></categories>
        </div>
        <meta-component
            type="CATEGORIES"/>
    </div>
</template>

<script>
import Categories from "../Categories";
import MetaComponent from "../MetaComponent";

export default {
    name: "CategoriesIndex",
    components: {MetaComponent, Categories},
    data() {
        return {
            title: 'Kategorie',
            data: [],
            banner: '',
            params: {
                name: '',
                ordering: '',
                pagination: 18
            }
        }
    },
    methods: {
        loadData(page = 1) {
            this.$axios.get(`categories/all?page=${page}&name=${this.params.name}&ordering=${this.params.ordering}&pagination=${this.params.pagination}`)
                .then((data) => {
                    this.data = data.data.data;
                }).catch((error) => this.handleAjaxError(error))
        }
    },
    watch: {
        'params.ordering'() {
            this.loadData();
        },
        'params.pagination'() {
            this.loadData()
        }
    },
    created() {
        this.loadData();
        this.$axios.get('front/settings/find-by-type/categories_top_banner')
            .then((data) => {
                this.banner = data.data.data.value
            });
    }
}
</script>

<style lang="scss" scoped>
.search-btn {
    border-radius: 0;
    font-size: 20px;
    border: 0;
    padding-top: 8px;
}

.top-banner-products {
    height: 700px;
    background-position: center center !important;
    background-size: cover !important;
    text-align: center;
    line-height: 700px;

    .bg {
        background: #00000021;
    }
}

</style>
