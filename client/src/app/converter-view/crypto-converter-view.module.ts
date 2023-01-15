import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ConverterRoutingModule } from './converter-routing.module';
import { CryptoConverterComponent } from './crypto-converter/crypto-converter.component';



@NgModule({
  declarations: [
    CryptoConverterComponent
  ],
  imports: [
    CommonModule,
    ConverterRoutingModule,
    ReactiveFormsModule
  ]
})
export class CryptoConverterViewModule { }
