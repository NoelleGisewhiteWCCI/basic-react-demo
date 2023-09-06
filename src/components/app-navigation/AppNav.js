import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home-page/Home';
import AllGames from '../../pages/all-games-page/AllGames';
import SingleGame from '../../pages/single-game-page/SingleGame';

const AppNav = () => {
    <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/all-games'} element={<AllGames />} />
        <Route path={'/single-game'} element={<SingleGame />} />
    </Routes>
}

export default AppNav;
