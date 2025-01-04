import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import ProductList from "./components/ProductList";
import Offer from "./components/Offer";
import Reservation from "./components/Reservation";
import ProductManuList from "./components/ProductManuList";


export default function Home() {
  return (
    <div className="bg-gradient-to-t from-orange-100 to-blue-100 h-auto">
      <Banner />
      <Carousel />
      <ProductList />
      <ProductManuList />
      <Offer />
      <Reservation />
      
    </div>
  );
}
