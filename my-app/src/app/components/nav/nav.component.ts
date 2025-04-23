import { Component, OnInit } from '@angular/core';
import { AdvertiserService } from 'src/app/services/advertiser.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public AdvertiserService:AdvertiserService) { }

  ngOnInit() {
  }

}
