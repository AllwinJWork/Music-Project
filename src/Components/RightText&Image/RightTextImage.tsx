import { RightTextWithImageProps } from "./RightTextImages";
import "./RightTextWithImages.css";



export const RightTextWithImage = ({
  content,
  excert,
  rightColumnImage,
  title,
}: RightTextWithImageProps) => {
  return (
    <div className="text-grid-container">
     
      <div className="right-text">
        <h2 className="right-text-heading">{title}</h2>
        <p className="right-text-content">{content}</p>
        <p className="right-text content-content">{excert}</p>
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