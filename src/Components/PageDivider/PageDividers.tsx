import React from "react";
import PageDivider, { PageDividerProps } from "./PageDivider";

const dividers = [
  {
    image: {
      src: "https://images.unsplash.com/photo-1610716632424-4d45990bcd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG11c2ljJTIwYXJ0aXN0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
      alt: "Divider image 1",
    },
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1636662254874-2e4832027ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNpbmdlcnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
      alt: "Divider gif 3",
    },
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1414839246800-1ed50eb905e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG11c2ljJTIwYXJ0aXN0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
      alt: "Divider image 2",
    },
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1550272407-7dc59342500e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3VpdGFyc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
      alt: "Divider gif 4",
    },
  },
] as PageDividerProps[];

const PageDividers = () => {
  return (
    <div className="page-divider-container">
      {dividers.map((divider, index) => (
        <PageDivider key={index} image={divider.image} />
      ))}
    </div>
  );
};

export default PageDividers;
