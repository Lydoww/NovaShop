import PropTypes from "prop-types";

const Filters = ({ onFilter }) => {
  return (
    <aside className="w-1/4 p-4 bg-white mb-4">
      <h2 className="text-lg font-semibold pb-4">Filters</h2>
      <button
        className="block w-full px-4 py-2 my-1 text-white rounded bg-blue-500"
        onClick={() => onFilter("under500")}
      >
        Under 500
      </button>
      <button
        className="block w-full px-4 py-2 my-1 text-white rounded bg-gray-500"
        onClick={() => onFilter("all")}
      >
        Show all products
      </button>
    </aside>
  );
};

Filters.PropTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filters;
