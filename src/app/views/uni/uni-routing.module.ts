import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniPage } from './uni.page';

const routes: Routes = [
  {
    path: '',
    component: UniPage
  },
  {
    path: 'listado',
    loadChildren: () => import('./componentes/listado/listado.module').then( m => m.ListadoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniPageRoutingModule {}
