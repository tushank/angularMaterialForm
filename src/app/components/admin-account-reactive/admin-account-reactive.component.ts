import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminAccount } from './admin-account';

@Component({
  selector: 'app-admin-account-reactive',
  templateUrl: './admin-account-reactive.component.html',
  styleUrls: ['./admin-account-reactive.component.scss']
})
export class AdminAccountReactiveComponent implements OnInit {
  adminAccountForm: FormGroup;
  adminAccount = new AdminAccount();
  adminGroupsDTOLists = [];

  constructor(private fb: FormBuilder) {
    this.adminGroupsDTOLists = ['admin', 'test'];
  }

  ngOnInit() {
    this.adminAccountForm = this.fb.group({
      loginName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
      fullName: ['', Validators.required],
      adminDescription: ['', Validators.required],
      adminGroupId: 'admin'
    });
    console.log('this.adminAccountForm : ', this.adminAccountForm);
  }

  save() {
    console.log('reactive form data : ', this.adminAccountForm.value);
  }

}
