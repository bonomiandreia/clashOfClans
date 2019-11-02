import { modelCountry } from './../model/country.model';
import { CountryServices } from './../service/clans-brazil.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public brazil: Array<modelCountry>
  public usersBrazil;
  constructor (private country: CountryServices) { 
  }

  public ngOnInit() {
    this.brazil = [];
    this.usersBrazil = [];
    this.showCountry();
    this.showUser();
  }

  public showCountry(): void {
    this.country.getCountry().subscribe( country => {
      this.brazil = country
    })
  }

  public showUser(): void {
    this.country.getUser().subscribe( users => {
      this.usersBrazil = users;
      console.log(this.usersBrazil)
    })
  }

}
