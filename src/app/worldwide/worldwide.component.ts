import { CountryServices } from './../service/clans-world.service';
import { modelCountry } from './../model/country.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worldwide',
  templateUrl: './worldwide.component.html',
  styleUrls: ['./worldwide.component.css']
})
export class WorldwideComponent implements OnInit {

  public urlBr = 'https://api.clashofclans.com/v1/locations/32000038/rankings/clans?limit=10';
  public urlUser = 'https://api.clashofclans.com/v1/locations/32000038/rankings/players?limit=10';
  public world;
  public worldFilter;
  public worldCountrySelect;
  public worldwild;
  public showList: boolean;
  public selectedOption: number;
  public firstTime: boolean;
  constructor (private country: CountryServices) { 
  }

  public ngOnInit() {
    this.world = [];
    this.worldCountrySelect = [];
    this.worldFilter = [];
    this.selectedOption = -1;
    this.firstTime = false;
    this.showCountry();
  }

  public showCountry(): void {
    this.country.getCountry().subscribe( country => {
      this.world = country
      this.worldFilter = this.world.items.slice(1, 261);
    })
  }

  public selectCountry(event): void {
    this.firstTime = true;
    this.worldFilter.map((c) => {
      if (c.name == event) {
        let id = c.id;
        let url = 'https://api.clashofclans.com/v1/locations/' + id + '/rankings/clans?limit=10';
        this.country.getSelectCountry(url).subscribe( countrySelected => {
          this.worldCountrySelect = countrySelected;
          this.worldCountrySelect.items.length == 0 ? this.showList = false : this.showList = true;
        })
      }

    })
    
  }

}

