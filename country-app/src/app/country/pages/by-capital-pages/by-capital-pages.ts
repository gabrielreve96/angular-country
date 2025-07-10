import { Component } from '@angular/core';
import { CountrySearchInput } from '../../component/country-search-input/country-search-input';
import { TableCountry } from '../../component/table-country/table-country';

@Component({
  selector: 'app-by-capital-pages',
  imports: [CountrySearchInput , TableCountry],
  templateUrl: './by-capital-pages.html',
  styleUrl: './by-capital-pages.css'
})
export class ByCapitalPages {
 


  Onchange(busuqeda:string){
   console.log(busuqeda)
  }
}
