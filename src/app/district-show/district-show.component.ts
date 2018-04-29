import { Component, OnInit } from '@angular/core';
import { AreaService } from '../services/division.service';

@Component({
  selector: 'app-district-show',
  templateUrl: './district-show.component.html',
  styleUrls: ['./district-show.component.css']
})
export class DistrictShowComponent implements OnInit {

  constructor(private service: AreaService) { }
divisions: any[];
districts: any[];
  ngOnInit() {
    this.service.getAll('/divisions')
    .subscribe(divisions => this.divisions = divisions);
  }
  getDistricts(divisoion) {
    this.service.getAllById(['/division', '/districts'], divisoion)
    .subscribe(districts => this.districts = districts);
  }

}
