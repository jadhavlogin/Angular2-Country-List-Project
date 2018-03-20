import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
  baseUrl:string = "https://restcountries-v1.p.mashape.com";
  countryList: {};
  selectedCountry: {};
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "X-Mashape-Key": 'svLgJqZunOmshKssJoAczFtrk5Scp1787WGjsn8ouFZMfFX48p',
      "Accept": "application/json"
    })
  };
  
  constructor(private httpClient : HttpClient) { 
    
  }
  
  get_countries(){
    let getCountry:string = "/all"
    return this.httpClient.get(this.baseUrl + getCountry, this.httpOptions);
  }
  
  setCountryList(countrList){
    this.countryList = countrList;
  }

  getCountryList(){
    if(this.countryList !== undefined && this.countryList[0])
      return this.countryList;
    return ""
  }

  setSelectedCountry(country){
    this.selectedCountry = country;
  }

  getSelectedCountry(){
    return this.selectedCountry;
  }
}
