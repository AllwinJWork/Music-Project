import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Donations from "./Pages/DonationsPage";
import ArtistZone from "./Pages/ArtistZonePage";
import ArtistAuth from "./Pages/ArtistAuthPage";
import LearningZone from "./Pages/LearningZonePage";
import BeInspired from "./Pages/BeInspiredPage";
import Enquiries from "./Pages/EnquriesPage";
import LoadingScreen from "./Pages/LoadingScreenPage";
import React, { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/artist" element={<ArtistZone />} />
          <Route path="/artist-auth" element={<ArtistAuth />} />
          <Route path="/learning" element={<LearningZone />} />
          <Route path="/inspired" element={<BeInspired />} />
          <Route path="/enquiries" element={<Enquiries />} />
          <Route path="/loadingscreen" element={<LoadingScreen />} />
        </Routes>

      
      <Footer />
      </div>
    </>
  );
};

export default App;
