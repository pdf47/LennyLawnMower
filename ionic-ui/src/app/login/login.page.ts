import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import {
  AbstractControl,
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.warn('ngOnInit');
    this.loginForm = this.formBuilder.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    console.info(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4)
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    console.info('onSubmit');
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
    this.authService.login(
      this.loginForm.value.emailAddress,
      this.loginForm.value.password
    );
  }

  onReset(): void {
    this.submitted = false;
    this.loginForm.reset();
  }
}
