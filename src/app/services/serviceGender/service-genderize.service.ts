import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceGenderizeService {

  private apiUrl = 'https://api.genderize.io/';

  constructor(private http: HttpClient) { }

  predictGender(name: string) {
    return this.http.get(`${this.apiUrl}?name=${name}`);
  }
}
