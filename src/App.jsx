import Header from "./components/Header";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Route, Routes } from "react-router";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartProvider";
import Cart from "./pages/Cart";
import CheckoutSuccess from "./pages/CheckoutSuccess";

const queryClient = new QueryClient();

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/success" element={<CheckoutSuccess />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default App;
