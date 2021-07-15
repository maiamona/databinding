import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propetybinding',
  templateUrl: './propetybinding.component.html',
  styleUrls: ['./propetybinding.component.css']
})
export class PropetybindingComponent implements OnInit {
public urlimg: string = 'http://www.fundosanimais.com/Imagens/cavalos.jpg';
  constructor() { }

  ngOnInit() {
  }

}
