import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserSecurityComponent } from './user-security/user-security.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './accounts/account.component';
import { NavComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';

import { RouterModule } from '@angular/router';

import { DomainModule } from '../domain';

@NgModule({
    imports: [ BrowserModule, FormsModule, DomainModule, RouterModule ],
    declarations: [ LoginComponent, UserSecurityComponent, HomeComponent, AccountComponent, NavComponent, RegistrationComponent ],
    exports: [ LoginComponent, HomeComponent, UserSecurityComponent, AccountComponent, NavComponent, RegistrationComponent ]
})
export class CyberModule { }
