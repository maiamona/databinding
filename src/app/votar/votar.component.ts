import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-votar',
  templateUrl: './votar.component.html',
  styleUrls: ['./votar.component.css']
})
export class VotarComponent implements OnInit {
  @Input('voto1')vum: Array<string>;
  constructor() { }

  ngOnInit() {
  }

}
