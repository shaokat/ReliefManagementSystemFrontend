import { Component, OnInit } from '@angular/core';
import { ReliefService } from '../services/relief.serivice';

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
  
  constructor(private serivice: ReliefService) { 
    this.reliefType="item";
  }

  ngOnInit() {
    this.serivice.getAll("/all")
    .subscribe(records =>
      {this.relief=records;
       this.intializeWithTsDate();
       this.reliefRecords = this.relief
      .filter(
        rf => rf.type.type === this.reliefType);
        this.getByType();
      });

   
   
  }
  getByType(){
   
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
      console.log(this.toDate)
      this.fromDate = new Date(this.fromDate);
      this.toDate = new Date(this.toDate)
      this.reliefRecords = this.reliefRecords
      .filter(rf => rf.dod >= this.fromDate && rf.dod <= this.toDate );
      

    }
    

}
