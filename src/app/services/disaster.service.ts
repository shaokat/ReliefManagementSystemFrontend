import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DisasterService extends DataService {
  constructor(http: Http) {
    super('https://powerful-retreat-90087.herokuapp.com/disaster', http);
   }
}
