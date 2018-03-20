import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouriteCountryService } from '../service/favouriteCountryService';
import { HttpService } from '../service/httpService';

declare const google: any;

@Component({
  selector: 'country-details',
  templateUrl: './countryDetailsComponent.html',
})

export class CountryDetailsComponent implements OnInit{
  public country:any = [];
  public favCount:number = 0;
  public isFavourite = false;
  constructor(route: ActivatedRoute,private favService: FavouriteCountryService,private navigateRoute: Router,  private httpService: HttpService){
    this.country = this.httpService.getSelectedCountry();
    this.favCount = favService.getFavouritesList().length;
    this.isFavourite = this.favService.getIsCountryFavourite(this.country.name);
  }
  ngOnInit(){
    let mapProp = {
      center: new google.maps.LatLng(this.country.latlng[0], this.country.latlng[1]),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    this.favCount = this.favService.getFavouritesList().length;
    this.isFavourite = this.favService.getIsCountryFavourite(this.country.name);
  }

  setAsFavourite(){
    this.favService.setFavourites({
      name:this.country.name,
      capital: this.country.capital
    })
    this.favCount = this.favService.getFavouritesList().length;
    this.isFavourite = true;
  }

  removeFromFavorites(){
    this.favService.removeFromFavorite(this.country.name);
    this.favCount = this.favService.getFavouritesList().length;
    this.isFavourite = false;
  }

  goToCountryList(){
    this.navigateRoute.navigate(['countrylist']);
  }
}
