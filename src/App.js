import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Footer from "./components/Navbar/Footer";
import ProverbDetail from "./components/Pages/ProverbDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:pId/:titleId" element={<ProverbDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
