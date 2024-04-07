import { GoArrowRight } from "react-icons/go";
import Card from "react-bootstrap/Card";

const Pricing = ({ title, description, pricing }) => {
  return (
    <>
      <div className="flex ml-64  mr-56 mt-20">
        <div className=" w-1/2">
          <h2 className="font-body font-normal  text-4xl text-slate-700 p-0 mt-0 mb-0 ml-1">
            {title}
          </h2>
          <p className="leading-relaxed ml-2 font-body font-normal text-slate-500 text-base mb-5 w-9/12 mt-9">
            {description}
          </p>
          <p className="text-sky-600 font-body text-base ml-3">
            See pricing <GoArrowRight />
          </p>
        </div>

        <div className="w-1/2 flex">
          {pricing.map((price) => (
            <div key={Math.random()} className="w-1/2 border-4 border-gray-900">
              <Card border="secondary" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="font-body font-medium text-4xl text-slate-700 p-0 mt-0 mr-8 text-center">
                    {price.amount}
                  </Card.Title>
                  <Card.Text className="leading-relaxed font-body font-normal ml-4 text-slate-500 text-base mb-10 w-9/12 tracking-wide text-center">
                    {price.option}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
