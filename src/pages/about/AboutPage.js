import SEO from "../../components/SEO.js";
import "../../styles/aboutPage.css";
import PageHeader from '../../components/PageHeader';
import AboutSection from './AboutSection';
import HomeCounter from '../home/HomeCounter.js';
import ProjectSction from '../home/ProjectSection.js';
import { Testimonial } from './Testimonial.js';

export default function AboutPage() {
  return (
    <>
      {/* Meta Start */}
      <SEO
        title='About PPM Infotech | Web Development Company in Bhubaneswar'
        description='Learn about PPM Infotech, a professional web development company in Bhubaneswar delivering responsive websites, digital solutions and innovative IT services.'
        canonical='https://ppminfotech.com/about'
      />
      {/* Meta End  */}

      <PageHeader />
      <AboutSection />
      <HomeCounter />
      <ProjectSction />
      <Testimonial />
    </>
  )
}
