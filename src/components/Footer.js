import React, { useContext } from 'react'
import {GrAdd} from 'react-icons/gr'
import './styles/Footer.css'
import { AuthContext } from '../App'

const Footer = () => {

  const AuthCheck = useContext(AuthContext);

  return (
    <footer className='add-container'>
        {AuthCheck ? <button className='add-button'><GrAdd size={'3rem'} /></button> : <p style={{padding: '14px'}}>Please Login to Add Dogs</p>}
    </footer>
  )
}

export default Footer