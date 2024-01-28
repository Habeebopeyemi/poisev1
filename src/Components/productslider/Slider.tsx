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
      <div className="w-full h-[40vh] xsmx:h-[30vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] xl:h-[85vh]">
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
