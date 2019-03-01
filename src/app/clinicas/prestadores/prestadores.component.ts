import { Component, OnInit } from '@angular/core';
import { PrestadorService } from '../../prestador.service';
import { Prestador } from '../../shared/prestador.model';


@Component({
  selector: 'app-prestadores',
  templateUrl: './prestadores.component.html',
  styleUrls: ['./prestadores.component.css'],
  providers: [PrestadorService]
})
export class PrestadoresComponent implements OnInit {

  public prestadores: Array<Prestador>;

  constructor(private prestadorService: PrestadorService) { }

  ngOnInit() {
      this.prestadorService.pesquisaPrestadores()
      .subscribe((prestadores: Prestador[]) => this.prestadores = prestadores);
  }

}
