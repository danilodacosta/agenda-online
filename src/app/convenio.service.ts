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
export class ConvenioService {
  constructor(private http: Http) {}

  public pesquisarConvenios(): Observable<Convenio[]> {
    return this.http
    .get(`${URL_API}/GenericQuery/Executar?Query=${Query.consultarConvenios()}`)
    .retry(10)
    .map(resposta => JSON.parse(resposta.json()).classe)._do(data => console.log(data))
    .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }

    private errorHandler(error: any): void {
      console.log('error ao consultar convenios : ' + error);
      alert('error ao consultar convenios : ' + error);
    }
  }
