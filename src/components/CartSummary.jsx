import PropTypes from "prop-types";

export default function CartSummary({ items, cartTotal }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>
              {item.title} (x{item.quantity})
            </span>
            <span>${item.price}</span>
          </div>
        ))}
        <div className="border-t border-gray-300 pt-2 ">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${cartTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

CartSummary.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        rate: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
      }),
    })
  ).isRequired,
  cartTotal: PropTypes.number.isRequired,
};
