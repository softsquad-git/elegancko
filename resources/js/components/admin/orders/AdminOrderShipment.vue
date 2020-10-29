<template>
<div class="order-shipment">
    <h5 class="order-title">{{ title }}</h5>
    <table class="table">
        <thead>
        <tr>

        </tr>
        </thead>
        <tbody>
        <tr><td>Nazwa</td><td>{{shipment.name}}</td></tr>
        <tr><td>Miasto</td><td>{{shipment.address.city}}</td></tr>
        <tr><td>Kod pocztowy</td><td>{{shipment.address.post_code}}</td></tr>
        <tr><td>Adres</td><td>{{shipment.address.address}}</td></tr>
        <tr><td>Kraj</td><td>{{shipment.address.country}}</td></tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: "AdminOrderShipment",
    data() {
        return {
            title: 'Wysyłka'
        }
    },
    props: {
        shipment: {}
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
