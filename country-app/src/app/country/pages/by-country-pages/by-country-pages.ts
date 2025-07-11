import { Component } from '@angular/core';
import { CountrySearchInput } from "../../component/country-search-input/country-search-input";
import { TableCountry } from "../../component/table-country/table-country";

@Component({
  selector: 'app-by-country-pages',
  imports: [CountrySearchInput, TableCountry],
  templateUrl: './by-country-pages.html',
  styleUrl: './by-country-pages.css'
})
export class ByCountryPages {
  
 onChengue(busqueda:string){
   console.log(busqueda)

 }
}
