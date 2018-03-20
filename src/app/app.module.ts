import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule }  from '@angular/forms';

import { AppRoutes } from './app.routing';
import { HttpService } from './service/httpService';
import { FavouriteCountryService } from './service/favouriteCountryService';
import { AuthenticationService } from './service/authenticationService';
import { SearchFilter} from './filter/searchFilter';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/loginComponent';
import { RegisterComponent } from './register/registerComponent';
import { CountryListComponent } from './countryList/countryListComponent';
import { CountryDescComponent } from './countryList/countryDescComponent';
import { CountryDetailsComponent } from './countryDetails/countryDetailsComponent';
import { FavouritesCountryComponents } from './favourites/favouritesCountryComponent'

@NgModule({
  declarations: [
    AppComponent,
    SearchFilter,
    LoginComponent,
    RegisterComponent,
    CountryListComponent,
    CountryDescComponent,
    CountryDetailsComponent,
    FavouritesCountryComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [HttpService, AuthenticationService, FavouriteCountryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
