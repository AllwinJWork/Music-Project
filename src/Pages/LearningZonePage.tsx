import React from "react";
import BgWithText from "../Components/BgWithText/BgWithText";
import { LeftTextWithImage } from "../Components/LeftTextWithImage/LeftTextImages";
import Banner from "../Components/Banner/Banner";
import { RightTextWithImage } from "../Components/RightText&Image/RightTextImage";

const LearningZone: React.FC = () => {
  return (
    <div className="artist-zone-container">
      <Banner
        image={{
          alt: "Learing Zone",
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
        heading={"hdjsahdjahd"}
      />

<LeftTextWithImage
          title={"The Mind."}
          content={
            "Music is generally defined as the art of arranging sound to create some combination of form, harmony, melody, rhythm, or otherwise expressive content.[1][2][3] Definitions of music vary depending on culture,[4] though it is an aspect of all human societies and a cultural universal.[5] While scholars agree that music is defined by a few specific elements, there is no consensus on their precise definitions.[6] The creation of music is commonly divided into musical composition, musical improvisation, and musical performance,[7] though the topic itself extends into academic disciplines, criticism, philosophy, and psychology. Music may be performed or improvised using a vast range of instruments, including the human voice."
          }
          excert={
            "Through arts-based mentoring, Guitars Over Guns is addressing three primary, interrelated challenges facing youth from vulnerable communities..."
          }
          leftColumnImage={{
            alt: "left-column-image",
            src: "https://plus.unsplash.com/premium_photo-1689177357836-52c9d90d3d6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGhlJTIwbWluZHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
          }}
        />
      
    </div>
  );
};

export default LearningZone;
