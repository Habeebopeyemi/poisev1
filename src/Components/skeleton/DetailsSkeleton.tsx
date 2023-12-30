import React from 'react'

const DetailsSkeleton = () => {
  return (
    <div>
      <div className="relative max-w-[400px] sm:max-w-[600px] border-[2px] mx-auto mt-20 mb-[2.95rem] sm:mb-[5.75rem] md:mb-[14.8rem] rounded-md md:max-w-[95%] lg:max-w-[970px] bg-white before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">
        <p className="m-2 flex justify-between">
          <span></span>
        </p>
        <div className="w-full p-5 md:flex justify-between">
          <div className="basis-[50%]">
            <div className="w-full h-[200px] mb-3 md:mb-4">
              <div className="w-[100%] h-[100%] rounded-t-md bg-neutral-300"></div>
            </div>
            <div className="w-[100%] sm:flex md:block justify-between">
              <div className="w-full sm:basis-[50%] basis-[80%] sm:flex md:block justify-between">
                <button className="w-full flex justify-center font-bold  bg-neutral-200 my-2 p-2 rounded-md md:p-3">
                  <span></span> <div className="mt-[0.25rem] ml-2"></div>
                </button>

                <button className="w-full flex justify-center font-bold bg-neutral-200 my-2 p-2 rounded-md md:p-3">
                  <span className="basis-[30%] h-4"></span>{" "}
                  <div className="basis-[30%] h-4 mt-[0.25rem] ml-2"></div>
                </button>
              </div>
            </div>
          </div>
          <div className="basis-[40%]">
            <div className="flex justify-between my-3">
              <div className="basis-[30%] h-4 text-xl font-[500]"></div>
              <span className="basis-[30%] h-4 font-bold text-xl"></span>
            </div>
            <p className="w-1/4 h-4 text-sm bg-neutral-200 leading-6"></p>
            <div className="w-1/4 h-4 text-lg mt-3 font-[500] bg-neutral-200"></div>
            <p className="w-1/4 h-4 text-sm bg-neutral-200 leading-6"></p>
            <div className="w-1/4 h-4 font-[500] mt-3 mb-2 bg-neutral-200"></div>
            <p className="w-1/4 h-4 text-sm bg-neutral-200"></p>
            <div className="my-3">
              <button className="w-full h-4 font-bold p-2 rounded-md hover:bg-red-500 hover:text-white md:p-3"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsSkeleton