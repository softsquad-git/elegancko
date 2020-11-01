<template>
    <div class="container">
        <div class="mt-5 mb-5">
            <h3 class="title">{{ title }} ({{ $store.getters.StoreCart.length }})</h3>
            <div class="options">
                <b-button v-if="products_ids.length > 0" @click="remove" variant="outline-danger">
                    <span class="fa fa-trash"></span>
                </b-button>
                <b-dropdown v-if="data.length > 2" variant="outline-secondary">
                    <template v-slot:button-content>
                        <span class="fa fa-filter"></span>
                    </template>
                    <b-dropdown-item @click="ordering('DESC')">Malejąco</b-dropdown-item>
                    <b-dropdown-item @click="ordering('ASC')">Rosnąco</b-dropdown-item>
                </b-dropdown>
                <b-dropdown v-if="data.length > 6" variant="outline-secondary">
                    <template v-slot:button-content>
                        <span class="fa fa-sort-numeric-up"></span>
                    </template>
                    <b-dropdown-item @click="pagination(6)">6</b-dropdown-item>
                    <b-dropdown-item @click="pagination(12)">12</b-dropdown-item>
                    <b-dropdown-item @click="pagination(18)">18</b-dropdown-item>
                    <b-dropdown-item @click="pagination(24)">24</b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
        <table v-if="$store.getters.StoreCart.length > 0" class="table">
            <thead>
            <tr>
                <th scope="col" class="text-center">L.p.</th>
                <th scope="col">Zdjęcie</th>
                <th scope="col">Nazwa produktu</th>
                <th scope="col">Kolor</th>
                <th scope="col">Rozmiar</th>
                <th scope="col">Ilość</th>
                <th scope="col">Cena</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(basket, index) in $store.getters.StoreCart" :key="basket.id">
                <th scope="row" class="text-center">
                    {{ index + 1 }}
                </th>
                <td><img class="width-basket-product" :src="basket.product.images[0].src" :alt="basket.product.title"></td>
                <td>{{ basket.product.title }}</td>
                <td>
                    <div :style="'background:' + basket.color.hex" class="sample"></div>
                    {{ basket.color.name }}
                </td>
                <td>{{ basket.size.name }}</td>
                <td>
                    {{ basket.quantity }}
                    <div class="btn-group-vertical btn-group-sm ml-2">
                        <button @click="editQuantity(index, 'up')" type="button" class="btn btn-outline-secondary"><span class="fa fa-caret-up"></span></button>
                        <button @click="editQuantity(index, 'down')" type="button" class="btn btn-outline-secondary"><span class="fa fa-caret-down"></span></button>
                    </div>
                </td>
                <td>{{formatPrice(basket.product.price.price * basket.quantity)}} {{basket.product.price.currency}}</td>
                <td>
                    <b-button @click="remove(index)" variant="outline-danger" size="md" type="button">
                        <span class="fa fa-trash"></span>
                    </b-button>
                </td>
            </tr>
            </tbody>
        </table>
        <div v-if="$store.getters.StoreCart.length > 0" class="row mt-2">
            <div class="col-12">
                <b-button @click="showOrder ^= true" type="button" variant="outline-secondary" class="float-right">Złóż zamówienie</b-button>
            </div>
        </div>
        <order-page class="mt-3" v-if="showOrder"/>
        <no-data-component v-if="$store.getters.StoreCart.length < 1" :msg="'Brak produktów w koszyku'"/>
        <meta-component type="BASKET"/>
    </div>
</template>

<script>

import MetaComponent from "../MetaComponent";
export default {
    name: "BasketIndexPage",
    components: {
        MetaComponent,
        OrderPage: () => import('../../orders/OrderPage'),
        NoDataComponent: () => import('../../NoDataComponent')
    },
    data() {
        return {
            data: [],
            showOrder: false,
            title: 'Koszyk',
            params: {
                ordering: '',
                pagination: ''
            },
            products_ids: [],
        }
    },
    methods: {
        loadData() {
            if (localStorage.getItem('token') !== null) {
                this.$axios.get(`basket/all?ordering=${this.params.ordering}&pagination=${this.params.pagination}`)
                    .then((data) => {
                        this.data = data.data.data;
                    })
            }
        },
        ordering(ordering) {
            this.params.ordering = ordering;
            this.loadData();
        },
        pagination(count) {
            this.params.pagination = count;
            this.loadData();
        },
        editQuantity(index, type) {
            const data = {
                index: index,
                type: type
            }
            this.$store.dispatch('editQuantityItem', data)
        },
        remove(index) {
            this.$store.dispatch('removeItem', index)
        },
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    },
    created() {
        this.loadData();
    }
}
</script>

<style scoped>
.width-basket-product {
    width: 100px;
}

.edit {
    color: #9c9c31;
}

.edit:hover {
    cursor: pointer;
    color: gray;
}

.sample {
    height: 20px;
    width: 20px;
    border-radius: 50px;
}

input[type=checkbox] {
    height: 25px;
    width: 25px;
}
</style>
