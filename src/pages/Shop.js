import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [shopData, setShopData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Abort Controller for canceling the Fetch Request when the component using it unmounts
  const abortController = new AbortController();

  useEffect(() => {
    fetchData().catch((error) => console.log(error.message));
    return () => abortController.abort();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    let response = await fetch('https://fakestoreapi.com/products', {
      signal: abortController.signal,
    });
    let data = await response.json();

    setShopData(data);
    setLoading(false);

  };

  return (
    <div className="content shop">
      <h1>Shop</h1>
      {loading && (
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      <div className="shop-data">
        {shopData &&
          shopData.map((item) => (
            <div key={item.id} className="item-link">
              <Link to={`/shop/${item.id}`}>{item.title}</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shop;
