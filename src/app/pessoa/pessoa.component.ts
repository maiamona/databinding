import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  constructor( private pessoaService: PessoaService) {

  }

  ngOnInit() {
    console.log('DI == ', this.pessoaService.recuperarPessoaLista());
  }

}
