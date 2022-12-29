import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart/Cart";
import Shop from "./Pages/Shop/Shop";
import ContextProvider from "./Context/ContextProvider";
 const App = () => {
  return (
    <div>
      <ContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
};
export default App;
