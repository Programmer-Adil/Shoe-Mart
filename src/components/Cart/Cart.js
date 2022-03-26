import React from 'react';
import Selected from '../Selected/Selected';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    console.log(cart);
    return (
        <div className='cart'>
            <h4>Selected items:{cart.length}</h4>
            <h4>Total price: ${total}</h4>
            <ol>
                {
                    cart.map(item => <li>{item?.name}</li>)
                }
            </ol>
        </div>
    );
};

export default Cart;