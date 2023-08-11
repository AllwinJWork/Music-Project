export interface TextWithImageProps {
    title: string;
    content: string;
    excert: string;
    bottomImage:Image;
    rightColumnImage:Image;
  }
  export interface Image 
  { src: string; alt: string}