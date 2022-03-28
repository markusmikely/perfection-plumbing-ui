import React from 'react'
import HeroImg from './../../../assets/images/hero.jpg'
import GasImg from './../../../assets/images/gas.png'

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

const Hero = styled.section`
    height: 320px;
    overflow: hidden;
    position: relative;
    text-align: center;
    padding: 0 30px;
    border-bottom: 10px solid #2a3b68;
    background: linear-gradient(rgba(230, 236, 241, .7), rgba(230, 236, 241, .7)), url(${HeroImg});
    background-size:cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    @media(min-width: 768px) {
        padding: 50px;    
    }
    a {
      background: #ac0807;
      margin-top: 40px;
      &:hover, &:focus {
        background: #6e0404;
        }
  }
    img {
        width: 100%;
        height: auto;
        position: absolute;
        bottom: 0;
        left:0;
        z-index:1;
    }
    h2 {
        position:relative;
        z-index:3;
        font-size: 30px;
        font-weight: bolder;
        color: #AF0606;
        margin-bottom: 10px;
        margin-top: 40px;
        @media(min-width: 768px) {
            font-size: 40px;   
        }
    }
    h3 {
        position:relative;
        z-index: 3;
        font-size: 22px;
    }
    ul {
        list-style: none;
        margin: 40px auto;
        display: none;
        @media(min-width: 768px) {
            display: block; 
        }
        li { margin-bottom: 20px; display: inline-block; padding: 0 20px}
    }
    img {
            position: absolute;
            bottom: 220px;
            left: 50%;
            margin-left: -40px;
            height: 80px;
            width: auto;
         @media(min-width: 768px) {
             left: 210px;
            margin: 0;;
        }
        
    }
    
    .gas-banner {
        display: block;
        background: linear-gradient( rgb(42 59 104 / 0),rgb(42 59 104 / .5));
        width: 400px;
        height: 400px;
        border-radius: 50%;
        position: absolute;
        bottom: -200px;
        left: 50%;
        margin-left: -200px;
        @media(min-width: 768px) {
            margin-left:0;
            left: -200px;
        }
    }
`
const ScrollLink = styled(Link)`
    display:none !important;
    margin: 0 auto;
    @media(min-width: 768px) {
        display: inline-block !important;
    }
`

const HeroSection = () => {

    return (
        <Hero id="hero">
            <h2>PROFESSIONAL PLUMBING SERVICES IN LONDON</h2>
            <h3>Trustworthy, Reliable and urgent call-out services delivered to perfection!</h3>
            <Button variant="contained" component={ScrollLink} to="/#why-us-row">Read More</Button>
            <div className="gas-banner">
                <img className="gas-saftey" src={GasImg} />
            </div>
        </Hero>
    )
}

export default HeroSection