import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment.developer';

import { CountryMapper } from '../mapper/country.mapper';
import { map  ,catchError, throwError, delay} from 'rxjs';
import { ResCountry } from '../interfaces/country';
@Injectable({providedIn: 'root'})
export class CountryService {
    constructor() { }
    private  http = inject(HttpClient)
    
  serachByCapital(quey:string){
       quey = quey.trim().toLocaleLowerCase()
       return this.http.get<ResCountry[]>(`${environment.api_country}${quey}`).pipe
       (
        map(responsoe => CountryMapper.mapCountryArray(responsoe) ),
         delay(1000),
         catchError((err)=>{
          console.log(err)
          return throwError(()=> new Error("Error en la peticion con ese query"))
       })
       )
      
  }
 

  searchByCountry(query:string){
     query =  query.trim().toLowerCase()

      return this.http.get<ResCountry[]>(
        `${environment.api_pais}${query}`
      ).pipe(
         map(response=> CountryMapper.mapCountryArray(response)),
          delay(1000),
          catchError((err)=>{
          console.log(err)
          return throwError(()=> new Error("Error en la peticion con ese query"))
       })
      )  
  }
  


}