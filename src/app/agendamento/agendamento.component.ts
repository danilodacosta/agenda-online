import { PrestadorService } from './../prestador.service';
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Prestador } from '../shared/prestador.model';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css'],
  providers: [PrestadorService]
})
export class AgendamentoComponent implements OnInit, OnDestroy {

  public prestadores: any = [];

  constructor( private prestadorService: PrestadorService) { }

  ngOnInit() {
    this.prestadorService.pesquisaPrestadores()
    .subscribe((prestadores: any[]) =>  this.prestadores = prestadores);
  }
  ngOnDestroy() {
  }

}
