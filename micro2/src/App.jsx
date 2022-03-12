import './App.css'
import Navbar from "./components/navBar";
import HomePage from "./pages/HomePage"
import Peliculas from "./pages/Peliculas"
import MovieDBAPI from "./pages/MovieDBAPI"
import DetallePelicula from "./pages/DetallePelicula"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/pelius/:id" element={<DetallePelicula />} ></Route>
        <Route path="/peli/:id" element={<DetallePelicula />} ></Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/detallePelicula" element={<DetallePelicula />} />
      </Routes>
  </Router>
  )
}

export default App
