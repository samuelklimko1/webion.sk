import './App.css'
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Footer from "./components/Footer.jsx"
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;