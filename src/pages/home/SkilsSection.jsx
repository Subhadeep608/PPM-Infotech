import React from 'react'

export default function SkilsSection() {

    const skillsData = [
        { icon: "/media/icons/wordpress.png", percentage: "100%", title: "WordPress" },
        { icon: "/media/icons/shopify.webp", percentage: "80%", title: "Shopify" },
        { icon: "/media/icons/wocommerce.png", percentage: "80%", title: "Wocommerce" },
        { icon: "/media/icons/php.png", percentage: "100%", title: "PHP" },
        { icon: "/media/icons/Laravel.png", percentage: "90%", title: "Laravel" },
        { icon: "/media/icons/react-icon.png", percentage: "100%", title: "React" },
        { icon: "/media/icons/google-logo.png", percentage: "99%", title: "Google Ads" },
        { icon: "/media/icons/meta-logo.png", percentage: "100%", title: "Meta Ads" },
    ];

    return (
        <section className="skills-section">
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
        </section>
    )
}
