import SatelliteWildfire from '../assets/satellite_wildfire.jpg';
import { Link } from 'react-router-dom';

const FireDetection = () => {
    return (
        <body className='min-h-screen bg-no-repeat bg-center bg-cover w-full' style={{ backgroundImage: `url(${SatelliteWildfire})` }}>
            <title>Fire Detection</title>
            <div className='relative ml-[19.2vw] top-[7vh] text-[5vh] text-white font-zilla-slab'>
                <p>
                    View a drone's live perspective of an area of your choice.
                </p>
            </div>
            <div className='relative ml-[5.7vw] top-[27vh] w-[44.2vw] h-[45vh] bg-white'>
                <button className='relative top-[18vh] left-[17.1vw] w-[10vw] h-[8vh] text-[2vh] bg-black text-white rounded-lg'>
                    Begin Live Footage
                </button>
            </div>
            <div className='relative ml-[60.5vw] top-[-17.5vh] w-[32.6vw] h-[39.7vh] bg-black'>
                <div className='relative left-[1vw] top-[1vh] text-[2vh]'>
                    <p className='text-white'>
                        Prediction Model
                    </p>
                    <select className='relative top-[1vh] w-[15vw] h-[4vh] text-[2vh] rounded-md'>
                        <option value="model1">Pro</option>
                        <option value="model2">Lite</option>
                    </select>

                    <p className='relative top-[2vh] text-white'>
                        Location
                    </p>
                    <select className='relative top-[3vh] w-[15vw] h-[4vh] text-[2vh] rounded-md'>
                        <option value="location1">San Diego</option>
                        <option value="location2">Los Angeles</option>
                        <option value="location3">San Francisco</option>
                        <option value="location4">Sacramento</option>
                    </select>

                    <p className='relative top-[4vh] text-white'>
                        Temperature:
                    </p>

                    <p className='relative top-[5vh] text-white'>
                        Wind:
                    </p>

                    <p className='relative top-[6vh] text-white'>
                        Humidity:
                    </p>

                    <p className='relative top-[7vh] text-white'>
                        Current Prediction:
                    </p>

                    <p className='relative top-[8vh] text-white'>
                        Likelihood:
                    </p>
                </div>
            </div>
        </body>
    );
}

export default FireDetection;