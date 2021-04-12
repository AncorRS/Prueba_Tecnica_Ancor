import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiRecetaPage } from './mi-receta.page';

const routes: Routes = [
  {
    path: '',
    component: MiRecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiRecetaPageRoutingModule {}
