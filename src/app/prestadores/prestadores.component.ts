import { ConvenioService } from './../convenio.service';
import { Component, OnInit, Input } from '@angular/core';
import { PrestadorService } from '../prestador.service';
import { Prestador } from '../shared/prestador.model';
import { ActivatedRoute } from '@angular/router';
import { Convenio } from '../shared/convenio.model';

@Component({
  selector: 'app-prestadores',
  templateUrl: './prestadores.component.html',
  styleUrls: ['./prestadores.component.css'],
  providers: [PrestadorService, ConvenioService]
})
export class PrestadoresComponent implements OnInit {
  public prestadores: Array<any>;
  public convenios: Array<Convenio>;
  public especialidades: Array<any>;

  public especialidadeSelecionada: any;
  public convenioSelecionado: Convenio;

  public uriFotoConvenio: string;

  @Input() public idEmpreendimento: number;

  constructor(
    private prestadorService: PrestadorService,
    private convenioService: ConvenioService,
    private route: ActivatedRoute
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
      this.consultarPrestadores();

  }

  private consultarConvenios(): void {
    this.convenioService
      .pesquisarConvenios()
      .subscribe(
        (convenios: Convenio[]) => (this.convenios = convenios)
      );
  }

  private consultarPrestadores(): void {
     this.prestadorService.pesquisarPrestadoresPorEmpreendimento(this.route.snapshot.params['id'])
     .subscribe((prestadores: any[]) => this.prestadores = prestadores);
  }
}
