import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { console.log('Detail Service') }

  create(body: any) {
    return this.http.post<any>(`${environment.apiUrl}people/`, body)
  }

  read(id: any) {
    return this.http.get<any>(`${environment.apiUrl}people/${id}/`)
  }

  readAll() {
    return this.http.get<any>(`${environment.apiUrl}people/`)
  }

  update(id: any, body: any) {
    return this.http.patch<any>(`${environment.apiUrl}people/${id}/`, body)
  }

  delete(id: any) {
    return this.http.delete<any>(`${environment.apiUrl}people/${id}/`)
  }
}
