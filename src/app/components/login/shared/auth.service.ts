import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../login.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from '../../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    public loggedUserSubject: BehaviorSubject<any>;
    public loggedInUser: Observable<any>;

  constructor(private http: HttpClient) {
    const getLoggedUser = localStorage.getItem('loggedInUser');
    this.loggedUserSubject = new BehaviorSubject(getLoggedUser);
    this.loggedInUser = this.loggedUserSubject.asObservable();
}

loginUser(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}login/`, { username, password })
        .pipe(
          map(response=> {
            localStorage.setItem('loggedInUser', JSON.stringify(response));
            this.loggedUserSubject.next(response);
            console.log(response);
            return response;
        }));
}

logoutUser() {
    localStorage.removeItem('loggedInUser');
    this.loggedUserSubject.next(null);
}
public get loggedInUserValue(){
    return this.loggedUserSubject.value;
}
}
