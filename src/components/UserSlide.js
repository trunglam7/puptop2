import React from 'react'

import './styles/UserSlide.css'
const UserSlide = ({authHandler}) => {
  return (
    <aside className='user-menu'>
      <button className='login-btn' onClick={authHandler}>Sign In with Google</button>
    </aside>
  )
}

export default UserSlide