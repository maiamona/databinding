import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { PropetybindingComponent } from './propetybinding/propetybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { ArquivoComponent } from './arquivo/arquivo.component';
import { Arquivo2Component } from './arquivo2/arquivo2.component';
import { VotarComponent } from './votar/votar.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioreativoComponent } from './formularioreativo/formularioreativo.component';
import { FormularioreativogrupoComponent } from './formularioreativogrupo/formularioreativogrupo.component';
import { FormularioreativogrupoaninhadoComponent } from './formularioreativogrupoaninhado/formularioreativogrupoaninhado.component';
import { FormulariomodeloComponent } from './formulariomodelo/formulariomodelo.component';
import { DiretivaemailDirective } from './formulariomodelo/diretivaemail.directive';
import { ObservablesComponent } from './observables/observables.component';
import { PessoaComponent } from './pessoa/pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    PropetybindingComponent,
    EventbindingComponent,
    TwowaydatabindingComponent,
    ClassbindingComponent,
    InputComponent,
    OutputComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    ArquivoComponent,
    Arquivo2Component,
    VotarComponent,
    LifecycleComponent,
    FormularioComponent,
    FormularioreativoComponent,
    FormularioreativogrupoComponent,
    FormularioreativogrupoaninhadoComponent,
    FormulariomodeloComponent,
    DiretivaemailDirective,
    ObservablesComponent,
    PessoaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
