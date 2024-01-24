//Ideia
//TypeScript: Criar um tipo para representar um objeto do mundo real (ex: carro, pessoa) e utilizar seus atributos.

interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    cor: string;
    velocidadeAtual: number;
    
    acelerar(velocidade: number): void;
    frear(): void;
}

class MeuCarro implements Carro {
    marca: string;
    modelo: string;
    ano: number;
    cor: string;
    velocidadeAtual: number;

    constructor(marca: string, modelo: string, ano: number, cor: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeAtual = 0;
    }

    acelerar(velocidade: number) {
        this.velocidadeAtual += velocidade;
        console.log(`Acelerando para ${this.velocidadeAtual} km/h`);
    }

    frear() {
        this.velocidadeAtual = 0;
        console.log('Carro parado');
    }
}

const meuCarro = new MeuCarro('Ford', 'Focus', 2022, 'Preto');
console.log(`Meu carro é um ${meuCarro.marca} ${meuCarro.modelo} ${meuCarro.ano} ${meuCarro.cor}.`);

meuCarro.acelerar(50);
meuCarro.frear();