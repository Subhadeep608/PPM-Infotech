import SEO from "../../components/SEO";
import HeroLendingPage from "./HeroLendingPage";
import ButtonComponent from "../../components/Button.jsx";

import "../../styles/lendingpage.css";
import InquaryForm from "../../components/InquaryForm";

export default function WebsiteDevelopment() {
  const skillsData = [
    {
      icon: "/media/icons/wordpress.png",
      percentage: "100%",
      title: "WordPress",
    },
    { icon: "/media/icons/shopify.webp", percentage: "80%", title: "Shopify" },
    {
      icon: "/media/icons/wocommerce.png",
      percentage: "80%",
      title: "Wocommerce",
    },
    { icon: "/media/icons/php.png", percentage: "100%", title: "PHP" },
    { icon: "/media/icons/Laravel.png", percentage: "90%", title: "Laravel" },
    { icon: "/media/icons/react-icon.png", percentage: "100%", title: "React" },
    { icon: "/media/icons/nodejs.png", percentage: "100%", title: "Node" },
    // { icon: "/media/icons/mongodb-logo.png", percentage: "100%", title: "React" },
    // { icon: "/media/icons/mysql1.png", percentage: "100%", title: "React" },
  ];

  return (
    <>
      {/* Meta Start */}
      <SEO
        title="Professional Web Development Company in Bhubaneswar"
        description="Professional web development company in Bhubaneswar, PPM Infotech builds responsive, SEO-friendly and affordable websites to help businesses grow online with custom design."
        keywords="web development company in Bhubaneswar, web design company in Bhubaneswar, website development company in Bhubaneswar, website developer in Bhubaneswar, Custom website development in Bhubaneswar, business website development in Bhubaneswar"
        canonical="https://ppminfotech.com/website-development"
      />
      {/* Meta End  */}

      {/* hero section */}
      <section>
        <HeroLendingPage
          title={"Professional Web Development Company in Bhubaneswar "}
          description={`We are a leading website development company in Bhubaneswar, India, delivering modern, responsive, and SEO-friendly websites tailored to your business needs. From corporate websites to eCommerce platforms, our expert developers create high-performance solutions that help startups and enterprises grow online.`}
          imgUrl={"/media/LandingImg/hero-img.png"}
        />
      </section>

      {/* main lead content  */}
      <section className="landing-content my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-12">
              <h2 className="mb-3 heading ">
                <strong> We’re here to design your website</strong> <br />{" "}
                <small>Affordable & Professional Web Solutions</small>
              </h2>
              <p>
                We provide affordable and professional web solutions designed to
                meet the unique needs of your business. From custom web
                development, CMS solutions, and responsive designs to e-commerce
                features, SEO-friendly structure, SSL security, live chat, and
                social media integration — we build user-friendly websites that
                help your business grow and succeed online.
              </p>
            </div>
            <div className="col-lg-4 col-md-5 col-12">
              <img
                src="/media/LandingImg/web-main.jpg"
                className="img-fluid land-main-img object-fit-cover"
                alt="Business"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* web technology */}
      <section className="technology-section py-5">
        <div className="container">
          {/* Title row  */}
          <div className="row mb-4 ">
            <h2 id="aboutText-stock">Technology</h2>
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
      <section className="services-section-lend py-5 my-3">
        <div className="container">
          {/* Heading Row */}
          <div className="row mb-5 align-items-center">
            <div className="col-12 text-center">
              <h3 className="mb-3 heading aboutText-stock-title">
                <strong>Our Innovative Services for </strong> Grow Your Business
              </h3>
            </div>

            <h5 className="services-desc text-center">
              At our digital marketing agency, we provide a wide range of
              services designed to help businesses grow, improve their online
              presence, and achieve long-term success in the digital world:
            </h5>
          </div>

          {/* Cards Row */}
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service-card service-light">
                <div>
                  <h5 className="service-title mb-4">
                    <span className="highlight">Custom Web Development</span>
                  </h5>
                  <p>
                    We build custom websites tailored to your business needs
                    with modern technologies and scalable architecture.
                  </p>
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
                      <span className="highlight-white">
                        Responsive Website Designs
                      </span>
                    </h5>
                    <p>
                      Every website we build is fully responsive and adapts
                      perfectly on desktops, tablets, and mobile devices.
                    </p>
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
                      <span className="highlight-white">CMS Development</span>
                    </h5>
                    <p>
                      We develop powerful CMS-based websites that allow you to
                      easily manage and update your content without technical
                      knowledge. Platform like Wordpress.
                    </p>
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
                    <span className="highlight">E-commerce Solutions</span>
                  </h5>
                  <p>
                    E-Commerce platforms that help to build your online stor
                    development.platforms like Shopify and WooCommerce.
                  </p>
                </div>

                <img
                  src="/media/LandingImg/lending-service-4.png"
                  alt="seo"
                  className="service-img ms-3"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service-card service-light">
                <div>
                  <h5 className="service-title mb-4">
                    <span className="highlight">SSL Secure Website</span>
                  </h5>
                  <p>
                    Security is a priority. Every website we deliver includes an
                    SSL certificate to encrypt user data, build trust, and
                    ensure compliance with modern web standards.
                  </p>
                </div>

                <img
                  src="/media/LandingImg/lending-service-2.png"
                  alt="seo"
                  className="service-img ms-3"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service-card service-blue">
                <div>
                  <div>
                    <h5 className="service-title mb-4">
                      <span className="highlight-white">UI/UX designs</span>
                    </h5>
                    <p>
                      Good design encourages users to take actions like buying
                      or contacting. That helps to your branding and identity
                    </p>
                  </div>
                </div>

                <img
                  src="/media/LandingImg/lending-service-1.png"
                  alt="ppc"
                  className="service-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* service List  */}
      <section className="home-about-sec py-5">
        <div className="container">
          <div className="row justify-content-between">
            {/* left  */}
            <div className="col-lg-5 col-md-5 mb-4 col-12 mb-lg-0 landing-main2">
              <div className="home-about-img position-relative d-flex">
                {/* Main Image */}
                <img
                  src="/media/LandingImg/landing-main-2.png"
                  className="img-fluid land-main-img"
                  alt="Business"
                  loading="lazy"
                />
                {/* Small Overlay Image */}
                <div className="overlay-img">
                  <img
                    src="/media/images/side-img1.png"
                    className="img-fluid"
                    alt="Business-seo"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            {/* right  */}
            <div className="col-lg-7 col-md-7 col-12 mb-4 mb-lg-0 ps-4 home-about-right">
              <h2 className="main-title-left mt-3">
                Powerful Features
                <span className="text-span"> for Modern Websites</span>
              </h2>
              <p className="desc mt-3">
                We deliver complete website development solutions including
                e-commerce functionality, dynamic front-end and back-end
                development, responsive designs, and SEO-friendly structure. Our
                websites include SSL security, live chat integration, social
                media connectivity, and a user-friendly interface to help your
                business grow online efficiently and securely.
              </p>

              {/* Bullet Points  */}
              <div className="row mt-4">
                <div className="col-sm-6">
                  <ul className="about-list">
                    <li>
                      <i className="fa-solid fa-circle-check"></i> Dynamic Front
                      End and Back end
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>Responsive
                      Website Designs{" "}
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>SEO friendly
                      Website Design
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>Develop With
                      CMS like - Wordpress
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i> E-Commerce
                      Development Solutions
                    </li>
                  </ul>
                </div>

                <div className="col-sm-6">
                  <ul className="about-list">
                    <li>
                      <i className="fa-solid fa-circle-check"></i> Social Media
                      Connectivity{" "}
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i> Web Hosting
                      Support{" "}
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i> SSL Website
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i> Live
                      Chat{" "}
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>User Friendly
                      Website
                    </li>
                  </ul>
                </div>
              </div>

              <div className="d-flex align-items-center mt-4 flex-wrap">
                <div className="about-user-lend">
                  <div className="about-user-img-bx">
                    <img
                      alt="Business_User"
                      src="media/images/user1.jpg"
                      loading="lazy"
                    />
                    <img
                      alt="Business_User"
                      src="media/images/user2.jpg"
                      loading="lazy"
                    />
                    <img
                      alt="Business_User"
                      src="media/images/user3.jpg"
                      loading="lazy"
                    />
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
      <section className="price-section py-5">
        <div className="container">
          {/* Title row  */}
          <div className="row">
            <h2 className="main-title-left text-center">
              Pricing <span className="text-span"> & Plans</span>
            </h2>
          </div>
          {/* content row  */}
          <div className="row price-area mt-4">
            {/* Basic Plan */}
            <div className="pricing-card ">
              <div className="price-top-wrap basic p-2">
                <p className="package">
                  <strong>Best for:</strong> Small business
                </p>
                <div className="d-flex align-item-center justify-content-between">
                  <h4 className="title">Basic Plan:</h4>
                  <h3>₹10k</h3>
                </div>
              </div>

              <hr />

              <ul className="lend-price-feature-list basic py-3">
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  1-5 Page Website
                </li>
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Web Hosting Support
                </li>
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Free Theme
                </li>
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Complete Responsive
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Also CMS available
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Contact Form
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Google Map
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Speed Optimization
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  SEO Friendly
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2    "></i>
                  Social Media Integration
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2    "></i>
                  Business Email id
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2    "></i>
                  24/7 Support (Phone/Email/Chat)
                </li>
              </ul>

              <ButtonComponent
                name={"GET OFFER"}
                path={"/contact  "}
                className={"basic-palan-btn"}
              />
            </div>

            {/* Standard Plan */}
            <div className=" pricing-card">
              <div className="price-top-wrap standard p-2">
                <p className="package">
                  <strong>Best for:</strong> Growing Business
                </p>
                <div className="d-flex align-item-center justify-content-between">
                  <h4 className="title">Standard Plan: </h4>
                  <h3>₹20k</h3>
                </div>
              </div>

              <hr />

              <ul className="lend-price-feature-list standard py-3">
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  5–10 Page Website
                </li>
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Web Hosting Support
                </li>
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Free Theme
                </li>
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Complete Responsive
                </li>
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Also CMS available
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Contact Form / Newsletter Form
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Google Map
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 "></i>
                  SEO Friendly
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 "></i>
                  Social Media Integration
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Speed Optimization
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Business Email id
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  24/7 Support (Phone/Email/Chat)
                </li>
              </ul>

              <ButtonComponent
                name={"GET OFFER"}
                path={"/contact  "}
                className={"standard-palan-btn"}
              />
            </div>

            {/* Premium Plan */}
            <div className=" pricing-card">
              <div className="price-top-wrap premium p-2">
                <p className="package">
                  <strong>Best for:</strong> Brands focused
                </p>
                <div className="d-flex align-item-center justify-content-between">
                  <h4 className="title">Premium Plan:</h4>
                  <h3>₹30k</h3>
                </div>
              </div>
              <hr />

              <ul className="lend-price-feature-list premium py-3">
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 "></i>
                  More 10 Page Website
                </li>
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2  "></i>
                  Web Hosting Support
                </li>
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 "></i>
                  Free Theme
                </li>
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 "></i>
                  Complete Responsive
                </li>
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 "></i>
                  Also CMS available
                </li>

                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 "></i>
                  Contact Form / Newsletter Form
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 "></i>
                  Google Map / WhatsApp Connection
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 "></i>
                  SEO Friendly
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 "></i>
                  Social Media Integration
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 "></i>
                  Speed Optimization
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 "></i>
                  Business Email id
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 "></i>
                  24/7 Support (Phone/Email/Chat)
                </li>
              </ul>

              <ButtonComponent
                name={"GET OFFER"}
                path={"/contact  "}
                className={"premium-palan-btn"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* work flow-section  */}
      <section className="workflow-sec py-lg-5 py-sm-3">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>

      {/* inquiry Form  */}
      <InquaryForm />
    </>
  );
}
