import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [shopData, setShopData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    let response = await fetch('https://fakestoreapi.com/products');
    let data = await response.json();

    setShopData(data);
    setLoading(false);
  };

  return (
    <div className='content shop'>
      <h1>Shop</h1>
      {loading && <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
      <div className="shop-data">
        {shopData &&
          shopData.map((item) => (
            <div key={item.id} className='item-link'>
              <Link to={`/shop/${item.id}`}>{item.title}</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shop;
