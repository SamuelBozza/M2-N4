import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent implements OnInit {
  editoras: Editora[] = [];
  livros: Livro[] = [];

  constructor(
    private controleEditora: ControleEditoraService,
    private controleLivros: ControleLivrosService
  ) {}

  ngOnInit() {
    this.editoras = this.controleEditora.getEditoras();
    this.livros = this.controleLivros.obterLivro();
  }

  excluir(codigo: number) {
    this.controleLivros.excluir(codigo);
    this.livros = this.controleLivros.obterLivro();
  }

  obternome(codEditora: number): string {
    return this.controleEditora.getNomeEditora(codEditora);
  }
}
