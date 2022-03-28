import React from "react"
import {Link} from "react-router-dom";
import styled from "styled-components";

const FooterWrap = styled.div`
  padding: 0 30px;
  ul {
    list-style: none;
    margin: 15px 0 25px;
    li {
      display: inline-block;
      padding-left: 20px;
      font-size: 14px;
      a {
        color: #2a3b68;
        text-decoration: none;
      }
    }
  }
`

const CopyrightText = styled.p`
   margin: 25px 0 !important;
    font-size: 14px;
    text-align: center;
    display: block;
    float: none;
    @media(min-width: 768px) {
        text-align: left;
        float:left;
        margin: 15px 0 !important;
    }
`
const FooterLinks = styled.ul`
  float: none;
  padding: 0;
  text-align center;
    @media(min-width: 768px) {
        float:right;
    }
`

const Footer = () => {

  return (
      <FooterWrap className="footer">
        <hr />
        <CopyrightText>
          &copy; Perfection Plumbers Ltd 2022
        </CopyrightText>
        <FooterLinks>
          <li><Link to="/terms">Terms &amp; Conditions</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
        </FooterLinks>
      </FooterWrap>
  )
}

export default Footer