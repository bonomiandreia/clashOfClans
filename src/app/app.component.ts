import { Component, OnInit } from '@angular/core';
import { CountryServices } from './service/clans-brazil.service';
import { modelCountry } from './model/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public brazil: Array<modelCountry>
  constructor (private country: CountryServices) { 
  }

  public ngOnInit() {
    this.showCountry();
  }

  public showCountry(): void {
    this.country.getCountry().subscribe( country => {
      this.brazil = country
    })
  } 
  
}
