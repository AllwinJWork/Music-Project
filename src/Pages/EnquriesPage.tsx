import React, { FormEvent, useRef, useState } from "react";
import Banner from "../Components/Banner/Banner";
import emailjs from "emailjs-com";
import "../Assets/styles/EnquriesPage.css";

const Enquries: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_t0isqdi",
          "template_a11avsa",
          form.current,
          "fGWUuu6qQTliU3a1i"
        )
        .then((result) => {
          console.log(result.text);
          console.log("message has been sent");
          setShowPopup(true); // Show the pop-up after the email is sent
          setTimeout(() => {
            setShowPopup(false); // Hide the pop-up after a few seconds
            window.location.reload(); // Refresh the page
          }, 3000); // Adjust the time (in milliseconds) as per your preference
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div>
      <Banner
        image={{
          alt: "Be Inspired ",
          src: "https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
        }}
        title="Contact Us"
        introText="There is power in music"
        caption="Without music, our lives would be very boring!"
      />
      <h1 className="enquries-heading">Get in touch !</h1>
      <p className="enquries-text">Share your thoughts with us, any feedback is greatly appreciated!</p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name:</label>
        <input type="text" name="user_name" />
        <label>Email:</label>
        <input type="email" name="user_email" />
        <label>Your message:</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      {showPopup && (
        <div className="popup">
          <p>Message has been sent. Thank you!</p>
        </div>
      )}
    </div>
  );
};

export default Enquries;
