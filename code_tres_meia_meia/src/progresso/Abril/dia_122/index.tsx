// Problema: Implementação de uma Fila Prioritária

// Implemente uma fila prioritária em TypeScript que suporte as seguintes operações:

// enqueue(item: T, priority: number): Adiciona um item à fila com uma prioridade específica.
// dequeue(): T | undefined: Remove e retorna o item com a maior prioridade da fila.
// isEmpty(): boolean: Verifica se a fila está vazia.
// Objetivo:

// Implementar uma fila prioritária que mantenha os itens ordenados por prioridade.

class PriorityQueue<T> {
  private items: { item: T; priority: number }[];

  constructor() {
    this.items = [];
  }

  enqueue(item: T, priority: number): void {
    this.items.push({ item, priority });
    this.items.sort((a, b) => b.priority - a.priority);
  }

  dequeue(): T | undefined {
    return this.items.shift()?.item;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const priorityQueue = new PriorityQueue<number>();

priorityQueue.enqueue(10, 2);
priorityQueue.enqueue(20, 1);
priorityQueue.enqueue(30, 3);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.isEmpty());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.isEmpty());
