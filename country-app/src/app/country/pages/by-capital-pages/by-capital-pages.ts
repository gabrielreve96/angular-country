import { Component, inject } from '@angular/core';
import { CountrySearchInput } from '../../component/country-search-input/country-search-input';
import { TableCountry } from '../../component/table-country/table-country';
import { CountryService } from '../../services/countryServices';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-by-capital-pages',
  imports: [CountrySearchInput , TableCountry],
  templateUrl: './by-capital-pages.html',
  styleUrl: './by-capital-pages.css'
})
export class ByCapitalPages {
serviceCountry = inject(CountryService)



 



  async Onchange(query:string){
   return this.serviceCountry.serachByCapital(query).subscribe(
    (res)=>{
      console.log(res)
    }
   )
  }
}
