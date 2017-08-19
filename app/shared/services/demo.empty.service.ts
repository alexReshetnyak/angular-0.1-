import { Injectable } from '@angular/core';
import { Http, Response, Headers, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DemoEmptyService {
 
 constructor(private http: Http) {  }

  getText() {
    console.log("This is empty service");
  }


}
