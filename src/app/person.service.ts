import { Injectable } from '@angular/core';
import { Person } from './Person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }

  getPersonData():Observable<Person[]>{
    
    return this.http.get<Person[]>('./assets/person.json');

  }
}
