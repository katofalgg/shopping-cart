import {item} from '../../components/Cart/Cart';
import * as actionTypes from './shopping-types';

export const addToCart = (itemID: number | undefined) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
        },
    };
};
export const removeFromCart = (itemID: number | undefined) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID,
        },
    };
};
export const adjustItemQTY = (itemID: number | undefined, qty: number | undefined) => {
    return {
        type: actionTypes.ADJUST_ITEM_QTY,
        payload: {
            id: itemID,
            qty,
        },
    };
};
export const loadCurrentItem = (item: item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    };
};
