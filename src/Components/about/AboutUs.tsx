import React from "react";
import Video from "Components/video/Video";

const AboutUs: React.FC = () => {
  return (
    <div className="w-[90%] mx-auto mt-8 text-center" id="about">
      <div>
        <h4 className="my-3 font-bold text-lg">ABOUT US</h4>
        <p className="text-md text-black mb-3 leading-8">
          Poise.NG is a Nigerian-owned leather fashion brand. We use locally
          sourced materials, labor, and equipment to produce world-class fashion
          leather paraphernalia. Starting solely as a man-purse-producing brand,
          the company has expanded its production and gone on to launch a
          variety of other types of leather bags; ranging from messenger bags to
          duffle bags, amongst others. It was borne out of the need to provide
          quality, unique, and accessible leather accessories to accentuate the
          otherwise mundane outlook for people who desire{" "}
          <span className="uppercase font-bold">charisma</span>,{" "}
          <span className="uppercase font-bold">class</span> and{" "}
          <span className="uppercase font-bold">comfort</span>
          .
        </p>
      </div>
      <div className="mb-1">
        <Video />
      </div>
    </div>
  );
};

export default AboutUs;
