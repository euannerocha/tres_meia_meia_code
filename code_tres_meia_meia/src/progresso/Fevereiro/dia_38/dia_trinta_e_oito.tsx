// src/ListaDeCompras.tsx

import React, { useState } from 'react';

interface Item {
    id: number;
    nome: string;
    comprado: boolean;
}

const ListaDeCompras: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [novoItem, setNovoItem] = useState<string>('');

    const adicionarItem = () => {
        if (novoItem.trim() !== '') {
            const newItem: Item = {
                id: Date.now(),
                nome: novoItem,
                comprado: false
            };
            setItems([...items, newItem]);
            setNovoItem('');
        }
    };

    const removerItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    };

    const marcarComprado = (id: number) => {
        setItems(items.map(item => {
            if (item.id === id) {
                return { ...item, comprado: !item.comprado };
            }
            return item;
        }));
    };

    return (
        <div>
            <h2>Lista de Compras</h2>
            <input
                type="text"
                placeholder="Digite um item"
                value={novoItem}
                onChange={e => setNovoItem(e.target.value)}
            />
            <button onClick={adicionarItem}>Adicionar</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <span style={{ textDecoration: item.comprado ? 'line-through' : 'none' }}>
                            {item.nome}
                        </span>
                        <button onClick={() => marcarComprado(item.id)}>
                            {item.comprado ? 'Desmarcar' : 'Marcar'}
                        </button>
                        <button onClick={() => removerItem(item.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaDeCompras;
