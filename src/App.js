import { Routes, Route } from 'react-router-dom';
// import Navigation from './components/layout/Navigation';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Success from './components/pages/Success';
import Error from './components/pages/Error';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      {/* <Navigation /> */}
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/success' element={<Success />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
