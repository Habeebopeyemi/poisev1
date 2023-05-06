import React from "react";
import Feedback from "./Feedback";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "App.css";
import { feedback } from "data";

const Social: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-full mx-auto">
        <h3 className="text-xl font-bold my-3 mx-auto">
          What our customers have to say...
        </h3>
        <div className="w-full h-[20vh] my-3">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={3}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            // className="mySwiper"
          >
            {feedback.map((feed) => {
              return (
                <SwiperSlide key={feed.id}>
                  <Feedback
                    handle={feed.handle}
                    comment={feed.comment}
                    src={feed.src}
                  >
                    <div>
                      <img src={feed.platform} alt="" loading="lazy" />
                    </div>
                  </Feedback>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Social;
