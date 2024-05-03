import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Category from "../category/Category";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper__content swiper__content-1 container">
            <h1>Everyday Fresh & Clean with Our Products</h1>
            <p>Save up to 50% off on your first order</p>

            <form>
              <input
                type="text"
                id="text"
                name="text"
                placeholder="Your emaill address"
              />
              <button>Subscribe</button>
            </form>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__content swiper__content-2 container">
            <h1>Everyday Fresh & Clean with Our Products</h1>
            <p>Save up to 50% off on your first order</p>
            <form>
              <input
                type="text"
                id="text"
                name="text"
                placeholder="Your emaill address"
              />
              <button>Subscribe</button>
            </form>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__content swiper__content-3 container">
            <h1>Everyday Fresh & Clean with Our Products</h1>
            <p>Save up to 50% off on your first order</p>
            <form>
              <input
                type="text"
                id="text"
                name="text"
                placeholder="Your emaill address"
              />
              <button>Subscribe</button>
            </form>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
