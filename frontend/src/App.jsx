import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Preloader from "./components/Preloader.jsx"; 
import { useState, useEffect } from 'react';
import Zaklad from "./components/Zaklad.jsx";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <div className='background-app'>
        <div className='container-app'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zacatzaklad" element={<Zaklad />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;