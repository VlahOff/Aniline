import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from '../../environments/environment';
import { DetailedCoinDataResponse } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }

  topThree() {
    return this.http.get<DetailedCoinDataResponse[]>(environment.cryptoApi + '/topThree');
  }
}