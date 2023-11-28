class Livro {
    constructor(titulo, autor, anoPublicacao, numPaginas) {
      this.titulo = titulo;
      this.autor = autor;
      this.anoPublicacao = anoPublicacao;
      this.numPaginas = numPaginas;
    }

    exibirDetalhes() {
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`Ano de Publicação: ${this.anoPublicacao}`);
      console.log(`Número de Páginas: ${this.numPaginas}`);
    }

    emprestarLivro() {
      console.log(`${this.titulo} emprestado com sucesso.`);
    }

    devolverLivro() {
      console.log(`${this.titulo} devolvido. Obrigado!`);
    }
  }

  // Exemplo de uso do objeto Livro
  const meuLivro = new Livro('JavaScript: The Good Parts', 'Douglas Crockford', 2008, 176);
  meuLivro.exibirDetalhes();
  meuLivro.emprestarLivro();
  meuLivro.devolverLivro();