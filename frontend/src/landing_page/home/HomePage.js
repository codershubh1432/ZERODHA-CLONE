import React from 'react';
import HomeHero from './HomeHero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import Navbar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';


function HomePage() {
    return ( 
        <>
    
         <HomeHero />
         <Awards />
         <Stats />
         <Pricing />
         <Education />
         <OpenAccount />
         
        </>
     );
}

export default HomePage;