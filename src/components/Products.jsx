import ProductsGrid from "./ProductsGrid";
import { useQuery } from "@tanstack/react-query";
import Filters from "./Filters";
import { useState } from "react";
import { productsService } from "../services/ProductService";

const Products = () => {
  const [filters, setFilters] = useState({
    category: "",
    sort: "asc",
  });
  const { data, error, isLoading } = useQuery({
    queryKey: ["products", filters],
    queryFn: () => productsService.getProduct(filters),
  });

  if (isLoading) return <div className="min-h-screen">Loading products...</div>;
  if (error) return <div>Error when fetching products</div>;

  return (
    <main className=" flex bg-gray-100">
      <Filters filters={filters} onFilter={setFilters} />
      <ProductsGrid products={data} />
    </main>
  );
};

export default Products;
