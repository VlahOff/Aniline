import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'pass': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'rePass': new FormControl(null, [Validators.required, Validators.minLength(6), this.doPasswordsMatch.bind(this)])
    });
  }

  onSubmit() {
    console.log(this.registerForm);
  }

  doPasswordsMatch(control: FormControl): { [s: string]: boolean; } | null {
    if (control.value === this.registerForm?.get('pass')?.value) {
      return null;
    }
    return { 'passwordDontMatch': true };
  }
}
