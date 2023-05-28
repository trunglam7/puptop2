import React, { useState } from 'react'
import {RiImageAddFill} from 'react-icons/ri'
import './styles/AddDogDialog.css'
import DogCard from './DogCard';

const AddDogDialog = ({openDialog, setOpenDialog, openMenuHandler}) => {

    const [dogName, setDogName] = useState('');
    const [dogImg, setDogImg] = useState(null);

    return (
        <div className='add-dog-container' style={{
            'display': openDialog ? 'grid' : 'none'
        }}>
            <dialog className='dialog-container' open={openDialog}>
                <form>
                    <div>
                        <input id='dog-name' placeholder='Name' aria-label='Name' onChange={(e) => setDogName(e.target.value)}/>
                    </div>
                    <div className='image-upload'>
                        <label htmlFor='dog-img'><RiImageAddFill size={'3rem'}/></label>
                        <input id='dog-img' type='file' accept='image/*' onChange={(e) => setDogImg(URL.createObjectURL(e.target.files[0]))}/>
                    </div>
                    <DogCard name={dogName} image={dogImg} />
                    <div className='button-container'>
                        <button type='button' onClick={() => submitDogHandler()}>Submit</button>
                        <button type='button' onClick={() => cancelAddHandler()}>Cancel</button>
                    </div>
                </form>
            </dialog>
        </div>
    )

    function cancelAddHandler() {
        setDogName('');
        setDogImg(null);
        setOpenDialog(!openDialog);
        openMenuHandler();
    }

    function submitDogHandler() {
        console.log(dogName, dogImg)
        setDogName('');
        setDogImg(null);
        setOpenDialog(!openDialog);
        openMenuHandler();
    }
}

export default AddDogDialog