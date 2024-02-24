//react e ts: Desenvolver um componente de carrinho de compras persistente usando o Local Storage.

import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const newCartItems = [...cartItems, product];
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - R${item.price}
          </li>
        ))}
      </ul>
      <button onClick={() => addToCart({ id: 1, name: 'Produto 1', price: 10 })}>
        Adicionar Produto 1
      </button>
      <button onClick={() => addToCart({ id: 2, name: 'Produto 2', price: 20 })}>
        Adicionar Produto 2
      </button>
      <button onClick={clearCart}>Limpar Carrinho</button>
    </div>
  );
};

export default ShoppingCart;
