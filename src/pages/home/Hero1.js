import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import ButtonComponent from '../../components/button.js';

export default function Hero1() {
  return (
    <div className="banner-sec">
      <div className="banner-area position-relative">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          speed={500}   // 0.5s smooth slide
          slidesPerView={1}
          className="hero-slider"
        >

          {/* Slide 1 */}
          <SwiperSlide>
            <div className="hero-slide slide1">
              <div className=" container hero-content">
                <div className="row">
                  <div className="col-12 slide-wraper">
                    <span className="subtitle-banner">AI-Powered Web Development & Digital Solutions</span>
                    <h2 className="banner-title">Web Solutions</h2>
                    <p className="disc">
                      PPM Infotech is the Best Web Development Company in Bhubaneswar, India offering website development, creative web design, and digital marketing services and Solution for your businesses.
                    </p>

                    <div className="slider-button-group">
                      <ButtonComponent name={"Get A Free Consultation "} path={"/contact"} className={"banner-btn"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="hero-slide slide2">
              <div className=" container hero-content">
                <div className="row">
                  <div className="col-12 slide-wraper">
                    <span className="subtitle-banner">Generate High-Quality Business Leads</span>
                    <h2 className="banner-title">Brand Growth</h2>
                    <p className="disc">PPM Infotech is a trusted Digital Marketing Company in Bhubaneswar helping businesses increase brand visibility, generate quality leads, and grow online.
                    </p>

                    <div className="slider-button-group">
                      <ButtonComponent name={"Get A Free Consultation "} path={"/contact"} className={"banner-btn"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
}
