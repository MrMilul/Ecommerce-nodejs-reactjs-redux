import React, { useState } from 'react';

import Navbar from '../navbar'
import Sidebar from '../sidebar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn  } from './HeroElements'
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar toggle={toggle} isOpen={isOpen}/>
            <HeroContent onClick={toggle}>
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
