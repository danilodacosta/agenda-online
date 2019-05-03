import { Convenio } from './../shared/convenio.model';
import { ConvenioService } from './../convenio.service';
import { Component, OnInit, Input } from '@angular/core';
import { PrestadorService } from '../prestador.service';
import { Prestador } from '../shared/prestador.model';
import { ActivatedRoute } from '@angular/router';
import { DateFormatPipe } from '../shared/DateFormatPipe.pipe';

@Component({
  selector: 'app-prestadores',
  templateUrl: './prestadores.component.html',
  styleUrls: ['./prestadores.component.css'],
  providers: [PrestadorService, ConvenioService, DateFormatPipe]
})
export class PrestadoresComponent implements OnInit {
  public prestadores: Array<any>;
  public convenios: Array<Convenio>;
  public especialidades: Array<any>;
  public especialidadeSelecionada: any;
  public convenioSelecionado: Convenio;
  public uriFotoConvenio: string;

  public horariosDisponiveis: any[];
  public jsonConsulta: any = new Object;
  @Input() public idEmpreendimento: number;

  constructor(
    private prestadorService: PrestadorService,
    private convenioService: ConvenioService,
    private route: ActivatedRoute,
    private dateFomartPipe: DateFormatPipe
  ) {}

  ngOnInit() {
    this.consultarEspecialidades();
  }

  public novaClinica(): void {
    this.idEmpreendimento = null;
  }

  private consultarEspecialidades(): void {
    this.prestadorService
      .pesquisarEspecialidadesPorEmpreendimento(
        this.route.snapshot.params['id']
      )
      .subscribe(
        (especialidades: any[]) => (this.especialidades = especialidades)
      );
  }

  public onChangeEspecialidade(idEspecialidade: number): void {

    console.log(this.especialidadeSelecionada);
    if (idEspecialidade > 0) {
      this.consultarConvenios();

    }
  }

  public onChangeConvenio(convenioSelecionado: Convenio): void {
     this.uriFotoConvenio = convenioSelecionado.uriFoto;
      this.consultarPrestadores(convenioSelecionado);
  }

  private consultarConvenios(): void {
    this.convenioService
      .pesquisarConvenios()
      .subscribe(
        (convenios: Convenio[]) => (this.convenios = convenios)
      );
  }

  private consultarPrestadores(convenioSelecionado: Convenio): void {
    const empreendimentoId = this.route.snapshot.params['id'];
    this.prestadorService.pesquisarPrestadoresPorEmpreendimento(empreendimentoId, convenioSelecionado.id)
    .subscribe((prestadores: any[]) => this.prestadores = prestadores);
  }

  public selecionarPrestador(prestadorSelecionado: any) {

    this.jsonConsulta = new Object;

    console.log(this.jsonConsulta);

    this.jsonConsulta.Prestador = prestadorSelecionado.id.toString();
    this.jsonConsulta.Empreendimento = this.route.snapshot.params['id'];
    this.jsonConsulta.DataInicial = this.dateFomartPipe.transform(new Date());
    this.jsonConsulta.DataFinal = this.dateFomartPipe.transform(this.calcularProximosDias());
    this.jsonConsulta.TipoAgenda = '0';
    this.jsonConsulta.QuantReg = '0';
    this.jsonConsulta.Hora = '';
    this.jsonConsulta.HoraPeriodo = '';

    console.log(this.jsonConsulta);
  }

  private calcularProximosDias(): Date {
    const data = new Date();
    const novaData = new Date();
    novaData.setDate(data.getDate() + 30);
    return novaData;
  }

}
