import React from 'react';
import './Heder.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Heder = () => {
    return (
        <nav className='heder'>
            <img src={logo} alt="" />
            <div>
               
                <Link to="/">shop</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Heder;