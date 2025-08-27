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

    // const handleFireDetection = () => {
    //     navigate('/firedetection');
    // };

    // const handleUploadImages = () => {
    //     navigate('/uploadimages');
    // };

    // const handleViewHistory = () => {
    //     navigate('/viewhistory');
    // };

    return (
        <body className="min-h-screen text-center bg-no-repeat bg-center bg-cover w-full" style={{ backgroundImage: `url(${WildfireBG})` }}>
            <title>
                Real-Time Wildfire Detection App
            </title>
            <h1 className="relative top-[15vh] left-[25vl] text-[10vh] text-white font-zilla-slab">
                Real-Time Wildfire Detection App
            </h1>
            <button className="relative top-[20vh] w-[5vw] h-[5vh] text-[2vh] bg-white font-zilla-slab rounded-lg" onClick={handleLogin}>
                Log In
            </button>
            <br></br>
            <button className="relative top-[25vh] w-[5vw] h-[5vh] text-[2vh] bg-white font-zilla-slab rounded-lg" onClick={handleSignup}>
                Sign Up
            </button>
            {/* <button className="relative top-[25vh] w-[5vw] h-[5vh] text-[2vh] bg-white font-zilla-slab rounded-lg" onClick={handleFireDetection}>
                Test Fire Detection
            </button>
            <button className="relative top-[25vh] w-[5vw] h-[5vh] text-[2vh] bg-white font-zilla-slab rounded-lg" onClick={handleUploadImages}>
                Test Imgs
            </button>
            <button className="relative top-[25vh] w-[5vw] h-[5vh] text-[2vh] bg-white font-zilla-slab rounded-lg" onClick={handleViewHistory}>
                Test History
            </button> */}
        </body>
    );
};

export default HomePage;