import React from "react";

const History: React.FC = () => {
  return (
    <div className="w-[90%] mx-auto my-8 bg-poise bg-cover bg-no-repeat bg-[rgba(5,255,255,0.9)]">
      <div className="w-full p-5 bg-[rgba(23,14,14,0.7)]">
        <h4 className="font-bold text-lg my-2 text-center text-orange-400">
          POISE.NG
        </h4>
        <div className="flex gap-2 justify-center font-semibold text-white mb-3">
          <span>Charisma</span>
          <span>Class</span>
          <span>Comfort</span>
        </div>
        <div className="text-center sm:flex justify-center gap-2 lg:p-10 lg:gap-20">
          <div className="lg:basis-[20%]">
            <h5 className="font-bold underline text-orange-400">Vision</h5>
            <p className="leading-8 italic text-white">
              To ensure that Nigerian leatherworks are placed on a pedestal and
              recognized globally.
            </p>
          </div>
          <div className="lg:basis-[20%]">
            <h5 className="font-bold underline text-orange-400">Why Us?</h5>
            <p className="leading-8 italic text-white">
              We are committed to giving you your money’s worth by ensuring you
              stay fashionable and classy without breaking the bank.
            </p>
          </div>
          <div className="lg:basis-[20%]">
            <h5 className="font-bold underline text-orange-400">
              100% Quality
            </h5>
            <p className="leading-8 italic text-white">
              The word “compromise” does not exist in our dictionary. It is
              either premium or it is not us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
