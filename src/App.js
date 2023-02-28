import './styles/App.css';
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/Footer/footer";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Mapa from "./pages/mapa";
import Ayuda from "./pages/ayuda";
import Config from "./pages/config";

function App() {
  return (
    <div className="app">
    <Router basename='/'>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/signin" element={<Signin/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/mapa" element={<Mapa/>} />
        <Route exact path="/help" element={<Ayuda/>} />
        <Route exact path="/config" element={<Config/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
