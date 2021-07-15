import { Pessoa } from './../pessoa';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  // Utilizar Promise
  // recuparPessoas(): Promise<Pessoa[]>{
  //   return fetch("url")
  //     .then(res => res.json())
  //   .catch(err => Observable.throw(err.message))
  // }
  
  // Utilizar Observable
  // recuperarPessao(): Observable<Pessoa[]>{
  //   return this.http.get("url")
  //     .map(res => res.json())
  //     .catch(err => Observable.throw(err.message))
  //     .retry(3)
  //     .switchMap()
  //     .debounceTime(300);
  // }
  ngOnInit() {
  }

}
