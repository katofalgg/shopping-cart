import {addToCart, removeFromCart} from "../redux/Shopping/shopping-actions";
import shopReducer from "../redux/Shopping/shopping-reducer";
import data from '../data.json';

//test 1
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

it('Item added to Cart, reducer worked well', () => {
    const action = addToCart(2);
    const state = {
        products: data.products,
        cart: [],
        currentItem: null,
    };

    const newState = shopReducer(state, action);

    expect(newState.cart.length).toBe(1);
});

//test 2
it('Item deleted from Cart, action worked', () => {
    const action = removeFromCart(2);
    const state = {
        products: data.products,
        cart: [
            {
                "id": 1,
                "title": "Худи 'Криминальное чтиво'",
                "description": "Черное худи с героями величайшего фильма Квентина Тарантино Криминальное чтиво. Покупка будет возможна только в случае дословного пересказа 25 главы книги Иезекиль.",
                "price": 7000,
                "image": "https://images.izi.ua/18464783",
                "qty": 1
            },
            {
                "id": 2,
                "title": "Худи 'Криминальное чтиво'",
                "description": "Розовое худи с изображениями из Криминального чтива. Узнать более подробно что именно нарисовано на футболке вы сможете только после покупки, так как качество фото оставляет желать лучшего. Приятных покупок :)",
                "price": 6000,
                "image": "https://vse-footbolki.ru/image/cache/catalog/pbr/KML-657470/91b651_700-280x280.jpg",
                "qty": 1
            }],
        currentItem: null,
    };

    const newState = shopReducer(state, action);

    expect(newState.cart.length).toBe(1);
});

//test 3
import {shallow} from 'enzyme';
import {Provider} from "react-redux";
import store from "../redux/store";

describe('<Provider />', () => {
    let provider
    beforeEach(() => {
        provider = shallow(<Provider store={store}/>)
    })
    test('Provider should renderer', () => {
        expect(provider.length).toBe(1)
    })
})
