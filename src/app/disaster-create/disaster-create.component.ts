import { DisasterService } from './../services/disaster.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disaster-create',
  templateUrl: './disaster-create.component.html',
  styleUrls: ['./disaster-create.component.css']
})
export class DisasterCreateComponent implements OnInit {

  disasterType: string[];

  description: string;
  selectedType: string;
  distasterName: string;
  dateOfOccurance: string;
  record: DisasterRecord = {
    name: '',
    type: '',
    description: ''
  };

  constructor(private service: DisasterService) { }

  ngOnInit() {
    this.service.getAll('/types')
    .subscribe(type =>  this.disasterType = type  );
    this.description = 'intial';
    this.selectedType = 'Thunderstorms';
  }

  createDisaster(form) {
    this.record.name = this.distasterName;
    this.record.type = this.selectedType;
    this.record.description = this.description;

    this.service.createWithDateString(this.record, '/save', this.dateOfOccurance);

    this.distasterName = '';
    this.selectedType = '';
    this.dateOfOccurance = '';
    this.description = '';
  }

}
class DisasterRecord {
  name: String;
  type: string;
  description: string;
}
