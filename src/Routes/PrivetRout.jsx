import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRout = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <div>loading.....</div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>;
};

export default PrivetRout;