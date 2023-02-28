import { Component, OnInit } from '@angular/core';
import { ServiceGenderizeService } from 'src/app/services/serviceGender/service-genderize.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})

export class GeneroPage  {
  name = '';
  isMale: boolean | undefined;
  hidden :boolean = true; 

  constructor(private genderService: ServiceGenderizeService) {}

  onSubmit() {
    this.genderService.predictGender(this.name).subscribe((response: any) => {
      this.isMale = response.gender === 'male';
      this.hidden = false;
    });
  }

  hideDiv() {
    this.hidden = true;
  }
}