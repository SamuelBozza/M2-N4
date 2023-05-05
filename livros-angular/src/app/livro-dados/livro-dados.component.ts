import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro();
  autoresForm = '';
  editoras: Editora[] = [];

  constructor(
    private controleEditora: ControleEditoraService,
    private controleLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.editoras = this.controleEditora.getEditoras();
  }

  incluir() {
    this.livro.autores = this.autoresForm.split('\n');
    this.controleLivros.adicionar(this.livro);
    this.router.navigateByUrl('/lista');
  }
}
