import ForestViewHistory from '../assets/forest_view_history.jpg';
import { auth } from '../firebaseConfig';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ViewHistory = () => {

    type Prediction = {
        img_name: string,
        model: string,
        prediction: string;
        upload_time: string;
    };

    const user = auth.currentUser;
    var uid = '';
    if (user) {
        uid = user.uid;
        console.log("Current uid: ", uid);
    }
    else {
        console.log("No user logged in (this technically shouldn't happen)");
    }

    const [predictions, setPredictions] = useState<Prediction[]>([]);
    useEffect(() => {
        fetch(`http://localhost:5000/viewhistory?uid=${uid}`)
        .then(res => res.json())
        .then(data => setPredictions(data))
        .catch(err => console.error("Error fetching predictions:", err));
    }, []);

    for (let p of predictions) {
        p.upload_time = p.upload_time.replace('T', ' ');
    }

    const handleDelete = async (p: Prediction) => {
        const formData = new FormData();
        formData.append('uid', uid);
        formData.append('img_name', p.img_name);
        formData.append('model', p.model);
        formData.append('prediction', p.prediction);
        formData.append('upload_time', p.upload_time);

        const response = await fetch('http://localhost:5000/viewhistory', {
            method: 'DELETE',
            body: formData
        });

        const result = await response;
        console.log(result);
        window.location.reload();
    };

    return (
        <body className='min-h-screen text-center bg-center bg-cover w-full' style={{ backgroundImage: `url(${ForestViewHistory})` }}>
            <title>View History</title>
            <div className='relative top-[7vh] text-[5vh] text-white font-zilla-slab'>
                <p>
                    View previously uploaded images and their fire detection analysis results.
                </p>
                <table className='relative left-[25vw] top-[5vh] w-[50vw] bg-white text-black text-[2vh] border-2 border-black'>
                    <thead>
                        <tr className='border-2 border-black'>
                            <th className='border-2 border-black'>Image File</th>
                            <th className='border-2 border-black'>Upload Time</th>
                            <th className='border-2 border-black'>Model</th>
                            <th className='border-2 border-black'>Prediction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {predictions.map((p, index) => (
                            <tr className='border-2 border-black' key={index}>
                                <td className='border-2 border-black'>{p.img_name}</td>
                                <td className='border-2 border-black'>{p.upload_time}</td>
                                <td className='border-2 border-black'>{p.model}</td>
                                <td className='border-2 border-black'>{p.prediction}</td>
                                <th onClick={() => handleDelete(p)}>🗑</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </body>
    );
}

export default ViewHistory;