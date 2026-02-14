// src/components/Home.jsx
import React, { useEffect, useState } from "react";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems =
      JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  return (
    <div>
      <h2>Saved Items</h2>

      {items.length === 0 ? (
        <p>No items found</p>
      ) : (
        items.map((item, index) => (
          <div key={index}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
