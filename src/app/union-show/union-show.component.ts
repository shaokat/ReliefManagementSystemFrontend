import { Component, OnInit } from '@angular/core';
import { AreaService } from '../services/division.service';

@Component({
  selector: 'app-union-show',
  templateUrl: './union-show.component.html',
  styleUrls: ['./union-show.component.css']
})
export class UnionShowComponent implements OnInit {
  divisions: any[];
  districts: any[];
  upazillas: any[];
  unions: any[];
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
  getUnions(upazillaId) {
    this.service.getAllById(['/upazilla', '/unions'], upazillaId)
    .subscribe(unions => this.unions = unions);

  }

}
