import React, { useState } from "react";
import "./itemdetail.css"; // Import the CSS file for styling
import tickIcon from './tick.jpg'; // Assuming you have a tick icon in your assets

const ItemDetail = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false); // State to manage card flip

  if (!item) {
    return <div></div>;
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped); // Toggle the flip state
  };

  return (
    
    <div className={`card ${isFlipped ? "flipped" : ""}`}>
      <div className="card-inner">
        {/* Front side of the card */}
        <div className="card-front">
        <img
  src={item.attributes?.image_url || "https://m.media-amazon.com/images/I/41-T3GBGYUL.jpg"}
  alt={item.name}
  className="card-image"
  onError={(e) => e.target.src = 'fallback-image.jpg'} // Optional fallback
/>
console.log(item.attributes?.image_url);  // Check what URL is being passed


          <h2>{item.name}</h2>
          <p>Category: {item.category}</p>

          {/* "IN STOCK" indicator */}
          

          <button className="btn" onClick={handleFlip}>
            Details
          </button>
        </div>

        {/* Back side of the card */}
        <div className="card-back">
          <h2>{item.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
          <p>Brand: {item.brand}</p>
          <div className="in-stock">
            <img src={tickIcon} alt="In stock" />
            <span>IN Stock</span>
          </div>
          <button className="btn" onClick={handleFlip}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
