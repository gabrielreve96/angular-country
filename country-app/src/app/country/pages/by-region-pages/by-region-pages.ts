import { Component } from '@angular/core';
import { CountrySearchInput } from "../../component/country-search-input/country-search-input";
import { TableCountry } from "../../component/table-country/table-country";

@Component({
  selector: 'app-by-region-pages',
  imports: [CountrySearchInput, TableCountry],
  templateUrl: './by-region-pages.html',
  styleUrl: './by-region-pages.css'
})
export class ByRegionPages {

 onChengue(busqueda:string){
   console.log(busqueda)

 }
}
