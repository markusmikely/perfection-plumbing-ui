import React from "react";
import styled from "styled-components";
import img from "./../../assets/images/plumbing-services.jpg";

const Header = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: coloumn;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${img});
    background-size: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    h1 {
        color: white;
    }
        
`

const PageHeader = ({ title }) => {

    return (
        <Header className="page-header">
            <h1>{title}</h1>
        </Header>
    )
}

export default PageHeader