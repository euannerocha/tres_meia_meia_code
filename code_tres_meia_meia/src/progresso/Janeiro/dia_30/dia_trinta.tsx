//Ideia
//Typescript + react: fazer um componente de carrinho de compas

import React from 'react';

interface Item {
  id: number;
  nome: string;
  preco: number;
}

interface CarrinhoDeComprasProps {
  itens: Item[];
}

const CarrinhoDeCompras: React.FC<CarrinhoDeComprasProps> = ({ itens }) => {
  const total = itens.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {itens.map((item) => (
          <li key={item.id}>
            {item.nome} - R${item.preco.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: R${total.toFixed(2)}</p>
    </div>
  );
};

export default CarrinhoDeCompras;
