import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import bnr1 from "../../../assets/images/chess_banner.jpg";

import bnr3 from "../../../assets/images/chess_banner3.jpg";
import bnr4 from "../../../assets/images/chess_banner4.jpg";

export default function Banner() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
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
        <img className="d-block w-100"
          src={bnr1}
          alt="Banner 1"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={bnr3}
          alt="Banner 3"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={bnr4}
          alt="Banner 4"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
    </Swiper>
  );
}
