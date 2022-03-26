import React, { useEffect, useState } from 'react';
import './Shop.css'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        if (newCart.length <= 4) {
            setCart(newCart);
        }
        else {
            alert("Can't added more than 4 Item")
        }

    };

    const chooseBtn = () => {
        // let new = []
        // const ran = Math.floor(Math.random() * carts.length);
        // new.push(carts[ran]);
        // setCarts(new);
        let choosen = [];
        const choose = Math.floor(Math.random() * cart.length);
        choosen.push(cart[choose]);
        setCart(choosen);
    }

    const resetBtn = () => {
        setCart([])
    }

    return (
        <div className="shop">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            {
                                products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Cart cart={cart} chos={chooseBtn} reset={resetBtn}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;