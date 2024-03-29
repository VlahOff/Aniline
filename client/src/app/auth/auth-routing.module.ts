import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: '', children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  }
];

export const AuthRoutingModule = RouterModule.forChild(routes);