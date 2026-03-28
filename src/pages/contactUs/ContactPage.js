import ContactSection from '../home/ContactSection';
import PageHeader from '../../components/PageHeader';
import SEO from '../../components/SEO';


export default function ContactPage() {
    return (
        <>
            {/* Meta Start */}
            <SEO
                title='Contact PPM Infotech | Web Development Company in Bhubaneswar'
                description='Contact PPM Infotech in Bhubaneswar for web development, website design, SEO and digital marketing services. Get a free consultation today.' 
                canonical='https://ppminfotech.com/contact'
            />
            {/* Meta End  */}
            
            <PageHeader />
            <ContactSection />
            <div className='google-map-bx mt-5'>
                <div className='google-map'>
                    <div className='row'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7481.6244983074175!2d85.8074286426498!3d20.349373488653434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e025984c55%3A0xee1fcd1f11e55141!2sDLF%20Cyber%20City!5e0!3m2!1sen!2sin!4v1771583076778!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
