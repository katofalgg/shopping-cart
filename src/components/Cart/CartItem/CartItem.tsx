import React, {useState} from "react";
import {connect} from 'react-redux';
import {adjustItemQTY, removeFromCart,} from "../../../redux/Shopping/shopping-actions";
import {AppDispatch} from "../../../redux/store";
import {item} from "../Cart";

export interface ICartItemProps {
    item: item,
    adjustQTY: (itemID: number | undefined, qty: number | undefined) => void,
    removeFromCart: (itemID: number | undefined) => void,
}

const CartItem: React.FC<ICartItemProps> = ({item, adjustQTY, removeFromCart}) => {
    const [input, setInput] = useState(item.qty);

    const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        const element = e.currentTarget as HTMLInputElement
        const value = element.value
        setInput(Number(value));
        adjustQTY(item.id!, Number(value));
    };

    return (
        <div>
            <img
                src={item.image}
                alt={item.title}
            />
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.price} РУБ</p>
            </div>
            <div>
                <label htmlFor='qty'>Количество</label>
                <input
                    min='1'
                    type='number'
                    id='qty'
                    name='qty'
                    value={input}
                    onChange={onChangeHandler}
                    data-test='input'
                />
                <button
                    data-testid='cart-1'
                    onClick={() => removeFromCart(item.id!)}
                >Удалить
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        adjustQTY: (id: number | undefined, value: number | undefined) => dispatch(adjustItemQTY(id, value)),
        removeFromCart: (id: number | undefined) => dispatch(removeFromCart(id)),
    };
}

export default connect(null, mapDispatchToProps)(CartItem);
