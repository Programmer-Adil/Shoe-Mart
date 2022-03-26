import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let total = 0;
    let productName = "";

    for (const product of cart) {
        total = total + product.price;
        productName = product.name;
    }
    console.log(cart);
    return (
        <div className='cart'>
            <h4>Selected items:{cart.length}</h4>
            <h4>Total price: ${total}</h4>
            <ul>
                <li>{productName}</li>
            </ul>
        </div>
    );
};

export default Cart;