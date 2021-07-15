import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
@Output() 
enviarVoto = new EventEmitter<boolean>();

foiVotado_filho = false;
vote(concorda: boolean){
this.enviarVoto.emit(concorda);
this.foiVotado_filho = true;
}
@Input('cazevo')garcia: Array<string>;
  constructor() { }

  ngOnInit() {
  }

}
