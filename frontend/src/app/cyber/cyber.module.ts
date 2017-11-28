import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserSecurityComponent } from './user-security/user-security.component';
import { HomeComponent } from './home/home.component';

import { DomainModule } from '../domain';

@NgModule({
    imports: [ BrowserModule, FormsModule, DomainModule ],
    declarations: [ LoginComponent, UserSecurityComponent, HomeComponent ],
    exports: [ LoginComponent, HomeComponent, UserSecurityComponent ]
})
export class CyberModule { }
