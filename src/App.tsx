import React from "react";
import Header from "./Components/header/Header";
import Slider from "Components/productslider/Slider";
const App: React.FC = () => {
  return (
    <div className="w-full">
      <Header />
      <Slider />
    </div>
  );
};

export default App;
