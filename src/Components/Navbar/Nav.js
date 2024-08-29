
import { useState, useEffect } from 'react';
import './Nav.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation(); // Access the current location

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0); // Scroll to top when route changes
  }, [location]); // Runs when the route changes

  return (
    <>
      {/* Background overlay */}
      <div className={`nav-overlay ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}></div>

      <nav className={`fixed top-0 left-0 w-full p-2 transition-colors duration-300 ease-in-out ${isOpen ? 'bg-black' : isScrolled ? 'bg-[#161616cc]' : 'bg-black'} text-white z-50`}>
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
            <img src="https://swarajjaiswal.github.io/saeevents/logo.png" alt="Logo" className="h-12" />
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link text-lg font-bold hover:text-custom-red" onClick={() => window.scrollTo(0, 0)}>HOME</Link>
            <Link to="/events" className="nav-link text-lg font-bold hover:text-custom-red" onClick={() => window.scrollTo(0, 0)}>EVENTS</Link>
            <Link to="/teams" className="nav-link text-lg font-bold hover:text-custom-red" onClick={() => window.scrollTo(0, 0)}>TEAMS</Link>
            <Link to="/tedx" className="nav-link text-lg font-bold hover:text-custom-red" onClick={() => window.scrollTo(0, 0)}>TEDX</Link>
            <Link to="/arhn" className="nav-link text-lg font-bold hover:text-custom-red" onClick={() => window.scrollTo(0, 0)}>AAROHAN</Link>
            <Link to="/alumni" className="nav-link text-lg font-bold hover:text-custom-red" onClick={() => window.scrollTo(0, 0)}>ALUMNI</Link>
          </div>

          <button className="md:hidden relative z-20" onClick={toggleNavbar}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 transition-transform duration-300 ease-in-out transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 transition-transform duration-300 ease-in-out transform rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <div
            className={`nav-menu md:hidden fixed top-16 left-0 w-full p-4 rounded-b-md shadow-md z-10 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100 bg-black' : '-translate-y-full opacity-0'}`}
          >
            <div className="flex flex-col space-y-3 ml-12 m-8 justify-center items-center">
              <Link to="/" className=" no-underline block text-white hover:text-custom-red text-lg font-bold transition duration-300 ease-in-out" onClick={() => window.scrollTo(0, 0)}>HOME</Link>
              <Link to="/events" className="no-underline block text-white hover:text-custom-red text-lg font-bold transition duration-300 ease-in-out" onClick={() => window.scrollTo(0, 0)}>EVENTS</Link>
              <Link to="/teams" className=" no-underline block text-white hover:text-custom-red text-lg font-bold transition duration-300 ease-in-out" onClick={() => window.scrollTo(0, 0)}>TEAMS</Link>
              <Link to="/tedx" className="no-underline block text-white hover:text-custom-red text-lg font-bold transition duration-300 ease-in-out" onClick={() => window.scrollTo(0, 0)}>TEDX</Link>
              <Link to="/arhn" className="no-underline block text-white hover:text-custom-red text-lg font-bold transition duration-300 ease-in-out" onClick={() => window.scrollTo(0, 0)}>AAROHAN</Link>
              <Link to="/alumni" className="no-underline block text-white hover:text-custom-red text-lg font-bold transition duration-300 ease-in-out" onClick={() => window.scrollTo(0, 0)}>ALUMNI</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


export default Navbar;
