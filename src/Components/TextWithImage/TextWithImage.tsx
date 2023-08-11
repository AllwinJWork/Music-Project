import React from "react";
import { TextWithImageProps } from "./TextWithImage.types";
import { ExpandableTextArea } from "../ExpandableTextArea/ExpandableTextArea";
export const TextWithImage = ({
  bottomImage,
  content,
  excert,
  rightColumnImage,
  title,
}: TextWithImageProps) => {
  return (
    <div className="charity-grid-container">
    <div className="charity-text">
      <h2 className="expandable-text-heading">{title}</h2>
      <ExpandableTextArea
        content={<p>{content}</p>}
        excert={excert}
        expandable={true}
      />
      <img className="bottom-image" {...bottomImage} />

      <div className="right-column-image">
        <img {...rightColumnImage} />
      </div>
    </div>
    </div>
  );
};


