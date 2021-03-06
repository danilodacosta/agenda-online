import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Prestador } from './shared/prestador.model';

import { URL_API } from './app.api';
import { Query } from '../app/shared/querys';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Observable } from 'rxjs';

@Injectable()
export class PrestadorService {
  constructor(private http: Http) {}

  public pesquisaPrestadores(): Observable<Prestador[]> {
    return this.http
    .get(`${URL_API}/Prestadores/Consultar`)
      .retry(10)
      .map(resposta => (resposta.json()).classe.prestadores)._do(data => console.log(data))
      .catch((e: any) => Observable.throw(this.errorHandler(e)));
    }

    public pesquisarPrestadoresPorEmpreendimento(idEmpreendimento: number , idConvenio: number): Observable<any> {
      return this.http
      .get(`${URL_API}/GenericQuery/Executar?Query=${Query.consultarPrestadoresPorEmpreendimentoEConvenio(idEmpreendimento, idConvenio)}`)
      .retry(10)
      .map(resposta => JSON.parse(resposta.json()).classe)._do(data => console.log(data))
      .catch((e: any) => Observable.throw(this.errorHandler(e)));
    }

    public pesquisarEspecialidadesPorEmpreendimento(idEmpreendimento: number): Observable<any> {
      return this.http
      .get(`${URL_API}/GenericQuery/Executar?Query=${Query.consultarEspecialidadePorEmpreendimento(idEmpreendimento)}`)
      .retry(10)
      .map(resposta => JSON.parse(resposta.json()).classe)._do(data => console.log(data))
      .catch((e: any) => Observable.throw(this.errorHandler(e)));
    }



    private errorHandler(error: any): void {
      console.log('error ao consultar prestadores : ' + error);
      alert('error ao consultar prestadores : ' + error);
    }
}
