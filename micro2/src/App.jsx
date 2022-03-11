import './App.css'
import Navbar from "./components/navBar";
import HomePage from "./pages/HomePage"
import Peliculas from "./pages/Peliculas"
import MovieDBAPI from "./pages/MovieDBAPI"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <MovieDBAPI/>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/peliculas" element={<Peliculas />} />
      </Routes>
  </Router>
  )
}

export default App
