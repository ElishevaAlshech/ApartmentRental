import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apartment } from '../classes/apartment';
import { HttpClient } from '@angular/common/http';
import { advertiser } from '../classes/advertiser';

@Injectable({
  providedIn: 'root'
})
export class AdvertiserService {

  url:string="http://localhost:8080/Advertiser/"
  advertiser:advertiser = new advertiser();
  myAdvertiser:advertiser;
  isBoolean:boolean = false;

  constructor(public myhttp:HttpClient) { }

  getAll()
  {
    return this.myhttp.get<Array<advertiser>>(`${this.url}getAll`)
  }
  SignIn(email:string,password:string):Observable<advertiser>
  {
    debugger
    return this.myhttp.get<advertiser>(`${this.url}SignIn/${email}/${password}`);
  }
  signUp(aa:advertiser):Observable<boolean>
  {
    return this.myhttp.post<boolean>(`${this.url}SignUp`,aa)
  }

 
}
