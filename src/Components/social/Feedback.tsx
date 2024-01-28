import React, { ReactNode } from "react";
export interface IFeedback {
  id?: number;
  handle: string;
  comment: string;
  src: string;
  children?: ReactNode;
}
const Feedback: React.FC<IFeedback> = ({ handle, comment, src, children }) => {
  return (
    <div className="w-[80%] p-3 sm:flex bg-social rounded-md lg:p-6 border-orange-400 border-2">
      <div className="mr-2 w-[30px] h-[30px] relative">
        <img
          src={`https://ui-avatars.com/api/?name=${handle}&background=000&color=ffffff&font-size=.5`}
          alt=""
          className="w-full rounded-full"
        />
        {/* <div className="absolute bottom-0 left-12">{children}</div> */}
      </div>
      <div className="basis-[80%]">
        <h5 className="mb-1">{handle}</h5>
        <p className="text-social_text text-[.8rem] italic mb-4">{comment}</p>
      </div>
    </div>
  );
};

export default Feedback;
