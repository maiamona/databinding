import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {
  public aplicar_classe = true;
  public aplicarStyle = true;
  setarStyle() {
    const styles = {
      'background-color': this.aplicarStyle ? 'red' : 'green',
      'font-weight': this.aplicarStyle ? 'bold' : 'normal'
    };
    return styles;
  }
  constructor() { }

  ngOnInit() {
  }

}
