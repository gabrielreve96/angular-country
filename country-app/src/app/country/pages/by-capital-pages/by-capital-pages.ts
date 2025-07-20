import { Component, inject, resource, setTestabilityGetter, signal } from '@angular/core';
import { CountrySearchInput } from '../../component/country-search-input/country-search-input';
import { TableCountry } from '../../component/table-country/table-country';
import { CountryService } from '../../services/countryServices';


import { country } from '../../interfaces/country.format';

@Component({
  selector: 'app-by-capital-pages',
  imports: [CountrySearchInput , TableCountry],
  templateUrl: './by-capital-pages.html',
  styleUrl: './by-capital-pages.css'
})
export class ByCapitalPages {
serviceCountry = inject(CountryService)


isLoading = signal<boolean>(false)
isError = signal<boolean| null>(null)
countries = signal<country[]>([])
 
 

//  countryResouce = resource({
//   request:()=>({}),
//   loader:async()=>{
    
//   }
//  })


  async Onchange(query:string){
    if(this.isLoading()) return
    this.isLoading.set(true)
    this.isError.set(null)


   console.log(this.countries())
   return this.serviceCountry.serachByCapital(query).subscribe({
      next:(countries)=>{
      this.isLoading.set(false);
      this.isError.set(null)
       this.countries.set(countries)
    },

     error:(err)=>{
      console.log(err)
      this.isLoading.set(false);
       this.countries.set([])
       this.isError.set(true)
       
     },
     
    
   })
  }
}
