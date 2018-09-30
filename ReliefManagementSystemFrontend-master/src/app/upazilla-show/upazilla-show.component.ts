import { Component, OnInit } from '@angular/core';
import { AreaService } from '../services/division.service';

@Component({
  selector: 'app-upazilla-show',
  templateUrl: './upazilla-show.component.html',
  styleUrls: ['./upazilla-show.component.css']
})
export class UpazillaShowComponent implements OnInit {

  divisions: any[];
  districts: any[];
  upazillas: any[];

  constructor(private service: AreaService) { }

  ngOnInit() {
    this.service
    .getAll('/divisions')
    .subscribe(divisions => this.divisions = divisions);
  }

  getDistricts(divId) {
    this.service
    .getAllById(['/division', '/districts'], divId)
    .subscribe(districts => this.districts = districts);
  }

  getUpazillas(distId) {
    console.log('method called with ' + distId);
    this.service
    .getAllById(['/district', '/upazillas'], distId)
    .subscribe(upazillas => this.upazillas = upazillas);
  }

}
