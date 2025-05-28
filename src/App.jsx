import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>

      <Footer />
    </div>
  );
};

export default App;
