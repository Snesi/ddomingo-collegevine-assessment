import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {NAVIGATOR} from "./tokens/navigator.token";

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: NAVIGATOR,
    useValue: navigator
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
