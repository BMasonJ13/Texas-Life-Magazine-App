import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import BannerAd from './components/banner-ad/BannerAd'

//Pages
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <BannerAd 
        topAd="https://picsum.photos/375/70"
        bottomAd="https://picsum.photos/375/70"
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/Home" />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
