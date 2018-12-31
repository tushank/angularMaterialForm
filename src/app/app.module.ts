import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule} from '@angular/material';
import { AdminAccountComponent } from './components/admin-account/admin-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAccountReactiveComponent } from './components/admin-account-reactive/admin-account-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminAccountComponent,
    AdminAccountReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
