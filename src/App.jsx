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
        img="https://secure.gravatar.com/avatar/6681229bfdc45f5c67ba43f912b95ad3?s=500&d=mm&r=g"
        title="Largest stock broker in India"
        description="Largest stock broker in India"
      />
      {/* <AccountOpen
        title="Open a Zerodha account"
        description="Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades."
      /> */}
    </>
  );
}

export default App;
