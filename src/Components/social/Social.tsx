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
    <div className="w-[90%] mx-auto mt-8">
      <div className="w-full mx-auto">
        <h3 className="w-[90%] text-lg text-center font-bold my-3 mx-auto">
          WHAT OUR CUSTOMERS ARE SAYING
        </h3>
        <div className="w-full h-[25vh] mb-1">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={3}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
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
