import { Component, inject, resource, signal  } from '@angular/core';
import { CountrySearchInput } from "../../component/country-search-input/country-search-input";
import { TableCountry } from "../../component/table-country/table-country";
import { country } from '../../interfaces/country.format';
import { rxResource } from '@angular/core/rxjs-interop';

import { CountryService  } from '../../services/countryServices';
import { of } from 'rxjs';
import { environment } from '../../../../environment/environment.developer';
@Component({
  selector: 'app-by-region-pages',
  imports: [CountrySearchInput, TableCountry],
  templateUrl: './by-region-pages.html',
  styleUrl: './by-region-pages.css'
})
export class ByRegionPages {
countriService = inject(CountryService)
countries = signal<country[]>([])
query  =signal<string>('')
isLoading = signal<boolean>(false)

// usertData = resource<country[], { query: string }>({
//   request: () => ({ query: this.query() }),

//   loader: async ({ query }) => {
//     if (!query) return [];

//     const response = await fetch(`${environment.apiUrl}/countries/${query}`);
//     const data = await response.json();
//     return data as country[];
//   }
// });




 onChengue(busqueda:string){
   console.log(busqueda)
   
 }
}
