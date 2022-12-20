import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { environment } from "src/environments/environment";
import { Transaction } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  isShown = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getAllTransactions() {
    return this.http.get<Transaction[]>(environment.portfolioApi + '/getTransactions');
  }

  createTransaction(data: Transaction) {
    return this.http.post<Transaction>(environment.portfolioApi + '/addTransaction', { data });
  }
}
