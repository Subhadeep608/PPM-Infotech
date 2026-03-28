import React from 'react';
import { ServiceSection } from './ServiceSection';
import SEO from '../../components/SEO';
import "../../styles/servicePage.css";
import PageHeader from '../../components/PageHeader';

export default function ServicePage() {
  return (
    <>
      {/* Meta Start */}
      <SEO
        title='Our Services – Web Development Company in Bhubaneswar | PPM Infotech'
        description='PPM Infotech offers web development, website design, SEO and digital marketing services in Bhubaneswar to build a powerful online presence for businesses.' 
        canonical='https://ppminfotech.com/service'
      />
      {/* Meta End  */}
      <PageHeader />
      <ServiceSection />
    </>
  )
}
