import React from "react";
import {connect} from 'react-redux';
import {RootState} from "../../redux/store";
import Product from "./Product/Product";

interface IpropuctsProps {
    products: {
        qty?: number;
        id?: number | undefined;
        image?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        price?: number | undefined;
    }[],
};


const Products: React.FC<IpropuctsProps> = ({products}) => {
    return (
        <div>
            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))};
        </div>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        products: state.shop.products,
    };
};
export default connect(mapStateToProps)(Products);
