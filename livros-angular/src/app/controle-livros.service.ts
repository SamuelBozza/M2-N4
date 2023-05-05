import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Livro[] = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Título 1',
      resumo: 'Resumo 1',
      autores: ['Autor A', 'Autor B'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Título 2',
      resumo: 'Resumo 2',
      autores: ['Autor A'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Título 3',
      resumo: 'Resumo 3',
      autores: ['Autor A', 'Autor B', 'Autor C'],
    },
  ];

  obterLivro = () => this.livros;

  adicionar = (livro: Livro) => {
    try {
      const codigo = this.livros[this.livros.length - 1].codigo + 1;
      livro.codigo = codigo;
    } catch {
      livro.codigo = 1;
    }
    this.livros.push(livro);
  };

  excluir = (num: number) => {
    const livroEncontrado = this.livros.findIndex(
      (livro) => num === livro.codigo
    );
    this.livros.splice(livroEncontrado, 1);
  };
}
