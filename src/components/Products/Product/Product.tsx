import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {
    loadCurrentItem,
    addToCart
} from "../../../redux/Shopping/shopping-actions";
import classes from './../Products.module.css'
import { AppDispatch } from "../../../redux/store";

interface IProductProps {
    product: {
        id: number,
        title: string,
        description: string,
        price: number,
        image: string
    },
    addToCart: (itemID: number) => void,
    loadCurrentItem: (item: { id: number; title: string; description: string; price: number; image: string; }) => void,
}
export type item = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string; 
}
const Product: React.FC<IProductProps> = ({ product, addToCart, loadCurrentItem }) => {
    return (
        <div className={classes.product}>
            <img
                src={product.image}
                alt={product.title}
                className={classes.product_img}
            />

            <div className={classes.product_info}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Цена {product.price} РУБ</p>
                <div className={classes.product_button}>
                <Link to={`/product/${product.id}`}>
                    <button
                        onClick={() => loadCurrentItem(product)}
                    ><img src="https://img.icons8.com/ios/50/000000/visible--v1.png" alt=''/></button>
                </Link>
                <button
                    onClick={() => addToCart(product.id)}
                >
                <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png" alt=''/>
                </button>
            </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        addToCart: (id: number) => dispatch(addToCart(id)),
        loadCurrentItem: (item: item) => dispatch(loadCurrentItem(item)),
    };
};

export default connect(null, mapDispatchToProps)(Product);
