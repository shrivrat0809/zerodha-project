import { GoArrowRight } from "react-icons/go";

const Trust = ({ img, title, sections }) => {
  return (
    <>
      <div className="flex ml-56 mr-56 mt-24">
        <div className=" w-1/2">
          <h1 className="font-body font-normal  text-4xl text-slate-700 p-0 mt-0">
            {title}
          </h1>
          {sections.map((section) => (
            <div key={Math.random()}>
              <h2 className="font-body font-normal ml-2 text-xl text-black p-0 mt-12 mb-0">
                {section.title}
              </h2>
              <p className="leading-relaxed ml-2 font-body font-normal text-slate-500 text-base mb-10 w-9/12">
                {section.description}
              </p>
            </div>
          ))}
        </div>
        <div className=" w-1/2">
          <img src={img} className=" h-5/6 w-full hover:cursor-pointer" />
          <div className="flex justify-center my-5">
            <p className=" text-sky-600 font-body text-base mr-10">
              Explore our products <GoArrowRight />
            </p>
            <p className=" text-sky-600 font-body text-base">
              Try Kite demo <GoArrowRight />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trust;
