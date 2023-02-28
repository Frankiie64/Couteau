import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  listaUni: any[] = [];
  hasUni = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {

      let value = this.router.getCurrentNavigation();

      if(value == null){
        return;
      }
     
      if (value.extras.state) {
        this.listaUni = value.extras.state['listaUni'];
        this.hasUni = this.listaUni.length > 0;
      }
    });
  }

  volverAtras() {
    this.router.navigate(['uni']);
  }

}
