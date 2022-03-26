import React from 'react';
import './Shop.css'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    return (
        <div className='shop'>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <Product></Product>
                    </div>
                    <div className="col-md-3">
                        <Cart></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;