import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Genero', url: '/genero', icon: 'male-female' },
    { title: 'Edad', url: '/edad', icon: 'hourglass' },
    { title: 'Universidades', url: '/uni', icon: 'people-circle' },
    { title: 'Clima RD', url: '/weather', icon: 'cloud' },
    { title: 'Contratame', url: '/contratame', icon: 'help-circle' },

  ];
  constructor() {}
}
