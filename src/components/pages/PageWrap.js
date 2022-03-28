import PageHeader from "./../shared/PageHeader"
import { Container, Grid } from "@mui/material";
import styled from "styled-components";

const Content = styled.div`
    padding: 40px 0;
    h4, p {
        display: block;
        clear: both;
        width: 100%;
    }
    li {
        margin-bottom: 15px;
        line-height: 1.4;
    }
    p {
        font-size: 17px;
        line-height: 1.4;
    }
    img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        margin: 20px autp;
    }
`

const PageWrap = ({ title, children }) => {
    return (
        <div>
            <PageHeader title={title} />
            <Content className={title}>
                <Container>
                    <Grid container spacing={3}>
                        {children}
                    </Grid>
                </Container>
            </Content>
        </div>
    )
}

export default PageWrap