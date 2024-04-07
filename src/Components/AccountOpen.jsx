const AccountOpen = ({title,description}) => {
  return (
    <>
      <div className="mt-20">
        <div>
          <h1 className=" text-center font-medium  text-3xl mt-10 mb-4 font-body text-slate-700">
            {title}
          </h1>
          <h5 className=" text-center font-body text-slate-700 text-lg font-normal mt-0">
            {description}
          </h5>
        </div>
        <div className=" flex justify-center items-center">
          <button className="justify-center mt-4 items-center border-0 bg-sky-600 hover:bg-black hover:cursor-pointer text-white text-lg py-2 px-8 rounded font-body">
            Sign up now
          </button>
        </div>
      </div>
    </>
  );
}

export default AccountOpen