import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrazilServices } from './service/clans-brazil.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { GeralComponent } from './geral/geral.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorldwideComponent } from './worldwide/worldwide.component';
import { CountryServices } from './service/clans-world.service';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    GeralComponent,
    AboutMeComponent,
    WorldwideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    CommonModule
  ],
  providers: [BrazilServices,
    CountryServices,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
