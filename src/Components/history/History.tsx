import React from "react";

const History: React.FC = () => {
  return (
    <div className="w-[90%] mx-auto my-8 bg-poise bg-cover bg-no-repeat bg-[rgba(5,255,255,0.7)]">
      <div className="w-full p-10 bg-[rgba(23,14,14,0.95)]">
        <h4 className="font-bold text-lg my-2 text-center text-white">
          POISE.NG
        </h4>
        <div className="flex gap-2 justify-center font-semibold text-[#ffa500] mb-3">
          <span>Charisma.</span>
          <span>Class.</span>
          <span>Comfort.</span>
        </div>
        <div className="text-start">
          <div className="lg:basis-[20%] mb-4">
            <h5 className="font-bold text-[#ffa500] mb-2">Vision</h5>
            <p className="leading-5 text-white font-light">
              To ensure that Nigerian leatherworks are placed on a pedestal and
              recognized globally.
            </p>
          </div>
          <div className="lg:basis-[20%] mb-4">
            <h5 className="font-bold text-[#ffa500] mb-2">Why Us?</h5>
            <p className="leading-5 text-white font-light">
              We are committed to giving you your money’s worth by ensuring you
              stay fashionable and classy without breaking the bank.
            </p>
          </div>
          <div className="lg:basis-[20%] mb-4">
            <h5 className="font-bold text-[#ffa500] mb-2">100% Quality</h5>
            <p className="leading-5 text-white font-light">
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
