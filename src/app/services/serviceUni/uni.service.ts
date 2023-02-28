import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniService {

  private apiUrl = 'http://universities.hipolabs.com/search';

  constructor(private http: HttpClient) { }

  searchUniversities(country: string) {
    return this.http.get(`${this.apiUrl}?country=${country}`);
  }
}
