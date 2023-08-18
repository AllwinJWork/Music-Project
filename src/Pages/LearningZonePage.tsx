import React from "react";
import BgWithText from "../Components/BgWithText/BgWithText";
import Banner from "../Components/Banner/Banner";
import "../Assets/styles/LearningZonePage.css";
import { LeftTextWithImage } from "../Components/LeftTextWithImage/LeftTextImages";
import { RightTextWithImage } from "../Components/RightText&Image/RightTextImage";

const LearningZone = () => {
  return (
    <div className="artist-zone-container">
      <Banner
        image={{
          alt: "Learning Zone",
          src: "https://images.unsplash.com/photo-1470429346530-f5590bff80d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        }}
        title="Learning Zone"
        introText="There is power in music"
        caption="Without music, our lives would be very boring!"
      />

      <BgWithText
        imageUrl={
          "https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2t8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=900&q=60"
        }
        text={"jdhfjdshfjdshfjshdfhjs"}
        heading={"What is music?"}
      />

      <div className="learning">
        <LeftTextWithImage
          title={"The Mind."}
          content={
            "Music is generally defined as the art of arranging sound to create some combination of form, harmony, melody, rhythm, or otherwise expressive content. Definitions of music vary depending on culture, though it is an aspect of all human societies and a cultural universal. While scholars agree that music is defined by a few specific elements, there is no consensus on their precise definitions. The creation of music is commonly divided into musical composition, musical improvisation, and musical performance, though the topic itself extends into academic disciplines, criticism, philosophy, and psychology. Music may be performed or improvised using a vast range of instruments, including the human voice."
          }
          excert={
            "Through arts-based mentoring, Guitars Over Guns is addressing three primary, interrelated challenges facing youth from vulnerable communities..."
          }
          leftColumnImage={{
            alt: "left-column-image",
            src: "https://plus.unsplash.com/premium_photo-1689177357836-52c9d90d3d6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGhlJTIwbWluZHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
          }}
          addtionalText={
            "We all sway to music that touches our hearts. Finding someone with the same taste is enthralling. Discussing topics related to music for hours is something we cherish. It has the potential to reunite the world and forget all boundaries. These facts will prove that music has the power of healing and drawing people closer."
          }
        />
        <RightTextWithImage
          title={"The Body."}
          content={
            "Singing, playing instruments and even dancing can improve pain tolerance. Researchers found that the physical movement used to create music provides a synchronized activity that significantly heightens the pain threshold. Music therapists are specifically trained clinicians that use music to address goals such as pain reduction."
          }
          excert={
            "Because music is often an enjoyable activity, it can activate the release of endorphins, which creates a general feeling of well-being. Music therapy can successfully reduce post-operative pain, physical tension and influence heart and breathing rates. Fast music tends to increase pulse rate and blood pressure."
          }
          rightColumnImage={{
            alt: "right-column-image",
            src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGhlJTIwbWluZHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
          }}
        />
        <LeftTextWithImage
          title={"On Society."}
          content={
            "Music is generally defined as the art of arranging sound to create some combination of form, harmony, melody, rhythm, or otherwise expressive content. Definitions of music vary depending on culture, though it is an aspect of all human societies and a cultural universal. While scholars agree that music is defined by a few specific elements, there is no consensus on their precise definitions. The creation of music is commonly divided into musical composition, musical improvisation, and musical performance, though the topic itself extends into academic disciplines, criticism, philosophy, and psychology. Music may be performed or improvised using a vast range of instruments, including the human voice."
          }
          excert={
            "Through arts-based mentoring, Guitars Over Guns is addressing three primary, interrelated challenges facing youth from vulnerable communities..."
          }
          leftColumnImage={{
            alt: "left-column-image",
            src: "https://images.unsplash.com/photo-1604506906756-ef4c8eff1590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvY2lldHl8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=900&q=60",
          }}
          addtionalText={
            "We all sway to music that touches our hearts. Finding someone with the same taste is enthralling. Discussing topics related to music for hours is something we cherish. It has the potential to reunite the world and forget all boundaries. These facts will prove that music has the power of healing and drawing people closer."
          }
        />

        <RightTextWithImage
          title={"On the Economy."}
          content={
            "Singing, playing instruments and even dancing can improve pain tolerance. Researchers found that the physical movement used to create music provides a synchronized activity that significantly heightens the pain threshold. Music therapists are specifically trained clinicians that use music to address goals such as pain reduction."
          }
          excert={
            "Because music is often an enjoyable activity, it can activate the release of endorphins, which creates a general feeling of well-being. Music therapy can successfully reduce post-operative pain, physical tension and influence heart and breathing rates. Fast music tends to increase pulse rate and blood pressure."
          }
          rightColumnImage={{
            alt: "right-column-image",
            src: "https://plus.unsplash.com/premium_photo-1679171644618-c8c77a9ed6c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVjb25vbXl8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=900&q=60",
          }}
        />
      </div>
    </div>
  );
};

export default LearningZone;
