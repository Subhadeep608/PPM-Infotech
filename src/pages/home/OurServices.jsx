import React from 'react';
import ServiceSlider from '../../components/ServiceSlider';

export default function OurServices() {
    return (
        <section className='our-service-sec py-5 '>
            <div className='container'>
                <div className='row title-row'>
                    <span className='sub-title-left text-center'>Our Services</span>
                    <h2 className='main-title-left text-center'>What We Offer</h2>
                    <p className='text-center'>
                        PPM Infotech provides complete digital solutions including <b>website
                        development, SEO, SMO, google/meta ads and Google Workspace, and Microsoft Office 365</b> to help businesses build a strong digital foundation. As the Best Web Development Company in Bhubaneswar,improve online visibility and attract the right audience<b> Our services are designed to support
                        businesses with reliable technology and effective marketing strategies.</b>
                    </p>
                </div>
                <div className='row mt-lg-4 mt-md-2'>
                    <ServiceSlider direction="rtr"/>
                    <ServiceSlider direction="ltr" />
                </div>
            </div>
        </section>
    )
}
