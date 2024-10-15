// src/components/ItemCard.js
import React from 'react';
import './itemcard.css'; // Ensure this matches the actual file name

const ItemCard = ({ item }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="banner-image" style={{ backgroundImage: `url(${item.attributes?.image_url})` }}></div>
        <h1>{item.name}</h1>
        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
      </div>
      <div className="button-wrapper">
        <button className="btn outline">DETAILS</button>
        <button className="btn fill">BUY NOW</button>
      </div>
    </div>
  );
};

export default ItemCard;
