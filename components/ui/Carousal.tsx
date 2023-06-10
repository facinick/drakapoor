import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Autoplay, Navigation, Pagination } from "swiper";

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
          clickable: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper w-full h-full"
      >
        {slides.map((slide, index) => <SwiperSlide key={index}>{slide}</SwiperSlide>)}
      </Swiper>
    </>
  );
}
