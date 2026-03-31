import { useRoutes } from "react-router-dom";

import HomePage from "./pages/home/HomePage.jsx";
import ContactPage from "./pages/contactUs/ContactPage.jsx";
import ServicePage from "./pages/service/ServicePage.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";

// Service
import WebdevelopmentService from "./pages/service/WebdevelopmentService.jsx";
import WebDesignService from "./pages/service/WebDesignService.jsx";
import SeoService from "./pages/service/SeoService.jsx";
import SmoService from "./pages/service/SmoService.jsx";
import GoogleAdService from "./pages/service/GoogleAdService.jsx";
import MetaAdService from "./pages/service/MetaAdService.jsx";
import Googleworkspace from "./pages/service/Googleworkspace.jsx";
import MSOffice365 from "./pages/service/MSOffice365.jsx";

// blog pages
import BlogPage from "./pages/Blog/BlogPage.jsx";
import BlogDetauls from "./pages/Blog/BlogDetails.jsx";

// Page Not Found
import NotFound from "./pages/NotFound";
// landing page
import WebsiteDevelopment from "./pages/landingPage/WebsiteDevelopment.jsx";
import GoogleworkspaceLending from "./pages/landingPage/GoogleworkspaceLending.jsx";

//Privacy Policy & term&condition Pages
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import TermsConditionsPage from "./pages/TermsConditionsPage.jsx";
// import all others...

export function AppRoutes() {
  return useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/contact", element: <ContactPage /> },

    {
      path: "/service",
      element: <ServicePage />,
      children: [
        { index: true, element: <ServicePage /> },

        { path: "website-development", element: <WebdevelopmentService /> },
        { path: "web-design", element: <WebDesignService /> },
        { path: "seo", element: <SeoService /> },
        { path: "smo", element: <SmoService /> },
        { path: "google-ad", element: <GoogleAdService /> },
        { path: "meta-ad", element: <MetaAdService /> },
        { path: "google-workspace", element: <Googleworkspace /> },
        { path: "ms-office-365", element: <MSOffice365 /> },
      ],
    },

    // Blog
    {
      path: "/blog",
      children: [
        { index: true, element: <BlogPage /> },
        { path: ":slug", element: <BlogDetauls /> },
      ],
    },

    { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
    { path: "/terms-conditions", element: <TermsConditionsPage /> },
    { path: "*", element: <NotFound /> },
  ]);
}
