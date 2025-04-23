import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apartment } from '../classes/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  url:string="http://localhost:8080/apartment/"
  arrApartments:Array<apartment>

  
  getAll()
  {
    return this.myhttp.get<Array<apartment>>(`${this.url}getAll`)
  }
  byCity(city):Observable<Array<apartment>>
  {
    return this.myhttp.get<Array<apartment>>(`${this.url}getApartmentsByCity/${city}`)
  }

  byName(firstName:string,lastName:string):Observable<Array<apartment>>
  {
    return this.myhttp.get<Array<apartment>>(`${this.url}getApartmentsByName/${firstName}/${lastName}`)
  }

  byPrice(from:string,to:string):Observable<Array<apartment>>
  {
    return this.myhttp.get<Array<apartment>>(`${this.url}getApartmentsByPrice/${from}/${to}`)
  }
constructor(public myhttp:HttpClient) { }

  
}
