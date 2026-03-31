import React from "react";
import { Link } from "react-router-dom";
import { pathBuilder } from "../../utility/converters";

function ServiceSection() {
  const servicesdata = [
    {
      title: "Website Development",
      icon: "fa-regular fa-file-code",
      slug: "website-development",
      image: "media/images/Web-development.jpeg",
      description:
        "We design and develop responsive, SEO-friendly websites that grow your business online.",
    },
    {
      title: "Web Design",
      slug: "web-design",
      icon: "fa-solid fa-laptop-code",
      image: "media/images/WEBdesign1.jpeg",
      description:
        "We design and develop responsive, SEO-friendly websites that grow your business online.",
    },
    {
      title: "SEO",
      slug: "seo",
      icon: "fa-solid fa-ranking-star",
      image: "media/images/SEO.jpeg",
      description:
        "Improve rankings, increase organic traffic, and attract targeted customers to your website",
    },
    {
      title: "SMO",
      slug: "smo",
      icon: "fa-solid fa-heart-circle-plus",
      image: "media/images/SMO.jpeg",
      description:
        "Enhance brand awareness and engagement through strategic social media marketing campaigns.",
    },
    {
      title: "Google Ads",
      slug: "google-ad",
      icon: "fa-brands fa-google-plus-g",
      image: "media/images/ad.jpeg",
      description:
        "Drive instant traffic, generate qualified leads, and maximize ROI with targeted campaigns.",
    },
    {
      title: "Meta Ads",
      slug: "meta-ad",
      icon: "fa-brands fa-meta",
      image: "media/images/ads.jpeg",
      description:
        "Get a high-performance website designed to attract customers and generate quality leads across Australia. Free consultation available.",
    },
    {
      title: "Google workspace",
      slug: "google-workspace",
      icon: "fa-brands fa-google",
      image: "/media/images/Google-Workspace.jpg ",
      description:
        "Professional business email and collaboration setup with Gmail, Drive, Meet, and secure cloud tools to enhance team productivity.",
    },
    {
      title: "MS Office 365",
      slug: "ms-office-365",
      icon: "fa-brands fa-microsoft",
      image: "/media/images/MSOffice-card.webp",
      description:
        "Complete Microsoft 365 configuration including Outlook, Teams, and OneDrive with secure migration and enterprise-level support.",
    },
  ];

  return (
    <div className="service-section my-5">
      <div className="container">
        <div className="row">
          <span className="sub-title-left text-center">Our Services</span>
          <h2 className="main-title-left text-center">
            Services We're offering
          </h2>
        </div>
        <div className="row mt-5">
          <div className="service-wrapper">
            {servicesdata.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ image, icon, title, description, slug }) {
  return (
    <div className="services-card ">
      <div className="thumb">
        <img src={image} alt={title} />
        <div className="title">
          <Link to={pathBuilder("service", slug)}>
            <i className={icon}></i>
            <h4>{title}</h4>
          </Link>
        </div>
      </div>
      <div className="info">
        <p>{description}</p>
        <div className="button">
          <Link to={pathBuilder("service", slug)}> Read More </Link>
          <div className="devider"></div>
        </div>
      </div>
    </div>
  );
}

export { ServiceCard, ServiceSection };
