import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

const ShopItem = ({ match }) => {
  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    let response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    let data = await response.json();

    setItemData(data);
    setLoading(false);
  };

  return (
    <div className="shop-item">
      {loading && <div className='loading'>...Loading</div>}
      {itemData && <div className='shop-item-card'>
        <h3 className='item-title'>{itemData.title}</h3>
        <img className='item-img' src={itemData.image} alt={itemData.title} />
        <p className='item-price'>{`$ ${itemData.price}`}</p>
        <p className='item-description'>{itemData.description}</p>

      </div>}
    </div>
  );
};

export default ShopItem;
