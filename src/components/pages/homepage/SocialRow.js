import React from "react";
import {Container, Grid} from "@mui/material";
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import SocialList from "./../../../data/socials.json"

const SocialLinks = styled.ul`
    list-style: none;
    margin: 0px auto 40px;
    padding:0;
    text-align: center;
    li {
        display: inline-block;
        a {
            * {
                font-size: 40px;
                color: #2A3C68;
            }
        }
    }
`
const Social = styled.div`
    text-align: center;
`
const SocialRow = () => {

    const getIcon = icon => {
        switch (icon) {
            case 'facebook':
                return <FacebookIcon />
            case 'twitter':
                return <TwitterIcon />
            case 'instagram':
                return <InstagramIcon />
            default:
                return <LinkedInIcon />
        }
    }

    const social = SocialList.map( (social, i) => {
        return <li key={i} style={{padding: "0 20px"}}><a href={social.link} target="_blank">{getIcon(social.icon)}</a></li>
    })

    return (
        <Social className="social">
            <Container>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <h2>Follow Us On</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <SocialLinks>{social}</SocialLinks>
                    </Grid>
                </Grid>
            </Container>
        </Social>
    )
}

export default SocialRow