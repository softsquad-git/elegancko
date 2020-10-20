<template>
    <div class="container">
        <div class="mt-5 mb-5">
            <h3 class="title">{{ title }} ({{ $store.state.cartCount }})</h3>
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
        <table v-if="data.length > 0" class="table">
            <thead>
            <tr>
                <th scope="col" class="text-center">L.p.</th>
                <th scope="col">Zdjęcie</th>
                <th scope="col">Nazwa produktu</th>
                <th scope="col">Kolor</th>
                <th scope="col">Rozmiar</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(basket, index) in data" :key="basket.id">
                <th scope="row" class="text-center">
                    {{ index + 1 }} <br/>
                    <input type="checkbox" :value="basket.id" v-model="products_ids" aria-label="Wybierz"> <br/>
                    <span @click="edit(basket)" class="fa fa-pencil edit"></span>
                </th>
                <td><img class="width-basket-product" :src="basket.product.image" :alt="basket.product.title"></td>
                <td>{{ basket.product.title }}</td>
                <td>
                    <div :style="'background:' + basket.color.hex" class="sample"></div>
                    {{ basket.color.name }}
                </td>
                <td>{{ basket.size.name }}</td>
            </tr>
            </tbody>
        </table>
        <no-data-component v-if="data.length < 1" :msg="'Brak produktów w koszyku'"/>
    </div>
</template>

<script>
import NoDataComponent from "../../NoDataComponent";

export default {
    name: "BasketIndexPage",
    components: {NoDataComponent},
    data() {
        return {
            data: [],
            title: 'Koszyk',
            params: {
                ordering: '',
                pagination: ''
            },
            products_ids: []
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
        remove() {
            if (this.products_ids.length > 0) {
                if (localStorage.getItem('token') !== null) {
                    this.$axios.post('basket/remove', this.products_ids)
                        .then((data) => {
                            if (data.data.success === 1) {
                                this.loadData();
                            }
                        })
                } else {
                    this.$store.commit('removeProductFromBasket', this.products_ids)
                }
            } else {
                alert('Wybierz produkty do usunięcia')
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
