import React from 'react';
import './card.css';

const Card = (props) => {
  const { id, title, image, onAddToCart } = props;

  return (
    <div className="card">
      <img src={image} alt={title} className="image" />
      <h3 className="product-title">{title}</h3>
      <button className="button" onClick={() => onAddToCart(id)}>
        Добавить в корзину
      </button>
    </div>
  );
};

export default Card;
