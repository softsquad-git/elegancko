<template>
<div class="container">
    <div class="row">
        <div class="col-12">
            <form @submit.prevent="save">
                <div class="form-group row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input aria-label="Imię" class="form-control" placeholder="Imię" v-model="data.name">
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input aria-label="Nazwisko" class="form-control" placeholder="Nazwisko" v-model="data.last_name">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input aria-label="E-mail" class="form-control" placeholder="E-mail" v-model="data.email">
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input aria-label="Numer telefonu" class="form-control" placeholder="Numer telefonu" v-model="data.number_phone">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <input aria-label="Kod pocztowy" class="form-control" placeholder="Kod pocztowy" v-model="data.post_code">
                    </div>
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <input aria-label="Miasto" class="form-control" placeholder="Miasto" v-model="data.city">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <input aria-label="Adres" class="form-control" placeholder="Adres" v-model="data.address">
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <input aria-label="Kraj" class="form-control" placeholder="Kraj" v-model="data.country">
                    </div>
                </div>
                <div class="form-group row">
                   <div class="col-12">
                       <b-button type="button" value="2" @click="buyCompany(data.type == 1 ? 2 : 1)" ref="company" variant="outline-secondary">
                            Kupuję jako firma  <span class="ml-2" :class="data.type == 2 ? 'fa fa-angle-up' : 'fa fa-angle-down'"></span>
                       </b-button>
                   </div>
                </div>
                <div class="form-group row">
                    <div class="col-12">
                        <textarea class="form-control" aria-label="Uwagi" v-model="data.comments" placeholder="Uwagi (opcjonalnie)"></textarea>
                    </div>
                </div>
                <div v-if="data.type == 2" class="form-group row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input aria-label="Nazwa firmy" class="form-control" placeholder="Nazwa firmy" v-model="data.company_name">
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input aria-label="NIP" class="form-control" placeholder="NIP" v-model="data.nip">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-12">
                        <select v-model="data.shipment_id" class="form-control" aria-label="Wysyłka">
                            <option value="" selected>Wybierz wysyłkę</option>
                            <option v-for="shipment in shipments" :value="shipment.id">{{ shipment.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <b-form-checkbox
                            id="createAccount"
                            v-model="createAccount"
                            name="createAccount"
                            value="1"
                            unchecked-value="0"
                        >
                            załóż konto <router-link to="#">poznaj korzyści z posiadania konta</router-link>
                        </b-form-checkbox>
                    </div>
                    <div v-if="createAccount == 1" class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input id="password" type="password" class="form-control" placeholder="Hasło do konta"
                        v-model="password" aria-label="Hasło do konta">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-12">
                        <b-button type="submit" variant="outline-secondary">Dalej</b-button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "OrderPage",
    data() {
        return {
            title: 'Zamówienie',
            data: {
                name: '',
                last_name: '',
                email: '',
                shipment_id: '',
                post_code: '',
                country: '',
                city: '',
                address: '',
                type: 1,
                company_name: '',
                nip: '',
                number_phone: '',
                comments: '',
                products: []
            },
            createAccount: 0,
            shipments: [],
            password: ''
        }
    },
    methods: {
        save() {
            let productsBasket = this.$store.getters.StoreCart
            let products = [];
            productsBasket.forEach(function (productItem) {
                products.push({
                    size_id: productItem.size.id,
                    color_id: productItem.color.id,
                    quantity: productItem.quantity,
                    product_id: productItem.product.id
                });
            });
            this.data.products = products;
            if (this.createAccount == 1) {
                let dataRegister = {
                    name: this.data.name,
                    last_name: this.data.last_name,
                    email: this.data.email,
                    password: this.password,
                    terms: true,
                    city: this.data.city,
                    address: this.data.address,
                    post_code: this.data.post_code,
                    phone: this.data.number_phone,
                    country: this.data.country
                }
                this.$axios.post('auth/register', dataRegister)
                    .then((data) => {
                        this.$notify({
                            group: 'foo',
                            title: 'Udało się',
                            text: data.data.msg
                        });
                    })
            }
            this.$axios.post('front/orders/create', this.data)
            .then((data) => {
                const orderId = data.data.order_id;
                if (data.data.success === 1) {
                    this.data.name = '';
                    this.data.last_name = '';
                    this.data.email = '';
                    this.data.shipment_id = ''; this.data.post_code = '';
                    this.data.city = '';
                    this.data.address = '';
                    this.data.country = '';
                    this.data.type = 1;
                    this.data.company_name = '';
                    this.data.number_phone = '';
                    this.data.products = [];
                    this.data.comments = '';
                    this.$notify({
                        group: 'foo',
                        title: 'Udało się',
                        text: 'Zamówienie zostało złożone i oczekuje na realizację'
                    });
                    this.$router.push({name: 'OrderPay', params: {orderId: orderId}});
                }
            })
        },
        buyCompany(type) {
            this.data.type = type;
        },
        findProduct()
        {

        }
    },
    watch: {
        'createAccount' () {
            console.log(this.createAccount)
        }
    },
    created() {
        this.$axios.get('front/shipments/all')
        .then((data) => {
            this.shipments = data.data.data
        })
    }
}
</script>

<style scoped>

</style>
