import React, { useState } from "react";
import Card from "./components/Card";
import "./app.css";
const App = () => {
  const products = [
    { id: 1, title: "телефон", image: "https://free-png.ru/wp-content/uploads/2022/01/free-png.ru-682.png" },           
    { id: 2, title: "беспроводные наушники", image: "https://png.pngtree.com/png-clipart/20250415/original/pngtree-wireless-headphone-png-image_20721964.png" },
    { id: 3, title: "умные часы", image: "https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png" },
  ];
  const [cart, setCart] = useState([]);

  const handleAddToCart = (id) => {
    const selectedProduct = products.find((product) => product.id === id);
    if (selectedProduct) {
      setCart([...cart, selectedProduct]);
    }
  };
  return (
    <div className="container">
      <h1 className="header">=магазин</h1>

      <div className="grid">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <div className="cart-section">
        <h2>Корзина ({cart.length})</h2>
        {cart.length === 0 ? (
          <p className="empty-text">Корзина пуста</p>
        ) : (
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default App;
