import React, { useState, useEffect } from "react";
import ProductsGrid from "./ProductsGrid";

const Products = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get()
  }, [])

  return (
    <section className="flex-grow p-4">
      <ProductsGrid products={products} />
    </section>
  );
};

export default Products;
