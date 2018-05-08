import { DisasterRecord } from './../disaster-create/disaster-create.component';
import { DisasterService } from './../services/disaster.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disaster-show',
  templateUrl: './disaster-show.component.html',
  styleUrls: ['./disaster-show.component.css']
})
export class DisasterShowComponent implements OnInit {

  disasters: DisasterRecord[];
  constructor(private service: DisasterService, private router: Router) { }

  ngOnInit() {
    this.service.getAll('/all')
    .subscribe(dis => {
      this.disasters = <DisasterRecord[]> dis;
    console.log(dis[1]) ; });
  }

  deleteDisaster(id: number) {
    this.service.delete('/delete', id);
    this.router.navigate(['/disaster/show']);
  }

}
