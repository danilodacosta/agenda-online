import { Component, OnInit } from '@angular/core';
import { EmpreendimentoService } from '../empreendimento.service';
import { Empreendimento } from '../shared/Empreendimento.model';

@Component({
  selector: 'app-clinicas',
  templateUrl: './clinicas.component.html',
  styleUrls: ['./clinicas.component.css'],
  providers: [EmpreendimentoService]
})
export class ClinicasComponent implements OnInit {

  public empreendimentos: Array<Empreendimento>;

  constructor(private empreendimentoService: EmpreendimentoService) { }

  ngOnInit() {
    this.empreendimentoService.pesquisarEmpreendimentos()
    .subscribe((empreendimentos: Empreendimento[]) => this.empreendimentos = empreendimentos);
  }

}
