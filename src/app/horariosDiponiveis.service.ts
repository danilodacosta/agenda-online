import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Convenio } from './shared/convenio.model';

import { URL_API } from './app.api';
import { Query } from '../app/shared/querys';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Observable } from 'rxjs';
@Injectable()
export class HorariosDisponiveisService {
  constructor(private http: Http) {}

  private jsonConsulta: any = new Object;

  public consultarHorarios(): Observable<any[]> {

    this.jsonConsulta.Empreendimento = '1';
    this.jsonConsulta.Prestador = '3';
    this.jsonConsulta.DataInicial = '2019-04-13';
    this.jsonConsulta.DataFinal = '2019-05-13';
    this.jsonConsulta.TipoAgenda = '1';
    this.jsonConsulta.Periodo = '';
    this.jsonConsulta.QuantReg = '0';
    this.jsonConsulta.Hora = '';
    this.jsonConsulta.HoraPeriodo = '';

    // console.log(`${URL_API}/HorarioDisponivel/Consultar?Json=${JSON.stringify(this.jsonConsulta)}`);


    return this.http
    .get(`${URL_API}/HorarioDisponivel/Consultar?Json=${JSON.stringify(this.jsonConsulta)}`)
    .retry(10)
    .map(resposta => (resposta.json().Classe.HorariosDisponiveis))
    .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }

    private errorHandler(error: any): void {
      console.log('error ao consultar horarios : ' + error);
      alert('error ao consultar horarios : ' + error);
    }
  }
