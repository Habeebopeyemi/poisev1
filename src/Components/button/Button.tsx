import React from 'react'
export interface IButton{
    text: string
    onclick?: ()=>void
}
const Button = () => {
  return (
    <button className="bg-button p-2 rounded-md hover:bg-button_hover hover:text-white">
      Get in touch
    </button>
  );
}

export default Button