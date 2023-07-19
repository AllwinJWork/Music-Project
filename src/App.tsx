
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import {Route,Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import About from './Pages/AboutPage';
import Donations from './Pages/DonationsPage';
import ArtistZone from './Pages/ArtistZonePage';
import ArtistAuth from './Pages/ArtistAuthPage';



function App() {
 
  return (
    <>
    <NavBar/>
      <div className='container'>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/donations" element={<Donations/>}/>
          <Route path="/artist" element={<ArtistZone/>}/>
          <Route path="/artist-auth" element={<ArtistAuth/>}/>
        </Routes>
      </div>
      <Footer/>

  </>
 
  
  );
}

export default App;
