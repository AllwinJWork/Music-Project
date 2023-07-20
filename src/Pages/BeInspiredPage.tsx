import React from "react";
import Banner from "../Components/Banner/Banner";

const BeInspired: React.FC = () => {
  return (
    <div>
      <Banner
        image={{
          alt: "Be Inspired ",
          src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90aXZhdGVkJTIwYmFja2dyb3VuZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
        }}
        title="Be Inspired"
        introText="There is power in music"
        caption="Without music, our lives would be very boring!"
      />
    </div>
  );
};

export default BeInspired;
