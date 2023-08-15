import React, { useState } from "react";
import { LeftTextWithImageProps } from "./LeftTextWithImages";
import { ExpandableTextArea } from "../ExpandableTextArea/ExpandableTextArea";

export const LeftTextWithImage = ({
  bottomImage,
  content,
  excert,
  leftColumnImage,
  title,
}: LeftTextWithImageProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleTextClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="text-grid-container">

      <div className="left-column-image">
        <img
          className={`fade-in ${leftColumnImage ? "fade-in" : ""}`}
          {...leftColumnImage}
        />
      </div>
      <div className="text">
        <h2
          className={`expandable-text-heading ${expanded ? "expanded" : ""}`}
          onClick={handleTextClick}
        >
          {title}
        </h2>
       <p>
      {excert}
       </p>
         <img
          className={`bottom-image ${bottomImage ? "fade-in" : ""}`}
          {...bottomImage}
        />
        <p>
          
        </p>
      </div>

    </div>
  );
};
