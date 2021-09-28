import * as actionTypes from './shopping-types';
import data from '../../data.json';

interface IAction {
    type: string,
    payload: {
        id: number,
        qty?: number,
    }
}
export type IState = {
    products:  
        {
            id: number; 
            title: string; 
            description: string; 
            price: number; 
            image: string;
        }[],
    cart: any[],
    currentItem: any,
}
export type Item = {
    id: number; 
    title: string; 
    description: string; 
    price: number; 
    image: string; 
 } | undefined ;

const INITIAL_STATE= {
    products: data.products,
    cart: [],
    currentItem: null,
};

const shopReducer = (state: IState = INITIAL_STATE, action: IAction) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item: Item = state.products.find(
                (product) => product.id === action.payload.id
            );
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );
            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                    item.id === action.payload.id
                    ? {...item, qty: item.qty + 1}
                    : item
                    )
                    : [...state.cart, {...item, qty: 1}],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)
            };
        case actionTypes.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                item.id === action.payload.id
                ? {...item, qty: +action.payload.qty!}
                : item
                ),
            };
        case  actionTypes.LOAD_CURRENT_ITEM:
            return  {
              ...state,
              currentItem: action.payload,
            };
        default:
            return state;
    };
};

export default  shopReducer;
