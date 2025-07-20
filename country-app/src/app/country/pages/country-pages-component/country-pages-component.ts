import { Component, inject, OnInit, resource, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environment/environment.developer';
import { CountryService } from '../../services/countryServices';
import { country } from '../../interfaces/country.format';

@Component({
  selector: 'app-country-pages-component',
  imports: [],
  templateUrl: './country-pages-component.html',
  styleUrl: './country-pages-component.css'
})
export class CountryPagesComponent implements OnInit{
servicesCountry = inject(CountryService)
params =  inject(ActivatedRoute).snapshot.params['codigo']
pais = signal<country[]>([])
ngOnInit(): void {
  
}


detallePais(params:string){
  return  this.servicesCountry.searchByCountry(params).subscribe({
     next:(countries)=>{
    this.pais.set(countries)
   }
  })
   
}

}
