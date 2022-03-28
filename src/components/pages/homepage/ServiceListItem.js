import {Grid} from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import styled from 'styled-components';
import PlumbingImg from "./../../../assets/images/plumbing-services.jpg"
import BoilerImg from "./../../../assets/images/boiler.jpg"
import BathroomImg from "./../../../assets/images/bathroom-refurbishment.jpg"
import AirConImg from "./../../../assets/images/air-con.jpg"

const Icon = styled.div`
    height: 100px;
    width: 100px;
    background: #ae0606;
    border-radius: 4px;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    svg {
        position: absolute;
        font-size: 50px;
        height: 50px;
        width: 50px;
        left: 50%;
        margin-left: -25px;
        top: 50%;
        margin-top: -25px;
        path {
            fill: white;
        }
    }
`
const Content = styled.div`
    text-align:center;
    margin-bottom: 25px;
    @media(min-width: 768px) {
        margin-bottom: 0;
    }
    h4 {
        color: #2A3C68;
        margin: 25px 0 0 0;
        font-size:18px;
        line-height: 1.4;
    }
    p {
        line-height: 1.6;
    }
    &.text {
        position: relative;
        padding: 0 20px;
    }
    .service-image {
        width: 100%;
        height: 130px;
        border-radius: 5px;
        overflow: hidden;
        img {
            width: 100%;
            height: auto;
        }
    }
    .dots {
        text-align: center;
        position: relative;
        padding: 0px 0;
        span {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #2a3b68;
            display: inline-block;
            margin: 0 5px;
        }
    }
`

const ServiceListItem = ({ item }) => {

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
    return (
        <Grid className="service" item xs={12} sm={6} md={3}>
            <Content className="text">
                <div className="service-image">
                    <img src={getImage(item.image)} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="dots">
                    <span />
                    <span />
                    <span />
                </div>
            </Content>
        </Grid>
    )
}

export default ServiceListItem