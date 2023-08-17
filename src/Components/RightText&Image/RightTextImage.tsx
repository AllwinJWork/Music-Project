import { RightTextWithImageProps } from "./RightTextImages";



export const RightTextWithImage = ({
  content,
  excert,
  rightColumnImage,
  title,
}: RightTextWithImageProps) => {
  return (
    <div className="text-grid-container">
     
      <div className="right-text">
        <h2 className="expandable-text-heading">{title}</h2>
        <p className="expandable-content">{content}</p>
        <p className="expandable-content">{excert}</p>
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