import React from 'react';
import HeroArea from '../HeroArea/HeroArea';
import Navbar from '../Navbar/Navbar';
import Navigator from '../Navigator/Navigator';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroArea></HeroArea>
            <Navigator></Navigator>
        </div>
    );
};

export default Home;