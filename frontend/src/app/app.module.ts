import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DomainModule } from './domain';
import { AppComponent } from './app.component';
import { CyberModule } from './cyber/cyber.module';
import { ReccomendationsComponent } from './reccomendations/reccomendations.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReccomendationsComponent
  ],
  imports: [
    BrowserModule,
    DomainModule,
    CyberModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
