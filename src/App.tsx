import React from "react";
import Header from "./Components/header/Header";
import Slider from "Components/productslider/Slider";
import Gallery from "Components/gallery/Gallery";
import Social from "Components/social/Social";
import AboutUs from "Components/about/AboutUs";
import History from "Components/history/History";
const App: React.FC = () => {
  return (
    <div className="w-full relative">
      <Header />
      <Slider />
      <Gallery />
      <History/>
      <Social />
      <AboutUs />
    </div>
  );
};

export default App;
