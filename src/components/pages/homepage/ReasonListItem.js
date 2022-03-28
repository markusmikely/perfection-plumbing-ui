import {Grid} from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import styled from 'styled-components';

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
    h4 {
        color: #AF0606;
        margin: 15px 0 0 0;
        font-size:18px;
    }
    &.text {
        position: relative;
        padding: 0 20px;
    }
    .dots {
        text-align: center;
        position: relative;
        padding: 0px 0;
        span {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #AF0606;
            display: inline-block;
            margin: 0 5px;
        }
    }
    p {
        line-height: 1.4;
    }
    margin-bottom: 25px;
    @media(min-width: 768px) {
        margin-bottom: 0;
    }
`

const ReasonListItem = ({ item }) => {

    const getIcon = icon => {
        switch (icon) {
            case 'plumber':
                return <BuildOutlinedIcon />
            case 'location':
                return <FmdGoodOutlinedIcon />
            case 'accredited':
                return <VerifiedOutlinedIcon />
            default:
                return <StarBorderOutlinedIcon />
        }
    }

    return (
        <Grid className="reason" item xs={12} sm={6} md={3}>
            <Icon className="icon">
                {getIcon(item.icon)}
            </Icon>
            <Content className="text">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <div className="dots">
                    <span />
                    <span />
                    <span />
                </div>
            </Content>
        </Grid>
    )
}

export default ReasonListItem