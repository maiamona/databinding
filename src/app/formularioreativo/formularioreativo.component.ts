import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularioreativo',
  templateUrl: './formularioreativo.component.html',
  styleUrls: ['./formularioreativo.component.css']
})
export class FormularioreativoComponent implements OnInit {
nome = new FormControl('Angular');
atualizarNome() {
  this.nome.setValue('Henrique');
}
  constructor() { }

  ngOnInit() {
  }

}
