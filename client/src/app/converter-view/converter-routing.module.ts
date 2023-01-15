import { RouterModule, Routes } from "@angular/router";

import { CryptoConverterComponent } from "./crypto-converter/crypto-converter.component";

const routes: Routes = [
  { path: '', component: CryptoConverterComponent }
];

export const ConverterRoutingModule = RouterModule.forChild(routes);