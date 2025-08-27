import SatelliteImg from '../assets/satellite.jpg';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div className='flex flex-row'>
            <title>
                Log In
            </title>
            <div className="absolute top-0 left-0 w-[50vw] h-[100vh]">
                <Link to='/login' className="relative left-[1vw] top-[2vh] text-[2vh] font-zilla-slab">← Back</Link>
                <p className='relative left-[1vw] top-[7vh] text-[2.5vh] font-zilla-slab'>
                    If you already have an account, enter your email address to reset your password.
                </p>
                <div className="relative left-[11.5vw] top-[10vh] border border-[#747775] bg-white rounded-lg p-4 w-[26.5vw] h-[19.5vh]">
                    <div className="relative left-[0.5vw] top-[1vh]">
                        <p className="relative text-[2vh] font-zilla-slab">Email</p>
                        <input type='text' placeholder='Your Email' className='relative top-[1.1vh] border border-[#747775] rounded-md p-1 font-zilla-slab w-[24vw]'></input>
                    </div>
                    <button className="relative left-[2.5vw] top-[5vh] w-[20vw] h-[4vh] text-[2vh] text-white text-center bg-black font-zilla-slab rounded-lg">
                        Reset Password
                    </button>
                </div>
            </div>
            <div className="absolute top-0 right-0">
                <img className='w-[50vw] h-[100vh]' src={SatelliteImg}/>
            </div>
        </div>
    );
}

export default ForgotPassword;