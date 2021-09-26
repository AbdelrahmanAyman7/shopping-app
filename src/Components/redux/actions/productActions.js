import { ActionTypes } from "../constants/ActionTypes";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const addToCart = (index) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: index
    }
}
export const removeFromCart = (item) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: item
    }
}
export const adjustQty = (itemId,value) => {
    return {
        type: ActionTypes.ADJUST_QTY,
        payload: {
            id: itemId,
            qty: value
        }
    }
}
// export const loadCurrentItem = (item) => {
//     return {
//         type: ActionTypes.LOAD_CURRENT_PRODUCT,
//         payload: item
//     }
// }