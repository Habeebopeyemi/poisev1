import React from "react";
import Video from "Components/video/Video";

const AboutUs: React.FC = () => {
  return (
    <div className="w-[90%] mx-auto mt-8" id="about">
      <div>
        <h4 className="my-3 font-bold text-lg">ABOUT US</h4>
        <p className="text-md text-descr mb-3 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
          dignissim quam arcu, a scelerisque. Ornare sagittis sed quis sed
          dignissim sed dictum suspendisse ultrices. Viverra amet, sed auctor
          turpis luctus consectetur libero et. Tempus aliquam, dapibus porta
          adipiscing diam eu, posuere. Ut montes, consequat dui feugiat ornare
          neque. Ut pharetra, aliquet quis a auctor pellentesque donec quam.
        </p>
      </div>
      <div className="mb-1">
        <Video />
      </div>
    </div>
  );
};

export default AboutUs;
