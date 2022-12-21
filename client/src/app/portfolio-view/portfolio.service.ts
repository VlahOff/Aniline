import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { environment } from "src/environments/environment";
import { Transaction, TransactionDetailed } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  transactionsChange = new Subject();

  isAddCoinModalRendered = new Subject<boolean>();

  totalBalance = new Subject<number>();
  totalPnL = new Subject<number>();
  totalPnLPercent = new Subject<number>();

  constructor(private http: HttpClient) { }

  getAllTransactions() {
    return this.http.get<string[]>(environment.portfolioApi + '/getTransactions');
  }

  getTransaction(transactionId: string) {
    let params = new HttpParams();
    params = params.append('transactionId', transactionId);
    return this.http.get<TransactionDetailed>(environment.portfolioApi + '/getTransaction', { params: params });
  }

  createTransaction(data: Transaction) {
    return this.http.post<Transaction>(environment.portfolioApi + '/addTransaction', { data });
  }

  deleteTransaction(transactionId: string) {
    let params = new HttpParams();
    params = params.append('transactionId', transactionId);
    return this.http.delete(environment.portfolioApi + '/removeTransaction', { params: params });
  }
}
