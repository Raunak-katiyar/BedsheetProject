import React from "react";

const Catalogue = (props) => {

  const downloadImage = (url) => {
    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = url.split("/").pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  return (
    <div className="Catalogue">
      <img src={props.url} alt={props.title} loading="lazy" decoding="async"/>


      <span className="badge">Hot Deal</span>

      <div className="product-body">
        <h3>{props.title}</h3>
        <p className="subtitle">{props.subtitle}</p>

        <p className="price">
          <span className="new">₹799</span>
          <del>₹1999</del>
          <span className="off">60% off</span>
        </p>
        <p className="size">Size: <span>{props.size}</span></p>
        <button 
          className="btn"
          onClick={() => downloadImage(props.url)}
        >
          Download Image
        </button>
      </div>
    </div>
  );
};

export default Catalogue;
