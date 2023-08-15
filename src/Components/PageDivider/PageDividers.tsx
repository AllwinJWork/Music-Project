import React from "react";
import PageDivider, { PageDividerProps } from "./PageDivider"; 


const dividers = [
  {
    image: {
      src:
        "https://images.unsplash.com/photo-1610716632424-4d45990bcd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG11c2ljJTIwYXJ0aXN0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
      alt: "Divider image 1",
    },
  },
  {
    image: {
      src:
        "https://media4.giphy.com/media/3o7bu4hSl8nZlJRNks/200w.webp?cid=ecf05e47wde3l4t1t7ja4n6zg3jqfs05q28r9wjv707t8szq&ep=v1_gifs_search&rid=200w.webp&ct=g",
      alt: "Divider gif 1",
    },
  },
  {
    image: {
      src:
        "https://images.unsplash.com/photo-1414839246800-1ed50eb905e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG11c2ljJTIwYXJ0aXN0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
      alt: "Divider image 2",
    },
  },
  /*{
    image: {
      src:
        "https://media0.giphy.com/media/sBikoeGRyOrK0/200.webp?cid=ecf05e47d03tc473uf81166fktxn1i1fswg5iarvog60o8cz&ep=v1_gifs_search&rid=200.webp&ct=g",
        alt: "Divider gif 2",
    },

  },
  {
    image: {
      src:
        "https://images.unsplash.com/photo-1598387077659-74a3ea1370b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fG11c2ljJTIwYXJ0aXN0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
      alt: "Divider image 3",
    },
  },
  {
    image: {
      src:
        "https://images.unsplash.com/photo-1598387077659-74a3ea1370b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fG11c2ljJTIwYXJ0aXN0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
      alt: "Divider gif 3",
    },
  },
  */

  
  
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
