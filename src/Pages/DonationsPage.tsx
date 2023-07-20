import React from "react";
import Banner from "../Components/Banner/Banner";

function Donations() {
  return (
    <div>
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
      </div>

      <div>
        <h1>Donate to Me</h1>
        <p>
          Your generous donations will make a significant impact and help us
          continue our mission. Together, we can make a difference in the lives
          of those in need.
        </p>
        <p>
          To donate, please choose one of the following options:
          <ul>
            <li>
              Online Donation: Visit our website and click on the "Donate"
              button.
            </li>
            <li>
              Bank Transfer: Transfer funds directly to our bank account.
              Contact us for more information.
            </li>
            <li>In-Person: Visit our office and make a donation in person.</li>
          </ul>
        </p>
        <p>Thank you for your support!</p>
      </div>
    </div>
  );
}

export default Donations;
