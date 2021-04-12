import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-receta',
  templateUrl: './mi-receta.page.html',
  styleUrls: ['./mi-receta.page.scss'],
})
export class MiRecetaPage implements OnInit {

  pdfSrc: any = '';

  constructor() {

    this.pdfSrc = '/assets/receta.pdf';
    console.log(this.pdfSrc);

   }

  ngOnInit() {
  }

}
