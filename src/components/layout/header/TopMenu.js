import React from "react";
import Box from "@mui/material/Box";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const TopMenu = ({ items }) => {

    const getIcon = icon => {
        switch(icon) {
            case 'location':
                return <LocationOnOutlinedIcon />
            case 'phone':
                return <PhoneOutlinedIcon />
            case 'clock':
                return <QueryBuilderOutlinedIcon />
            default:
                return <p>Icon not found</p>
        }
    }
    const links = items.map((item, i) => {
        const text = (item.to) ? <a href={item.to}>{item.text}</a> : <p>{item.text}</p>

        return <li key={i}>
            {getIcon(item.icon)}
            <span>{item.label}</span>
            {text}
        </li>
    })

    return (
        <Box component="div" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <nav>
                <ul className="top-menu">
                    {links}
                </ul>
                <div className="clearfix" />
            </nav>
        </Box>
    )
}

export default TopMenu