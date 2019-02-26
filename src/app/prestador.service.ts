import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Prestador } from './shared/prestador.model';

import { URL_API } from './app.api';

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
      .map(resposta => JSON.parse(resposta.json()).classe.prestadores)._do(data => console.log(data));
    }
}
