import { Component, OnInit } from '@angular/core';
import { ReliefService } from '../services/relief.serivice';
import { DisasterRecord } from '../disaster-create/disaster-create.component';
import { DisasterService } from '../services/disaster.service';
import { Organization } from '../organization-create/organization-create.component';
import { OrganizationService } from '../services/organization.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
@Component({
  selector: 'app-relief-record-show',
  templateUrl: './relief-record-show.component.html',
  styleUrls: ['./relief-record-show.component.css']
})
export class ReliefRecordShowComponent implements OnInit {
  relief:any[]
  reliefRecords:any[]
  reliefType
  fromDate
  toDate
  disasters: DisasterRecord[];  
  selectedDisaster
  organizations: Organization[];
  selectedOrganization
  constructor(
    private serivice: ReliefService,
    private disasterService: DisasterService,
    private orgService: OrganizationService
  ) { 
    this.reliefType="item";
  }

  ngOnInit() {
    // let MyDate = new Date();
    // this.fromDate =MyDate.getFullYear()+'-'+('0' + (MyDate.getMonth()+1)).slice(-2)
    // +'-'+('0' + MyDate.getDate()).slice(-2);
    // this.toDate =MyDate.getFullYear()+'-'+('0' + (MyDate.getMonth()+1)).slice(-2)
    // +'-'+('0' + (MyDate.getDate()+2)).slice(-2) 

    this.serivice.getAll("/all")
    .subscribe(records =>
      {this.relief=records;
       this.intializeWithTsDate();
       console.log(this.relief)
       this.reliefRecords = this.relief
      .filter(
        rf => rf.type.type === this.reliefType);
        
        //this.getByType();
      });
      Observable.combineLatest([
        this.orgService.getAll('/all'),
        this.disasterService.getAll('/all')
      ])
      .subscribe(combined => {
        this.organizations =<Organization[]>  combined[0];
        this.disasters = <DisasterRecord[]> combined[1]
      });
      

   
   
  }
  getByType(){
    console.log("tds")
    this.reliefRecords = this.relief
    .filter(
      rf => rf.type.type === this.reliefType);
   
    }
    intializeWithTsDate(){
      this.relief.forEach(reliefRecord => {
        let newdate = new Date(reliefRecord.timestamp.year,
          reliefRecord.timestamp.monthValue-1,
          reliefRecord.timestamp.dayOfMonth);
          reliefRecord["dod"]=newdate;
      });
    }

    getByDateRange(){
      console.log(this.fromDate)
      this.fromDate = new Date(this.fromDate).setHours(0,0,0,0);
      console.log(this.fromDate)
      this.toDate = new Date(this.toDate).setHours(0,0,0,0)
      console.log(this.fromDate)

      this.reliefRecords = this.relief
      .filter(rf =>  ( rf.dod >= this.fromDate && rf.dod <= this.toDate)
       && rf.type.type === this.reliefType);
      

    }
    getByDisaster(){
      console.log(this.selectedDisaster)
      this.reliefRecords = this.relief
      .filter(rf => (rf.disaster.name === this.selectedDisaster)
        && rf.type.type === this.reliefType);
    }
    getByOrganization(){
      this.reliefRecords = this.reliefRecords
      .filter(rf => (rf.organization.nameAcronym === this.selectedOrganization)
      && rf.type.type === this.reliefType);
    }
    combineSearch(){
      this.fromDate = new Date(this.fromDate).setHours(0,0,0,0);
      console.log(this.fromDate)
      this.toDate = new Date(this.toDate).setHours(0,0,0,0)
      this.reliefRecords = this.relief
      .filter(rf => (rf.disaster.name === this.selectedDisaster)
        && (rf.type.type === this.reliefType) && ( rf.dod >= this.fromDate && rf.dod <= this.toDate)
        && (rf.organization.nameAcronym === this.selectedOrganization))

    }

}
