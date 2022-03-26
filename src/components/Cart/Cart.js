import React from 'react';
import './Cart.css'

const Cart = ({ cart, chos, reset }) => {
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
            <button onClick={() => chos()} className='cart-btn'>Choose One For Me</button>
            <button onClick={() => reset()} className='cart-btn'>Reset</button>
        </div>
    );
};

export default Cart;