import { AboutMeComponent } from './about-me/about-me.component';
import { GeralComponent } from './geral/geral.component';
import { TableComponent } from './table/table.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'ranking', component: TableComponent },
  { path: 'geral', component:GeralComponent },
  { path: 'aboutme', component:AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
