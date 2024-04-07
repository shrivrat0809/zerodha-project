import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import HeroPic from "./Components/HeroPic";
import Acheivment from "./Components/Acheivment";
import Trust from "./Components/Trust";
import Pricing from "./Components/Pricing";
import AccountOpen from "./Components/AccountOpen";

function App() {
  const trustSections = [
    {
      title: "Customer-first always",
      description:
        "That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.",
    },
    {
      title: "No spam or gimmicks",
      description:
        'No gimmicks, spam, "double quotes", or annoying push notifications. High quality apps that you use at your pace, the way you like.',
    },
    {
      title: "The Zerodha universe",
      description:
        "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
    },
    {
      title: "Do better with money",
      description:
        "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
    },
  ];

  const pricing = [
    {
      amount: "₹0",
      option: "Free equity delivery and direct mutual funds",
    },
    {
      amount: "₹20",
      option: "Intraday and F&O",
    },
  ];
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
      <Trust
        img="https://zerodha.com/static/images/ecosystem.png"
        title="Trust with confidence"
        sections={trustSections}
      />
      <Pricing
        title="Unbeatable pricing"
        description="We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges."
        pricing={pricing}
      />
      <AccountOpen
        title="Open a Zerodha account"
        description="Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades."
      />
    </>
  );
}

export default App;
