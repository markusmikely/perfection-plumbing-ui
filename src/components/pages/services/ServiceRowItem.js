import { Grid } from "@mui/material"
import PlumbingImg from "./../../../assets/images/plumbing-services.jpg"
import BoilerImg from "./../../../assets/images/boiler.jpg"
import BathroomImg from "./../../../assets/images/bathroom-refurbishment.jpg"
import AirConImg from "./../../../assets/images/air-con.jpg"

const getImage = image => {
    switch (image) {
        case "bathroom":
            return BathroomImg
        case "boiler":
            return BoilerImg
        case 'air-con':
            return AirConImg
        default:
            return PlumbingImg
    }
}

const OddRow = ( {item} ) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <img src={getImage(item.image)} />
            </Grid>
            <Grid item xs={12} md={8}>
                <h2>{item.title}</h2>
                <div className="content" dangerouslySetInnerHTML={{__html: item.long_description}}></div>
            </Grid>
        </Grid>

    )
}
const EvenRow = ( {item} ) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
                <h2>{item.title}</h2>
                <div className="content" dangerouslySetInnerHTML={{__html: item.long_description}}></div>
            </Grid>
            <Grid item xs={12} md={4}>
                <img src={getImage(item.image)} />
            </Grid>
        </Grid>

    )
}

const ServiceRowItem = ({ item, order }) => {

    return (
        <div style={{width: "100%"}}>
            {(order%2 == 0) ? <EvenRow item={item} /> : <OddRow item={item} />}
            <hr className={"gradient " + ((order%2 == 0) ? "left" : "right")} />
        </div>
    )
}

export default ServiceRowItem