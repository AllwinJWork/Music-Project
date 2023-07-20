import React from "react";
import Banner from "../Components/Banner/Banner";

const Enquries: React.FC = () => {
  return (
    <div>
      <Banner
        image={{
          alt: "Be Inspired ",
          src: "https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
        }}
        title="Contact Us"
        introText="There is power in music"
        caption="Without music, our lives would be very boring!"
      />
    </div>
  );
};

export default Enquries;
