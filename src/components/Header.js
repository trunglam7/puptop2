import React, {useState} from 'react'
import {CgMenuLeftAlt, CgMenuRightAlt, CgClose} from 'react-icons/cg'

import './styles/Header.css'
import RankingSlide from './RankingSlide';
import UserSlide from './UserSlide';

const Header = ({openMenuHandler, authHandler}) => {


    const [openRanking, setOpenRanking] = useState(false);
    const [openUser, setOpenUser] = useState(false);

    function openRankingHandler() {
        openMenuHandler();
        setOpenRanking(!openRanking);
    }

    function openUserHandler() {
        openMenuHandler();
        setOpenUser(!openUser);
    }

    return (
        <header>
            <button onClick={openRankingHandler} className={openRanking ? 'menu-btn-active' : null}>
                {openRanking ? <CgClose size={'3rem'} /> : <CgMenuLeftAlt size={'3rem'}/>}
            </button>
            <h1>PupTop</h1>
            <button onClick={openUserHandler} className={openUser ? 'menu-btn-active' : null}>
                {openUser ? <CgClose size={'3rem'} /> : <CgMenuRightAlt size={'3rem'}/>}
            </button>
            {openRanking ? <RankingSlide /> : null}
            {openUser ? <UserSlide authHandler={authHandler}/> : null}
        </header>
    )
}

export default Header