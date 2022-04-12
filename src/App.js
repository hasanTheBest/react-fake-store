import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import RequireAuth from "./components/Login/RequireAuth";
import SignUp from "./components/Login/SignUp";
import Shipping from "./components/Shipping/Shipping";
import Shop from "./components/Shop/Shop";
import ShopProvider from "./context/ShopProvider";

function App() {
  return (
    <ShopProvider>
      <div className="bg-slate-900 text-slate-300 min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/shipping"
              element={
                <RequireAuth>
                  <Shipping />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <footer className="mt-8 p-2 text-center text-slate-400">
          &copy; Mahmud, {new Date().getFullYear()} | All rights reserved.
        </footer>
      </div>
    </ShopProvider>
  );
}

export default App;
