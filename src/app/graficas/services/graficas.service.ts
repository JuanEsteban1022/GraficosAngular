import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraficasService {
  private _baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getDataGrafica() {
    return this.http.get(`${this._baseUrl}/grafica`)
  }

  getDataRedesSociales() {
    return this.getDataGrafica()
      .pipe(
        delay(1500),
        map(data => {
          const labels = Object.keys(data);
          const valores = Object.values(data);
          return { labels, valores }
        })
      )
  }
}
