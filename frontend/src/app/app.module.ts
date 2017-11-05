import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DomainModule } from './domain';
import { AppComponent } from './app.component';
import { CyberModule } from './cyber/cyber.module';
import { ReccomendationsComponent } from './reccomendations/reccomendations.component';

@NgModule({
  declarations: [
    AppComponent,
    ReccomendationsComponent
  ],
  imports: [
    BrowserModule,
    DomainModule,
    CyberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
