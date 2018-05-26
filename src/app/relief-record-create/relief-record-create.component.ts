import { Component, OnInit } from '@angular/core';
import { AreaService } from '../services/division.service';
import { NgModule } from '@angular/core';
import { Organization } from '../organization-create/organization-create.component';
import { OrganizationService } from '../services/organization.service';
import { DisasterRecord } from '../disaster-create/disaster-create.component';
import { DisasterService } from '../services/disaster.service';
import { Observable } from 'rxjs/Observable';
import { ReliefService } from '../services/relief.serivice';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-relief-record-create',
  templateUrl: './relief-record-create.component.html',
  styleUrls: ['./relief-record-create.component.css']
})
export class ReliefRecordCreateComponent implements OnInit {
 
  organizations: Organization[];
  divisions: any[];
  districts: any[];
  upazillas: any[];
  unions: any[];
  selectUnion:any
  selectedDisaster:any
  selectedOrganization:any
  itemAmount:any
  itemName:any
  receivedPepole:any
  amount:number
  rType:any
  relief:any
  description:any
  show: boolean = true;
  reliefType
  disasters: DisasterRecord[];
  dateOfDisttribution
  constructor(private reliefService: ReliefService, private service: AreaService,
    private orgService: OrganizationService,private disasterService: DisasterService
  ) { }

  ngOnInit() {
    Observable.combineLatest([
      this.service.getAll('/divisions'),
      this.orgService.getAll('/all'),
      this.disasterService.getAll('/all')
    ]).subscribe(combined => {
      this.divisions = combined[0];
      this.organizations =<Organization[]>  combined[1];
      this.disasters = <DisasterRecord[]> combined[2]
    });
    this.reliefType=true
    this.service
    
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
  createRelief(){
    let union = this.selectUnion.id;
     let organization = this.selectedOrganization.id;
     let disaster = this.selectedDisaster.id;
    if(this.reliefType){
      let amount = this.amount;
      this.rType = 'money'
       this.relief = {
          type:"money",amountInTaka:amount,noOfPeopleHelped:this.receivedPepole,
          description:this.description
      }
  }
  else{
    this.rType = 'itme'
    let itemAmount = this.itemAmount;
     let receivedPepole = this.receivedPepole;
     this.relief = {
       type:"item",name:this.itemName,amountInUnit:this.itemAmount,
       description:this.description
     }
  }
  
    // this.reliefService.createWithoutID(this.selectUnion,'/save');
     
    this.reliefService.createWithDateString(this.relief,"/save/"+union+"/"+disaster+"/"+
    organization,this.dateOfDisttribution)
    
  }
  

}
