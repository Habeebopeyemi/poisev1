import React, { useState, useEffect } from "react";
import { header_info } from "data";
import HeaderLink from "./HeaderLink";
import { useNavigate, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import useWindowSize from "hooks/hook";
import { Size } from "interface/interface";
import logo from "assets/img/Copy_of_Poise_Logo-removebg-preview 1.svg";
import type { ILinks } from "interface/interface";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const token: null | string = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const size: Size = useWindowSize();
  const handleSignOut = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };
  useEffect(() => {
    if (size.width > 768) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [size.width > 768]);
  return (
    <header className="w-full absolute z-10 top-0 left-0 bg-[rgba(255,255,255,0.7)]">
      <nav className="w-full p-3 md:flex justify-between">
        <div className="flex justify-between md:basis-[15%]">
          <img src={logo} alt="logo" />
          <div
            className="p-2 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <RxHamburgerMenu className="text-xl" />
          </div>
        </div>
        {open ? (
          <div
            className={
              token
                ? "md:flex md:basis-[80%] justify-between lg:basis-[70%] smax:basis-[65%]"
                : "md:flex md:basis-[80%] justify-evenly"
            }
          >
            <ul
              className={
                token
                  ? "my-4 mr-2 basis-[40%] md:flex justify-between lg:basis-[30%] smax:basis-[25%]"
                  : "my-4 mr-2 basis-[40%] md:flex justify-between lg:basis-[30%] smax:basis-[25%]"
              }
            >
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
            <div
              className={
                token
                  ? "lg:basis-[60%] smax:basis-[45%] flex"
                  : "w-[70%] md:my-2 flex md:basis-[30%] lg:basis-[25%] smax:basis-[20%]"
              }
            >
              <button
                className={
                  token
                    ? "w-[33%] mr-2 bg-black text-button font-bold p-2 rounded-md hover:bg-button_hover hover:text-white"
                    : "w-[50%] bg-black text-button font-bold p-2 rounded-md hover:bg-button_hover hover:text-white md:p-3 md:w-full"
                }
              >
                <a
                  href="https://api.whatsapp.com/send?phone=%2B2348134863130&data=AWDDf5Koqyhq8N84q1xVGsyGLRemGUVSYr3kmfDGJPbU6p0AXoZNMt5vBt0SOq2MofL3JDpah5HmJb2hQgq5eRe3YYPajwB6QHo-xmTEX9QGBN0xymnTzAAUKG2jlvr0-bzg3UJTz4-aWuJnHs2X_ErVNG7wCt5hTY4cEu0SRwa35zTRgYtjEZpEQ0e-oNkjuNIhrJMytQpjbjjuma0ZsfxiB0MEZUq1-LXDTsOF6A5ZVTcAxDE20vksG7YVY0BGyW5QN35-HP0ESeutPPAr5RpMgNwQksWtv30J2jfjd6VOb_jt8xs&source=FB_Page&app=facebook&entry_point=page_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get in touch
                </a>
              </button>
              <button
                className={
                  token
                    ? "w-[33%] bg-black text-button font-bold p-2 mr-2 rounded-md hover:bg-button_hover hover:text-white md:p-3"
                    : "hidden"
                }
              >
                <Link to="addproduct">
                  <p className="w-full">Add product</p>
                </Link>
              </button>
              <button
                className={
                  token
                    ? "w-[33%] bg-black text-button font-bold p-2 mr-2 rounded-md hover:bg-button_hover hover:text-white md:p-3"
                    : "hidden"
                }
                onClick={handleSignOut}
              >
                sign out
              </button>
            </div>
          </div>
        ) : null}
        {/* <div
          className={
            token
              ? "md:flex md:basis-[80%] justify-between lg:basis-[70%] smax:basis-[65%]"
              : "md:flex md:basis-[80%] justify-evenly"
          }
        >
          <ul
            className={
              token
                ? "my-4 mr-2 basis-[40%] md:flex justify-between lg:basis-[30%] smax:basis-[25%]"
                : "my-4 mr-2 basis-[40%] md:flex justify-between lg:basis-[30%] smax:basis-[25%]"
            }
          >
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
          <div
            className={
              token
                ? "lg:basis-[60%] smax:basis-[45%] flex"
                : "w-[70%] md:my-2 flex md:basis-[30%] lg:basis-[25%] smax:basis-[20%]"
            }
          >
            <button
              className={
                token
                  ? "w-[33%] mr-2 bg-black text-button font-bold p-2 rounded-md hover:bg-button_hover hover:text-white"
                  : "w-[50%] bg-black text-button font-bold p-2 rounded-md hover:bg-button_hover hover:text-white md:p-3 md:w-full"
              }
            >
              Get in touch
            </button>
            <button
              className={
                token
                  ? "w-[33%] bg-black text-button font-bold p-2 mr-2 rounded-md hover:bg-button_hover hover:text-white md:p-3"
                  : "hidden"
              }
            >
              <Link to="addproduct">
                <p className="w-full">Add product</p>
              </Link>
            </button>
            <button
              className={
                token
                  ? "w-[33%] bg-black text-button font-bold p-2 mr-2 rounded-md hover:bg-button_hover hover:text-white md:p-3"
                  : "hidden"
              }
              onClick={handleSignOut}
            >
              sign out
            </button>
          </div>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
