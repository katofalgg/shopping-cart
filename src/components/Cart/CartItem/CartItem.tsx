import React, {useState} from "react";
import {connect} from 'react-redux';
import {
    adjustItemQTY,
    removeFromCart,
} from "../../../redux/Shopping/shopping-actions";
import { AppDispatch } from "../../../redux/store";

interface ICartItemProps {
    item: {
        qty: number,
        id: number,
        image: string,
        title: string,
        description: string,
        price: number,
    },
    adjustQTY: (itemID: number, qty: number) => void,
    removeFromCart: (itemID: number) => void, 
}

const CartItem: React.FC<ICartItemProps> = ({item, adjustQTY, removeFromCart}) => {
    const [input, setInput] = useState(item.qty);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQTY(item.id, e.target.value);
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
                />
                <button
                    onClick={() => removeFromCart(item.id)}
                >Удалить</button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        adjustQTY: (id: number, value: number) => dispatch(adjustItemQTY(id, value)),
        removeFromCart: (id: number) => dispatch(removeFromCart(id)),
    };
}

export default connect(null, mapDispatchToProps)(CartItem);