import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListadoUniComponent } from './componentes/listado-uni/listado-uni.component';

import { IonicModule } from '@ionic/angular';

import { UniPageRoutingModule } from './uni-routing.module';

import { UniPage } from './uni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniPageRoutingModule
  ],
  declarations: [UniPage,ListadoUniComponent  ]
})
export class UniPageModule {}
