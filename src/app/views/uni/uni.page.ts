import { Component } from '@angular/core';
import { UniService } from 'src/app/services/serviceUni/uni.service';


@Component({
  selector: 'app-uni',
  templateUrl: './uni.page.html',
  styleUrls: ['./uni.page.scss'],
})
export class UniPage {
  country: string = '';
  universities: any = [];
  list = false;

  constructor(private uniService: UniService) {}

  searchUniversities() {
    this.uniService.searchUniversities(this.country).subscribe((data) => {
      this.universities = data;
      this.list = true;
    });
  }

  volverAtras(){
    this.country = "";
    this.list = false;
  }
 
}
