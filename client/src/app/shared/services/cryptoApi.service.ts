import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from '../../../environments/environment';
import { AllCoins, ConverterResponse, CryptoMapRes, DetailedCoinDataResponse, FiatMapRes } from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }

  getAllCoins() {
    return this.http.get<AllCoins[]>(environment.cryptoApi + '/allCoins');
  }

  convert(amount: number, from: number, to: number) {
    let params = new HttpParams();
    params = params.append('amount', amount);
    params = params.append('from', from);
    params = params.append('to', to);
    return this.http.get<ConverterResponse>(environment.cryptoApi + '/convert', { params: params });
  }

  getCoinDetails(coinId: string) {
    let params = new HttpParams();
    params = params.append('coinId', coinId);
    return this.http.get<DetailedCoinDataResponse>(environment.cryptoApi + '/getCoinDetails', { params: params });
  }
}