
import homeBg from '../Assets/Home/HomeMain.jpg';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner/Banner';


const home: React.FC = () => {
  return (
    <div className="artist-zone-container">
      <Banner
        image={{ alt: "Home", src: homeBg }}
        title="Home Page"
        introText="There is power in music"
        caption="Without music, our lives would be very boring!"
      />
      </div>
    
  );
}


export default home;