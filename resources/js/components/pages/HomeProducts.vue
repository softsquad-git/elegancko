<template>
    <div class="row p-2">
        <circle-spinner v-if="isSpinner" :loading="isSpinner"></circle-spinner>
        <div v-if="!isSpinner" v-for="product in data" class="col-xl-2 col-lg-2 col-md-3 p-0">
            <router-link :to="{name: 'ProductShow', params: {title: product.title, id: product.id}}"
                         class="home-products-list" :style="'background: url('+product.image+')'">
                <div class="bg">
                    <div class="price">
                        {{ product.price.price }}
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import {CircleSpinner} from 'vue-spinners'
export default {
    name: "HomeProducts",
    components: {CircleSpinner},
    data() {
        return {
            data: [],
            isSpinner: false
        }
    },
    methods: {
        loadData() {
            this.isSpinner = true;
            this.$axios.get(`front/products/all?pagination=6`)
                .then((data) => {
                    this.isSpinner = false;
                    this.data = data.data.data;
                }).catch((error) => {
                this.isSpinner = false;
                this.handleAjaxError(error)
            })
        },
    },
    created() {
        this.loadData()
    }
}
</script>

<style lang="scss" scoped>
.home-products-list {
    min-height: 250px;
    background-size: cover !important;
    display: block;
    line-height: 250px;

    .bg {
        height: 100%;

        .price {
            font-weight: bold;
            font-size: 25px;
            color: transparent;
        }

        &:hover {
            transition: all 0.5s;
            background: #0000009e;

            .price {
                color: #fff;
            }
        }
    }
}
</style>
