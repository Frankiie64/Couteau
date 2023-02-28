import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'genero',
    loadChildren: () => import('./views/genero/genero.module').then( m => m.GeneroPageModule)
  },
  {
    path: 'edad',
    loadChildren: () => import('./views/edad/edad.module').then( m => m.EdadPageModule)
  },
  {
    path: 'uni',
    loadChildren: () => import('./views/uni/uni.module').then( m => m.UniPageModule)
  }, 
  {
    path: 'weather',
    loadChildren: () => import('./views/weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'contratame',
    loadChildren: () => import('./views/contratame/contratame.module').then( m => m.ContratamePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
