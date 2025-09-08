import HomeLight from '../assets/icons/home_light.png';
import ProfileLight from '../assets/icons/profile_light.png';

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const Navbar = () => {
    
    const location = useLocation();
    const navigate = useNavigate();

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
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [firstName, setFirstName] = useState<string>("");

    useEffect(() => {
        const fetchFirstName = async () => {
            const user = auth.currentUser;
            if (!user) return;
            if (user.displayName) {
                setFirstName(user.displayName.split(" ")[0] || "");
            } 
            else {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setFirstName(docSnap.data().firstName);
                } 
                else {
                    console.log("No such document!");
                }
            }
        };
        fetchFirstName();
    }, []);

    const Logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign-out successful.");
            alert("You have been logged out.")
        }).catch((error) => {
            // An error happened.
            alert("Error signing out: " + error.message);
            console.error("Error signing out: ", error);
        });
        navigate('/');
        window.location.reload();
    }

    return (
        <div className='w-full h-[8vh]'>
            <nav className='flex justify-between items-center h-full px-4 bg-gray-800 text-white'>
                <Link to='/'>
                    <img src={HomeLight} alt="Home" className='w-[2vw] h-[2vw]' />
                </Link>
                <Link to='/firedetection'>
                    <p className={`relative text-[1vw] font-zilla-slab left-[-10vw] bg-${detection ? 'white' : 'gray-800'}` + ` text-${detection ? 'black' : 'white'} rounded-md px-2 hover:bg-white hover:text-black`}>
                        Real-Time Detection
                    </p>
                </Link>
                <Link to='/uploadimages'>
                    <p className={`relative text-[1vw] font-zilla-slab left-[-21vw] bg-${upload ? 'white' : 'gray-800'}` + ` text-${upload ? 'black' : 'white'} rounded-md px-2 hover:bg-white hover:text-black`}>
                        Upload Images
                    </p>
                </Link>
                <Link to='/viewhistory'>
                    <p className={`relative text-[1vw] font-zilla-slab left-[-32vw] bg-${history ? 'white' : 'gray-800'}` + ` text-${history ? 'black' : 'white'} rounded-md px-2 hover:bg-white hover:text-black`}>
                        View History
                    </p>
                </Link>
                <p className='relative text-[1vw] font-zilla-slab left-[11vw]'>
                    Welcome, {firstName}!
                </p>

                <div className="relative" ref={dropdownRef}>
                    <img src={ProfileLight} alt="Profile" className="relative w-[2vw] h-[2vw]  cursor-pointer" onClick={() => setIsDropdownOpen((prev) => !prev)} />

                    {isDropdownOpen && (
                        <div className="absolute right-[0vw] top-[6vh] mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-20 font-zilla-slab">
                            <div className="py-1">
                                <Link to="/profile" className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Profile
                                </Link>
                                <Link to="/settings" className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Settings
                                </Link>
                                <button onClick={Logout} className="w-full block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;