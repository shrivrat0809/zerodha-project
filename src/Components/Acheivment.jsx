const Acheivment = ({ title, description, img }) => {
  const features = [
    "Futures and Options",
    "Commodity derivatives",
    "Currency derivatives",
    "Stocks & IPOs",
    "Direct mutual funds",
    "Bonds and Govt. Securities",
  ];

  const firstThree = features.slice(0, 3);
  const lastThree = features.slice(3, 6);

  return (
    <>
      <div className="flex ml-56 mr-56 mt-32">
        <div className=" w-1/2">
          <img src={img} className=" h-80  rounded" />
        </div>
        <div className="w-1/2 ml-12 ">
          <h1 className="font-body font-normal  text-4xl text-slate-700 p-0 mt-0">
            {title}
          </h1>
          <p className="font-body font-normal text-slate-500 mt-7 leading-loose text-lg mb-10">
            {description}
          </p>
          <div className="flex ml-0  mt-0 mx-auto">
            <div className=" w-1/2 mr-4">
              <ul className=" ml-0">
                {firstThree.map((feature) => (
                  <li
                    key={Math.random()}
                    className=" font-body m-4 text-normal text-gray-900"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" w-1/2">
              <ul>
                {lastThree.map((feature) => (
                  <li
                    key={Math.random()}
                    className=" font-body m-4 text-normal text-gray-900 mx-auto"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <img src="https://zerodha.com/static/images/press-logos.png" className=" mt-0 h-8 hover: cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Acheivment;
