import React, { useState, ChangeEvent } from "react";
import { useSpring, animated } from "react-spring";
import Banner from "../Components/Banner/Banner";
import "../Assets/styles/DonationsPage.css";
import Carousel from "../Components/Carousel/Carousel";

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
    <div className="donation-page black-page">
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

        <h1>Guitars Over Guns.</h1>
        <div className="carousel-container">
          <Carousel
            items={[
              "https://imagecdn.mightycause.com/3ef8cdfe-3636-4287-b517-c32825481b1b/",
              "https://www.etown.org/wp-content/uploads/2018/09/150402140743-cnnheroes-bernstein-group-exlarge-169-1.jpg",
              "https://pbs.twimg.com/media/DhwwIuqUYAAC5cO?format=jpg&name=medium",
            ]}
          />
        </div>
        <h2>What do they do?</h2>
        <p>
        Guitars Over Guns’ unique curriculum emphasizes social-emotional learning and outcomes through music and arts instruction. After each session, mentors assess students’ academic performance, school and program attendance, artistic progress and peer interactions. We use social-emotional learning measurements to evaluate key competencies such as empathy, teamwork, initiative, responsibility and problem solving. Recent evaluations indicate that over 90 percent of Guitars Over Guns students improved their academic performance, overall conduct and decision-making skills. These measurements are byproducts of a greater shift that is occurring in the way these young people think about the world and their place in it. 
        </p>
        <p>
          Learn more about their cause and how your donations can make a
          difference.
        </p>
        <button
          onClick={() => window.open("https://example.com/charity-page", "_blank", "noopener,noreferrer")}
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
