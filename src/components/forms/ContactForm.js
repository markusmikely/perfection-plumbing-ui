import FormSection from "./fields/FormSection";
import {Button} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import TextInput from "./fields/TextInput";
import {Formik, Form, Field, ErrorMessage} from "formik";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import * as Yup from 'yup';
import * as axios from "axios";

const ContactForm = () => {

    const [errors, setErrors] = React.useState([])
    const [result, setResult] = React.useState({})
    const [data, setData] = React.useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
    })

    const ContactSchema = Yup.object().shape({
        firstname: Yup.string()
            .required('Enter your firstname'),
        lastname: Yup.string()
            .required('Enter your lastname'),
        phone: Yup.string()
            .required('Enter your contact number'),
        message: Yup.string()
            .required('Enter a message'),
        email: Yup.string().email('Invalid email').required('Enter your email'),
    });

    React.useEffect(() => {
        setErrors([])
        setResult(undefined)
    }, [])

    const ContactSubmission = (values, {resetForm}) => {

        const host = {
            dev: 'https://127.0.0.1:8000/',
            prod: ''
        };//window.location.origin;
        const url = host.dev+"contact";
        const queryString = '?' +
            Object.keys(values).map(function(key) {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(values[key]);
            }).join('&');


            axios.post(url+queryString, values)
            .then(function (response) {
                setResult(response)
                resetForm()
                const timer = setTimeout(() => {
                    setResult(undefined)
                }, 3000);
                return () => clearTimeout(timer);
                window.scrollTo(0,0);
            })
            .catch(function (error) {
                setErrors(error)
            });

    }

    const getErrors = errors.map((error, i) => {
        return <div className="error" key={i}>{error}</div>
    })

    return (
        <Formik
            initialValues={data}
            validationSchema={ContactSchema}
            onSubmit={ContactSubmission}>
            { props => (

            <Form>
                {errors.length > 0 &&
                    (<div className="errors alert alert-danger">
                        {getErrors(errors)}
                    </div>)
                }
                {result &&
                    (<div className="success alert alert-success">
                        Message sent successfully
                    </div>)
                }
            <FormSection
                title="Enter your Details"
                description="Tell us who your are and your contact preferences">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextInput
                            name="firstname"
                            type="text"
                            label="Firstname"
                            placeholder="Firstname" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextInput
                            name="lastname"
                            type="text"
                            label="Lastname"
                            placeholder="Lastname" />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextInput
                            name="email"
                            type="text"
                            label="Email"
                            placeholder="Email" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextInput
                            name="phone"
                            type="text"
                            label="Phone Number"
                            placeholder="Phone (optional)" />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h3>Message</h3>
                        <Field name="message" as="textarea">
                            {({ field }) => (
                                <>
                                    <TextareaAutosize
                                        aria-label="Message"
                                        minRows={3}
                                        placeholder="Enter Your message here"
                                        style={{ width: "calc(100% - 30px)", height: "100px", padding: "15px", fontSize: "16px" }}
                                        {...field}
                                    />
                                    <ErrorMessage name="message" component="div" render={msg => <div className="error">{msg}</div>} />
                                </>
                            )}
                        </Field>
                    </Grid>
                </Grid>
            </FormSection>
            <Button type="submit" variant="contained"  style={{background: "#2A3C68"}} disabled={props.isSubmitting && !props.isValid}>Submit</Button>
        </Form>
            )}
    </Formik>
    )
}

export default ContactForm