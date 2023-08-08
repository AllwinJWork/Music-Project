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
      <div >
        <h1 className="charity-main-header">Charity of the Month.</h1>
      </div>
      <div className="charity-main-text">
        <h2>Guitars over Guns.
        </h2>
        <ExpandableTextArea
          content={
            <p>
          Guitars Over Guns’ unique curriculum emphasizes social-emotional
          learning and outcomes through music and arts instruction. After each
          session, mentors assess students’ academic performance, school and
          program attendance, artistic progress and peer interactions. We use
          social-emotional learning measurements to evaluate key competencies
          such as empathy, teamwork, initiative, responsibility and problem
          solving.
        </p>
          }
          excert={
            "Find out more about them..."
      
          }
          expandable={true}
        />
       
        <p>
          Learn more about their cause and how your donations can make a
          difference.
        </p>
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
