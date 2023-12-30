
const Skeleton = () => {
  return (
    <div className="relative w-full max-w-[400px] mx-auto bg-card p-3 rounded-md sm:max-w-[300px] sm:mx-0 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">
      <div className="w-full">
        <div className="w-full h-[200px] mb-3 md:mb-4">
          <div className="w-[100%] h-[100%] rounded-t-md bg-neutral-300"></div>
        </div>
        <div className="flex justify-between mb-3 md:mb-4">
          <div className="basis-[40%] h-4 bg-neutral-200 shadow"></div>
          <p className="basis-[40%] h-4 bg-neutral-200 shadow"></p>
        </div>
        <p className="h-4 bg-neutral-200 shadow text-descr mb-3 md:mb-4"></p>
        <button className="block w-4/5 mx-auto h-6 bg-neutral-200 shadow"></button>
      </div>
    </div>
  );
};

export default Skeleton;

// javascript line of code to create a new array and populate it with null
/* const skeletons = Array.from({ length: 5 }, () => null); */
