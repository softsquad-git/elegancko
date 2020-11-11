<template>
<div class="row">
    <div class="col-xl-4 col-lg-4 col-md-4 p-0" v-for="category in categories">
        <router-link :to="{name: 'ProductsIndex', params: {category: category.alias }}" class="category-bg-3 _category-bg" :style="'background: url('+category.image+')'">
            <div class="category-bg vertical-center">
                <div class="category-name">
                    {{ category.name }}
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
    name: "Categories",
    data() {
        return {
            categories: []
        }
    },
    props: {
        limit: null,
        position: null,
        name: null,
        ordering: null
    },
    methods: {
        loadCategories(page = 1) {
            this.$axios.get(`categories/all?page=${page}&position=${this.position}&pagination=${this.limit}&name=${this.name}&ordering=${this.ordering}`)
            .then((data) => {
                this.categories = data.data.data;
            }).catch((error) => this.handleAjaxError(error))
        }
    },
    created() {
        this.loadCategories();
    }
}
</script>

<style lang="scss" scoped>
.category-bg {
    background: #00000021;
    text-align: center;
    height: 100%;
    &:hover{
        background: #0000009e;
        transition: all 0.5s;
        .category-name{
            background: transparent;
        }
    }
}
.category-bg-3 {
    height: 900px;
}
._category-bg {
    background-size: cover!important;
    background-position: center center!important;
    display: block;
}
.category-name {
    background: #0000009e;
    color: #dedede;
    font-weight: bold;
    font-size: 3em;
    padding: 10px 5px;
    width: 100%;
}
.vertical-center {
    display: flex;
    align-items: center;
}
@media only screen and (max-width: 420px) {
    .category-bg-3 {
        height: 550px!important;
    }
}
</style>
