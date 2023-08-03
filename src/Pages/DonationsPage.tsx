import React, { useState, ChangeEvent } from "react";
import Banner from "../Components/Banner/Banner";
import "../Assets/styles/DonationsPage.css";

interface DonationsProps {}

function Donations(props: DonationsProps) {
  const [amount, setAmount] = useState<string>("");

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleDonate = () => {
    // Handle the donation submission here, e.g., sending the amount to a backend server
    // or any other desired action
    console.log("Donating:", amount);
    // Add your logic to process the donation here
    // For simplicity, this example only logs the amount to the console
    alert(`Thank you for your donation of £${amount}!`);
  };

  return (
    <div>
      <div className="artist-zone-container">
        <Banner
          image={{
            alt: "Home",
            src:
              "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
          title="Donation Page"
          introText="There is power in music"
          caption="Without music, our lives would be very boring!"
        />
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

      {/* Featured Charity Section */}
      
    </div>
  );
}

export default Donations;
