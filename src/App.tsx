import React from "react";
import Header from "./Components/header/Header";
import Slider from "Components/productslider/Slider";
import Gallery from "Components/gallery/Gallery";
import Social from "Components/social/Social";
import AboutUs from "Components/about/AboutUs";
import History from "Components/history/History";
import Footer from "Components/footer/Footer";
import UserStyle from "Components/style/style";
const App: React.FC = () => {
  return (
    <div className="w-full bg-gallery relative">
      <Header />
      <Slider />
      <div className="w-full bg-gallery lg:w-[95%] xl:w-[80%] mx-auto max-w-[1100px]">
        <Gallery />
        <div className="w-full mt-5 mb-8">
          <UserStyle />
        </div>
        <Social />
        <History />
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default App;
