import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ServiceCard from "./ServiceCard";
import { pathBuilder } from "../utility/converters";

export default function ServiceSlider({ direction = "ltr" }) {
  return (
    <div className="service-slider-wraper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        speed={1000}
        // 🔥 Control Direction
        dir={direction}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          reverseDirection: direction === "ltr" ? true : false,
        }}
        // onSwiper={(swiper) => {
        //   // Delay fix for React refs
        //   setTimeout(() => {
        //     swiper.params.navigation.prevEl = prevRef.current;
        //     swiper.params.navigation.nextEl = nextRef.current;
        //     swiper.navigation.destroy();
        //     swiper.navigation.init();
        //     swiper.navigation.update();
        //   });
        // }}

        breakpoints={{
          525: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 3 },
        }}
      >
        {/* slid-1  */}
        <SwiperSlide>
          <ServiceCard
            image="media/images/Web-development.jpeg"
            icon="media/icons/web-icon.svg"
            title=" Web Development"
            description="Custom website development with secure, scalable technologies for fast, high-performance business websites."
            url={pathBuilder("service", "website-development")}
          />
        </SwiperSlide>

        {/* slid-2  */}
        <SwiperSlide>
          <ServiceCard
            image="media/images/WEBdesign1.jpeg"
            icon="media/icons/web-icon2.svg"
            title="Web Design"
            description="Creative, responsive website designs focused on user experience, modern layouts, and mobile compatibility."
            url={pathBuilder("service", "web-design")}
          />
        </SwiperSlide>

        {/* slid-3  */}
        <SwiperSlide>
          <ServiceCard
            image="media/images/SEO.jpeg"
            icon="media/icons/seo-icon.svg"
            title="SEO"
            description="Improve your website visibility on search engines with strategic SEO techniques that increase organic traffic,  ankings, and qualified leads."
            url={pathBuilder("service", "seo")}
          />
        </SwiperSlide>

        {/* slid-4  */}
        <SwiperSlide>
          <ServiceCard
            image="media/images/SMO.jpeg"
            icon="/media/icons/service-icon2.svg"
            title="SMO"
            description="Enhance your brand presence on social media platforms with engaging content, profile optimization, and strategies that improve audience engagement."
            url={pathBuilder("service", "smo")}
          />
        </SwiperSlide>

        {/* slid-5  */}
        <SwiperSlide>
          <ServiceCard
            image="media/images/ad.jpeg"
            icon="media/icons/google-icon.svg"
            title="Google Ad"
            description="Targeted Google Ads campaigns to increase website traffic, generate quality leads, and boost conversions. "
            url={pathBuilder("service", "google-ad")}
          />
        </SwiperSlide>

        {/* slid-6  */}
        <SwiperSlide>
          <ServiceCard
            image="media/images/ads.jpeg"
            icon="/media/icons/meta-icon.svg"
            title="Meta-Ad"
            description="Strategic Facebook and Instagram advertising campaigns to grow brand awareness, engagement, and sales. "
            url={pathBuilder("service", "meta-ad")}
          />
        </SwiperSlide>

        {/* slid-7  */}
        <SwiperSlide>
          <ServiceCard
            image="media/images/Google-Workspace.jpg"
            icon="/media/icons/gooleworkspace-icon.svg"
            title="Google workspace"
            description=" Professional Google Workspace setup including Gmail, Drive, Meet, and secure cloud tools to improve team collaboration and business productivity. "
            url={pathBuilder("service", "google-workspace")}
          />
        </SwiperSlide>

        {/* slid-8  */}
        <SwiperSlide>
          <ServiceCard
            image="media/images/MSOffice-card.webp"
            icon="/media/icons/microsoft-icon.svg"
            title="MS Office 365"
            description="Secure Microsoft 365 setup with email, cloud storage, and tools for better business productivity. "
            url={pathBuilder("service", "ms-office-365")}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
