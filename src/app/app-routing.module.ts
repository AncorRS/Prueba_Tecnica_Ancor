import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'panel-usuario/:usuario',
    loadChildren: () => import('./pages/panel-usuario/panel-usuario.module').then( m => m.PanelUsuarioPageModule)
  },
  {
    path: 'mi-receta',
    loadChildren: () => import('./pages/mi-receta/mi-receta.module').then( m => m.MiRecetaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
