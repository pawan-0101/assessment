import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ContactForm from './components/ContactForm'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Films from './components/Films'
import Brands from './components/Brands'
import Art from './components/Art'
import '@fontsource/playfair-display'
import Services from './components/Services'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/art" element={<Art />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
