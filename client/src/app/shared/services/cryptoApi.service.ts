import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from '../../../environments/environment';
import { AllCoins, DetailedCoinDataResponse } from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }

  getAllCoins() {
    return this.http.get<AllCoins[]>(environment.cryptoApi + '/allCoins');
  }

  getCoinDetails(coinId: string) {
    let params = new HttpParams();
    params = params.append('coinId', coinId);
    return this.http.get<DetailedCoinDataResponse>(environment.cryptoApi + '/getCoinDetails', { params: params });
  }
}