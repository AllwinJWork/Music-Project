
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import HomePage from './Components/HomePage'
import About from './Components/About';
import Donations from './Components/Donations';
import ArtistZone from './Components/ArtistZone';
import ArtistAuth from './Components/ArtistAuth';



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
