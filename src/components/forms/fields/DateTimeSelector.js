import React from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { Field, ErrorMessage, useFormikContext } from 'formik'

const DateTimeSelector = ({ name, setData }) => {

    const [value, setValue] = React.useState("now");
    const [date, setDate] = React.useState(new Date());
    const formikProps = useFormikContext()

    const handleChange = e => {
        const { value } = e.target;
        setValue(value)
        if(value == "now") {
            const date = new Date()
            setDate(date)
        }
    }
    const isChecked = (val) => {
        return value === val
    }

    React.useEffect(() => {
        const newDate = (isChecked("now")) ? new Date() : date
        formikProps.setFieldValue("datetime", newDate)
    }, [date, value])

    return (
        <>
            <Field name="datetime">
                {({ field }) => (
                    <div>
                        <div className="radio-wrapper">
                            <input type="radio" name="asap" value="now" id="asap-1"
                                   onChange={handleChange}
                                   checked={isChecked("now")}
                            />
                            <label className="radio-label" htmlFor="asap-1">Now</label>
                        </div>
                        <div className="radio-wrapper">
                            <input type="radio" name="asap" value="datetime" id="asap-2"
                                   onChange={handleChange}
                                   checked={isChecked("datetime")}
                            />
                            <label className="radio-label" htmlFor="asap-2">Choose Date and Time</label>
                        </div>
                        <br />
                        { isChecked("datetime") &&
                            <LocalizationProvider dateAdapter={AdapterDateFns}>

                                <>

                                    <DateTimePicker
                                        renderInput={(props) => <TextField {...props} />}
                                        label="Date and Time"
                                        value={date}
                                        onChange={(newDate) => {
                                            setDate(newDate)
                                        }}
                                    />
                                </>



                            </LocalizationProvider>
                        }
                    </div>
                )}
            </Field>
            <ErrorMessage name="datetime" component="div" render={msg => <div className="error">{msg}</div>} />
        </>
    )
}

export default DateTimeSelector
