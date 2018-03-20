import { Routes } from '@angular/router';

import { LoginComponent } from './login/loginComponent';
import { RegisterComponent } from './register/registerComponent';
import { CountryListComponent } from './countryList/countryListComponent';
import { CountryDetailsComponent } from './countryDetails/countryDetailsComponent'
import { FavouritesCountryComponents } from './favourites/favouritesCountryComponent'

export const AppRoutes: Routes = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'countrylist',
    component: CountryListComponent
  },
  {
    path: 'countrydetails',
    component: CountryDetailsComponent
  },
  {
    path: 'favourites',
    component: FavouritesCountryComponents
  }
]