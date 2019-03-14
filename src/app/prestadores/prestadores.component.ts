import { Component, OnInit, Input } from '@angular/core';
import { PrestadorService } from '../prestador.service';
import { Prestador } from '../shared/prestador.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-prestadores',
  templateUrl: './prestadores.component.html',
  styleUrls: ['./prestadores.component.css'],
  providers: [PrestadorService]
})
export class PrestadoresComponent implements OnInit {

  public prestadores: Array<any>;

  @Input() public idEmpreendimento: number;

  constructor(private prestadorService: PrestadorService, private route: ActivatedRoute) { }

  ngOnInit() {

     this.prestadorService.pesquisarPrestadoresPorEmpreendimento(this.route.snapshot.params['id'])
     .subscribe((prestadores: any[]) => this.prestadores = prestadores);
  }

  public novaClinica(): void {
    this.idEmpreendimento = null;
  }

}
