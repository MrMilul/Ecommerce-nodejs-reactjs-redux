import React from 'react';
import { SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute
    } from './SidebarElements'

const Sidebar = ({toggle, isOpen}) => {
    return (

    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon >
            <CloseIcon/>
        </Icon>
        <SidebarMenu>
            <SidebarLink to='/'>Full Menu</SidebarLink>
            <SidebarLink to='/'>Self Service</SidebarLink>
            <SidebarLink to='/'>Services</SidebarLink>
        </SidebarMenu>
        {/* <SideBtnWrap>
            <SidebarRoute to="/">Order Now</SidebarRoute>
        </SideBtnWrap> */}
    </SidebarContainer>


    );
}

export default Sidebar;
