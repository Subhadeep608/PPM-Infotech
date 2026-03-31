import React from "react";
import ButtonComponent from "../../components/Button.jsx";

export default function PriceSection() {
  return (
    <section className="price-section py-5">
      <div className="container">
        {/* Title row  */}
        <div className="row">
          <span className="sub-title-left text-center">Price Table</span>
          <h2 className="main-title-left text-center">Pricing & Plans</h2>
        </div>
        {/* content row  */}
        <div className="row price-area mt-4">
          {/* Basic Plan */}
          <div className="pricing-card">
            <p className="package">
              <strong>Best for:</strong> Small business
            </p>
            <h4 className="title">Basic Plan</h4>
            <hr />

            <ul className="price-feature-list py-3">
              <li className="active">
                <i className="fa-regular fa-circle-check me-2 available"></i>5
                Page Website (Responsive)
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
                <i className="fa-regular fa-circle-check me-2 available"></i>1
                Social Media Platform Setup
              </li>

              <li className="inactive">
                <i className="fa-regular fa-circle-check me-2 available"></i>1
                Ad Campaign Setup (Google OR Meta)
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

            <ButtonComponent name={"Contact Us"} path={"/contact  "} />
          </div>

          {/* Standard Plan */}
          <div className=" pricing-card">
            <p className="package">
              <strong>Best for:</strong> Growing Business
            </p>
            <h4 className="title">Standard Plan</h4>
            <hr />

            <ul className="price-feature-list py-3">
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
                <i className="fa-regular fa-circle-check me-2 available"></i>2
                Social Media Platforms Management
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
                <i className="fa-regular fa-circle-check me-2 available"></i>2
                Months Priority Support
              </li>

              <li className="inactive">
                <i className="fa-regular fa-circle-check me-2 available"></i>
                Chat/Email Support
              </li>
            </ul>

            <ButtonComponent name={"Contact Us"} path={"/contact  "} />
          </div>

          {/* Premium Plan */}
          <div className=" pricing-card">
            <p className="package">
              <strong>Best for:</strong> Brands focused
            </p>
            <h4 className="title">Premium Plan</h4>
            <hr />

            <ul className="price-feature-list py-3">
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
                <i className="fa-regular fa-circle-check me-2 available"></i>3
                Months Priority Support
              </li>
              <li className="inactive">
                <i className="fa-regular fa-circle-check me-2 available"></i>
                Chat/Email Support
              </li>
            </ul>

            <ButtonComponent name={"Contact Us"} path={"/contact  "} />
          </div>
        </div>
      </div>
    </section>
  );
}
