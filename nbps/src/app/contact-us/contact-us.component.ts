import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const mapProp = {
            center: new google.maps.LatLng(23.812852, 86.422713),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      const map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  }
}
