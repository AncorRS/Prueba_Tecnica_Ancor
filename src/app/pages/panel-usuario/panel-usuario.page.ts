import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.page.html',
  styleUrls: ['./panel-usuario.page.scss'],
})
export class PanelUsuarioPage implements OnInit {

  usuario: string;
  email:any;

  constructor(private activatedRoute: ActivatedRoute) { 

    this.activatedRoute.params.subscribe(data=>{
      this.usuario =  data['usuario'];
      this.email = localStorage.getItem("email");
      console.log("PRODUCTOS USUARIO "+this.usuario);
      console.log("PRODUCTOS NAME " +localStorage.getItem("name"));
      console.log("PRODCUTOS EMAIL " +localStorage.getItem("email"));
    });
  }

  ngOnInit() {

  }

}
