import React, { useState, ChangeEvent } from "react";
import { useSpring, animated } from "react-spring";
import Banner from "../Components/Banner/Banner";
import "../Assets/styles/DonationsPage.css";
import Carousel from "../Components/Carousel/Carousel";
import ExpandableTextArea from "../Components/ExpandableTextArea/ExpandableTextArea";

interface DonationsProps {}

function Donations(props: DonationsProps) {
  const [amount, setAmount] = useState<string>("");

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleDonate = () => {
    console.log("Donating:", amount);

    alert(`Thank you for your donation of £${amount}!`);
  };

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

      <div className="charity-main-text">
        <div className="charity-grid-container">
          <div className="charity-text">
            <h2 className="expandable-text-heading">Guitars over Guns.</h2>
            <ExpandableTextArea
              content={
                <p>
                  We’re on a mission to empower young people through music and
                  mentorship. We are here to shift how young people think about
                  the world and their place in it. By sharing skills and
                  experience, rooted in our common passion for music, we inspire
                  our students to see a future that’s filled with potential –
                  and help them be excited and accountable. We cultivate an
                  enriching community bound by the arts. United by
                  community-based performances. Powered by high-quality
                  instruction. Inspired by meaningful connections between
                  professional musicians and our community’s youth. Because the
                  world changes when people find their voices – and have the
                  opportunity to be heard.
                </p>
              }
              excert={
                "Guitars Over Guns' unique curriculum emphasizes social-emotional \
              learning and outcomes through music and arts instruction. After each session, mentors assess \
              students' academic performance, school and program attendance, artistic progress, and peer \
              interactions. We utilize social-emotional learning measurements to evaluate key competencies \
              such as empathy, teamwork, initiative, responsibility, and problem solving."
              }
              expandable={true}
            />
            <img
            src="https://images.unsplash.com/photo-1487702232819-65ae859daf8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHBsYXlpbmclMjBpbnN0cnVtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
            alt="donation-caption"
            className="donation-caption"
            />
           

            
          </div>

          <div className="charity-image">
            <img
              src="https://images.unsplash.com/photo-1519640350407-953bc0614f4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGd1aXRhciUyMG92ZXIlMjBndW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
              alt="featured-charity"
            />
          </div>
       
        </div>

        <div>
          <button
            onClick={() =>
              window.open(
                "https://example.com/charity-page",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Visit Charity Page
          </button>
        </div>
      </div>
      <div className="donation-page-content">
        <h2 className="donation-page-heading">Make a Donation</h2>
        <label>
          Set Amount:
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
          />
        </label>
        <p>
          Or choose one of the predefined amounts:{" "}
          <button onClick={() => setAmount("10")}>£10</button>
          <button onClick={() => setAmount("25")}>£25</button>
          <button onClick={() => setAmount("50")}>£50</button>
        </p>
        <button onClick={handleDonate}>Donate Now</button>
      </div>
    </div>
  );
}

export default Donations;
