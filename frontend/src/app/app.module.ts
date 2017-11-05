import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DomainModule } from './domain';
import { AppComponent } from './app.component';
import { CyberModule } from './cyber/cyber.module';

@NgModule({
  declarations: [
    AppComponent
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
