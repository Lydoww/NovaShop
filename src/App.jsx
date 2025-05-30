import Header from "./components/Header";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Route, Routes } from "react-router";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";

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
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
