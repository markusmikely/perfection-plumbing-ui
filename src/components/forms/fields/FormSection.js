import React from 'react'
import styled from 'styled-components'

const SubHeader = styled.h2`
  margin-bottom: 10px;
  font-weight:900;
`
const Description = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
`

const FormSection = ({ children, title, description }) => {

    return (
        <div>
            <SubHeader>{title}</SubHeader>
            <Description>{description}</Description>
            {children}
        </div>
    )
}
export default FormSection
