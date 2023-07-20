// import "../Components/ArtistZone.css";
import "../Assets/styles/ArtistZonePage.css";
import artistsMain from "../Assets/ArtistZone/ArtistsMain.jpeg";

import Banner from "../Components/Banner/Banner";
import ImageIcons from "../Components/ImageIcons/ImageIcons";
import ExpandableTextArea from "../Components/ExpandableTextArea/ExpandableTextArea";



function ArtistZone() {
  const CLIENT_ID = "23898b37e61445eb834e6bf74f986dbe";
  const REDIRECT_URI = "http://localhost:3000/artist-auth";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <div className="artist-zone-container">
      <Banner
        image={{ alt: "Artist", src: artistsMain }}
        title="Artist Zone"
        introText="There is power in music"
        caption="Without music, our lives would be very boring!"
      />
      <div className="image-container">
        <h2 id="featured-artist-heading">Featured Artists.</h2>
        <ImageIcons />
      </div>
<h1>Find out more...</h1>
      <div className="artist-zone-info-container">
        <ExpandableTextArea
          content={
            <p>
              Music is something we all love and most definitely cannot live
              without. Music artists have an undeniable influence on society
              that transcends time and borders... Through their artistry, they
              possess the power to ignite emotions, inspire change, and shape
              cultural trends. Music artists often serve as the voice of a
              generation, addressing relevant social and political issues,
              fostering unity, and encouraging empathy among diverse
              communities. Their music can instill hope, challenge the status
              quo, and promote a sense of belonging. Moreover, artists have the
              ability to create iconic personas and aesthetics that permeate
              popular culture, influencing fashion, lifestyle, and even
              language. As a result, their impact on society extends far beyond
              the stage, leaving a lasting impression on the hearts and minds of
              people worldwide.
            </p>
          }
          excert={
            "With the rise of digital platforms and social media, independent artists now have greater opportunities to reach audiences without the need for major record labels. Many artists are self-releasing music and building their careers independently."
          }
          expandable={true}
        />

        
        <ExpandableTextArea
          content={
            <p>
              Music is something we all love and most definitely cannot live
              without. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum is a pseudo-Latin text used in web design, typography,
              layout, and printing in place of English to emphasize design
              elements over content. It's also called placeholder or filler
              text. It's a convenient tool for mock-ups. It helps to outline the
              visual elements of a document or presentation, e.g., typography,
              font, or layout. Lorem ipsum is mostly a part of a Latin text by
              the classical author and philosopher Cicero. Its words and letters
              have been changed by addition or removal, so to deliberately
              render its content nonsensical; it's not genuine, correct, or
              comprehensible Latin anymore. While lorem ipsum's still resembles
              classical Latin, it actually has no meaning whatsoever. As
              Cicero's text doesn't contain the letters K, W, or Z, alien to
              Latin, these, and others are often inserted randomly to mimic the
              typographic appearance of European languages, as are digraphs not
              to be found in the original. In a professional context, it often
              happens that private or corporate clients order a publication to
              be made and presented with the actual content still not being
              ready. Think of a news blog that's filled with content hourly on
              the day of going live. However, reviewers tend to be distracted
              byß comprehensible content, say, a random text copied from a
              newspaper or the internet. They are likely to focus on the text,
              disregarding the layout and its elements. Besides, random text
              risks being unintentionally humorous or offensive, an unacceptable
              risk in corporate environments. Lorem ipsum and its many variants
              have been employed since the early 1960s, and quite likely since
              the sixteenth century.
            </p>
          }
          expandable={false}
          buttonLink={{ link: "/learning", text: "Learn more" }}
        />

        <div className="artist-zone-auth-link">
          <h2>Spotify React</h2>
          <p>Let us broaden your horizons for you!</p>
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        </div>
      </div>
    </div>
  );
}

export default ArtistZone;
