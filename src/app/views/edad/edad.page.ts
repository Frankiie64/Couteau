import { Component, OnInit } from '@angular/core';
import { ServiceAgeService } from 'src/app/services/serviceAge/service-age.service';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage {

  name = '';
  result: { image: string, text: string } = { image: '', text: '' };
  showResult = false;

  constructor(private ageService: ServiceAgeService) {}

  onSubmit() {
    this.ageService.predictAge(this.name).subscribe((response: any) => {
      
      let age : number = response.age;
      this.getResult(age);

    });
  }


  private getResult(age: number) {
    if (age < 18) {
      this.result.image = 'https://media.metrolatam.com/2021/01/10/1258275241414391-0478d1661d61e8f29ae4d71aba65d3c1-1200x800.jpg';
      this.result.text = "Joven"
    } else if (age < 60) {
      this.result.image ='https://th.bing.com/th/id/OIP.5AldPiky1d1BheyEaduezgHaLD?w=232&h=346&c=7&o=5&pid=1.7';
      this.result.text = "Adulto"
    } else {
      this.result.image = 'https://th.bing.com/th/id/OIP.3V8sGJwk4ILk6cldCzMDsgHaE7?w=268&h=182&c=7&r=0&o=5&pid=1.7';
      this.result.text = "Anciano"
    }
    this.showResult = true
  }
  hideDiv() {
    this.showResult = false;
  }
}
