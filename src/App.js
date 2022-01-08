
//Pages
import Home from './pages/Home'
import Music from './pages/Music'
import Tastes from './pages/Tastes'
import BackTheBlue from './pages/BackTheBlue'
import SomervelleCounty from './pages/SomervelleCounty'
import CreationEvidenceMuseum from './pages/CreationEvidenceMuseum'
import Historic from './pages/Historic'
import Archives from './pages/Archives'
import Podcasts from './pages/Podcasts'
import Sponsors from './pages/Sponsorship'

//Components
import BannerAd from './components/banner-ad/BannerAd'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


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
          <Route exact path="/Music" element={<Music />} />
          <Route exact path="/Tastes" element={<Tastes />} />
          <Route exact path="/BackTheBlue" element={<BackTheBlue />} />
          <Route exact path="/SomervelleCounty" element={<SomervelleCounty />} />
          <Route exact path="/CreationEvidenceMuseum" element={<CreationEvidenceMuseum />} />
          <Route exact path="/Historic" element={<Historic />} />
          <Route exact path="/Archives" element={<Archives />} />
          <Route exact path="/Podcasts" element={<Podcasts />} />
          <Route exact path="/Sponsors" element={<Sponsors />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
