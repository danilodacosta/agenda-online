import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit, OnDestroy {


  public idEmpreendimento: number;

  constructor() {}

  ngOnInit() {}

  public setIdEmpreendimento(event: number): void {
 //   console.log('agendamento :' + event);
   // this.idEmpreendimento = event;
  }

  ngOnDestroy() {}

}
