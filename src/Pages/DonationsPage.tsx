import React from "react";
import Banner from "../Components/Banner/Banner";
import { TextWithImage } from "../Components/TextWithImage/TextWithImage";
import PageDividers from "../Components/PageDivider/PageDividers";
import { LeftTextWithImage } from "../Components/LeftTextWithImage/LeftTextImages";
import { RightTextWithImage } from "../Components/RightText&Image/RightTextImage";
import "../Assets/styles/DonationsPage.css";

interface DonationsProps {}

const Donations: React.FC<DonationsProps> = (props) => {
  return (
    <div className="artist-zone-container">
      <Banner
        image={{
          alt: "Home",
          src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        }}
        title="Donation Page"
        introText="There is power in music"
        caption="Without music, our lives would be very boring!"
      />

      <div className="right-text-container">
        {/* First TextWithImage Component */}
        <TextWithImage
          title={"Guitars over Guns."}
          content={
            "  We’re on a mission to empower young people through music and"
          }
          excert={
            "Guitars Over Guns' unique curriculum emphasizes social-emotional learning and outcomes through music and arts instruction..."
          }
          bottomImage={{
            alt: "bottom-image",
            src: "https://images.unsplash.com/photo-1487702232819-65ae859daf8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHBsYXlpbmclMjBpbnN0cnVtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60",
          }}
          rightColumnImage={{
            alt: "right-column-image",
            src: "https://images.unsplash.com/photo-1556848798-ee649b672584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2luZ2VyfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
          }}
          additionalImage={{
            alt: "additional-image",
            src: "https://images.unsplash.com/photo-1527735095040-147bffb4cede?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
          }}
        />
        <div className="page-divider">
          <PageDividers />
        </div>

        {/* Second TextWithImage Component */}
        <LeftTextWithImage
          title={"Their Work."}
          content={
            "Through arts-based mentoring, Guitars Over Guns is addressing three primary, interrelated challenges facing youth from vulnerable communities in Miami and Chicago: the need for positive adult relationships, the lack of access to high-quality arts programming, and the cycle of disenfranchisement, apathy and violence."
          }
          excert={
            "Through arts-based mentoring, Guitars Over Guns is addressing three primary, interrelated challenges facing youth from vulnerable communities..."
          }
          leftColumnImage={{
            alt: "left-column-image",
            src: "https://images.unsplash.com/photo-1586611637670-bd7d9cae86b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhcml0YWJsZSUyMGRlZWRzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
          }}
        />

        {/* Third TextWithImage Component */}
        <RightTextWithImage
          title={"Their Purpose."}
          content={
            "For Guitars Over Guns, the key to unlocking that capacity is a caring mentor who connects with them through the transformational power of music. We leverage music as a vehicle for expression, a gateway to dignity, a universal language and a bridge to connect youth to a mentor that can help unlock their potential, empowering them to break the cycles that often dominate the realities of their environment. Our students have a positive sense of self, build capacity to redefine and achieve success both personally and academically, and take accountability for their future."
          }
          excert={
            "Through arts-based mentoring, Guitars Over Guns is addressing three primary, interrelated challenges facing youth from vulnerable communities..."
          }
          rightColumnImage={{
            alt: "right-column-image",
            src: "https://images.unsplash.com/photo-1583848697106-f0339cbb6ab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2luZHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
          }}
        />

        <LeftTextWithImage
          title={"Their Work."}
          content={
            "For Guitars Over Guns, the key to unlocking that capacity is a caring mentor who connects with them through the transformational power of music. We leverage music as a vehicle for expression, a gateway to dignity, a universal language and a bridge to connect youth to a mentor that can help unlock their potential, empowering them to break the cycles that often dominate the realities of their environment. Our students have a positive sense of self, build capacity to redefine and achieve success both personally and academically, and take accountability for their future."
          }
          excert={
            "Through arts-based mentoring, Guitars Over Guns is addressing three primary, interrelated challenges facing youth from vulnerable communities..."
          }
          leftColumnImage={{
            alt: "left-column-image",
            src: "https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
          }}
        />
      
      </div>
    </div>
  );
};

export default Donations;
