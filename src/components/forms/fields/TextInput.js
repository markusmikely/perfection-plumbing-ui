import React from 'react'
import { Field, ErrorMessage } from "formik"
import TextField from '@mui/material/TextField';

import styled from 'styled-components'

const Input = styled.div`
  margin-bottom: 20px;
  min-width:300px;
`


const TextInput = ({ label, placeholder, type, name }) => {
    return (
        <Field name={name}>
            {({ field }) => (
                <Input>
                    <TextField fullWidth id={name} label={label} variant="outlined" placeholder={placeholder} {...field} />
                    <ErrorMessage name={name} component="div" render={msg => <div className="error">{msg}</div>} />
                </Input>
            )}
        </Field>
    )
}

export default TextInput
