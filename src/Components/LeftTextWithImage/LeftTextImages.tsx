
import { LeftTextWithImageProps } from "./LeftTextWithImages";


export const LeftTextWithImage = ({
  bottomImage,
  content,
  excert,
  leftColumnImage,
  title,
}: LeftTextWithImageProps) => {
  return (
    <div className="text-grid-container">
      <div className="left-column-image">
        <img
          className={`fade-in ${leftColumnImage ? "fade-in" : ""}`}
          {...leftColumnImage}
        />
      </div>
      <div className="left-text">
        <h2 className="expandable-text-heading">{title}</h2>
        <p className="expandable-content">{content}</p>
        <p className="expandable-content">{excert}</p>
      </div>
    </div>
  );
};
