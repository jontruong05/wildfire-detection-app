import React, { useState, useEffect, ChangeEvent } from 'react';
import ForestUploadImg from '../assets/forest_upload_imgs.jpg';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import { doc, getDoc } from "firebase/firestore";

const UploadImages = () => {

    const user = auth.currentUser;
    var uid = '';
    if (user) {
        uid = user.uid;
        console.log("Current uid: ", uid);
    }
    else {
        console.log("No user logged in (this technically shouldn't happen)");
    }

    const [preview, setPreview] = useState<string | null>(null);
    const [currImg, setCurrImg] = useState<File | null>(null);
    const [imgName, setImgName] = useState("");
    const [model, setModel] = useState<string>('pro');
    const [prediction, setPrediction] = useState("");

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImgName(file.name);
            setCurrImg(file);
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
        }
    };

    const handleModelChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setModel(e.target.value);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('model', model);
        formData.append('uid', uid);
        if (currImg) {
            formData.append('img', currImg);
        }
        formData.append('img_name', imgName);

        const response = await fetch(`${import.meta.env.VITE_API_URL}/uploadimages`, {// fetch('http://localhost:5000/uploadimages', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        setPrediction(result.prediction);
        console.log(result);
    };

    return (
        <body className='min-h-screen text-center bg-no-repeat bg-center bg-cover w-full' style={{ backgroundImage: `url(${ForestUploadImg})` }}>
            <title>Upload Images</title>
            <p className='relative top-[7vh] text-[5vh] font-zilla-slab'>
                Upload an image to perform fire detection analysis.
            </p>
            <input name='img' className='relative top-[10vh] items-center' type="file" accept="image/*" onChange={handleImageChange} />
            {preview && (
                <div className='relative top-[12vh]'>
                    <p className='text-black mb-4 text-center items-center'>Image Preview (resized to 250 by 250 pixels):</p>
                    <img className='relative left-[40vw] w-[19.5vw] h-[19.5vw] object-contain' src={preview} alt="Preview" onLoad={() => URL.revokeObjectURL(preview)} />
                </div>
            )}
            {preview && (
                <div>
                    <p className='relative top-[11vh] text-white text-[2vh] font-zilla-slab'>
                        Choose prediction model:
                    </p>
                    <select name='model' className='relative top-[12vh] bg-white text-[1.5vh]' value={model} onChange={handleModelChange}>
                        <option value="pro">Pro</option>
                        <option value="lite">Lite</option>
                    </select>
                </div>
            )}
            {preview && (
                <button className='relative top-[13.5vh] w-[6vw] bg-white text-[1.5vh] rounded-md' onClick={handleSubmit}>
                    Make Prediction
                </button>
            )}
            {preview && (
                <div className='relative top-[15vh] bg-white w-[20vw] h-[10vh] left-[40vw] rounded-md'>
                    <p className='relative text-black mt-2 text-[3vh] top-[2.5vh]'>Prediction: {prediction}</p>
                </div>
            )}
        </body>
    );
}

export default UploadImages;