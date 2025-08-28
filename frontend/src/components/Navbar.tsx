import HomeLight from '../assets/icons/home_light.png';
import ProfileLight from '../assets/icons/profile_light.png';
import SettingsLight from '../assets/icons/settings_light.png';

import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    
    const location = useLocation();

    var detection = false;
    var upload = false;
    var history = false;

    if (location.pathname === ('/firedetection')) {
        detection = true;
    } else if (location.pathname === ('/uploadimages')) {
        upload = true;
    } else if (location.pathname === ('/viewhistory')) {
        history = true;
    }

    return (
        <div className='w-full h-[8vh]'>
            <nav className='flex justify-between items-center h-full px-4 bg-gray-800 text-white'>
                <Link to='/'>
                    <img src={HomeLight} alt="Home" className='w-[2vw] h-[2vw]' />
                </Link>
                <Link to='/firedetection'>
                    <p className={`relative text-[1vw] font-zilla-slab left-[-8vw] bg-${detection ? 'white' : 'gray-800'}` + ` text-${detection ? 'black' : 'white'} rounded-md px-2`}>
                        Real-Time Detection
                    </p>
                </Link>
                <Link to='/uploadimages'>
                    <p className={`relative text-[1vw] font-zilla-slab left-[-17vw] bg-${upload ? 'white' : 'gray-800'}` + ` text-${upload ? 'black' : 'white'} rounded-md px-2`}>
                        Upload Images
                    </p>
                </Link>
                <Link to='/viewhistory'>
                    <p className={`relative text-[1vw] font-zilla-slab left-[-26vw] bg-${history ? 'white' : 'gray-800'}` + ` text-${history ? 'black' : 'white'} rounded-md px-2`}>
                        View History
                    </p>
                </Link>
                <p className='relative text-[1vw] font-zilla-slab left-[18vw]'>
                    Welcome, [name]!
                </p>
                <img src={ProfileLight} alt="Profile" className='relative w-[2vw] h-[2vw] left-[9vw]' />
                <Link to='/settings'>
                    <img src={SettingsLight} alt="Settings" className='relative w-[2vw] h-[2vw]' />
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;