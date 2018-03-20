import { Injectable } from '@angular/core';

@Injectable()
export class FavouriteCountryService {
  public loggdinUser;
  favList = JSON.parse(localStorage.getItem("FAV_COUNTRY_LIST"));

  constructor() { }

  setFavourites(country){
    this.loggdinUser = JSON.parse(localStorage.getItem("LOG_IN_USER"));  
    let flag = 0;  
    if(this.favList == null){
        debugger
        this.favList = {
            [this.loggdinUser]: []
        }
        this.favList[this.loggdinUser].push(country);
        localStorage.setItem("FAV_COUNTRY_LIST",JSON.stringify(this.favList));
    }else{
        for(let user in this.favList){
            if(user == this.loggdinUser){
                flag=1;
                let favCountryList = this.favList[user];
                let cntrAlreadyPresent = false;
                for(let i=0;i<favCountryList.length;i++){
                    if(favCountryList[i].name == country.name){
                        cntrAlreadyPresent = true;
                        break;   
                    }
                }
                if(!cntrAlreadyPresent){
                    this.favList[user].push(country);
                }
            }
        }
        if(flag == 0){
            this.favList = {
                [this.loggdinUser]: []
            }
            this.favList[this.loggdinUser].push(country);
        }
        localStorage.removeItem("FAV_COUNTRY_LIST");
        localStorage.setItem("FAV_COUNTRY_LIST",JSON.stringify(this.favList));
    }
  }

  getFavouritesList(){
    this.loggdinUser = JSON.parse(localStorage.getItem("LOG_IN_USER"));
    if(this.favList == null){
        return 0;
    }else{
        for(let user in this.favList){
            if(user == this.loggdinUser){
                let favCountryList = this.favList[user];
                return favCountryList; 
            }
        }
        return 0;    
    }
  }

  getIsCountryFavourite(countryName){
    this.loggdinUser = JSON.parse(localStorage.getItem("LOG_IN_USER"));
    if(this.favList != null){
        for(let user in this.favList){
            if(user == this.loggdinUser){
                for(let i=0;i<this.favList[this.loggdinUser].length;i++){
                    if(this.favList[this.loggdinUser][i].name == countryName){
                        return true; 
                    }
                }
            }
        }    
    }
    return false;
  }

  removeFromFavorite(countryName){
    this.loggdinUser = JSON.parse(localStorage.getItem("LOG_IN_USER"));  
    if(this.favList != null){
        for(let user in this.favList){
            if(user == this.loggdinUser){
                for(let i=0;i<this.favList[this.loggdinUser].length;i++){
                    if(this.favList[this.loggdinUser][i].name == countryName){
                        this.favList[this.loggdinUser].splice(i,1);
                        break;
                    }
                }
            }
        }
        localStorage.removeItem("FAV_COUNTRY_LIST");
        localStorage.setItem("FAV_COUNTRY_LIST",JSON.stringify(this.favList));    
    }
  }
}
