import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import HeroPic from "./Components/HeroPic";
import Acheivment from "./Components/Acheivment";
import Trust from "./Components/Trust";
import Pricing from "./Components/Pricing";
import AccountOpen from "./Components/AccountOpen";
import Footer from "./Components/Footer";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

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

  const icons = [
    <FaTwitter />,
    <FaFacebookSquare />,
    <FaInstagram />,
    <FaLinkedin />,
    <FaTelegram />,
    <FaYoutube />,
  ];

  const list1 = [
    "About",
    "Products",
    "Pricing",
    "Referral programme",
    "Careers",
    "Zerodha.tech",
    "Press & media",
    "Zerodha Cares (CSR)",
  ];

  const list2 = [
    "Contact us",
    "Support portal",
    "Z-Connect blog",
    "List of charges",
    "Downloads & resources",
    "Videos",
    "Market overview",
    "How to file a complaint?",
    "Status of your complaints",
  ];

  const list3 = ["Open an account","Fund transfer"];

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
      <Footer
        logo="https://tse4.mm.bing.net/th?id=OIP.Z3nAIhOGA9ZAK39qpijsaQHaA-&pid=Api&P=0&h=18"
        copyright="© 2010 - 2024, Zerodha Broking Ltd. All rights reserved."
        icons={icons}
        t1="Company"
        t2="Support"
        t3="Account"
        list1={list1}
        list2={list2}
        list3={list3}
      />
    </>
  );
}

export default App;
