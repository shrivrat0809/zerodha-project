import { IoMdMenu } from "react-icons/io";

const Nav = () => {
  return (
    <nav className="flex justify-between ml-56 mr-56 mt-6 items-center">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        `}
      </style>

      <img
        src="https://tse4.mm.bing.net/th?id=OIP.Z3nAIhOGA9ZAK39qpijsaQHaA-&pid=Api&P=0&h=180"
        className="h-4 mt-0 ml-2 hover:cursor-pointer"
      />
      <ul className="flex gap-10 ml-auto mr-16 list-none p-0">
        <li className="text-sm text-zinc-500 cursor-pointer font-body hover:text-sky-600">
          SignUp
        </li>
        <li className="font-body text-sm text-zinc-500 cursor-pointer hover:text-sky-600">
          About
        </li>
        <li className="text-sm font-body text-zinc-500 cursor-pointer hover:text-sky-600">
          Product
        </li>
        <li className="text-sm text-zinc-500 font-body cursor-pointer hover:text-sky-600">
          Pricing
        </li>
        <li className="text-sm text-zinc-500 cursor-pointer font-body hover:text-sky-600">
          Support
        </li>
      </ul>
      <IoMdMenu size={28} className="cursor-pointer" />
    </nav>
  );
};

export default Nav;
