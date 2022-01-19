import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arquivo',
  templateUrl: './arquivo.component.html',
  styleUrls: ['./arquivo.component.css']
})
export class ArquivoComponent implements OnInit {
  @Input('tabsim')um: Array<number>;

  constructor() { }

  ngOnInit() {
  }

}
