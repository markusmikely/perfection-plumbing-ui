import ContactForm from "../forms/ContactForm";
import PageWrap from "./PageWrap"
import styled from "styled-components";
import {Grid} from "@mui/material";

const ContactCard = styled.div`
    padding: 20px;
    @media(max-width: 768px) {
        text-align:center;
    }


h4 {
margin-bottom: 7px;
}

address {
color: #2a3c68;
font-style: normal;
line-height: 1.4;
}
`
const ContactPage = () => {
    return (
        <PageWrap name="contact-page" title="Contact Us">
            <Grid item xs={12} md={8}>
                <ContactForm />
            </Grid>
            <Grid item xs={12} md={4}>
                <ContactCard>
                    <h4>Phone</h4> <a href="tel:+447497125204">+44 (0) 7497 125 204</a>
                    <h4>Email</h4> <a href="mailto:info@perfectionplumbing.co.uk">info@perfectionplumbing.co.uk</a>
                    <h4>Address</h4> <address>Perfection Plumbing LTD,<br />3rd Floor,<br />86-90 Paul Street,<br />London<br />EC2A 4NE</address>
                </ContactCard>
            </Grid>
        </PageWrap>
    )
}

export default ContactPage