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

  public pesquisaPrestadores(): Observable<any[]> {
    return this.http
    .get(`${URL_API}`)
      .retry(10)
      .map(resposta => resposta.json())
      .do(data => this.convertObjectPrestadores(data));
    }

  private convertObjectPrestadores(objeto: any): any {
    console.log(objeto);
    const myObjStr = JSON.stringify(objeto);
    const myJson: any = JSON.parse(myObjStr) ;
    console.log(myJson.classe.prestadores);
  }
}
