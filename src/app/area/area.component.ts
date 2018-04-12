import { Component } from '@angular/core';
import { Http,Response,RequestOptions,Headers} from '@angular/http';


@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {
  divisions:any[];
  districts:any[];
 
  constructor(private http:Http){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    http.get('http://localhost:8080/areaWeb/allDivision')
    .subscribe(response =>{
    this.divisions = response.json();
  });
  }

  getDistrict(id) {
    
    //  this.http.get('http://localhost:8080/areaWeb/allDistrict/'+id)
    //  .subscribe(response =>{
    //  this.districts = response.json();
    //  console.log(this.districts);
    //  });
    let headers = new Headers();
headers.append('Content-Type', 'application/json');
let options = new RequestOptions({ headers: headers });
   
    let post ={id:2,name:"Dhaka"};
    this.http.post('http://localhost:8080/areaWeb/createDivision',JSON.stringify(post),options)
    .subscribe(response=>{
     console.log(response.json());
    });

  }
}
