import * as types from './../constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    console.log(message)
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}
export const actRemoveProductInCart = (product) => {
    return {
        type: types.DELETE_TO_CART,
        product
    }
}
export const actUpdateProductInCart = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}
