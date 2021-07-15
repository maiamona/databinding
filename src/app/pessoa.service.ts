import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';
// @Injectable - para utilizarmos injeção de dependencia onde quizermos
@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private logService:LogService) { }
  recuperarPessoaLista(): Array<Pessoa>{
    let pessoaLista: Array<Pessoa> = [];
    pessoaLista.push(new Pessoa(1, "maiamona", 34, "Masculino", "manomona2@hotmail.com"));
    pessoaLista.push(new Pessoa(1, "Tina", 32, "Femenino", "clementina@gmail.com"));
    return pessoaLista;
  }
}
