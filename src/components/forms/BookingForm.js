import React, {useEffect} from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "@mui/material";
import * as Yup from 'yup';
import * as axios from "axios";

import FormSection from "./fields/FormSection"
import ServiceSelector from "./fields/ServiceSelector";
import DateTimeSelector from "./fields/DateTimeSelector";
import CustomerInput from "./fields/CustomerInput";

const BookingForm = () => {
    const [loading, setLoading] = React.useState(false)
    const [result, setResult] = React.useState(false)
    const [errors, setErrors] = React.useState([])

    const [data, setData] = React.useState({
        services: [],
        datetime: undefined,
        firstname: "",
        lastname: "",
        address: "",
        email: "",
        phone: "",
        preference: "",
        requirements: "",
        toggle: false
    })

    const services = [
        {
            id:1,
            value: "PLUMBING & HEATING"
        },
        {
            id:2,
            value: "BOILER REPAIR & INSTALLATIONS"
        },
        {
            id:3,
            value: "BATHROOM INSTALLATIONS"
        },
        {
            id: 4,
            value: "AIR CONDITIONING"
        }
    ]

    const handleChange = (value) => {
        setData(prev => ({ ...prev, ...value }))
    }

    const BookingSchema = Yup.object().shape({
        services: Yup.array()
            .min(1, 'Select at least one service'),
        datetime: Yup.string()
            .required('Please select a date and time').nullable(),
        firstname: Yup.string()
            .required('Enter your firstname'),
        lastname: Yup.string()
            .required('Enter your lastname'),
        phone: Yup.string()
            .required('Enter your contact number'),
        email: Yup.string()
            .email('Invalid email').required('Enter your email'),
        address: Yup.string()
            .required('Address required')
    });

    const BookingSubmission  = ( values, { resetForm }) => {

        const host = 'https://127.0.0.1:8000/';//window.location.origin;
        const url = host+"booking";
        const queryString = '?' +
            Object.keys(values).map(function(key) {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(values[key]);
            }).join('&');

        setLoading(true)

        axios.post(url+queryString, values)
            .then(function (response) {
                setLoading(false)
                setResult(response)
                resetForm()
                window.scrollTo(0,0);
                const timer = setTimeout(() => {
                    setResult(undefined)
                }, 3000);
            })
            .catch(function (error) {
                setErrors(error)
            });

    }

    const getErrors = errors.map((error, i) => {
        return <div className="error" key={i}>{error}</div>
    })

    const resetPage = () => {
        setResult(undefined)
        setErrors([])
        setLoading(false)
    }

    React.useEffect(() => {
        resetPage()
    }, [])
    return (
        <Formik
            initialValues={data}
            validationSchema={BookingSchema}
            onSubmit={BookingSubmission}>
            {(values) => (
                <Form>
                    {errors.length > 0 &&
                        (<div className="errors alert alert-danger">
                            {getErrors(errors)}
                        </div>)
                    }
                    {result &&
                        (<div className="success alert alert-success">
                            Booking request sent
                        </div>)
                    }
                    <FormSection
                        title="Select Services"
                        description="Please select the services you are interested in">
                        <ServiceSelector
                            name="services"
                            services={services}
                        />
                    </FormSection>
                    <FormSection
                        title="Select When you would like your booking"
                        description="Choose a date and time that suits or select now if you are looking for an urgent appointment">
                        <DateTimeSelector
                            name="datetime"
                            setData={handleChange}
                        />
                    </FormSection>
                    <FormSection
                        title="Enter your Details"
                        description="Tell us who your are and your contact preferences">
                        <CustomerInput />
                    </FormSection>
                    <Button type="submit" variant="contained">Submit</Button>
                </Form>
            )}
        </Formik>
    )
}

export default BookingForm