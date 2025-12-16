import HeroCar from "../components/LandingPage/3dcar.jsx";
import CarType from "../components/LandingPage/carType.jsx";
import Offers from "../components/LandingPage/Offers.jsx";
import HowToUse from "../components/LandingPage/Howtobook.jsx";
import Categories from "../components/LandingPage/Categories.jsx";
import Navbar from "../components/LandingPage/navbar.jsx";
import Services from "../components/LandingPage/ourservices.jsx";
import BlogCarousel from "../components/LandingPage/blogcard.jsx";
import ZoomcarCards from "../components/LandingPage/ZoomCar.jsx";

export default function StartPage() {
  return (
    <div>
      < Navbar />
      <HeroCar />
      {/* <FeaturesBar /> */}
      < Services/>
      <CarType />
      <HowToUse />
      <Categories />
      <BlogCarousel />
      <ZoomcarCards />
      <Offers />
    </div>
  );
}