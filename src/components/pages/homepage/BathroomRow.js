import React from "react"
import {Button, Container} from "@mui/material";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import img from "./../../../assets/images/bathroom-refurbishment.jpg"

const BathroomService = styled.div`
    background: linear-gradient(
      rgba(42, 60, 104, 0.7), 
      rgba(42, 60, 104, 0.7)
    ), url(${img});
    color: white;
    padding: 80px 0;
    margin: 40px 0;
    background-position: center;
    background-size:cover;
    text-align: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    @media(min-width: 768px) {
        text-align: left;
    }
    h3 {
        font-size:28px;
        line-height: 1.4;
        font-weight: bold;
        margin-bottom: 10px;
    }
    p { 
        font-size: 18px;
        line-height: 1.7;
        margin-top: 0;
        margin-bottom: 30px;
     }
     a {
         background: #AF0606 !important;
         &:hover, &:focus {
            background: #6e0404 !important;
        }
     }
`

const BathroomRow = () => {
    return (
        <BathroomService id="bathroom-services">
            <Container>
                <h3>Bathroom Installations</h3>
                <p>Specialists in high quality bathroom installations<br />across London. Contact us today for a FREE no obligation quote.</p>
                <Button variant="contained" component={NavLink} to="/booking">Get Quote</Button>
            </Container>
        </BathroomService>
    )
}
export default BathroomRow