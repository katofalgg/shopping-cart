import React from "react";
import {connect} from 'react-redux';
import { RootState } from "../../redux/store";
import Product from "./Product/Product";
interface IpropuctsProps{
    products: {
        id: number,
        title: string,
        description: string,
        price: number,
        image: string,
    }[],
};


  
const Products: React.FC <IpropuctsProps> = ({products}) => {
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
