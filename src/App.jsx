import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import HeroPic from "./Components/HeroPic";
import Acheivment from "./Components/Acheivment";
import AccountOpen from "./Components/AccountOpen";

function App() {
  return (
    <>
      <Nav />
      <HeroPic img="https://zerodha.com/static/images/landing.png" />
      <Hero
        title="Invest in Everything"
        description="Online platform to invest in stocks, derivatives, mutual funds, and
            more"
      />
      <Acheivment
        img="https://www.forbesindia.com/media/images/2022/Jun/img_187897_zerodhacofounders.jpg"
        imgBottom="https://zerodha.com/static/images/press-logos.png"
        title="Largest stock broker in India"
        description="1.3+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:"
      />

      {/* <AccountOpen
        title="Open a Zerodha account"
        description="Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades."
      /> */}
    </>
  );
}

export default App;
