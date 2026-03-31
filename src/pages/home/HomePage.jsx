import "../../styles/home.css";
import SEO from "../../components/SEO.jsx";
import Hero1 from "./Hero1.jsx";
import BusinessSolution from "./BusinessSolution.jsx";
import HomeCounter from "./HomeCounter.jsx";
import OurServices from "./OurServices.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
// import {Testimonial} from '../about/Testimonial.jsx';

// import ProjectSection from './ProjectSection.jsx';
import ContactSection from "./ContactSection.jsx";
import BlogSection from "./BlogSection.jsx";
import SkilsSection from "./SkilsSection.jsx";
import LetsWorkTogather from "./LetsWorkTogather.jsx";
import PriceSection from "./PriceSection.jsx";
import Faq from "../../components/Faq.jsx";

export default function HomePage() {
  return (
    <>
      {/* Meta Start */}
      <SEO
        title={"Best Website Development Company in Bhubaneswar | PPM Infotech"}
        description={
          "PPM Infotech is the Best Web Development Company in Bhubaneswar offering website design, development and digital marketing services for businesses online."
        }
        keywords={
          "Website Design company in Bhubaneswar, Digital Marketing Company in Bhubaneswar, SEO Services in Bhubaneswar, Custom Website Development in  Bhubaneswar, Software Development Company in Bhubaneswar, e-commerce Website Development in Bhubaneswar, Business Intelligence Services in Bhubaneswar"
        }
        canonical={"https://ppminfotech.com/"}
      />
      {/* Meta End  */}

      <Hero1 />
      <BusinessSolution />
      <LetsWorkTogather />
      <OurServices />
      <SkilsSection />
      <WhyChooseUs />
      <HomeCounter />
      {/* <ProjectSection/> */}
      <PriceSection />
      <ContactSection />
      <BlogSection />
      {/* <Testimonial/> */}
      <Faq />
    </>
  );
}
