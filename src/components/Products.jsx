import ProductsGrid from "./ProductsGrid";
import Filters from "./Filters";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";

const Products = () => {
  const [filters, setFilters] = useState({
    category: "",
    sort: "asc",
  });
  const { data, error, isLoading } = useProducts(filters);

  if (error) return <div>Error when fetching products</div>;

  return (
    <main className=" flex bg-gray-100">
      <Filters filters={filters} onFilter={setFilters} loading={isLoading} />
      <ProductsGrid loading={isLoading} products={data} />
    </main>
  );
};

export default Products;
