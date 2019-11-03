import { CountryServices } from './../service/clans-world.service';
import { BrazilServices } from './../service/clans-brazil.service';
import { modelCountry } from './../model/country.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public urlBr = 'https://api.clashofclans.com/v1/locations/32000038/rankings/clans?limit=10';
  public urlUser = 'https://api.clashofclans.com/v1/locations/32000038/rankings/players?limit=10';
  public brazil: Array<modelCountry>
  public usersBrazil;
  constructor (private country: BrazilServices) { 
  }

  public ngOnInit() {
    this.brazil = [];
    this.usersBrazil = [];
    this.showCountry();
    this.showUser();
  }

  public showCountry(): void {
    this.country.getBrazil(this.urlBr).subscribe( country => {
      this.brazil = country
    })
    
    
  }

  public showUser(): void {
    this.country.getBrazil(this.urlUser).subscribe( users => {
      this.usersBrazil = users;
    })
  }

}
