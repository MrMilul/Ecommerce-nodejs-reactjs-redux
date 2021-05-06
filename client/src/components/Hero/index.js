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
            <HeroContent>
                <HeroItems>
                    <HeroH1>We Take Care Of Your Diet</HeroH1>
                    <HeroP>WE Think About Your Health</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
}

export default Hero;
