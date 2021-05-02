import React from 'react';

import Navbar from '../navbar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn  } from './HeroElements'
const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready In 50 Seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
}

export default Hero;
