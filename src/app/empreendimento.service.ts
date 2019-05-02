import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Empreendimento } from './shared/empreendimento.model';

import { URL_API } from './app.api';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Observable } from 'rxjs';

@Injectable()
export class EmpreendimentoService {
  constructor(private http: Http) {}

  public pesquisarEmpreendimentos(): Observable<Empreendimento[]> {
    console.log(`${URL_API}/Empreendimentos/Consultar`);
    return this.http
    .get(`${URL_API}/Empreendimentos/Consultar`)
      .retry(10)
      .map(resposta => JSON.parse(resposta.json()).classe.empreendimentos)._do(data => console.log(data))
      .catch((e: any) => Observable.throw(this.errorHandler(e)));
    }

    private errorHandler(error: any): void {
      console.log('error ao consultar empreendimento : ' + error);
      alert('error ao consultar empreendimento : ' + error);
    }
}
