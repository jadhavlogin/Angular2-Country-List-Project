import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../service/httpService'

@Component({
  selector: 'country-desc',
  templateUrl: './countryDescComponent.html',
})

export class CountryDescComponent {
  @Input() countryDetails;
  
  constructor(private _router: Router, private httpService: HttpService){}
  goToCountryDetails(){
    this.httpService.setSelectedCountry(this.countryDetails);
    this._router.navigate(['countrydetails']);
  }
}
