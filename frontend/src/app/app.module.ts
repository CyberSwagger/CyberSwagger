import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DomainModule } from './domain';
import { AppComponent } from './app.component';
import { CyberModule } from './cyber/cyber.module';
import { ReccomendationsComponent } from './reccomendations/reccomendations.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './cyber/login/login.component';
import { HomeComponent } from './cyber/home/home.component';
import { UserSecurityComponent } from './cyber/user-security/user-security.component';
import { RegistrationComponent } from './cyber/registration/registration.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'user-security',
    component: UserSecurityComponent
  },
  {
    path: 'reccomendations',
    component: ReccomendationsComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ReccomendationsComponent
  ],
  imports: [
    BrowserModule,
    DomainModule,
    CyberModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
