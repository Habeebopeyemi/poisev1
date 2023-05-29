import React from "react";
import { header_info } from "data";
import HeaderLink from "./HeaderLink";
import { useNavigate, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "assets/img/Copy_of_Poise_Logo-removebg-preview 1.svg";
import type { ILinks } from "interface/interface";

const Header: React.FC = () => {
  const token: null | string = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const handleSignOut = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };
  return (
    <header className="w-full absolute z-10 top-0 left-0 bg-[rgba(255,255,255,0.7)]">
      <nav className="w-full p-3 md:flex justify-between">
        <div className="flex justify-between md:basis-[10%]">
          <img src={logo} alt="logo" />
          <div className="p-2 md:hidden">
            <RxHamburgerMenu className="text-xl" />
          </div>
        </div>
        <div className="md:flex md:basis-[80%] justify-between">
          <ul className="my-4 mr-2 basis-[40%] md:flex justify-between">
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
          <div className="w-[70%] md:my-2 flex">
            <button className="w-[33%] mr-2 bg-button p-2 rounded-md hover:bg-button_hover hover:text-white md:p-3">
              Get in touch
            </button>
            {token ? (
              <>
                <button className="w-[33%] bg-slate-200 p-2 mr-2 rounded-md hover:bg-button_hover hover:text-white md:p-3">
                  <Link to="addproduct">Add product</Link>
                </button>
                <button
                  className="w-[33%] bg-slate-200 p-2 rounded-md hover:bg-button_hover hover:text-white md:p-3"
                  onClick={handleSignOut}
                >
                  sign out
                </button>
              </>
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
