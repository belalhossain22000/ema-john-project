import React, { useContext } from 'react';
import './Heder.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Heder = () => {
    const {user,logOut}=useContext(AuthContext)

    const handleLogout=()=>{
        logOut()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.error(error.message)
        })

    }
    return (
        <nav className='heder'>
           <Link to="/"> <img src={logo} alt="" /></Link>
            <div>
               
                <Link to="/">shop</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                {
                    user?<p className='user-mail'>{user.email} <button onClick={handleLogout}>signOut</button></p>:<Link to="/login">login</Link>
                }
            </div>
        </nav>
    );
};

export default Heder;