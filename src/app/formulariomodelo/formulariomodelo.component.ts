import { Pessoa } from './../pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulariomodelo',
  templateUrl: './formulariomodelo.component.html',
  styleUrls: ['./formulariomodelo.component.css']
})
export class FormulariomodeloComponent implements OnInit {
pessoa = new Pessoa(1, 'Mona', 34, 'Masculino', 'henrique@udemy.com');
enviado = false;
enviar() {
  this.enviado = true;
  }
  novaPessoa() {
    this.pessoa = new Pessoa(2, 'Lucy', 24, 'Femenino', 'camila@udemy.com');
  }
// public get value() : string {
//   return
// }
get diagnostico() {
  return JSON.stringify(this.pessoa);
}

constructor() { }

  ngOnInit() {
  }

}
