import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {NAVIGATOR} from "./tokens/navigator.token";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [{
    provide: NAVIGATOR,
    useValue: navigator
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
