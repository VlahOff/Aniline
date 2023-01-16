import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';

import { ConverterRoutingModule } from './converter-routing.module';
import { CryptoConverterComponent } from './crypto-converter/crypto-converter.component';



@NgModule({
  declarations: [
    CryptoConverterComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    ConverterRoutingModule,
    ReactiveFormsModule
  ]
})
export class CryptoConverterViewModule { }
