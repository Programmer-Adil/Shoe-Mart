import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price } = props.product;
    return (
        <div className="col-md-4 product">
            <div className="card">
                <img src={img} alt="Product img" />
                <p>{name}</p>
                <p>Price: ${price}</p>
                <button className="my-btn" onClick={() => props.addToCart(props.product)} >ADD TO CART<i class="bi bi-cart-plus-fill"></i></button>
            </div>
        </div>
    );
};

export default Product;