import React from "react";

import { Field, ErrorMessage, useFormikContext } from "formik"
import styled from 'styled-components'
import axios from 'axios'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {Grid} from "@mui/material";

const FindAddressButton = styled(Button)`
  padding: 15px;
  margin-left: 15px;
  margin-bottom: 18px;
  height: 56px;
  @media(max-width: 768px) {
    margin: 0 !important;
    width: 100%;
  }
`

const StyledTextField = styled(TextField)`
  @media(max-width: 768px) {
    width: 100%;
    margin-bottom: 20px !important;
  }
`

const AddressFinder = props => {

    const [postcode, setPostcode] = React.useState("")
    const [addresses, setAddresses] = React.useState([])
    const [address, setAddress] = React.useState("")
    const [selectedAddress, setSelectedAddress] = React.useState("")

    const apiKey = 'w__qG5RIL0Cksz7p3HlF2w33815'
    const api = 'https://api.getAddress.io/find/'

    const formikProps = useFormikContext()

    const getAddress = () => {

        const url = api+postcode+"?api-key="+apiKey

        axios.get(url).then(response => {
            console.log('response', response)
            console.log('addresses', response.data.addresses)

            if(response.status == 200 && response.statusText == 'OK') {
                setAddresses(response.data.addresses)


            }
        })
            .catch(error => {
                console.error(error)
            })
    }

    const cleanAddress = address => {
        return address.split(", ").filter(Boolean).join(", ")
    }

    const addressOptions = addresses.map((address, i) => {
        return <MenuItem key={i} value={address}>{cleanAddress(address)}</MenuItem>
    })

    const handlePostcodeChange = event => {
        const postcode = event.target.value
        if(postcode && postcode.length > 0) setPostcode(event.target.value)
    }

    const handleAddressChange = event => {
        const newAddress = event.target.value + " " + postcode
        setAddress(newAddress)
    }

    React.useEffect(() => {
        formikProps.setFieldValue("address", address)
    }, [address])

    React.useEffect(() => {
        setSelectedAddress(addresses[0])
    }, [addresses])

    React.useEffect(() => {
        console.log('eravsd', selectedAddress);
    }, [selectedAddress])
    // on change handler for address selector
    // display selected address

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <div className="address-finder">
            <StyledTextField label="Postcode" variant="outlined" placeholder="SW16 1AN" value={postcode} onChange={handlePostcodeChange} name="postcode-lookup" />
            <FindAddressButton variant="outlined" onClick={getAddress} disabled={postcode.length == 0}>Find Address</FindAddressButton>
            {addresses.length >  1 && <div className="addresses">
                <div>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedAddress ?? ""}
                        label="Address"
                        onChange={handleAddressChange}

                    >
                        {addressOptions}
                    </Select>
                </div>
            </div>}
            {address &&
                <div className="address-display">
                    <address>
                        <h3>Customer Address</h3>
                        {address}
                    </address>
                </div>
            }
            <ErrorMessage name="address" component="div" render={msg => <div className="error">{msg}</div>} />
        </div>
            </Grid>
        </Grid>
    )
}

export default AddressFinder
