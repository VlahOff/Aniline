import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../+store/app.reducer';
import * as CryptoActions from '../+store/crypto.actions';
import { getSearchResults } from '../+store/crypto.selector';
import { SearchResult } from '../interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  searchResults$: Observable<SearchResult[]> = this.store.select(getSearchResults);

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      'search': new FormControl(null, [Validators.required])
    });
  }

  search() {
    this.store.dispatch(
      CryptoActions.startSearch({ payload: this.searchForm.value.search })
    );
  }
}
