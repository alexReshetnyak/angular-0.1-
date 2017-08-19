import { Injectable } from '@angular/core';
import { Optional } from '@angular/core';
import { Http, Response, Headers, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DemoService {
//  private isActive: boolean;
//   constructor(@Optional() private http: Http, @Optional() private config: any) {
//     if(config.isActive) {
//         this.isActive = config.isActive;
//         console.log("Params is set:" + this.isActive);
//     }  
//   }

   constructor(private http: Http) {}

  getText() {
    this.http.get('/README.MD', { responseType: ResponseContentType.Text })
      .subscribe(data => console.log(data), err => this.handleError(err));
  }


  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body   = err.json() || '';
      let error  = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }

}
