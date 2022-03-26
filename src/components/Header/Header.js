import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="logo text-start">
                            <h3>GreenChili</h3>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='menu d-flex justify-content-end align-items-center'>
                            <a href="/shop">Shop</a>
                            <a href="/orders">Orders</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;