import PageWrap from "./PageWrap";
import BookingForm from "../forms/BookingForm";
import {Grid} from "@mui/material";

const QuotePage = () => {
    return (
        <PageWrap title="Request a Quote" name="quote-page">
            <Grid item xs={12}>
                <BookingForm />
            </Grid>
        </PageWrap>
    )
}

export default QuotePage