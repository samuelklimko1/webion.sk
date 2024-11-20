import './App.css'
import { Route, Routes} from "react-router-dom"
import Book from "./components/Book.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./components/Home.jsx"

function App() {

  return (
    <>
      <div className='background-app'>
        <div className='container-app'>
          <Navbar/>
          <Routes>
            <Route path="/booking" element={<Book />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
