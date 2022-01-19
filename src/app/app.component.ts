import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Binding';
  curso = 'Angular 6';
  comprar = 'principal';
  Votantes = ['Jane', 'Mona', 'Bastos', 'Menito', 'Mixa', 'Lucy'];
  life = 'Gancho de vida';
  concordo = 0;
  naoConcordo = 0;

  foiVotado(concorda: boolean) {
concorda ? this.concordo++ : this.naoConcordo++;

  }
}
