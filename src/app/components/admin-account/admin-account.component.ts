import { Component, OnInit } from '@angular/core';
import { AdminAccount } from './admin-account';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.scss']
})
export class AdminAccountComponent implements OnInit {
  adminGroupsDTOLists = [];

  adminAccount = new AdminAccount();

  constructor() {
    this.adminGroupsDTOLists = ['admin', 'test'];
  }

  ngOnInit() {
  }

  onSubmit(adminAccountForm: NgForm) {
    console.log(adminAccountForm.form);
    console.log('Saved: ' + JSON.stringify(adminAccountForm.value));
  }
}
