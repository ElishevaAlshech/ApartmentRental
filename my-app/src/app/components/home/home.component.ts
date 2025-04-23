import { Component, OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public ApartmentService:ApartmentService){ }
  priceTo:number
  priceFrom:number
  firstName:string
  lastName:string
  city:string

  filterByPrice(from,to)
  {
    this.ApartmentService.byPrice(from,to).subscribe(data=>this.ApartmentService.arrApartments=data);
  }
  filterByName(firstNmae,lastName)
  {
    this.ApartmentService.byName(firstNmae,lastName).subscribe(data=>this.ApartmentService.arrApartments=data);
  }
  filterByCity(city)
  {
    this.ApartmentService.byCity(city).subscribe(data=>this.ApartmentService.arrApartments=data);
  }
  ngOnInit() {
     this.ApartmentService.getAll().subscribe(data=>this.ApartmentService.arrApartments=data);
     
  }


  

}
