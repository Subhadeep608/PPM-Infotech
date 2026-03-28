import '../../styles/testimonial.css';


function Testimonial() {

    const testimonials = [
        {
            id: 1,
            name: "Madrid Software",
            role: "Managing Director",
            image: "media/images/user1.jpg",
            message:
                "I am very satisfied with the digital marketing services provided by Digi Infotech. They do better brand promotion with excellent way of lead generation approach."
        },
        {
            id: 2,
            name: "Scorp Overseas",
            role: "Manager Admissions",
            image: "media/images/user2.jpg",
            message:
                "They provide us quality inquiry leads on daily basis for our overseas admissions & training leads. most of leads are authentic & we closed most of admissions."
        },
        {
            id: 3,
            name: "Spice Mobility",
            role: "Marketing Manager",
            image: "media/images/user3.jpg",
            message:
                "Their services are trust worthy, on time delivery & the charges are effective. They have a team good experienced working professionals to resolve issues quickly."
        }
    ];

    return (
        <section className="testimonial-section py-5">
            <div className="container">

                <div className='row'>
                    <span className='sub-title-left text-center'>Feedbacks</span>
                    <h2 className='main-title-left text-center'>Customer Feedbacks</h2>
                </div>

                <div className="row mt-4">
                    {testimonials.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6 mb-4">
                            <TestimonialCard data={item} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

function TestimonialCard({ data }) {
    return (
        <div className="testimonial-card">
            <div className="testimonial-user d-flex align-items-center ">
                <div className='user-img-bx'>
                    <img src={data.image} alt={data.name} loading="lazy" />
                </div>
                
                <div className="ms-3 ">
                    <h6>{data.name}</h6>
                    <small>{data.role}</small>
                </div>
            </div>
            <p className="testimonial-message mt-4">"{data.message}"</p>
        </div>
    );
}

export { Testimonial, TestimonialCard};