import Reasons from "../../../data/whyus.json"
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import {Container, Grid} from "@mui/material";
import styled from 'styled-components';
import ReasonListItem from "./ReasonListItem";

const Title = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #000000;
    text-transform: uppercase;
    margin: 40px 0 20px;
`
const WhyUs = styled.div`
    padding: 30px 0;

`
const WhyUsRow = () => {

    const getIcon = icon => {
        switch (icon) {
            default:
                return <StarBorderOutlinedIcon />
        }
    }

    const reasons = Reasons.map( (reason, i) => {
        return (
            <ReasonListItem key={i} item={reason}  />
        )
    })
    return (
        <WhyUs id="why-us-row">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Title>High Quality Local Services</Title>
                    </Grid>
                    {reasons}
                </Grid>
            </Container>
        </WhyUs>
    )
}

export default WhyUsRow