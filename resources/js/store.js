let store = {
    state: {
        cart: [],
        cartCount: 10,
    },
    mutations: {
        addToCart(state, item) {
            let found = state.cart.find(product => product.id == item.id);

            if (!found) {
                state.cart.push(item);

                Vue.set(item, 'quantity', 1);
                Vue.set(item, 'totalPrice', item.price);
            } else {
                state.cart.push(item);

                Vue.set(item, 'quantity', 1);
                Vue.set(item, 'totalPrice', item.price);
            }

            state.cartCount++;
        }
    }
}

export default store;
