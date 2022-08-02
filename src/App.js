import { Routes, Route } from "react-router-dom";
import Navbar from "./comps/Navbar";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
function App() {
  return (
    <div className="w-full h-screen bg-primary">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
