import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User } from '../models/user';

@Injectable()
export class UserService {
  private userUrl: string = '/api/users';

  constructor(private http: Http) {}

  getUsers(): Observable<User[]> {
    let headers = new Headers();
    let token   = localStorage.getItem('auth_token');
    //headers.set('Content-Type', 'application/json');
    //headers.set('Authorization', `Bearer ${token}`);

    let params = new URLSearchParams();
    params.set("per_page", "9");

    return this.http.get(this.userUrl)
      .map(res => res.json())
      .map(users => users.map(this.toUser))
      .catch(this.handleError);
  }

  /**
   * Преобразовать данные "на лету" в тот формат который нужен нам
   */
  private toUser(user): User {
    //console.log(user);
    return {
      id: user._id,
      name: user.first_name,
      last_name: user.last_name,
      avatar: user.avatar
    };
  }

private toDBUser(user): any {
    return {
      first_name: user.name,
      last_name: user.last_name,
      avatar: user.avatar,
    };
  }

  getUser(id): Observable<User> {
    //console.log(id, 'service getUser');
    return this.http.get(`${this.userUrl}/${id}`)
      .map(res => res.json())
      .map(this.toUser)
      .catch(this.handleError);
  }

  createUser(user: User): Observable<User> {
    //return this.http.post(this.usersUrl, user)
    return this.http.post(this.userUrl, this.toDBUser(user))
      .map(res => res.json())
      .catch(this.handleError);
  }


  updateUser(user: User): Observable<User> {
    //return this.http.put(`${this.usersUrl}/${user.id}`, user)
    return this.http.put(`${this.userUrl}/${user.id}`, this.toDBUser(user))
      .map(res => res.json())
      .catch(this.handleError);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.userUrl}/${id}`)
      .catch(this.handleError);
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
