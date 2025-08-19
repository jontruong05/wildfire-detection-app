import SatelliteImg from '../assets/satellite.jpg';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='flex flex-row'>
            <title>
                Sign Up
            </title>
            <div className="absolute top-0 left-0 w-[50vw] h-[100vh]">
                <Link to='/' className="relative left-[1vw] top-[2vh] text-[2vh] font-zilla-slab">← Back</Link>
                <p className='relative left-[1vw] top-[5vh] text-[3vh] font-zilla-slab'>
                    California wildfires burn tens of thousands of acres each year.
                </p>
                <p className='relative left-[1vw] top-[7vh] text-[2.5vh] font-zilla-slab'>
                    Join today to gain access to tools that detect and predict wildfires in your area.
                </p>
                <div className="relative left-[11.5vw] top-[10vh] border border-[#747775] bg-white rounded-lg p-4 w-[26.5vw] h-[43.5vh]">
                    <div className="relative left-[0.5vw] top-[1vh]">
                        <p className="relative text-[2vh] font-zilla-slab">First Name</p>
                        <input type='text' placeholder='Your First Name' className='relative top-[1.1vh] border border-[#747775] rounded-md p-1 font-zilla-slab w-[24vw]'></input>
                    </div>
                    <div className="relative left-[0.5vw] top-[3.5vh]">
                        <p className="relative text-[2vh] font-zilla-slab">Last Name</p>
                        <input type='text' placeholder='Your Last Name' className='relative top-[1.1vh] border border-[#747775] rounded-md p-1 font-zilla-slab w-[24vw]'></input>
                    </div>
                    <div className="relative left-[0.5vw] top-[6vh]">
                        <p className="relative text-[2vh] font-zilla-slab">Email</p>
                        <input type='text' placeholder='Your Email' className='relative top-[1.1vh] border border-[#747775] rounded-md p-1 font-zilla-slab w-[24vw]'></input>
                    </div>
                    <div className="relative left-[0.5vw] top-[8.5vh]">
                        <p className="relative text-[2vh] font-zilla-slab">Password</p>
                        <input type='text' placeholder='Your Password' className='relative top-[1.1vh] border border-[#747775] rounded-md p-1 font-zilla-slab w-[24vw]'></input>
                    </div>
                    <button className="relative left-[2.5vw] top-[12vh] w-[20vw] h-[5vh] text-[2vh] text-white text-center bg-black font-zilla-slab rounded-lg">
                        Sign Up
                    </button>
                </div>
                <button
                type="button"
                className="group relative inline-flex items-center justify-between w-auto max-w-[400px] min-w-min h-10 px-3
                        rounded-[20px] border border-[#747775] bg-white text-[#1f1f1f]
                        font-[Roboto,Arial,sans-serif] font-medium text-[14px] tracking-[0.25px]
                        transition duration-200 ease-in-out
                        hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.30),0_1px_3px_1px_rgba(60,64,67,0.15)]
                        focus:outline-none
                        disabled:cursor-default disabled:bg-white/40 disabled:border-[#1f1f1f1f] disabled:text-black/40 disabled:shadow-none
                        disabled:[&_.g-icon]:opacity-40
                        left-[21vw] top-[13vh]"
                aria-label="Sign in with Google"
                >
                    <span
                        className="pointer-events-none absolute inset-0 bg-[#303030] opacity-0 transition-opacity duration-200 ease-in-out
                            group-hover:opacity-[0.08] group-active:opacity-[0.12] group-focus:opacity-[0.12]"></span>
                    <span className="flex items-center">
                        <span className="mr-3 inline-block h-5 w-5 min-w-5">
                        <svg className="g-icon h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                            <path fill="none" d="M0 0h48v48H0z"/>
                        </svg>
                        </span>
                    </span>
                    <span className="flex-1 overflow-hidden text-ellipsis">Sign up with Google</span>
                </button>
                <Link to="/login" className="relative left-[12.3vw] top-[17vh] text-[1.75vh] underline font-zilla-slab">Already have an account?</Link>
            </div>
            <div className="absolute top-0 right-0">
                <img className='w-[50vw] h-[100vh]' src={SatelliteImg}/>
            </div>
        </div>
    );
};

export default SignUp;