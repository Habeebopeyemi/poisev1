import React from "react";
import Header from "./Components/header/Header";
import Slider from "Components/productslider/Slider";
import Gallery from "Components/gallery/Gallery";
import Social from "Components/social/Social";
const App: React.FC = () => {
  return (
    <div className="w-full relative">
      <Header />
      <Slider />
      <Gallery />
      <Social/>
    </div>
  );
};

export default App;
