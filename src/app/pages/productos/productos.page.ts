import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { HomePage } from '../../home/home.page';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  usuario: string;

  constructor(private activatedRoute: ActivatedRoute) { 
    //localStorage.getItem("name");
    //localStorage.getItem("email")

    this.activatedRoute.params.subscribe(data=>{
      this.usuario =  data['usuario'];
      console.log("PRODUCTOS USUARIO "+this.usuario);
      console.log("PRODUCTOS NAME " +localStorage.getItem("name"));
      console.log("PRODCUTOS EMAIL " +localStorage.getItem("email"));
    });

  }

  ngOnInit() {
    
  }

}
