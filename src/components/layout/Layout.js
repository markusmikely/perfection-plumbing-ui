import React from "react"
import { Container } from  '@mui/material'
import {
    BrowserRouter as Router
} from "react-router-dom";

import Header from './Header'
import Footer from './Footer'

const Layout = ({ name, children }) => {
    return (
        <div className={name}>
            <Router>
                <Header />
                { children }
                <Footer />
            </Router>
        </div>
    )
}

export default  Layout