import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado-uni',
  templateUrl: './listado-uni.component.html',
  styleUrls: ['./listado-uni.component.scss'],
})
export class ListadoUniComponent implements OnInit {

  @Input() listaUni: any[] = [];

  hasUni = false;


  constructor() { }

  ngOnInit() {
    this.hasUni = this.listaUni.length > 0;
  }


}
