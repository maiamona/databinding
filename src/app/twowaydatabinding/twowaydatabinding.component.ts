import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding',
  templateUrl: './twowaydatabinding.component.html',
  styleUrls: ['./twowaydatabinding.component.css']
})
export class TwowaydatabindingComponent implements OnInit {
  nomeCurso = 'Angular 6';
  tina = 'Antigo';
  constructor() { }

  ngOnInit() {
  }

}
