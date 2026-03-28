import React from 'react'
import '../styles/faq.css'
export default function Faq() {
    const faqData = [
        {
            id: 1,
            question: "What services does PPM Infotech provide?",
            answer:
                "We provide web development, website design, mobile app development, e-commerce development, and digital marketing services to help businesses grow online."
        },
        {
            id: 2,
            question: "How long does it take to build a website?",
            answer:
                "The development time depends on the project complexity, but most business websites are completed within 1–2 weeks."
        },
        {
            id: 3,
            question: "Can you create a custom website for my business?",
            answer:
                "Yes, we design and develop custom websites based on your business needs."
        },
        {
            id: 4,
            question: "Will my website be mobile-friendly and SEO-ready?",
            answer:
                "Yes, all our websites are mobile-friendly, fast, secure, and SEO optimized."
        },
        {
            id: 5,
            question: "Do you help businesses run Google Ads campaigns?",
            answer:
                "Yes, we create and manage Google Ads campaigns to generate quality leads."
        },
        {
            id: 6,
            question: "Can you manage Facebook and Instagram ads for my business?",
            answer:
                "Yes, we manage Meta Ads to reach targeted audiences and increase conversions."
        },
        {
            id: 7,
            question: "How can SEO help my business get more customers online? ",
            answer:
                "SEO improves search rankings, increases website traffic, and brings more potential customers."
        },
        {
            id: 8,
            question: "Do you provide social media optimization for business pages? ",
            answer:
                "Yes, we optimize social media profiles to improve visibility, engagement, and brand presence."
        },
        {
            id: 9,
            question: "Can you set up Microsoft Office 365 for my company? ",
            answer:
                "Yes, we help businesses set up and manage Microsoft Office 365 services."
        },
        {
            id: 10,
            question: "Do you set up Google Workspace for businesses? ",
            answer:
                "Yes, we set up Google Workspace for professional business email and team collaboration."
        }
    ];

    const leftFaq = faqData.slice(0, 5);
    const rightFaq = faqData.slice(5, 10);

    return (

        <section className='faq-section py-5'>
            <div className='container'>
                <div className='row'>
                    <span className='sub-title-left text-center'>How Can Help You</span>
                    <h2 className='main-title-left text-center'>Frequently Asked Questions</h2>
                </div>
                <div className='row mt-4 faq-wrap'>
                    {/* left  */}
                    <div className='col-md-6'>
                        <div className="accordion" id="faqLeft">
                            {leftFaq.map((faq, index) => (
                                <div className="accordion-item" key={faq.id}>
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#faqLeft${faq.id}`}
                                        >
                                            {faq.question}
                                        </button>
                                    </h2>

                                    <div
                                        id={`faqLeft${faq.id}`}
                                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                        data-bs-parent="#faqLeft"
                                    >
                                        <div className="accordion-body">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right FAQ */}
                    <div className='col-md-6'>
                        <div className="accordion" id="faqRight">
                            {rightFaq.map((faq, index) => (
                                <div className="accordion-item" key={faq.id}>
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#faqRight${faq.id}`}
                                        >
                                            {faq.question}
                                        </button>
                                    </h2>

                                    <div
                                        id={`faqRight${faq.id}`}
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqRight"
                                    >
                                        <div className="accordion-body">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
