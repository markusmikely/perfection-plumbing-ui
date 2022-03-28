import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import LogoImg from './../../../assets/images/logo.png'

const Title = styled.h1`
    margin: 0;
    
    a {
        float: left;
        text-decoration: none;
        span {
            text-transform: uppercase;
            color: white;
            font-size: 30px;
            margin: 8px 0;
            font-family: Nunito;
        }
    }
`
const Branding = styled.img`
    height: 50px;
    width: auto;
    margin-right: 10px;
    margin-bottom: -12px;
`

const Logo = () => {
    return (
        <Title id="logo">
            <Link to="/">
                <Branding src={LogoImg} />
                <span>Perfection Plumbing</span>
            </Link>
        </Title>
    )
}

export default Logo