import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  constructor() { }
@Output()
enviarVoto = new EventEmitter<boolean>();

foiVotado_filho = false;
@Input('cazevo')garcia: Array<string>;
vote(concorda: boolean) {
this.enviarVoto.emit(concorda);
this.foiVotado_filho = true;
}

  ngOnInit() {
  }

}
