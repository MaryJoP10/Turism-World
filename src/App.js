import './styles/App.css';
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/Footer/footer";
import Signin from "./pages/signin";

function App() {
  return (
    <div className="app">
    <Router basename='/'>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/signin" element={<Signin/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
