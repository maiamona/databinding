import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formularioreativogrupo',
  templateUrl: './formularioreativogrupo.component.html',
  styleUrls: ['./formularioreativogrupo.component.css']
})
export class FormularioreativogrupoComponent implements OnInit {

  constructor() { }
pessoaForm = new FormGroup(
  {
    primeiroNome: new FormControl(''),
    ultimoNome: new FormControl('')
  }
);
EnviarValores(){
  console.log(this.pessoaForm.value);
}
  ngOnInit() {
  }

}
