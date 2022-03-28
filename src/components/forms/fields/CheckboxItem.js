import { Field } from "formik";
import React from "react";

const CheckboxItem = ({ name, service, values, handleChange }) => {
    return (
        <Field name={name} as="textarea">
            {({ field }) => (
                <div className="checkbox-wrapper">
                    <input
                        type="checkbox"
                        {...field}
                        id={name+service.id}
                        value={service.id}
                    />
                    <label className="checkbox-label" htmlFor={name+service.id}>{service.value}</label>
                </div>
            )}
        </Field>

    )
}

export default CheckboxItem