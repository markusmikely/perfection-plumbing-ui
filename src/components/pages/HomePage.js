import HeroSection from "./homepage/HeroSection";
import WhyUsRow from "./homepage/WhyUsRowSection";
import TestimonialsRow from "./homepage/TestimonailsRowSection";
import ServicesRow from "./homepage/ServicesRow";
import BoilerRow from "./homepage/BoilerRow";
import BathroomRow from "./homepage/BathroomRow";
import SocialRow from "./homepage/SocialRow";
import DirectoriesRow from "./homepage/DirectoriesRow";

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <WhyUsRow />
            <BoilerRow />
            <ServicesRow />
            <BathroomRow />
            <TestimonialsRow limit={5} />
            <DirectoriesRow />
            <SocialRow />
        </div>
    )
}

export default HomePage