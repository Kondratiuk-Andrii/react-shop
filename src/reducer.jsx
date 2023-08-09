export function reducer(state, action) {
    const { type, payload } = action;

    switch (type) {
        case "SET_GOODS":
            return {
                ...state,
                goods: payload || [],
                loading: false,
            };
        case "TOGGLE_BASKET":
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            };
        case "ADD_TO_BASKET": {
            const itemIndex = state.order.findIndex((orderItem) => orderItem.id === payload.id);

            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = { ...payload, quantity: 1 };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) =>
                    index === itemIndex ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
                );
            }
            return {
                ...state,
                alertName: payload.name,
                order: newOrder,
            };
        }
        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                order: state.order.filter((orderItem) => orderItem.id !== payload.id),
            };
        case "INCREMENT_QUANTITY":
            return {
                ...state,
                order: state.order.map((item) => {
                    if (item.id === payload.id) {
                        const newQuantity = item.quantity + 1;
                        return {
                            ...item,
                            quantity: newQuantity,
                        };
                    } else {
                        return item;
                    }
                }),
            };
        case "DECREMENT_QUANTITY":
            return {
                ...state,
                order: state.order.map((item) => {
                    if (item.id === payload.id) {
                        const newQuantity = Math.max(item.quantity - 1, 1);
                        return {
                            ...item,
                            quantity: newQuantity,
                        };
                    } else {
                        return item;
                    }
                }),
            };
        case "CLOSE_ALERT":
            return {
                ...state,
                alertName: "",
            };
        default:
            return state;
    }
}
