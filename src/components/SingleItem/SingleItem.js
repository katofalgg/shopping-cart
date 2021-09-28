import React from "react";
import {connect} from 'react-redux';
import {addToCart} from "../../redux/Shopping/shopping-actions";
import classes from './SingleItem.module.css'
const SingleItem = ({current, addToCart}) => {
    return (
        <div className={classes.product}>
            <img
                src={current.image}
                alt={current.title}
            />
            <div className={classes.product_info}>
                <h2>{current.title}</h2>
                <p>{current.description}</p>
                <p>Цена {current.price} РУБ</p>
                <button
                    className={classes.product_button}
                    onClick={() => addToCart(current.id)}
                ><img src="https://img.icons8.com/ios/50/000000/shopping-cart.png"/>
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        current: state.shop.currentItem
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    };
};
export default  connect(mapStateToProps, mapDispatchToProps)(SingleItem);
