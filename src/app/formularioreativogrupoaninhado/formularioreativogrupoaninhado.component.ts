import { Validacao } from './../validators';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularioreativogrupoaninhado',
  templateUrl: './formularioreativogrupoaninhado.component.html',
  styleUrls: ['./formularioreativogrupoaninhado.component.css']
})
export class FormularioreativogrupoaninhadoComponent implements OnInit {
  // dadosPessoais = new FormGroup(
  //   {
  //     nome: new FormControl(''),
  //     sobreNome: new FormControl(''),
  //     endereco: new FormGroup({
  //       rua: new FormControl(''),
  //       cidade: new FormControl(''),
  //       estado: new FormControl(''),
  //       cep: new FormControl('')
  //     })
  //   });
  dadosPessoais: FormGroup;
  mostrarValores() {
    console.log(this.dadosPessoais.value);
  }
  constructor(private fb: FormBuilder) { }
  
 get f(){return this.dadosPessoais.controls}
  ngOnInit() {
    this.dadosPessoais = this.fb.group(
      {
        nome: ['', Validators.required, Validators.maxLength(3)],
        sobreNome: ['', Validators.required, Validators.maxLength(3)],
        email: ['', [Validators.required, Validators.email, Validacao.validarEmail]],
        endereco: this.fb.group({
          rua: [''],
          cidade: [''],
          estado: [''],
          cep: ['']
        })
      });
  }

}
