import { Link } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import "../Assets/styles/HomePage.css";

const home: React.FC = () => {
  return (
    <div>
      <div className="artist-zone-container">
        <Banner
          image={{
            alt: "Home",
            src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
          title="Home Page"
          introText="There is power in music"
          caption="Without music, our lives would be very boring!"
        />
       <div>
        <Link to="/enquiries">
          <button>Go to Enquiries Page</button>
        </Link>
        </div>
      </div>

      
    </div>
  );
};

export default home;
