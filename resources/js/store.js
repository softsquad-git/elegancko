let store = {
    state: {
        StoreCart: []
    },
    getters: {
        StoreCart: (state) => state.StoreCart,
    },
    actions: {
        addItem(context, data) {
            context.commit("ADD_Item", data);
        },

        removeItem(context, index) {
            context.commit("REMOVE_Item", index);
        },

        editQuantityItem(context, data) {
            context.commit('QUANTITY_Item', data)
        }
    },
    mutations: {
        ADD_Item(state, data) {
            state.StoreCart.push(data);
        },

        REMOVE_Item(state, index) {
            state.StoreCart.splice(index, 1);
        },

        QUANTITY_Item(state, data) {
            if (data.type === 'up') {
                state.StoreCart[data.index].quantity++
            } else {
                state.StoreCart[data.index].quantity--
            }
            if (state.StoreCart[data.index].quantity < 1) {
                state.StoreCart[data.index].quantity = 1;
            }

        }
    },
}

export default store;
