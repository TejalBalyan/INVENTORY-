// src/components/ItemList.js
import React, { useEffect, useState } from 'react';
import { fetchItems } from '../api';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await fetchItems();
        setItems(data);
      } catch (error) {
        setError(error);
      }
    };
    getItems();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
