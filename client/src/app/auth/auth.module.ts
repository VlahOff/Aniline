import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangeUsernameModalComponent } from './profile/change-username-modal/change-username-modal.component';
import { ChangePasswordModalComponent } from './profile/change-password-modal/change-password-modal.component';
import { DeleteUserModalComponent } from './profile/delete-user-modal/delete-user-modal.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ChangeUsernameModalComponent,
    ChangePasswordModalComponent,
    DeleteUserModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
