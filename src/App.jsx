import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Nav from './components/Nav';
import Results from './pages/Results';
import Movie from './pages/Movie';
import Home from './pages/Home';

function App() {
  return (
    <Router>
        <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":results" element={<Results />} />
        <Route path=":id" element={<Movie />} />
      </Routes>
    </Router>
  )
}

export default App;