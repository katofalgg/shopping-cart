import {useState} from "react";
import {connect} from 'react-redux';
import {
    adjustItemQTY,
    removeFromCart,
} from "../../../redux/Shopping/shopping-actions";


const CartItem = ({item, adjustQTY, removeFromCart}) => {
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

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQTY: (id, value) => dispatch(adjustItemQTY(id, value)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
}

export default connect(null, mapDispatchToProps)(CartItem);
