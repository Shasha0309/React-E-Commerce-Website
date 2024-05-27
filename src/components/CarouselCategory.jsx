import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate, createSearchParams } from "react-router-dom";
import React from 'react'

import "swiper/css";
import "swiper/css/navigation";

function CarouselCategory() {
  const navigate = useNavigate();
  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: ``,
      })}`,
    });
  };
  return (
    <div className="bg-white m-3">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide  onClick={() => searchCategory("Deals")} className="cursor-pointer">
          <img src={"../images/category_0.jpg"} alt="1img"/>
        </SwiperSlide>
        <SwiperSlide  onClick={() => searchCategory("Amazon")} className="cursor-pointer">
          <img src={"../images/category_1.jpg"} alt="2img" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Fashion")} className="cursor-pointer">
          <img src={"../images/category_2.jpg"} alt="3img" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Computers")} className="cursor-pointer">
          <img src={"../images/category_3.jpg"} alt="4img"/>
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Home")} className="cursor-pointer">
          <img src={"../images/category_4.jpg"}alt="5img" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Mobiles")} className="cursor-pointer">
          <img src={"../images/category_5.jpg"} alt="6img"/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CarouselCategory