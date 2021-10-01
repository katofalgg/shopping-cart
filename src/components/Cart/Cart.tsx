import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import CartItem from "./CartItem/CartItem";
import classes from './Cart.module.css'
import {RootState} from '../../redux/store';

interface IcartProps {
    cart: any[],
}

export type item = {
    qty: number,
    id: number,
    image: string,
    title: string,
    description: string,
    price: number;
}
const Cart: React.FC<IcartProps> = ({cart}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item: item) => {
            items += item.qty;
            price += item.qty * item.price;
        });
        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, setTotalPrice, setTotalItems]);

    return (
        <div className={classes.cart}>
            <div className={classes.cart_item}>
                {(totalPrice === 0) ? <h2>В корзине пока что пусто...</h2> :
                    cart.map((item: item) => (
                        <CartItem key={item.id} item={item}/>
                    ))
                }
            </div>
            <div className={classes.cart_info}>
                <h3>Общая сумма</h3>
                <p>Общее количество: {totalItems} шт.</p>
                <p>Общая стоимость: {totalPrice} РУБ</p>
                <button
                    onClick={() => alert('Спасибо за покупку!')}
                >Оплатить
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Cart);
