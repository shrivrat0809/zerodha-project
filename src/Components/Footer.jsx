import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
const Footer = ({
  logo,
  copyright,
  icons,
  t1,
  t2,
  t3,
  list1,
  list2,
  list3,
}) => {
  return (
    <>
      <hr className=" bg-slate-50" />
      <div className="ml-56 mr-56 mt-10 flex justify-center">
        <div className="w-1/4 mt-2">
          <img src={logo} className="h-4 mt-0 ml-2" />
          <p className="leading-relaxed ml-2 font-body font-normal text-slate-500 text-sm mb-5 w-56 mt-3">
            {copyright}
          </p>

          <div className="flex">
            {icons.map((icon) => (
              <div key={Math.random()}>{icon}</div>
            ))}
          </div>
        </div>
        <div className="w-1/4">
          <h2 className="font-body font-normal text-xl text-black p-0 mt-1 mb-3">
            {t1}
          </h2>
          {list1.map((items) => (
            <p
              className="leading-relaxed font-body font-normal text-slate-700 text-base mb-0 mt-1.5 hover:cursor-pointer hover:text-sky-600"
              key={Math.random()}
            >
              {items}
            </p>
          ))}
        </div>
        <div className="w-1/4">
          <h2 className="font-body font-normal text-xl text-black p-0 mt-1 mb-3">
            {t2}
          </h2>
          {list2.map((items) => (
            <p
              className="leading-relaxed font-body font-normal text-slate-700 text-base mb-0 mt-1.5 hover:cursor-pointer hover:text-sky-600"
              key={Math.random()}
            >
              {items}
            </p>
          ))}
        </div>
        <div className="w-1/4">
          <h2 className="font-body font-normal text-xl text-black p-0 mt-1 mb-3">
            {t3}
          </h2>
          {list3.map((items) => (
            <p
              className="leading-relaxed font-body font-normal text-slate-700 text-base mb-0 mt-1.5 hover:cursor-pointer hover:text-sky-600"
              key={Math.random()}
            >
              {items}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
