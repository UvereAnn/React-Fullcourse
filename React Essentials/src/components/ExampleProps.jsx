import React from "react";
import componentsImage from "../images/image1.png";

const ExampleProps = ({ image, title, description }) => {
  return (
    <div>
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </div>
  );
};

export default ExampleProps;
