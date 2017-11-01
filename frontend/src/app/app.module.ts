import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReccomendationsComponent } from './reccomendations/reccomendations.component';

@NgModule({
  declarations: [
    AppComponent,
    ReccomendationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
