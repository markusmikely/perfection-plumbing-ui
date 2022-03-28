import React from "react"
import {Container, Grid, Button} from "@mui/material";
import {Link} from "react-router-dom";
import styled from "styled-components";
import ServicesListItem from "./ServiceListItem";
import ServicesList from '../../../data/services.json';

const Services = styled.div`
    padding: 40px 0;
    margin: 30px 0;
    text-align: center;
    h2 {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #000000;
        text-transform: uppercase;
        margin: 10px 0 40px;
    }
    a {
        margin: 20px auto 0;
        background: #2a3b68 !important;
    }
`

const ServicesRow = () => {

    const services = ServicesList.map( (service, i) => {
        return <ServicesListItem key={i} item={service} />
    })

    return (
        <Services className="services">
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <h2>Services</h2>
                    </Grid>
                    {services}
                    <Button variant="contained" component={Link} to="/services">Read More</Button>
                </Grid>
            </Container>
        </Services>
    )
}

export default ServicesRow