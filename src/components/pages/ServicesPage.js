import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import styled from "styled-components";
import PageWrap from "./PageWrap";
import ServicesRowItem from "./services/ServiceRowItem"

import servicesList from "./../../data/services.json"

const StyledButton = styled(Button)`
    background: #AF0606 !important;
    margin: 0 auto 20px !important;
     &:hover, &:focus {
        background: #6e0404 !important;
    }
    
`
const StyledServices = styled.div`
    @media(max-width: 768px) {
     .MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-3.css-zow5z4-MuiGrid-root {
        width: 100%;
        margin-left: 0;
    }
    .css-zow5z4-MuiGrid-root>.MuiGrid-item {
       
    }
}
`
const ServicesPage = () => {

    const services = servicesList.map( (item, i) => {
        return (
            <ServicesRowItem item={item} key={i} order={i} />
        )
    })

    return (
        <PageWrap title="Our Services" name="our-services-page">
            <StyledServices>{services}</StyledServices>
            <StyledButton variant="contained" component={Link} to="/booking">Request a Quote</StyledButton>
        </PageWrap>

    )
}

export default ServicesPage