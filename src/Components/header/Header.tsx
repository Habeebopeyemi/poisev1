import React from "react";
import HeaderLink from "./HeaderLink";
import { header_info } from "data";
import type { ILinks } from "interface/interface";
import logo from "assets/img/Copy_of_Poise_Logo-removebg-preview 1.svg";

const Header = () => {
  return (
    <header className="">
      <nav>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul>
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
          <button>Get in touch</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
