import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Saved from "./pages/Saved"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './reset.css'


function App() {

  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
