class Usuario {
    constructor(nome, email, senha) {
      this.nome = nome;
      this.email = email;
      this.senha = senha;
    }

    realizarLogin() {
      console.log(`${this.nome} fez login.`);
    }

    alterarSenha(novaSenha) {
      this.senha = novaSenha;
      console.log('Senha alterada com sucesso.');
    }

    enviarMensagem(mensagem) {
      console.log(`${this.nome} enviou a mensagem: "${mensagem}"`);
    }
  }

  // Exemplo de uso do objeto Usuário
  const novoUsuario = new Usuario('Alice', 'alice@example.com', 'senha123');
  novoUsuario.realizarLogin();
  novoUsuario.alterarSenha('novaSenha456');
  novoUsuario.enviarMensagem('Olá, como você está?');