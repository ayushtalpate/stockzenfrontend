import React from 'react'
import Hero from './Hero';
import Award from './Award';
import Stats from './Stats';
import Education from './Education';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';



function HomePage() {
    return ( 
        <>
        <Hero/>
        <Award/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
     );
}

export default HomePage;