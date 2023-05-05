import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  editoras: Array<Editora> = [
    {
      nome: 'Editora A',
      codEditora: 1,
    },
    {
      nome: 'Editora B',
      codEditora: 2,
    },
    {
      nome: 'Editora C',
      codEditora: 3,
    },
  ];

  getNomeEditora(codigoEditora: number) {
    let editora: Editora[] = this.editoras.filter((editora: Editora) => {
      return editora.codEditora == codigoEditora;
    });
    return editora[0].nome;
  }

  getEditoras() {
    return this.editoras;
  }
}
