import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAgeService {
  private apiUrl = 'https://api.agify.io/';

  constructor(private http: HttpClient) { }

  predictAge(name: string) {
    return this.http.get(`${this.apiUrl}?name=${name}`);
  }
}
