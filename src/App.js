
import {useState} from 'react'

//Pages
import Home from './pages/Home'
import Music from './pages/Music'
import Tastes from './pages/Tastes'
import BackTheBlue from './pages/BackTheBlue'
import SomervelleCounty from './pages/SomervelleCounty'
import CreationEvidenceMuseum from './pages/CreationEvidenceMuseum'
import Archives from './pages/Archives'
import Podcasts from './pages/Podcasts'
import Sponsors from './pages/Sponsorship'

//Admin Pages
import AdminLogin from './pages/admin/AdminLogin'

import AddPublication from './pages/admin/publication/AddPublication'
import EditPublication from './pages/admin/publication/EditPublication'
import DeletePublication from './pages/admin/publication/DeletePublication'

import AddPodcast from './pages/admin/podcast/AddPodcast'
import EditPodcast from './pages/admin/podcast/EditPodcast'
import DeletePodcast from './pages/admin/podcast/DeletePodcast'

import AddSponsor from './pages/admin/sponsors/AddSponsor'
import EditSponsor from './pages/admin/sponsors/EditSponsor'
import DeleteSponsor from './pages/admin/sponsors/DeleteSponsor'

//Components
import BannerAd from './components/banner-ad/BannerAd'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'




function App() {

  const [isAdmin, setAdmin] = useState(false)

  return (
    <>
      < BrowserRouter>
        {<BannerAd isAdmin={isAdmin}
        topAd="https://picsum.photos/375/70"
        bottomAd="https://picsum.photos/375/70"
        />}
        {<Navbar />}
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/Home" />} />
          <Route exact path="/Home" element={<Home isAdmin={isAdmin}/>} />
          <Route exact path="/Music" element={<Music />} />
          <Route exact path="/Tastes" element={<Tastes />} />
          <Route exact path="/BackTheBlue" element={<BackTheBlue />} />
          <Route exact path="/SomervelleCounty" element={<SomervelleCounty />} />
          <Route exact path="/CreationEvidenceMuseum" element={<CreationEvidenceMuseum />} />
          <Route exact path="/Archives" element={<Archives isAdmin={isAdmin}/>} />
          <Route exact path="/Podcasts" element={<Podcasts isAdmin={isAdmin}/>} />
          <Route exact path="/Sponsors" element={<Sponsors isAdmin={isAdmin} />} />

          <Route exact path="/Admin" element={<AdminLogin setTheAdmin={setAdmin}/>} />

          <Route exact path="/AddPublication" element={<AddPublication />} />
          <Route exact path="/EditPublication/:id" element={<EditPublication />} />
          <Route exact path="/DeletePublication/:id" element={<DeletePublication />} />

          <Route exact path="/AddPodcast" element={<AddPodcast />} />
          <Route exact path="/EditPodcast/:id" element={<EditPodcast />} />
          <Route exact path="/DeletePodcast/:id" element={<DeletePodcast />} />

          <Route exact path="/AddSponsor/:type" element={<AddSponsor />} />
          <Route exact path="/EditSponsor/:type/:id" element={<EditSponsor />} />
          <Route exact path="/DeleteSponsor/:type/:id" element={<DeleteSponsor />} />

          <Route exact path="/404" element={<h1>Whoops.</h1>} />
          <Route exact path="*" element={<Navigate replace to="/404" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
