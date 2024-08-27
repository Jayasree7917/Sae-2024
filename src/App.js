
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Alumni from "./Components/Alumni/Alumni.js";
import Aarohan from './Components/Aarohan/Aarohan.js';
import Events from "./Components/Events/Events.js";
import Teams from "./Components/Team/Teams.js";
import Nav from "./Components/Navbar/Nav.js";
import TedX from "./Components/Tedx/TedX.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/HomePage.jsx";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App w-full min-h-screen flex flex-col">
        <Nav />
        <div className="flex-1 pt-12 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/arhn" element={<Aarohan />} />
            <Route path="/tedx" element={<TedX />} />
            <Route path="/alumni" element={<Alumni />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
