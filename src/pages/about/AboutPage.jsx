import SEO from "../../components/SEO.jsx";
import "../../styles/aboutPage.css";
import PageHeader from "../../components/PageHeader.jsx";
import AboutSection from "./AboutSection.jsx";
import HomeCounter from "../home/HomeCounter.jsx";
import ProjectSction from "../home/ProjectSection.jsx";
import { Testimonial } from "./Testimonial.jsx";

export default function AboutPage() {
  console.log("About SSR render");
  return (
    <>
      {/* Meta Start */}
      <SEO
        title="About PPM Infotech | Web Development Company in Bhubaneswar"
        description="Learn about PPM Infotech, a professional web development company in Bhubaneswar delivering responsive websites, digital solutions and innovative IT services."
        canonical="https://ppminfotech.com/about"
      />
      {/* Meta End  */}

      <PageHeader />
      <AboutSection />
      <HomeCounter />
      <ProjectSction />
      <Testimonial />
    </>
  );
}
