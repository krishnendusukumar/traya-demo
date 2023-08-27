import NavBar from "./components/NavBar";
import Header from "./components/Header";
import CarouselReviews from "./components/CarouselReviews";
import Banner from "./components/Banner";
import CustomerSection from "./components/CustomerSection";
import ScientificSection from "./components/ScientificSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative font-[nunito sans]">
      <div className="absolute">
        <NavBar />
      </div>
      <Header />
      <CarouselReviews />
      <Banner />
      <CustomerSection />
      <ScientificSection />
      <Footer />
    </div>
  );
}

export default App;
