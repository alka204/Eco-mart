import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FlashSales from "./components/FlashSales/FlashSales";
import Categories from "./components/Categories/Categories";
import BestSelling from "./components/BestSelling/BestSelling";
import Banner from "./components/Banner/Banner";
import Explore from "./components/Explore/Explore";
import NewArrival from "./components/NewArrival/NewArrival";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FlashSales />
      <Categories />
      <BestSelling />
      <Banner />
      <Explore />
      <NewArrival />
      <Services />
      <Footer />
    </>
  );
}

export default App;
