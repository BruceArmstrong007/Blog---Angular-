import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

import { registerAction } from '../../store/actions/register.action';
import {
  isSubmitingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  isSubmitting$: Observable<boolean | null> | undefined;
  backendErrors$: Observable<BackendErrorsInterface | any> | undefined;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmitingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({ request }));
  }
}
