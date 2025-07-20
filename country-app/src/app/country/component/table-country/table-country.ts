import { Component, inject, input } from '@angular/core';
import { ResCountry } from '../../interfaces/country';
import { country } from '../../interfaces/country.format';
import { Routes, RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-table-country',
  imports: [],
  templateUrl: './table-country.html',
  styleUrl: './table-country.css'
})
export class TableCountry {
 private router = inject(Router)
 Datacountri  = input.required<country[]>()
 
 paisdetalle(code:string){
    this.router.navigate([`country/by/${code}`])
 }

}
