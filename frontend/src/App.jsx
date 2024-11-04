import './App.css'
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Footer from "./components/Footer.jsx"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
