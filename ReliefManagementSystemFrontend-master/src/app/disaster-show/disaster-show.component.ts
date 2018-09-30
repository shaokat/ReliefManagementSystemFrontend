import { AppError } from './../common/app-error';
import { DisasterRecord } from './../disaster-create/disaster-create.component';
import { DisasterService } from './../services/disaster.service';
import { Component, OnInit } from '@angular/core';
import { Router, ɵROUTER_PROVIDERS } from '@angular/router';

@Component({
  selector: 'app-disaster-show',
  templateUrl: './disaster-show.component.html',
  styleUrls: ['./disaster-show.component.css']
})
export class DisasterShowComponent implements OnInit {

  disasters: DisasterRecord[];
  record: DisasterRecord;
  constructor(private service: DisasterService, private router: Router) { }

  ngOnInit() {
    
    this.load();
  }

  deleteDisaster(record: DisasterRecord) {
    const id = this.disasters.indexOf(record);
    this.disasters.splice(id, 1);
    this.service.delete('/delete', record.id)
    .subscribe(null, (error: AppError) => {
      throw error;
    });
  }
  redirect() {
    this.router.navigate(['./disaster/show']);
   // window.location.reload();
  }
  load() {
    this.service.getAll('/all')
    .subscribe(dis => {
      this.disasters = <DisasterRecord[]> dis;
    console.log(dis[1]) ; });
    }
}
