import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
export const specificModules = [StoreDevtoolsModule.instrument({ logOnly: environment.production })];