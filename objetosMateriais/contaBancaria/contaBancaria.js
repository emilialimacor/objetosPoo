class ContaBancaria {
    constructor(numeroConta, saldo, titular) {
      this.numeroConta = numeroConta;
      this.saldo = saldo;
      this.titular = titular;
    }

    exibirSaldo() {
      console.log(`Saldo da conta ${this.numeroConta}: $${this.saldo}`);
    }

    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de $${valor} realizado. Novo saldo: $${this.saldo}`);
    }

    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de $${valor} realizado. Novo saldo: $${this.saldo}`);
      } else {
        console.log('Saldo insuficiente para saque.');
      }
    }
  }

  // Exemplo de uso do objeto Conta Bancária
  const minhaConta = new ContaBancaria('12345', 1000, 'João Silva');
  minhaConta.exibirSaldo();
  minhaConta.depositar(500);
  minhaConta.sacar(200);