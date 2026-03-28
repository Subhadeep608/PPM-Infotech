import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // for navbar toggle
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';


import ScrollToTop from './components/ScrollToTop.js';
import Header from './components/Header1.js';
import Footer from './components/Footer1.js';
import HomePage from './pages/home/HomePage.js';
import ContactPage from './pages/contactUs/ContactPage.js';
import ServicePage from './pages/service/ServicePage.js';
import AboutPage from './pages/about/AboutPage.js';

// Service 
import WebdevelopmentService from './pages/service/WebdevelopmentService.js';
import WebDesignService from './pages/service/WebDesignService.js';
import SeoService from './pages/service/SeoService.js';
import SmoService from './pages/service/SmoService.js';
import GoogleAdService from './pages/service/GoogleAdService.js';
import MetaAdService from './pages/service/MetaAdService.js';
import Googleworkspace from './pages/service/Googleworkspace.js';
import MSOffice365 from './pages/service/MSOffice365.js';

// blog pages 
import BlogPage from './pages/Blog/BlogPage.js';
import BlogDetauls from './pages/Blog/BlogDetails.js';

// Page Not Found 
import NotFound from "./pages/NotFound";
// landing page 
import WebsiteDevelopment from './pages/landingPage/WebsiteDevelopment.js';
import GoogleworkspaceLending from './pages/landingPage/GoogleworkspaceLending.js';

//Privacy Policy & term&condition Pages
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.js';
import TermsConditionsPage from './pages/TermsConditionsPage.js';







// Fix ResizeObserver error (add this ABOVE createRoot)
const resizeObserverErr = window.ResizeObserver;
window.ResizeObserver = class extends resizeObserverErr {
  constructor(callback) {
    super((entries, observer) => {
      requestAnimationFrame(() => {
        callback(entries, observer);
      });
    });
  }
};


// ResizeObserver loop completed with undelivered notifications
const originalError = console.error;

console.error = (...args) => {
  if (
    args[0]?.includes?.("ResizeObserver loop completed with undelivered notifications")
  ) {
    return;
  }
  originalError(...args);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/service' element={<ServicePage />} />

        <Route path="/service/website-development" element={<WebdevelopmentService />} />
        <Route path="/service/web-design" element={<WebDesignService />} />
        <Route path="/service/seo" element={<SeoService />} />
        <Route path="/service/smo" element={<SmoService />} />
        <Route path="/service/google-ad" element={<GoogleAdService />} />
        <Route path="/service/meta-ad" element={<MetaAdService />} />
        <Route path="/service/google-workspace" element={<Googleworkspace />} />
        <Route path="/service/ms-office-365" element={<MSOffice365 />} />

        <Route path='/about' element={<AboutPage />} />
        
        <Route path='/blog' element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetauls />} />

        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path='/google-workspace' element={<GoogleworkspaceLending />} />

        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='/term-condition' element={<TermsConditionsPage />} />



        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </HelmetProvider>
);
