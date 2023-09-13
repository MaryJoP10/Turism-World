import './styles/App.css';
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/Footer/footer";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Map from "./pages/map";
import Help from "./pages/ayuda";
import Config from "./pages/config";

function App() {
  return (
    <div className="app">
    <Router basename='/'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/config" element={<Config/>} />
      </Routes>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
