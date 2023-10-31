import './styles/App.css';
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/Footer/footer";
import Signin from "./pages/signin";
import Map from "./pages/map";
import Help from "./pages/help";
import Config from "./pages/config";
import Country from "./components/Places/countryInfo"
import City from "./components/Places/CityInfo"

function App() {
  return (
    <div className="app">
      <Router basename='/'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/map" element={<Map />} />
          <Route path="/country/:id" element={<Country/>} />
          <Route path="/country/:id/:id" element={<City/>} />
          <Route path="/help" element={<Help />} />
          <Route path="/config" element={<Config />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
