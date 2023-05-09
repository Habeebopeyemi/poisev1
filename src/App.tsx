import React from "react";
import Header from "./Components/header/Header";
import Slider from "Components/productslider/Slider";
import Gallery from "Components/gallery/Gallery";
import Social from "Components/social/Social";
import AboutUs from "Components/about/AboutUs";
import History from "Components/history/History";
import Footer from "Components/footer/Footer";
const App: React.FC = () => {
  return (
    <div className="w-full relative">
      <Header />
      <Slider />
      <Gallery />
      <History/>
      <Social />
      <AboutUs />
      <Footer/>
    </div>
  );
};

export default App;
