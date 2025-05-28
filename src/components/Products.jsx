import ProductsGrid from "./ProductsGrid";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Filters from "./Filters";

const fetchProducts = async () => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Products = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error when fetching products</div>;

  return (
    <main className=" flex  bg-gray-100">
      <Filters onFilter={() => {}} />
      <ProductsGrid products={data} />
    </main>
  );
};

export default Products;
