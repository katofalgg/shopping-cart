import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {connect } from 'react-redux';
import classes from './Navbar.module.css';
const Navbar = ({ cart}) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartPrice, setCartPrice] = useState(0);

    useEffect(() => {
        let count = 0;
        let price = 0;
        cart.forEach((item) => {
            count += item.qty;
            price += item.qty * item.price
        });
        setCartCount(count)
        setCartPrice(price);
    }, [cart, cartCount, cartPrice]);

    return (
        <div className={classes.navbar}>
            <div className={classes.navbar_title}>
                <Link to='/'>
                    <h2>Киносувениры</h2>
                </Link>
            </div>
            <div className={classes.navbar_cart}>
                <div className={classes.navbar_price}>{cartPrice} РУБ</div>
                <Link to='/cart'>
                <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png"/>
                </Link>
                <div className={classes.navbar_count}>+{cartCount}</div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    };
};
export  default connect(mapStateToProps)(Navbar);
