import React from "react";
import type { IButton } from "interface/interface";

const Button: React.FC<IButton> = ({ text, onclick }) => {
  return (
    <button
      className="w-full bg-button p-2 rounded-md hover:bg-button_hover hover:text-white"
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
