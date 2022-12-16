import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from '../../environments/environment';
import { ConverterResponse, CryptoMap, FiatMap } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  constructor(private http: HttpClient) { }

  cryptoMap() {
    return this.http.get<CryptoMap[]>(environment.cryptoApi + '/cryptoMap');
  }

  fiatMap() {
    return this.http.get<FiatMap[]>(environment.cryptoApi + '/fiatMap')
  }

  convert(amount: number, from: number, to: number) {
    let params = new HttpParams();
    params = params.append('amount', amount);
    params = params.append('from', from);
    params = params.append('to', to);
    return this.http.get<ConverterResponse>(environment.cryptoApi + '/convert', { params: params });
  }
}