import * as actionTypes from './shopping-types';

export const addToCart = (itemID: number) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
        },
    };
};
export const removeFromCart = (itemID: number) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID,
        },
    };
};
export const adjustItemQTY = (itemID: number, qty: number) => {
    return {
      type: actionTypes.ADJUST_ITEM_QTY,
      payload: {
          id: itemID,
          qty,
      } ,
    };
};
export const loadCurrentItem = (item: { id: number; title: string; description: string; price: number; image: string; }) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    };
};
