import React from 'react'
import {ErrorMessage, Field} from "formik";
import CheckboxItem from "./CheckboxItem";

const ServiceSelector = ({services}) => {

    const options = services.map((service, i) => {
        return (
           <CheckboxItem name="services" service={service} key={i} />
        )
    })

    return (
        <div className="select-services" role="group" aria-labelledby="checkbox-group">
            {options}
            <ErrorMessage name="services" component="div" render={msg => <div className="error">{msg}</div>} />
        </div>
    )
}

export default ServiceSelector
