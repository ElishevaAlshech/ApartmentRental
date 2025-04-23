import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdvertiserService } from 'src/app/services/advertiser.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  myfrm:FormGroup = new FormGroup({
    "code":new FormControl(null,[Validators.required]),
    "firstName":new FormControl(null,[Validators.required,Validators.pattern("[a-zA-Z]*")]),
    "lastName":new FormControl(null,[Validators.required,Validators.pattern("[a-zA-Z]*")]),
    "email":new FormControl(null,[Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]+$')]),
    "password":new FormControl(null,[Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}")]),
    "phone":new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(10),Validators.minLength(10)]),
    "secondPhone":new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(10),Validators.minLength(10)])



  
  })

  constructor(public AdvertiserService:AdvertiserService) { }

  ngOnInit() {
  }
  getCode()
  {
    return this.myfrm.controls["code"]
  }
  getFirstName()
  {
    return this.myfrm.controls["firstName"]
  }
  getLastName()
  {
    return this.myfrm.controls["lastName"]
  }
  getEmail()
  {
    return this.myfrm.controls["email"]
  }
  getPassword()
  {
    return this.myfrm.controls["password"]
  }
  getPhone()
  {
    return this.myfrm.controls["phone"]
  }
  getSecondPhone()
  {
    return this.myfrm.controls["secondPhone"]
  }

  onSubmit()
  {
    debugger
    if(this.myfrm.valid)
      this.AdvertiserService.signUp(this.myfrm.value).subscribe();
    alert("נוסף בהצלחה")
    // getAll().subscribe(data=>this.ApartmentService.arrApartments=data);

  }
  

}
