import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import type { IImage } from "interface/interface";
import "swiper/css";
import "swiper/css/pagination";
import "App.css";
import { images_arr } from "data";

const Slider: React.FC = () => {
  return (
    <>
      <div className="w-full h-[70vh]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {images_arr.map((pic: IImage) => {
            return (
              <SwiperSlide key={pic.id}>
                <div className="swiper-img-wrapper">

                <img src={pic.src} alt={pic.alt} loading="lazy" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
