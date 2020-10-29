<template>
    <div class="container">
        <h1 class="thanks-order-title">
            {{ title }}
        </h1>
        <div class="_info">
            Wybierz sposób płatności
        </div>
        <div class="row mt-5 mb-2">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label for="payu-pay" class="w-100">
                    <div class="payment-type">
                        <input id="payu-pay" aria-label="PayU" v-model="data.payment_type" value="1" type="radio">
                        <div class="pay-info">
                            <img src="./../../../img/PayU-logo.png" alt="PayU logo"/>
                        </div>
                    </div>
                </label>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label for="home-pay" class="w-100">
                    <div class="payment-type">
                        <input id="home-pay" aria-label="PayU" v-model="data.payment_type" value="2" type="radio">
                        <div class="pay-info">
                            Płatność przy odbiorze
                        </div>
                    </div>
                </label>
            </div>
            <div class="col-12 mt-2 text-center">
                <button class="btn pay-btn" type="button" :class="data.payment_type == 1
                ? 'payu-button'
                : 'btn-outline-secondary'" @click="pay">Dalej</button>
            </div>
        </div>


        <div class="_order-footer">
            <img class="w-100" src="./../../../img/PayU-bank-list.png" alt="PayU lista banków"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "OrderPay",
    data() {
        return {
            title: 'Dziękujemy za złożenie zamówienia',
            data: {
                payment_type: 1,
                order_id: ''
            }
        }
    },
    methods: {
        pay() {
            this.data.order_id = this.$route.params.id;
            this.$axios.post('front/orders/payments/create', this.data)
            .then((data) => {
                if (data.data.success === 1) {
                    if (data.data.payment_type === 1) {
                        return location.href = data.data.payload.redirectUri
                    }
                    return this.$router.push({
                        name: 'OrderThx'
                    })
                }
            })
        }
    },
    created() {
        document.title = this.title;
    }
}
</script>

<style scoped>
.thanks-order-title {
    text-align: center;
    margin: 50px 0;
}

._info {
    text-align: center;
    font-size: 18px;
}

.payment-type .pay-info {
    display: inline-block;
}

.payment-type .pay-info img {
    width: 150px;
}

.payment-type {
    border: 1px dotted #e2dbdb;
    min-height: 100px;
    line-height: 100px;
    padding: 10px;
    background: #f7f7f7;
}


.payu-button {
    background: #a5c312;
    border-color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
    color: #fff;
}

.pay-btn {
    min-width: 100px;
}
</style>
