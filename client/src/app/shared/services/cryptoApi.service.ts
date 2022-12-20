import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from '../../../environments/environment';
import { AllCoins, CoinsViewNewResponse, CoinsViewTopResponse, ConverterResponse, CryptoMap, DetailedCoinDataResponse, FiatMap, GlobalDataResponse } from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }

  topThree() {
    return this.http.get<DetailedCoinDataResponse[]>(environment.cryptoApi + '/topThree');
  }

  topHundred() {
    return this.http.get<CoinsViewTopResponse[]>(environment.cryptoApi + '/topHundred');
  }

  newCoins() {
    return this.http.get<CoinsViewNewResponse[]>(environment.cryptoApi + '/newCoins');
  }

  cryptoMap() {
    return this.http.get<CryptoMap[]>(environment.cryptoApi + '/cryptoMap');
  }

  fiatMap() {
    return this.http.get<FiatMap[]>(environment.cryptoApi + '/fiatMap');
  }

  getGlobalData() {
    return this.http.get<GlobalDataResponse>(environment.cryptoApi + '/getGlobalData');
  }

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