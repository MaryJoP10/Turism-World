import './styles/App.css';
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="app">
    <Router basename='/'>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
