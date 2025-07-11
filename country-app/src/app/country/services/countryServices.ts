import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment.developer';

@Injectable({providedIn: 'root'})
export class CountryService {
    constructor() { }
    private  http = inject(HttpClient)
    
  serachByCapital(quey:string){
       quey = quey.trim().toLocaleLowerCase()
       return this.http.get(`${environment.api_country}${quey}`)
  }


}