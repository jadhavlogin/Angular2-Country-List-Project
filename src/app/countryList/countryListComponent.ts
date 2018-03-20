import { Component } from '@angular/core';
import { HttpService } from '../service/httpService'
import { SearchFilter } from '../filter/searchFilter'
import { CountryDescComponent } from '../countryList/countryDescComponent'
import { FavouriteCountryService } from '../service/favouriteCountryService'
import { Router } from '@angular/router';

@Component({
  selector: 'country-list',
  templateUrl: './countryListComponent.html',
})

export class CountryListComponent {
  public searchText: string = '';
  private countryList: any = {};
  public favCount:number = 0;

  constructor(private httpService: HttpService, private favService: FavouriteCountryService, private _router: Router){
      this.favCount = favService.getFavouritesList().length;
      if(this.httpService.getCountryList() != ""){
        this.countryList = this.httpService.getCountryList();
      }else{
        this.httpService.get_countries().subscribe((res)=>{
          this.countryList = res;
          this.httpService.setCountryList(res);
        });
      }
    } 

    logout(){
      this._router.navigate(['login']);
    }
}
