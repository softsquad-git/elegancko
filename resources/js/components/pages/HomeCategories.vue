<template>
<div class="row">
    <div class="col-xl-4 col-lg-4 col-md-4 p-0" v-for="category in categories.slice(0, 3)">
        <router-link to="#" class="category-bg-3 _category-bg" :style="'background: url('+category.image+')'">
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
    name: "HomeCategories",
    data() {
        return {
            categories: []
        }
    },
    methods: {
        loadCategories() {
            this.$axios.get(`categories/all?position=2&pagination=10`)
            .then((data) => {
                this.categories = data.data.data;
            })
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
</style>
