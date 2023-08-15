import React from "react";
import Banner from "../Components/Banner/Banner";
import { Line } from 'react-chartjs-2';

const LearningZone: React.FC = () => {
  
  


  return (
    <div>
      <Banner
        image={{
          alt: "Learing Zone",
          src: "https://images.unsplash.com/photo-1470429346530-f5590bff80d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        }}
        title="Learning Zone"
        introText="There is power in music"
        caption="Without music, our lives would be very boring!"
      />
    </div>

  );
};

export default LearningZone;
