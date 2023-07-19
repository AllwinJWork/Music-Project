import React, { useState } from "react";
import "./ExpandableTextArea.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface ExpandableTextAreaProps {
  content: React.ReactNode;
  excert?: string;
  buttonLink?: {
    link: string;
    text: string;
  };
  expandable?: boolean;
}
const ExpandableTextArea = ({
  content,
  excert,
  buttonLink,
  expandable = true,
}: ExpandableTextAreaProps) => {
  const [isOpen, setIsOpen] = useState(!expandable);
  const navigate = useNavigate();
  return (
    <div>
      <div className="expandable-content">{isOpen ? content : excert}</div>
      {expandable && (
        <Button onClick={() => setIsOpen(!isOpen)} variant="text">
          {isOpen ? "read less..." : "read more..."}
        </Button>
      )}

      {buttonLink && (
        <Button onClick={() => navigate(buttonLink.link)} variant="outlined">
         {buttonLink.text}
        </Button>
      )}
    </div>
  );
};

export default ExpandableTextArea;
