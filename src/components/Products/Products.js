import React from "react";
import {connect} from 'react-redux';
import Product from "./Product/Product";
import classes from './Products.module.css'
const Products = ({products}) => {
    return (   
        <div>
            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}; 
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
    };
};
export default connect(mapStateToProps)(Products);
