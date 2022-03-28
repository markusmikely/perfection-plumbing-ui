import React, { useEffect } from 'react'
import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";

import ContactPage from "./ContactPage"
import HomePage from "./HomePage"
import QuotePage from "./QuotePage"
import ServicesPage from "./ServicesPage"
import TestimonialsPage from "./TestimonialsPage"
import NotFoundPage from "./NotFoundPage";
import TermsPage from "./TermsPage";
import PrivacyPage from "./PrivacyPage";
import AboutPage from "./AboutPage";

const Pages = () => {

    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
    }, [pathname, hash, key]); // do this on route change

    return (
        <div className="page">
            <Routes basename={'/'}>
                <Route path='/about' element={<AboutPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/quote' element={<QuotePage />} />
                <Route path='/services' element={<ServicesPage />} />
                <Route path='/testimonials' element={<TestimonialsPage />} />
                <Route path='/booking' element={<QuotePage />} />
                <Route path='/terms' element={<TermsPage />} />
                <Route path='/privacy' element={<PrivacyPage />} />
                <Route path='/' element={<HomePage />} />
                <Route path='**' element={<NotFoundPage />} />
            </Routes>
        </div>
    )
}

export default Pages