import ForestViewHistory from '../assets/forest_view_history.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ViewHistory = () => {

    const [shiftAmount, setShiftAmount] = useState(0);

    const loadMore = () => {
        setShiftAmount(shiftAmount => shiftAmount + 18);
        alert("Loading more entries...");
    }

    return (
        <body className='min-h-screen text-center bg-center bg-cover w-full' style={{ backgroundImage: `url(${ForestViewHistory})` }}>
            <title>View History</title>
            <div className='relative top-[7vh] text-[5vh] text-white font-zilla-slab'>
                <p>
                    View previously uploaded images and their fire detection analysis results.
                </p>
                <table className='relative left-[25vw] top-[5vh] w-[50vw] bg-white text-black text-[2vh] border-2 border-black'>
                    <tr className='border-2 border-black'>
                        <th className='border-2 border-black'>Image File</th>
                        <th className='border-2 border-black'>Upload Time</th>
                        <th className='border-2 border-black'>Prediction</th>
                    </tr>
                    {/* Test entries */}
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>image2.jpg</td>
                        <td className='border-2 border-black'>2023-10-02 09:15</td>
                        <td className='border-2 border-black'>No Fire</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>image1.jpg</td>
                        <td className='border-2 border-black'>2023-10-01 14:30</td>
                        <td className='border-2 border-black'>Fire Detected</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>image2.jpg</td>
                        <td className='border-2 border-black'>2023-10-02 09:15</td>
                        <td className='border-2 border-black'>No Fire</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>image1.jpg</td>
                        <td className='border-2 border-black'>2023-10-01 14:30</td>
                        <td className='border-2 border-black'>Fire Detected</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>image2.jpg</td>
                        <td className='border-2 border-black'>2023-10-02 09:15</td>
                        <td className='border-2 border-black'>No Fire</td>
                    </tr>
                </table>
                <button 
                    className={`relative top-[5vh] mb-[2vh] w-[8vw] h-[5vh] text-[2vh] bg-black text-white rounded-lg`}
                    style={{ transform: `translateY(${shiftAmount}vh)` }}
                    onClick={loadMore}
                >
                    Load More  
                </button>
            </div>
        </body>
    );
}

export default ViewHistory;