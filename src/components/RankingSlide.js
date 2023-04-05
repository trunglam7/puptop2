import React, { useContext } from 'react'
import './styles/RankingSlide.css'
import { AuthContext } from '../App'

const RankingSlide = () => {

  const authCheck = useContext(AuthContext);

  return (
    <aside className='ranking-side'>
        <h2>RANKING</h2>
        {authCheck ? <h2>Your Ranking</h2> : null}
    </aside>
  )
}

export default RankingSlide