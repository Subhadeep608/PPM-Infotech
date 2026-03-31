import React from "react";
import ButtonComponent from "../../components/Button.jsx";
import ProjectCard from "../../components/ProjectCard.jsx";

export default function ProjectSection() {
  return (
    <section className="project-sec py-5">
      <div className="container">
        <div className="row project-title-row align-item-center">
          <div className="col-lg-6 col-md-6 col-12">
            <span className="sub-title-left">OUR RECENT PROJECT</span>
            <h2 className="main-title-left mt-3">We making your</h2>
          </div>

          <div className="col-lg-6 col-md-6 col-12 text-end">
            <ButtonComponent
              to={""}
              name={"Lets Work Togather"}
              className={"work-togather"}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4 col-md-4 col-12 m-0">
            <ProjectCard
              image="/media/images/project1.jpg"
              title="Digital Business Solution"
              description="Business Strategy"
              url="/service"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-12 m-0">
            <ProjectCard
              image="/media/images/project2.webp"
              title="Digital Business Solution"
              description="Business Strategy"
              url="/service"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-12 m-0">
            <ProjectCard
              image="/media/images/project3.jpeg"
              title="Digital Business Solution"
              description="Business Strategy"
              url="/service"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
