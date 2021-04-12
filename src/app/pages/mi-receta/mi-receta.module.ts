import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiRecetaPageRoutingModule } from './mi-receta-routing.module';

import { MiRecetaPage } from './mi-receta.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiRecetaPageRoutingModule,
    PdfViewerModule
  ],
  declarations: [MiRecetaPage]
})
export class MiRecetaPageModule {}
