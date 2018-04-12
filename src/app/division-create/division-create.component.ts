import { Component, OnInit } from '@angular/core';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { AreaService } from './../services/division.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-division-create',
  templateUrl: './division-create.component.html',
  styleUrls: ['./division-create.component.css']
})
export class DivisionCreateComponent implements OnInit {
private divisionName:any
  constructor(private service: AreaService) { }

  ngOnInit() {
  }
  createDivison(input: NgForm){
    
    let division = { name: input.value };
    console.log(division);
    this.service.createDivision(division,"/division");
  }
  show(divi:NgForm){
    let division1 = { name: divi.value };
    console.log(division1);
    //console.log(divi.value);
  }
}
