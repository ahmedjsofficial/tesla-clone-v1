import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NavLinkAPI } from './APILinks.js';
import teslaLogo from '../Images/Teslalogo.svg';

import closeIcon from '../Images/close.svg';

const Navbar = () => {
    const [MenuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <TeslaNav>
                <NavBrand><img src={teslaLogo} alt="Tesla/Logo" /></NavBrand>
                <ul className="d-none">
                    <li><NavLink to="" className="nav-link">Model S</NavLink></li>
                    <li><NavLink to="" className="nav-link">Model 3</NavLink></li>
                    <li><NavLink to="" className="nav-link">Model X</NavLink></li>
                    <li><NavLink to="" className="nav-link">Model Y</NavLink></li>
                    <li><NavLink to="" className="nav-link">Solar Roof</NavLink></li>
                    <li><NavLink to="" className="nav-link">Solar Panels</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to="" className="nav-link d-none">Shop</NavLink></li>
                    <li><NavLink to="" className="nav-link d-none">Account</NavLink></li>
                    <li><NavLink to="" className="nav-link btn-active" onClick={()=> setMenuOpen(true)}>Menu</NavLink></li>
                </ul>
            </TeslaNav>

            <TeslaMobileNav show={MenuOpen}>
                <div className="close-icon" onClick={()=> setMenuOpen(false)}>
                    <img src={closeIcon} alt="close/icon" />
                </div>
                {
                    NavLinkAPI.map((val,ind)=>(
                        <li key={ind}><NavLink to="" className="nav-link">{val.links}</NavLink></li>
                    ))
                }                
            </TeslaMobileNav>

        </>
    );
};
const TeslaNav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    min-height: 5vh;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2rem;
    
    @media screen and (min-width: 280px) and (max-width: 991px){
        min-height: 7vh;
    }

    ul{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const NavBrand = styled.div`
    width: auto;
    height: auto;
    position: relative;
    img{
        height: auto;
        width: 87px;
        object-fit: contain;
        z-index: 1500;
        @media screen and (min-width: 280px) and (max-width: 550px){
            height: auto;
            width: 65px;
        }
    }
`;

const TeslaMobileNav = styled.nav`
    > .close-icon{
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 0;
        cursor: pointer;

        img{
            width: 17px;
            height: auto;
            object-fit: contain;
            opacity: 1;
            z-index: 1500;
        }

    }
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 15rem;
    min-height: auto;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    background: #ffffff;
    z-index: 2000;
    opacity: 1;
    padding: 2rem 1rem;
    overflow-y: scroll;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    display: ${props => props.show ? 'flex' : 'none'};

    li{
        width: 100%;
        padding: 0.5rem 0;
    }

    ::-webkit-scrollbar{
        display: none;
    }
`;

export default Navbar;
