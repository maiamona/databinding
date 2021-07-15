import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arquivo2',
  templateUrl: './arquivo2.component.html',
  styleUrls: ['./arquivo2.component.css']
})
export class Arquivo2Component implements OnInit {
  @Input('tabnao')dois: Array<number>;
  constructor() { }

  ngOnInit() {
  }

}
