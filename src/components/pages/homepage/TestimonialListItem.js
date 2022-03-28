import React from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";

const Testimonial = styled.div`
    border-radius: 5px;
    background: #f8f8f8;
    padding: 20px;
    text-align: center;
    h6 {
        margin: 0;
        font-size: 18px;
        margin-bottom: -10px;
    }
    p b {
        color: #a1a1a1;
    }
`

const TestimonialListItem = ({testimonial}) => {
    return (
        <Testimonial className="testimonial">
            <p>{testimonial.content}</p>
            <h6>{testimonial.name}</h6>
            <p><b>{testimonial.location}</b></p>
            <Rating name="read-only" value={testimonial.rating} readOnly />
        </Testimonial>
    )
}

export default TestimonialListItem