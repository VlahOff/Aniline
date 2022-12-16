import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoConverterComponent } from './crypto-converter/crypto-converter.component';
import { ConverterRoutingModule } from './converter-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



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
