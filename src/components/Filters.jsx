import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PropTypes from "prop-types";

const fetchCategories = async () => {
  try {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Filters = ({ onFilter }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isLoading) return <div>Loading categories...</div>;
  if (error) return <div>Error fetching categories</div>;

  return (
    <aside className="w-1/4 p-4 bg-white mb-4">
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {data.map((category) => (
            <button
              key={category}
              className="px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

Filters.PropTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filters;
