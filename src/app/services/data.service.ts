import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http,Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) { }

  getAll(extUrl:string) {
    return this.http.get(this.url+extUrl)
      .map(response => response.json())
      .catch(this.handleError);
  }

  getAllById(extUrl:[string,string],id) { 
    let newUrl = this.url+extUrl[0]+'/'+id+''+extUrl[1];
    //console.log(newUrl)
    return this.http.get(newUrl)
      .map(response => response.json())
      .catch(this.handleError);    
  }
  getById(extUrl: String, id){
    const newUrl = this.url + extUrl + '/' + id;
    console.log(newUrl)
    return this.http.get(newUrl)
      .map(response => response.json())
      .catch(this.handleError);
  }

  createDivision(resource,exURL:string) {
    return this.http.post(this.url+exURL,resource)
      .map(response => response.json())
      .catch(this.handleError)
      .subscribe();
  }

  create(resource,extURL:[string,string],id) {
    let newUrl = this.url+extURL[0]+'/'+id+''+extURL[1];
    return this.http.post(newUrl,resource)
      .map(response => response.json())
      .catch(this.handleError)
      .subscribe();
  }

  update(resource, extURl: string) {
    const newUrl = this.url + extURl;
    console.log(newUrl);
    return this.http.patch(newUrl, resource)
      .map(response => response.json())
      .catch(this.handleError)
      .subscribe();
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .map(response => response.json())
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));
  
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
    
    return Observable.throw(new AppError(error));
  }
}
