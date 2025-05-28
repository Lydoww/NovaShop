import React, { useState, useEffect } from "react";
import ProductsGrid from "./ProductsGrid";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const response = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setProducts(response.data);
    }
    fetchProduct();
  }, []);

  return (
    <section className="flex-grow p-4">
      <ProductsGrid products={products} />
    </section>
  );
};

export default Products;
