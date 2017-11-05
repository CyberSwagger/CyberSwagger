import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserSecurityComponent } from './user-security/user-security.component';

import { DomainModule } from '../domain';

@NgModule({
    imports: [ BrowserModule, FormsModule, DomainModule ],
    declarations: [ LoginComponent, UserSecurityComponent ],
    // bootstrap: [ ProductDetailsComponent, ProductReviewComponent, RatingComponent ],
    exports: [ LoginComponent ]
})
export class CyberModule { }
