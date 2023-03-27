import React from 'react';
import './Heder.css'
import logo from '../../images/Logo.svg'

const Heder = () => {
    return (
        <nav className='heder'>
            <img src={logo} alt="" />
            <div>
                <a href="#">Order</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Inventory</a>
                <a href="#">Login</a>
            </div>
        </nav>
    );
};

export default Heder;