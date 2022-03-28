import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
import styled from "styled-components";

const MobileMenuWrap = styled.div`
    .menu {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #2a3b68;
        color: white;
        z-index: 9;
        text-align: center;
        padding-top: 40px;
    }
    button {
        position: absolute;
        right: 0;
        top: 15px;
        color: white;
    }
    .menu ul {list-style: none;}
    
    .menu ul li a {
        color: white;
        font-size: 26px;
        line-height: 55px;
        text-decoration: none;
    }
    
    ul.contact li {
        display: inline-block;
        padding: 0 30px;
        font-size: 20px;
        font-weight: bold;
    }
`

const MobileMenu = ({ topItems, mainItems }) => {

    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const mainMenuItems = mainItems.map((item, i) => {
        return <li key={i}><Link to={item.to} onClick={toggleMenu}>{item.label}</Link></li>
    })
    const topMenuItems = topItems.map((item, i) => {
        return <li key={i}>{item.text}</li>
    })

    return (
        <Box component="div" sx={{ display: { sm: 'block', md: 'none' } }}>
            <MobileMenuWrap className="mobile-menu">
                <Button  onClick={toggleMenu}>
                    <MenuIcon />
                </Button>
                {showMenu &&
                    <div className="menu">
                        <Button onClick={toggleMenu}>
                            <CloseIcon />
                        </Button>
                        <ul>
                            {mainMenuItems}
                        </ul>
                        <ul className="contact">
                            {topMenuItems}
                        </ul>
                    </div>
                }
            </MobileMenuWrap>
        </Box>
    )
}

export default MobileMenu