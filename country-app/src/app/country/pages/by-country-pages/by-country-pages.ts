import { Component, inject, signal } from '@angular/core';
import { CountrySearchInput } from "../../component/country-search-input/country-search-input";
import { TableCountry } from "../../component/table-country/table-country";
import { country } from '../../interfaces/country.format';
import { CountryMapper } from '../../mapper/country.mapper';
import { CountryService } from '../../services/countryServices';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-by-country-pages',
  imports: [CountrySearchInput, TableCountry , RouterLink],
  templateUrl: './by-country-pages.html',
  styleUrl: './by-country-pages.css'
})
export class ByCountryPages {
  iserror = signal<boolean>(false)
  countries = signal<country[]>([])
  countryServices = inject(CountryService)
  isLoading = signal<boolean>(false)

  async onChengue(busqueda: string) {
    this.isLoading.set(true)
     const data = this.countryServices.searchByCountry(busqueda)
      data.subscribe({
      next: (countries) => {

        this.iserror.set(false)
        this.countries.set(countries)
         

      },
      error: (err) => {
        console.log(err)
        this.iserror.set(true)
        this.countries.set([])

      },
      complete:()=>{
        this.isLoading.set(false)
      }

    })

  }
}
