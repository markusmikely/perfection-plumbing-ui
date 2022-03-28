import React from "react"
import styled from "styled-components";

import TaskRabbitImg from "./../../../assets/images/directories/taskrabbit.svg"
import YellImg from "./../../../assets/images/directories/yell.png"
import CheckatradeImg from "./../../../assets/images/directories/checkatrade.png"
import GumtreeImg from "./../../../assets/images/directories/gumtree.svg"
import MyBuilderImg from "./../../../assets/images/directories/mybuiilder.png"
import {Grid} from "@mui/material";

const DirectoryListItem = ({ directory }) => {

    const getImage = image => {
        switch (image) {
            case "taskrabbit":
                return TaskRabbitImg
            case "yell":
                return YellImg
            case "checkatrade":
                return CheckatradeImg
            case "gumtree":
                return GumtreeImg
            default:
                return MyBuilderImg
        }
    }
    return (
        <Grid item xs={6} md={3}><a href={directory.link}><img alt={directory.name} src={getImage(directory.logo)} /></a></Grid>
    )
}

export default DirectoryListItem