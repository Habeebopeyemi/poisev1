import React from "react";
import HeaderLink from "./HeaderLink";
import { header_info } from "data";
import type { ILinks } from "interface/interface";
import logo from "assets/img/Copy_of_Poise_Logo-removebg-preview 1.svg";
import {RxHamburgerMenu} from "react-icons/rx"

const Header = () => {
  return (
    <header className="w-full">
      <nav className="w-full p-3">
        <div className="w-full flex justify-between">
          <img src={logo} alt="logo"/>
          <div className="p-2">
            <RxHamburgerMenu className="text-xl"/>
          </div>
        </div>
        <div>
          <ul className="my-4">
            {header_info.map((info: ILinks) => {
              return (
                <HeaderLink
                  key={info.id}
                  text={info.text}
                  location={info.location}
                />
              );
            })}
          </ul>
          <button className="bg-button p-2 rounded-md hover:bg-button_hover hover:text-white">Get in touch</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
