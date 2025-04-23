import { Component, OnInit } from '@angular/core';
import { advertiser } from 'src/app/classes/advertiser';
import { AdvertiserService } from 'src/app/services/advertiser.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: string
  password: string
  constructor(public AdvertiserService: AdvertiserService) { }
  ngOnInit() {
  }
  connect() {
    debugger
    this.AdvertiserService.SignIn(this.email, this.password).subscribe(res=>{this.AdvertiserService.myAdvertiser=res
    if(this.AdvertiserService.myAdvertiser)
    {
      this.AdvertiserService.isBoolean=true
    }
  }, err => {
    console.error('Error:', err);
    alert('Error occurred while trying to sign in.');

  });
  }
  
}
