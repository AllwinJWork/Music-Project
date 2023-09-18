
import React from "react";
import "./ExternalLinks.css"
import { Link } from "react-router-dom";

interface ExternalLinkProps {
  externalLink: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ externalLink }) => {
  return (
    <Link to="google.com">
          <button className="button-50">Learn more...</button>
        </Link>
  );
};

export default ExternalLink;
