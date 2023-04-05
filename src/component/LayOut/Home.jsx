import React from 'react';
import Heder from '../Heder/Heder';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Heder></Heder>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;