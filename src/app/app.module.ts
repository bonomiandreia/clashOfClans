import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryServices } from './service/clans-brazil.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { GeralComponent } from './geral/geral.component';
import { AboutMeComponent } from './about-me/about-me.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    GeralComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [CountryServices,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
