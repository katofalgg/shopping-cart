import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {
    loadCurrentItem,
    addToCart
} from "../../../redux/Shopping/shopping-actions";
import classes from './../Products.module.css'
import {AppDispatch} from "../../../redux/store";
import {item} from "../../Cart/Cart";


interface IProductProps {
    product: {
        qty?: number;
        id?: number | undefined;
        image?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        price?: number | undefined;
    },
    addToCart: (itemID: number | undefined) => void,
    loadCurrentItem: (item: item) => void,
}

const Product: React.FC<IProductProps> = ({product, addToCart, loadCurrentItem}) => {
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
                    <div className={classes.cart_button}>
                        <button
                            onClick={() => addToCart(product.id)}
                        >
                            <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png" alt=''/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        addToCart: (id: number | undefined) => dispatch(addToCart(id)),
        loadCurrentItem: (item: item) => dispatch(loadCurrentItem(item)),
    };
};

export default connect(null, mapDispatchToProps)(Product);
