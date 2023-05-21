import React from 'react'
import './styles/AddDogDialog.css'

const AddDogDialog = ({openDialog, setOpenDialog, openMenuHandler}) => {



    return (
        <dialog className='dialog-container' open={openDialog}>
            <button onClick={() => (setOpenDialog(!openDialog), openMenuHandler())}>Cancel</button>
        </dialog>
    )
}

export default AddDogDialog