import React, { useContext } from 'react'
import './styles/RankingSlide.css'
import { AuthContext, DogContext } from '../App'
import RankingCard from './RankingCard';

const RankingSlide = () => {

  const authCheck = useContext(AuthContext);
  const dogList = useContext(DogContext);

  console.log(Object.values(dogList));

  return (
    <aside className='ranking-side'>
        <h2>RANKING</h2>
        {Object.values(dogList).sort((a, b) => (a.score < b.score) ? 1 : -1).map((x, index) => <RankingCard key={index} name={x.name} image={x.image} place={index + 1}/>)}
        {authCheck ? <h2>Your Ranking</h2> : null}
    </aside>
  )

}

export default RankingSlide