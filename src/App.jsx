import { Route, Routes } from "react-router-dom";
import "./assets/global.scss";
import Header from "./componets/Header/Header";
import Home from "./componets/screens/Home/Home";
import NotFount from "./componets/screens/NotFound/NotFount";
import Like from "./componets/screens/Like/Like";
import { createContext } from "react";
import { useState } from "react";
import OrderHistory from "./componets/screens/OrderHistory/OrderHistory";

export const SearchContext = createContext();
function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="body">
      <SearchContext.Provider value={{ search, setSearch }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Like" element={<Like />} />
            <Route path="/Orders" element={<OrderHistory />} />
            <Route path="*" element={<NotFount />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
