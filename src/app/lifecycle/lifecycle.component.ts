import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {

  @Input('life')data : string;
  //O ciclo de vida segue justamente esta ordem
constructor(){
  console.log(`new - data is ${this.data}`);
}
ngOnChanges() {
  //Chamado antes de qualquer outro gancho de ciclo de vida. Use-o para injetar dependências, mas evite qualquer trabalho sério aqui.
  //Adicione '$ {implements OnChanges}' à classe.
  console.log(`ngOnChanges - data is ${this.data}`);
}
ngOnInit(){
  console.log(`ngOnInit - data is ${this.data}`);
  // apenas é chamado uma vez após ngOnChanges, utilizado principalmente para inicializar dados em um componente
}
ngDoCheck() {
  //Chamado sempre que as propriedades de entrada de um componente ou diretiva são verificadas. Use-o para estender a detecção de alterações executando uma verificação personalizada.
  //Adicione 'implementa DoCheck' à classe.
  console.log(`ngDoCheck`);
}
ngAfterContentInit() {
  //Chamado após ngOnInit quando o conteúdo do componente ou da diretiva foi inicializado.
  //Adicione 'implementa AfterContentInit' à classe.
  console.log(`ngAfterContentInit`);
}
ngAfterContentChecked() {
  //Chamado após cada verificação do conteúdo do componente ou da diretiva.
  //Adicione 'implementa AfterContentChecked' à classe.
  console.log(`ngAfterContentChecked`);
}
ngAfterViewInit() {
  //Chamado após ngAfterContentInit quando a visualização do componente foi inicializada. Aplica-se apenas a componentes.
  //Adicione 'implementa AfterViewInit' à classe.
  console.log(`ngAfterViewInit`);
}
ngAfterViewChecked() {
  //Chamado após cada verificação da visualização do componente. Aplica-se apenas a componentes.
  //Adicione 'implementa AfterViewChecked' à classe.
  console.log(`ngAfterViewChecked`);
}
ngOnDestroy() {
  //Chamado uma vez, antes que a instância seja destruída.
  //Adicione 'implementa OnDestroy' à classe.
  console.log(`ngOnDestroy`);
}
}
