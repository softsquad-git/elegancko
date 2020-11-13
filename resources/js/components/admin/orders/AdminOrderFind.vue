<template>
    <div class="admin-page">
        <h4 class="title">
            {{ title }}
        </h4>
        <div class="options">
            <b-button @click="showEdit" variant="outline-secondary">
                <span class="fa" :class="$route.params.action == 'show' ? 'fa-edit' : 'fa-eye'"></span>
            </b-button>
            <b-button :to="{name: 'AdminOrdersList'}" variant="outline-danger"><span class="fa fa-times"></span>
            </b-button>
        </div>
        <div class="content mt-4">
            <form @submit.prevent="save" class="mt-5">
                <div class="form-group row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input :disabled="isDisabled" aria-label="Imię" class="form-control" placeholder="Imię" v-model="data.name">
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input :disabled="isDisabled" aria-label="Nazwisko" class="form-control" placeholder="Nazwisko" v-model="data.last_name">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input :disabled="isDisabled" aria-label="E-mail" class="form-control" placeholder="E-mail" v-model="data.email">
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input :disabled="isDisabled" aria-label="Numer telefonu" class="form-control" placeholder="Numer telefonu" v-model="data.number_phone">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <input :disabled="isDisabled" aria-label="Kod pocztowy" class="form-control" placeholder="Kod pocztowy" v-model="data.post_code">
                    </div>
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <input :disabled="isDisabled" aria-label="Miasto" class="form-control" placeholder="Miasto" v-model="data.city">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <input :disabled="isDisabled" aria-label="Adres" class="form-control" placeholder="Adres" v-model="data.address">
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <input :disabled="isDisabled" aria-label="Kraj" class="form-control" placeholder="Kraj" v-model="data.country">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-2">
                        <b-button class="w-100 mt-2" type="button" value="2" @click="buyCompany(data.type == 1 ? 2 : 1)" ref="company" variant="outline-secondary">
                            Kupuję jako firma  <span class="ml-2" :class="data.type == 2 ? 'fa fa-angle-up' : 'fa fa-angle-down'"></span>
                        </b-button>
                    </div>
                    <div class="col-2">
                        <select :disabled="isDisabled" id="status" class="form-control w-100" aria-label="Status" v-model="data.status">
                            <option value="" selected>Wybierz status</option>
                            <option value="1">Złożono zamówienie</option>
                            <option value="2">Przyjęto do realizacji</option>
                            <option value="3">Oczekuje na nadanie</option>
                            <option value="4">Przesyłka wysłana</option>
                            <option value="5">Zakończone</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <select :disabled="isDisabled" id="status-payment" class="form-control w-100" aria-label="Status płatności" v-model="data.payment_status">
                            <option value="" selected>Wybierz status płatności</option>
                            <option value="1">Rozpoczęta</option>
                            <option value="2">Zakończona</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-12">
                        <textarea class="form-control" :disabled="isDisabled" aria-label="Uwagi" v-model="data.comments" placeholder="Uwagi (opcjonalnie)"></textarea>
                    </div>
                </div>
                <div v-if="data.type == 2" class="form-group row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input :disabled="isDisabled" aria-label="Nazwa firmy" class="form-control" placeholder="Nazwa firmy" v-model="data.company_name">
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input :disabled="isDisabled" aria-label="NIP" class="form-control" placeholder="NIP" v-model="data.nip">
                    </div>
                </div>
                <div v-if="$route.params.action == 'edit'" class="form-group row">
                    <div class="col-12">
                        <b-button type="submit" variant="outline-secondary">Zapisz</b-button>
                    </div>
                </div>
            </form>
        </div>
        <div class="order-price">
            Cena: {{ order.price }}
        </div>
        <admin-order-shipment :shipment="order.shipment"/>
        <admin-order-products :id="$route.params.id"/>
    </div>
</template>

<script>
import AdminOrderShipment from "./AdminOrderShipment";
import AdminOrderProducts from "./AdminOrderProducts";
export default {
    name: "AdminOrderFind",
    components: {AdminOrderProducts, AdminOrderShipment},
    data() {
        return {
            data: {
                email: '',
                name: '',
                last_name: '',
                post_code: '',
                city: '',
                address: '',
                country: '',
                type: 1,
                company_name: '',
                nip: '',
                number_phone: '',
                comments: '',
                status: '',
                payment_status: ''
            },
            title: null,
            order: '',
            isDisabled: null
        }
    },
    methods: {
        buyCompany(type) {
            this.data.type = type;
        },
        save() {
            this.$Progress.start();
            this.$axios.post(`admin/orders/update/${this.$route.params.id}`, this.data)
                .then((data) => {
                    this.$Progress.finish()
                    if (data.data.success === 1) {
                        this.$router.push({
                            name: 'AdminOrderFind',
                            params: {id: this.$route.params.id, action: 'show'}
                        });
                        this.$notify({
                            group: 'foo',
                            title: 'Udało się',
                            text: 'Dane zamówienia zostały zmienione'
                        });
                    }
                })
            .catch((error) => {
                this.$Progress.fail();
                this.handleAjaxError(error);
            })
        },

        showEdit() {
            let action = this.$route.params.action;
            if (action === 'show') {
                this.$router.push({name: 'AdminOrderFind', params: {id: this.$route.params.id, action: 'edit'}})
            }
            if (action === 'edit') {
                this.$router.push({name: 'AdminOrderFind', params: {id: this.$route.params.id, action: 'show'}})
            }
        },
        setTitle() {
            let action = this.$route.params.action;
            if (action == 'show') {
                this.title = 'Dane zamówienia';
                this.isDisabled = true;
            }
            if (action == 'edit') {
                this.title = 'Zmień dane zamówienia'
                this.isDisabled = false;
            }
        },
        loadData() {
            this.$axios.get(`admin/orders/find/${this.$route.params.id}`)
            .then((data) => {
                let order = data.data.data;
                this.order = order;
                this.data.name = order.name.first;
                this.data.last_name = order.name.last;
                this.data.email = order.contact.email;
                this.data.number_phone = order.contact.phone;
                this.data.post_code = order.shipment.address.post_code;
                this.data.city = order.shipment.address.city;
                this.data.address = order.shipment.address.address;
                this.data.country = order.shipment.address.country;
                this.data.type = order.type;
                this.data.company_name = order.company.name;
                this.data.nip = order.company.nip;
                this.data.comments = order.comments;
                this.data.status = order.status.key;
                this.data.payment_status = order.status.payment.status.key;
            }).catch((error) => this.handleAjaxError(error));
        }
    },
    watch: {
        '$route.params.action'() {
            this.setTitle();
        }
    },
    created() {
        this.setTitle();
        this.loadData();
    }
}
</script>

<style scoped>
.order-price {
    font-weight: bold;
    font-size: 20px;
}
</style>
