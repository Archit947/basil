
import Hero from '../components/Hero';
import Services from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Occasions from '../components/Occasions';
import MenuHighlights from '../components/MenuHighlights';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <main>
            <Hero />
            <Services />
            <WhyChooseUs />
            <Occasions />
            <MenuHighlights />
            <HowItWorks />
            <Testimonials />
        </main>
    );
};

export default Home;
