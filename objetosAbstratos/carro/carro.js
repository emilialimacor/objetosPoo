class Carro {
    constructor(marca, modelo, ano, cor) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.cor = cor;
    }

    ligar() {
      console.log(`${this.marca} ${this.modelo} ligou.`);
    }

    acelerar(velocidade) {
      console.log(`${this.marca} ${this.modelo} acelerou para ${velocidade} km/h.`);
    }

    frear() {
      console.log(`${this.marca} ${this.modelo} freou.`);
    }
  }

  // Exemplo de uso do objeto Carro
  const meuCarro = new Carro('Toyota', 'Corolla', 2022, 'prata');
  meuCarro.ligar();
  meuCarro.acelerar(60);
  meuCarro.frear();