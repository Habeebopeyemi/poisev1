import React from "react";
import type { ILinks } from "../../interface/interface";
const HeaderLink: React.FC<ILinks> = ({ location, text }) => {
  return (
    <li className="my-[3px] underline mr-2">
      <a href={location}>{text}</a>
    </li>
  );
};

export default HeaderLink;
