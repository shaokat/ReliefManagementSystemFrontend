import { Component, OnInit } from '@angular/core';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { AreaService } from './../services/division.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-division-show',
  templateUrl: './division-show.component.html',
  styleUrls: ['./division-show.component.css']
})
export class DivisionShowComponent implements OnInit {
  divisions: any[];

  constructor(private service: AreaService, public auth: AuthService) { }

  ngOnInit() {
    this.service.getAll("/divisions")
    .subscribe( divisions => this.divisions = divisions );
    console.log(this.divisions);
  }

  

}
