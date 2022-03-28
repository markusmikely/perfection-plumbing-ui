import {Container, Grid} from "@mui/material";
import styled from "styled-components";
import img from "./../../../assets/images/heating.jpg"

import DirectoriesList from "./../../../data/directories.json"
import DirectoryListItem from "./DirectoryListItem";

const Directories = styled.div`
    text-align: center;
    margin: 0 auto;
    background: linear-gradient( rgba(42,60,104,0.7), rgba(42,60,104,0.7) ),url(${img});
    background-size: cover;
    background-position: bottom;
    padding: 100px 0;
    margin: 50px 0;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    h2 {
        color: white !important;
        margin-bottom: 40px;
    }
    a {
        position: relative;
        display: inline-block;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    }
    img {
        width: auto;
        height: 35px;
    }
`

const DirectoriesRow = () => {

    const directories = DirectoriesList.map( (directory, i) => {
        return <DirectoryListItem key={i} directory={directory} />
    })

    return (
        <Directories className="directories">
            <Container>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <h2>Find Us On</h2>
                    </Grid>
                    {directories}
                </Grid>
            </Container>
        </Directories>
    )
}

export default DirectoriesRow