import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'rePass': new FormControl(null, [Validators.required, Validators.minLength(6), this.doPasswordsMatch.bind(this)])
    });
  }

  onSubmit() {
    this.authService.register(this.registerForm.value.email, this.registerForm.value.password)
      .subscribe({
        next: (resData) => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          if (error) {
            this.notificationService.createNotification(error.message, 'alert')
          }
        }
      });
  }

  doPasswordsMatch(control: FormControl): { [s: string]: boolean; } | null {
    if (control.value === this.registerForm?.get('password')?.value) {
      return null;
    }
    return { 'passwordDontMatch': true };
  }
}