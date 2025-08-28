import { useState } from 'react';
import WildfireBG from '../assets/wildfire_img.jpg';
import Navbar from '../components/Navbar';
import { auth } from '../firebaseConfig';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);

    onAuthStateChanged(auth, (user) => {
    if (user !== null) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setLoggedIn(true);
        // ...
    } else {
        // User is signed out
        // ...
    }
    });

    return (
        <body className="min-h-screen text-center bg-no-repeat bg-center bg-cover w-full" style={{ backgroundImage: `url(${WildfireBG})` }}>
            <title>
                Real-Time Wildfire Detection App
            </title>

            {/* Logged out */}
            <section id='logged-out-view' className={loggedIn ? 'hidden' : 'block'}>
                <h1 className="relative top-[15vh] left-[25vl] text-[10vh] text-white font-zilla-slab">
                    Real-Time Wildfire Detection App
                </h1>
                <button className="relative top-[20vh] w-[5vw] h-[5vh] text-[2vh] bg-white font-zilla-slab rounded-lg" onClick={() => navigate('/login')}>
                    Log In
                </button>
                <br></br>
                <button className="relative top-[25vh] w-[5vw] h-[5vh] text-[2vh] bg-white font-zilla-slab rounded-lg" onClick={() => navigate('/signup')}>
                    Sign Up
                </button>
            </section>

            {/* Logged in */}
            <section id='logged-in-view' className={loggedIn ? 'block' : 'hidden'}>
                <Navbar />
                <h1 className="relative top-[7vh] left-[25vl] text-[10vh] text-white font-zilla-slab">
                    Real-Time Wildfire Detection App
                </h1>
                <button className="relative top-[12vh] w-[10vw] h-[5vh] text-[2vh] bg-white font-zilla-slab rounded-lg" onClick={() => navigate('/firedetection')}>
                    Real-Time Detection
                </button>
                <br></br>
                <button className="relative top-[17vh] w-[10vw] h-[5vh] text-[2vh] bg-white font-zilla-slab rounded-lg" onClick={() => navigate('/uploadimages')}>
                    Upload Images
                </button>
                <br></br>
                <button className="relative top-[22vh] w-[10vw] h-[5vh] text-[2vh] bg-white font-zilla-slab rounded-lg" onClick={() => navigate('/viewhistory')}>
                    View History
                </button>
            </section>
        </body>
    );
};

export default HomePage;