import PageWrap from "./PageWrap"
import { Grid, Button } from "@mui/material"
import {Link} from "react-router-dom"

import GasImg from './../../assets/images/gas.png'

const AboutPage = () => {

    return (
        <PageWrap name="about-page" title="About Page">
            <Grid item xs={12} md={9}>
                <p>Perfection Plumbing carry out just about any plumbing work in either domestic or commercial properties, the most common tasks include:</p>

                <ul>
                    <li>Fitting taps, sinks, toilets & showers</li>
                    <li>Installing new pumps & replacing broken ones</li>
                    <li>Fixing showers, taps & replacing cartridges</li>
                    <li>Locating & fixing plumbing leaks</li>
                    <li>New pipework for washing machines & dishwashers</li>
                    <li>Installing water softeners & filters</li>
                    <li>Plumbing call outs in London</li>
                </ul>
                <p>At Perfection Plumbers we understand the stress of having a plumbing problem. So whether it’s a broken shower or toilet, or a leak that hasn’t been detected, or simply a dripping tap, we’re here to help.</p>
                <p>Our team will respond to all job request in the London area. We aim to get someone to you as quickly as possible and start fixing the problem straightaway, available both during our normal working hours and for emergency call-out services.</p>
                <p>Perfection Plumbing cover all cold-water job types. Our drainage specialists can deal with blockages and gas heating engineers for heating and hot water issues. They all carry specialist equipment. So whatever plumbing or drainage issue you have, we’ve got an expert tradesman ready for you.</p>
                <div className="text-center">
                    <Button variant="contained" to="/contact" component={Link} className="about-button">Call our team today!</Button>
                </div>
                <h3>Why choose Us?</h3>
                <ul>
                    <li>Large team of expert plumbers</li>
                    <li>Free of charge fixed price quotes</li>
                    <li>Fully trade accredited for your peace of mind</li>
                    <li> 12 month workmanship guarantee</li>
                    <li>Quick response time</li>
                    <li>Emergency service 24/7</li>
                </ul>
            </Grid>
            <Grid item xs={12} md={2}>
                <img src={GasImg} />
            </Grid>
        </PageWrap>
    )
}

export default AboutPage