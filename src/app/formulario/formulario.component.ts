import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
corFavoritaControl = new FormControl('Azul');
corFavorita = 'Vermelho';
  constructor() { }

  ngOnInit() {
  }

}
