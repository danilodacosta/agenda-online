import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EmpreendimentoService } from '../empreendimento.service';
import { Empreendimento } from '../shared/Empreendimento.model';

@Component({
  selector: 'app-empreendimentos',
  templateUrl: './empreendimentos.component.html',
  styleUrls: ['./empreendimentos.component.css'],
  providers: [EmpreendimentoService]
})
export class EmpreendimentosComponent implements OnInit {

  public empreendimentos: Array<Empreendimento>;

  @Output()
  public idEmpreendimento: EventEmitter<number> = new EventEmitter<number>();

  constructor(private empreendimentoService: EmpreendimentoService) { }

  ngOnInit() {
    this.empreendimentoService.pesquisarEmpreendimentos()
    .subscribe((empreendimentos: Empreendimento[]) => this.empreendimentos = empreendimentos);
    console.log(this.empreendimentos);
  }

  public selecionarEmpreendimento(idEmpreendimento: number): void {
    this.idEmpreendimento.emit(idEmpreendimento);
 }

}
