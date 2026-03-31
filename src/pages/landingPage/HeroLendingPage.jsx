import React from "react";
import ButtonComponent from "../../components/Button.jsx";
export default function HeroLendingPage({ title, description, imgUrl }) {
  return (
    <section className="wd-hero-section">
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="wd-hero-content col-lg-6 col-md-6 col-sm-12">
            <h1 className="wd-hero-title">{title}</h1>

            <div className="wd-hero-underline"></div>

            <p className="wd-hero-description mb-4">{description}</p>

            <div className="wd-hero-buttons">
              <ButtonComponent
                path={"/contact"}
                className={"wd-primary-btn"}
                name={"Get Free Consultation"}
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="wd-hero-image-wrapper col-lg-6 col-md-6 col-sm-12">
            <img
              src={imgUrl}
              alt={title}
              className="wd-hero-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
