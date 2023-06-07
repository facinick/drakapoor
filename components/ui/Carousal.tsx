import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper";

interface CarousalProps {
  slides: Array<React.ReactNode>
}

export default function Carousal({slides}: CarousalProps) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper w-full h-full"
      >
        {slides.map(slide => <SwiperSlide>{slide}</SwiperSlide>)}
      </Swiper>
    </>
  );
}
