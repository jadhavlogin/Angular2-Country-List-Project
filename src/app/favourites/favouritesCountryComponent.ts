import { Component } from '@angular/core';
import { FavouriteCountryService } from '../service/favouriteCountryService'
import { debug } from 'util';

@Component({
  selector: 'favourites-country',
  templateUrl: './favouritesCountryComponent.html'
})
export class FavouritesCountryComponents { 
  public favCountryList: any = {}
  constructor(private favService: FavouriteCountryService) {
    debugger
    this.favCountryList = favService.getFavouritesList();
  }

  removeFromFavorites(countryName){
    this.favService.removeFromFavorite(countryName);
    this.favCountryList = this.favService.getFavouritesList();
  }
}