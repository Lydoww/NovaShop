import ProductsGrid from "./ProductsGrid";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Filters from "./Filters";
import { useState } from "react";

const fetchProducts = async ({ queryKey }) => {
  const [key, filters] = queryKey;
  let url = "https://fakestoreapi.com/products";
  if (filters.category) {
    url += `/category/${filters.category}`;
  }
  if (filters.sort) {
    url += `?sort=${filters.sort}`;
  }
  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Products = () => {
  const [filters, setFilters] = useState({
    category: "",
    sort: "asc",
  });
  const { data, error, isLoading } = useQuery({
    queryKey: ["products", filters],
    queryFn: fetchProducts,
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
