import './App.css';
import Alumni from "./Components/Alumni/Alumni.js"
import Aarohan from './Components/Aarohan/Aarohan.js';
import Events from "./Components/Events/Events.js";
import Teams from "./Components/Team/Teams.js";
import Nav from "./Components/Navbar/Nav.js"

// import HomePage from "./Components/Home/HomePage.jsx"
import TedX from "./Components/Tedx/TedX.jsx";
// import Footer from "./Components/Footer/Footer.jsx";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="pt-24 min-h-screen">
        <Router>
          <Routes>
            <Route exact path="/" Component={Teams}></Route>
            <Route exact path="/events" Component={Events}></Route>
            <Route exact path="/teams" Component={Teams}></Route>
            <Route exact path="/arhn" Component={Aarohan}></Route>
            <Route exact path="/tedx" Component={TedX}></Route>
            <Route exact path="/alumni" Component={Alumni}></Route>
          </Routes>
          {/* <Footer/> */}
        </Router>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
