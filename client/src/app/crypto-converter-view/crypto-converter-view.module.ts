import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoConverterComponent } from './crypto-converter/crypto-converter.component';
import { ConverterRoutingModule } from './converter-routing.module';



@NgModule({
  declarations: [
    CryptoConverterComponent
  ],
  imports: [
    CommonModule,
    ConverterRoutingModule
  ]
})
export class CryptoConverterViewModule { }
