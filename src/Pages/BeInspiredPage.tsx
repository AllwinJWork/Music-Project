import React from "react";
import Banner from "../Components/Banner/Banner";
import BgWithText from "../Components/BgWithText/BgWithText";
import { LeftTextWithImage } from "../Components/LeftTextWithImage/LeftTextImages";
import "../Assets/styles/BeInspiredPage.css";
import ExternakLink from "../Components/ExternalLinks/ExternalLinks";
import ExternalLink from "../Components/ExternalLinks/ExternalLinks";

const BeInspired: React.FC = () => {
  return (
    <div className="artist-zone-container">
      <Banner
        image={{
          alt: "Be Inspired ",
          src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90aXZhdGVkJTIwYmFja2dyb3VuZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
        }}
        title="Be Inspired"
        introText="Articles to inspire you."
        caption="Without music, our lives would be very boring!"
      />

      <BgWithText
        imageUrl={
          "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGljYWx8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=900&q=60"
        }
        text={
          "“I think music in itself is healing,” American musician Billy Joel once said. “It’s an explosive expression of humanity. It’s something we are all touched by. No matter what culture we’re from, everyone loves music.” Most of us would wholeheartedly agree with this statement, and it is this universal bond with music that has led researchers across the globe to investigate its therapeutic potential.“We have a such a deep connection to music because it is ‘hardwired’ in our brains and bodies,” Barbara Else, senior advisor of policy and research at the American Music Therapy Association told Medical News Today. “The elements of music – rhythm, melody, etc. – are echoed in our physiology, functioning and being.”Given the deep connection we have with music, it is perhaps unsurprising that numerous studies have shown it can benefit our mental health. A 2011 study by researchers from McGill University in Canada found that listening to music increases the amount of dopamine produced in the brain – a mood-enhancing chemical, making it a feasible treatment for depression."
        }
        heading={"MedicalNewsToday"}
        additionalText={"Learn"}

      />
      <div className="be-inspired-button">
     <ExternalLink externalLink={"https://google.com"}/>
     </div>

     <BgWithText
        imageUrl={
          "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGljYWx8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=900&q=60"
        }
        text={
          "“I think music in itself is healing,” American musician Billy Joel once said. “It’s an explosive expression of humanity. It’s something we are all touched by. No matter what culture we’re from, everyone loves music.” Most of us would wholeheartedly agree with this statement, and it is this universal bond with music that has led researchers across the globe to investigate its therapeutic potential.“We have a such a deep connection to music because it is ‘hardwired’ in our brains and bodies,” Barbara Else, senior advisor of policy and research at the American Music Therapy Association told Medical News Today. “The elements of music – rhythm, melody, etc. – are echoed in our physiology, functioning and being.”Given the deep connection we have with music, it is perhaps unsurprising that numerous studies have shown it can benefit our mental health. A 2011 study by researchers from McGill University in Canada found that listening to music increases the amount of dopamine produced in the brain – a mood-enhancing chemical, making it a feasible treatment for depression."
        }
        heading={"MedicalNewsToday"}
        additionalText={"Learn"}

      />
      <div className="be-inspired-button">
     <ExternalLink externalLink={"https://google.com"}/>
     </div>

     <BgWithText
        imageUrl={
          "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGljYWx8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=900&q=60"
        }
        text={
          "“I think music in itself is healing,” American musician Billy Joel once said. “It’s an explosive expression of humanity. It’s something we are all touched by. No matter what culture we’re from, everyone loves music.” Most of us would wholeheartedly agree with this statement, and it is this universal bond with music that has led researchers across the globe to investigate its therapeutic potential.“We have a such a deep connection to music because it is ‘hardwired’ in our brains and bodies,” Barbara Else, senior advisor of policy and research at the American Music Therapy Association told Medical News Today. “The elements of music – rhythm, melody, etc. – are echoed in our physiology, functioning and being.”Given the deep connection we have with music, it is perhaps unsurprising that numerous studies have shown it can benefit our mental health. A 2011 study by researchers from McGill University in Canada found that listening to music increases the amount of dopamine produced in the brain – a mood-enhancing chemical, making it a feasible treatment for depression."
        }
        heading={"MedicalNewsToday"}
        additionalText={"Learn"}

      />
      <div className="be-inspired-button">
     <ExternalLink externalLink={"https://google.com"}/>
     </div>
        
      </div>

  );
};

export default BeInspired;
