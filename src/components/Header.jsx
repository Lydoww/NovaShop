import { NavLink } from "react-router";
import Cart from "../assets/checkout.png";
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <NavLink to="/" className="hover:opacity-80 transition-opacity">
        <h1 className="text-lg font-bold">Trendy Mart</h1>
      </NavLink>
      <NavLink
        to="/checkout"
        className="p-2 hover:bg-blue-700 transition-colors rounded-full"
      >
        <img src={Cart} alt="Cart icon" className="w-6 h-6" />
      </NavLink>
    </header>
  );
};

export default Header;
