import SEO from '../../components/SEO';
import HeroLendingPage from './HeroLendingPage';
import ButtonComponent from "../../components/button";

import '../../styles/lendingpage.css';
import InquaryForm from '../../components/InquaryForm';

export default function GoogleworkspaceLending() {
  const skillsData = [
    { icon: "/media/icons/gmail.png", percentage: "100%", title: "Gmail" },
    { icon: "/media/icons/google-drive.png", percentage: "100%", title: "Google Drive" },
    { icon: "/media/icons/google-calendar.png", percentage: "100%", title: "Calender" },
    { icon: "/media/icons/meet.png", percentage: "100%", title: "Google Meet" },
    { icon: "/media/icons/googleSec.svg", percentage: "90%", title: "Security" },
    { icon: "/media/icons/googleDoc.svg", percentage: "100%", title: "Docs" }
    // { icon: "/media/icons/mongodb-logo.png", percentage: "100%", title: "React" },
    // { icon: "/media/icons/mysql1.png", percentage: "100%", title: "React" },
  ];
  return (
    <>

      {/* Meta Start */}
      <SEO
        title='Google Workspace Services in Bhubaneswar | PPM Infotech '
        description='Get Google Workspace setup with PPM Infotech in Bhubaneswar. Professional business email, cloud storage, collaboration tools and secure workspace solutions.' 
        canonical='https://ppminfotech.com/google-workspace'
      />
      {/* Meta End  */}

      <HeroLendingPage
        title={'Power Your Business with Google Workspace'}
        description={`Get professional business email, cloud storage, and powerful collaboration tools with Google Workspace. Work smarter, stay secure, and grow your business with seamless communication and productivity solutions.`}
        imgUrl={'/media/LandingImg/Google-workspace.png'}
      />

      {/* web technology */}
      <section className="technology-section py-5">
        <div className="container">
          {/* Title row  */}
          <div className='row mb-4 '>
            <h1 id="aboutText-stock">Technology</h1>
            <h3 className="mb-3 heading aboutText-stock-title">
              <strong>Tools & Technologies</strong> We Work With
            </h3>
          </div>

          {/* technology tool  */}
          <div className="skills-section1 ">
            <div className="container-fluid skills-container">
              <div className="row justify-content-center g-4">
                {skillsData.map((skill, index) => (
                  <div key={index} className="skils-wrap">
                    <div className="skill-container text-center">
                      <div className="abut-skils">
                        <img
                          src={skill.icon}
                          alt={skill.title}
                          className="skill-icon"
                          loading="lazy"
                        />
                        <h5 className="mt-3 fw-bold">{skill.percentage}</h5>
                        <p className="mb-0 fw-bold">{skill.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service card  */}
      <section className="services-section-lend py-5">
        <div className="container">

          {/* Heading Row */}
          <div className="row mb-4 align-items-center">
            <div className="col-12 text-center">
              <span className='sub-title-left text-center'>Our Services</span>
              <h2 className='main-title-left text-center'>What We Do</h2>
            </div>

            <p className="services-desc text-center">
              At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </p>

          </div>

          {/* Cards Row */}
          <div className="row g-4">

            {/* Card 1 */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service-card service-light">
                <div>
                  <h5 className="service-title mb-4">
                    <span className="highlight">Fully Responsive</span>
                  </h5>
                  <p>All websites are fully responsive with completely SEO friendly & User friendly customized websites.</p>
                </div>

                <img
                  src="/media/LandingImg/lending-service-1.png"
                  alt="seo"
                  className="service-img ms-3"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service-card service-blue">
                <div>
                  <div>
                    <h5 className="service-title mb-4">
                      <span className="highlight-white">Device Testing</span>
                    </h5>
                    <p>Performance testing & mobile responsiveness check.</p>
                  </div>
                </div>

                <img
                  src="/media/LandingImg/lending-service-2.png"
                  alt="ppc"
                  className="service-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service-card service-blue">
                <div>
                  <div>
                    <h5 className="service-title mb-4">
                      <span className="highlight-white">UI/UX Design</span>
                    </h5>
                    <p>We design a clean, conversion-focused layout.</p>
                  </div>
                </div>

                <img
                  src="/media/LandingImg/lending-service-3.png"
                  alt="ppc"
                  className="service-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service-card service-light">
                <div>
                  <h5 className="service-title mb-4">
                    <span className="highlight">Development / Development</span>
                  </h5>
                  <p>We build fast, SEO-friendly & secure website also We build fast, SEO-friendly & secure website.</p>
                </div>

                <img
                  src="/media/LandingImg/lending-service-4.png"
                  alt="seo"
                  className="service-img ms-3"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* service List  */}
      <section className='home-about-sec py-5'>
        <div className='container'>
          <div className='row justify-content-between'>
            {/* left  */}
            <div className='col-lg-5 col-md-5 mb-4 col-12 mb-lg-0 landing-main2'>
              <div className='home-about-img position-relative d-flex'>
                {/* Main Image */}
                <img src="/media/LandingImg/landing-main-2.png" className="img-fluid land-main-img" alt="Business"></img>
                {/* Small Overlay Image */}
                <div className="overlay-img">
                  <img src="/media/images/side-img1.png" className="img-fluid" alt="Business-seo"></img>
                </div>

              </div>
            </div>

            {/* right  */}
            <div className='col-lg-7 col-md-7 col-12 mb-4 mb-lg-0 home-about-right'>
              <h2 className="main-title-left mt-3">
                Engaging Business with <br /> all
                <span className='text-span'> APIs & Payment Integrations</span>
              </h2>
              <p className="desc mt-3">
                We integrate all APIs like SMS, Email or WhatsApp in your websites or applications for easy communications related to transactions & replies
              </p>

              {/* Bullet Points  */}
              <div className="row mt-4">
                <div className="col-sm-6">
                  <ul className="about-list">
                    <li><i className="fa-solid fa-circle-check"></i> E-Commerce Development Solutions
                    </li>
                    <li><i className="fa-solid fa-circle-check"></i> Website Security & Maintenance
                    </li>
                    <li><i className="fa-solid fa-circle-check"></i>API Integration & Third-Party Tools</li>
                    <li><i className="fa-solid fa-circle-check"></i>Speed & Performance Optimization
                    </li>
                  </ul>

                </div>

                <div className="col-sm-6">
                  <ul className="about-list">
                    <li><i className="fa-solid fa-circle-check"></i> Focus on User Experience (UX/UI)</li>
                    <li><i className="fa-solid fa-circle-check"></i> Optimize for SEO & Performance </li>
                    <li><i className="fa-solid fa-circle-check"></i> Frontend Development</li>
                    <li><i className="fa-solid fa-circle-check"></i>Backend Development</li>
                  </ul>
                </div>
              </div>

              <div className="d-flex align-items-center mt-4 flex-wrap">
                <div className="about-user-lend">
                  <div className="about-user-img-bx">
                    <img alt="Business_User" src="media/images/user1.jpg" />
                    <img alt="Business_User" src="media/images/user2.jpg" />
                    <img alt="Business_User" src="media/images/user3.jpg" />
                  </div>
                  <div className="about-user-reviews mx-3">
                    <h5 className="title m-0">1500+</h5>
                    <span>Active Reviews</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Price Col  */}
      <section className='price-section py-5'>
        <div className='container'>
          {/* Title row  */}
          <div className='row'>
            <span className='sub-title-left text-center'>Price Table</span>
            <h2 className='main-title-left text-center'>Pricing & Plans</h2>
          </div>

          {/* content row  */}
          <div className='row price-area mt-4'>
            {/* Basic Plan */}
            <div className="pricing-card ">
              <div className="price-top-wrap basic p-2">
                <p className="package"><strong>Best for:</strong> Small business</p>
                <div className="d-flex align-item-center justify-content-between">
                  <h4 className="title">Basic  Plan:</h4>
                  <h3>₹10k</h3>
                </div>
              </div>

              <span className="pricing-beg basic-bg">
                Call for Custom Pricing
              </span>

              <hr />

              <ul className="lend-price-feature-list basic py-3">
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  5 Page Website (Responsive)
                </li>

                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Basic SEO Setup (Meta Tags + Sitemap)
                </li>

                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Google Analytics Setup
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  1 Social Media Platform Setup
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  1 Ad Campaign Setup (Google OR Meta)
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Email Support
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Landing Page Optimization
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Monthly Performance Report
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2    "></i>
                  Speed Optimization
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2    "></i>
                  Chat Support
                </li>
              </ul>

              <ButtonComponent name={"Contact Us"} path={"/contact  "} className={'basic-palan-btn'} />
            </div>

            {/* Standard Plan */}
            <div className=" pricing-card">
              <div className="price-top-wrap standard p-2">
                <p className="package"><strong>Best for:</strong> Growing Business</p>
                <div className="d-flex align-item-center justify-content-between">
                  <h4 className="title">Standard Plan: </h4>
                  <h3>₹20k</h3>
                </div>
              </div>
              <span className="pricing-beg standard-bg">
                Call for Custom Pricing
              </span>

              <hr />

              <ul className="lend-price-feature-list standard py-3">
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  8–10 Page Website
                </li>

                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  On-Page SEO Optimization
                </li>

                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Keyword Research (10–15 Keywords)
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  2 Social Media Platforms Management
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Google Ads + Meta Ads Campaign Setup
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 "></i>
                  Landing Page Optimization
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 "></i>
                  Monthly Performance Report
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Speed Optimization
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  2 Months Priority Support
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Chat/Email Support
                </li>
              </ul>

              <ButtonComponent name={"Contact Us"} path={"/contact  "} className={'standard-palan-btn'} />
            </div>

            {/* Premium Plan */}
            <div className=" pricing-card">
              <div className="price-top-wrap premium p-2">
                <p className="package"><strong>Best for:</strong> Brands focused</p>
                <div className="d-flex align-item-center justify-content-between">
                  <h4 className="title">Premium Plan:</h4>
                  <h3>₹30k</h3>
                </div>
              </div>
              <span className="pricing-beg premium-bg">
                Call for Custom Pricing
              </span>
              <hr />

              <ul className="lend-price-feature-list premium py-3">
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Custom Dynamic Website
                </li>

                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Advanced SEO (On-page + Technical)
                </li>

                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  25+ Keyword Targeting
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Full Social Media Management
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Google Ads + Meta Ads Management
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Landing Page Optimization
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Monthly Performance Report
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Speed Optimization
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  3 Months Priority Support
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Chat/Email Support
                </li>

              </ul>

              <ButtonComponent name={"Contact Us"} path={"/contact  "} className={'premium-palan-btn'} />
            </div>
          </div>
        </div>
      </section>

      <InquaryForm />
    </>
  )
}
