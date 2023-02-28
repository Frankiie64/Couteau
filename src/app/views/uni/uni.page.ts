import { Component } from '@angular/core';
import { UniService } from 'src/app/services/serviceUni/uni.service';
import { NavController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-uni',
  templateUrl: './uni.page.html',
  styleUrls: ['./uni.page.scss'],
})
export class UniPage {

  country: string = '';

  constructor(private uniService: UniService,public navCtrl: NavController) {}

  searchUniversities() {
    this.uniService.searchUniversities(this.country).subscribe((data) => {
      console.log(data)
      this.navCtrl.navigateForward('/listado', { state: { listaUni: data } });
    });
  }

 
}
