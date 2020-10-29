<template>
<div class="order-shipment">
    <h5 class="order-title">{{ title }} ({{data.data.length}})</h5>
    <table v-if="data.data.length > 0" class="table">
        <thead>
        <tr>
            <th scope="col" class="text-center">L.p.</th>
            <th scope="col">Zdjęcie</th>
            <th scope="col">Tytuł</th>
            <th scope="col">Cena</th>
            <th scope="col">Kolor</th>
            <th scope="col">Rozmiar</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(product, index) in data.data">
            <th scope="row" class="text-center">{{ index + 1 }}</th>
            <td><img style="width: 100px;" :src="product.product.image" :alt="product.title"></td>
            <td>{{ product.product.title }}</td>
            <td>{{ product.product.price.price }} {{ product.product.price.currency }}</td>
            <td>{{ product.color.name }}</td>
            <td>{{ product.size.name }}</td>
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: "AdminOrderProducts",
    data() {
        return {
            title: 'Zamówione produkty',
            data: []
        }
    },
    props: {
        id: ''
    },
    methods: {
        loadData() {
            this.$axios.get(`admin/orders/all-products/${this.id}`)
            .then((data) => {
                this.data = data.data
            })
        }
    },
    created() {
        this.loadData();
    }
}
</script>

<style scoped>
.order-title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1em;
    margin: 20px 0;
}
</style>
