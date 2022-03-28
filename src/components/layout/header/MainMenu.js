import React from "react";
import { Button, Box } from '@mui/material';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuLink = styled(NavLink)`
    transition: all .3s linear;
    padding: 10px 15px;
    border: 1px solid transparent;
    border-radius: 25px;
    margin-bottom: 4px;
    &:hover, &:focus, &.active  {
        border: 1px solid #ccc;
        
    }
    
`

const MainMenu = ({ items }) => {

    const links = items.map((item, i) => {
        return (
            <li key={i}>
                <MenuLink activeclassname="active" to={item.to}>{item.label}</MenuLink>
            </li>
        )
    })

    return (
        <Box id="main-menu" component="div" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <nav>
                <ul className="main-menu">
                    {links}
                    <li className="cta">
                        <Button variant="contained" component={NavLink} to={'/booking'} style={{background: "#ad0707 !important"}}>Get Quote</Button>
                    </li>
                </ul>
                <div className="clearfix" />
            </nav>
        </Box>
    )
}

export default MainMenu