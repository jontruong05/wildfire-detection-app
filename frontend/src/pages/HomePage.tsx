import React from 'react';
import WildfireBG from '../assets/wildfire_img.jpg';

import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    return (
        <h1 className='bg-green'>Real-Time Wildfire Detection App</h1>
    );
};

export default HomePage;