import React from "react"
import Masonry from '@mui/lab/Masonry';
import {Button, Container, Grid} from "@mui/material";
import styled from "styled-components";

import TestimonialsList from "./../../../data/testimonials.json"
import TestimonialListItem from "./TestimonialListItem";
import {Link} from "react-router-dom";

const Testimonials = styled.div`
    text-align: center;
    @media(max-width: 768px) {
        .MuiGrid-root.MuiGrid-container {
            margin: 0 !important;
        }
    }
    h2 {
        margin: 30px auto;
        text-align: center;
    }
    a {
        margin: 20px auto 0;
        background: #2a3b68 !important;
    }
`

const TestimonialsRow = ({ limit }) => {

    const list = (limit) ? TestimonialsList.slice(0, limit) : TestimonialsList;
    const testimonials = list.map( (testimonial, i) => {
        return <TestimonialListItem key={i} testimonial={testimonial} />
    })

    return <Testimonials className="testimonials">
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <h2>What our customers say</h2>
                    <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>{testimonials}</Masonry>
                    {limit && <Button variant="contained" component={Link} to={'/testimonials'}>Read More</Button>}
                </Grid>
            </Grid>
        </Container>
    </Testimonials>
}

export default TestimonialsRow