import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCoinService {
  isShown = new Subject<boolean>();
  constructor() { }
}
