<template>
   <div class="container">
       <section v-if="$store.getters.StoreCart.length > 0">
           <div class="row">
               <div class="col-lg-8">
                   <div class="mb-3">
                       <div class="pt-4 wish-list">
                           <h5 class="mb-4">{{ $t('page.basket.title') }} (<span>{{ $store.getters.StoreCart.length }}</span>)</h5>
                           <div v-for="(basket, index) in $store.getters.StoreCart" :key="basket.id" class="row mb-4">
                               <div class="col-md-5 col-lg-3 col-xl-3">
                                   <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                       <img class="width-basket-product" :src="basket.product.images[0].src" :alt="basket.product.title">
                                   </div>
                               </div>
                               <div class="col-md-7 col-lg-9 col-xl-9">
                                   <div>
                                       <div class="d-flex justify-content-between">
                                           <div>
                                               <h5><router-link :to="{name: 'ProductShow', params: {id: basket.product.id, title: basket.product.title}}">{{ basket.product.title }}</router-link></h5>
                                               <p class="mb-3 text-muted text-uppercase small">{{ $t('page.basket.amount') }}: {{formatPrice(basket.product.price.price)}} {{basket.product.price.currency}}</p>
                                               <p class="mb-2 text-muted text-uppercase small">{{ $t('page.basket.color') }}: {{ basket.color.name }}</p>
                                               <p class="mb-3 text-muted text-uppercase small">{{ $t('page.basket.size') }}: {{ basket.size.name }}</p>
                                           </div>
                                           <div>
                                               <div class="def-number-input number-input safari_only mb-0 w-100">
                                                   <button @click="editQuantity(index, 'up')" type="button" class="btn btn-outline-secondary btn-sm"><span class="fa fa-caret-up"></span></button>
                                                   <button @click="editQuantity(index, 'down')" type="button" class="btn btn-outline-secondary btn-sm"><span class="fa fa-caret-down"></span></button>
                                               </div>
                                               <small id="passwordHelpBlock" class="form-text text-muted text-center">
                                                   {{ basket.quantity }}
                                               </small>
                                           </div>
                                       </div>
                                       <div class="d-flex justify-content-between align-items-center">
                                           <div>
                                               <b-button @click="remove(index)" class="btn-sm" variant="outline-danger" size="md" type="button">
                                                   <span class="fa fa-trash"></span>
                                               </b-button>
                                           </div>
                                           <p class="mb-0"><span><strong id="summary">{{formatPrice(basket.product.price.price * basket.quantity)}} {{basket.product.price.currency}}</strong></span></p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <hr class="mb-4">

                           <p class="text-primary mb-0"><i class="fas fa-info-circle mr-1"></i> {{ $t('page.basket.info') }}</p>

                       </div>
                   </div>
               </div>
               <div class="col-lg-4">
                   <div class="mb-3">
                       <div class="pt-4">

                           <h5 class="mb-3">{{ $t('page.basket.summary') }}</h5>

                           <ul class="list-group list-group-flush">
                               <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                   {{ $t('page.basket.amount') }}:
                                   <span>{{ formatPrice(sumPrice()) }}</span>
                               </li>
                               <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                   <select v-model="shipment" class="form-control w-100" style="border: 0!important;" :aria-label="$t('page.basket.select_shipment')">
                                       <option value="" selected>{{ $t('page.basket.select_shipment') }}</option>
                                       <option v-for="shipment in shipments" :value="shipment">{{ shipment.name }}</option>
                                   </select>
                                   <span>{{ shipment.price }}</span>
                               </li>
                               <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                   <div>
                                       <strong>{{ $t('page.basket.total_amount') }}</strong>
                                   </div>
                                   <span><strong>{{ formatPrice(sumPriceShipment()) }}</strong></span>
                               </li>
                           </ul>
                           <b-button @click="showOrder ^= true" type="button" variant="outline-secondary" class="w-100">{{ $t('btn.next') }}</b-button>
                       </div>
                   </div>
               </div>
               <order-page :shipment="shipment" class="mt-3" v-if="showOrder"/>
           </div>
       </section>
       <no-data-component v-if="$store.getters.StoreCart.length < 1" :msg="$t('msg.no_basket')"/>
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
            shipments: [],
            shipment: ''
        }
    },
    methods: {
        loadData() {
            if (localStorage.getItem('token') !== null) {
                this.$axios.get(`basket/all?ordering=${this.params.ordering}&pagination=${this.params.pagination}`)
                    .then((data) => {
                        this.data = data.data.data;
                    }).catch((error) => this.handleAjaxError(error))
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
            this.sumPrice()
        },
        remove(index) {
            this.$store.dispatch('removeItem', index)
        },
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        sumPrice() {
            let tPrice = 0;
            this.$store.getters.StoreCart.forEach(item => {
                tPrice += item.quantity * item.product.price.price;
            });
            return tPrice;
        },
        sumPriceShipment() {
            let price = this.sumPrice();
            if (this.shipment.price) {
                price = parseInt(price) + parseInt(this.shipment.price);
            }
            return price;
        }
    },
    watch: {
      'shipment' () {
          this.sumPriceShipment();
      }
    },
    created() {
        this.loadData();
        this.$axios.get('front/shipments/all')
            .then((data) => {
                this.shipments = data.data.data
            })
        console.log(this.$store.getters.StoreCart)
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
