import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaPizzaSlice } from 'react-icons/fa'

export const Nav = styled.nav`
    background: transparent;
    height:80px;
    display:flex; 
    justify-content: center; 
    font-size: 700
`;


export const NavLink = styled(Link)` 
    color: #fff;
    font-size: 2rem;
    text-decoration: none; 
    display: flex; 
    align-items: center;
   

@media screen and (mix-width: 400px){
   position: absolute;
    top: 10px;
    left: 25px
}
`
export const NavIcon = styled.div `
    display:block;
    position: absolute;
    top:0; 
    right:0;
    cursor: pointer;
    color:#fff;   
    
 

    p{
        transform: translate(-175%, 130%);
        font-weight: bold
    }
`
export const Bars = styled(FaPizzaSlice)` 
    font-size: 2rem;
    transform: translate(-50%,-15% )
`