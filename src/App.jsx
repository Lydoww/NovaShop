import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsGrid from "./components/ProductsGrid";
import Filters from "./components/Filters";
import Products from "./components/Products";

const products = [
  { id: 1, title: "Smartphone", price: 699, image: "image1.jpg" },
  { id: 2, title: "Laptop", price: 1299, image: "image2.jpg" },
  { id: 3, title: "Headphones", price: 199, image: "image3.jpg" },
  { id: 4, title: "Camera", price: 499, image: "image4.jpg" },
];

const App = () => {
  const [filterProducts, setFilterProducts] = useState(products);

  const handleFilter = (filterType) => {
    if (filterType === "under500") {
      setFilterProducts(products.filter((product) => product.price < 500));
    } else {
      setFilterProducts(products);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className=" flex  bg-gray-100">
        <Filters onFilter={handleFilter} />
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default App;
