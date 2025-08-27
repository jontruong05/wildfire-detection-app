import ForestUploadImg from '../assets/forest_upload_imgs.jpg';
import { Link } from 'react-router-dom';

const UploadImages = () => {
    return (
        <body className='min-h-screen text-center bg-no-repeat bg-center bg-cover w-full' style={{ backgroundImage: `url(${ForestUploadImg})` }}>
            <title>Upload Images</title>
            <p className='relative top-[7vh] text-[5vh] font-zilla-slab'>
                Upload an image to perform fire detection analysis.
            </p>
            <form className='relative top-[15vh]' action="upload.php" method="post" encType="multipart/form-data">
                Select image to upload:
                <input type="file" name="fileToUpload" id="fileToUpload" />
                <input type="submit" value="Upload Image" name="submit" />
            </form>
        </body>
    );
}

export default UploadImages;