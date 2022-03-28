import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"

import styled from 'styled-components'

import MainMenu from "./header/MainMenu"
import TopMenu from "./header/TopMenu"
import MobileMenu from "./header/MobileMenu"
import Logo from './header/Logo'


import MenuData from './../../data/menu.json'

const SiteHeader = styled.header`
    background: #2A3C68;
    color: white;
    padding: 15px;
    @media(min-width:768px) {
        padding: 15px 30px;
    }
    .clearfix { clear: both; }
    nav {
        ul {
            list-style:none;
            padding: 0;
            margin: 0 -10px;
            
            &.top-menu {
                float: right;
                li {
                    text-align: left;
                    padding-left: 30px;
                    position: relative;
                    margin-left: 20px;
                   a { display: block; }
                   p {
                    margin: 0;
                   }
                   a,p {
                    font-size: 20px;
                    font-weight: 600;
                    margin-top: 0;
                    line-height: 15px;
                    font-family: Nunito;
                   }
                   svg {
                        position: absolute;
                        left: 0;
                        top: 0;
                        height: 24px;
                        width: 24px;
                   }
                   span {
                        font-size: 12px;
                        line-height: 12px;
                        margin-bottom: 8px;
                        display: block;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                   }
                   
                }
            }
            &.main-menu {
                margin-top: 15px;
                li {
                    float: left;
                    height: 36px;
                    display:flex; 
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin: 0;
                }
            }
            li {
                display:inline-block;
                padding: 0 10px;
                &.cta {
                    float:right;
                    a {
                        background: #ad0707;
                        &:hover, &:focus {
                            background: #6e0404;
                        }
                    }
                }
                a {
                    color: white;
                    text-decoration: none;
                }
                button {
                    background: #AF0606 !important;
                }
            }
        }
    }
`

const Divider = styled.hr`
    display: none;
    @media(min-width: 900px) {
        display: block;
        border-color: rgba(255,255,255,.1);
        margin: 15px 0 0;
    }
`

const Header = () => {

    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname])

    return (
        <SiteHeader className="header">
            <Logo />
            <TopMenu items={MenuData.top} />
            <Divider />
            <MainMenu items={MenuData.main} />
            <MobileMenu mainItems={MenuData.main} topItems={MenuData.top} />
            <div className="clearfix" />
        </SiteHeader>
    )
}

export default Header