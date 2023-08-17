import React, { useState } from "react";
import { TextWithImageProps } from "./TextWithImage.types";
import { ExpandableTextArea } from "../ExpandableTextArea/ExpandableTextArea";
import "./TextWithImages.css";

export const TextWithImage = ({
  bottomImage,
  content,
  excert,
  rightColumnImage,
  additionalImage, // Add the additionalImage prop here
  title,
}: TextWithImageProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleTextClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="text-grid-container">
      <div className="text">
        <h2
          className={`expandable-text-heading ${expanded ? "expanded" : ""}`}
          onClick={handleTextClick}
        >
          {title}
        </h2>
        <ExpandableTextArea
          content={<p className={expanded ? "expanded" : ""}>{content}</p>}
          excert={excert}
          expandable={true}
        />

        <img
          className={`bottom-image ${bottomImage ? "fade-in" : ""}`}
          {...bottomImage}
        />

<img
          className={`additional-image ${additionalImage ? "fade-in" : ""}`}
          {...additionalImage}
        />
      </div>

      <div className="right-column-image">
        <img
          className={`fade-in ${rightColumnImage ? "fade-in" : ""}`}
          {...rightColumnImage}
        />
      </div>

       
      
    </div>
  );
};
