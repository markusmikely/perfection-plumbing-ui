import React from 'react'
import { Field } from 'formik'

import TextInput from './TextInput'
import AddressFinder from './AddressFinder'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const CustomerInput = ({
                           title,
                           firstname, lastname,
                           address1, address2, address3, town, country, postcode, addressRequired,
                           email, phone, preference }) => {

    return (
        <div>
            <h3>Your Name</h3>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextInput
                        name="firstname"
                        type="text"
                        label="Firstname"
                        placeholder="Firstname" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextInput
                        name="lastname"
                        type="text"
                        label="Lastname"
                        placeholder="Lastname" />
                </Grid>
            </Grid>
            <h3>Addresss</h3>
            <AddressFinder />
            <h3>Contact Details</h3>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextInput
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="Email" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextInput
                        name="phone"
                        type="text"
                        label="Phone"
                        placeholder="Phone" />
                </Grid>
            </Grid>
            <h3>Any special requirements</h3>
            <p>Are there and special details would like to share prior to your booking? One of our agents will be in touch to discuss</p>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={12}>
                    <Field name="requirements" as="textarea">
                        {({ field }) => (
                            <TextareaAutosize
                                aria-label="Your requirements"
                                minRows={3}
                                placeholder="Tell us more about the work you require done"
                                style={{ width: "calc(100% - 32px)", height: "100px", padding: "15px", fontSize: "16px" }}
                                {...field}
                            />
                        )}
                    </Field>
                </Grid>
            </Grid>
        </div>
    )
}

export default CustomerInput
