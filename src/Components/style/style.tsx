import "react-lazy-load-image-component/src/effects/blur.css";
import stypo from "../../assets/img/stypo.jpg";
import stypo1 from "../../assets/img/stypo1.jpg";
import stypo2 from "../../assets/img/stypo2.jpg";

const UserStyle = () => {
  return (
    <div className="w-full flex bg-gallery lg:h-[600px] lg:pt-6">
      <div className=" basis-[100%] flex flex-col sm:flex-row lg:basis-[70%]">
        <div className="w-[100%] h-[100%] sm:h-full">
          <img src={stypo2} alt="new_image_1" className="w-full h-[100%]" />
        </div>
        <div className="w-full h-[100%] sm:h-full">
          <img
            src={stypo}
            alt="new_image_2"
            className="hidden sm:block w-full h-[100%] 2xl:translate-y-[-40px] 2xl:translate-x-[-20px] 2xl:drop-shadow-xl"
          />
        </div>
      </div>
      <div className="hidden lg:block h-full basis-[50%] sm:basis-[30%]">
        <img
          src={stypo1}
          alt="new_image_3"
          className="w-full h-[100%] 2xl:translate-y-[-20px] 2xl:translate-x-[-40px] 2xl:drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default UserStyle;
